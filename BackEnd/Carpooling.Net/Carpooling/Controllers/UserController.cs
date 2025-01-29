using Carpooling.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Carpooling.Controllers
{
    [Route("api/[controller]/[action]/")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpPost]
        public User Login([FromBody] Dictionary<string, string> loginData)
        {
            string contactno = loginData["contactno"];
            string password = loginData["password"];
            using (carpoolingContext con = new carpoolingContext())
            {
                try
                {
                    
                    User user = con.Users
                                   .FirstOrDefault(u => u.Contactno == contactno && u.Password == password);

                    if (user != null)
                    {
                        return user;
                    }
                    else
                    {
                        Console.WriteLine("Invalid contact number or password.");
                        return null;
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                    return null; 
                }   
            }
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

        [HttpGet]
        public List<Ride> GetRides(int source, int desti, DateTime date)
        {
            List<Ride> ride = new List<Ride>();
            using (carpoolingContext con = new carpoolingContext())
            {
                try
                {
                    ride = con.Rides.Include(r => r.DestinationCityNavigation).Include(r => r.SourceCityNavigation).Include(e => e.Driver.UidNavigation).Where(r => r.SourceCity == source && r.DestinationCity == desti && r.Status == "a" && r.Ridedate >= date).ToList();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                }
            }
            return ride;
        }

        [HttpPost]
        public Driver RegDriver(Driver driver)
        {
            using (carpoolingContext con = new carpoolingContext())
            {
                try
                {
                    con.Drivers.Add(driver);
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
                    con.Rides.Add(ride);
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

        [HttpPost]
        public IActionResult BookRide(Booking book)
        {
            using (carpoolingContext con = new carpoolingContext())
            {
                try
                {
                    Booking b = con.Bookings.FirstOrDefault(x => x.RideId == book.RideId && x.Uid == book.Uid);
                    if (b != null)
                    {
                        return StatusCode(409, new { Message = "Booking already exists" });
                    }
                    con.Bookings.Add(book);
                    con.SaveChanges();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                    return StatusCode(500, new { Message = "Internal server error", Error = ex.Message });
                }
            }
            return StatusCode(200, new { Message = "Booking successful" });
        }

        [HttpGet]
        public IActionResult GetDriverInfo(int uid)
        {
            using (carpoolingContext con = new carpoolingContext())
            {
                try
                {
                    var driver = con.Drivers.FirstOrDefault(x => x.Uid == uid);
                    if (driver != null)
                    {
                     
                        return Ok(new { Message = "Driver found", Driver = driver });
                    }
                    else
                    {
                       
                        return NotFound(new { Message = "Driver not found" });
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: " + ex.Message);
                    return StatusCode(500, new { Message = "Internal server error", Error = ex.Message });
                }
            }
        }

        [HttpGet]
        public List<Ride> GetUserRides(int uid)
        {
            using (carpoolingContext con = new carpoolingContext())
            {
                var rides = con.Rides
                               .Where(r => r.Driver.Uid == uid && r.Status != "c")
                               .Include(r => r.SourceCityNavigation)
                               .Include(r => r.DestinationCityNavigation)
                               .ToList();

                return rides;
            }
        }

        [HttpGet]
        public List<Booking> GetUserBookinks(int uid)
        {
            using (carpoolingContext con = new carpoolingContext())
            {
                var booking = con.Bookings
                               .Where(r => r.Uid == uid && r.Ride.Status=="a").Include(i=>i.Ride.SourceCityNavigation).Include(i => i.Ride.DestinationCityNavigation).ToList();

                return booking;
            }
        }

        [HttpGet]
        public List<Ride> GetUserCompletedRides(int uid)
        {
            using (carpoolingContext con = new carpoolingContext())
            {
                var rides = con.Rides
                               .Where(r => r.Driver.Uid == uid && r.Status == "c")
                               .Include(r => r.SourceCityNavigation)
                               .Include(r => r.DestinationCityNavigation)
                               .ToList();

                return rides;
            }
        }

        [HttpGet]
        public List<Booking> GetUserCompletedBookinks(int uid)
        {
            using (carpoolingContext con = new carpoolingContext())
            {
                var booking = con.Bookings
                               .Where(r => r.Uid == uid && r.Ride.Status == "c").Include(i => i.Ride.SourceCityNavigation).Include(i => i.Ride.DestinationCityNavigation).ToList();

                return booking;
            }
        }


    }
}
