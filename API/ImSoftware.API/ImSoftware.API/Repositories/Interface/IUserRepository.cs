using ImSoftware.API.Models.Domain;

namespace ImSoftware.API.Repositories.Interface
{
    public interface IUserRepository
    {
        Task<List<User>> GetList();
        Task<User> GetUser(Guid id);
        Task<User> Add(User user);
        Task<bool> Update(User user);
        Task<bool> Delete(User user);
    }
}
