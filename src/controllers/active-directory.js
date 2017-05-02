const dotEnv = require('dotenv');
const ActiveDirectory = require('activedirectory');
const express = require('express');
const router = express.Router();

dotEnv.config();

const activeDir = new ActiveDirectory({
    url: process.env.ACTIVE_DIR_URL,
    baseDN: process.env.ACTIVE_DIR_BASE_DN,
    username: process.env.ACTIVE_DIR_USER,
    password: process.env.ACTIVE_DIR_PASSWORD
});

router.get('/:username', (req, res) => {
    activeDir.userExists(req.params.username, function (err, exists) {
        if (err) {
            res.send(JSON.stringify(err));
            return;
        }
        res.send(exists);
    });
});

module.exports = router;
