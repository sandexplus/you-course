export default function drawCurrentTrain(trains) {
    const trainsContainer = document.querySelector('.trains-page__trains');
    trainsContainer.innerHTML = '';
    

    trains.forEach((train, i) => {
        const currentTrain = document.createElement('div');
        currentTrain.classList.add('train');
        if (i % 2 !== 0) {
            currentTrain.classList.add('train_right');
        }

        const trainData = document.createElement('div');
        trainData.classList.add('train__data');

        const trainNumber = document.createElement('div');
        trainNumber.classList.add('train__number');
        trainNumber.innerText = i + 1;

        const trainName = document.createElement('div');
        trainName.classList.add('train__name');
        trainName.innerText = train.name;

        const trainTimes = document.createElement('div');
        trainTimes.classList.add('train__times');
        trainTimes.innerText = train.times;

        const trainDescr = document.createElement('div');
        trainDescr.classList.add('train__descr');
        trainDescr.innerText = train.descr;

        const trainImgContainer = document.createElement('div');
        trainImgContainer.classList.add('train__img');

        const trainImg = document.createElement('img');
        trainImg.setAttribute('src', train.img);
        // trainImg.setAttribute('src', './img/trains-img.svg');

        trainData.append(trainNumber);
        trainData.append(trainName);
        trainData.append(trainTimes);
        trainData.append(trainDescr);

        trainImgContainer.append(trainImg);

        currentTrain.append(trainData);
        currentTrain.append(trainImgContainer);

        trainsContainer.append(currentTrain);
    })

    return trainsContainer;
}