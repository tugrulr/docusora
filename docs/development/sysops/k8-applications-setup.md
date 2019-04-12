K8 Applications Setup
=

This is a guide for how to setup our main applications (drumeo, pianote, guitareo, guitarlessons, musora) inside a new kubernetes cluster.

Getting Ready
-
1.  Pull railenvironment repository and navigate to the railenvironment_docker folder in the repo and run: docker-compose build

1.  Navigate to the repo root and run ./rrr.sh to enter the manager container

<br>

The Database
-

1.  Create a MySQL RDS instance and make sure it can be accessed by the nodes. It should also have a public IP so we can sync data to it from our local machines. You will need to add you local IP to the instances security group MySQL Port.

1.  Create a new MySQL user named 'railenv'. Our local railenvironment tools will use this user to run commands and sync data.
Enter the railenv mysql users password in to your railenvironment 'credentials' file. (probably under the musoraTestingDatabasePassword= variable)
1.  Inside the manager container, run the data sync command for the different websites (r musora db testing, r pianote db testing, r guitareo db testing, r drumeo db testing). This will copy the databases from our staging rds instance to the testing rds instance
1.  You should now have all the updated databases.
1.  Spin up an elasticache redis instance the same VPC, most applications need a redis server to function.

<br>

Kubernetes Connecting To The Cluster
-

1.  From inside the manager container, ssh to the railkubernetes container using the command 'r ssh 6'

1.  Make sure you railenvironment file 'docker/.aws/credentials' has the correct access creds. If you update it you need to run 'aws configure' (just hit enter on all the prompts) to access the new cluster in another aws account.
1.  Command: 'kops get clusters' should now list your cluster
1.  Run: 
    ```bash
    kops export kubecfg --name CLUSTER_NAME
    ```
    replace 'CLUSTER_NAME' with you cluster to set the current kubectl config. For example:
    ```bash
    kops export kubecfg --name se-test.railkuber.com
    ```
<br>

Setting Up The Build Pipeline
-

**Musora**

1.  Create a new codebuild project, connect our github account and choose the musora repo

1.  Use the latest ubuntu docker runtime
1.  Use buildspec.yml
1.  Create a new ECS/ECR repository to hold the images. Add a permission to the repository for Everyone and all actions.
1.  If its not already, update the railkubernetes deploy script file with your new codebuild and ecr details (Caleb does this)
1.  Make sure you IAM user has the new codebuild role and the codebuild roll has the EC2 Container Registry full access permission policy.


Drumeo
-
1.  See Musora, if that is done, you just need to make a new codebuild project with the same settings using the drumeo repo. Images should be sent to the same repository.

Kubernetes Setting Up Staging Applications
-
**Ingress (used for all apps)**

1.  Create namespace:
```bash
    k create -f /railkubernetes/kubernetes/ingress/staging/staging-ingress-namespace.yaml
```
1.  Create config map:
```bash
    k create -f /railkubernetes/kubernetes/ingress/staging/staging-ingress-config-map.yaml
```
1.  Create default backend:
```bash
    k create -f /railkubernetes/kubernetes/ingress/staging/staging-ingress-default-backend.yaml
```
1.  Create service and controller:
```bash
    k create -f /railkubernetes/kubernetes/ingress/staging/staging-ingress-service-and-ingress-controller.yaml
```

<br>

**Musora**
1.  Create the namespace:
```bash
    k create -f /railkubernetes/kubernetes/musora/staging/musora-staging-namespace.yaml
```
1.  Create the ssl cert secret:
```bash
    k create -f /railkubernetes/kubernetes/musora/staging/musora-staging-ssl-cert-secret.yaml
```
1.  Create the deployment: *(the pods might fail to start since the config application secrets will be missing, those will be created by Caleb)*
```bash
    k create -f /railkubernetes/kubernetes/musora/staging/musora-staging-ssl-cert-deployment.yaml
```
1.  Create the service:
```bash
    k create -f /railkubernetes/kubernetes/musora/staging/musora-staging-ssl-cert-service.yaml
```
1.  Create the ingress:
```bash    
    k create -f /railkubernetes/kubernetes/musora/staging/musora-staging-ssl-cert-ingress.yaml
```

<br>

**Drumeo**
1.  Same as musora, the cron deployment and config map do not need to be created.

<br>

Deploying
-
**Musora**
1.  From the manager container run: `r deploy musota`
1.  Choose testing
1.  Wait