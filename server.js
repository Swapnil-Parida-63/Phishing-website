import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/check-url', (req, res) => {
    const { url } = req.body;

    // Logic for phishing detection (simple example)
    if (url.includes('http://') || url.includes('@') || url.length > 75) {
        res.json({
            isPhishing: true,
            message: "⚠️ Suspicious URL detected! Proceed with caution."
        });
    } else {
        res.json({
            isPhishing: false,
            message: "✅ URL seems safe to visit."
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
