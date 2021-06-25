using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebFramework.HTTP
{
    public static class HttpStatusCodes
    {
        public static HttpStatusCode OK = new HttpStatusCode(200, "OK", "OK");
        public static HttpStatusCode BadRequest = new HttpStatusCode(400, "BadRequest", "Bad Request");
        public static HttpStatusCode Forbidden = new HttpStatusCode(403, "Forbidden", "Forbidden");
    }
}