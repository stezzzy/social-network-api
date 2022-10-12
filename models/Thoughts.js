const {Schema, model} = require('mongoose');
const moment = require('moment');
const reactionSchema = require('Reactions');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: moment().format("L")
        },
        username: 
            {
            type: String,
            required: true,
            },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
        getters: true,
        },
        id: false,
    }
);

thoughtSchema.virtual("reactionCount").get(() => {
    return this.reactions.length;
})

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;