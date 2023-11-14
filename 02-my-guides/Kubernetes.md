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
kind: Deployment      # Type of object we want to create
metadata:             # Metadata for the object we are about to create
  name: posts-depl    # Your deployment name
spec:                 # The exact attributes we want to apply to the object we are about to create
  replicas: 1         # The number of pods/replicas to run
  selector:
    matchLabels:
      app: posts      # Selector to match the pod
  template:
    metadata:
      labels:
        app: posts    # Name your pod
    spec:
      containers:                           
        - name: posts                        # Add the container name for Kubernetes
          image: knightwalker/posts:0.0.1    # Add the local image name
          imagePullPolicy: Never             # Never pull the image policy. This will ensure Kubernetes uses locally built images instead of trying to pull them remotely from the Docker Hub registry.
```

Then creating a deployment
- run `kubectl apply -f posts-depl.yaml` to create a deployment.
- run `kubectl get deployment posts-depl` to display status of the posts-depl deployment.
- run `kubectl get deployments` to display status of all deployments.

**Step 3:** Create a service config. Write the following .yaml configuration in **posts-srv.yaml**
```yaml
apiVersion: v1
kind: Service          # Type of object we want to create
metadata:
  name: posts-srv      # Your service name
spec:
  type: NodePort       # Type of service. Default is ClusterIP
  selector:
    app: posts         # Selector that matches the pod
  ports:
    - name: posts
      protocol: TCP
      port: 4000       # Port for exposing the service 
      targetPort: 4000 # Port for exposing the pod
      nodePort: 34000  # Port for exposing the node. Default is random port from the high port range (typically 30000-32767) 
```

Then create a service
- run `kubectl apply -f posts-srv.yaml` to create a service.
- run `kubectl get service posts-srv` to display status of the posts-srv service.
- run `kubectl get services` to display status of all services.

You should be able to visit your app at `localhost:34000`

**Extra:** Updating the Image Used By a Deployment
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
    - `kubectl apply -f myfile.yaml` Apply a configuration from .yaml file.
    - `kubectl apply -f .` Apply all configurations from .yaml files in the current directory. 
- `kubectl exec [flags] <name> [cmd]` Execute a command against a container in a pod
- `kubectl get [type] <name>` Display one or many resources
    - `kubectl get pods` List all pods
    - `kubectl get deployments` List all deployments
    - `kubectl get services` List all services
    - `kubectl get namespaces` List all namespaces. The default namespace is named "default"
- `kubectl logs <name>` Print the logs for a container in a pod
- `kubectl delete --all <resource-type> -n <namespace>` Deletes all resources in a namespace
- `kubectl delete --all deployments,services -n default` Deletes all deployments and services in the default namespace

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