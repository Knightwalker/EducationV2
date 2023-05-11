using System.Threading.Tasks;
using MyApp.Controllers;
using WebFramework;

namespace MyApp
{
    class Startup
    {
        static async Task Main()
        {
            var server = new HttpServer("127.0.0.1", 8080);

            server.AddRoute("/", new HomeController().HomePage);
            server.AddRoute("/about", new HomeController().AboutPage);
            server.AddRoute("/register", new UsersController().LoginPage);
            server.AddRoute("/register", new UsersController().RegisterPage);

            await server.Start();
        }

    }
}
