using ImSoftware.API.Data;
using ImSoftware.API.Models.Domain;
using ImSoftware.API.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace ImSoftware.API.Repositories.Implementation
{
    public class UserRepository: IUserRepository
    {
        private readonly ApplicationDbContext dbContext;
        public UserRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<List<User>> GetList()
        {
            try
            {
                List<User> users = new List<User>();
                users = await dbContext.Users.ToListAsync();
                return users;
            } catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<User> Add(User user)
        {
            try
            {
                dbContext.Users.Add(user);
                await dbContext.SaveChangesAsync();

                return user;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<User> GetUser(Guid id)
        {
            try
            {
                User? user = new User();
                user = await dbContext.Users.Where(e => e.Id == id).FirstOrDefaultAsync();
                return user;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<bool> Update(User user)
        {
            try
            {
                dbContext.Users.Update(user);
                await dbContext.SaveChangesAsync();

                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<bool> Delete(User user)
        {
            try
            {
                dbContext.Users.Remove(user);
                await dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
