var todos = ['Buy New Turtle'];

var input = prompt('What would you like to do?');

while (input !== 'quit') {
  // HANDLE INPUT
  if (input === 'list') {
    console.log(todos);
  } else if (input === 'new') {
    // ask for new todo
    var newTodo = prompt('Enter new todo');
    // add to todos array
    todos.push(newTodo);
  }
  // ASK AGAIN FOR NEW INPUT
  input = prompt('What would you like to do?');
}
console.log('Ok, YOU QUIT THE APP');
