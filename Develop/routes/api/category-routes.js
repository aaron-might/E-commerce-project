const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll(
    // be sure to include its associated Products
    {
      include: [
        {
          model: Product,
          attributes:['id','product_name','price','stock','category_id']
        }
      ]
  }
  )
  .then(dbCategoryData=> res.json(dbCategoryData))
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  });

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    // be sure to include its associated Products
    include: [
      {
        model: Product,
        attributes:['id','product_name','price','stock','category_id']
      }
    ]
  }).then(dbCategoryData=>{
    if (!dbCategoryData){
      res.status(404).json({message:'No category found with this particular id'});
      return
    }
    res.json(dbCategoryData);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category;
  console.log(req.body);
  Category.create(
    req.body 
  )
  .then((dbCategoryData) =>res.status(200).json(dbCategoryData))
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  console.log(req.params.id);
  console.log(req.body);
  Category.update(req.body,{
    where: {
        id:req.params.id
    }
  })
  .then(dbCategoryData => {
    return res.status(200).json(dbCategoryData);
  })
  .catch((err) => {
    console.log(err);
    return res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
   where: {
    id:req.params.id
    }
  })
  .then(dbCategoryData => {
    if(!dbCategoryData){
      res.status(404).json({message: 'No category found with this particular id'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
