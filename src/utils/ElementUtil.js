import isString from 'lodash/isString'

export function isIntersection(target, observe) {
    const targetEle = isString(target) ? document.getElementById(target) : target;
    const observeEle = isString(observe) ? document.getElementById(observe) : observe;
    const ob = new IntersectionObserver((entries) => {
        console.log(entries[0].isIntersecting)
        console.log("相交了……")
    }, {
        root: targetEle,
        threshold: 0.8
    });
    ob.observe(observeEle)
}