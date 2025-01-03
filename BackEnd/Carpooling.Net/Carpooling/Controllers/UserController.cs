using Carpooling.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Carpooling.Controllers
{
    [Route("api/[controller]/[action]/")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public User Login(string contactno, string password)
        {
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
