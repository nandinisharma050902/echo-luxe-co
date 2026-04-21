const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const NOTIFICATION_EMAIL = "reema.singhal@bantermarketodigi.com";

interface BookingData {
  studio: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  addons: string[];
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { studio, date, time, name, email, phone, addons } = (await req.json()) as BookingData;

    if (!studio || !date || !time || !name || !email || !phone) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (phone.replace(/\D/g, "").length < 10) {
      return new Response(JSON.stringify({ error: "Invalid phone number" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const submissionDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const addonsList = addons && addons.length > 0 ? addons.join(", ") : "None";

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (RESEND_API_KEY) {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            🎙️ New Studio Booking - Banter Studios
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background: #f9fafb;"><td style="padding: 12px; font-weight: bold; color: #374151; width: 140px;">Studio</td><td style="padding: 12px; color: #1f2937;">${studio}</td></tr>
            <tr><td style="padding: 12px; font-weight: bold; color: #374151;">Date</td><td style="padding: 12px; color: #1f2937;">${date}</td></tr>
            <tr style="background: #f9fafb;"><td style="padding: 12px; font-weight: bold; color: #374151;">Time</td><td style="padding: 12px; color: #1f2937;">${time}</td></tr>
            <tr><td style="padding: 12px; font-weight: bold; color: #374151;">Name</td><td style="padding: 12px; color: #1f2937;">${name}</td></tr>
            <tr style="background: #f9fafb;"><td style="padding: 12px; font-weight: bold; color: #374151;">Email</td><td style="padding: 12px; color: #1f2937;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 12px; font-weight: bold; color: #374151;">Phone</td><td style="padding: 12px; color: #1f2937;"><a href="tel:${phone}">${phone}</a></td></tr>
            <tr style="background: #f9fafb;"><td style="padding: 12px; font-weight: bold; color: #374151;">Add-ons</td><td style="padding: 12px; color: #1f2937;">${addonsList}</td></tr>
            <tr><td style="padding: 12px; font-weight: bold; color: #374151;">Submitted On</td><td style="padding: 12px; color: #1f2937;">${submissionDate}</td></tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">This email was sent automatically from the Banter Studios booking form.</p>
        </div>
      `;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Banter Studios <onboarding@resend.dev>",
          to: [NOTIFICATION_EMAIL],
          subject: `New Booking: ${name} - ${studio}`,
          html: emailHtml,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Email send failed:", errorText);
      } else {
        console.log("Booking email sent successfully");
      }
    } else {
      console.log("RESEND_API_KEY not set - booking received but email not sent");
      console.log("Booking details:", { studio, date, time, name, email, phone, addons, submissionDate });
    }

    return new Response(JSON.stringify({ success: true, message: "Booking submitted successfully" }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing booking:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});