const {Comment} = require('../models')

const commentData = [
    {
        content: "Example",
        date: "5/10/2023",
        user_id: 1,
        blog_id: 2
    },
    {
        content: "Example2",
        date: "5/9/2023",
        user_id: 2,
        blog_id: 1
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;