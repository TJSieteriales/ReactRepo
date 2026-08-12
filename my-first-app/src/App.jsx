import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Sample from "./Sample";


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar />


      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <Sidebar />


        {/* Main Content */}
        <main className="flex-grow-1 p-4 bg-light">
          <Sample age={18} JobDescription="Software Engineer" />
        </main>
      </div>


      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3">
        <p className="mb-0">© 2026 My React System</p>
      </footer>
    </div>
  );
}


export default App;


