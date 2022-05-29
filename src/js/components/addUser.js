import getServerData from "./getServerData";
import postData from "./postData";

export default function addUser(baseUrl) {
    const btn = document.querySelector('.js-add-user');

    btn.addEventListener('click', () => {
        const name = document.querySelector('.add-user__name');
        const nickname = document.querySelector('.add-user__nickname');

        if (!name.value || !nickname.value) {
            console.log('not added');
            return;
        }

        getServerData(baseUrl + '/users?login=' + nickname.value)
        .then(res => {
            if (!res.length) {
                const isAdmin = document.querySelector('.popup__checkbox');
                postData(baseUrl + '/users', {
                    'name': name.value,
                    'admin': isAdmin.checked,
                    'login': nickname.value,
                    'tracker': [[]],
                    'trains': []
                })
                
                console.log('added');

                document.querySelector('.popup').classList.remove('popup_active');
                name.value = '';
                nickname.value = '';

                document.querySelector('.popup__custom-chb').classList.remove('popup__custom-chb_active');
            }
        })
        
    });
}