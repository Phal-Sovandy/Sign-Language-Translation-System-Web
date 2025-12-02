# EmailJS Feedback Template Configuration

This document provides the exact template configuration for the Feedback Modal in EmailJS.

## Template Settings

### Basic Configuration

- **Template Name**: `Feedback` (or any name you prefer)
- **Service**: Use the same service as your contact form
- **To Email**: Your email address where you want to receive feedback
- **From Name**: `Feedback System` (or your app name)
- **From Email**: Your service email (or leave as default)
- **Reply To**: Your email address (optional)

### Subject Line

```
Feedback - {{subject}}
```

This will result in emails like: "Feedback - Feature Request" or "Feedback - Bug Report"

## Email Content Template

Copy and paste this into the **Content** field of your EmailJS template:

```
New Feedback Received

Subject: {{subject}}
Sentiment: {{sentiment}}

Message:
{{message}}

---
Submitted via Feedback Modal
Sentiment Value: {{sentiment_value}}
```

## Full Template Example

Here's what the complete template should look like in EmailJS:

```
Subject: Feedback - {{subject}}

From Name: Feedback System
From Email: [Your service email]
Reply To: [Your email]

Content:

New Feedback Received

Subject: {{subject}}
Sentiment: {{sentiment}}

Message:
{{message}}

---
Submitted via Feedback Modal
Sentiment Value: {{sentiment_value}}
```

## Template Variables Reference

The feedback modal sends these variables:

| Variable              | Description                          | Example Value                  |
| --------------------- | ------------------------------------ | ------------------------------ |
| `{{subject}}`         | The subject line entered by the user | "Feature Request"              |
| `{{message}}`         | The feedback message content         | "I would like to see..."       |
| `{{sentiment}}`       | Formatted sentiment with emoji       | "👍 Positive" or "👎 Negative" |
| `{{sentiment_value}}` | Raw sentiment value                  | "positive" or "negative"       |

## Example Email Output

When a user submits feedback, you'll receive an email like this:

```
Subject: Feedback - Feature Request

New Feedback Received

Subject: Feature Request
Sentiment: 👍 Positive

Message:
I would love to see dark mode support in the application. It would be great for users who prefer darker interfaces.

---
Submitted via Feedback Modal
Sentiment Value: positive
```

## HTML Template (Optional - More Styled)

If you want a more styled HTML email, you can use this template:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: #006ef5;
        color: white;
        padding: 20px;
        border-radius: 5px 5px 0 0;
      }
      .content {
        background: #f9f9f9;
        padding: 20px;
        border-radius: 0 0 5px 5px;
      }
      .label {
        font-weight: bold;
        color: #666;
      }
      .sentiment-positive {
        color: #10b981;
      }
      .sentiment-negative {
        color: #ef4444;
      }
      .footer {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #ddd;
        font-size: 12px;
        color: #666;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>New Feedback Received</h2>
      </div>
      <div class="content">
        <p><span class="label">Subject:</span> {{subject}}</p>
        <p>
          <span class="label">Sentiment:</span>
          <span class="sentiment-{{sentiment_value}}">{{sentiment}}</span>
        </p>
        <p><span class="label">Message:</span></p>
        <p
          style="background: white; padding: 15px; border-left: 3px solid #006EF5; margin: 10px 0;"
        >
          {{message}}
        </p>
        <div class="footer">
          Submitted via Feedback Modal<br />
          Sentiment Value: {{sentiment_value}}
        </div>
      </div>
    </div>
  </body>
</html>
```

## Quick Setup Steps

1. Go to your EmailJS dashboard → **Email Templates**
2. Click **Create New Template**
3. Name it "Feedback"
4. Set the **Subject** to: `Feedback - {{subject}}`
5. Set **To Email** to your email address
6. Paste the content template above into the **Content** field
7. Save the template
8. Copy the **Template ID** and add it to your `.env` file as `VITE_EMAILJS_FEEDBACK_TEMPLATE_ID`

## Testing

After setting up the template:

1. Make sure `VITE_EMAILJS_FEEDBACK_TEMPLATE_ID` is set in your `.env` file
2. Restart your development server
3. Open your app and click "Share your idea"
4. Fill out the feedback form:
   - Enter a subject (e.g., "Test Feedback")
   - Enter a message (e.g., "This is a test")
   - Select a sentiment (thumbs up or down)
5. Submit the form
6. Check your email inbox for the feedback email

## Troubleshooting

### Email not received

- Check your EmailJS dashboard for error logs
- Verify the template ID is correct in your `.env` file
- Ensure all template variables are spelled correctly (case-sensitive)
- Check spam/junk folder

### Variables not showing

- Make sure variable names match exactly: `{{subject}}`, `{{message}}`, `{{sentiment}}`, `{{sentiment_value}}`
- Variables are case-sensitive
- Use double curly braces: `{{variable}}` not `{variable}` or `[variable]`

### Wrong format

- The template uses plain text by default
- For HTML emails, use the HTML template provided above
- Make sure to set the email format to HTML in EmailJS if using HTML template
