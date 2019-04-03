Commands
=

railenvironment Commands
-

Prepend all commands with `r`. See code snippets below for examples.


**setup**
-
`$ r setup`

Will prompt you for which application to setup.

You can also just pass the application to the command:

`$ r setup drumeo`

You can also pass a "skipdb" argument to the command. This will skip copying the database from the cloud to your local, potentially saving some time if you know you're current version if fine.

`$ r setup skipdb`

Or

`$ r setup drumeo skipdb`

<br>

**refreshConfigs**
-
This replaces your current config directory with a fresh re-cloned version.

The config repository: [github.com/railroadmedia/local-config](https://github.com/railroadmedia/local-config)

Note that this is also done everytime the setup command is done.

<br>

**ssh**
-
`$ r ssh` will place you in a terminal session inside a container of your choosing.

This replaces running `docker ps` followed by `docker exec -it 123FOO78 bash`.

(You cannot pass arguments to this command, just run `$ r ssh` use the prompt to specify the container)

<br>

**composer**
-
`$ r foo composer bar`

Will run a composer command ("bar") in the "foo" application.

You must specify the application when you call this.

This is the same as "sshing into" the apache-php-fpm container, and running composer commands.

Example:

`$ r drumeo composer bar baz qux`

is the same as running

    $ r ssh
    Which container would you like to ssh into?
    1. Manager
    2. PhpApache
    3. PhpMyAdmin
    4. Mysql
    5. Redis
    6. RailKubernetes

    Enter your selection:
    2

    Starting command to enter phpApache container
                        .....
                    ............
                ....................
            ............................
        ....................................
    ............................................
    bash-4.3# cd drumeo/
    bash-4.3# composer bar baz qux


<br>

**artisan**
-
This is the same as composer except runs `php artisan`.

<br>

**inFoo**
-
There are several commands that all start with "in" and all work similarily:

-   inManager
-   inPhpApache
-   inPhpMyAdmin
-   inMysql
-   inRedis
-   inRailKubernetes
-   ink8

These are similar to the `r composer` and `r artisan` commands above in that they take a string and runs it in a specific location.

However, these commands does not prepend the passed-in string.

For example:

`$ r inPhpApache "cd drumeo; composer bar baz qux"`

Is the same as

`$ r drumeo composer bar baz qux`

Note that in some cases you must "escape" your current bash session by packaging your command to run in quoation marks.

<br>

ink8
-
This is a shorted form of inRailKubernetes.

<br>

**db**
-
Run `$ r db` to be prompted for specifics, or pass them as desired. For example `$ r db local drumeo`.

This can:

update your local database with information from the staging database (default)
update the staging database with information from the production database (this function may be restricted)
update your local database with information from the production database if you pass the 'fromProd' argument. For example `$ r db fromprod` (will prompt for environment and application) or `$ r db local drumeo fromprod`. Is case-insensitive.

<br>

pulltable
-
Need to just pull a single table? Run `r pulltable`. You will be prompted for which table.

Everything above from db applies here. Thus you can pass fromprod if you like, and you can specify the environment or application, or omit them and be prompted. For example:

`r pulltable`<br>
`r pulltable fromprod`<br>
`r pulltable local drumeo fromProd`<br>
`r pulltable drumeo fRoMpRoD`<br>

(Note that if you application you're targetting does not yet have a "*-pull-specific-db-table.sh" script in railenvironment, this will not work. But there will be an informative message saying just that).

<br>

**deploy**
-
This will deploy a specified application to a specifed environment.

Again, run without arguments (`$ r deploy`) to be prompted for specifics, or pass them as desired. For example `$ r deploy staging drumeo`.

<br>

**status**
-
This command displays the status of Kubernetes Pods in a cluster, which is useful for seeing the state of a recent deployment.

Again, run without arguments (`$ r status`) to be prompted for specifics, or pass them as desired. For example `$ r status` staging drumeo.

<br>

kstatus
-
This is a shortcut to `r status` that uses the application and environment last set in kubernetes. This can done manually by running the the `kset` command.

This is run without the r preceding the command. Forexample: `$ kstatus`

<br>

**kubectlset**
-
This sets the context (environment) and namespace (application) for kubectl (in the RailKubernetes container).

Note this will be overwritten by running the `r status` command above. This is because internally they set the context and namespace the same way.

<br>

kset
-
This is an alias for the 'r kubectlset' command.

It can called using a this shortened name, and without the r preceding it. You can run just `$ kset` instead of `$ r kuberctlset`.

Again, run without arguments (`$ kset`) to be prompted for specifics, or pass them as desired. For example `$ kset staging drumeo`.