using System;
using System.Collections.Generic;

namespace CarpoolingNET.Models
{
    public partial class User
    {
        public User()
        {
            Bookings = new HashSet<Booking>();
            Triphistories = new HashSet<Triphistory>();
            Userroles = new HashSet<Userrole>();
        }

        public int Uid { get; set; }
        public string Name { get; set; } = null!;
        public string Contactno { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Gender { get; set; } = null!;
        public DateTime Dob { get; set; }
        public string Password { get; set; } = null!;
        public string Address { get; set; } = null!;

        public virtual ICollection<Booking> Bookings { get; set; }
        public virtual ICollection<Triphistory> Triphistories { get; set; }
        public virtual ICollection<Userrole> Userroles { get; set; }
    }
}
