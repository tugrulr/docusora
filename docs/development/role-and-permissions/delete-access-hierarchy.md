Delete access hierarchy
=


|param  |data-type  |required   |optional   |
|---    |---        |---        |---        |
|parent_id|integer  |x          |           |
|child_id|integer   |x          |           |

**Example:**

```JavaScript
$.ajax({
    url: 'https://www.musora.com' +
        '/permission/access-hierarchy',
    type: 'delete'
  	data: {parent_id: 1, child_id: 2} 
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

Returns, when the access hierarchy not exist:

```JSON
{
    "status":"error",
    "code":404,
    "total_results":0,
    "results":{},
    "error":{
        "title": "Not found.",
        "detail": "Delete failed, access have not the child: 2"
    }
}
```