import mongoose from 'mongoose';

const hastagSchema = mongoose.Schema({
    name : [],
    images : [String]
})

var Hashtag = mongoose.model('Hastags',hastagSchema);

export default Hashtag;