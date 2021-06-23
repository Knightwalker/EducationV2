using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HTTPServer2
{
    public class HttpStatusCode
    {
        public HttpStatusCode(int code, string name, string message)
        {
            this.Code = code;
            this.Name = name;
            this.Message = message;
        }

        public int Code;
        public string Name;
        public string Message;
    }
}
