import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name : String,
    mail : String,
    photo : String,
    bio : String,
    password : String,
    followers : [String],
    following: [String],
    posts : [String]
})

var User = mongoose.model('Users',userSchema);

export default User;