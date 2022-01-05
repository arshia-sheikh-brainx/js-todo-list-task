const addTodoItem =document.getElementById("addTodoItem");
const listContainer=document.getElementById("listContainer")
addTodoItem.addEventListener("keypress", (e)=>{
if(e.key=="Enter"){
    addItem(e);
}
});
//add item
function addItem(e){
    if(e.target.value!==""){
        let text=e.target.value;
        e.target.value="";
        let li = document.createElement("li");
        let checkbox=document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");
        checkbox.addEventListener('change', function(e) {
            checkboxStyle(e);
        });
        let span =document.createElement("span");
        span.textContent=text;
        let editIcon=document.createElement("i");
        let delIcon=document.createElement("i")
        editIcon.classList.add("fa", "fa-edit", "edit");
        editIcon.addEventListener('click', function(e) {
            editItem(e);
        });
        delIcon.classList.add("fa", "fa-trash", "del");
        delIcon.addEventListener('click', function(e) {
            deleteItem(e);
        });
        
        li.append(checkbox,span,editIcon,delIcon);  
        listContainer.append(li);  
    }
}
//checkbox check
function checkboxStyle(e){
    e.target.nextElementSibling.classList.toggle("line-througth");
    
}
//delete item
function deleteItem(e){
    e.target.parentElement.remove();
}
//edit items
function editItem(e){
   let listItem= e.target.parentElement;
   let prevSpan=e.target.previousElementSibling;
   let checkbox=prevSpan.previousElementSibling;
   checkbox.style.display="none";
   let inputElement=document.createElement("INPUT");
   inputElement.setAttribute("type", "text");
   inputElement.addEventListener("keydown",(e)=>{
       changeText(e,checkbox);
   })
   inputElement.value=prevSpan.textContent;
   listItem.replaceChild(inputElement,prevSpan);
   
}

//change the text of edited item
function changeText(e,check){
    if(e.key==="Enter" && e.target.value!=""){
        let listItem= e.target.parentElement;
        let span =document.createElement("span");
        span.textContent=e.target.value;
        if(check.checked){
            span.classList.add("line-througth");
        }
        listItem.replaceChild(span,e.target);
        check.style.display="inline-block";
    }
   
}