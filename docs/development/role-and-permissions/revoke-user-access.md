Revoke user access
=

DELETE "user-access"

|param  |data-type  |required   |optional   |
|---    |---        |---        |---        |
|user_id|integer    |x          |           |
|access_slug|string |x          |           |

**Example:**

```JavaScript
$.ajax({
    url: 'https://www.musora.com' +
        '/permission/user-access',
    type: 'delete'
  	data: {user_id: 21, access_slug: 'edit-content'} 
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
Returns, when the user access not exist:

```JSON
{
    "status":"error",
    "code":404,
    "total_results":0,
    "results":{},
    "error":{
        "title": "Not found.",
        "detail": "Delete failed, user have not access to: edit-content"
    }
}
```