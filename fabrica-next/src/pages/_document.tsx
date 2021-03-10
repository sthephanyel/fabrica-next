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
                    
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                    
                </body>

                
            </Html>
        );
    }
}
