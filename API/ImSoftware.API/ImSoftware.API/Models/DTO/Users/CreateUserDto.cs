using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace ImSoftware.API.Models.DTO.Users
{
    public class CreateUserDto
    {
        [Required(ErrorMessage = "Campo requerido")]
        [StringLength(50, ErrorMessage = "El nombre no puede ser de mas de 50 caracteres")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Campo requerido")]
        [RegularExpression("([0-9]+)", ErrorMessage = "Edad incorrecta.")]
        public string Age { get; set; }
        [Required(ErrorMessage = "Campo requerido")]
        [RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Formato incorrecto.")]
        public string Email { get; set; }
    }
}
