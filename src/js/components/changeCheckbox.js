export default function changeCheckbox(labelClass, labelActiveClass, chClass, customChbClass, customChbClassActive) {
    const label = document.querySelector(labelClass);
    if (!label) return;

    const chb = document.querySelector(chClass);
    const customChb = label.querySelector(customChbClass);
    label.addEventListener('click', () => {
        label.classList.toggle(labelActiveClass);
        chb.checked= !chb.checked;  
        customChb.classList.toggle(customChbClassActive);
    })
}