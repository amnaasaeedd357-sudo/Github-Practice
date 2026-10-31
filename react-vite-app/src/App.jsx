import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <h1>Welcome to My Website</h1>
        <p>This is my first React + Vite project.</p>
      </main>

      <Footer />
    </>
  );
}

export default App;