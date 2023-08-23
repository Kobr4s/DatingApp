using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace API.Extensions
{
    public static class IdentityServiceExtensions
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
        {
            // Nécessite d'instaler le paquet de la Nu Gallery Microsoft.AspNetCore.authentication.JwtBearer
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        // Insertion des règles de validation de notre token
                        ValidateIssuerSigningKey = true,            // On vérifie la signature du jeton 
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding        // spécification de la clé de l'émetteur
                            .UTF8.GetBytes(config["TokenKey"])),
                        ValidateIssuer = false,                     // valeur a false car on n'a pas ajouté ces informations dans le token
                        ValidateAudience = false
                    };
                });

            return services;
        }
    }
}