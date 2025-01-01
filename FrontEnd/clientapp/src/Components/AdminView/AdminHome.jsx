import { Link, Route, Routes } from "react-router-dom";
import Navbar from "../Layout/Navbar"
import VerifyDriver from "./VerifyDriver";
import GetDriver from "./GetDriver"; 

const AdminHome = () => {


    return (<>
        <Navbar />
        <div className="d-flex justify-content-center mt-3">

            <div className="container border rounded p-4 shadow" style={{
                width: "18%", //height: "80vh"
            }}>
                <table className="table btn">
                    <tr className="table-row hover">
                        <td><Link to='/admin/verify'>Verify requestes</Link></td>
                    </tr>
                    <tr>
                        <td><Link to='/admin/drivers'>Get Total Drivers</Link></td>
                    </tr>
                    <tr>
                        <td><Link to='/admin/Users'>Get Users</Link></td>
                    </tr>
                    <tr>
                        <td><Link to='/admin/verify'>Upcomimng Rides</Link></td>
                    </tr>
                    
                </table>
            </div>

            <div
                className="container border rounded p-4 shadow"
                style={{ width: "100%",margin:"30px" }}
            >
                <h1 className="text-center mb-4">Admin Home</h1>
                <Routes>
                    <Route  path="/verify" element={<VerifyDriver/>} />
                    <Route path="/drivers" element={<GetDriver/>}/>
                </Routes>
            </div>




        </div>
    </>)
}

export default AdminHome;