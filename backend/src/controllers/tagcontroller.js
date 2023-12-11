import Hashtag from '../models/hashtags.js';
import { extractPostsFromList } from './postcontroller.js';
import { extractOwnerInfo } from './usercontroller.js';

//Storing Post References Based On Tags for better Search
export const tagPost = async (req, res) => {
    try {
        let postId = req.body.postId;
        let tags = req.body.tags;

        for (const tag of tags) {
            let existingHashtag = await Hashtag.findOne({ name: tag });

            if (existingHashtag) {
                existingHashtag.images.push(postId);
                await existingHashtag.save();
            } else {
                const newHashtag = new Hashtag({
                    name: tag,
                    images: [postId],
                });
                await newHashtag.save();
            }
        }

        res.status(200).json({ message: 'Post Added Succesfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

//Returns Results of Hastags
export const searchHashtagsByName = async (req, res) => {
    try {
        let tag = req.query.tag;
        let uid = req.body.userId;

        //Pattern Searching
        const regex = new RegExp(tag, 'i');
        const matchingHashtags = await Hashtag.find({ name: { $regex: regex } });

        //Extracting Post Ids
        let postIds = [];
        for (const hashtag of matchingHashtags) {
            postIds = postIds.concat(hashtag.images);
        }

        //Post Id -> Post with Raw Info -> Post With Right Info
        let posts = await extractPostsFromList(postIds);
        let filteredPosts = posts.filter(post => post.owner !== uid);
        let modifiedPosts = await extractOwnerInfo(filteredPosts);

        res.status(200).json({ posts: modifiedPosts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

// Removes References of the post in tags
export const removePostReferences = async (req, res) => {
    try {
        const postTags = req.body.tags;
        const postId = req.body.postId;

        // Iterate through each tag & Remove References
        for (const tag of postTags) {
            const hashtag = await Hashtag.findOne({ name: tag });

            if (hashtag) {
                hashtag.images = hashtag.images.filter(imageId => imageId !== postId);
                await hashtag.save();
            }
        }

        res.status(200).json({ message: 'Post references removed successfully from tags' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};






