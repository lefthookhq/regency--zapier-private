const test = (z, bundle) => {

  return z.request({
    url: 'https://api.hubapi.com/content',
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
      helpText: "Both your Knack Application ID and API Key are available in your builder’s settings which can be found by clicking the name of your app in the upper-left corner, then Settings, then API & Code."
    }
  ],
  test: test
};