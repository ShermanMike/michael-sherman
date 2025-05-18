/**
 * TaskManager Class
 * Handles all task-related operations including:
 * - Managing the tasks array
 * - Adding, completing, and deleting tasks
 * - Filtering tasks
 * - Calculating statistics
 */
class TaskManager {
    constructor() {
        
        this.tasks = [];
        
        
        this.addSampleTasks();
    }

    
    addSampleTasks() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const nextWeek = new Date(today);
        nextWeek.setDate(nextWeek.getDate() + 7);
        
        // Sample task data
        const sampleTasks = [
            {
                id: 1,
                title: 'Go To the Post Office',
                description: 'Drop off packages to be shipped',
                category: 'work',
                dueDate: this.formatDate(tomorrow),
                completed: false
            },
            {
                id: 2,
                title: 'Grocery shopping',
                description: 'Buy groceries for the week',
                category: 'personal',
                dueDate: this.formatDate(today),
                completed: true
            },
            {
                id: 3,
                title: 'Study for exam',
                description: 'Review for the upcoming exam',
                category: 'study',
                dueDate: this.formatDate(nextWeek),
                completed: false
            }
        ];
        
        // Add sample tasks to the tasks array
        this.tasks = [...sampleTasks];
    }

    /**
     * 
     * @param {Date} date - The date to format
     * @returns {string} Formatted date string
     */
    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    /**
     * 
     * @param {string} category - Category to filter by (optional)
     * @returns {Array} Filtered array of tasks
     */
    getTasks(category = 'all') {
        if (category === 'all') {
            return this.tasks;
        }
        
        return this.tasks.filter(task => task.category === category);
    }

    /**
     * new task
     * @param {Object} taskData - Data for the new task
     * @returns {Object} The newly created task
     */
    addTask(taskData) {
        // Generate a unique ID (simple implementation)
        const id = this.tasks.length > 0 
            ? Math.max(...this.tasks.map(task => task.id)) + 1 
            : 1;
        
        
        const newTask = {
            id,
            title: taskData.title,
            description: taskData.description,
            category: taskData.category,
            dueDate: taskData.dueDate,
            completed: false
        };
        
        
        this.tasks.push(newTask);
        
        return newTask;
    }

    /**
     * Toggle the completed status of a task
     * @param {number} id - ID of the task to toggle
     * @returns {Object|null} Updated task or null if not found
     */
    toggleTaskCompletion(id) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        
        if (taskIndex === -1) {
            return null;
        }
        
        
        this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed;
        
        return this.tasks[taskIndex];
    }

    /**
     * Delete a task
     * @param {number} id - ID of the task to delete
     * @returns {boolean} True if task was deleted, false otherwise
     */
    deleteTask(id) {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.id !== id);
        
        return this.tasks.length < initialLength;
    }

    /**
     * 
     * @returns {Object} Object containing statistics
     */
    getStatistics() {
        const totalTasks = this.tasks.length;
        const completedTasks = this.tasks.filter(task => task.completed).length;
        
        return {
            totalTasks,
            completedTasks
        };
    }
}
