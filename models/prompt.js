var mongoose = require('mongoose');

var promptSchema = new mongoose.Schema({
  title: String,
  prompt: String,
  test: String,
  category: String,
  difficulty: String,
  editorLoadText: String,
  exampleInput: String,
  exampleOutput: String
});

module.exports = mongoose.model('prompts', promptSchema);