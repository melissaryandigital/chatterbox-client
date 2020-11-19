var MessagesView = {

  $chats: $('#chats'),
  $select: $('#rooms select'),

  initialize: function () {
    // Listen for select change
    MessagesView.$select.on('change', MessagesView.renderFiltered);
  },

  render: function (data) {
    // renders chats

    let $chats = $('#chats');
    $chats.html('');
    let html = '';
    console.log(data);
    let { results } = data;
    // console.log(results);
    let arr = [];

    for (let i = 0; i < results.length; i++) {
      var messageData = {};
      messageData.createdAt = _.escape(results[i].createdAt);
      messageData.objectId = _.escape(results[i].objectId);
      messageData.roomname = _.escape(results[i].roomname);
      messageData.updatedAt = _.escape(results[i].updatedAt);
      messageData.username = _.escape(results[i].username);
      messageData.text = _.escape(results[i].text);

      html += MessageView.render(messageData);

      arr.push(messageData);
    }
    Messages.results = arr;
    $chats.append(html);

  },

  renderMessage: function (message) {
    // render message that was posted

    let $chats = $('#chats');
    $chats.html('');
    let html = '';

    html += MessageView.render(message);
    $chats.append(html);
  },

  renderFiltered: function () {
    // renders filtered message after select change

    let $chats = $('#chats');
    $chats.html('');
    let html = '';

    //let room = $('#selectedRooms').val();


    var filteredResults = Messages.results.filter(item => {
      return item['roomname'] === room;
    });

    for (var i = 0; i < filteredResults.length; i++) {
      html += MessageView.render(filteredResults[i]);
    }

    $chats.append(html);
  }
};


