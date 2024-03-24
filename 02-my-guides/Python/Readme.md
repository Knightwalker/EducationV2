# Python
### Package Management Systems
#### Conda
Conda is a package manager, which allows you to install, update and manage software packages and dependencies. Conda was created for Python programs, however it can also distribute for other languages such as R, Ruby, Lua, Scala, Java, JavaScript, C, C++, FORTRAN. (I use it for Python only, out of neccessity)

1. Install Conda
- Go to `https://conda.io/projects/conda/en/latest/user-guide/install/index.html`
- Follow the Miniconda guide
    - download the .pkg installer (MacOS)
- run `conda --version` to check if conda is installed successfully
- run `conda env list` to check existing virtual environments
- run `conda list` to check existing packages in current environment
- run `conda avtivate <environment_name>` to change the current virtual environment

2. Setup New Project with Conda
- Create a new Python project, name it for example "my-project" and navigate to the root dir of the project.
- run `conda env create -n my-project` to create a new environment with no packages.
- run `conda activate my-project` to switch to the new virtual environment.
- run `conda install <package_name>` to install packages. Visit anaconda.org to search for packages. Installing packages should create a file named `environment.yml`, which will describe all required packages in the project.
- run `conda deactivate` to switch back to the base virtual environment.

3. Setup Existing Project with Conda
- Navigate to the root dir of the project.
- run `conda env create -n my-project -f environment.yml` to create a new environment and install all packages from the specified file.
- or run `conda env update -f environment.yml --prune` to update an existing **Conda** environment to match the specifications in the environment.yml file. The `--prune` flag removes any packages that are no longer specified in the environment.yml file.
- run `conda activate my-project`
- (optional) run `export <variable_name>=<variable_value>` to configure any variables you would like, for example `TARGET_ENV=dev`
- run `python3 ./src/main/main.py` to run the python program (for example)
