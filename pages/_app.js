import '../styles/globals.css'
import './styles.css'
import 'tailwindcss/tailwind.css'

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
