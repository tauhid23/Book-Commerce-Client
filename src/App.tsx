import "./App.css";
import BookCard from "./components/BookCard";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="w-[1020px] mx-auto">
        <Navbar />
        <Home></Home>
      </div>
    </>
  );
}

export default App;
