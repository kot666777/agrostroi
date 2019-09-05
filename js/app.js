$(function() {
    var names = [];
    $('.files_comment .media_list .myupload').click(function(){
        $('.files_comment .media_list .myupload img').width('18,9');
        setTimeout(function(){
            $('.files_comment .media_list .myupload img').width('21');
        },100);
    });
    $('body').on('change', '.picupload', function(event) {
        var getAttr = $(this).attr('click-type');
        var files = event.target.files;
        var z = 0
        setInterval(function(){
            if ($('.files_comment .media_list li').length < 5){
                $('.files_comment .media_list .myupload input').prop('disabled', false);
                $('.files_comment .media_list .myupload img').css('filter','grayscale(0)');
            }else{
                $('.files_comment .media_list .myupload input').prop('disabled', true);
                $('.files_comment .media_list .myupload img').css('filter','grayscale(1)');
            };
        });  
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            names.push($(this).get(0).files[i].name);
            if (file.type.match('image')) {
                var picReader = new FileReader();
                picReader.fileName = file.name
                picReader.addEventListener("load", function(event) {
                    var picFile = event.target;

                    var div = document.createElement("li");


                    div.innerHTML = "<img src='" + picFile.result + "'" +
                        "title='" + picFile.name + "'/><div><a href='javascript:void(0);' data-id='" + event.target.fileName + "' class='remove-pic'><img src='icon/delete_file.png' alt=''></a></div>";

                    $("#media_list").append(div);


                });
            } else {

                var picReader = new FileReader();
                picReader.fileName = file.name
                picReader.addEventListener("load", function(event) {

                    var picFile = event.target;

                    var div = document.createElement("li");

                    div.innerHTML = "<video src='" + picFile.result + "'" +
                        "title='" + picFile.name + "'></video><div id='" + z + "'  class='post-thumb'><div  class='inner-post-thumb'><a data-id='" + event.target.fileName + "' href='javascript:void(0);' class='remove-pic'><i class='fa fa-times' aria-hidden='true'></i></a><div></div>";
                    $("#media_list").append(div);

                });

            }
            picReader.readAsDataURL(file);
        }

    });
    $('body').on('click', '.remove-pic', function() {
        $(this).parent().parent().remove();
        var removeItem = $(this).attr('data-id');
        var yet = names.indexOf(removeItem);

        if (yet != -1) {
            names.splice(yet, 1);
        }
    });
});