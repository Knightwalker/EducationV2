namespace WebFramework
{
    public static class HttpStatusCodes
    {
        public static HttpStatusCode OK = new HttpStatusCode(200, "OK", "OK");
        public static HttpStatusCode BadRequest = new HttpStatusCode(400, "BadRequest", "Bad Request");
        public static HttpStatusCode Forbidden = new HttpStatusCode(403, "Forbidden", "Forbidden");
        public static HttpStatusCode NotFound = new HttpStatusCode(404, "NotFound", "Not Found");
    }
}