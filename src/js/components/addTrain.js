import getServerData from "./getServerData";
import putData from "./putData";

export default function addTrain(baseUrl) {
    const btnAdd = document.querySelector('.js-add-train');

    if (!btnAdd) {
        return;
    }
    
    btnAdd.addEventListener('click', () => {
        const name = document.querySelector('[name="name"]');
        const times = document.querySelector('[name="times"]');
        const descr = document.querySelector('[name="descr"]');
        const img = document.querySelector('[name="img"]');
        const currentTrain = document.querySelector('.trains-page__train-number_current span');

        const newTrain = 
            {
                name: name.value,
                times: times.value,
                descr: descr.value,
                img: img.value
            }
        ;

        console.log(newTrain)

        getServerData(`${baseUrl}/users?login=${document.querySelector('.trains-page__search').value}`)
        .then(res => {
            const newData = res;
            console.log(newData);
            console.log(currentTrain.innerText)
            newData[0].trains[+currentTrain.innerText - 1].push(newTrain);
            console.log(newData[0])
            putData(`${baseUrl}/users/${res[0].id}`, newData[0]); 
            console.log(1)
        })
    })
}