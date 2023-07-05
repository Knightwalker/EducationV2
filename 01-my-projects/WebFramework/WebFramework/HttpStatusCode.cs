namespace WebFramework
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
