const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.innerHTML = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  const text = input.toLowerCase();

  if (text.includes("доставка")) {
    return "Информация по доставке: доставка осуществляется в течение 3–5 рабочих дней.";
  }

  if (text.includes("оплата")) {
    return "Вы можете оплатить заказ банковской картой, наличными при получении или через электронный кошелек.";
  }

  if (text.includes("возврат")) {
    return "Возврат товара возможен в течение 14 дней при наличии чека и сохранении товарного вида.";
  }

  if (text.includes("контакты")) {
    return "Контакты службы поддержки:<br>Телефон: +7 (700) 000-00-00<br>Email: support@example.com";
  }

  if (text.includes("привет") || text.includes("здравствуйте")) {
    return "Здравствуйте! Напишите: доставка, оплата, возврат или контакты.";
  }

  if (text.includes("спасибо")) {
    return "Пожалуйста! Обращайтесь, если появятся еще вопросы 😊";
  }

  return "Извините, я пока могу помочь только по темам: доставка, оплата, возврат, контакты.";
}

function sendMessage() {
  const text = userInput.value.trim();

  if (text === "") return;

  addMessage(text, "user");

  setTimeout(() => {
    const botReply = getBotResponse(text);
    addMessage(botReply, "bot");
  }, 500);

  userInput.value = "";
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
