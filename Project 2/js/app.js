/**
 * Main application script
 * Handles UI interactions and connects with the TaskManager
 */


const taskManager = new TaskManager();

// DOM Elements
const taskForm = document.getElementById('task-form');
const tasksList = document.getElementById('tasks-list');
const categoryFilters = document.getElementById('category-filters');
const totalTasksElement = document.getElementById('total-tasks');
const completedTasksElement = document.getElementById('completed-tasks');


let activeFilter = 'all';

// Initialize the application
function initApp() {
    
    renderTasks();
    
    
    updateStatistics();
    
    
    setupEventListeners();
}


function setupEventListeners() {
    
    taskForm.addEventListener('submit', handleFormSubmit);
    
   
    categoryFilters.addEventListener('click', handleCategoryFilter);
    
    
    tasksList.addEventListener('click', handleTaskActions);
}

/**
 * Handle form submission for adding a new task
 * @param {Event} e - Form submit event
 */
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const titleInput = document.getElementById('task-title');
    const descriptionInput = document.getElementById('task-description');
    const categoryInput = document.getElementById('task-category');
    const dueDateInput = document.getElementById('task-due-date');
    
    // Validate inputs 
    if (!titleInput.value || !categoryInput.value || !dueDateInput.value) {
        alert('Please fill in all required fields');
        return;
    }
    
    
    const taskData = {
        title: titleInput.value,
        description: descriptionInput.value,
        category: categoryInput.value,
        dueDate: dueDateInput.value
    };
    
    // Add task using TaskManager
    taskManager.addTask(taskData);
    
    // Update UI
    renderTasks();
    updateStatistics();
    
    // Reset form
    taskForm.reset();
}

/**
 * Handle category filter clicks
 * @param {Event} e - Click event
 */
function handleCategoryFilter(e) {
    
    if (e.target.classList.contains('filter-btn')) {
        
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        // Update active filter
        activeFilter = e.target.dataset.category;
        
        
        renderTasks();
    }
}

/**
 * Handle task actions (complete and delete)
 * @param {Event} e - Click event
 */
function handleTaskActions(e) {
    
    const taskCard = e.target.closest('.task-card');
    if (!taskCard) return;
    
    const taskId = parseInt(taskCard.dataset.id);
    
    // Handle complete button click
    if (e.target.classList.contains('complete-btn')) {
        taskManager.toggleTaskCompletion(taskId);
        renderTasks();
        updateStatistics();
    }
    
    // Handle delete button click
    if (e.target.classList.contains('delete-btn')) {
        if (confirm('Are you sure you want to delete this task?')) {
            taskManager.deleteTask(taskId);
            renderTasks();
            updateStatistics();
        }
    }
}

/**
 * Render tasks to the DOM
 */
function renderTasks() {
    
    const tasks = taskManager.getTasks(activeFilter);
    
    
    tasksList.innerHTML = '';
    
    // Check if there are any tasks to display
    if (tasks.length === 0) {
        tasksList.innerHTML = '<p class="empty-message">No tasks to display</p>';
        return;
    }
    
    // Loop through tasks and create HTML for each
    for (const task of tasks) {
        // Create task element
        const taskElement = createTaskElement(task);
        
        // Add to DOM
        tasksList.appendChild(taskElement);
    }
}

/**
 * 
 * @param {Object} task - 
 * @returns {HTMLElement} 
 */
function createTaskElement(task) {
    
    const taskCard = document.createElement('div');
    taskCard.className = `task-card ${task.completed ? 'completed' : ''}`;
    taskCard.dataset.id = task.id;
    
    
    const formattedDate = formatDateForDisplay(task.dueDate);
    
    // Set inner HTML with task details
    taskCard.innerHTML = `
        <div class="task-header">
            <h3 class="task-title">${task.title}</h3>
            <span class="task-category category-${task.category}">${task.category}</span>
        </div>
        <p class="task-description">${task.description || 'No description provided'}</p>
        <div class="task-footer">
            <span class="task-due-date">Due: ${formattedDate}</span>
            <div class="task-actions">
                <button class="complete-btn">${task.completed ? 'Uncomplete' : 'Complete'}</button>
                <button class="delete-btn">Delete</button>
            </div>
        </div>
    `;
    
    return taskCard;
}

/**
 * 
 * @param {string} dateString - 
 * @returns {string} 
 */
function formatDateForDisplay(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}


function updateStatistics() {
    const stats = taskManager.getStatistics();
    
    
    totalTasksElement.textContent = stats.totalTasks;
    completedTasksElement.textContent = stats.completedTasks;
}


document.addEventListener('DOMContentLoaded', initApp);
