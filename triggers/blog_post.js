let _ = require('underscore');

const listRecipes = (z, bundle) => {

  var date = (Date.now() - 28800000);

  const requestOptions = {
    url: 'https://api.hubapi.com/content/api/v2/blog-posts',
    params: {
      limit: 500,
      updated__gte: date,
      order_by: '-updated'
    }
  };

  return z.request(requestOptions)
    .then((response) =>{ 
      if(response.status !== 200){
        throw Error(`Unexpected status code. ${response.status}`);
      }
      
      
      var parsed = JSON.parse(response.content).objects;
      parsed.forEach(function(blog_post) {
      blog_post.originalId = blog_post.id;
      blog_post.id = blog_post.id + '-' + blog_post.updated;
    });
      if(parsed.length === 0){
        return []
      }
      
      //sort by updated id
      // var sorted = _.sortBy(parsed, 'updated').reverse();
      
      return parsed;
    });
};


module.exports = {
  key: 'blog_post',

  noun: 'Blog_Post',
  display: {
    label: 'Updated Blog Post',
    description: 'Trigger when a blog post is updated'
  },

  operation: {
    perform: listRecipes
  },

};
