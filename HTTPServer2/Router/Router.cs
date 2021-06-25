using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebFramework.HTTP.Router
{
    public class Router
    {
        public Router()
        {
            this.RoutesTable = new Dictionary<string, Action<HttpRequest, HttpResponse>>();
        }

        public Dictionary<string, Action<HttpRequest, HttpResponse>> RoutesTable { get; set; }

        public void Add(string endpoint, Action<HttpRequest, HttpResponse> action)
        {
            this.RoutesTable[endpoint] = action;
        }

    }
}
