const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
   res.send('Birthdays will be returned here')
});

module.exports = router;



