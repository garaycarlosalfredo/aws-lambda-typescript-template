# Example POST Function

## Summary

Endpoint verify if in the body request is the prop "message" if it is not present will return and validation error.

## Documentation nice to have

### If we call three part api

..good to have links to docs, request and response info.

## RQ/RS example:

```
curl --request POST \
  --url http://localhost:4000 \
  --header 'Content-Type: application/json' \
  --data '{ "message": "Hello world from Lambda!" }'
```

```
{
	"dummyMessage": "dummy function execution !!",
	"body": {
		"message": "Hello world from Lambda!"
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
				"messages": "Hello world from Lambda!"
			}
		},
		"stack": "ValidationError: message is a required field..."
	}
}
```
