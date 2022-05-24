export default function popup(popupClass, closePopup, openPopup) {
    if (document.querySelector(popupClass)) {
        openPopup.forEach(item => {
            document.querySelectorAll(item).forEach(opener => {
                opener.addEventListener('click', (e) => {
                    if (e.target === opener) {
                        document.querySelector(popupClass).classList.add('popup_active');
                    }
                })
            })
        })
        closePopup.forEach(item => {
            document.querySelectorAll(item).forEach(closer => {
                closer.addEventListener('click', (e) => {
                    if (e.target === closer) {
                        document.querySelector(popupClass).classList.remove('popup_active');
                    }
                })
            })
        })
    }
}