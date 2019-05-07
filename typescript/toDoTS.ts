class ToDoItem{
    title:string;
    description:string;
    startDate:Date;
    endDate:Date;
    isComplete:boolean;
    urgency:string;
}

//when add item is clicked
    //get data off page and wrap in todo object
    //notify user and clear form
    //the todo object slash list

window.onload = function(){
    let addBtn = <HTMLButtonElement>document.querySelector("#create-item > button");
    addBtn.onclick = processNewItem;
}

function processNewItem(){
    let item:ToDoItem = getItemFromForm();
    saveItem(item);
    notifyUser();
    clearForm();
}

function clearForm(){
    //alternatively, we could wrap all inputs with a form tag, then reset the form.
    //however this is to help me practice typescript/javascript.

    let textElements = document.querySelectorAll("input[type=text, textarea]");
    for (let index = 0; index < textElements.length; index++) {
        (<HTMLInputElement>textElements[index]).value = "";
    }

    //uncheck isComplete
    let isCompleteBox = <HTMLInputElement>document.querySelector("#is-complete");
    isCompleteBox.checked = false;

    //reset select list
    let urgencyList = document.querySelector("#urgency")
}

function notifyUser(){
    alert("Your item was saved!");
}

/**
 * Get all user input from form
 * and wrap it in a ToDoItem
 */
function getItemFromForm(){
    let item = new ToDoItem();
    item.title = (<HTMLInputElement>document.getElementById("title")).value;

    item.description = (<HTMLInputElement>document.getElementById("description")).value;

    let itemStartDate:string = (<HTMLInputElement>document.getElementById("start-date")).value;
    item.startDate = new Date(itemStartDate);

    let itemEndDate:string = (<HTMLInputElement>document.getElementById("start-date")).value;
    item.endDate = new Date(itemEndDate);

    item.isComplete = (<HTMLInputElement>document.getElementById("is-complete")).checked;

    let urgencyElem = <HTMLSelectElement>document.getElementById("urgency");
    item.urgency = urgencyElem.options[urgencyElem.selectedIndex].value

    return item;
}

function saveItem(item:ToDoItem):void{
    let data:string = JSON.stringify(item);
    console.log("Converting todoitem into JSON string...");
    console.log(data);

    //ensures user can use local storage
    if(typeof(Storage) != "undefined"){
        localStorage.setItem("ToDo", data);
    }
}