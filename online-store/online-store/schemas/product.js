export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'collectionID',
            title: 'CollectionID',
            type: 'number',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'model',
            title: 'Article',
            type: 'slug',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'priceRub',
            title: 'PriceRub',
            type: 'number',
        },
        {
            name: 'colors',
            title: 'Colors',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'sizes',
            title: 'Sizes',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'materials',
            title: 'Materials',
            type: 'string'
        },
        {
            name: 'like',
            title: 'Like 4 article',
            type: 'array',
            of: [{ type: 'number' }]
        }
    ]
}