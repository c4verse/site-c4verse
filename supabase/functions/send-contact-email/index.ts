import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// SMTP function using native Deno TCP connection
async function sendSMTPEmail(emailData: any, smtpConfig: any) {
  const { host, port, username, password, from, to, subject, text, replyTo } = smtpConfig;
  
  try {
    // Create TCP connection
    const conn = await Deno.connect({
      hostname: host,
      port: parseInt(port),
    });

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    // Helper function to send command and read response
    async function sendCommand(command: string): Promise<string> {
      await conn.write(encoder.encode(command + '\r\n'));
      const buffer = new Uint8Array(1024);
      const n = await conn.read(buffer);
      return decoder.decode(buffer.subarray(0, n || 0));
    }

    // SMTP conversation
    await sendCommand(''); // Initial greeting
    await sendCommand(`EHLO ${host}`);
    
    if (port === 465 || port === '465') {
      // SSL connection is already established
    } else {
      await sendCommand('STARTTLS');
    }
    
    await sendCommand('AUTH LOGIN');
    await sendCommand(btoa(username));
    await sendCommand(btoa(password));
    
    await sendCommand(`MAIL FROM:<${from}>`);
    await sendCommand(`RCPT TO:<${to}>`);
    await sendCommand('DATA');
    
    const emailContent = [
      `From: ${from}`,
      `To: ${to}`,
      `Reply-To: ${replyTo}`,
      `Subject: ${subject}`,
      `Content-Type: text/plain; charset=UTF-8`,
      '',
      text,
      '.'
    ].join('\r\n');
    
    await sendCommand(emailContent);
    await sendCommand('QUIT');
    
    conn.close();
    return 'Email sent successfully';
    
  } catch (error) {
    console.error('SMTP Error:', error);
    throw new Error(`SMTP sending failed: ${error.message}`);
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { name, email, company, phone, message, timestamp } = await req.json()

    // Create email content
    const emailSubject = `New Contact Form Submission from ${name}`
    const emailBody = `
New contact form submission received:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Timestamp: ${timestamp}

Message:
${message}

---
Please respond to this inquiry promptly.
C4Verse Contact System
    `

    // SMTP configuration with your provided credentials
    const smtpConfig = {
      host: 'mail.c4verse.com',
      port: '465',
      username: 'contact@c4verse.com',
      password: '#Contact@c4verse.com@2025',
      from: 'contact@c4verse.com',
      to: 'contact@c4verse.com',
      subject: emailSubject,
      text: emailBody,
      replyTo: email
    };

    // Send email via SMTP
    await sendSMTPEmail(null, smtpConfig);
    
    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        details: {
          to: smtpConfig.to,
          from: email,
          name: name
        }
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Error in send-contact-email function:', error)
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})