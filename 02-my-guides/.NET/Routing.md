### Routing

**Route Parameters**
We can create routes with parameters. In the example provided bellow, the `sid` parameter will result into the argument `1`. However if we don't pass a parameter for `sid`, the endpoint will **NOT BE** matched.

Use the code bellow and send the following HTTP request:

- `HTTP GET http://localhost:5000/products/details/1`

```cs
app.MapGet("/products/details/{sid}", async (context) => {
    string sid = context.Request.RouteValues["sid"]!.ToString()!;
    await context.Response.WriteAsync(sid);
});
```

**Default Route Parameters**
We can create routes with default parameters. In the example provided bellow, the `sid` parameter has a default value, which will result into the argument `1`. The endpoint will **BE** matched even if we don't pass a parameter for `sid`.

Use the code bellow and send the following HTTP request:

- `HTTP GET http://localhost:5000/products/details/`

```cs
app.MapGet("/products/details/{sid=1}", async (context) => {
    string sid = context.Request.RouteValues["sid"]!.ToString()!;
    await context.Response.WriteAsync(sid);
});
```

**Optional Route Parameters**
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

**Route Parameters with Constraints**
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