Validation Errors
=

The package use Form Request Validation classes that contain validation logic and the incoming form request is validated before the controller method is called.

All the validation errors are available in the JSON response's errors array.

**Example:**

```JSON
{
 "status":"error",
 "code": 422,
  "total_results": 0,
  "results":{},
  "errors":{
    "0": {
      "source":"name",
      "detail":"The name field is required."
    },
    "1":{
      "source":"slug",
      "detail":"The slug field is required."
    }
  }
}  
```