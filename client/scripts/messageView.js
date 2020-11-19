var MessageView = {
  render: _.template(`<div class="chat"><%= text %>
                      <div class="username"><%= username %></div>
                      <div></div>
                      </div>`)
};

// $.getJSON(`http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,
//   function (data) {
//     let html = '';
//     let { results } = data;

//     let sanitizedClean = renderDAta(results);
//     //console.log(sanitizedClean);
//     for (let i = 0; i < sanitizedClean.length; i++) {
//       // console.log(sanitizedClean[i]);
//       html += MessageView.render(results[i]);
//     }
//     $('#chats').append(html);
//   });


// String.prototype.escape = function () {
//   var tagsToReplace = {
//     '&': '&amp;',
//     '<': '&lt;',
//     '>': '&gt;'
//   };
//   return this.replace(/[&<>]/g, function (tag) {
//     return tagsToReplace[tag] || tag;
//   });
// };



// var renderDAta = function (results) {
//   let messageInfo = [];

//   results.forEach(obj => {
//     var renderedData = {};
//     var createdAt = (obj.createdAt).escape();
//     var objectId = (obj.objectId).escape();

//     if (obj.roomname === null) {
//       obj.roomname = '';
//       var roomname = obj.roomname;
//     } else {
//       var roomname = (obj.roomname).escape();
//     }

//     var text = (obj.text).escape();

//     if (obj.username === null) {
//       obj.username = '';
//       var username = obj.username;
//     }
//     var username = (obj.username).escape();

//     renderedData.createdAt = createdAt;
//     renderedData.objectId = objectId;
//     renderedData.roomname = roomname;
//     renderedData.text = text;
//     renderedData.username = username;

//     messageInfo.push(renderedData);
//   });

//   return messageInfo;
// };



