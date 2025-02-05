import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Layout/Navbar';

const TripHistory = () => {
  const [publishedTrips, setPublishedTrips] = useState([]);
  const [bookedTrips, setBookedTrips] = useState([]);
  const userInfo = useSelector((state) => state.user.userInfo);

  const formatDate = (date) => {
    if (!date) return '';
    const formattedDate = new Date(date).toLocaleDateString('en-GB') + " " + new Date(date).toLocaleTimeString(); // Format the date
    return formattedDate;
  };

  useEffect(() => {
    fetch(`https://localhost:9131/api/User/GetUserCompletedRides?uid=${userInfo.uid}`) 
      .then(response => response.json())
      .then(data => setPublishedTrips(data))
      .catch(error => console.error('Error fetching published trips:', error));

  
    fetch(`https://localhost:9131/api/User/GetUserCompletedBookinks?uid=${userInfo.uid}`) 
      .then(response => response.json())
      .then(data => setBookedTrips(data))
      .catch(error => console.error('Error fetching booked trips:', error));
  }, []);

  return (<>
    <Navbar />
    <div className="container mt-4" style={{ paddingTop: "150px" }}>
      <div className="row">
        {/* Column for Trips Published */}
        <div className="col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h2 className="card-title mb-4 text-center">Trips Published</h2>

              <div className="list-group">
                {publishedTrips.map((trip, index) => (
                  <div key={index} className="list-group-item mb-3 border-0 rounded shadow-sm">
                    <div className="d-flex justify-content-center align-items-center text-center">
                      <div>
                        <h5 className="mb-2">{trip.sourceCityNavigation.cityname} to {trip.destinationCityNavigation.cityname}</h5>
                        <p className="mb-1">Travel Date: {formatDate(trip.ridedate)}</p>
                        <p className="mb-1">Seats Available: {trip.noseat}</p>
                        <p className="mb-1">Fare ₹: {trip.fare}</p>
                        <p className="mb-0">Status: {trip.status === 'c' ? 'Completed' : 'Canceled'}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Column for Trips Booked */}
        <div className="col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h2 className="card-title mb-4 text-center">Trips Booked</h2>

              <div className="list-group">
                {bookedTrips.map((trip, index) => (
                  <div key={index} className="list-group-item mb-3 border-0 rounded shadow-sm">
                    <div className="d-flex justify-content-center align-items-center text-center">
                      <div>
                        <h5 className="mb-2">{trip.ride.sourceCityNavigation.cityname} to {trip.ride.destinationCityNavigation.cityname}</h5>
                        <p className="mb-1">Booking Date: {formatDate(trip.bookingdate)}</p>
                        <p className="mb-1">Travel Date: {formatDate(trip.ride.ridedate)}</p>
                        <p className="mb-1">Fare ₹: {trip.ride.fare}</p>
                        <p className="mb-0">Status: {trip.ride.status === 'c' ? 'Attended' : 'Canceled'}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default TripHistory;
