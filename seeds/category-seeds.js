const { Category } = require('../models');

const categoryData = [
  {
    categoryName: 'Shirts',
  },
  {
    categoryName: 'Shorts',
  },
  {
    categoryName: 'Music',
  },
  {
    categoryName: 'Hats',
  },
  {
    categoryName: 'Shoes',
  },
  {
    categoryName: 'tacos',
  },
  {
    categoryName: 'home and garden',
  },
  {
    categoryName: 'armaments',
  },
  {
    categoryName: 'science fiction',
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
