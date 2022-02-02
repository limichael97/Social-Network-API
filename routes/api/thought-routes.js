const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtByID,
    updateThought,
    deleteThought,
    addThought,
    addReaction,
    deleteReaction

} =require( '../../controllers/thought-controller')

router.route('/')
    .get(getAllThoughts)

router.route('/:thoughtId')
    .get(getThoughtByID)
    .put(updateThought)
    .delete(deleteThought)

router.route('/:userId')
    .post(addThought)

router.route('/:thoughtId/reaction')
    .post(addReaction)

router.route('/:thoughtId/:reactionId')
    .delete(deleteReaction)

module.exports = router;