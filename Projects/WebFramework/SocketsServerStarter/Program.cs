using System;
using System.Net;
using System.Net.Sockets;
using System.Text;

namespace SocketsServerStarter
{
    class Program
    {
        static void Main(string[] args)
        {
            Socket listenerSocket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);

            IPAddress ipaddr = IPAddress.Any;
            IPEndPoint ipep = new IPEndPoint(ipaddr, 8080);

            listenerSocket.Bind(ipep);
            listenerSocket.Listen(5);

            Socket client = listenerSocket.Accept();
            Console.WriteLine("Client connected. " + client.ToString() + " - IP End Point: " + client.RemoteEndPoint.ToString());

            byte[] buffer = new byte[128];
            int numberOfReceivedBytes = 0;

            while (true)
            {
                numberOfReceivedBytes = client.Receive(buffer);

                Console.WriteLine("Number of received bytes: " + numberOfReceivedBytes);

                Console.WriteLine("Data send by client is " + buffer);

                string receivedText = Encoding.ASCII.GetString(buffer, 0, numberOfReceivedBytes);
                Console.WriteLine("Data send by client is " + receivedText);

                client.Send(buffer);

                if (receivedText == "x")
                {
                    break;
                }

                Array.Clear(buffer, 0, buffer.Length);
                numberOfReceivedBytes = 0;
            }

        }
    }
}
