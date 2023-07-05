using System.IO;
using WebFramework;

namespace WebFramework.MVC
{
    public abstract class Controller
    {
        public HttpResponse View(string view)
        {
            HttpResponse res = new HttpResponse();
            res.Headers["Content-Type"] = "text/html; charset=UTF-8";
            res.setBody(File.ReadAllText(view));
            return res;
        }
    }
}
