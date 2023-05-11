using System;
using System.Net;
using System.Net.Sockets;
using System.Text;

namespace SocketClientStarter
{
    class Program
    {
        static void Main(string[] args)
        {
            Socket client = null;
            client = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);

            IPAddress ipaddr = null;
            int port = 0;

            while(true)
            {
                Console.WriteLine("Please provide endpoint: (eg. 127.0.0.1:8080)");
                string endpointInput = Console.ReadLine();
                string[] endpointTokens = endpointInput.Split(":");
                string strIPAddress = endpointTokens[0];
                string strPort = endpointTokens[1];

                if (!IPAddress.TryParse(strIPAddress, out ipaddr))
                {
                    Console.WriteLine("Invalid server IP supplied.");
                    continue;
                }
                if (!int.TryParse(strPort.Trim(), out port))
                {
                    Console.WriteLine("Invalid port number supplied, return.");
                    continue;
                }
                Console.WriteLine($"IPAddress: {ipaddr.ToString()} - Port: {port}");
                break;
            }

            try
            {
                client.Connect(ipaddr, port);

                Console.WriteLine("Connected to the server, type text and press enter to send it. type \"exit\" to close.");

                string inputCommand = string.Empty;
                
                while(true)
                {
                    inputCommand = Console.ReadLine();

                    if (inputCommand == "exit")
                    {
                        break;
                    }

                    byte[] buffSend = Encoding.ASCII.GetBytes(inputCommand);
                    client.Send(buffSend);

                    byte[] buffReceived = new byte[128];
                    int nRecv = client.Receive(buffReceived);

                    string receivedText = Encoding.ASCII.GetString(buffReceived, 0, nRecv);
                    Console.WriteLine("Data received: " + receivedText);

                }

            }
            catch (Exception ex)
            {
                Console.WriteLine($"ERROR: {ex.Message}");
            }
            finally
            {
                client.Shutdown(SocketShutdown.Both);
                client.Close();
                client.Dispose();
            }

            Console.WriteLine("Press a key to exit...");
            Console.ReadLine();

        }
    }
}
