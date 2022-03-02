import { Router } from 'express'
import { addMod, fetchAllLearners, fetchAllMods, removeMod } from './admin.controllers.js'

const adminRouter = Router()

adminRouter.get('/fetch/all/learners', async (req, res) => {
	const learnerData = await fetchAllLearners()
	if (learnerData) {
		return res.status(200).json(learnerData).end()
	}
	return res.status(404).end()
})

adminRouter.get('/fetch/all/mods', async (req, res) => {
	const modData = await fetchAllMods()
	if (modData) {
		return res.status(200).json(modData).end()
	}
	return res.status(404).end()
})

adminRouter.post('/register/new/mod', async (req, res) => {
	const { learner_id } = await req.body
	const isModRegistered = await addMod(learner_id)
	if (isModRegistered) {
		return res.status(202).end()
	}
	return res.status(400).end()
})

adminRouter.post('/destroy/mod', async (req, res) => {
	const { mod_id } = await req.body
	const isModDeleted = await removeMod(mod_id)
	if (isModDeleted) { 
		return res.status(202).end()
	}
	return res.status(400).end()
})

export default adminRouter