import { Link, Route, Routes } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import VerifyDriver from "./VerifyDriver";
import GetDriver from "./GetDriver";
import '../Css/AdminHome.css'
import GetUser from "./GetUser";
import GetRides from "./GetRides";

const AdminHome = () => {
    return (
        <div
            style={{
                background: 'rgb(238, 229, 229)', // Set background color for the entire page
                minHeight: "100vh", // Ensure it covers the full viewport height
                padding: "20px", // Optional: Add padding for spacing
                paddingTop: "150px"
            }}
        >
            <Navbar />
            <div className="d-flex justify-content-center mt-3">
                <div
                    className="container border rounded p-4 shadow"
                    style={{
                        width: "18%", 
                    }}
                >
                    <table   >
                        <tbody style={{backgroundColor:'rgb(238, 229, 229)'}}>
                            <tr    className="  ">
                                <td class ="">
                                    <Link to="/admin/verify">Verify Requests</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:'rgb(238, 229, 229)'}}>
                                    <Link to="/admin/drivers" >Get Total Drivers</Link>
                                </td>
                            </tr>
                            <tr>
                                <td  > 
                                    <Link to="/admin/Users">Get Users</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:'rgb(238, 229, 229)'}}>
                                    <Link to="/admin/Rides">Rides</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div
                    className="container border rounded p-4 shadow"
                    style={{ width: "100%", margin: "30px" }}
                >
                    <h1 className="text-center mb-4">Admin Home</h1>
                    <Routes>
                        <Route path="/verify" element={<VerifyDriver />} />
                        <Route path="/drivers" element={<GetDriver />} />
                        <Route path="/Users" element={<GetUser />} />
                        <Route path="/Rides" element={<GetRides />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
