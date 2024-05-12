import Header from "./component/Header";
import bg from "./assets/bg.jpg";
import SubmitForm from "./component/Form";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <Header />
      <section
        className="bg-cover bg-center min-h-screen lg:py-0 py-4"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex items-center justify-center lg:h-[90vh]  ">
          <div className="bg-[#10B981] p-4  sm:w-[500px]  rounded ">
            <h5 className="text-center text-gray text-lg font-bold">
              Submit Your Booking Information
            </h5>
            <SubmitForm />
          </div>
        </div>
      </section>
      <section className="bg-[#91DFC5]">
        <Footer />
      </section>
    </>
  );
}

export default App;
