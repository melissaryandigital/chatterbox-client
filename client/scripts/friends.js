var Friends = {

  list: [],

  initialize: function () {
    Friends.toggleStatus();
  },

  addFriend: function () {
    $('#chats .chat').on('click', function () {

      Friends.toggleStatus(this.classList[1]);
      // Friends.list.push(this.classList[1]);
      // console.log(Friends.list);
    });
  },

  toggleStatus: function (friend) {
    console.log(friend);
    let allUser = document.getElementsByClassName(friend);

    for (let i = 0; i < allUser.length; i++) {
      if (!allUser[i].classList.contains('friend')) {
        allUser[i].classList.add('friend');

      } else {
        allUser[i].classList.remove('friend');
        // Friends.list = Friends.list.filter(friends => friends !== `${friend}`);
        // console.log(Friends.list);
      }
    }
  }
};



