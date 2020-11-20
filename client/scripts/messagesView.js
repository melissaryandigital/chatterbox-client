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

    let messageArr = [];
    // let friendsArr = [];

    for (let i = 0; i < results.length; i++) {
      let messageData = {};
      // let friendsData = {};

      messageData.createdAt = escape(results[i].createdAt);
      messageData.objectId = escape(results[i].objectId);
      messageData.roomname = escape(results[i].roomname);
      messageData.updatedAt = escape(results[i].updatedAt);
      messageData.username = escape(results[i].username);
      messageData.text = escape(results[i].text);
      messageData.status = false;

      // friendsData.createdAt = messageData.createdAt;
      // friendsData.objectId = messageData.objectId;
      // friendsData.roomname = messageData.roomname;
      // friendsData.updatedAt = messageData.updatedAt;
      // friendsData.username = messageData.username;
      // friendsData.text = messageData.text;
      // friendsData.status = false;

      html += MessageView.render(messageData);

      messageArr.push(messageData);
      // friendsArr.push(friendsData);
    }
    Messages.results = messageArr;
    // Friends.list = friendsArr;

    $chats.append(html);

    // just a test for now! Possibly erase FRIENDs stuff above or comment out.
    Friends.toggleStatus();

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

    let room = $('#selectedRooms').val();


    var filteredResults = Messages.results.filter(item => {
      return item.roomname === room;
    });

    for (var i = 0; i < filteredResults.length; i++) {
      html += MessageView.render(filteredResults[i]);
    }

    $chats.append(html);
  }
};


