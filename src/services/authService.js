const baseURL = 'http://localhost:3000/';

/*la siguiente funcion que se crea, se le pase
user data y regresa un fetch (osea que se trae desde afuera)
el baseURL (localhost....) + la ruta de signup*/
export function signup(user){
    return fetch (baseURL + 'auth/signup',{
        method:'post',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res=>{
        if(!res.ok) return Promise.reject(res)
        return res.json();
    })
    .then(user=> {return user});
}

export function login(userData){
    return fetch(baseURL + 'auth/login', {
        method:'post',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData),
        credentials: 'include'
    })
    .then(res=>{
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    .then(user=>{
        //localStorage.setItem('user', JSON.stringify(user))
        return user;
    });
}

export function logout() {
    return fetch(baseURL+'auth/logout')
        .then(r=>r.json())
        .then(res=>{
            localStorage.removeItem("user");
            return res
        });
}

export function getUsers(){
    return fetch(baseURL + 'auth/users')
    .then(r => r.json())
    .then(data => data);
}
