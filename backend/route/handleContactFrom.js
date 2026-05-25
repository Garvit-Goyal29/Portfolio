import express from 'express'
import handleContactFromController from '../controller/handleContactFromController.js'
const router = express.Router()
router.post("/handlecontactform",handleContactFromController)
export default router;