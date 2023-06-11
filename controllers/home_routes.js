const router = require('express').Router();
const { Blog, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: Comment,
          attributes: ['id', 'content', 'date', 'user_id', 'blog_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ],
    });

    const blogs = blogData.map(blog => blog.get({ plain: true }));

    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'content', 'title', 'date'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'content', 'date', 'user_id', 'blog_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ],
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with that ID' });
      return;
    }

    const blogs = blogData.get({ plain: true });

    res.render('blog', {
      blogs,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      where: { user_id: req.session.user_id },
      attributes: ['id', 'title', 'content', 'date'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'content', 'date', 'user_id', 'blog_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ],
    });

    const blogs = blogData.map(blog => blog.get({ plain: true }));

    res.render('dashboard', {
      blogs,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard/new', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render('new', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err });
  }
});

router.get('/dashboard/edit', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render('edit', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err });
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
