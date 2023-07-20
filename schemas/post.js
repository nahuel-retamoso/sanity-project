export default {
    name: 'post',
    type: 'document',
      title: 'Post',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'content',
        type: 'string',
        title: 'Content'
      },
      {
        name: 'mainImage',
        type: 'image',
        title: 'Main image'
      }
    ]
  }