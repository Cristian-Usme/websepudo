const dotenv = require('dotenv');
dotenv.config();

const { Router } = require('express');
const bodyParser = require('body-parser');
const router = Router();
const multer = require('multer');
const nodemailer = require('nodemailer');
const pug = require('pug');

const upload = multer({ dest: 'uploads/' });

router.use(
    bodyParser.json({
        limit: "50mb",
    })
);

console.log('EMAIL_USER:', process.env.EMAIL_USER);

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASS
    },
});
transporter.verify()
    .then(() => {console.log('Conexión establecida con GMAIL');})
    .catch((err) => {console.error('No se pudo establecer la conexión con GMAIL:', err);});

router.get('/', async (req, res) => {
    console.log('Alguien está haciendo GET');
    res.send('Hiciste un GET');
});

router.post('/', upload.single('cv'), async (req, res) => {
    console.log(req.body);
    const { name, lastname, age, phone, email, message } = req.body;
    const cv = req.file;

    const mailParams = {
        from: process.env.EMAIL_USER,
        to: 'oscara22a.r@gmail.com',
        cc: email,
        subject: `Candidato One Logística - ${name} ${lastname}`,
        html: pug.renderFile('mail.pug', {
            name: name,
            lastname: lastname,
            age: age,
            message: message,
            email: email,
            phone: phone}),
        attachments: [
            {
                filename: cv.originalname,
                content: cv.buffer
            }
        ]
    };

    transporter.sendMail(mailParams, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            return res.status(500).send({ message: 'Error al enviar el correo' });
        }
        console.log('Correo enviado:', info.response);
        return res.status(200).send({ message: 'Datos procesados correctamente y enviados' });
    });
});

module.exports = router;