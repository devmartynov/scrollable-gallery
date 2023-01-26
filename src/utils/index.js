/**
 * Троттлинг
 * @param callbackFn - ф-ия которая будет троттлиться
 * @param limit - время троттлинга
 * @returns {(function(...[*]): void)|*}
 * @see https://ru.wikipedia.org/wiki/%D0%94%D1%80%D0%BE%D1%81%D1%81%D0%B5%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D1%82%D0%B0%D0%BA%D1%82%D0%BE%D0%B2
 */
export function throttle(callbackFn, limit) {
    let wait = false;
    return function(...args) {
        if (!wait) {
            callbackFn.call(null, ...args);
            wait = true;
            setTimeout(function() {
                wait = false;
            }, limit);
        }
    }
}

/**
 * Убирает из номера телефона все символы крмое числовых
 * Пример: +7 (123) 456-78-99 ----> 71234567899
 * @param phoneNumber - номер телефона
 * @returns {string}
 */
export function clearPhoneNumber(phoneNumber) {
    return phoneNumber
        .replaceAll(/\D/g, '')
}
