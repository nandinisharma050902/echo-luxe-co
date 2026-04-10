const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const NOTIFICATION_EMAIL = "reema.singhal@bantermarketodigi.com";

interface LeadData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message } = (await req.json()) as LeadData;

    // Validate inputs
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Phone validation (at least 10 digits)
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      return new Response(
        JSON.stringify({ error: "Invalid phone number" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const submissionDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Send email using Supabase's built-in SMTP (via Resend or similar)
    // We'll use a simple fetch to a mail API
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (RESEND_API_KEY) {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            🎙️ New Lead from Banter Studios
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background: #f9fafb;">
              <td style="padding: 12px; font-weight: bold; color: #374151; width: 140px;">Name</td>
              <td style="padding: 12px; color: #1f2937;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 12px; color: #1f2937;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 12px; font-weight: bold; color: #374151;">Phone</td>
              <td style="padding: 12px; color: #1f2937;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #374151;">Message</td>
              <td style="padding: 12px; color: #1f2937;">${message}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 12px; font-weight: bold; color: #374151;">Submitted On</td>
              <td style="padding: 12px; color: #1f2937;">${submissionDate}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
            This email was sent automatically from the Banter Studios website.
          </p>
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
          subject: `New Lead: ${name}`,
          html: emailHtml,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Email send failed:", errorText);
        // Still return success - lead is saved in DB
      } else {
        console.log("Email sent successfully");
      }
    } else {
      console.log("RESEND_API_KEY not set - lead saved but email not sent");
      console.log("Lead details:", { name, email, phone, message, submissionDate });
    }

    return new Response(
      JSON.stringify({ success: true, message: "Lead submitted successfully" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
