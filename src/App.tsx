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
        <div className="container mx-auto flex items-center justify-center lg:h-[90vh] h-full">
          <div className="bg-[#10B981] p-4 w-full  mx-2 lg:mx-auto max-w-md rounded">
            <h5 className="text-center text-gray text-lg font-bold">
              Submit Your Booking Information
            </h5>
            <SubmitForm />
          </div>
        </div>
      </section>
      <section className="bg-[#91DFC5] px-2 lg:px-0">
        <Footer />
      </section>
    </>
  );
}

export default App;
