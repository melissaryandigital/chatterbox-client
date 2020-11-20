var Friends = {

  list: [],

  initialize: function () {

    Friends.toggleStatus();

  },

  test: function() {
    $user = $('.username');
    $user = $('.chat');

    $user.on('click', function() {
      console.log('yes');
    });

  },


  toggleStatus: function() {


  }
};






// GOAL: when we click on a name, the status will change to 'friends' and it will in bold.

// messagesView
// Look at friendStatus
// if it's true, while we're rendering the page
//https://api.jquery.com/toggleclass/ https://api.jquery.com/toggleclass/

// Add a proptery for 'friendStatus' (by default it's false)
// When you click on a username
// Gets the text to find that username
// Updates the friendStatus to true
//



// Messages.results in messagesView gets an extra property called status.
// status will either be true / false. True means friends, False means NOT friends.
// when you click on a username, all people with that username becomes friends by toggling.
// status from false to true.
// if status is true, add the class "friends" (styles.css) will fire.
// if status is false, the css won't fire.








// toggleStatus: function() {
//   console.log('Friends.$user', Friends.$user);
//   setTimeout(function() {
//     console.log($('.username'));
//   }, 3000);
// }