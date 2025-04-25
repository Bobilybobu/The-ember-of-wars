import "./globals.css"; 

export default function Layout({children}) {
    return (
        <html> 
            <head>
                <title> The Embers of War</title>
            </head>
            <body className="w-screen h-screen">
                {children}
            </body>

        </html>
    )
}