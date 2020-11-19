var MessageView = {
  render: _.template(`<div class="chat"><%= text %>
                      <div class="username"><a href="#"><%= username %></a></div>
                      <div></div>
                      </div>`)
};

