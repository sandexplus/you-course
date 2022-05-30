import getServerData from "./getServerData";
import putData from './putData';

export default function saveTable(baseUrl) {
    document.querySelector('.tracker-page__save-table').addEventListener('click', () => {
        const inputs = document.querySelectorAll('.table__input_active');
        
        let flag = true;
        inputs.forEach(item => {
            if (!item.value) {
                flag = false;
                item.style.background = 'red';
            } else {
                item.style.background = 'transparent';
            }
        })

        if (flag) {
            getServerData(`${baseUrl}/users?login=${localStorage.getItem('login')}`)
            .then(servData => {
                const inputsData = [];
                inputs.forEach(item => {
                    inputsData.push(item.value);
                    console.log(item.value)
                })

                for (let i = 0; i < servData[0].tracker.length; i++) {
                    if (servData[0].tracker[i].length < 5) {
                        const newData = servData[0];
                        const newTracker = servData[0].tracker;
                        newTracker[i].push(inputsData);
                        newData.tracker = newTracker;
                        putData(`${baseUrl}/users/${servData[0].id}`, newData);
                        break;
                    } else if (servData[0].tracker[i].length === 5) {
                        const newData = servData[0];
                        const newTracker = servData[0].tracker;
                        newTracker.push([]);
                        newTracker[i].push(inputsData);
                        newData.tracker = newTracker;
                        putData(`${baseUrl}/users/${servData[0].id}`, newData);
                        break
                    }
                }
            })
        }
    })
}