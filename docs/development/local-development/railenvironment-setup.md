railenvironment Setup
=

1.  Clone [RailEnvironment](https://github.com/railroadmedia/railenvironment) to your computer.
1.  Build
    1.  Windows
        1.  In an elevated command prompt navigate to the root directory of the cloned repository.
        
        1.  Run `rrr` and follow the prompts.
    1.  Linux & MacOS
        1.  [TODO]
        
1.  There is a Lastpass "Secure Note" called "Railenvironment Credentials File". It can be found in "Shared-Railroad Web Developement" -> "Local Dev". Copy the contents of that file to "credentials" file in your local environment. It can be found in "railenvironment/credentials/".

1.  Run `$ r setup railkubernetes` .

Notes
-

-   Ideally place RailEnvironment in a directory called "web-development-enivronment" which is placed directory in your computer's root.
    -   Example (Windows): "C:/web-development-enivronment"

    -   Example (Linux): "/web-development-enivronment"

-   All commands that are preceded with `r` (such as `$ r setup railkubernetes` above) are to be run from within the Railenvironment Manager container. To enter said container, run `rrr`.
    -   Run `rrr` from the root directory your locally-cloned railenvironment project (you can likely get there by running `cd /web-development-environment/railenvironment`