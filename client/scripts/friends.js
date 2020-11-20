var Friends = {
  //$user: $('.username'),
  list: [],

  initialize: function () {
    //FormView.$form.on('submit', FormView.handleSubmit);
  },

  toggleStatus: function () {
    // adds .friend class to the chat div for specific user
    // iterate through friends list
    // add class friends username
    $user = $('.username');
    let chat = document.querySelector('.chat');

    $user.on('click', function (event) {
      console.log(event.target.innerText);

      let username = event.target.innerText;
      let { results } = Messages;

      // iterate through all messages
      for (var i = 0; i < results.length; i++) {
        // if the message's username = clicked username
        if (results[i]['username'] === username) {
          // check the status and toggle it
          if (results[i]['status'] === true) {
            results[i]['status'] = false;
          } else {
            results[i]['status'] = true;
          }
          // find all chats made by this username
          // add the class
        }
      }
      $(this).toggleClass('friend');
      //$user.toggleClass('friend');
      //Friends.toggleFriendClass();
    });
  },

  toggleFriendClass: function () {

  }


};