import React from 'react';
import ReactDOMServer from 'react-dom/server';
import root from './src/js/root';


console.log(`
<html>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
        <link rel="stylesheet" href="./lib/css/main.css"/>
    </head>
    <body>

        <div id='root'>${ReactDOMServer.renderToString(root)}</div>

        <script type="text/javascript" src="./lib/js/bundle.js"></script>
    </body>
</html>
`);
