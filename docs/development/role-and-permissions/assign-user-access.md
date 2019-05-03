Assign user access
=

PUT "user-access"

|param  |data-type  |required   |optional   |
|---    |---        |---        |---        |
|user_id|integer    |x          |           |
|access_id|integer  |x          |           |



**Example:**

```JavaScript
$.ajax({
    url: 'https://www.musora.com' +
        '/permission/user-access',
    type: 'put'
  	data: {user_id: 21, access_id: 1} 
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
    "code":200,
    "results":{
        "id": 1,
        "access_id": 1,
        "user_id": 21,
        "created_on": "2018-03-22 08:11:54",
        "updated_on": null
    }
}
```