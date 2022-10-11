const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', iniciar)

function iniciar(e){
   
    comando = e.results [0] [0].transcript

    iniciarJogo(comando)
}

recognition.addEventListener('end', () => recognition.start())