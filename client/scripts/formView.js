var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    console.log('anything');
    event.preventDefault();
    //event.stopPropagation();
    let input = document.getElementById('message').value;

    let message = {
      username: App.username,
      text: input,
      roomname: selectedRooms.value
    };

    Parse.create(message);
    html = MessageView.render(message);
    $('#chats').prepend(html);
    $('#message').val('');
  },


  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};