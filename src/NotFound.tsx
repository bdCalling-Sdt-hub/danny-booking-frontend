import notFound from "./assets/404.jpg";
const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <img
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
        src={notFound}
        alt="Not Found"
      />
    </div>
  );
};

export default NotFound;
