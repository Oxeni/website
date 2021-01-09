import "../styles/main.scss";
import Navigation from "pages/components/navigation/navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
