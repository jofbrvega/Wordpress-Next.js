import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
