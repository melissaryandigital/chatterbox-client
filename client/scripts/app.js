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

  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      console.log(data);
      let html = '';
      let { results } = data;
      for (let i = 0; i < results.length; i++) {
        console.log(results[i]);


      }
      callback();
    });
  },
  // Is callback for sanitize function?


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

