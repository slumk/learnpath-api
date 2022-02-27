import mongoose from 'mongoose'
const modSchema = new mongoose.Schema(
	{
		learner_id: {
			type: mongoose.Types.ObjectId,
			ref: 'Learner',
			required: true
		},
		gender: {
			type: String,
			required: true,
			enum: [ 'M', 'F', 'Trans', 'Other' ]
		},
		region: {
			type: String,
			required: true,
			enum: ['Asia Pacific', 'Americas', 'Europe', 'Middle East']
		},
		age: {
			type: Number,
			required: true
		},
	}
)

export const modModel = mongoose.model('Moderators', modSchema)