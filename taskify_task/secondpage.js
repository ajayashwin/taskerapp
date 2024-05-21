
var secondbackgroundcontainerEl = document.getElementById('secondbackgroundcontainer');
var popupContainerEl = document.getElementById("popupContainer");

var tasknameEl = document.getElementById("taskname");
var selectcategoryEl = document.getElementById("selectcategory");

var addingtaskcontainerEl = document.getElementById("AddingtaskContainer");

function cancelbtn(){
    secondbackgroundcontainerEl.style.filter = 'none';
    popupContainerEl.style.scale = "0";
}
function addtaskcardcontainerbtn(){
    secondbackgroundcontainerEl.style.filter = 'none';
    popupContainerEl.style.scale = "0";
   
    let createcontainer = document.createElement('div');
    createcontainer.classList.add("d-flex","flex-row","listcontainer");
    createcontainer.innerHTML = ``;
    addingtaskcontainerEl.appendChild(createcontainer);
    

    let inputEl = document.createElement('input');
    inputEl.type = "radio";
    inputEl.classList.add("radiobtn");
    createcontainer.appendChild(inputEl);

    let vertialline = document.createElement('div');
    vertialline.classList.add("verticalline");
    createcontainer.appendChild(vertialline);

    let labelcontainer = document.createElement('div');
    createcontainer.appendChild(labelcontainer);


    let taskname = document.createElement('label');
    taskname.textContent = tasknameEl.value;
    taskname.classList.add("taskname");
    labelcontainer.appendChild(taskname);
    tasknameEl.value = "";
    
 

    let selectcategory = document.createElement('p');
    selectcategory.textContent = selectcategoryEl.value;
    labelcontainer.appendChild(selectcategory);
    selectcategoryEl.value = "none";

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    createcontainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("bi", "bi-trash","delete-icon");
    deleteIconContainer.appendChild(deleteIcon);




    console.log(tasknameEl.value);
    console.log(selectcategoryEl.value);
}

function addtaskbtn(){
    secondbackgroundcontainerEl.style.filter = 'blur(5px) brightness(0.5)';
    popupContainerEl.style.scale = "1";
}
