var Rooms = {

  list: [],

  add: function () {
    let typedRoom = prompt('Room name?');

    Rooms.list.push(typedRoom);
    uniqRooms = _.uniq(rooms);
    Rooms.list = uniqRooms;

    RoomsView.renderRoom(typedRoom);
  }
};