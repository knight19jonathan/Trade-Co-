const { ProductTag } = require('../models');

const productTagData = [
    {
        productId: 1,
        tagId: 6,
    },
    {
        productId: 1,
        tagId: 7,
    },
    {
        productId: 1,
        tagId: 8,
    },
    {
        productId: 2,
        tagId: 6,
    },
    {
        productId: 3,
        tagId: 1,
    },
    {
        productId: 3,
        tagId: 3,
    },
    {
        productId: 3,
        tagId: 4,
    },
    {
        productId: 3,
        tagId: 5,
    },
    {
        productId: 4,
        tagId: 1,
    },
    {
        productId: 4,
        tagId: 2,
    },
    {
        productId: 4,
        tagId: 8,
    },
    {
        productId: 5,
        tagId: 3,
    },
    {
        productId: 6,
        tagId: 8,
    },
    {
        productId: 7,
        tagId: 10,
    },
];

const seedProductsTags = () => Product.bulkCreate(productTagData);

module.exports = seedProductsTags;