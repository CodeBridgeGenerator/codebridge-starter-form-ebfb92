    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'protection';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   rateLimiter: { type: Boolean, default: false },
       blocking: { type: Boolean, default: false },
       throttling: { type: Boolean, default: false },
       masking: { type: Boolean, default: false },
       redirect: { type: Boolean, default: false },
       mirror: { type: Boolean, default: false },
       ochestration: { type: Boolean, default: false },

            
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