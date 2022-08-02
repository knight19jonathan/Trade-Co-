//NOTE: replace the index.js file in the Develop/models folder with this one.  

// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'categoryId',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'categoryId',
  
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  // as: 'product_tags',
  foreignKey: 'productId',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // as: 'product_tags',
  foreignKey: 'tagId',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
