using System;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace HTTPServer2
{
    public class HttpServer
    {
        private readonly IPAddress ipAddress;
        private readonly int port;
        private readonly TcpListener tcpListener;
        private bool isRunning = false;

        public HttpServer(string ipAddress, int port)
        {
            this.ipAddress = IPAddress.Parse(ipAddress);
            this.port = port;
            this.tcpListener = new TcpListener(this.ipAddress, port);
        }

        public async Task Start()
        {
            this.tcpListener.Start();
            this.isRunning = true;
            Console.WriteLine($"Server started on port {this.port}");

            while (this.isRunning)
            {
                var tcpClient = await this.tcpListener.AcceptTcpClientAsync();
                _ = HandleTcpClientAsync(tcpClient);
            }
        }

        private async Task HandleTcpClientAsync(TcpClient tcpClient)
        {
            var networkStream = tcpClient.GetStream();
            var requestRaw = this.ReadRequest(networkStream);

            Console.WriteLine(requestRaw);

            var httpRequest = new HttpRequest();
            httpRequest.Parse(requestRaw);

            

            var httpResponse = new HttpResponse();
            httpResponse.setBody("Hello World!");
            httpResponse.Cookies.Add("sid", new Cookie("sid", Guid.NewGuid().ToString()) { HttpOnly = true, MaxAge = 60 * 24 * 60 * 60 } );

            Console.WriteLine(httpResponse.ToString());
            Console.WriteLine($"{httpRequest.Method} {httpRequest.Url} => {httpRequest.Headers.Count}");

            await httpResponse.WriteAsync(networkStream);
            //await WriteResponse(networkStream);

            tcpClient.Close();
        }

        private string ReadRequest(NetworkStream networkStream)
        {
            var bufferSize = 1024;
            var buffer = new byte[bufferSize];
            var sb = new StringBuilder();
            var totalBytesRead = 0;

            do
            {
                var bytesRead = networkStream.Read(buffer, 0, bufferSize);
                totalBytesRead += bytesRead;

                if (totalBytesRead > 10 * 1024)
                {
                    throw new InvalidOperationException("Request is too big");
                }
                sb.Append(Encoding.UTF8.GetString(buffer, 0, bytesRead));
            }
            while (networkStream.DataAvailable);

            return sb.ToString();
        }

        private async Task WriteResponse(NetworkStream networkStream)
        {
            var content = "Hello World!";
            var contentLength = Encoding.UTF8.GetByteCount(content);

            var response = $"HTTP/1.1 200 OK\r\n";
            response += "Server: My Web Server\r\n";
            response += $"Date: {DateTime.UtcNow.ToString("r")}\r\n";
            response += $"Content-Length: {contentLength}\r\n";
            response += "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
            response += content;

            var responseBytes = Encoding.UTF8.GetBytes(response);
            await networkStream.WriteAsync(responseBytes);
        }

    }
}