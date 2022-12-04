var express = require('express');
var router = express.Router();
const registrationController = require("../controllers").registration;
const loginController = require('../controllers').login;
const postController = require('../controllers').post;
const userController = require('../controllers').user;
const commentController = require('../controllers').comment;
const likeController = require('../controllers').like;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sign_in', loginController.sign_in);
router.post('/sign_up', registrationController.sign_up)
router.post('/post', postController.create)
router.get('/post', postController.get)
router.get('/post/:postId', postController.index)
router.get('/user/:userId', userController.index)
router.get('/user', userController.index)
router.post('/user', userController.update)
router.get('/:postId/comment', commentController.index)
router.post('/comment', commentController.create)
router.post('/like', likeController.create)

module.exports = router;
