var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.Run(async (HttpContext context) =>
{
    string path = context.Request.Path;
    string method = context.Request.Method;
    context.Response.StatusCode = 400;
    await context.Response.WriteAsync("<h1>Hello World</h1>");
    await context.Response.WriteAsync($"{path}");
    await context.Response.WriteAsync($"{method}");
});

app.Run();
