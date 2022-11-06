# Edu_Server
## Run the server:
The server can be started by running **'npm start'**. <br />
## Test the API:
### Curl:
<br />To test the implementation one can invoke the API server as follows:<br />
curl -X POST http://localhost:3000/client/1 <br />
curl -X POST http://localhost:3000/client/2 <br /> This produsce 2 clients waiting for a response. The respose will be provided after invoking the /webhook as follows:<br /> 
curl -X POST -H 'Content-Type:application/json' -d '{"result":"ok" }' http://localhost:3000/webhook/:id
### Postman:
One can use Postman to test the API. Start as follows:<br />
POST http://localhost:3000/client/1<br />
POST http://localhost:3000/client/2<br />

To produce the response:<br />
POST http://localhost:3000/webhook/:id
