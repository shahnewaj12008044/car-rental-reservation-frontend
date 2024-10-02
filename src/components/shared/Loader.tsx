import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <HashLoader
      color={"#020C29"}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
);
};

export default Loader;