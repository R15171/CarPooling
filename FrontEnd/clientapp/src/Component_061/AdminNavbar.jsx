// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import VerifyDriver from './VerifyDriver';
// import GetFeedBack from './GetFeedBack';
// import GetUser from './GetUser';
// import GetDriver from './GetDriver';

// const AdminNavbar = () => {
//     return (
//         <div>
//             {/* Navbar */}
//             <nav style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 padding: "10px",
//                 backgroundColor: "#f4f4f4",
//                 borderRadius: "5px"
//             }}>
//                 <Link to="/admin/verify-driver" style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>VerifyDriver</Link>
//                 <Link to="/admin/get-feedback" style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>GetFeedBack</Link>
//                 <Link to="/admin/get-user" style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>GetUser</Link>
//                 <Link to="/admin/get-driver" style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>GetDriver</Link>
//             </nav>

//             {/* Routes */}
//             <div style={{ padding: "20px" }}>
//                 <Routes>
//                     <Route path="/admin/verify-driver" element={<VerifyDriver />} />
//                     <Route path="/admin/get-feedback" element={<GetFeedBack />} />
//                     <Route path="/admin/get-user" element={<GetUser />} />
//                     <Route path="/admin/get-driver" element={<GetDriver />} />
//                 </Routes>
//             </div>
//         </div>
//     );
// };

// export default AdminNavbar;




// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import VerifyDriver from './VerifyDriver';
// import GetFeedBack from './GetFeedBack';
// import GetUser from './GetUser';
// import GetDriver from './GetDriver';
// import './AdminNavbar.css'; // Import the CSS file for styling

// const AdminNavbar = () => {
//     return (
//         <div>
//             {/* Navbar */}
//             <nav style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 padding: "10px",
//                 backgroundColor: "#f4f4f4",
//                 borderRadius: "5px"
//             }}>
//                 <Link to="/admin/verify-driver" className="nav-link">VerifyDriver</Link>
//                 <Link to="/admin/get-feedback" className="nav-link">GetFeedBack</Link>
//                 <Link to="/admin/get-user" className="nav-link">GetUser</Link>
//                 <Link to="/admin/get-driver" className="nav-link">GetDriver</Link>
//             </nav>

//             {/* Routes */}
//             <div style={{ padding: "20px" }}>
//                 <Routes>
//                     <Route path="/admin/verify-driver" element={<VerifyDriver />} />
//                     <Route path="/admin/get-feedback" element={<GetFeedBack />} />
//                     <Route path="/admin/get-user" element={<GetUser />} />
//                     <Route path="/admin/get-driver" element={<GetDriver />} />
//                 </Routes>
//             </div>
//         </div>
//     );
// };

// export default AdminNavbar;
















// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import VerifyDriver from './VerifyDriver';
// import GetFeedBack from './GetFeedBack';
// import GetUser from './GetUser';
// import GetDriver from './GetDriver';
// import './AdminNavbar.css'; // Import the CSS file for styling

// const AdminNavbar = () => {
//     return (
//         <div>
//             {/* Navbar */}
//             <nav style={{
//                 display: "flex",
//                 justifyContent: "space-around", // Space out links evenly
//                 padding: "10px",
//                 backgroundColor: "#f4f4f4",
//                 borderRadius: "5px",
//                 width: "100%", // Make navbar span the entire width of the screen
//                 boxSizing: "border-box" // To account for padding
//             }}>
//                 <Link to="/admin/verify-driver" className="nav-link">VerifyDriver</Link>
//                 <Link to="/admin/get-feedback" className="nav-link">GetFeedBack</Link>
//                 <Link to="/admin/get-user" className="nav-link">GetUser</Link>
//                 <Link to="/admin/get-driver" className="nav-link">GetDriver</Link>
//             </nav>

//             {/* Routes */}
//             <div style={{ padding: "20px" }}>
//                 <Routes>
//                     <Route path="/admin/verify-driver" element={<VerifyDriver />} />
//                     <Route path="/admin/get-feedback" element={<GetFeedBack />} />
//                     <Route path="/admin/get-user" element={<GetUser />} />
//                     <Route path="/admin/get-driver" element={<GetDriver />} />
//                 </Routes>
//             </div>
//         </div>
//     );
// };

// export default AdminNavbar;



import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import VerifyDriver from './VerifyDriver';
import GetFeedBack from './GetFeedBack';
import GetUser from './GetUser';
import GetDriver from './GetDriver';
import { Navbar, Nav, Container } from 'react-bootstrap';

const AdminNavbar = () => {
  return (
    <div>
      {/* Simple Navbar with Bootstrap */}
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin/verify-driver">VerifyDriver</Nav.Link>
            <Nav.Link as={Link} to="/admin/get-feedback">GetFeedBack</Nav.Link>
            <Nav.Link as={Link} to="/admin/get-user">GetUser</Nav.Link>
            <Nav.Link as={Link} to="/admin/get-driver">GetDriver</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Routes */}
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/admin/verify-driver" element={<VerifyDriver />} />
          <Route path="/admin/get-feedback" element={<GetFeedBack />} />
          <Route path="/admin/get-user" element={<GetUser />} />
          <Route path="/admin/get-driver" element={<GetDriver />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminNavbar;
