Kubernetes Guides
=

-   `ssh-keygen -t rsa`
-   `kops create cluster --zones=us-east-2a musora.production.railkuber.com --master-size=c4.large --node-size=c4.large`
-   `kops edit ig nodes --name musora.production.railkuber.com`
-   `kops update cluster musora.production.railkuber.com --yes`
-   `kops validate cluster`

Create subnets in new vpc

-   `db.us-east-2a.musora.production.railkuber.com - 172.20.1.0/24 - us-east-2a`
-   `db-alt.us-east-2a.musora.production.railkuber.com - 172.20.2.0/24 - us-east-2b`
-   `cache.us-east-2a.musora.production.railkuber.com - 172.20.3.0/24 - us-east-2a`

Go to main cluster vpc route able -> subnet associations. Add the 3 above we just made.

In RDS create new subnet group in our vpc. Add the db and db-alt subnets we made. Create your RDS instance/cluster, make sure its in ur VPC and set publicly accessible to yes. Set availability zone to "us-east-2a", set vpc security group to the "k8 nodes sg".

In Elasticache create new subnet group. Add the cache subnet we made. Make your new instance, set vpc to ours, set security group to the k8 cluster nodes sg. Now you must add nodes security group allow all ports to the cache instance sg.