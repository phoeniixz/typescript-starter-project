import getMessage from "./message";

const message = getMessage();
document.getElementById('my-message')!.innerHTML = message;