import drawCurrentTrain from "./drawCurrentTrain";

export default function changeTrain(e, i, trains) {
    const trainsAllContainer = document.querySelector('.trains-page__trains__container');


    if (e.target.classList.contains('trains-page__train-number') || e.target.tagName.toLowerCase() === 'span') {
        // console.log(1)
        document.querySelectorAll('.trains-page__train-number').forEach((item, j) => {
            item.classList.remove('trains-page__train-number_current');
            if (i === j) {
                item.classList.add('trains-page__train-number_current');
            }
        })
    }

    trainsAllContainer.append(drawCurrentTrain(trains));
}