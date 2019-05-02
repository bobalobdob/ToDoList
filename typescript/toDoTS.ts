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
    //notifyUser();
    //clearForm();
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
    //ensures user can use local storage
    if(typeof(Storage) != "undefined"){
        localStorage.setItem("ToDo", item.title);
    }
}