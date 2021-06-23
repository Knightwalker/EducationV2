using System;
using System.Threading.Tasks;
using HTTPServer;

namespace MyFirstApp
{
    class Program
    {
        static async Task Main(string[] args)
        {
            IHttpServer server = new HttpServer();
            server.AddRoute("/", HomePage);
            server.AddRoute("/about", AboutPage);
            server.AddRoute("/users/login", LoginPage);
            await server.StartAsync(80);
        }

        static HttpResponse HomePage(HttpRequest request)
        {
            throw new NotImplementedException();
        }

        static HttpResponse AboutPage(HttpRequest request)
        {
            throw new NotImplementedException();
        }

        static HttpResponse LoginPage(HttpRequest request)
        {
            throw new NotImplementedException();
        }
    }
}
