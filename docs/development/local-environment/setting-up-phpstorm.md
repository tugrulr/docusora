Setting Up PHPStorm
=

**All necessary PHPStorm settings and configuration are now stored directly inside the project git in the .idea folder.**

As soon as you clone a project repository and open the directory in PHPStorm they will automatically be loaded. This is possible via the following git ignore file entries:

**.gitignore**

    /.idea
    !.idea/codeStyles
    !.idea/codeStyles/codeStyleConfig.xml
    !.idea/deployment.xml
    !.idea/laravel-plugin.xml
    !.idea/misc.xml
    !.idea/modules.xml
    !.idea/php.xml
    !.idea/php-test-framework.xml
    !.idea/recordeo.iml
    !.idea/vcs.xml
    !.idea/webServers.xml