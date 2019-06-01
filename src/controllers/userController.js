const self = {}
const dbService = require('./../services/dbConnect')

self.getUser = async (req, res, next) => {
  const id = req.params.id

  try {
    const user = await dbService.getUser(id)
    return res.json(user)
  } 
  catch (e) {
    console.log('todo mal', e)
    return res.sendStatus(400)
  }    

} 

self.getUsers = async (req, res, next) => {
  try {
    const users = await dbService.getUsers()
    return res.json(users)
  } 
  catch (e) {
    console.log('todo mal', e)
    return res.sendStatus(400)
  }    

} 

self.saveUser = async (req, res, next) => {
  const data = req.body
  
  try {
    await dbService.saveUser(data)
    return res.status(200).json(data)
  } 
  catch (e) {
    console.log('todo mal', e)
    return res.sendStatus(400)
  }    

} 

self.modifyUser = async (req, res, next) => {
  const id = req.params.id
  const data = req.body

  try {
    await dbService.modifyUser(id, data)
    return res.status(200).json(data)
  } 
  catch (e) {
    console.log('todo mal', e)
    return res.sendStatus(400)
  }    

} 

module.exports = self;