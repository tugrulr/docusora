Infusionsoft API Down
=

Protecting Our Server
-

Our server can basically function as normal without infusionsoft working with 1 small change.

1.  Open laravel/app/classes/external-api-helpers/Infusionsoft.php

1.  Comment out the line (22 as of writing this)


[1]: /recipes/braised-lamb-shank

**PHP**

    $this->iSDK->cfgCon($this->apiAppName, $this->apiKey, $this->apiDbOn);

Becomes:

**PHP**

    // $this->iSDK->cfgCon($this->apiAppName, $this->apiKey, $this->apiDbOn);

3. Deploy

Once Infusionsoft gets their shit together you can un-comment the line.

**Make sure to go back and double check all physical orders were placed for fulfillment inside infusionsoft.**