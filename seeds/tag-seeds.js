const { Tag } = require('../models');

const tagData = [
  {
    tagName: 'rock music',
  },
  {
    tagName: 'pop music',
  },
  {
    tagName: 'blue',
  },
  {
    tagName: 'red',
  },
  {
    tagName: 'green',
  },
  {
    tagName: 'white',
  },
  {
    tagName: 'gold',
  },
  {
    tagName: 'pop culture',
  },
  {
    tagName: 'rose gold',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
