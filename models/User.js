const {Schema, model} = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: () => Promise.resolve(false),
                message: 'Email validation failed'
            }
        },
        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
            }
        ],
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User'
            }
        ]

    }
)

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});


const User = model('User', UserSchema);
// const user = new User();

user.email = 'test@test.co';
user.validate().catch(error => {
  assert.ok(error);
  assert.equal(error.errors['email'].message, 'Email validation failed');
});

module.exports= User