export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'userName',
            title: 'UserName',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string'
        },
        {
            name: 'about',
            title: 'About',
            type: 'string'
        },
        {
            name: 'website',
            title: 'Website',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
              })
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        },
    ]
}