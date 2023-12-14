using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace MyFirstApp.CustomMiddleware
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class HelloCustomMiddleware
    {
        private readonly RequestDelegate _next;

        public HelloCustomMiddleware(RequestDelegate next)
        {
            this._next = next;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            if (httpContext.Request.Query.ContainsKey("firstname") && 
            httpContext.Request.Query.ContainsKey("lastname"))
            {
                var firstname = httpContext.Request.Query["firstname"];
                var lastname = httpContext.Request.Query["lastname"];
                var fullname = $"Hello {firstname} {lastname} {Environment.NewLine}";
                await httpContext.Response.WriteAsync(fullname);
            }

            // before logic
            await this._next(httpContext);
            // after logic

        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class HelloCustomMiddlewareExtensions
    {
        public static IApplicationBuilder UseHelloCustomMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<HelloCustomMiddleware>();
        }
    }
}
