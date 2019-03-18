railenvironment Extensions
=

**Adding a New Application to railenvironment**
-
The application name used must be consistent. Use the git project name.

1.  add application to railenvironmentmanager options
    -   add application name to the applications array at top of railenvironment/commands/bash/<b>railenvironmentmanager.sh</b>

1.  Database-setup (if your application does not have a database, skip this step)
    -   create directory with application name in railenvironment/*commands/bash/*

    -   In that directory, create a *[YOURAPPLICATION]*-pull-db.sh file. Look at other applications for examples.

1.  Add your application to the hosts-editing scripts
    -   Microsoft Windows: In railenvironment/.batch-scripts/<b>hosts-entries.bat</b>, copy an existing directive, replacing your application name appropriately.

    -   **Linux & MacOS: [TODO]**

1.  Create an Apache VirtualHost directive for your application.
    -   Copy and modify a pre-existing `<VirtualHost *:80>` entry in *"railenvironment/railenvironment_docker/alpine-apache-php-fpm-7/vhost.conf".*

    -   Only an *http* (port 80) directive is needed—in otherwords, just do a single `<VirtualHost *:80>` entry. Don't worry about the other ones unless you know what you're doing.

    -   Most likely only `ServerName` and `DocumentRoot` will likely need to be modified.
(optional) You can create a "special-instructions" script that will run after everything else runs. This can used for setting up things like a `.env` file from `.env.example` file, and you can issue instructions to the user—like where to get to get information to fill out said `.env` file.

1.  Commit your changes.

1.  Follow the instructions in the [After a New Application Has Been Added to railenvironment](#section-after-a-new-application-has-been-added-to-railenvironment) section below. As needed, get colleagues to do the same.

<br>

**After a New Application Has Been Added to railenvironment**
-
To make a newly-added application available locally at dev.*[YOURAPPLICATION]*.com:

1.  Pull latest commits on the relevant branch of the *railenvironment* project repository.

1.  Rebuild your railenvironment containers
From the *railenvironment/* directory on your computer, run `rrr` and select the "rebuild" option—likely number 3.

1.  Run `r setup` for the new application
    -   From **within** the *railenvironmentmanager container*.

    -   There may be special instructions for the application displayed by the script. Keep an eye out for these at the end.

<br>

**Adding a Pre-Existing Package to railenvironment**
-
Need to do some local development on a package. This is probably all you need to do.

1.  Add application to railenvironmentmanager options
add application name to the `applications` array at top of railenvironment/commands/bash/<b>railenvironmentmanager.sh</b>

1.  Commit your changes.

1.  Follow the instructions in the [After a New Application Has Been Added to railenvironment"](https://musora.readme.io/docs/railenvironment-extensions#section-after-a-new-application-has-been-added-to-railenvironment) section above—**except step 2**. As needed, get colleagues to do the same.

(Note that this is—at least in Oct 2017—steps 1, 5, and 6 from the "Adding a New Application to railenvironment" section above)

<br>

**Custom Options for Applications in railenvironment**
-
For the options below, if the custom file specified exists for your application, it will be run on setup. If it does not exist, the default general behavior will run.



Custom Setup Script
-
If you create a file in the above noted directory named after the application (in *railenvironment/commands/bash/* —sibling to *foobar-git-clone<span>.sh foobar-pull-db<span>.sh*) with the application name followed by `-setup.sh` (so that it would be *foobar-setup<span>.sh*), that will run instead of the just the default `applicationSetup` function defined in *railenvironment/commands/bash/functions.sh*.

Refer to *railenvironment/commands/bash/drumeo/* for an example.

<br>

Custom Git-Clone Script
-
You can override the default behaviour specified in `gitClone` function in *functions<span>.sh*. Create a *foobar-git-clone<span>.sh* file in your application's directory in *"railenvironment/commands/bash"*.

<br>

Custom Special-Instructions Script
-
You can create a "special-instructions" script that will run after everything else in the setup command runs. This can used for setting up things like a *.env* file from *.env.example file*, and you can issue instructions to the user—like where to get to get information to fill out said *.env* file.

<br>

Database-Pulling Script
-
As noted above, this is optional. If your application does not have a database, you don't need to worry about supplying this script. If it does not exist it will not be called.

However if your application *does* have a database, this will be what is called to create and fill said database. Refer to other applications

you do not need to provide a *foobar-pull-db.sh* script when adding an application.

<br>

Add a Custom Single Database-Table Pulling Script to any Application
-
If you would like the option to run `r pulltable` for your application, simply create a *foobar-pull-specific-table.sh file in railenvironment/commands/bash/foobar/*. Copy and modify the one in *railenvironment/commands/bash/drumeo/*.

Just modify the `databaseName` string and `tables` array appropriately. The `tables` array is a newline demited list of the tables you would like the user be presented with the option of pulling.

Unlike the other optional scripts above, this is not run on setup. It is merely available to be manually called via the `r pulltable` command.