    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'ecommerce';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   subscription: { type: Boolean, default: false },
       payments: { type: Boolean, default: '' },
       transfers: { type: Boolean, default: '' },
       billings: { type: Boolean, default: '' },
       plans: { type: Boolean, default: false },
       invoicing: { type: Boolean, default: '' },
       shoppingcart: { type: Boolean, default: '' },
       marketPlace: { type: Boolean, default: '' },
       productManagement: { type: Boolean, default: '' },
       inventorySystem: { type: Boolean, default: '' },

            
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