var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form

    event.preventDefault();
    //event.stopPropagation();
    let input = document.getElementById('message').value;

    let message = {
      username: App.username,
      text: input
      //roomname: 'Reddit'
    };

    Parse.create(message);


    location.reload();

  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};