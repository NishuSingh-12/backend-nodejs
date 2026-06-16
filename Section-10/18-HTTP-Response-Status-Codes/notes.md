HTTP Response Status Codes

HTTP status codes are sent by the server to indicate the result of a client's request.

Interview Definition:

HTTP status codes are three-digit numbers returned by the server to indicate whether a request was successful, failed, or requires further action.

1xx – Informational Responses
100 Continue

Definition: The server has received the request headers and the client can continue sending the request body.

Interview Answer:

100 Continue indicates that the initial part of the request has been received successfully.

2xx – Success Responses
200 OK

Definition: The request was successful.

Interview Answer:

200 OK means the request was processed successfully.

201 Created

Definition: A new resource was successfully created.

Interview Answer:

201 Created indicates that a new resource has been created successfully.

204 No Content

Definition: Request succeeded, but there is no content to return.

Interview Answer:

204 No Content means the request was successful, but the response body is empty.

3xx – Redirection Responses
301 Moved Permanently

Definition: The resource has permanently moved to a new URL.

Interview Answer:

301 Moved Permanently indicates that the requested resource has a new permanent URL.

302 Found

Definition: Temporary redirection to another URL.

Interview Answer:

302 Found indicates that the resource is temporarily available at a different URL.

304 Not Modified

Definition: Cached version can be used because the resource has not changed.

Interview Answer:

304 Not Modified tells the client to use its cached copy of the resource.

4xx – Client Errors
400 Bad Request

Definition: The request is invalid or malformed.

Interview Answer:

400 Bad Request means the server cannot process the request because of invalid syntax.

401 Unauthorized

Definition: Authentication is required.

Interview Answer:

401 Unauthorized means the user must authenticate before accessing the resource.

403 Forbidden

Definition: The user is authenticated but does not have permission.

Interview Answer:

403 Forbidden means access to the resource is denied.

404 Not Found

Definition: The requested resource does not exist.

Interview Answer:

404 Not Found means the requested resource could not be found on the server.

405 Method Not Allowed

Definition: The HTTP method is not supported for the resource.

Interview Answer:

405 Method Not Allowed means the requested HTTP method is not permitted.

409 Conflict

Definition: Request conflicts with the current state of the resource.

Interview Answer:

409 Conflict occurs when the request conflicts with existing data.

5xx – Server Errors
500 Internal Server Error

Definition: Generic server-side error.

Interview Answer:

500 Internal Server Error means an unexpected error occurred on the server.

502 Bad Gateway

Definition: Server received an invalid response from an upstream server.

Interview Answer:

502 Bad Gateway indicates that a server received an invalid response from another server.

503 Service Unavailable

Definition: Server is temporarily unavailable.

Interview Answer:

503 Service Unavailable means the server is temporarily unable to handle requests.

504 Gateway Timeout

Definition: Upstream server took too long to respond.

Interview Answer:

504 Gateway Timeout means the server did not receive a timely response from another server.

Most Important Status Codes for Interviews
Code Meaning
200 OK
201 Created
204 No Content
301 Moved Permanently
304 Not Modified
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
405 Method Not Allowed
409 Conflict
500 Internal Server Error
503 Service Unavailable
Quick Revision
1xx → Information
2xx → Success
3xx → Redirection
4xx → Client Error
5xx → Server Error

200 → OK
201 → Created
204 → No Content

301 → Permanent Redirect
304 → Not Modified

400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found

500 → Internal Server Error
503 → Service Unavailable
Interview Question

Q: What is the difference between 401 and 403?

Answer:

401 Unauthorized means authentication is required or invalid credentials were provided, whereas 403 Forbidden means the user is authenticated but does not have permission to access the resource.
