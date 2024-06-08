const apiDoc = {
    swagger: '2.0',
    basePath: '/',
    info: {
      title: 'A getting started API.',
      version: '1.0.0'
    },
    definitions: {
      World: {
        type: 'object',
        properties: {
          name: {
            description: 'The name of this world.',
            type: 'string'
          }
        },
        required: ['name']
      }
    },
    paths: {}
  };
  
  export default apiDoc;