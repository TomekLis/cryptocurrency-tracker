using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace CryptocurrencyTracker.Model
{

    public class AppUser : IdentityUser
    {
        public AppUser()
        {
            Charts = new HashSet<Chart>();
            Investments = new HashSet<Investment>();
        }

        public virtual ICollection<Chart> Charts { get; set; }
        public virtual ICollection<Investment> Investments { get; set; }

    }
}
