// Array to store messages
const messages = [];

// Message Type lookup object. Similar to enums.
const messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};


let data = [
    {
        type: messageType.out,
        user: 'Mike',
        message: 'Hey, you have lunch plans?'
    },
    {
        type: messageType.in,
        user: 'Joe',
        message: 'Hi Mike! No, how about Qdoba?'
    },
    {
        type: messageType.out,
        user: 'Mike',
        message: 'Ok, let\'s go!'
    }
];

// Message constructor function.
function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}

// Function to create and return an element for the supplied message.
function createMessageElement(message) {
    
    const messageText = document.createTextNode(
        message.user + ': ' + message.message
    );
    
    
    const messageEl = document.createElement('div');
    messageEl.appendChild(messageText);
    
    
    messageEl.className = message.type;
    
    return messageEl;
}

// Button click event handler to add a new message.
function addMessageHandler(event) {
    let user, type;
    let messageInput = document.getElementById('message-input');
    let messagesContainerEl = document.getElementById('message-container');
    
    // Determine message type and set message variables accordingly.
    switch (event.target.id) {
        case 'send-button':
            user = 'Mike';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Joe';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }
    
    
    if (messageInput.value != '') {
        // Construct a message and add to the array.
        let message = new Message(type, user, messageInput.value);
        messages.push(message);
        
        // Create a message element.
        let el = createMessageElement(message);
        
        // Add the message element to the DOM.
        messagesContainerEl.appendChild(el);
        
        // Reset input.
        messageInput.value = '';
    }
}


function loadSeedData() {
    // Declare i outside both loops to avoid scoping issues
    let i;
    
    // First loop: create messages from data
    for (i = 0; i < data.length; i++) {
        let message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }
    
    // Load view with pre-loaded messages
    const messagesContainerEl = document.getElementById('message-container');
    
    // Second loop: create and append message elements
    for (i = 0; i < messages.length; i++) {
        let message = messages[i];
        let el = createMessageElement(message);
        
        messagesContainerEl.appendChild(el);
    }
}

const init = function() {
    // Wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;
    
    // Load seed data from data array above (optional)
    loadSeedData();
};

init();
