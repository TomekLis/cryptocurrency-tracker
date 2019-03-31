using FluentValidation;
using FluentValidation.AspNetCore;
using FluentValidation.Internal;
using FluentValidation.Results;
using Microsoft.AspNetCore.Mvc;

namespace CryptocurrencyTracker.ViewModels
{
    public class CredentialsViewModelValidator : IValidatorInterceptor
    {

        readonly string[] properties = new[] { "userName", "password" };

        public ValidationContext BeforeMvcValidation(ControllerContext cc, ValidationContext context)
        {
            var newContext = context.Clone(selector: new MemberNameValidatorSelector(properties));
            return newContext;
        }

        public ValidationResult AfterMvcValidation(ControllerContext cc, ValidationContext context, ValidationResult result)
        {
            return result;
        }
    }
}
