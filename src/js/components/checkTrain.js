export default function checkTrain(i) {
    const checkBtns = document.querySelectorAll('.trains-page__train-check');

    checkBtns.forEach((item, j) => {
        if (i === j) {
            item.classList.toggle('trains-page__train-check_checked');
        }
    })
}