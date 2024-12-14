
// select available todos..

let todos= JSON.parse(localStorage.getItem("todos"));
let todoList= document.querySelector(".todo-list");
const noItems=
`
<div class="no-items">
    <span class="fas fa-tasks"></span>
    <p class="no-items-text">
        No Tasks added!
    </p>
</div>
`;

if(todos != null){
    todoList.innerHTML='';
    todos.forEach((todo, index) => {
    let strike='';
    if(todo.status=="completed") {
        strike="strike";
        sts= `<button class="complete" onclick="retakeTask(${index})"><span class="complete fa fa-circle-check"></span></button>`;
       }
       else{
        sts= `<button class="progress" onclick="completeTask(${index})"><span class="progress far fa-circle"></span></button>`;
       }
       todoList.innerHTML+=
       `
        <div class="list-item">
            <div class="mark">
                ${sts}
            </div>
            <p class="item-text ${strike}">${todo.text}</p>
            <div class="item-actions">                            
                <span class="item-time">${todo.time}</span>
                <button class="remove-item" onclick="removeTask(${index})">
                    <span class="fas fa-xmark"></span>
                </button>
            </div>
            
        </div>
       `;
    });
}else{
    todoList.innerHTML=noItems;
}


//adding new tasks...

const addTask= (e) => {
    e.preventDefault();
    let text= document.querySelector(".todo-input").value;
    let time= document.querySelector(".todo-time").value;
    const status= "progress";
    if(todos == null){
        todos=[{
            text: text,
            time: time,
            status: status
        }];
        localStorage.setItem("todos", JSON.stringify(todos));

        // document.getElementsByClassName('todo-input')[0].value = '';
        // document.getElementsByClassName('todo-time')[0].value = '';
        // rerended list items..
        todoList.innerHTML='';
        todos.forEach((todo, index) => {
        let strike='';
        if(todo.status=="completed") {
            strike="strike";
            sts= `<button class="complete" onclick="retakeTask(${index})"><span class="complete fa fa-circle-check"></span></button>`;
        }
        else{
            sts= `<button class="progress" onclick="completeTask(${index})"><span class="progress far fa-circle"></span></button>`;
        }
        todoList.innerHTML+=
        `
            <div class="list-item">
                <div class="mark">
                    ${sts}
                </div>
                <p class="item-text ${strike}">${todo.text}</p>
                <div class="item-actions">                            
                    <span class="item-time">${todo.time}</span>
                    <button class="remove-item" onclick="removeTask(${index})">
                        <span class="fas fa-xmark"></span>
                    </button>
                </div>
                
            </div>
        `;
        });

    }
    else{
        todos.push({
            text: text,
            time: time,
            status: status
        });
        localStorage.setItem("todos", JSON.stringify(todos));
        
        document.getElementsByClassName('todo-input')[0].value = '';
        document.getElementsByClassName('todo-time')[0].value = '';
        // rerended list items..
        todoList.innerHTML='';
        todos.forEach((todo, index) => {
        let strike='';
        if(todo.status=="completed") {
            strike="strike";
            sts= `<button class="complete" onclick="retakeTask(${index})"><span class="complete fa fa-circle-check"></span></button>`;
        }
        else{
            sts= `<button class="progress" onclick="completeTask(${index})"><span class="progress far fa-circle"></span></button>`;
        }
        todoList.innerHTML+=
        `
            <div class="list-item">
                <div class="mark">
                    ${sts}
                </div>
                <p class="item-text ${strike}">${todo.text}</p>
                <div class="item-actions">                            
                    <span class="item-time">${todo.time}</span>
                    <button class="remove-item" onclick="removeTask(${index})">
                        <span class="fas fa-xmark"></span>
                    </button>
                </div>
                
            </div>
        `;
        });
    }
}

const removeTask= (item) => {
    delete todos[item];
    const newTodos= [];
    todos.forEach(todo => {
        if (todo != null){
            newTodos.push(todo);
        }
    });
        
    todos= newTodos;
    if (todos.length==0){
        localStorage.removeItem("todos");
        todoList.innerHTML=noItems;
    }
    else{        
        localStorage.setItem("todos", JSON.stringify(todos));

        // try to re-rendering todos item in a list..
        // rerended list items..
        todoList.innerHTML='';
        todos.forEach((todo, index) => {
        let sts='';
        let strike='';
        if(todo.status=="completed") {
            strike="strike";
            sts= `<button class="complete" onclick="retakeTask(${index})"><span class="complete fa fa-circle-check"></span></button>`;
        }
        else{
            sts= `<button class="progress" onclick="completeTask(${index})"><span class="progress far fa-circle"></span></button>`;
        }
        todoList.innerHTML+=
        `
            <div class="list-item">
                <div class="mark">
                    ${sts}
                </div>
                <p class="item-text ${strike}">${todo.text}</p>
                <div class="item-actions">                            
                    <span class="item-time">${todo.time}</span>
                    <button class="remove-item" onclick="removeTask(${index})">
                        <span class="fas fa-xmark"></span>
                    </button>
                </div>
                
            </div>
        `;
        });
    }
}

const completeTask= (item) => {
    todos[item].status="completed";
    localStorage.setItem("todos", JSON.stringify(todos));

    // re-render the tasks...
    todoList.innerHTML='';
    todos.forEach((todo, index) => {
    let sts='';
    let strike='';
    if(todo.status=="completed") {
        strike="strike";
        sts= `<button class="complete" onclick="retakeTask(${index})"><span class="complete fa fa-circle-check"></span></button>`;
    }
    else{
        sts= `<button class="progress" onclick="completeTask(${index})"><span class="progress far fa-circle"></span></button>`;
    }
    todoList.innerHTML+=
    `
        <div class="list-item">
            <div class="mark">
                ${sts}
            </div>
            <p class="item-text ${strike}">${todo.text}</p>
            <div class="item-actions">                            
                <span class="item-time">${todo.time}</span>
                <button class="remove-item" onclick="removeTask(${index})">
                    <span class="fas fa-xmark"></span>
                </button>
            </div>
            
        </div>
    `;
    });
}


const retakeTask= (item) => {
    todos[item].status="progress";
    localStorage.setItem("todos", JSON.stringify(todos));

    // re-render the tasks...
    todoList.innerHTML='';
    todos.forEach((todo, index) => {
    let strike='';
    if(todo.status=="completed") {
        strike="strike";
        sts= `<button class="complete" onclick="retakeTask(${index})"><span class="complete fa fa-circle-check"></span></button>`;
    }
    else{
        sts= `<button class="progress" onclick="completeTask(${index})"><span class="progress far fa-circle"></span></button>`;
    }
    todoList.innerHTML+=
    `
        <div class="list-item">
            <div class="mark">
                ${sts}
            </div>
            <p class="item-text ${strike}">${todo.text}</p>
            <div class="item-actions">                            
                <span class="item-time">${todo.time}</span>
                <button class="remove-item" onclick="removeTask(${index})">
                    <span class="fas fa-xmark"></span>
                </button>
            </div>
            
        </div>
    `;
    });
}
