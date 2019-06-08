using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace CryptocurrencyTracker.Model
{

    public class AppUser : IdentityUser
    {
        public AppUser()
        {
            Charts = new HashSet<Chart>();
        }

        public virtual ICollection<Chart> Charts { get; set; }

    }
}
