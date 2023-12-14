**01. What is middleware?**
Middleware is logic that's assembled into an app pipeline to handle requests and responses, where each middleware component can perform some work before deciding whether or not to pass the request to the next middleware component in the pipeline. In the case of .NET, the framework gives us the option to create custom middleware and also use pre-defined middlewares, which can perform tasks such as authentication, logging, routing, and error handling.

**02. What is the difference between IApplicationBuilder.Use() and IApplicationBuilder.Run()?**
Both the methods are used for defining the application request pipeline. The difference is that `IApplicationBuilder.Use()` is the method used for adding middleware components to the request pipeline and may call the next middleware in the pipeline, while `IApplicationBuilder.Run()` is a terminal middleware, meaning it does not call the next middleware in the pipeline. It short-circuits the pipeline, and no subsequent middleware will be executed after it.

**03. What is the use of the "Map" extension while adding middleware to the .NET Core pipeline?**
The `Map` method is used to conditionally branch the middleware pipeline based on the request's path. It allows you to specify different middleware to handle requests with specific path prefixes. For example, you might use Map to direct requests starting with `/api` to a different set of middleware than requests starting with `/home`.

**04. How do you create a custom middleware?**
There are mainly 2 ways to create a custom middleware. The original way was to create a user defined class, which implements the `IMiddleware` interface. The new way is to create a convention middleware, which is done by creating a new class file and choosing `middleware template` from the Visual Studio options, which will give an example implementation.

**05. What is the right order of middleware used in production-level applications?**
Generally, the order should be set up in a way that ensures the correct functioning of each component. Here's the standard middleware configuration order:
1. Exception Handler
2. HSTS
3. HTTPS Redirection
4. Static Files
5. Routing
6. Cors
7. Authentication
8. Authorization
9. Custom middleware (Any additional user defined middleware, specific to your application)
10. Terminal Middleware (e.g., Run)