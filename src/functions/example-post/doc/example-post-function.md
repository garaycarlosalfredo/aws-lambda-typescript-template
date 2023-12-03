# Documentation of example-post-function

## Summary

Endpoint verify if in the body request is the prop "message" if it is not present will return and validation error.

## Documentation nice to have

### If we call three part api

..good to have links to docs, request and response info.

## Success example:

### request:

```
curl --request POST \
  --url http://localhost:6000/dev \
  --header 'Content-Type: application/json' \
  --data '{
	"message": "dummy message"
}'
```

### response:

```
{
	"dummyMessage": "dummy function execution !!",
	"body": {
		"message": "dummy message"
	}
}
```

## Response validation error example response:

```
{
	"error": {
		"message": "message is a required field",
		"statusCode": 400,
		"data": {
			"input": {
				"messages": "dummy message"
			}
		},
		"stack": "ValidationError: message is a required field..."
	}
}
```
