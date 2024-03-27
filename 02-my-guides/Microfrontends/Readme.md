# Microfrontends
### Setup MFE with Webpack

Create the following directory structure:

```
mfe_example/
├── auth/
│   ├── public/
│   │   ├── index.html
│   ├── src/
|   |   |── index.js
│   ├── webpack.config.js
├── dashboard/
│   ├── public/
│   │   ├── index.html
│   ├── src/
|   |   |── index.js
│   ├── webpack.config.js
├── host/
│   ├── public/
│   │   ├── index.html
│   ├── src/
|   |   |── index.js
│   ├── webpack.config.js
├── landing/
│   ├── public/
│   │   ├── index.html
│   ├── src/
|   |   |── index.js
│   ├── webpack.config.js
```

In each **index.html**, write:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

run `npm install react react-dom react-router-dom` in the root dir of each mfe (e.g., auth, dashboard, host, landing)
run `npm install webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader @babel/preset-react @babel/preset-env css-loader style-loader --save-dev` in the root dir of each mfe (e.g., auth, dashboard, host, landing)
