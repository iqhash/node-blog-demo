/**
 * Created by harttle on 1/7/15.
 */

function save(){// validation
    if($('#title').val().trim()=='')
        return $('.alert-danger').html('标题不能为空').show();
    $('form').submit();
}

$(function(){
    $('#content').bind('input propertychange', function(){
        $('#preview').html(marked($('#content').val()));
    });
});