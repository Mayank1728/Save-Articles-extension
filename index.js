// reinforce ; after every statement
// save articles for future read
const searchBar = document.getElementById("search-bar");
const saveInput = document.getElementById("save-input");
const saveTab = document.getElementById("save-tab");
const deleteAll = document.getElementById("delete-all");
const savedLinks = document.getElementById("saved-links")

let links = [];

// To save links even when the user presses enter
searchBar.addEventListener("keyup", function(e) {
    if (e.code === 'Enter') {
        saveLinks();
    }
})

//to save links when the user clicks on addbtn
saveInput.addEventListener("click", saveLinks)

function saveLinks() {
    links.push(searchBar.value);
    // clearing the value from the search bar so that user can enter another value
    searchBar.value = "";
    let content = "";
    for(let i = 0; i < links.length; i++) {
        content += `<li>
                        <a href="https://${links[i]}" target="_blank">${links[i]}</a>
                    </li>`;
    }
    savedLinks.innerHTML = content;

}

saveTab.addEventListener("click", function() {
    // see how to grab the link from the tab 
    // it was something related to objects(aka dictionary in python)
    // try creating func
})

deleteAll.addEventListener("click", function() {
    links = [];
    savedLinks.textContent = "";
})



