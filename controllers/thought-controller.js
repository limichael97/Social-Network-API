const { Thought, User} = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err)
            res.status(400).json(err);

        });

    },

    getThoughtByID({params}, res) {
        console.log(params)
        Thought.findOne({_id:params.thoughtId})
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No thought found with this id!'})
                return;
            }
            res.json(dbUserData)
        })        
        .catch(err => {
            console.log(err)
            res.status(400).json(err);

        });
    },
    addThought({params, body}, res) {
        console.log(body)
        console.log(params)
        Thought.create(body)
            .then(({_id }) => {
                console.log(_id)
                return User.findOneAndUpdate(
                    {_id: params.userId},
                    { $push: {thoughts: _id}},
                    { new: true}
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({message: 'No user found with this id'})
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => res.json(err))
    },

    updateThought({params, body}, res) {
        console.log(params)
        Thought.findOneAndUpdate({_id:params.thoughtId}, body, {new:true, runValidators: true})
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: 'No thought found with this id'})
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => res.status(err))
    },

    deleteThought({params}, res) {
        console.log(params)
        Thought.findOneAndDelete({_id: params.thoughtId})
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({message:'No thought found with this id'})
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => res.status(err))
    },

    addReaction({ params, body}, res ) {
        Thought.findOneAndUpdate(
            
            {_id: params.thoughtId},
            { $push: {reactions: body}},
            {new: true, runValidators:true}
        )
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: 'No thought found with this id'})
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => res.json(err))
    },

    deleteReaction({ params}, res ) {
        console.log(params)
        Thought.findOneAndUpdate(
            
            {_id: params.thoughtId},
            { $pull: {reactions: { reactionId: params.reactionId}}},
            {new: true, runValidators:true}
        )
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: 'No thought found with this id'})
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => res.json(err))
    }
}

module.exports = thoughtController