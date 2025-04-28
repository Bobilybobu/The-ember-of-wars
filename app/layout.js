import "./globals.css";

export default function Layout({ children }) {
    return (
        <html>
            <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title> The Embers of War</title>
            </head>
            <body >
                {children}
            </body>

        </html>
    )
}