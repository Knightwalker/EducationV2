using System.Threading.Tasks;
using HTTPServer2;

namespace MyApp2
{
    class Startup
    {
        static async Task Main()
        {
            var server = new HttpServer("127.0.0.1", 8080);
            await server.Start();
        }
    }
}
