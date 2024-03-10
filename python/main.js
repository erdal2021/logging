$(document).ready(function() {
    $("#infoBtn").click(function() {
        $.get('http://127.0.0.1:8000/info', function(data) {
            console.log(data);
        });
    });

    $("#debugBtn").click(function() {
        $.get('http://127.0.0.1:8000/debug', function(data) {
            console.log(data);
        });
    });

    $("#errorBtn").click(function() {
        $.get('http://127.0.0.1:8000/error', function(data) {
            console.log(data);
        });
    });

    $("#fatalBtn").click(function() {
        $.get('http://127.0.0.1:8000/fatal', function(data) {
            console.log(data);
        });
    });
});
