import mongoose from 'mongoose';

const hastagSchema = mongoose.Schema({
    name : String,
    images : [String]
})

var Hashtag = mongoose.model('Hastags',hastagSchema);

export default Hashtag;