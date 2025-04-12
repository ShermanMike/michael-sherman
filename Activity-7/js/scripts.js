// Array to hold tasks
const tasks = [];

// Task status 'enum'
const taskStatus = {
    active: 'active',
    completed: 'completed'
};

// Task constructor function
function Task(id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}


function addTaskElement(task) {
    // Create elements
    const listEl = document.getElementById('active-list');
    const taskEl = document.createElement('li');
    const textEl = document.createTextNode(task.name);
    
    // Set attributes
    taskEl.setAttribute('id', task.id);
    
    // Add text to task element
    taskEl.appendChild(textEl);
    
    // Add task element to list
    listEl.appendChild(taskEl);
}

// Click handler to add a new task
function addTask(event) {
    const inputEl = document.getElementById('input-task');
    if (inputEl.value != '') {
        // Create a unique id
        const id = 'item-' + tasks.length;
        
        // Create a new task
        const task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);
        
        // Add the task to the DOM
        addTaskElement(task);
        
        // Reset input
        inputEl.value = '';
    }
}

// Click handler to complete a tasks
function completeTask(event) {
    // Get the task element
    const taskEl = event.target;
    const id = taskEl.id;
    
    // Find corresponding task in tasks array and update status
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].status = taskStatus.completed;
            break;
        }
    }
    
    // Move task element from from active list to completed list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}


function clickButton(event) {
    if (event.keyCode == 13) {
        document.getElementById('add-task').click();
    }
}

// Initializes the app
function init() {
    
    document.getElementById('add-task').onclick = addTask;
    
    
    document.getElementById('active-list').onclick = completeTask;
    
    
    document.getElementById('input-task').onkeypress = clickButton;
}

// Initialize 
init();
