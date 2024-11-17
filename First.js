const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    // Log request details
    console.log(req.url, req.method, req.headers);

    // Set the default response header for HTML
    res.setHeader('Content-Type', 'text/html');

    // Route handling based on the URL
    if (req.url === '/') {
        // Serve the homepage HTML
        res.statusCode = 200;
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Homepage</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { color: #4CAF50; }
                    p { font-size: 18px; }
                </style>
            </head>
            <body>
                <h1>Welcome to the Homepage!</h1>
                <p>This is your server responding with an HTML page.</p>
                <a href="/about">Go to About Page</a>
            </body>
            </html>
        `);
    } else if (req.url === '/about') {
        // Serve the About page HTML
        res.statusCode = 200;
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>About</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { color: #2196F3; }
                    p { font-size: 18px; }
                </style>
            </head>
            <body>
                <h1>About This Server</h1>
                <p>This is a simple Node.js server that serves HTML pages.</p>
                <a href="/">Go back to Homepage</a>
            </body>
            </html>
        `);
    } else {
        // Handle unknown routes with a 404 page
        res.statusCode = 404;
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>404 - Page Not Found</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { color: #f44336; }
                    p { font-size: 18px; }
                </style>
            </head>
            <body>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <a href="/">Go back to Homepage</a>
            </body>
            </html>
        `);
    }
});

// Start the server
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
