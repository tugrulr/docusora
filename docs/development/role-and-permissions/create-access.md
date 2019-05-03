Create access
=

PUT "access"

|param  |data-type  |required   |optional   |
|---    |---        |---        |---        |
|name   |string     |x          |           |
|slug   |           |x          |           |
|description|string |           |x          |
|brand  |string     |           |x          |



**Example:**

```JavaScript
$.ajax({
    url: 'https://www.musora.com' +
        '/permission/access',
    type: 'put'
  	data: {name:'edit content', slug: 'edit-content', description: 'Can edit CMS content', brand: 'drumeo'} 
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
        "name": "edit content",
        "slug": "edit-content",
        "description": "Can edit CMS content",
        "brand": "drumeo",
        "created_on": "2018-03-22 08:11:54",
        "updated_on": null
    }
}
```