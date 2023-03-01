// `pages/_app.js`
import '../components/globals.css';
// import './api/api_course';
// import './api/api_students';
// import './api/AuthenticatedComponent';
// import './api/form';
// import './api/login';
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}