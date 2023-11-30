import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    image : String,
    owner : String,
    title : String,
    tags : [String]
})

var Post = mongoose.model('Posts',postSchema);

export default Post;