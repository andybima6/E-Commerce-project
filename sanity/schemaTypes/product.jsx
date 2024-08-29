export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'product Name',
      type: 'string',
    },
    {
        name: 'description',
        title: 'Product Description',
        type: 'string',
      },
      {
        name: 'price',
        title: 'product Price',
        type: 'number',
      },
      {
        name: 'price_id',
        title: 'Stripe Product Price',
        type: 'string',
      },
      {
        name: 'images',
        title: 'product Images',
        type: 'array',
        of: [{type: 'image'}]
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference',to:{type:'category'}}]
      },
  ],
}
