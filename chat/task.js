function chat(){
    const window = document.querySelector('.chat-widget');
    window.addEventListener('click', function(e){
        window.className = "chat-widget chat-widget_active";
     })
     window.addEventListener('keydown',function(e){
        if (e.key == 'Enter'){
            input();
        }
    })
}

function input(){
    const input = document.getElementById('chat-widget__input');
    if (input.value != ''){
        writeMessage(input.value,1);
        writeMessage(answerChoice(), 0);
    }
    input.value = ''
}

function answerChoice(){
    const answers = ['Да', 'Нет', 'Не знаю', 'Не скажу', 'Еще какой то ответ'];
    return answers[Math.floor(Math.random() * (answers.length - 0)) + 0]
}

function writeMessage(value,marker){
    const date = new Date();
    const messages = document.querySelector( '.chat-widget__messages' );
    let divClass = '';
    if (marker == 1){
        divClass = 'message message_client';
    }
    else{
        divClass = "message";
    }

    messages.innerHTML += `
        <div class="`+divClass+`">
            <div class="message__time">`+ date.getHours()+`:`+date.getMinutes() +`</div>
            <div class="message__text">
                `+value+`
            </div>
        </div>
        `;
}
chat()
