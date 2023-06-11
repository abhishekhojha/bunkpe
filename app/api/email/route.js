const nodemailer = require('nodemailer');
import { NextResponse } from 'next/server'
require('dotenv').config();
export async function POST(request) {
    let data = await request.json();
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });
    
    let mailDetails = {
        from: process.env.MAIL_FROM,
        to: process.env.SMTP_USER,
        subject: 'Contact mail',
        html: data.html
    };
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log(err)
        } else {
            console.log(data)
        }
    });
    return NextResponse.json({ message: 'sent' }, { status: 200 })
}