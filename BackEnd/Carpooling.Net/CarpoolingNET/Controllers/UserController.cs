using CarpoolingNET.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarpoolingNET.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        [HttpGet]
        public List<Ride> GetRides(int source,int desti, DateTime date)
        {
            List<Ride> ride = new List<Ride>();
            using (carpoolingContext con = new carpoolingContext())
            {
                try
                {
                    ride = con.Rides.Where(r=>r.SourceCity == source && r.DestinationCity ==desti && r.Status=="active" && r.Ridedate>=date).ToList();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                }
            }
            return ride;
        }

        [HttpGet]
        public List<City> GetCities()
        {
            List<City> cities = new List<City>();
            using (carpoolingContext con = new carpoolingContext())
            {
                try
                {
                    cities = con.Cities.ToList();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                }
            }
            return cities;
        }
    }
}
