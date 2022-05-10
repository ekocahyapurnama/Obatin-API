// Import NlpManager dari module node-nlp. Ini digunakan sebagai training, saving, dan loading dan processing.
const { NlpManager } = require('node-nlp');

// Membuat instance dari class NlpManager
const manager = new NlpManager({ languages: ["en"]});

// Import fs module untuk membaca file json
const fs = require('fs');

// Baca semua file intents di dalam folder intents
const files = fs.readdirSync(__dirname + '/intents');

// Looping melalui file dan parsing string ke objek dan pasing it ke manager instance untuk mentrain dan memproses
files.forEach(file => {
  let data = fs.readFileSync(__dirname + `/intents/${file}`);
  data = JSON.parse(data);
  console.log(data);
  
  const intent = file.replace(".json", "");

  for (const question of data.questions) {
    manager.addDocument("en", question, intent);
  }

  for (const answer of data.answers) {
    manager.addAnswer("en", intent, answer);
  }
});

// Membuat sebuah fungsi yang akan bertanggung jawab untuk mentraining dan menyimpan manager instance
async function train_save() {
  await manager.train();
  manager.save();
}

// Memanggil fungsi train_save()
train_save();