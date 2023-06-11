const router = require('express').Router();

const userRoutes = require('./user_routes');
const blogRoutes = require('./Blogroutes')
const commentRoutes = require('./commentRoutes')

router.use('/blog', blogRoutes)
router.use('/users', userRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
