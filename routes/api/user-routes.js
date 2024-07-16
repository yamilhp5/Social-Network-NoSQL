const router = require('express').Router(); 

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    removeFriend,

} = require('../../controllers/user-controller');

//GET and POST all users
router.route('/').get(getAllUsers).post(createUser);

// GET userId, PUT update user id and DELETE user by id
router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUserById);

//POST add friend and DELETE remove friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router; 


