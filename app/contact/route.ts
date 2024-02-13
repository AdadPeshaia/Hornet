import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  const data = "Hello, World";
  return Response.json({ data });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, tel, subject, message } = body;
  console.log(body);

  try {
    const data = await resend.emails.send({
      from: "hello@hornetebbepark.se",
      to: "Hornetebbepark@hotmail.com",
      reply_to: email,
      subject: "Contact form",
      html: `
        <!DOCTYPE html>
          <html>
          <head>
              <title>Nytt Meddelande Mottaget</title>
              <style>
                  body { 
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                      margin: 0; 
                      padding: 0; 
                      color: #333;
                  }
                  .container {
                      max-width: 100%; 
                      margin: auto; 
                      background: #fff;
                  }
                  .header { 
                      background-color: #CE6C47; 
                      padding: 20px; 
                      text-align: center; 
                      color: #fff; 
                  }
                  .content { 
                      padding: 20px; 
                      line-height: 1.6; 
                      border-bottom: 1px solid #eee;
                  }
                  .footer { 
                      background-color: #F7E1D7; 
                      padding: 10px; 
                      text-align: center; 
                      color: #000; 
                      font-size: 14px;
                  }
                  .footer a {
                      color: #fff; 
                      text-decoration: none;
                  }
                  .bold {
                      font-weight: bold;
                  }
              </style>
          </head>
          <body>
              <div class="container">
                  <div class="header">
                      <h2>Nytt Kontaktformulär Inskickat</h2>
                  </div>
                  <div class="content">
                      <p><span class="bold">Namn:</span> ${name}</p>
                      <p><span class="bold">E-post:</span> ${email}</p>
                      <p><span class="bold">Telefon:</span> ${tel}</p>
                      <p><span class="bold">Ämne:</span> ${subject}</p>
                      <p><span class="bold">Meddelande:</span> ${message}</p>
                  </div>
                  <div class="footer">
                      <p>&copy; 2024 Hörnet Ebbepark. Alla rättigheter förbehållna. </p>
                  </div>
              </div>
          </body>
          </html>
      
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
