const {Schema, model, Types } = require('mongoose');

const userSchema = new Schema ({
    username:{
        type:String,
        required: true,
        unique:true,
        trim:true,
    }, 
    emial: {
        type:String,
        required:true,
        unique:true,
        match:[/.+@.+\..+/, 'Must match an email address!'],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref:'Thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref:'User',
        },
    ],
},
{
    toJSON: {
        virtuals: true, //enables virtual properties to be displayed when a user document is transformed into JSON format.        
    }, 
    id: false,
}

);

//Defining a virtual property 'friend count' to return the # of friends in the friends array
userSchema.virtual('friendCount').get(function (){
    return this.friends.length;
});

//Creates the user model from userschema
const User = model('User', userSchema);
//Exporting the User Model as module
module.exports = User; 