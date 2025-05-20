// Utility functions
function get(element) {
    return document.getElementById(element);
}

// Application functions
function openModal() {
    const modal = get('modal-dialog');
    const backdrop = get('modal-backdrop');
    
    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal() {
    const title = get('edit-title-text');
    const text = get('edit-content-text');
    const modal = get('modal-dialog');
    const backdrop = get('modal-backdrop');
    
    // Clear text
    title.value = '';
    text.value = '';
    
    // Hide modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent() {
    const title = get('edit-title-text');
    const text = get('edit-content-text');
    const content = get('display-content');
    
    // Create content elements
    const newTitle = document.createElement('h2');
    const newTitleText = document.createTextNode(title.value);
    const newContent = document.createElement('p');
    const newContentText = document.createTextNode(text.value);
    
    // Add elements
    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);
    
    closeModal();
}


window.addEventListener('load', function() {
    const newButton = get('new-button');
    const cancelButton = get('cancel-button');
    const saveButton = get('save-button');
    
    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});
