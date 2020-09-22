// Selectors
const searchInput = document.querySelector(".search__input");
const searchAdd = document.querySelector(".search__add");
const planContainer = document.querySelector(".plan");
const planList = document.querySelector(".plan__list");

// Event Listeners
searchAdd.addEventListener("click", addPLan);

// Functions
function addPLan(Event){
    // prevent refreshing
    Event.preventDefault();

    // add a list container
    const planContainer = document.createElement('div');
    planContainer.classList.add('plan-container');
    
    // add an entry list
    const plan = document.createElement('li');
    plan.classList.add('plan')

    // add bin button
}

