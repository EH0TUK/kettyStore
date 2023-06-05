export default {
    name: 'main_banner',
    title: 'Main_banner',
    type: 'document',
    fields: [
        {
            name: 'imageBig',
            title: 'ImageBig',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'imageSmall',
            title: 'ImageSmall',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'mainText',
            title: 'MainText',
            type: 'string',
        },
        {
            name: 'descText',
            title: 'DescText',
            type: 'string',
        }
    ],
  };