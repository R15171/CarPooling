use carpooling;

INSERT INTO `user` (`Name`, `Contactno`, `Email`, `gender`, `dob`, `Password`, `Address`) 
VALUES 
('Rushikesh Patil', '9313350998', 'rishispatil2002@gmail.com', 'male', '2002-05-24', 'Abc1234', 'abc street, surat, gujarat -100000'),
('Ananya Sharma', '9876543210', 'ananya.sharma@gmail.com', 'female', '1998-04-12', 'P@ssword123', '23 B, Greenfield Road, Delhi - 110001'),
('Aarav Gupta', '9123456789', 'aarav.gupta@yahoo.com', 'male', '2000-10-03', 'MyPass123', '56 Royal Apartments, Jaipur, Rajasthan - 302001'),
('Ishita Jain', '9988776655', 'ishita.jain@outlook.com', 'female', '1999-12-21', 'Secure@456', '78 Rose Villa, Chandigarh - 160020'),
('Karan Verma', '9765432109', 'karan.verma@abc.com', 'male', '2001-07-14', 'Karan@789', '15 Sunshine Colony, Pune, Maharashtra - 411001'),
('Priya Das', '9109876543', 'priya.das@gmail.com', 'female', '2003-03-30', 'Priya123$', '9 Lakeview Apartments, Kolkata, West Bengal - 700001'),
('Rohan Mehta', '9831122334', 'rohan.mehta@xyz.com', 'male', '1997-08-25', 'Rohan456$', '10 Park Street, Bengaluru, Karnataka - 560001'),
('Sanya Kapoor', '8899776655', 'sanya.kapoor@live.com', 'female', '2002-02-18', 'Sanya!234', '22 Lotus Residency, Hyderabad, Telangana - 500081'),
('Vikram Singh', '9001122334', 'vikram.singh@outlook.com', 'male', '1996-11-03', 'Vikram789#', '45 Pearl Heights, Ahmedabad, Gujarat - 380001'),
('Megha Nair', '9321123344', 'megha.nair@rediffmail.com', 'female', '1995-09-15', 'Megha@123', '7 Infinity Towers, Kochi, Kerala - 682001'),
('Rahul Deshmukh', '9098765432', 'rahul.deshmukh@gmail.com', 'male', '2001-06-22', 'Rahul@567', '33 Sunrise Apartments, Nagpur, Maharashtra - 440001');

INSERT INTO userrole (`rid`, `UID`) 
VALUES 
('driver', '1'), 
('driver', '3'),
('driver', '5'),
('driver', '9'),
('driver', '11'),
('admin','1');

INSERT INTO driver (`DrivingLicence`, `URID`, `VehicleInfo`) 
VALUES 
('MH0120051234567', '12', 'Honda City'),
('KA0420209876543', '13', 'Toyota Innova'),
('DL0320197654321', '14', 'Hyundai Creta'),
('GJ0620223456789', '15', 'Ford EcoSport'),
('MP0230179653421', '16', 'Enova Crysta');

UPDATE driver SET `status` = 'verified' WHERE (`DriverID` = '2');
UPDATE driver SET `status` = 'verified' WHERE (`DriverID` = '3');
UPDATE driver SET `status` = 'verified' WHERE (`DriverID` = '4');
UPDATE driver SET `status` = 'verified' WHERE (`DriverID` = '1');


INSERT INTO ride (`DriverID`, `SourceCity`, `DestinationCity`, `Fare`, `noseat`, `ridedate`,`ridecomplete`) 
VALUES 
('4', '2', '1', '2000', '2', '2024-12-12 10:45:00', '2024-12-13 15:45:00'),
('1', '2', '4', '500', '4', '2025-01-02 09:30:00','2025-01-02 19:30:00'),
('2', '4', '2', '1000', '5', '2025-01-10 16:30:00', '2025-01-11 06:30:00'),
('3', '2', '4', '700', '2', '2025-01-12 18:45:00', '2025-01-13 08:45:00');

INSERT INTO booking (`bookingdate`, `RideID`, `UID`) VALUES 
('2024-12-11', '1', '8'),
('2024-12-24', '3', '10'),
('2024-12-09', '1', '6'),
('2024-12-10', '1', '2'),
('2024-12-24', '3', '7');

INSERT INTO `payment` (`Amount`, `date`, `BookingID`, `Status`)
VALUES
('2000', '2024-12-13 15:45:00', '1', 'done'),
('2000', '2024-12-13 15:45:00', '3', 'done'),
('2000', '2024-12-13 15:45:00', '4', 'done');


INSERT INTO triphistory (`RideID`,`rating`, `Feedback`) 
VALUES
('1', '8', 'Excellent'),
('1', '2', 'Very Good');

