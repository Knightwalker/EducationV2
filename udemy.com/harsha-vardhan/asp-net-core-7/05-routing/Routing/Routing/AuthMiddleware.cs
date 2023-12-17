using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Routing
{
    public class AuthMiddleware
    {
        private readonly RequestDelegate _next;

        public AuthMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            // Step 1: Map the URL you want to protect
            if (httpContext.Request.Path.StartsWithSegments("/users"))
            {
                // Step 2: Apply your authentication logic here
                bool isLoggedIn = false;
                if (!isLoggedIn)
                {
                    httpContext.Response.StatusCode = 401; // Unauthorized
                    return;
                }
            }

            await _next(httpContext);
        }
    }

    public static class AuthMiddlewareExtensions
    {
        public static IApplicationBuilder UseAuthMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<AuthMiddleware>();
        }
    }
}
