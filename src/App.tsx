import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
      <div className="w-[1020px] mx-auto">
        <Navbar />
      </div>

      <main className="flex-grow w-[1020px] mx-auto mb-8">
        <Home />
      </main>

      <div className="w-full mx-auto bg-[#F1F7FE]">
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
