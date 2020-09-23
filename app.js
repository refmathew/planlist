// Selectors
const inputText = document.querySelector(".input__text");
const inputAdd = document.querySelector(".input__add");
const planList = document.querySelector(".planlist");

// Event Listeners
inputAdd.addEventListener("click", addPLan);

// Functions
function addPLan(Event){
    // prevent refreshing
    Event.preventDefault();

    // add a list container
    const planContainer = document.createElement('div');
    planContainer.classList.add('plan-container');
    planList.appendChild(planContainer)
    
    // add an entry list
    const plan = document.createElement('li');
    plan.classList.add('plan');
    plan.innerText = inputText.value;
    planContainer.appendChild(plan);

    // add trash button
    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash-btn');
    trashBtn.innerHTML= "<i class='fas fa-trash'></i>";
    planContainer.appendChild(trashBtn);

    // add done button
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done-btn');
    doneBtn.innerHTML= "<i class='fas fa-check'></i>";
    planContainer.appendChild(doneBtn);

    // remove input text after entering value
    inputText.value = ""
}

