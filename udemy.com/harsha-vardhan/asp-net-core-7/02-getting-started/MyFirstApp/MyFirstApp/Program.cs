using MyFirstApp.CustomMiddleware;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddTransient<MyCustomMiddleware>();
var app = builder.Build();

// Middleware 1
app.Use(async (HttpContext context, RequestDelegate next) =>
{
    await context.Response.WriteAsync($"From Middleware 1 {Environment.NewLine}");
    await next(context);
});

// app.UseMyCustomMiddleware();
app.UseHelloCustomMiddleware();

// Middleware 3
app.Run(async (HttpContext context) =>
{
    await context.Response.WriteAsync($"From Middleware 3 {Environment.NewLine}");
});

app.Run();
