import express from "express";
import { getActiveCartForUser } from "../services/cartService";
const router = express.Router()


router.get('/', async (req, res) => {
  // To Do get the userId from the jwt, after vailditing from middleware
  const cart = await getActiveCartForUser({userId: "xxx"})
  res.status(200).send(cart)
})

export default router