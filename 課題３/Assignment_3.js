
const OnClick = () => {
    
    const li = document.createElement("li")

    //表示エリア
    const viewArea = document.createElement("div")
    viewArea.className = "list-row"
    const todoText = document.createElement("span")
    todoText.innerText = document.getElementById("todoInput").value

    
    //編集ボタン
    const updateButton = document.createElement("button")
    updateButton.innerText = "編集"
    updateButton.addEventListener("click",function(){
        updateText(viewArea,editArea,todoText)
    })

    //削除ボタン
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "削除"
    deleteButton.addEventListener("click",function(){
        deleteList(deleteButton)
    })

    viewArea.appendChild(todoText)
    viewArea.appendChild(updateButton)
    viewArea.appendChild(deleteButton)
    
    //編集エリア
    const editArea = document.createElement("div")
    editArea.style.display = "none"
    const editInput = document.createElement("input")
    const confirmButton = document.createElement("button")
    confirmButton.innerText = "確定"

    editArea.appendChild(editInput)
    editArea.appendChild(confirmButton)

    li.appendChild(viewArea)
    li.appendChild(editArea)

    document.getElementById("todoList").appendChild(li)
}

//Todoの削除
function deleteList(button){
   const deleteTarget = button.closest("li")
   deleteTarget.remove()
}

//Todoの編集
function updateText(viewArea,editArea,todoText){
    viewArea.style.display ="none"
    editArea.style.display = ""

    editArea.querySelector("input").value = viewArea.querySelector("span").innerText

    editArea.querySelector("button").addEventListener("click",function(){
        todoText.innerText = editArea.querySelector("input").value
        viewArea.style.display =""
        editArea.style.display = "none"
    })
}

document.getElementById("addButton").addEventListener("click", OnClick);