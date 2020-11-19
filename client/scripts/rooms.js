var Rooms = {

  list: [],

  add: function () {
    let typedRoom = prompt('Room name?');
    Rooms.list.push(typedRoom);

    RoomsView.renderRoom(typedRoom);
  }
};