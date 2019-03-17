using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace CryptocurrencyTracker.Model
{

    public class AppUser : IdentityUser
    {
        public virtual ICollection<Cryptocurrency> Cryptocurrencies { get; set; }

        public AppUser()
        {
            Cryptocurrencies = new HashSet<Cryptocurrency>();
        }
    }
}
