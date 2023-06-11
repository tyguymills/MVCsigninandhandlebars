const {Blog} = require('../models')

const blogData = [
    {   
        title: "Example post",
        content: "Example",
        date: "5/10/2023",
        user_id: 1,
    },
    {
        title: "Example post 2",
        content: "Example2",
        date: "5/10/2023",
        user_id: 3,
    }
]

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
