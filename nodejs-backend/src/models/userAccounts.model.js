    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'userAccounts';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   emailPassword: { type: Boolean, required: true, default: true },
       google: { type: Boolean, required: false, default: false },
       facebook: { type: Boolean, required: false, default: '' },
       linkedin: { type: Boolean, required: false, default: '' },
       github: { type: Boolean, required: false, default: '' },
       emailInvite: { type: Boolean, required: false, default: '' },

            
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