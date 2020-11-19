var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.renderRoom);
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
    Rooms = uniqRooms;

    let selectedRooms = document.getElementById('selectedRooms');

    for (let room of Rooms) {
      let html = `<option>${room}</option>`;
      selectedRooms.innerHTML += html;
    }
  },

  renderRoom: function(data) {

    let addRoom = document.getElementById('rooms button');
    let typedRoom = prompt('Room name?');
    Rooms.push(typedRoom);

    let $selectedRooms = $('#rooms select');

    let html = `<option>${typedRoom}</option>`;
    $selectedRooms.append(html);
  }
};
