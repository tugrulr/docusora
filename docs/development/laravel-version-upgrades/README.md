Laravel Version Upgrades
=

5.6
-

Upgrade Guide: [https://laravel.com/docs/5.6/upgrade](https://laravel.com/docs/5.6/upgrade)
<br>

Trust Proxies
-

Musora has a class at *Http/Middleware/TrustProxies.php* that defines trusted proxies. As per the upgrade docs, we no longer specify an array for those values. Instead we've simply specified the "all" option as noted in the upgrade docs:

before:

```php
protected $headers = [
    Request::HEADER_FORWARDED => 'FORWARDED',
    Request::HEADER_X_FORWARDED_FOR => 'X_FORWARDED_FOR',
    Request::HEADER_X_FORWARDED_HOST => 'X_FORWARDED_HOST',
    Request::HEADER_X_FORWARDED_PORT => 'X_FORWARDED_PORT',
    Request::HEADER_X_FORWARDED_PROTO => 'X_FORWARDED_PROTO',
];
```
after:

```php
protected $headers = Request::HEADER_X_FORWARDED_ALL;
```

Pianote does not have that middleware - or one like it. It defines trusted proxies in the [bootstrap/app.php](https://github.com/railroadmedia/pianote/blob/master/bootstrap/app.php) file:

```
\Illuminate\Http\Request::setTrustedProxies([], \Symfony\Component\HttpFoundation\Request::HEADER_FORWARDED);
```

Note that you can define which proxies to trust in the 'proxies' property. Or you can allow all -
`protected $proxies = '*';` .

Validation
-
**Note:** I believe that the railcontent validation uses (something that uses) the `ValidatesWhenResolved` interface mentioned in the "Validation" section.

The validate method of the ValidatesWhenResolved interface / trait has been renamed to validateResolved in order to avoid conflicts with the `$request->validate()` method.

Keep an eye out for that.