railenvironment Introduction
=

Introduction
-

With RailEnvironment installed, you can enter it via the `rrr` command.

From this will place you in a terminal session inside the "RailEnvironment Manager" container.

Inside this container is a tool called "railenvironmentmanager". It can be accessed with the alias `r`.

Running just `r` will display the help text:

    root@6325bab9f8e2:/$ r

    ================================================================
    ==================== RailEnvironmentManager ====================
    ================================================================

    No command requested.
    Please try again, but this time add a command:

        * setup
        * refreshConfigs
        * ssh
        * composer
        * artisan
        * inManager
        * inPhpApache
        * inPhpMyAdmin
        * inMysql
        * inRedis
        * inRailKubernetes
        * ink8
        * db
        * deploy
        * status
        * kstatus
        * kubectlset

                 Or see the readme for more details:
              github.com/railroadmedia/railenvironment
    ================================================================

    root@6325bab9f8e2:/#

Commands are on the [Commands](../commands) page.

Passing Arguments to Commands
-

*railenvironmentmanager* commands will prompt for input when needed. However, you can often preempt this by passing information as arguments.

For example, `$ r status` will prompt for which container to enter.

    Options
        1. drumeo ("r status drumeo")
        2. pianote ("r status pianote")
        3. guitareo ("r status guitareo")
        4. guitarlessons ("r status guitarlessons")
        5. railkubernetes ("r status railkubernetes")

    Enter your selection:

If you input `1` for "drumeo", it will then continue thusly...

    1
    running "r status drumeo "
    Which environment would you put the pulled data?
    1: staging
    2: production (do not use this unless you know what you are doing)

    Enter the corresponding number (default 1) (ctrl+c to cancel this):

Enter `1`, for "staging", and it will run thusly...

    1
    Fetching status for drumeo (staging). This will just take a second.
    NAME                                         READY     STATUS    RESTARTS   AGE
    drumeo-staging-deployment-3126071646-clr0n   1/1       Running   0          28d
    drumeo-staging-deployment-3126071646-pldb1   1/1       Running   0          28d

However, as you become familiar with the available options, you can just specify them when you call the command. For example `$ r status drumeo` will return:

    Which environment would you put the pulled data?
    1: staging
    2: production (do not use this unless you know what you are doing)

    Enter the corresponding number (default 1) (ctrl+c to cancel this):

You can pass multiple pieces of information. For example `$ r status drumeo staging` will provide all the information needed to run the command, returning the result immediately without needing to prompt you for more input:

    Fetching status for drumeo (staging). This will just take a second.
    NAME                                         READY     STATUS    RESTARTS   AGE
    drumeo-staging-deployment-3126071646-clr0n   1/1       Running   0          28d
    drumeo-staging-deployment-3126071646-pldb1   1/1       Running   0          28d

(This specific command—used here for demonstrative purposes—displays the status of Kubernetes Pods in a cluster, which is useful for seeing the state of a recent deployment).

Note that the order of the arguments does not matter. Both `$ r status staging drumeo` and `$ r status drumeo staging` will return the same results.

Also note that you can pass only some information and be prompted for the rest. Again order does not matter. Above we called `$ r status drumeo` and were prompted to choose either "staging" or "production". Conversly we can call just `$ r status staging` and then be prompted only for the application, since the enviroment is already specified by the argument.