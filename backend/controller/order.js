import nodemailer from "nodemailer";

export const sendOrderEmail = async (req, res) => {
    const { name, email, number, quantity } = req.body;
  
    

    try {
        const transporter = nodemailer.createTransport({
            secure: false,
            host: "smtp-relay.brevo.com",
            port: 587,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.BREVO_KEY
            }
        });

        // Send email with AWAIT
        await transporter.sendMail({
            from: "picmactv@gmail.com",
            to: "abhishekhaabhai@gmail.com",
            subject: "Water Bottle Order",
            
            html: `
                <h3>New Order Received</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${number}</p>
                <p><b>Quantity:</b> ${quantity}</p>
            `
        });

        console.log("Email sent successfully");
        res.status(200).json({ message: "Order email sent" }); // Frontend gets success

    } catch (error) {
        console.error("Email error:", error.message);
        res.status(500).json({ message: "Email failed", error: error.message });
    }
};
