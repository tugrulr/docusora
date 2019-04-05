Package Workflow
=

TL:DR
-
1.  Clone [laravel-package-template](https://github.com/railroadmedia/laravel-package-template) repository to your machine

1.  Make a copy of resulting directory (`+chmod777` maybe)
1.  Create a new repository ... commit your files to it
1.  Add to railenvironmentmanager
1.  run `composer install` in your package
That's it - you're good to go.

Theory and Description
This is primarily based on this article https://www.sitepoint.com/alternative-laravel-package-development-workflow/

Packages should be totally independent of your main application. They should be individually tested and fully functional without any reliance on your app. Each package will have it own full laravel installation.

However, this guide shows you how to develop the package and test it inside your main application while still keeping the package separate. Using local composer repositories you can make changes to your package and have it instantly updated in your application instead of pushing to Packagist and having to composer update in your application for every change.

Setting Up the Folders & Files for Developement
NOTE: This is ONLY for development, in production your package should have a release and be on packagist. It should be pulled in in your main applications composer.json like a normal package.

Folder Structure
If not already created, create a packages folder in your application folder
For Drumeo its (C:\web-development-environment\drumeo\packages\
Inside the packages folder create your
Namespace directory if it does not yet exist (ex: "my-namespace/")
Package folder in that namespace directory (ex: "my-namespace/package-foo")
The tree looks like this:

Text
 Copy
C:\
---web-wordspace
------ my-app
------ packages
--------- my-namespace
------------ my-package-1
--------------- composer.json
--------------- other package files...
------------ my-package-2
--------------- composer.json
--------------- other package files...
--------- my-other-namespace
------------ my-package-3
--------------- composer.json
--------------- other package files...
--------- etc...
C:\
---web-wordspace
------ my-app
------ packages
--------- my-namespace
------------ my-package-1
--------------- composer.json
--------------- other package files...
------------ my-package-2
--------------- composer.json
--------------- other package files...
--------- my-other-namespace
------------ my-package-3
--------------- composer.json
--------------- other package files...
--------- etc...
You cannot create the packages folder directly in the web-applications folder unless you have LAMP installed on your machine. You will need to run composer in that directory, and the best way to do that is via the docker workspace container.

Using the Packages in Your Application
In your main laravel applications composer.json add your repositories like so:
JSON
 Copy
{
    "repositories": [
        {
            "type": "path",
            "url": "../packages/my-namespace/my-package-1"
        },
        {
            "type": "path",
            "url": "../packages/my-namespace/my-package-2"
        },
        {
            "type": "path",
            "url": "../packages/my-other-namespace/my-package-3"
        }
    ],
    "require": {
        "my-namespace/package-1": "*",
        "my-namespace/package-2": "*",
        "my-namespace/package-3": "*"
    }
}
{
    "repositories": [
        {
            "type": "path",
            "url": "../packages/my-namespace/my-package-1"
        },
        {
            "type": "path",
            "url": "../packages/my-namespace/my-package-2"
        },
        {
            "type": "path",
            "url": "../packages/my-other-namespace/my-package-3"
        }
    ],
    "require": {
        "my-namespace/package-1": "*",
        "my-namespace/package-2": "*",
        "my-namespace/package-3": "*"
    }
}
Notes
Note 1
repositories is an array

Note 2
you may need to specify the version not as the wild-card used above (*), but rather as "dev" followed by a dash and then your package name in lowercase, like this:

JSON
 Copy
"require": {
    "my-namespace/package-1": "dev-my-package-1",
}
"require": {
    "my-namespace/package-1": "dev-my-package-1",
}
Note 3
The url path is relative to the laravel/composer.json file. Thus the above example assumes your packages dir is a sibling of your laravel dir and a child of your application dir:

C:\
---web-wordspace
------ my-app
--------- laravel
--------- packages
------------ my-namespace
--------------- my-package-1
However, if your packages dir is a sibling of your application dir...

C:\
---web-wordspace
------ my-app
--------- laravel
------ packages
--------- my-namespace
------------ my-package-1
... the path would instead be defined as "../../packages/my-namespace/my-package-1"

Cloning the Template
Copy/download the laravel-package-template repository in to your folder: https://github.com/railroadmedia/laravel-package-template
Change composer.json to fit your needs
Setup your service provider
Run composer install inside your package folder (if nothing happens you may need to run composer update)
You should see a message that mentions symlinking your local package development directory (the one that you just made) like this: - Installing my-namespace/my-package-1 (dev-my-package-1): Symlinking from ../packages/my-namespace/my-package
`
Add your package to your main applications' config/app.php file
(For Drumeo as of June 2017, this is: C:\web-development-environment\drumeo\laravel\config\app.php)

add service provider
'providers' => [
    MyNamespace/MyPackageName/Providers/MyProvider::class,
};
Add your package to the psr-4 section of "autoload" (namespace and the dir with the actual business logic of your package - likely the "src" directory)
"autoload": {
    "psr-4": {
        "MyNamespace\\MyPackageName\\": "src"
    },
}
Warning: this can troll you.

For our current Drumeo set up (with the "laravel" dir a child of the root dir), we need to traverse to the "/packages"
dir relative to "/laravel/composer.json".

 "autoload": {
     "psr-4": {
         "MyNamespace\\MyPackageName\\": "../packages/organization-name-foo/package-name-bar/src"
     },
 }
Failure to do this will result in a error like this:

[Symfony\Component\Debug\Exception\FatalThrowableError]                    
Class 'Railroad\Intercomeo\Providers\IntercomeoServiceProvider' not found
PHPStorm PHPUnit Testing Configuration
TLDR
Change the dir path in settings:

1. phpunit.xml
/var/www/laravel/phpunit.xml

↓ becomes ↓

/var/www/packages/railroad/intercomeo/phpunit.xml

2. vendor/autoload.xml
/var/www/laravel/vendor/autoload.xml

↓ becomes ↓

/var/www/packages/railroad/intercomeo/vendor/autoload.xml

Details
Set PHPStorm's PHPUnit settings to run the tests in your package, not the tests in your laravel application.

You likely have these settings for your regular development:

"PHPUnit Library" → "path to script": /var/www/laravel/vendor/autoload.php
"Test Runner" → "Default configuration file": /var/www/laravel/phpunit.xml
phpstorm phpunit interpreter settings

Change them accordingly.

Example
For the "railroad\intercomeo" package, for example:

"PHPUnit Library" → "path to script": /var/www/packages/railroad/intercomeo/vendor/autoload.php
"Test Runner" → "Default configuration file": /var/www/packages/railroad/intercomeo/phpunit.xml
phpstorm phpunit interpreter settings for package

Toggling between Testing application and package
From application to package
 edit application composer.json
 specify package namespace
 define location of dev package files
 add to requirement list. (Will likely just define as dev-packagename).
 run composer update in your application.
 change your PHPUnit settings in PHPStorm (specify dev package autoload.php and phpunit.xml locations)
 PHPUnit Library → path to script
 Test Runner" → Default configuration file