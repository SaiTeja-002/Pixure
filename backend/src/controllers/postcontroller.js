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
        logger.error(`Create Post Error (At Post) : ${error}`);
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
        const startTime = console.time('Title Search');
        let title = req.params.title;
        let uid = req.body.userId;

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
        let filteredPosts = posts.filter(post => post.owner !== uid);
        let modifiedPosts = await extractOwnerInfo(filteredPosts);

        const endTime = console.timeEnd('Title Search');
        const processingTime = endTime - startTime;
        logger.info(`Search By Title Time :${processingTime}`);

        res.status(200).json({ posts: modifiedPosts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
        logger.error(`Title Search Error : ${error}`);
    }
};

//Returns 20 Random Posts
export const randomPosts = async (req, res) => {
    try {
        let randomPosts = await Post.aggregate([
            { $sample: { size: 20 } }
        ]);
        let uid = req.body.userId;

        let postIds = randomPosts.map(post => post._id);
        let posts = await extractPostsFromList(postIds);
        let filteredPosts = posts.filter(post => post.owner !== uid);
        let modifiedPosts = await extractOwnerInfo(filteredPosts);

        res.status(200).json({ posts: modifiedPosts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
        logger.error(`Fetch Feed Error : ${error}`);
    }
};

//Updates Title of the Post
export const editTitle = async (req, res) => {
    try {
        const postIdToUpdate = req.body.postId;
        const newTitle = req.body.title;

        const updatedPost = await Post.findByIdAndUpdate(postIdToUpdate, { title: newTitle });

        if (updatedPost) {
            return res.status(200).json({ message: 'Post title updated successfully'});
        } else {
            return res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
        logger.error(`Edit Title Error : ${error}`);
    }
};

// Deletes the Post
export const removePost = async (req, res, next) => {
    try {
        const postIdToDelete = req.body.postId;
        const postToDelete = await Post.findById(postIdToDelete);

        if (!postToDelete) {
            return res.status(404).json({ message: 'Post not found' });
        }

        //Deleting Post
        const deletedPost = await Post.findByIdAndDelete(postIdToDelete);

        if (deletedPost) {
            const tags = postToDelete.tags;
            req.body.tags = tags;
            next();
        } else {
            return res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
        logger.error(`Remove Post (At Post) : ${error}`);
    }
};





