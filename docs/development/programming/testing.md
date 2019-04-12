Testing
=
```
Put values in config for use in test
$this->app['config']->set([
    'foo' => 'bar'
]);
```

Then any service in the application that calls on them will receive them.

For example, in the Soundslice package:

```php
$this->auth = [
    app('config')['soundslice.soundsliceAppId'],
    app('config')['soundslice.soundsliceSecret']
];
```
can be made usable by some configuration in the *'setup'* method of your test class

First load your environmental variables using [Dotenv](https://github.com/vlucas/phpdotenv), then set the values:

```php
$config = new \Dotenv\Dotenv(__DIR__ . '/../../', '.env.testing');
$config->load();

$this->app['config']->set('soundslice.soundsliceAppId', env('SOUNDSLICE_APP_ID'));
$this->app['config']->set('soundslice.soundsliceSecret', env('SOUNDSLICE_SECRET'));
```

Note that trying to set the variables like this will not work:

```php
$this->app['config']->set([
    'soundslice',
    [
        'soundsliceAppId' => env('SOUNDSLICE_APP_ID'),
        'soundslice.soundsliceSecret', env('SOUNDSLICE_SECRET')
    ]
]);
```

Maybe because it's not doing the same as what actually happens with the config when the application run "naturally" (not in a test), or maybe something else. If you figure it out or know maybe replace this paragraph with one that explains why?