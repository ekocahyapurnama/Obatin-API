// Import NlpManager dari module node-nlp. Ini digunakan sebagai training, saving, dan loading dan processing.
const { NlpManager } = require('node-nlp');
console.log('Memulai ChatBot ...');

// Membuat instance baru dari class NlpManager
const manager = new NlpManager({ languages: ["en"]});

// Memuat model yang telah di save
manager.load();

// Membuat module readline untuk mengambil input dari terminal
let readline = require('readline');
var r1 = readline.createInterface(process.stdin, process.stdout);

console.log('Chatbot dimulai!');
r1.setPrompt('> ');
r1.prompt();

r1.on('line', async function(line) {
  // Disini input dipassing dari text ke manager untuk mendapatkan response jawaban
  const response = await manager.process('en', line);
  console.log(response.answer);
  r1.prompt();
}).on('close', function () {
  process.exit(0);
})