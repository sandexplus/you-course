import changeTrain from "./changeTrain";
import checkTrain from "./checkTrain";

export default function drawTrains(trains) {

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
    trainsAllContainer.prepend(trainsNumbers);
}