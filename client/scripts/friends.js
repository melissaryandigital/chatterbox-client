var Friends = {
  //$user: $('.username'),
  list: [],

  initialize: function () {
    // Friends.toggleStatus();
  },

  addFriend: function () {
    $('#chats .chat').on('click', function () {

      Friends.toggleStatus(this.classList[1]);
    });
  },


  toggleStatus: function (friend) {

    let allUser = document.getElementsByClassName(friend);

    for (let i = 0; i < allUser.length; i++) {
      if (!allUser[i].classList.contains('friend')) {
        allUser[i].classList.add('friend');
      } else {
        allUser[i].classList.remove('friend');

      }
    }
  }



};



