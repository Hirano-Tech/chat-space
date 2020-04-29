$(function(){

  function buildHTML(message){
    if (message.content && message.image) {
      var html = 
        `
          <div class="contents__name">
            <div class="contents__name__name">
              ${message.user_name}
            </div>
            <div class="contents__name__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >`
    } else if (message.content) {
      var html =
        `<div class="contents__name">
          <div class="contents__name__name">
            ${message.user_name}
          </div>
          <div class="contents__name__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="lower-message__content">
            ${message.content}
          </p>`
    } else if (message.image) {
      var html =
        `<div class="contents__name">
        <div class="contents__name__name">
          ${message.user_name}
        </div>
        <div class="contents__name__date">
          ${message.created_at}
        </div>
        <img src=${message.image} >`
    };
    return html;
  }
$('#new_message').on('submit', function(e){
    console.log('success');
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data){
        var html = buildHTML(data);
        $('.contents').append(html);
        $('form')[0].reset();
        $('.chat-message').animate({ scrollTop: $('.chat-message')[0].scrollHeight}, 'fast' );
        // $('.contents').animate({ scrollTop: $('.message:last').offset().top});
        $('.form__submit').prop('disabled', false);
      })
      .fail(function() {
        alert("メッセージ送信に失敗しました。");
      });
})
});