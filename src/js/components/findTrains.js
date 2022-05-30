import drawTrains from "./drawTrains";
import getServerData from "./getServerData";

export default function findTrains(baseUrl, inputClass, btnClass) {
    const login = document.querySelector(inputClass);
    const btn = document.querySelector(btnClass);

    if (!login || !btn) {
        return;
    }

    btn.addEventListener('click', () => {
        getServerData(baseUrl + '/users')
        .then(res => {
            res.forEach(user => {
                if (user.login === login.value) {
                    document.querySelector('.trains-page__trains-numbers').innerHTML = '';
                    document.querySelector('.trains-page__trains').innerHTML = '';
                    drawTrains(baseUrl, login.value)
                }
            })
        })
    })
}