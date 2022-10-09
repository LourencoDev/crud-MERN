const express = require('express');
const router = express.Router();

router.get('/', (req,res) => res.send('Get request'))

//Export the router
module.exports = router