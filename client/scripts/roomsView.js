var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
  },

  render: function(data) {
    let { results } = data;

    let rooms = [];
    for (let i = 0; i < results.length; i++) {
      if (results[i].roomname) {
        rooms.push(results[i].roomname);
      }
    }
    let uniqRooms = _.uniq(rooms);
    Rooms.list = uniqRooms;

    let selectedRooms = document.getElementById('selectedRooms');

    for (let room of Rooms.list) {
      let html = `<option>${room}</option>`;
      selectedRooms.innerHTML += html;
    }
  },

  renderRoom: function(typedRoom) {
    RoomsView.$select.append(`<option>${typedRoom}</option>`);
  }
};
