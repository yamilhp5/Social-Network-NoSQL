const {Schema, Types} = require('mongoose');

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required:true,
            maxlength:200
        }, 
        username: {
            type:String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now, 
            get: timestamp => new Date(timestamp).toLocaleDateString()
        },        
    }, 
    {
        toJSON: {
            getters: true,
        }, 
        id: false, 
    }
);

module.exports = reactionSchema; 