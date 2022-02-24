// how to save links in local storage
const searchBar = document.getElementById("search-bar");
const saveInput = document.getElementById("save-input");
const saveTab = document.getElementById("save-tab");
const deleteAll = document.getElementById("delete-all");
const savedLinks = document.getElementById("saved-links")

let links = [];

// To save links even when the user presses enter
searchBar.addEventListener("keyup", function(e) {
    if (e.code === 'Enter') {
        links.push(searchBar.value);
        displayLinks();
    }
})

//to save links when the user clicks on addbtn
saveInput.addEventListener("click", function() {
    links.push(searchBar.value);
    displayLinks();
})

function displayLinks() {
    // clearing the value from the search bar so that user can enter another value
    localStorage.setItem("links", JSON.stringify(links))
    searchBar.value = "";
    let content = "";
    for(let i = 0; i < links.length; i++) {
        content += `<li>
                        <a href= "${JSON.parse(localStorage.getItem("links"))[i]}" target="_blank">${JSON.parse(localStorage.getItem("links"))[i]}</a>
                    </li>`;
    }
    savedLinks.innerHTML = content;

}

saveTab.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        links.push(tabs[0].url);
        displayLinks();
    });
})

deleteAll.addEventListener("click", function() {
    links = [];
    localStorage.clear();
    savedLinks.textContent = "";
})



