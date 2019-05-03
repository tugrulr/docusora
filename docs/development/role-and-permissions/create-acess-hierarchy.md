Create access hierarchy
=

|param  |data-type  |required   |optional   |
|---    |---        |---        |---        |
|parent_id|integer  |x          |           |
|child_id|integer   |x          |           |

PUT "access-hierarchy"

**Example:**

```JavaScript
$.ajax({
    url: 'https://www.musora.com' +
        '/permission/access-hierarchy',
    type: 'put'
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
    "code":200,
    "results":{
        "id": 1,
        "parent_id": 1,
        "child_id": 2,
        "created_on": "2018-03-22 08:33:55",
        "updated_on": null
    }
}
```