using System.IO;
using WebFramework;
using WebFramework.MVC;

namespace MyApp.Controllers
{
    class UsersController : Controller
    {
        public HttpResponse LoginPage(HttpRequest req)
        {
            return View("Views/Users/Login.html");
        }
        public HttpResponse RegisterPage(HttpRequest req)
        {
            return View("Views/Users/Register.html");
        }
    }
}
