# Documentation of example-get-function

## Summary

Endpoint verify if in the query param request is the prop "by" if it is not present will return and validation error.

## Documentation nice to have

### If we call three part api

..good to have links to docs, request and response info.

## Success example:

#request:

```
curl --request GET \
  --url 'http://localhost:6000/dev/Hello?by=someone' \
  --header 'User-Agent: insomnia/8.4.5'
```

### response:

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
