const socket = io.connect("http://localhost:3000");

//Query DOM
const back_btn = document.getElementById('back'),
      send_btn = document.getElementById('send'),
      message_input = document.getElementById('message'),
      handle_input = document.getElementById('handle'),
      output_div = document.getElementById('output');

back_btn.addEventListener('click', () => {
  location.replace("/");
});

//Emit events
send_btn.addEventListener('click', () => {
  socket.emit("chat", {
    handle: handle_input.value,
    message: message_input.value
  });
  message_input.value = "";
});

//Listen for events
socket.on("chat", data => {
  output_div.innerHTML += `<p>${data.handle}: ${data.message}</p>`;
});