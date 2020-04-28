$(function(){

  function buildHTML(message){
    if ( message.image ) {
      var html = 
        `<div class="contents">
          <div class="contents__name">
            <div class="contents__name__name">
              ${message.user_id}
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
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
        `<div class="contents">
        <div class="contents__name">
          <div class="contents__name__name">
            ${message.user_id}
          </div>
          <div class="contents__name__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>`
      console.log();
      return html;
    };
  }
$('#new_message').on('submit', function(e){
    e.preventDefault()
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
      })
})
});