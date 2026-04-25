# URL Shortener API

Clean architecture URL shortener with Node.js.

## Setup

```bash
npm install
npm start
```

## API

### Shorten URL
```bash
POST /shorten
Content-Type: application/json

{
  "url": "https://example.com/very/long/url"
}
```

Response:
```json
{
  "shortCode": "abc12345",
  "originalUrl": "https://example.com/very/long/url"
}
```

### Redirect
```bash
GET /:shortCode
```

Redirects to the original URL.
