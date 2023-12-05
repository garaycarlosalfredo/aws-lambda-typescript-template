# Example GET Function

## Summary

Endpoint verify if in the query param request is the prop "by" if it is not present will return and validation error.

## Documentation nice to have

### If we call three part api

..good to have links to docs, request and response info.

## RQ/RS example:

```
curl --request GET \
  --url 'http://localhost:4000/Hello?by=someone' \
```

```
{
	"dummyMessageFromFunction": "dummy function execution !!",
	"pathParameters": {
		"greeting": "Hello"
	},
	"queryStringParameters": {
		"by": "someone"
	}
}
```

## Request validation error example response:

```
{
	"error": {
		"message": "by is a required query param",
		"statusCode": 400,
		"data": {
			"input": {
				"other": "someone"
			}
		},
		"stack": "ValidationError: by is a required query ..."
	}
}
```
