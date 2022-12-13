
const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Comment!',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'More Comments!',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'WOW!',
    user_id: 3,
    post_id: 10
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;