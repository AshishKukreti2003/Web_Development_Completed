// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
} 

var db =mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));

db.once('open',function(){
  console.log("We are Connected OP");
});

const kittySchema = new mongoose.Schema({
  name: String

});
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
  const greeting = "My name is "+ this.name
  console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
// silence.speak();

const fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"

// fluffy.save();
// fluffy.speak();

const kittens = Kitten.find();
console.log(kittens);

Kitten.find({ name: fluffy});


