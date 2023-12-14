using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.WebUtilities;
using System.Threading.Tasks;

namespace Assignment6LoginUsingMiddleware.CustomMiddleware
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class LoginMiddleware
    {
        private readonly RequestDelegate _next;

        public LoginMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            string validEmail = "admin@example.com";
            string validPassword = "admin1234";

            if (httpContext.Request.Path == "/" && httpContext.Request.Method == "POST")
            {
                var sr = new StreamReader(httpContext.Request.Body);
                var body = await sr.ReadToEndAsync();
                var queryDict = QueryHelpers.ParseQuery(body);

                string email = queryDict["email"][0] ?? "";
                string password = queryDict["password"][0] ?? "";

                if (email.Length <= 0 || password.Length <= 0) {
                    httpContext.Response.StatusCode = 400;
                    if (email.Length <= 0)
                    {
                        await httpContext.Response.WriteAsync($"Invalid input for 'email' {Environment.NewLine}");
                    }
                    if (password.Length <= 0)
                    {
                        await httpContext.Response.WriteAsync($"Invalid input for 'password' {Environment.NewLine}");
                    }
                } else if (email != validEmail || password != validPassword)
                {
                    httpContext.Response.StatusCode = 400;
                    await httpContext.Response.WriteAsync($"Invalid login {Environment.NewLine}");
                } else
                {
                    httpContext.Response.StatusCode = 200;
                    await httpContext.Response.WriteAsync("Successful login");
                }
            } else
            {
                await _next(httpContext);
            }
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class LoginMiddlewareExtensions
    {
        public static IApplicationBuilder UseLoginMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<LoginMiddleware>();
        }
    }
}
