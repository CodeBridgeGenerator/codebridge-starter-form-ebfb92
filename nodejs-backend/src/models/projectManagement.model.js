    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'projectManagement';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   projectDocumentation: { type: Boolean, default: false },
       minutesOfmeeting: { type: Boolean, default: false },
       projectCharter: { type: Boolean, default: false },
       projectUATSignOff: { type: Boolean, default: false },
       projectMigrationSignOff: { type: Boolean, default: false },
       productionMigration: { type: Boolean, default: false },
       goLive: { type: Boolean, default: false },
       projectDelivered: { type: Boolean, default: false },
       maintenance: { type: Boolean, default: false },

            
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