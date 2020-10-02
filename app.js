// Selectors
const inputText = document.querySelector(".input__text");
const inputAdd = document.querySelector(".input__add");
const planList = document.querySelector(".planlist");
const allTextArea = document.getElementsByTagName('textarea');
const selection = document.querySelector('.selection__plan-status');

// Event Listeners
inputAdd.addEventListener("click", addPLan);
planList.addEventListener('click', deleteCheck);
selection.addEventListener('click', filterPlans);

// Functions
function addPLan(Event){
    // prevent refreshing
    Event.preventDefault();

    // add a list container
    const planContainer = document.createElement('div');
    planContainer.classList.add('planlist__plan-container');
    planList.appendChild(planContainer);
    
    // add an entry list
    const plan = document.createElement('textarea');
    plan.classList.add('planlist__plan');
    plan.value = inputText.value;
    planContainer.appendChild(plan);
    // responsive height of textarea
    for (let i = 0; i < allTextArea.length; i++) {
        allTextArea[i].setAttribute('style', 'height:' + (allTextArea[i].scrollHeight/ 16) + 'rem;');
        allTextArea[i].addEventListener("input", OnInput);
    }
    // focus on the plan created
    plan.focus();

    // add button wrapper
    const btnWrapper =document.createElement('div');
    btnWrapper.classList.add('planlist__btn-wrapper');
    planContainer.appendChild(btnWrapper);

    // add trash button
    const trashBtn = document.createElement('button');
    trashBtn.classList.add('planlist__trash-btn');
    trashBtn.innerHTML= "<i class='fas fa-trash'></i>";
    btnWrapper.appendChild(trashBtn);

    // add done button
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('planlist__done-btn');
    doneBtn.innerHTML= "<i class='fas fa-check'></i>";
    btnWrapper.appendChild(doneBtn);

    // remove input text after entering value
    inputText.value = ""
}

function OnInput() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight / 16) + 'rem';
}

function deleteCheck(e) {
    // references a clicked item
    const selectedBtn = e.target;
    // refers to parent element of btn
    const item = selectedBtn.parentElement;

    // remove if trash is clicked
    if (selectedBtn.classList[0] === 'planlist__trash-btn') {
        if (confirm('Are you sure you want to delete this plan?')) {
            item.parentElement.classList.add('planlist__fall');
            item.parentElement.addEventListener('transitionend', function(){
                item.parentElement.remove();
            })
        }
    }

    // fadeout if done mark is clicked
    if (selectedBtn.classList[0] === 'planlist__done-btn') {
        item.previousSibling.classList.toggle('planlist__done');
    }
}

function filterPlans(e) {
    const planContainers= planList.childNodes;

    for (let i = 0; i < planContainers.length; i++) {
        const plan = planContainers[i].firstChild;
            switch(e.target.value){
                case "All":
                    plan.parentElement.style.display = 'block';
                    break;
                case "Completed":
                    if (plan.classList.contains('planlist__done')) {
                        plan.parentElement.style.display = 'block';
                    } else {
                        plan.parentElement.style.display = 'none';
                    }
                    break;
                case "Uncompleted":
                    if (plan.classList.contains('planlist__done')) {
                        plan.parentElement.style.display = 'none';
                    } else {
                        plan.parentElement.style.display = 'block';
                    }
                    break;
            }
    }
}

