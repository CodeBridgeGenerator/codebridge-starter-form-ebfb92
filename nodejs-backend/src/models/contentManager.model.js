    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'contentManager';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   fileUpload: { type: Boolean, default: false },
       cms: { type: Boolean, default: false },
       emailTemplates: { type: Boolean, default: false },
       messaging: { type: Boolean, default: false },
       dashboards: { type: Boolean, default: false },
       kambanBoards: { type: Boolean, default: false },
       adminDashboard: { type: Boolean, default: false },
       calendering: { type: Boolean, default: false },
       maps: { type: Boolean, default: false },
       booking: { type: Boolean, default: false },
       search: { type: Boolean, default: false },
       imageGallery: { type: Boolean, default: false },
       videoTube: { type: Boolean, default: false },
       audioPods: { type: Boolean, default: false },

            
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