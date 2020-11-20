var Friends = {
  //$user: $('.username'),
  list: [],

  initialize: function () {

  },

  addFriend: function () {

    let username = document.querySelector('#chats');

    username.addEventListener('click', function (event) {

      Friends.list.push(event.target.innerText);
      let user = event.target.innerText;
      let friend = event.target;
      Friends.toggleStatus(user);
    });

  },


  // when we click a username, that user name will go to the friends list.
  // it fires toggleStatus:


  // toggleStatus:
  // for loop around the Message.results and check to see if the username are in the friends list
  // if it is on the friends list we add the friend class to that item


  toggleStatus: function (friend) {

    //let $friend = friend;

    let { results } = Messages;
    for (let i = 0; i < results.length; i++) {
      if (results[i]['username'] === friend) {
        friend.classList.add('friend');
        // let test = $('this').class('username');
        console.log($friend);

        //$('this').parent();
      } else {
        //console.log('no');
      }
    }



    //let $friend = friend;

    // let { results } = Messages;
    // for (let i = 0; i < results.length; i++) {
    //   if (Friends.list.includes(results[i]['username'])) {
    //     friend.classList.add('friend');
    //     console.log('yes');
    //   }
    // }
  }
};



// $user = $('.username');
// //let chat = document.querySelector('.chat');

// $user.on('click', function (event) {
//   console.log(event.target.innerText);

//   let username = event.target.innerText;
//   let { results } = Messages;


//   for (var i = 0; i < results.length; i++) {

//     if (results[i]['username'] === username) {

//       if (results[i]['status'] === true) {
//         results[i]['status'] = false;
//       } else {
//         results[i]['status'] = true;
//       }
//     }
//   }
//   $(this).toggleClass('friend');
// });
// },

// toggleFriendClass: function () {

// }
// }