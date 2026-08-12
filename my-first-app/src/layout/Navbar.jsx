function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My React System
        </a>


        <div className="d-flex align-items-center">
          <span className="text-white me-3">Welcome, User</span>


          <button className="btn btn-outline-light">Logout</button>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
