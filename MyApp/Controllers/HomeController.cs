using WebFramework.HTTP;
using WebFramework.MVC;

namespace MyApp.Controllers
{
    public class HomeController : Controller
    {
        public HttpResponse HomePage(HttpRequest req, HttpResponse res)
        {
            res.Headers["Content-Type"] = "text/html; charset=UTF-8";
            res.setBody("Home Page");
            return res;
        }

        public HttpResponse AboutPage(HttpRequest req, HttpResponse res)
        {
            res.Headers["Content-Type"] = "text/html; charset=UTF-8";
            res.setBody("About Page");
            return res;
        }
    }
}
