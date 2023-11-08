using ImSoftware.API.Data;
using ImSoftware.API.Models.Domain;
using ImSoftware.API.Models.DTO.Users;
using ImSoftware.API.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;

namespace ImSoftware.API.Controllers
{
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository userRepository;
        public UsersController(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        [Route("api/users/add")]
        [HttpPost]
        public async Task<IActionResult> AddUser(CreateUserDto request)
        {
            var user = new User
            {
                Name = request.Name,
                Age = request.Age,
                Email = request.Email,
            };

            await userRepository.Add(user);

            var response = new UserDto
            {
                Id = user.Id,
                Name = user.Name,
                Age = user.Age,
                Email = user.Email
            };

            return Ok(response);
        }

        [Route("api/users")]
        [HttpGet]
        public async Task<IActionResult> GetList()
        {
            return Ok(await userRepository.GetList());
        }

        [Route("api/users/edit")]
        [HttpGet]
        public async Task<IActionResult> GetUser(Guid id)
        {
            return Ok(await userRepository.GetUser(id));
        }

        [Route("api/users/update")]
        [HttpPut]
        public async Task<IActionResult> Update(User model)
        {
            return Ok(await userRepository.Update(model));
        }

        [Route("api/users/delete")]
        [HttpDelete]
        public async Task<IActionResult> Delete(Guid id)
        {
            return Ok(await userRepository.Delete(id));
        }
    }
}
