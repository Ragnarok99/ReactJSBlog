import React from 'react';

function Layout(props){
  return(
    <html>
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{props.title}</title>
        <link rel="stylesheet" href="http://localhost:3001/styles.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"/>
      </head>

      <body>
        <div id="render-target" dangerouslySetInnerHTML={{__html:props.content,}}>

        </div>

        <script src="http://localhost:3001/app.js"></script>
      </body>

    </html>
  )
}

export default Layout;
