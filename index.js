class ToDo {
  constructor() {
    this.totalTasks = document.querySelectorAll('.task').length;
  }

  addTask(taskText) {

    let template = document.querySelector('.task').cloneNode(true);

    template.classList.remove('hide');

    let templateText = template.querySelector('.task-title');
    templateText.textContent = taskText;

    let list  = document.querySelector('#tasks-container');

    list.appendChild(template);

    this.addEvents();

    this.checkTasks('add');
  }

  removeTask(task) {
    let parentEl = task.parentElement;

    parentEl.remove();

    this.checkTasks('remove');
  }

  completeTask(task) {
    task.classList.add('done')
  }

  addEvents() {
    let removeBtns = document.querySelectorAll('.fa-trash');
    let removeBtn = removeBtns[removeBtns.length - 1];

    let doneBtns = document.querySelectorAll('.fa-check');
    let doneBtn = doneBtns[removeBtns.length - 1];

    removeBtn.addEventListener('click', function() {
      todo.removeTask(this)
    });

    doneBtn.addEventListener('click', function() {
      todo.completeTask(this)
    })
  }

  checkTasks(command) {
    let msg = document.querySelector('#empty-tasks');

    if(command === 'add') {
      this.totalTasks += 1;
    } else if (command === 'remove') {
      this.totalTasks -= 1;
    }

    if (this.totalTasks == 1) {
      msg.classList.remove('hide');
    } else {
      msg.classList.add('hide');
    }
  }
}

let todo = new ToDo();
let addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function(e) {
  e.preventDefault();

  let taskText = document.querySelector('#task');

  if (taskText.value != '') {
    todo.addTask(taskText.value);
  }

taskText.value = '';
})
