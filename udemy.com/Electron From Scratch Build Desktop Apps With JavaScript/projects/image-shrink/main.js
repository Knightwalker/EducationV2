const { app, Menu, BrowserWindow } = require("electron");

// Set env
process.env.NODE_ENV = "development";

const isDev = process.env.NODE_ENV === "development" ? true : false;
const isMac = process.platform === "darwin" ? true : false;

let mainWindow = null;
let aboutWindow = null;

const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        title: "ImageShrink",
        width: 600,
        height: 500,
        icon: `${__dirname}/assets/icons/Icon_256x256.png`,
        resizable: isDev ? true : false
    });

    mainWindow.on("closed", () => {
        mainWindow = null
    });

    mainWindow.loadFile("./src/index.html");
}

const createAboutWindow = () => {
    aboutWindow = new BrowserWindow({
        title: "ImageShrink",
        width: 300,
        height: 300,
        icon: `${__dirname}/assets/icons/Icon_256x256.png`,
        resizable: false
    });

    aboutWindow.on("closed", () => {
        aboutWindow = null
    });

    aboutWindow.loadFile("./src/about.html");
}

const menu = [
    {
        role: "fileMenu"
    },
    ...(isDev ? [
        { 
            label: "Developer",
            submenu: [
                { role: "reload" },
                { role: "forcereload" },
                { type: "separator" },
                { role: "toggledevtools" }
            ]
        }
    ] : []),
    {
        label: "Help",
        submenu: [
            {
                label: "About",
                click: createAboutWindow
            }
        ]
    }
];

app.on("ready", () => {
    createMainWindow();

    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);
});