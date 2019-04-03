Miscellaneous
=

Very Troll-y Errors and "Gotchas"
-
    Can't access files in container

**The Problem** (for Windows)

If you're in your railenv-manager container (like after running the rrr command) and you can't access your files that you know should be there (like in the /app/ dir which should have everything in your computer's "web-developement-environment/railenvironment/applications" dir)

You might see some error like this:

    bash: /commands/bash/aliases.sh: No such file or directory

Maybe right after you run `rrr` and enter the railenv-manager container.

Or maybe something like this:

    root@61525d6bc351:/# cd app/drumeo/laravel
    bash: cd: app/drumeo/laravel: No such file or directory

**The Cause**

Caleb sez:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"if ur shit aint getting mounted to docker it might be because your docker drive sharing is not working."

This can be caused by changing your Windows password, among other things.

**The Fix**

1.  open docker shared drives settings (right click docker app icon -> settings -> shared drives)

1.  check applicable drives (or at least just your main drive)
hit "Apply"
1.  enter (your Windows) credentials when prompted
restart docker
1.  Run "rrr" again, choosing option (likely "3") to rebuild
1.  ? ? ?
1.  profit

**Can also happen after Docker update**

In which case you just need to re-specify (and authorize) the shared drives—as per above.

<br>

Emails from Local
-
*"Send emails from Local Development Environment and with PHPUnit Tests"*
(Jonathan, Dec 19th 2016)

**Problem**

...You're running a test that triggers email sending and getting an error like 

    cURL error 60: SSL certificate problem: unable to get local issuer certificate

**The Fix**

If you just want to send emails from local while doing manual tests, steps 1 & 2 may be sufficient. You only need to proceed to further steps if you want to enable emails to be sent from PHPUnit tests. Be careful with that though! Please hard-code your email address over so that you don't accidentally send stuff to customers. Do not commit that change or any others that break the world.


1.  In `ExternalApiHelpers\Mandrill@sendMail` hard-code your email address over the one passed in so that you don't accidentally send stuff to customers.

1.  In `ExternalApiHelpers\Mandrill@sendMail`, comment-out the `if not production` clause.
1.  In Testcase, comment out the like setting `Mail::pretend` to `true`.
1.  If still getting the error message mentioned above, see [stackoverflow.com/q/29822686](http://stackoverflow.com/q/29822686).

Once you have it set up, keep it there long-term and comment|uncomment to toggle on|off as needed.

<br>

PHPMyAdmin
-

Address: [localhost:4805](localhost:4805)

Enter these details:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Server: mysql<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Username: root<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password: root<br>

<br>

Advanced Docker Commands
-

**Windows Command Prompt**

-   stop ALL docker containers:
        
        FOR /f "tokens=*" %i IN ('docker ps -q') DO docker stop %i
-   delete ALL docker...

    -   containers: 
        
            FOR /f "tokens=*" %i IN ('docker ps -a -q') DO docker rm %i
    -   images: 
    
            FOR /f "tokens=*" %i IN ('docker images -q') DO docker rmi %i
    -   volumes (databases and stuff):
            
            FOR /f "tokens=*" %i IN ('docker volume ls -q') DO docker volume remove %i
**POSIX**

*(Please add here if you've formulated them)*

<br>

Symlinking Packages
-
    ln -s /foo/source /bar/destination
Dont' forget to include that package's path in the project's PHP settings (PHPStorm, Settings -> Language & Frameworks).