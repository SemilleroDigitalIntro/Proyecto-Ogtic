import nodemailer from 'nodemailer';
const userGmail = 'gobagendatucita@gmail.com';
const toUserGmail = 'nashlamissel27@gmail.com'
const passAppGmail = 'nqti giec bswu hxlu';

export default function SendEmail(){
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: userGmail,
            pass: passAppGmail
        },
    });

    const mailOptions = {
        from: userGmail,
        to: toUserGmail,
        subject: 'TESSSTTT',
        text:'SU CITA HA SIDO CONFIRMADA', 
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            console.log('error')
        }
        console.log('ENVIADOO: ' + info.response);
    });
};




SendEmail()