Package Development
=

Installing A Package In Your Project
-

1.  Install the version you want in the *composer.json* file of your project.

1.  Add the packages service provider to the *config/app.php* file, providers array.
1.  Run `artisan vendor:publish` to copy and required package/config files to your project.
1.  Fill in any necessary information in the newly create package config file.
1.  Follow any other specific instructions in the package readme.
1.  Done!