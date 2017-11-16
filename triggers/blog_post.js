const listRecipes = (z, bundle) => {

  const requestOptions = {
    url: 'http://57b20fb546b57d1100a3c405.mockapi.io/api/recipes',
    params: {
      style: bundle.inputData.style
    }
  };

  return z.request(requestOptions)
    .then((response) => JSON.parse(response.content));
};


module.exports = {
  key: 'blog_post',

  noun: 'Blog_Post',
  display: {
    label: 'New Blog Post',
    description: 'Trigger when a new recipe is added.'
  },

  operation: {

    inputFields: [
      {key: 'style', type: 'string',  helpText: 'Which styles of cuisine this should trigger on.'}
    ],

    perform: listRecipes

  },

};
