
function Sidebar() {
  return (
    <aside
      className="bg-dark text-white p-3"
      style={{
        width: "250px",
        minHeight: "100%",
      }}
    >
      <h4 className="mb-4">Menu</h4>


      <ul className="nav nav-pills flex-column">
        <li className="nav-item mb-2">
          <a href="#" className="nav-link active">
            Dashboard
          </a>
        </li>


        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-white">
            Profile
          </a>
        </li>


        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-white">
            Users
          </a>
        </li>


        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-white">
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}


export default Sidebar;
