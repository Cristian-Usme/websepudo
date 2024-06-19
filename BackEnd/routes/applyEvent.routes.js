const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    console.log('Alguien está haciendo GET');
    res.send('Hiciste un GET');
});

router.post('/', async (req, res) => {
    console.log('Alguien está haciendo POST');
    res.send('Hiciste un POST');
});

module.exports = router;