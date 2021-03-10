import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css';
import NProgress from 'nprogress';
import Link from 'next/link';
import Router from 'next/router';

// Router.events.on("routeChangeStart", (url)=>{
//   console.log('Loading: ${url}');
//   NProgress.start();
// });

// Router.events.on("routeChangeComplete",()=> NProgress.done());
// Router.events.on("routeChangeError",()=> NProgress.done());


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
