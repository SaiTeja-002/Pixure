import Post from '../models/posts.js';
import { extractOwnerInfo } from './usercontroller.js';

//Adds post to DB
export const createPost = async (req, res, next) => {
    try {
        let image = req.body.image;
        let owner = req.body.userId;
        let title = req.body.title;
        let tags = req.body.tags;

        let newPost = new Post({
            image: image,
            owner: owner,
            title: title,
            tags: tags
        });

        // Save post to the dB
        let savedPost = await newPost.save();
        req.body.postId = savedPost._id;

        //Goes To UserDB
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

//List of PostIds -> List of Post Json
export const extractPostsFromList = async (postIds) => {
    try {
        const posts = await Post.find({ _id: { $in: postIds } });

        const postInfoList = posts.map((post) => {
            return {
                image: post.image,
                title: post.title,
                owner: post.owner,
            };
        });

        return postInfoList;
    } catch (error) {
        console.error(error);
        throw new Error('Error Fetching Info From List');
    }
};

//Search By Title Feature
export const searchByTitle = async (req, res, next) => {
    try {
        let title = req.params.title;

        //Split into Terms Based on WhiteSpaces
        let searchTerms = title.split(/\s+/); 
        let regexPatterns = searchTerms.map(term => new RegExp(term, 'i'));

        //Regex Search to Atleast find One Term
        let similarPosts = await Post.find({
            $or: regexPatterns.map(pattern => ({ title: { $regex: pattern } }))
        });
        
        //Post Id -> Post with Raw Info -> Post With Right Info
        let postIds = similarPosts.map(post => post._id);
        let posts = await extractPostsFromList(postIds);
        let modifiedPosts = await extractOwnerInfo(posts);

        res.status(200).json({ posts : modifiedPosts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

//Returns 20 Random Posts
export const randomPosts = async (req, res) => {
    try {
        let randomPosts = await Post.aggregate([
            { $sample: { size: 20 } }
        ]);

        let postIds = randomPosts.map(post => post._id);
        let posts = await extractPostsFromList(postIds);
        let modifiedPosts = await extractOwnerInfo(posts);

        res.status(200).json({ randomPosts: modifiedPosts});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};


