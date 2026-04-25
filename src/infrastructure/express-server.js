import express from 'express';

export class ExpressServer {
  constructor(shortenUrl, getOriginalUrl) {
    this.app = express();
    this.shortenUrl = shortenUrl;
    this.getOriginalUrl = getOriginalUrl;
    this.setupMiddleware();
    this.setupRoutes();
  }

  setupMiddleware() {
    this.app.use(express.json());
  }

  setupRoutes() {
    this.app.post('/shorten', async (req, res) => {
      try {
        const { url } = req.body;
        if (!url) {
          return res.status(400).json({ error: 'URL is required' });
        }
        const shortened = await this.shortenUrl.execute(url);
        res.json({ shortCode: shortened.shortCode, originalUrl: shortened.originalUrl });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
    });

    this.app.get('/:shortCode', async (req, res) => {
      try {
        const { shortCode } = req.params;
        const url = await this.getOriginalUrl.execute(shortCode);
        if (!url) {
          return res.status(404).json({ error: 'URL not found' });
        }
        res.redirect(url.originalUrl);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
    });
  }

  start(port) {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
