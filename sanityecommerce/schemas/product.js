export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true, //hotspot is used to set a hotspot region for an image, so that the hotspot region never gets cropped even if the image is resized
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug', //slug is like an unique URL
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            },
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
    ],
}
