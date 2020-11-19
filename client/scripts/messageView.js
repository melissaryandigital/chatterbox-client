var MessageView = {
  render: _.template(`<div class="chat"><%= text %>
                      <div class="username"><%= username %></div>
                      <div></div>
                      </div>`)
};

