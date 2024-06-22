const { Router } = require('express');
const bodyParser = require('body-parser');
const router = Router();
const multer = require('multer');

var upload = multer();

router.use(
    bodyParser.json({
        limit: "50mb",
    })
);

// router.use(
//     bodyParser.urlencoded({
//         limit: "50mb",
//         extended: true,
//     })
// );

router.use(upload.array());

router.get('/', async (req, res) => {
    console.log('Alguien está haciendo GET');
    res.send('Hiciste un GET');
});

router.post('/', async (req, res) => {
    console.log(req.body);
    return res.status(200).send({ message: 'Datos procesados correctamente' });
});

module.exports = router;