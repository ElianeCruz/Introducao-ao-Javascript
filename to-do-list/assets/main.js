
const elementList = document.querySelector('ul');
const newTask = document.querySelector('input');
const buttonAdd = document.querySelector('button');

const tasks = []

function showTasks() {

    elementList.innerHTML = ''

    for (task of tasks) {
        const taskElement = document.createElement('li');
        const taskText = document.createTextNode(task);

        const linkElement = document.createElement('a');
        const position2 = tasks.indexOf(task);
        const linktext = document.createTextNode(' X');
        linkElement.appendChild(linktext);

        linkElement.setAttribute('onclick', `delTask( ${position2})`)


        taskElement.appendChild(taskText);
        elementList.appendChild(taskElement);
        taskElement.appendChild(linkElement);

    }
}

showTasks()

function addTask() {
    const nextTask = newTask.value;
    tasks.push(nextTask);
    newTask.value = '';

    showTasks();
}

buttonAdd.setAttribute('onclick', 'addTask()');

function delTask(position2) {
    tasks.splice(position2, 1);
    showTasks();

}

