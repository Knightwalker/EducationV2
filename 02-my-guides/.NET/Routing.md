### Routing
#### Route Parameters
We can create routes with parameters. In the example provided bellow, the `sid` parameter will result into the argument `1`. However if we don't pass a parameter for `sid`, the endpoint will **NOT BE** matched.

Use the code bellow and send the following HTTP request:

- `HTTP GET http://localhost:5000/products/details/1`

```cs
app.MapGet("/products/details/{sid}", async (context) => {
    string sid = context.Request.RouteValues["sid"]!.ToString()!;
    await context.Response.WriteAsync(sid);
});
```

#### Default Route Parameters
We can create routes with default parameters. In the example provided bellow, the `sid` parameter has a default value, which will result into the argument `1`. The endpoint will **BE** matched even if we don't pass a parameter for `sid`.

Use the code bellow and send the following HTTP request:

- `HTTP GET http://localhost:5000/products/details/`

```cs
app.MapGet("/products/details/{sid=1}", async (context) => {
    string sid = context.Request.RouteValues["sid"]!.ToString()!;
    await context.Response.WriteAsync(sid);
});
```

#### Optional Route Parameters
We can create routes with optional parameters. In the example provided bellow, the `sid` is an optional parameter, which will result into the argument `null`. The URL will **BE** matched and the response returned will be `No sid provided!`

Use the code bellow and send the following HTTP request:

- `HTTP GET http://localhost:5000/products/details/`

```cs
app.UseRouting();
#pragma warning disable ASP0014 // Suggest using top level route registrations
app.UseEndpoints(endpoints => {
    endpoints.MapGet("/products/details/{sid?}", async (context) => {
        string? sid = context.Request.RouteValues["sid"]?.ToString();
        if (sid == null) {
            await context.Response.WriteAsync("No sid provided!");
            return;
        }
        await context.Response.WriteAsync(sid);
    });
});
#pragma warning restore ASP0014 // Suggest using top level route registrations
```

#### Route Parameters with Constraints
We can restrict the data types, which our route parameters accept. For example, we can restrict the the route parameter `id` to accept only valid integer data types (between `123456789` and `-123456789`), which means that the route, as a whole, will only match if the URL path and parameters are valid and of the appropriate data types

Use the code bellow and send the following HTTP request:

- `HTTP GET http://localhost:5000/products/details/1`

```cs
app.UseRouting();
#pragma warning disable ASP0014 // Suggest using top level route registrations
app.UseEndpoints(endpoints => {
    endpoints.MapGet("/products/details/{id:int}", async (context) =>
    {
        int id = int.Parse(context.Request.RouteValues["id"]!.ToString()!);
        await context.Response.WriteAsync(id.ToString());
    });
});
#pragma warning restore ASP0014 // Suggest using top level route registrations
```

#### Protected Routes (Method 1: Custom Middleware)
We can protect our routes by implementing a custom middleware, which protects specific URL segments. For example, lets imagine that we have a users page, which can only be accessed if the user is authorized. Here's an example:

**1. Create AuthMiddleware**
```cs
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
```

**2. Use the Middleware in Program.cs**
```diff
using Microsoft.AspNetCore.Http;
using Routing;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseRouting();
+ app.UseAuthMiddleware();
#pragma warning disable ASP0014 // Suggest using top level route registrations
app.UseEndpoints(endpoints => {
    endpoints.MapGet("/products/details/{id:int}", async (context) =>
    {
        int id = int.Parse(context.Request.RouteValues["id"]!.ToString()!);
        await context.Response.WriteAsync(id.ToString());
    });
+   endpoints.MapGet("/users", async (context) =>
+   {
+       await context.Response.WriteAsync("Hello from users page");
+  });
});
#pragma warning restore ASP0014 // Suggest using top level route registrations

app.Run(async (context) =>
{
    await context.Response.WriteAsync($"Request received at {context.Request.Path}");
});

app.Run();
```

**3. Check the change**
- Go to `HTTP GET http://localhost:5000/users`, the page will not work and you should get an `401 Unauthorized`