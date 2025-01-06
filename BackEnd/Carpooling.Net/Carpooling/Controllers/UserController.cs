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

        [HttpPost]
        public StatusCodeResult BookRide(Booking book)
        {
            using (carpoolingContext con = new carpoolingContext())
            {
                try
                {
                    con.Bookings.Add(book);
                    con.SaveChanges();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                    throw;
                    return StatusCode(500);
                }
            }
            return StatusCode(200);
        }

    }
}
