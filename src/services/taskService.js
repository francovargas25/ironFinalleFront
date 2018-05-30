const baseURL = 'http://localhost:3000/';

//servicio para crear new task
export function addTask(task){
    return fetch(baseURL+'task/new',{
        method:'post',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(task)
    })
    .then(r=>r.json())
    .then(task=>task);

}

export function getTasks(){
    return fetch(baseURL + 'task/')
    .then(r => r.json())
    .then(data => data);
}

export function deleteTask(id) {
    return fetch(baseURL + '/task/delete/' + id, {
        method: 'delete'
    })
    .then(r => r.json())
    .then(task => task)
}

export function editTask(id, task) {
    const formData = new FormData()
    for (let k in task) {
        formData.append(k, task[k]);
    }
    return fetch(baseURL + '/task/edit/' + id, {
            method: 'put',
            body: formData
        })
        .then(r => r.json())
        .then(task => task)
}

        
    



//aqui va servicio de clusters