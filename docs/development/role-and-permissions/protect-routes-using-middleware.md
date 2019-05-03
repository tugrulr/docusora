Protecting Routes using middleware
=

The package comes with PermissionMiddleware middleware that it's registered automatically as 'permission'. With the middleware you can easly filter your router by user access rights.

In order to protect a route you have to specify the 'permission' middleware on the route you'd like to protect and specify the access rules slugs as an array.

**Example:**

```PHP
<?php
Route::patch(
            '/address/{id}',
            [
                'uses' => Railroad\Ecommerce\Controllers\AddressJsonController::class . '@update',
                'middleware' => ['permission'],
                'permissions' => ['admin','editor','isOwner'],
            ]
        )->name('address.update');
```

When the route is requested it will check if the currently logged in user has admin or the editor role or it's the owner of the given address.

If the user has access to the given resource then the controller will be called as normal.

If there is not logged in user and the route should be protected an error it's returned in the JSON response's errors array:

```JSON
{
 "status":"error",
 "code": 403,
  "total_results": 0,
  "results":{},
  "error":{
      "title":"Not allowed.",
      "detail":"This action is unauthorized. Please login"  
  }
}  
```
`
If the logged in user have not access to the protected route an error it's returned in the JSON response's errors array:

```JSON
{
 "status":"error",
 "code": 403,
  "total_results": 0,
  "results":{},
  "error":{
      "title":"Not allowed.",
      "detail":"This action is unauthorized."  
  }
}  
```

Ownership verification
-

The concept of ownership is used to allow users to perform actions on resources they 'own'.
In order to protect a route for ownership you have to specify the **'permission'** middleware on the route you'd like to protect and specify the **'isOwner'** permission.

It's **required** to create the configuration file if we use the package middleware **isOwner** permission.

The configuration file should be located in the config directory and should contain:

-   An associative array with the route name and table name (with key table_names). This array should contain the mapping between route names and table names for all the routes that are protected with **isOwner** permission. There are some situations when for a route name we should check the ownership in different table based on the parameters send on the request: e.g.: On e-commerce project we have user and customer. If we want to update a payment method we should verify the user or the customer ownership. In the configuration file we have the possibility to define an array for the route table name; the keys should be the request parameters name ('user_id' or 'customer_id') and the value should be the table name that should be used (*'ecommerce_user_payment_methods' or *'ecommerce_customer_payment_methods'*)

-   An associative array with the route name and the primary key that should be checked (with key column_names). By default the package will check against id primary key. You do not have to pass in all column names; only the ones that are not **id**.

**Example:**

```PHP
<?php
return [
    'table_names' => [
        'address.update' => 'ecommerce_address',
        'address.delete' => 'ecommerce_address',
        'payment-method.update' => [
            'user_id' => 'ecommerce_user_payment_methods',
            'customer_id' => 'ecommerce_customer_payment_methods'
        ],
        'payment-method.delete' => 'ecommerce_user_payment_methods',	
    ],
    'column_names' => [
        'payment-method.update' => 'payment_method_id',
        'payment-method.delete' => 'payment_method_id',
    ]
];
```