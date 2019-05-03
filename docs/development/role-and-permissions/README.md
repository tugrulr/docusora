Role and Permissions
=

This package it's an API that allows admin to manage access rules and user access in a database and protects routes with the package middleware.

**Installation**

Require the package in your composer.json and update your dependency with composer update.

```JSON
"railroad/permissions" : "@dev"
```

API Reference
-
**endpoints**

Prepend all endpoints below with '/permissions'. Anything in curly braces is an inline parameter.

List of methods available

-   [create access](create-access.md)
-   [update access](update-access.md)
-   [delete access](delete-access.md)
-   [assign user access](assign-user-access.md)
-   [revoke user access](revoke-user-access.md)
-   [create access hierarchy](create-acess-hierarchy.md)
-   [delete access hierarchy](delete-access-hierarchy.md)

**Validation**

-   [validation errors](validation-errors.md)

**Middleware**

-   [protect routes](protect-routes.md)