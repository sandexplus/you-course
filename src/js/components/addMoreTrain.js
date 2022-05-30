import getServerData from './getServerData';
import putData from './putData';

export default function addMoreTrain(baseUrl) {
    document.querySelectorAll('.js-add-more-train').forEach(item => {
        item.addEventListener('click', () => {
            getServerData(`${baseUrl}/users?login=${document.querySelector('.trains-page__search').value}`)
            .then(res => {
                console.log(res)
                const newRes = res[0];
                newRes.trains.push([]);
                putData(`${baseUrl}/users/${newRes.id}`, newRes);
            })
        })
    })
}