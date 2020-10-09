const {
    HelloRequest, RepeatHelloRequest,
    HelloReply
} = require('./helloworld_pb.js');
const {GreeterClient} = require('./helloworld_grpc_web_pb.js');

var client = new GreeterClient('http://' + window.location.hostname + ':8080',
    null, null);

// simple unary call
var request = new HelloRequest();
request.setName('World');


document.addEventListener("DOMContentLoaded", function (event) {

    const rootDiv = document.getElementById('root');
    const streamDiv = document.getElementById('stream');

    client.sayHello(request, {}, (err, response) => {

        if (err) {
            const message = `Unexpected error for sayHello: code = ${err.code}` +
                `, message = "${err.message}"`;
            console.log(message);

            rootDiv.innerHTML += '<p style="color: #ff0000">' + message + '</p>'

        } else {
            console.log(response.getMessage());
            rootDiv.innerHTML += '<p>' + response.getMessage() + '</p>'
        }
    });

    // server streaming call
    var streamRequest = new RepeatHelloRequest();
    streamRequest.setName('World');
    streamRequest.setCount(5);

    var stream = client.sayRepeatHello(streamRequest, {});
    stream.on('data', (response) => {
        console.log(response.getMessage());
        streamDiv.innerHTML += '<p>' + response.getMessage() + '</p>'
    });
    stream.on('error', (err) => {
        var message = `Unexpected stream error: code = ${err.code}` +
            `, message = "${err.message}"`
        console.log(message);
        streamDiv.innerHTML += '<p style="color: #ff0000">' + message + '</p>'
    });
});