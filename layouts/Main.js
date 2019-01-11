import Head from 'next/head'
import {Palette} from '../components/Palette.js'

const GA_TRACKING_ID = 'UA-92527355-4'

const Main = (props) => (
  <div>
  <Head>
  <script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
  />
  <script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');
    `}}
  />

  <title>NOCTURNAL OBEISANCE</title>
  <meta charSet="utf8"/>
  <meta name="description" content=""/>
  <meta name="keywords" content="satan"/>
  <meta name="author" content="Stanislaw Mnizhek"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta property="og:title" content="Nocturnal Obeisance"/>
  <meta property="og:type" content="music.playlist"/>
  <meta property="og:url" content="https://nocturnalobeisance.tk"/>
  <meta property="og:site_name" content="Nocturnal Obeisance"/>
  <meta property="og:image" content="/static/icon.jpg"/>
  <link rel="shortcut icon" type="image/jpg" href="/static/icon.jpg"/>
  </Head>
  {props.children}
  <style jsx global>{`
    body {
      background: ${Palette.background};

      text-align: center;

      font-size: 1.2em;
      font-family: monospace;
      color: ${Palette.primary};

      margin: 0;
      padding: 0;
    }

    p {
      margin-block-start: 0.7em;
      margin-block-end: 0.7em;
    }

    a {
      color: ${Palette.link};
      text-decoration: none;
    }

    a:hover {
      text-decoration: line-through;
    }

    ul {
      margin: 0;
      padding: 0;
    }

    li {
      margin: 0;
      padding: 0;
    }
      `}
  </style>
  </div>

)

export default Main
