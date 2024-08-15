const dotenv = require('dotenv');
dotenv.config();

const { Router } = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const nodemailer = require('nodemailer');
const pug = require('pug');
const fs = require('fs');
const path = require('path');

const router = Router();

router.use(
    bodyParser.json({
        limit: "50kb",
    })
);

console.log('EMAIL_USER:', process.env.EMAIL_USER);

// Configuración de Multer para almacenar archivos con nombres únicos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, 'uploads');
        console.log('Ruta de destino:', uploadPath); // Verifica la ruta de destino
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({
    dest: path.join(__dirname, 'uploads')
});

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
    .then(() => { console.log('Conexión establecida con GMAIL'); })
    .catch((err) => { console.error('No se pudo establecer la conexión con GMAIL:', err); });

router.get('/', async (req, res) => {
    console.log('Alguien está haciendo GET');
    res.send('Hiciste un GET');
});

router.post('/', upload.single('cv'), async (req, res) => {
    console.log(req.body);
    const { name, lastname, age, phone, email, message } = req.body;
    const cv = req.file;

    console.log('Archivo subido:', cv);

    if (!cv) {
        return res.status(400).send({ message: 'No se recibió ningún archivo' });
    }

    const filePath = path.join(__dirname, 'uploads', cv.filename);

    // Lee el contenido del archivo antes de enviarlo por correo
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).send({ message: 'Error al procesar el archivo adjunto' });
        }

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
                phone: phone
            }),
            attachments: [
                {
                    filename: cv.originalname,
                    content: data
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
});

module.exports = router;
