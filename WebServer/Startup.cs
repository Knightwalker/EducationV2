using System.Threading.Tasks;
using HTTPServer2;

namespace MyApp2
{
    class Startup
    {
        static async Task Main()
        {
            var server = new HttpServer("127.0.0.1", 8080);

            server.AddRoute("/", HomePage);

            await server.Start();
        }

        static HttpResponse HomePage(HttpRequest req, HttpResponse res)
        {
            res.Headers["Content-Type"] = "text/html; charset=UTF-8";
            res.setBody("hello world");
            return res;
        }
    }
}
