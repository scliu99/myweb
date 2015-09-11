//$(function () {
//    $('#typo')
//        .on('mouseover', function () {
//            $('#typo').animate.stop(true)({
//                backgroundColor: '#ae5e9b'
//            },
//            500
//          );
//        })
//        .on('mouseout', function () {
//            $('#typo').animate.stop(true)({
//                backgroundColor: '#3498db'
//            },
//            500
//        );
//   });
//});

$(function () {
    $('#typo .inner').on('click', function () {
        $('#typo .inner').animate({
            color: '#ebc000'
            },
            1500
        );
    });
});

