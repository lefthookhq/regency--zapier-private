const test = (z, bundle) => {

  return z.request({
    url: 'https://api.hubapi.com/content/api/v2/blog-posts',
  }).then((response) => {
    if (response.status === 400) {
      throw new Error(`Authentication failed due to the following error. ${response}`);
    }
    return response;
  });
};

module.exports = {
  type: 'custom',
  fields: [{
      key: 'apiKey',
      type: 'password',
      required: true,
      label: 'API Key',
      helpText: "You can find your Hubspot API Key by navigating to Settings > Integrations > API key."
    }
  ],
  test: test
};