using System;
using System.Collections.Generic;

namespace CarpoolingNET.Models
{
    public partial class Userrole
    {
        public Userrole()
        {
            Drivers = new HashSet<Driver>();
        }

        public int Urid { get; set; }
        public string? Rid { get; set; }
        public int Uid { get; set; }

        public virtual User UidNavigation { get; set; } = null!;
        public virtual ICollection<Driver> Drivers { get; set; }
    }
}
