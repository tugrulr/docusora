Delete access
=

DELETE "access/{accessId}"

**Example:**

```JavaScript
$.ajax({
    url: 'https://www.musora.com' +
        '/permission/access/1',
    type: 'delete'
  	data: {} 
    dataType: 'json',
    success: function(response) {
        // handle success
    },
    error: function(response) {
        // handle error
    }
});
```

Returns, on success:

```JSON
{
    "status":"ok",
    "code":204,
    "results": null
}
```

Returns, when the access not exist:

```JSON
{
    "status":"error",
    "code":404,
    "total_results":0,
    "results":{},
    "error":{
        "title": "Not found.",
        "detail": "Delete failed, access not found with id: 1"
    }
}
```