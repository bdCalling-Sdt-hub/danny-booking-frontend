import { Col, Row } from "antd";
import bg from "./assets/bg.jpg";
import Footer from "./component/Footer";
import SubmitForm from "./component/Form";
import Header from "./component/Header";
import OpeningCard from "./component/OpeningCard";
function App() {
  return (
    <>
      <Header />
      <section
        className="bg-cover bg-center min-h-screen lg:py-0 py-4 flex justify-center items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container mx-auto">
          <Row justify="center" gutter={[24, 16]}>
            <Col lg={8} md={12} sm={24}>
              <div className="bg-[#0B835C] p-4 w-full rounded text-center text-white">
                <h5 className="text-xl font-bold">
                  Submit Your Booking Information
                </h5>
                <SubmitForm />
              </div>
            </Col>
            <Col lg={12} md={12} sm={24}>
              <OpeningCard />
            </Col>
          </Row>
        </div>
      </section>
      <section className="bg-[#91DFC5] px-2 lg:px-0">
        <Footer />
      </section>
    </>
  );
}

export default App;
