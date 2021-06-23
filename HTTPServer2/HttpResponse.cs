using System;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace HTTPServer2
{
    class HttpResponse
    {
        private readonly string NewLine = "\r\n";

        public HttpResponse()
        {
            this.Version = "HTTP/1.1";
            this.StatusCode = HttpStatusCodes.OK;
            this.Headers = new Dictionary<string, string>();
            this.Cookies = new Dictionary<string, Cookie>();
            this.Headers["Server"] = "My Web Server";
            this.Headers["Date"] = DateTime.UtcNow.ToString("r");
            this.Headers["Content-Type"] = "text/plain; charset=UTF-8";
        }

        public string Version { get; set; }
        public HttpStatusCode StatusCode { get; set; }
        public Dictionary<string, string> Headers { get; protected set; }

        public Dictionary<string, Cookie> Cookies { get; protected set; }

        public string Body { get; set; }

        public void setBody(string body)
        {
            this.Body = body;
            this.Headers["Content-Length"] = Encoding.UTF8.GetByteCount(body).ToString(); 
        }

        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append($"{this.Version} {this.StatusCode.Code} {this.StatusCode.Message}{this.NewLine}");
            foreach (var header in this.Headers)
            {
                sb.Append($"{header.Key}: {header.Value}{this.NewLine}");
            }

            foreach (var item in this.Cookies)
            {
                var cookie = this.Cookies[item.Key];
                sb.Append($"Set-Cookie: {cookie.ToString()}{this.NewLine}");
            }

            sb.Append(this.NewLine);

            if (int.Parse(this.Headers["Content-Length"]) > 0)
            {
                sb.Append(this.Body);
            }

            return sb.ToString();
        }

        public async Task WriteAsync(NetworkStream ns)
        {
            var responseString = this.ToString();
            var responseBytes = Encoding.UTF8.GetBytes(responseString);
            await ns.WriteAsync(responseBytes);
        }

    }
}