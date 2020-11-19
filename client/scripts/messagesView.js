var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // FormView.$form.on('submit', FormView.handleSubmit);
  },

  render: function (data) {
    // renders chats

    let $chats = $('#chats');
    $chats.html('');
    let html = '';

    let { results } = data;
    console.log(results);
    for (let i = 0; i < results.length; i++) {
      var messageData = {};
      messageData.username = results[i].username;
      messageData.text = results[i].text;
      html += MessageView.render(messageData);
    }
    $chats.append(html);

  },

  renderMessage: function (message) {
    // render message that was posted

    let $chats = $('#chats');
    $chats.html('');
    let html = '';

    html += MessageView.render(message);
    $chats.append(html);
  }

};