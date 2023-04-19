import "@/styles/globals.css";
import "@/styles/slick-helper.css";
import "@/styles/mui-helper.css";
import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
