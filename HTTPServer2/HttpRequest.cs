using System.Collections.Generic;
using System.Text;

namespace HTTPServer
{
    public class HttpRequest
    {
        private const string NewLine = "\r\n";
        public string Method;
        public string Url;
        public string HttpVersion;
        public Dictionary<string, string> Headers = new Dictionary<string, string>();
        public Dictionary<string, string> Cookies = new Dictionary<string, string>();
        public string Body;

        public void Parse(string request)
        {
            var requestArr = request.Split(NewLine);

            var requestLine = requestArr[0].Split(" ");
            this.Method = requestLine[0];
            this.Url = requestLine[1];
            this.HttpVersion = requestLine[2];

            bool bReadingHeaders = true;
            var bodyBuilder = new StringBuilder();
            for (int i = 1; i < requestArr.Length; i++)
            {
                var line = requestArr[i];
                if (line == "")
                {
                    bReadingHeaders = false;
                    continue;
                }

                if (bReadingHeaders)
                {
                    var headerArr = line.Split(":", 2);
                    this.Headers[headerArr[0]] = headerArr[1].Trim();
                }
                else
                {
                    bodyBuilder.AppendLine(line);
                }
            }

            // Parse Cookies
            if (this.Headers.ContainsKey("Cookie"))
            {
                var cookies = this.Headers["Cookie"];
                var cookiesArr = cookies.Split("; ");
                foreach (var cookie in cookiesArr)
                {
                    var cookieParts = cookie.Split("=", 2);
                    var cookieName = cookieParts[0];
                    var cookieValue = cookieParts[1];
                    this.Cookies[cookieName] = cookieValue;
                }
            }

            this.Body = bodyBuilder.ToString();

        }
    }
}
