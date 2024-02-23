    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'hosting';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   customDomain: { type: Boolean, default: false },
       sit: { type: Boolean, default: '' },
       stg: { type: Boolean, default: '' },
       prod: { type: Boolean, default: '' },
       mir: { type: Boolean, default: '' },
       ddos: { type: Boolean, default: '' },
       ssl: { type: Boolean, default: '' },
       loadBalancer: { type: Boolean, default: '' },
       proxy: { type: Boolean, default: '' },

            
          },
          {
            timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };