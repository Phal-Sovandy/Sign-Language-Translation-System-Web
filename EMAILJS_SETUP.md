# EmailJS Setup Guide

This guide will help you set up EmailJS for both the contact form and feedback modal in your application.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (you'll need this later)

### For Gmail:

- You'll need to connect your Gmail account
- Grant necessary permissions
- The service will be automatically configured

## Step 3: Create Email Templates

You need to create **two** email templates: one for the contact form and one for the feedback modal.

### Template 1: Contact Form

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Name it "Contact Form" or similar
4. Use the following template variables:

```
Subject: {{subject}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

5. Configure the template:

   - **To Email**: Your email address where you want to receive messages
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}` or your service email
   - **Reply To**: `{{reply_to}}`
   - **Subject**: `{{subject}}`
   - **Content**: Use the template above or customize as needed

6. Save the template and note down your **Template ID** (this will be `VITE_EMAILJS_TEMPLATE_ID`)

### Template 2: Feedback Modal

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Name it "Feedback" or similar
4. Use the following template variables:

```
Subject: Feedback - {{subject}}

Sentiment: {{sentiment}}

Message:
{{message}}

---
This feedback was submitted through the feedback modal.
```

5. Configure the template:

   - **To Email**: Your email address where you want to receive feedback
   - **From Name**: "Feedback System" (or your app name)
   - **From Email**: Your service email
   - **Subject**: `Feedback - {{subject}}`
   - **Content**: Use the template above or customize as needed

6. Save the template and note down your **Template ID** (this will be `VITE_EMAILJS_FEEDBACK_TEMPLATE_ID`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (also called API Key)
3. Copy this key

## Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Open `.env` and fill in your EmailJS credentials:

   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_contact_form_template_id_here
   VITE_EMAILJS_FEEDBACK_TEMPLATE_ID=your_feedback_template_id_here
   ```

3. Replace the placeholder values with your actual credentials from EmailJS

## Step 6: Test Both Forms

1. Start your development server:

   ```bash
   npm run dev
   ```

2. **Test Contact Form:**

   - Navigate to the contact page
   - Fill out and submit the form
   - Check your email inbox for the message

3. **Test Feedback Modal:**
   - Navigate to the home page
   - Click "Share your idea" button
   - Fill out the feedback form with subject, message, and sentiment
   - Submit and check your email inbox

## Template Variables Reference

### Contact Form Variables

The contact form sends the following variables to EmailJS:

- `from_name`: Full name (First Name + Last Name)
- `from_email`: User's email address
- `phone`: User's phone number
- `subject`: Message subject
- `message`: Message content
- `reply_to`: User's email (for easy replies)

### Feedback Modal Variables

The feedback modal sends the following variables to EmailJS:

- `subject`: Feedback subject
- `message`: Feedback message content
- `sentiment`: "👍 Positive" or "👎 Negative" (formatted)
- `sentiment_value`: "positive" or "negative" (raw value)

## Troubleshooting

### Form shows error immediately

- Check that all environment variables are set correctly
- Verify that your `.env` file is in the root directory
- Restart your development server after adding/changing `.env` variables

### Email not received

- Check your EmailJS dashboard for error logs
- Verify your email service is properly connected
- Check spam/junk folder
- Ensure template variables match exactly (case-sensitive)

### Configuration validation fails

- Make sure all four environment variables are set (Public Key, Service ID, Contact Template ID, Feedback Template ID)
- Check for typos in variable names (they must start with `VITE_`)
- Restart the dev server after updating `.env`

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Public Key is safe to expose in frontend code (it's public by design)
- For production, use environment variables in your hosting platform

## Free Tier Limits

EmailJS free tier includes:

- 200 emails per month
- Basic email templates
- Standard support

For higher limits, consider upgrading to a paid plan.
