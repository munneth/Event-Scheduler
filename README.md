# Event Scheduler

A modern contact form application built with Next.js that allows users to send messages via email using Nodemailer.

## 🚀 Features

- **Contact Form**: Clean, responsive contact form with name, email, and message fields
- **Email Integration**: Sends emails using Nodemailer with Ethereal Email (test service)
- **Modern UI**: Built with Next.js 15 and React 19
- **Form Validation**: Client-side validation with required fields
- **Success Feedback**: User-friendly success/error messages
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19
- **Styling**: SCSS Modules
- **Email Service**: Nodemailer with Ethereal Email
- **Development**: ESLint, TypeScript support

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd event-scheduler
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Email Setup

The application uses Ethereal Email for testing. To configure your own email service:

1. **Update the transporter configuration** in `src/app/api/nodemailer/route.js`:

   ```javascript
   const transporter = nodemailer.createTransporter({
     host: "your-smtp-host",
     port: 587,
     secure: false,
     auth: {
       user: "your-email@example.com",
       pass: "your-password",
     },
   });
   ```

2. **Update the sender email** in the `sendMail` options:
   ```javascript
   from: '"Your Name" <your-email@example.com>',
   to: "recipient@example.com",
   ```

## 📁 Project Structure

```
event-scheduler/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── nodemailer/
│   │   │       └── route.js          # Email API endpoint
│   │   ├── components/
│   │   │   ├── mailform.jsx          # Contact form component
│   │   │   └── mailform.module.scss  # Form styles
│   │   ├── page.jsx                  # Main page
│   │   └── page.module.scss          # Page styles
│   └── ...
├── package.json
└── README.md
```

## 🎯 Usage

1. **Fill out the form** with your name, email, and message
2. **Click Submit** to send the email
3. **Receive confirmation** when the email is sent successfully

## 🔌 API Endpoints

### POST `/api/nodemailer`

Sends an email using the contact form data.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, this is a test message."
}
```

**Response:**

```json
{
  "success": true,
  "messageId": "unique-message-id"
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Deploy automatically**

### Other Platforms

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 🧪 Testing

The application uses Ethereal Email for testing, which provides:

- **Fake SMTP server** for development
- **Email preview** without sending real emails
- **No spam** to real email addresses

## 🔒 Environment Variables

For production, consider using environment variables:

```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
RECIPIENT_EMAIL=recipient@example.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Built with ❤️ using Next.js and Nodemailer**
