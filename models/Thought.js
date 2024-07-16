const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema({
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  });
  
  module.exports = model('Thought', thoughtSchema);
// const thoughtSchema = new Schema (
//     {
//         thoughtText: {
//             type:String, 
//             required:'Please leave a thought!',
//             minlength: 1, 
//             maxlength: 200
//         },
//         createdAt: {
//             default: Date.now, 
//             get: timestamp => new Date(timestamp).toLocaleString(),
//         },
//         username: {
//             type:String, 
//             required: true
//         },
//         reactions: [reactionSchema],
//     },
//     {
//         toJSON: {
//             getters:true,
//             virtuals: true,
//         },
//         id: false,
//     }
// );

// thoughtSchema.virtual('reactionCount').get(function(){
//     return this.reaction.length;
// });

// const Thought = model('Thought', thoughtSchema); 

// module.exports = Thought; 