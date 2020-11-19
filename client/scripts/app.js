var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    App.fetch(MessagesView.render);
    App.fetch(RoomsView.render);
  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // console.log(data);

      callback(data);
    });
  },
  // Is callback for sanitize function?


  // for (let i = 0; i < results.length; i++) {
  //   var renderMessage = {};
  //   renderMessage.username = results[i].username;
  //   renderMessage.text = results[i].text;
  //   html += MessageView.render(renderMessage);
  // }
  // $('#chats').append(html);



  // $.getJSON(`http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,
  // function (data) {
  //   let html = '';
  //   let { results } = data;

  //   let sanitizedClean = renderDAta(results);
  //   //console.log(sanitizedClean);
  //   for (let i = 0; i < sanitizedClean.length; i++) {
  //     // console.log(sanitizedClean[i]);
  //     html += MessageView.render(results[i]);
  //   }
  //   $('#chats').append(html);
  // });



  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

