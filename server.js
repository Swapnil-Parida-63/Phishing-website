import { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req = VercelRequest, res = VercelResponse) => {
    if (req.method === 'POST') {
        const { url } = req.body;

        // Simple phishing detection logic
        if (url.includes('http://') || url.includes('@') || url.length > 75) {
            return res.json({
                isPhishing: true,
                message: "⚠️ Suspicious URL detected! Proceed with caution."
            });
        } else {
            return res.json({
                isPhishing: false,
                message: "✅ URL seems safe to visit."
            });
        }
    }

    res.status(404).json({ message: 'Not Found' });
};
