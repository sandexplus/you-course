import getServerData from "./getServerData";

export default function logIn(enterBtnClass, inputClass, btnClass, baseUrl) {
    const input = document.querySelector(inputClass);
    const btn = document.querySelector(btnClass);
    const enterBtn = document.querySelector(enterBtnClass);
    if (!input || !btn || !enterBtn) {
        return;
    }

    enterBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (localStorage.getItem('login')) {
            window.location = '/menu.html';
        }
    })

    btn.addEventListener('click', (e) => {       
        const login = input.value;
        if (!login) {
            return;
        }

        getServerData(`${baseUrl}/users?login=${login}`)
        .then(res => {
            
            if (res.length !== 1) {
                return;
            } else {
                localStorage.setItem('login', login);
                window.location = '/menu.html';
            }
        })          
    })
}