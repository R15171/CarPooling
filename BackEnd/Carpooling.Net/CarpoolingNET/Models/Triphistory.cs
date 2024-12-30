using System;
using System.Collections.Generic;

namespace CarpoolingNET.Models
{
    public partial class Triphistory
    {
        public int TripId { get; set; }
        public int RideId { get; set; }
        public int Uid { get; set; }
        public int? Rating { get; set; }
        public string? Feedback { get; set; }

        public virtual Ride Ride { get; set; } = null!;
        public virtual User UidNavigation { get; set; } = null!;
    }
}
