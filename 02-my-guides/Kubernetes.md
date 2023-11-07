#### Orchestrating Collections of Services with Kubernetes
Lets imagine that we have a Docker image, named `knightwalker/posts` and we know that we can create containers from an image. If we would like to create a pod for those containers, we need to create a kubernetes pod configuration.

Create the following filesystem structure.
```
infra/
  ├── k8s/                 # Kubernetes configuration files
  │   └── posts.yaml       # YAML definitions for Kubernetes resources related to Posts container.
  │   └── posts-depl.yaml  # Additional YAML definitions for the Posts deployment.
```

**Step 1:** Create a pod config. Write the following .yaml configuration in **posts.yaml**. Identation is very important, it should be 2 spaces, so 1 tab should also be 2 spaces.
```yaml
apiVersion: v1        # k8s is extensible, we can add in our own custom objects. This specifies the set of objects we want k8s to look at.
kind: Pod             # Type of object we want to create
metadata:             # Metadata for the object we are about to create
  name: posts         # When a pod is created, give it a name of "posts"
spec:                 # The exact attributes we want to apply to the object we are about to create
  containers:         # We can create many containers in a single pod
    - name: posts     # Make a container with a name of "posts"
      image: knightwalker/posts:0.0.1 # The exact Docker image we want to use
```

Then create a pod, which will run the container.
- run `kubectl apply -f posts.yaml` to create a pod.
- run `kubectl get pod posts` to display status of the posts pod.
- run `kubectl get pods` to display status of all pods.

**Step 2:** Create a deployment config. Write the following .yaml configuration in **posts-depl.yaml**
```yaml
apiVersion: apps/v1   # k8s is extensible, we can add in our own custom objects. This specifies the set of objects we want k8s to look at.
kind: Pod             # Type of object we want to create
metadata:             # Metadata for the object we are about to create
  name: posts-depl    # When a deployment is created, give it a name of "posts-depl"
spec:                 # The exact attributes we want to apply to the object we are about to create
  replicas: 1
  selector:
    matchLabels:
      app: posts
  template:
    metadata:
      labels:
        app: posts
    spec:
      containers:
        - name: posts
          image: knightwalker/posts:0.0.1
```

Then creating a deployment
- run `kubectl apply -f posts-depl.yaml` to create a deployment.
- run `kubectl get deployment posts-depl` to display status of the posts-depl deployment.
- run `kubectl get deployments` to display status of all deployments.

**Step 3:** Updating the Image Used By a Deployment
- Method 1
    - Make a change in your project code
    - Rebuild the image, specifying a new image version
    - In the deployment config file, update the version of the image
    - Run `kubectl apply -f [depl_file_name]`
- Method 2 (Preferred)
    - Make a change in your project code
    - Rebuild the image, using the `latest` tag. 
    - The deployment config should be pre-configured to also use the `latest` tag in the pod spec section
    - Run `kubectl rollout restart deployment [depl_name]`

### Kubernetes CLI
**Syntax:** `kubectl [command] [TYPE] [NAME] [flags]`
**Commands:**
- `kubectl apply` Apply a configuration change to a resource from a file or stdin.
- `kubectl apply -f myfile.yaml` Create a pod from .yaml file. 
- `kubectl exec [flags] <name> [cmd]` Execute a command against a container in a pod
- `kubectl get [type] <name>` Display one or many resources
    - `kubectl get pods` List all pods
    - `kubectl get deployments` List all deployments
    - `kubectl get services` List all services
- `kubectl logs <name>` Print the logs for a container in a pod

**Deployment Commands:**
- `kubectl describe deployments [depl_name]` Print details about a specific deployment
- `kubectl apply -f [config_file_name]` Create a deployment from .yaml file.
- `kubectl delete deployment [depl_name]` Delete a deployment

#### Aliases
The process to configure terminal aliases will differ between OS'es and terminals.

**GitBash**
If you installed Git for Windows from https://git-scm.com/download/win then you need to search for `aliases.sh` file, which is located in the installation directory (of your choice). Mine was in `C:\Programs\Git\etc\profile.d\aliases.sh`. The downside of this approach is that the file will be overwriten if you update your Git and you will have to re-configure.

Then you can add the following aliases:
```bash
# Kubernetes aliases
alias k='kubectl'
alias kg='kubectl get'
alias kd='kubectl describe'
alias kc='kubectl create'
alias ka='kubectl apply'
alias kex='kubectl exec -it'` what are for d ocker?
```