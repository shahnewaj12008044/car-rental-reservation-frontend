import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { ThemeProvider } from "./components/shared/ThemeProvider";

function App() {
  return (
   <ThemeProvider>
     <div className="bg-slate-200 dark:bg-slate-700">
      <Navbar></Navbar>
      <div className="min-h-screen md:container px-2 mx-auto dark:bg-slate-800 rounded-md bg-slate-200">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
   </ThemeProvider>
  );
}

export default App;
