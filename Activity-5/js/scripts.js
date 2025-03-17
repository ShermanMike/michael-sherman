/*************************************************
 * Extention data and constructor objects
 **************************************************/

// Extention data array 
const data = [
    {
        name: 'Settings Sync',
        description: 'Synchronize Settings, Snippets, Themes, File Icons, Launch, Keybindings, Workspaces and Extensions Across Multiple Machines Using GitHub Gist.',
        author: 'Shan Khan',
        url: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync',
        downloads: 4113190,
        stars: 713,
        selector: 'E1'
    },
    {
        name: 'Trailing Spaces',
        description: 'Highlight trailing spaces and delete them in a flash!',
        author: 'Shardul Mahadik',
        url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces',
        downloads: 2658209,
        stars: 59,
        selector: 'E2'
    }
];

// (Atom) Package constructor function
function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    };
}

/*************************************************
 * Utility functions
 **************************************************/

// Returns today's date, formatted
const getTodaysDate = function() {
    const today = new Date();
    return today.toDateString();
};


const getEl = function (id) {
    return document.getElementById(id);
};

/**
 * 
 * @param {Package} package Package object
 * @return {void}
 */
const writePackageInfo = function(package) {
    // Get reference to DOM elements
    const selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

    // Write package data to DOM elements
    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
    
    // Add URL link to the extension's section
    const sectionEl = descEl.parentElement;
    const linkEl = document.createElement('a');
    linkEl.href = package.url;
    linkEl.textContent = 'Install Extension';
    linkEl.className = 'extension-url';
    linkEl.target = '_blank'; // Open link in a new tab
    sectionEl.appendChild(linkEl);
};


const init = function() {
    // Write date
    let dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    
    const settingsSync = new Package(data[0]);
    writePackageInfo(settingsSync);

    const trailingSpaces = new Package(data[1]);
    writePackageInfo(trailingSpaces);

    
};

// Call the init function to run the script
init();
