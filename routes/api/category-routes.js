const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll().then(data=>{
    res.json(data)
  }).catch(err=>{
    res.status(500).json({msg:"no categories found error",err})
})
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id,{
    include:[{
      model:Product
    }]
  }).then(data=>{
    res.json(data)
  }).catch(err=>{
    res.status(500).json({msg:"no category found error",err})
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name:req.body.category_name
  }).then(data=>{
    res.json(data)
  }).catch(err=>{
    res.status(500).json({msg:"category creation error",err})
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value

  Category.update(req.body,{
    
      category_name:req.params.category_name
    },{
      where:{
        id:req.params.id
      },
    }).then(category=>{
      if(!category){
        res.status(404).json({msg:"no category found"})
      }
      res.json(category)
    }).catch(err=>{
      res.status(500).json({msg:"category update error",err})
    })
     
});
  // Category.findByPk(function (category) {
  //     return category.id === parseInt(req.params.id);
  // });
  // if(!category.id){
  //   res.status(404).json({msg:"category not found"})
  // }else{
  //   Category.update({
  //     category_name:req.body.category_name
  //   }).then(data=>{
  //     res.json(data)
  //   }).catch(err=>{
  //     res.status(500).json({msg:"category update error",err})
  //   })
  // }
// });

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
      id:req.params.id
    }
  }).then(data=>{
    res.json(data)
  }).catch(err=>{
    res.status(500).json({msg:"category deletion error",err})
  })
});

module.exports = router;
