using CarpoolingNET.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace CarpoolingNET.Controllers
{
    [Route("api/[controller]/[action]/")]
    [ApiController]
    public class CarpoolingController : ControllerBase
    {

        
        [HttpGet]
        public List<User> GetUsers()
        {
            List<User> users = new List<User>();

            using (carpoolingContext con = new carpoolingContext())
            {
                try
                {
                    users = con.Users.Include(e=>e.Userroles).ToList();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
                finally
                {
                    con.Dispose();
                }
            }
            return users;
        }





        [HttpGet]
        public List<Driver> GetDrivers()
        {
            List<Driver> drivers = new List<Driver>();
            using (carpoolingContext con = new carpoolingContext())
            {
                try
                {
                    drivers = con.Drivers.Where(d=>d.Status=="notverified").Include(a=>a.Ur.UidNavigation).ToList();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                    throw;
                }
                finally
                {
                    con.Dispose();
                }
            }
            return drivers;
        }




        [HttpPut("{driverId}")]
        public StatusCodeResult VerifyDriver(int driverId)
        {
            using (carpoolingContext con = new carpoolingContext())
            {
                try
                {
                    Driver d = con.Drivers.Find(driverId);
                    d.Status = "verified";
                    con.SaveChanges();

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                    return StatusCode(500);
                }
            }
            return StatusCode(200);


        }




        [HttpGet]
        public List<Ride> GetRides()
        {
            List<Ride> rides = new List<Ride>();
            using (carpoolingContext con = new carpoolingContext())
            {

                try
                {
                    rides = con.Rides.ToList();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                    throw;
                }
                finally
                {
                    con.Dispose();
                }
            }
            return rides;
        }




        [HttpGet]
        public List<Booking> GetBooking()
        {
            List<Booking> bookings = new List<Booking>();
            using (carpoolingContext con = new carpoolingContext())
            {
                try
                {
                    bookings = con.Bookings.ToList();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                    throw;
                }
                finally
                {
                    con.Dispose();
                }
            }
            return bookings;
        }

       


        [HttpPost]
        public User Register(User user)
        {
            Console.WriteLine("Uid " + user.Uid);
            using (carpoolingContext con = new carpoolingContext())
            {
                try
                {
                    EntityEntry<User> ee = con.Add(user);
                    User u = ee.Entity;
                    con.SaveChanges();
                    Console.WriteLine(u.ToString());
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                    throw;
                }
            }

            return user;
        }




        [HttpPost]
        public Driver RegDriver(Driver driver)
        {
            using (carpoolingContext con = new carpoolingContext())
            {
                try
                {
                    con.Add(driver);
                    con.SaveChanges();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                    throw;
                }
            }
            return driver;
        }

        [HttpPost]
        public Ride PublishRide(Ride ride)
        {
            using (carpoolingContext con = new carpoolingContext())
            {
                try
                {
                    con.Add(ride);
                    con.SaveChanges();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                    throw;
                }
            }
            return ride;
        }


    }
}
