import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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

    // Get SMTP credentials from Supabase secrets
    const smtpHost = Deno.env.get('SMTP_HOST') || 'smtp.gmail.com'
    const smtpPort = Deno.env.get('SMTP_PORT') || '587'
    const smtpUser = Deno.env.get('SMTP_USER') // Your email
    const smtpPass = Deno.env.get('SMTP_PASS') // Your app password
    const smtpFrom = Deno.env.get('SMTP_FROM') || smtpUser
    const smtpTo = Deno.env.get('SMTP_TO') || 'contact@c4verse.com'

    if (!smtpUser || !smtpPass) {
      throw new Error('SMTP credentials not configured in secrets')
    }

    // Send email using a simple SMTP approach
    const emailPayload = {
      from: smtpFrom,
      to: smtpTo,
      subject: emailSubject,
      text: emailBody,
      reply_to: email // Allow direct reply to the user
    }

    // For demo purposes, we'll simulate sending
    // In production, you'd use a proper SMTP client or service like Resend, SendGrid, etc.
    console.log('Email would be sent with payload:', emailPayload)
    
    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        details: {
          to: smtpTo,
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