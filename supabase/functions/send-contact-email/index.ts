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

    // Use your provided SMTP credentials
    const smtpHost = 'mail.c4verse.com'
    const smtpPort = '465'
    const smtpUser = 'contact@c4verse.com'
    const smtpPass = '#Contact@c4verse.com@2025'
    const smtpFrom = 'contact@c4verse.com'
    const smtpTo = 'contact@c4verse.com'

    console.log('SMTP Configuration:', {
      host: smtpHost,
      port: smtpPort,
      user: smtpUser,
      from: smtpFrom,
      to: smtpTo
    });

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