
### 01.Installation
**Revised on:** 2023.10.31
**Versions:** Docker Desktop 4.25.0

#### 01.1.Windows
- Download `Docker Desktop Installer.exe` for `Windows` from `Docker.com`
- Turn on the WSL 2 feature on Windows
- Using `cmd` terminal, run `start /w "" "Docker Desktop Installer.exe" install --installation-dir=C:\Programs\Docker\Docker` to install Docker Desktop and also change the default installation location. The installer will not offer this choice.
- After installation run `docker --version` to confirm success.

#### Build an image from Dockerfile
- After creating a `Dockerfile` file in the root directory of your project, with `cmd` terminal you can run `docker build .` to create an unnamed image or `docker build -t knightwalker/app .` to create a tagged image.
- After the image is created, you will see the image ID (SHA-256 hash). You can also see all images in your Docker Hub or if your run `docker images`.
- Next you can create a container and run it, by running `docker run -it knightwalker/app`

#### Docker Run Container with Port Mapping
- To run a container from image, and allow traffic from a specific port on your PC to a specific port in the docker container use the following syntax `docker run -p <port1>:<port2> <image_id | image_tag>`, where port1 will accept incoming requests on local host and route them to port2 inside the container.
- For example, run `docker run -it -p 5000:5000 knightwalker/app`

#### Docker CLI
**Usage:** `docker [OPTIONS] COMMAND`
**Common Commands:**
- `build` Build an image from a Dockerfile. 
    - **Usage:** `docker build <flags> <source>`
    - `docker build .` Build an unnamed image based from a Dockerfile in the current directory.
    - `docker build -t knightwalker/app .` Build an image based from a Dockerfile in the current directory. Tag it as `Knightwalker/app`
- `run` Create and run a new container from an image
    - **Usage:** `docker run <flags> <image_id | tag_name>`
    - `docker run -i -t 17c8b5e61bb9` or `docker run -it 17c8b5e61bb9` to run a container. The -i and -t flags are optional and are used when you want to run a shell or a command-line tool inside the container and interact with it.
    - `docker run -it 17c8b5e61bb9 sh` to run a container and enter the `sh` terminal
    - `docker run -it Knightwalker/app`
- `docker images` - List all images
- `docker ps` - List all running containers