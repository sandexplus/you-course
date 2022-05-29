import getServerData from "./getServerData";

export default function showAdminFunctions(baseUrl) {
    const adminBlocks = document.querySelectorAll('.js-admin');

    adminBlocks.forEach(item => {
        getServerData(baseUrl + '/users')
        .then(res => {
            const login = localStorage.getItem('login');
            res.forEach(item => {
                if (item.login === login) {
                    if (item.admin) {
                        adminBlocks.forEach(block => {
                            block.style.display = 'flex';
                        })
                    } 
                }
            })
        })
    })
}