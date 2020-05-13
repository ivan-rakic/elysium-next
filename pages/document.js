import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#603cba" />
                    <meta name="theme-color" content="#ffffff" />
                    <title>Elysium Island Festival 2020</title>
                    <meta name="description" content="Elysium Island Festival - 2020 edtition at Koh Chang Island." />
                    <meta name="author" content="Rakic Ivan" />
                    {/* Global site tag (gtag.js) - Google Analytics */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115137631-1"></script>
                    <script>
                        window.dataLayer = window.dataLayer || [];
                         function gtag() {dataLayer.push(arguments)}
                         gtag('js', new Date());
                        gtag('config', 'UA-115137631-1');
                    </script>
                    <meta name="google-site-verification" content="gSL0c1Ligx4QHQbtlnPHUB0H3cn8SpYVEsCQ7m8PN8o" />
                </Head>
                <body>
                    <div id="fb-root"></div>
                    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0"></script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;