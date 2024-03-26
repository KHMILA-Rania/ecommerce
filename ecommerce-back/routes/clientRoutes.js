const express=require('express');
const router = express.Router();
const clientController = require('../controllers/clientController')

router.post('/addClient',clientController.createClient);
router.get('/all',clientController.getAllClients);
router.delete('/remove',clientController.deleteClient);
router.get('/:id',clientController.getClientById);
router.patch('/update/:id',clientController.updateClient)

module.exports = router;