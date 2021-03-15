import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                <link rel="shortcut icon" href="LOGO.png" type="image/png" style={{borderRadius:'50%'}}/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2? family = Inter & display = swap" rel="stylesheet "/>
                    <link rel="stylesheet" type="text/css" href="/nprogress.css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                    {/* bootstrap ativando js */}
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
                </body>

                
            </Html>
        );
    }
}
