import fetchCredentials from "@/functions/fetchCredentials";

const nodemailer = require("nodemailer");

const handler = async (req: any, res: any) => {
  if (req.method === "POST") {
    const data = req.body;
    const {
      name,
      email,
      phone,
      arrivalDate,
      departureDate,
      numberOfTravelers,
      packageName,
      destination,
      accommodation,
      activities,
      budget,
      currency,
      hearAboutUs,
      message,
    } = data;
    const credentials = fetchCredentials();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: credentials.email,
        pass: credentials.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const addBreaks = (str: string) => {
      return str.replace(/\n/g, "<br />");
    };
    const mailOptions = {
      from: credentials.email,
      to: credentials.email,
      subject: `Enquiry form from ${name}`,
      // text: ` Name: ${name} \n Email: ${email} \n Phone: ${phone}\n\n Message: ${message} `,
      text: ` Name: ${name} \n Email: ${email} \n Phone: ${phone}\n Arrival Date: ${arrivalDate}\n Departure Date: ${departureDate}\n Number of Travelers: ${numberOfTravelers}\n Package Name: ${packageName}\n Destination: ${destination}\n Accommodation: ${accommodation}\n Activities: ${activities}\n Budget: ${budget}\n Currency: ${currency}\n How did you hear about us?: ${hearAboutUs}\n\n Message: ${message} `,
      html: `<table style="max-width: 50rem;border-width: 1px; border-style: solid; border-color: rgb(199, 199, 199); box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 10px; border-radius: 0.25rem; padding: 20px; width: 465px; margin: 40px auto 40px auto;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" data-id="__react-email-container">
      <tbody>
      <tr style="width: 100%;">
      <td>
      <table style="margin-top: 30px;" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" align="center" data-id="react-email-section">
      <tbody>
      <tr>
      <td><img style="display: block; outline: none; border: none; text-decoration: none; margin: 0px auto 0px auto;" src="https://i.ibb.co/s1ggwh7/logo-dark.png" alt="Vercel" width="80" data-id="react-email-img"></td>
      </tr>
      </tbody>
      </table>
      <h1 style="color: rgb(0, 0, 0); font-size: 24px; font-weight: 400; text-align: center; padding: 0px; border-bottom: 3px solid rgb(199, 199, 199); width: fit-content; margin: 30px 0px 15px 0px; padding-bottom: 10px;" data-id="react-email-heading"><strong>Booking Report</strong></h1>
      <h2 style="margin: 0 0 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: #0c0d0e;"><strong>Customer Name</strong></h2>
      <p style="font-size: 15px; line-height: 21px; margin: 16px 0; color: #3c3f44;">${name}</p>
      <h2 style="margin: 0 0 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: #0c0d0e;"><strong>Customer Email</strong></h2>
      <p style="font-size: 15px; line-height: 21px; margin: 16px 0; color: #3c3f44;">${email}</</p>
      <h2 style="margin: 0 0 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: #0c0d0e;"><strong>Customer Phone</strong></h2>
      <p style="font-size: 15px; line-height: 21px; margin: 16px 0; color: #3c3f44;">${phone}</</p>
      <h2 style="margin: 0 0 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: #0c0d0e;"><strong>Arrival Date</strong></h2>
      <p style="font-size: 15px; line-height: 21px; margin: 16px 0; color: #3c3f44;">${arrivalDate}</</p>
      <h2 style="margin: 0 0 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: #0c0d0e;"><strong>Departure Date</strong></h2>
      <p style="font-size: 15px; line-height: 21px; margin: 16px 0; color: #3c3f44;">${departureDate}</</p>
      <h2 style="margin: 0 0 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: #0c0d0e;"><strong>Number of Travelers</strong></h2>
      <p style="font-size: 15px; line-height: 21px; margin: 16px 0; color: #3c3f44;">${numberOfTravelers}</</p>
      <h2 style="margin: 0 0 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: #0c0d0e;"><strong>Package</strong></h2>
      <p style="font-size: 15px; line-height: 21px; margin: 16px 0; color: #3c3f44;">${packageName}</</p>
      <h2 style="margin: 0 0 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: #0c0d0e;"><strong>Destination Preference</strong></h2>
      <p style="font-size: 15px; line-height: 21px; margin: 16px 0; color: #3c3f44;">${destination}</</p>
      <h2 style="margin: 0 0 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: #0c0d0e;"><strong>Transportation &amp; Accomodation</strong></h2>
      <p style="font-size: 15px; line-height: 21px; margin: 16px 0; color: #3c3f44;">${accommodation}</</p>
      <h2 style="margin: 0 0 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: #0c0d0e;"><strong>Activities &amp; Experiences</strong></h2>
      <p style="font-size: 15px; line-height: 21px; margin: 16px 0; color: #3c3f44;">${activities}</</p>
      <h2 style="margin: 0 0 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: #0c0d0e;"><strong>Budget Range</strong></h2>
      <p style="font-size: 15px; line-height: 21px; margin: 16px 0; color: #3c3f44;">${budget} ${currency}</</p>
      <h2 style="margin: 0 0 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: #0c0d0e;"><strong>Where did you hear about us?</strong></h2>
      <p style="font-size: 15px; line-height: 21px; margin: 16px 0; color: #3c3f44;">${hearAboutUs}</</p>
      <h2 style="margin: 0 0 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: #0c0d0e;"><strong>Message</strong></h2>
      <p style="font-size: 15px; line-height: 21px; margin: 16px 0; color: #3c3f44;">${
        message ? addBreaks(message) : ""
      }</</p>
      </td>
      </tr>
      </tbody>
      </table>`,
    };
    try {
      console.log("Sending Email...");
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Invalid request method" });
};

export default handler;
