const inputBox=document.getElementById('input-box')
const listContainer=document.getElementById('list-container')

//creating a function to add tasks
function addTask(){
    if (inputBox.value === '') {
        alert("Please write something") //alert to let user enter something
    } else {
        //following code enters an element to the list
        let li=document.createElement("li")
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li) //list will be made under the appendChild function

        //making cross icon to delete the list elements
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }

    inputBox.value=''
    saveData()
}

//creating an event listener to store the tasks
listContainer.addEventListener("click", function(e){
    if (e.target.tagName==='LI') {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName==="SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

//creating a function to save data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

//creating a function to show elements
function showData(){
    listContainer.innerHTML=localStorage.getItem("data")
}//calling function to show the data
showData()

