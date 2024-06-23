/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <section className="bg-[#91DFC5] px-2 lg:px-0">
        <Footer />
      </section>
    </>
  );
}

export default App;
