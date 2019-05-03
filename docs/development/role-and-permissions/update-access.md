Update access
=

PATCH "access/{accessId}"
|param  |data-type  |required   |optional   |
|---    |---        |---        |---        |
|name   |string     |           |x          |
|slug   |string     |           |x          |
|description|string |           |x          |
|brand  |string     |           |X          |


Example:

```JavaScript
 Copy
$.ajax({
    url: 'https://www.musora.com' +
        '/permission/access/1',
    type: 'patch'
  	data: {name:'edit content modified'} 
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
 Copy
{
    "status":"ok",
    "code":201,
    "results":{
        "id": 1,
        "name": "edit content modified",
        "slug": "edit-content",
        "description": "Can edit CMS content",
        "brand": "drumeo",
        "created_on": "2018-03-22 08:11:54",
        "updated_on": "2018-03-22 08:27:13"
    }
}
```

Returns, when the access not exist:

```JSON
 Copy
{
    "status":"error",
    "code":404,
    "total_results":0,
    "results":{},
    "error":{
        "title": "Not found.",
        "detail": "Update failed, access not found with id: {accessId}"
    }
}
```
