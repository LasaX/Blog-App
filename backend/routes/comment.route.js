import express from 'express';
const router =express.Router();
import verifyToken from '../middleware/verifyToken.js';
import Comment from '../model/comment.model.js'


// Post comment (protected route)
router.post('/post-comment', verifyToken, async (req, res) => {
    try {
        
        const { comment, postId, user } = req.body;
        const newComment = new Comment({
            comment,
            user,
            postId
        });
        await newComment.save();
        res.status(201).send({ message: 'Comment posted successfully', comment: newComment });
    } catch (error) {
        console.error('Error posting comment:', error);
        res.status(500).send({ message: 'Failed to post comment' });
    }
});

router.get('/total-comments', async (req, res) => {
    try {
        const totalComments = await Comment.countDocuments({});
        res.status(200).send({ totalComments });
    } catch (error) {
        console.error('Error fetching total comments:', error);
        res.status(500).send({ message: 'Failed to fetch total comments' });
    }
});


export default router;