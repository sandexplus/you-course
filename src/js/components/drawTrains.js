import changeTrain from "./changeTrain";
import checkTrain from "./checkTrain";
import getServerData from "./getServerData";
import addMoreTrain from "./addMoreTrain";

export default function drawTrains(baseUrl, login) {
    getServerData(`${baseUrl}/users?login=${login}`)
    // .then(res => res.json())
    .then(data => {
        const trains = data[0].trains;

        const trainsAllContainer = document.querySelector('.trains-page__trains__container');
        if (!trainsAllContainer) {
            return;
        }
        const trainsNumbers = trainsAllContainer.querySelector('.trains-page__trains-numbers');
        trains.forEach((number, i) => {
            const trainNumber = document.createElement('div');
            trainNumber.classList.add('trains-page__train-number');
            if (i === 0) {
                trainNumber.classList.add('trains-page__train-number_current');
            }

            const trainCheck = document.createElement('div');
            trainCheck.classList.add('trains-page__train-check');
            trainCheck.addEventListener('click', () => {
                checkTrain(i);
            })

            const checkImg = document.createElement('img');
            checkImg.setAttribute('src', './img/icons/train-check.svg');

            const numberText = document.createElement('span');
            numberText.innerText = i + 1;
            // console.log(number)
            trainNumber.addEventListener('click', (e) => {
                changeTrain(e, i, number);
            })
            if (i === 0) {
                trainNumber.click();
            }

            trainCheck.append(checkImg);
            trainNumber.append(trainCheck);
            trainNumber.append(numberText);

            trainsNumbers.append(trainNumber);
        });
        const trainNumber = document.createElement('div');
        trainNumber.classList.add('trains-page__train-number');
        trainNumber.classList.add('js-admin');
        trainNumber.classList.add('js-add-more-train');
        const trainNumberAdd = document.createElement('img');
        trainNumberAdd.setAttribute('src', '../../img/plus.png');
        trainNumberAdd.classList.add('js-add-more-train');
        trainNumber.append(trainNumberAdd);
        if (trains.length) {
             trainsNumbers.append(trainNumber);
             addMoreTrain(baseUrl); 
        }
        
        trainsAllContainer.prepend(trainsNumbers);
    });
    
}