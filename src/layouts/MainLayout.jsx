import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { StickyNavProvider } from "../contexts/StickyNavContext";

import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <StickyNavProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </StickyNavProvider>
    </>
  );
}
