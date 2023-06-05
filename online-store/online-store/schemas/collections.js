export default {
    name: 'collections',
    title: 'Collections',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'collectionDesc',
            title: 'CollectionDesc',
            type: 'string',
        },
        {
            name: 'collectionNameRus',
            title: 'CollectionNameRus',
            type: 'string',
        },
        {
            name: 'collectionID',
            title: 'CollectionID',
            type: 'number',
        }
    ],
  };