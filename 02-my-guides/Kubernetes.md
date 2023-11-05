#### Create a pod for Docker container
Lets imagine that we have a Docker image `knightwalker/posts` and we know that we can create containers from an image. If we would like to create a pod for those containers, we need to create a kubernetes pod configuration.

Create the following filesystem structure.
```
infra/
  ├── k8s/           # Kubernetes configuration files
  │   └── posts.yaml # YAML definitions for Kubernetes resources related to Posts container.
```

Write the following YALM configuration in **posts.yaml**. Identation is very important, it should be 2 spaces, so 1 tab should also be 2 spaces.
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

Now you can proceed to creating a pod, which will run the container.
- run `kubectl apply -f posts.yaml` to create a pod.
- run `kubectl get pod posts` to display status of the posts pod.

### Kubernetes CLI
**Syntax:** `kubectl [command] [TYPE] [NAME] [flags]`
**Commands:**
- `kubectl apply` Apply a configuration change to a resource from a file or stdin.
- `kubectl apply -f myfile.yaml` Create a pod from .yaml file. 
- `kubectl exec [flags] <name> [cmd]` Execute a command against a container in a pod
- `kubectl get [type] <name>` Display one or many resources
    - `kubectl get pods` Display all resources
- `kubectl logs <name>` Print the logs for a container in a pod

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