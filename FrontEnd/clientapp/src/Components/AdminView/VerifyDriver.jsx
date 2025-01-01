import React, { useEffect, useState } from 'react';

const VerifyDriver = () => {

    const [data, setdata] = useState([]);
    const [msg, setMsg] = useState("");

    // Define the formatDate function
    const formatDate = (date) => {
        if (!date) return ''; // Handle null or undefined dates
        const formattedDate = new Date(date).toLocaleDateString(); // Format the date
        return formattedDate;
    };

    useEffect(() => {
        fetch('https://localhost:7182/api/Carpooling/GetDrivers')
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    // Log if the response was not OK (e.g., 404, 500)
                    console.error("Error: Network response was not ok", res.status);
                    throw new Error("Network response was not ok");
                }
                return res.json(); // Parse the response to JSON
            })
            .then((data) => {
                if (data === null) {
                    setMsg("All drivers are verified");
                } else {
                    console.log(data);
                    setdata(data);
                }
            })
    }, [])

    const handleVerify = (driverId) => {
        fetch(`https://localhost:7182/api/Carpooling/VerifyDriver/${driverId}`, {
            method: 'PUT', // Assuming a PUT request for updating
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if (!res.ok) {
                    console.error("Error verifying driver:", res.status);
                    throw new Error("Failed to verify driver");
                }
                return res; // Parse response (optional if no data is returned)
            })
            .then(() => {
                // Update the driver's status locally after successful verification
                setdata(prevData =>
                    prevData.map(driver =>
                        driver.driverId === driverId
                            ? { ...driver, status: 'verified' }
                            : driver
                    )
                );
            })
            .catch(error => console.error("Error:", error));
    };


    return (<>
        <div>

            <table className='table table-bordered'> 
                <thead className='table table-headers'>
                    <tr>
                        <th>Driver ID</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Dob</th>
                        <th>Address</th>
                        <th>Driving Licence</th>
                        <th>Vehicle Info</th>
                        <th>Verify</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(e => {
                        return (
                            <tr>
                                <td>{e.driverId}</td>
                                <td>{e.ur.uidNavigation.name}</td>
                                <td>{e.ur.uidNavigation.contactno}</td>
                                <td>{e.ur.uidNavigation.email}</td>
                                <td>{formatDate(e.ur.uidNavigation.dob)}</td>
                                <td>{e.ur.uidNavigation.address}</td>
                                <td>{e.drivingLicence}</td>
                                <td>{e.vehicleInfo}</td>
                                <td><button className='btn btn-secondary' 
                                onClick={() => handleVerify(e.driverId)}>{e.status}</button></td>
                            </tr>
                        )
                    })}
                </tbody>



            </table>



        </div>

    </>)
};

export default VerifyDriver;
