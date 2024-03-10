// $(document).ready(function() {
//     $("#infoBtn").click(function() {
//         $.get('http://127.0.0.1:8000/info', function(data) {
//             console.log(data);
//         });
//     });

//     $("#debugBtn").click(function() {
//         $.get('http://127.0.0.1:8000/debug', function(data) {
//             console.log(data);
//         });
//     });

//     $("#errorBtn").click(function() {
//         $.get('http://127.0.0.1:8000/error', function(data) {
//             console.log(data);
//         });
//     });

//     $("#fatalBtn").click(function() {
//         $.get('http://127.0.0.1:8000/fatal', function(data) {
//             console.log(data);
//         });
//     });
// });
$(document).ready(function() {
    $("#infoBtn").click(function() {
        $.get('http://127.0.0.1:8000/info', function(data) {
            $("#logMessages").append("<p class='text-info'>" + data.message + "</p>");
        });
    });

    $("#debugBtn").click(function() {
        $.get('http://127.0.0.1:8000/debug', function(data) {
            $("#logMessages").append("<p class='text-primary'>" + data.message + "</p>");
        });
    });

    $("#errorBtn").click(function() {
        $.get('http://127.0.0.1:8000/error', function(data) {
            $("#logMessages").append("<p class='text-danger'>" + data.message + "</p>");
        });
    });

    $("#fatalBtn").click(function() {
        $.get('http://127.0.0.1:8000/fatal', function(data) {
            $("#logMessages").append("<p class='text-danger'>" + data.message + "</p>");
        });
    });
});
