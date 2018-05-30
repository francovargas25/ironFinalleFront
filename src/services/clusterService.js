const baseURL = 'http://localhost:3000/';

//servicio para crear new task
export function addCluster(cluster){
    return fetch(baseURL+'cluster/new',{
        method:'post',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(cluster)
    })
    .then(r=>r.json())
    .then(cluster=>cluster);

}

export function getClusters(){
    return fetch(baseURL + 'cluster/')
    .then(r => r.json())
    .then(data => data);
}

export function deleteCluster(id) {
    return fetch(baseURL + '/cluster/delete/' + id, {
        method: 'delete'
    })
    .then(r => r.json())
    .then(cluster => cluster)
}

export function editCluster(id, cluster) {
    const formData = new FormData()
    for (let k in cluster) {
        formData.append(k, cluster[k]);
    }
    return fetch(baseURL + '/cluster/edit/' + id, {
            method: 'put',
            body: formData
        })
        .then(r => r.json())
        .then(cluster => cluster)
}

        