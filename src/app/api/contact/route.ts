import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mailgun, { Interfaces } from 'mailgun.js';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function GET() {
    return NextRequest;
}

export async function POST(req: NextRequest) {
    const username = process.env.MAIL_USER;
    const password = process.env.MAIL_PASSWORD;
    const mailHost = process.env.MAIL_HOST;
    const myEmail = process.env.PERSONAL_EMAIL;
    const message = req.body;

    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});

    const transport = nodemailer.createTransport({
        service: 'Mailgun',
        host: mailHost,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
            api_key: process.env.MAIL_KEY,
            domain: process.env.MAIL_DOMAIN,
            user: username,
            pass: password,
        },
        // auth: {
        //     user: username,
        //     pass: password,
        // },
    } as SMTPTransport.Options);

    try {
        const result = await transport.sendMail({
            from: username,
            to: myEmail,
            subject: `Website activity from jkbook`,
            text: `${message}`,
            html: `<p>${message}</p>`,
        })
        console.log("rest=========", result);
        return NextResponse.json({ accepted: result.accepted, message: "Success: email was sent", status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "COULD NOT SEND MESSAGE", status: 405 })
    }
}