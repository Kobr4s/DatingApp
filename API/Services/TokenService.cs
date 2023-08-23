using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Interfaces;
using Microsoft.IdentityModel.Tokens;

namespace API.Services
{
    public class TokenService : ITokenService
    {
        private readonly SymmetricSecurityKey _key; // Crypt & decrypt the data
        public TokenService(IConfiguration config)
        {
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));
        }
        public string CreateToken(AppUser user)
        {
            // Claim est une revendication dans ce cas ci au nom de l'utilisateur 
            // EX: je revendique que ma date de naissance est le 4/10 ou que son est XXXXX

            var claims = new List<Claim>    // Liste car on peut avoir plusieurs revendications
            {
                new Claim(JwtRegisteredClaimNames.NameId, user.UserName)
            };

            // Ensuite on a besoin de d'identifiance de signature

            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);

            // Puis on décrit notre token

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),       // le subject inclut les revendications
                Expires = DateTime.Now.AddDays(7),          // Token sera valable 7 jours dans ce cas-ci normalement elle doit etre plus courte
                SigningCredentials = creds                  // Définition de nos signatures d'identifactions
            };

            // Gestionnaire de token qui va nous permettre de créer et de retourner notre token

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}