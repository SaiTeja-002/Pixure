import User from '../models/users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { extractPostsFromList } from './postcontroller.js';

//User signUp Function: Returns Cookie
export const signUp = async (req, res) => {
    try {
        var name = req.body.name;
        var password = req.body.password;
        var email = req.body.email;

        let existingUser = await User.findOne({ email: email, name: name });

        if (existingUser) { // 400 - Bad Rquest
            return res.status(400).json({ message: 'User already exists' });
        }
        let hashedPassword = await bcrypt.hash(password, 12); //Password Hashing
        let newUser = new User({
            name: name,
            photo: "",
            bio: "",
            password: hashedPassword,
            mail: email,
            followers: [],
            following: [],
            posts: [],
        });
        await newUser.save(); //Saving User to Db

        //Cookie Generation
        let token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

        res.status(201).json({ cookie: token }); //201 - Successful Creation
    } catch (error) {  //Unexpected Failure
        res.status(500).json({ message: 'Something went wrong' });
    }
}

//User login Function: Returns Cookie
export const login = async (req, res) => {
    try {
        var name = req.body.name;
        var password = req.body.password;

        let existingUser = await User.findOne({ name: name });

        if (!existingUser) { // 401 - Unauthorized
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) { // 401 - Unauthorized
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate a token for the authenticated user
        let token = jwt.sign({ id: existingUser._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

        res.status(200).json({ cookie: token }); // 200 - OK
    } catch (error) {  // Unexpected Failure
        res.status(500).json({ message: 'Something went wrong' });
    }
}

//User login Function: Return User Info
export const getInfo = async (req, res) => {
    try {
        var userId = req.body.userId;

        let user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        let name = user.name;
        let bio = user.bio;
        let photo = user.photo;

        res.status(200).json({ "name": name, "bio": bio, "photo": photo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};


// Utility Function : Given List of UserIds returns their info
const extractInfoFromList = async (userIds) => {
    try {
        const users = await User.find({ _id: { $in: userIds } });

        const userInfoList = users.map((user) => {
            return {
                name: user.name,
                bio: user.bio,
                photo: user.photo,
            };
        });

        return userInfoList;
    } catch (error) {
        console.error(error);
        throw new Error('Error Fetching Info From List');
    }
};


// Returns a followers & following list
export const getSocialList = async (req, res) => {
    try {
        var userId = req.body.userId;

        let user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Get user information for followers and following
        const followersInfo = await extractInfoFromList(user.followers);
        const followingInfo = await extractInfoFromList(user.following);

        res.status(200).json({
            followers: followersInfo,
            following: followingInfo,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

//Returners Posts
export const getPosts = async (req,res) => {
    try{
        let userId = req.body.userId;
        let user = await User.findById(userId);

        if(!user){
            return res.status(404).json({message : 'User not found'});
        }

        let posts = await extractPostsFromList(user.posts);
        
        //Removing Owner field - Already Known
        posts = posts.map(post => ({ title: post.title, image: post.image }));

        res.status(200).json({posts : posts});

    }catch(error){
        console.error(error);
        res.status(500).json({message : "Something went wrong"});
    }
}

//Returns True if Username is Available
const isUsernameAvailable = async (username) => {
    const existingUser = await User.findOne({ name: username });
    return !existingUser;
};

//Updates "fields" in User with the ones in "values"
export const updateInfo = async (req, res) => {
    try {
        let userId = req.body.userId;
        let fields = req.body.fields;
        let values = req.body.values;

        const otherFields = ['bio', 'photo'];
        const validFieldsToUpdate = {};

        for (let index = 0; index < fields.length; index++) {
            const field = fields[index];
            if ((field == "name" && await isUsernameAvailable(values[index]))) {
                validFieldsToUpdate[field] = values[index];
            }
            else if (otherFields.includes(field)) {
                validFieldsToUpdate[field] = values[index];
            }
        }

        // Updating Fields
        const updatedUser = await User.findByIdAndUpdate(userId, { $set: validFieldsToUpdate }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(validFieldsToUpdate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

//Follows The Specified User
export const followUser = async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        const otherUserName = req.body.account;

        const otherUser = await User.findOne({ name: otherUserName });
        if (!otherUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        //Validity of the operation
        if (currentUser.following.includes(otherUser._id)) {
            return res.status(400).json({ message: 'You are already following this user' });
        }

        // Updating the respective lists
        currentUser.following.push(otherUser._id);
        otherUser.followers.push(currentUser._id);

        // Saving the changes to the database
        await Promise.all([currentUser.save(), otherUser.save()]);

        res.status(200).json({ message: `You are now following ${otherUserName}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

//UnFollows The Specified User
export const unfollowUser = async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        const otherUserName = req.body.account;

        const otherUser = await User.findOne({ name: otherUserName });
        if (!otherUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Validity of the operation
        if (!currentUser.following.includes(otherUser._id)) {
            return res.status(400).json({ message: 'You are not following this user' });
        }

        //Updating the respective lists
        currentUser.following = currentUser.following.filter(userId => userId.toString() !== otherUser._id.toString());
        otherUser.followers = otherUser.followers.filter(userId => userId.toString() !== currentUser._id.toString());

        // Saving the changes to the database
        await Promise.all([currentUser.save(), otherUser.save()]);

        res.status(200).json({ message: `You have unfollowed ${otherUserName}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

//Adds Post to User's List
export const addPost = async (req, res, next) => {
    try {
        const postId = req.body.postId; 
        const userId = req.body.userId; 

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        //Adding the Post & Saving To DB
        user.posts.push(postId);
        await user.save();

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

//Extracts info of Posts Owner
export const extractOwnerInfo = async(posts) =>{
    let newPosts = posts;
    for(let i=0;i<posts.length;i++){
        let post = newPosts[i];
        let owner = await User.findById(post.owner)
        newPosts[i].owner = owner.name;
        newPosts[i].photo = owner.photo;
    }
    return newPosts;
}

//Profile Info Of Queried User
export const profileInfo = async (req, res) => {
    try {
        let userName = req.params.name;

        let user = await User.findOne({ name: userName });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Extract Profile Info
        let profileInfo = {
            name: user.name,
            bio: user.bio,
            photo : user.photo,
            followersCount: user.followers.length,
            followingCount: user.following.length,
        };

        //Owner Field Id -> To Owner Name
        let posts =  await extractPostsFromList(user.posts);
        let modifiedPosts = posts.map(({ owner, ...rest }) => rest);
        profileInfo.posts = modifiedPosts;

        res.status(200).json(profileInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};