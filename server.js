export default async (req, res) => {
    if (req.method === 'POST') {
        const { url } = req.body;

        // Basic phishing detection logic
        if (!url) {
            return res.status(400).json({
                isPhishing: false,
                message: "⚠️ Please provide a URL to check.",
            });
        }

        if (url.includes('http://') || url.includes('@') || url.length > 75) {
            return res.json({
                isPhishing: true,
                message: "⚠️ Suspicious URL detected! Proceed with caution.",
            });
        } else {
            return res.json({
                isPhishing: false,
                message: "✅ URL seems safe to visit.",
            });
        }
    }

    // Handle unsupported methods
    res.status(405).json({ 
        message: 'Method Not Allowed. Use POST to check a URL.' 
    });
};
