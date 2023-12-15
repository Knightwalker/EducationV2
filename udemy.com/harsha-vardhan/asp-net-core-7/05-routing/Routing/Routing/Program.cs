using Microsoft.AspNetCore.Http;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

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

app.Run(async (context) =>
{
    await context.Response.WriteAsync($"Request received at {context.Request.Path}");
});

app.Run();
