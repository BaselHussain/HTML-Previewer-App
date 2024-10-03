// predefinedHtml.ts
export const predefinedHtml = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Random HTML Example</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                padding: 20px;
                background-color: #f0f0f0;
            }
            h1, h2 {
                color: #333;
            }
            ul {
                list-style-type: disc;
                margin: 10px 0;
                padding-left: 20px;
            }
            ol {
                list-style-type: decimal;
                margin: 10px 0;
                padding-left: 20px;
            }
            p {
                text-decoration: underline; /* Underline text in paragraphs */
            }
            a {
                color: blue;
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
            }
            img {
                display: block;
                margin: 10px 0;
                border-radius: 8px;
            }
            footer {
                margin-top: 20px;
                font-size: 14px;
                color: #666;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>Welcome to My Random HTML Page</h1>
            <p>This is a simple webpage to demonstrate various HTML tags.</p>
        </header>

        <section>
            <h2>Text Formatting</h2>
            <p>Here is a sentence with <b>bold text</b>, <i>italic text</i>, and <u>underlined text</u>.</p>
            <p>You can also use <strong>strong</strong> and <em>emphasis</em> for better accessibility.</p>
        </section>

        <section>
            <h2>Lists</h2>

            <h3>Unordered List</h3>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>

            <h3>Ordered List</h3>
            <ol>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ol>
        </section>

        <section>
            <h2>Links and Images</h2>
            <p>Here is a <a href="https://www.example.com">link to an external website</a>.</p>
            <p>And here is an image:</p>
            <img src="https://via.placeholder.com/150" alt="Random placeholder image" />
        </section>

        <footer>
            <p>&copy; 2024 My Random HTML Page</p>
        </footer>
    </body>
    </html>

`;
