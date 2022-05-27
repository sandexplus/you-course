import postData from "./postData";

export default function addUser(baseUrl) {
    const btn = document.querySelector('.add-user');
    btn.addEventListener('click', () => {
        const login = document.querySelector('.user-login');
        postData(baseUrl + '/users', {
            'name': 'Test',
            'admin': false,
            'login': login.value,
            'tracker': [[]],
            'trains': []
        })
    })
}