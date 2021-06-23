using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace HTTPServer
{
    public class HttpServer : IHttpServer
    {
        private const int BufferSize = 1024;
   
        IDictionary<string, Func<HttpRequest, HttpResponse>> routeTable = new Dictionary<string, Func<HttpRequest, HttpResponse>>();

        public void AddRoute(string path, Func<HttpRequest, HttpResponse> action)
        {
            if (routeTable.ContainsKey(path))
            {
                routeTable[path] = action;
            }
            else
            {
                routeTable.Add(path, action);
            }
        }

        public async Task StartAsync(int port)
        {
            var localAddr = IPAddress.Loopback;
            var tcpListener = new TcpListener(localAddr, port);
            tcpListener.Start();
            Console.WriteLine($"Server started on port {port}");

            while (true)
            {
                var tcpClient = await tcpListener.AcceptTcpClientAsync();
                _ = ProcessClientAsync(tcpClient);
            }
        }

        private async Task ProcessClientAsync(TcpClient tcpClient)
        {
            var networkStream = tcpClient.GetStream();

            List<byte> data = new List<byte>();
            int position = 0;
            byte[] buffer = new byte[BufferSize];
            while (true)
            {
                int count = await networkStream.ReadAsync(buffer, position, buffer.Length);
                position += count;

                if (count < buffer.Length)
                {
                    var partialBuffer = new byte[count];
                    Array.Copy(buffer, partialBuffer, count);
                    data.AddRange(partialBuffer);
                    break;
                }
                else
                {
                    data.AddRange(buffer);
                }

                // if (count == 0)
                // {
                //     break;
                // }
            }

            var requestAsString = Encoding.UTF8.GetString(data.ToArray());
            Console.WriteLine(requestAsString);

            // networkStream.WriteAsync();

            networkStream.Close();

        }
    }
}
