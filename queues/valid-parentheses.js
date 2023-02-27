/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openMap = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    const closeMap = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    const queue = []
    let isValid = true;

    for(let i = 0; i < s.length; i++) {
        const symbol = s[i];

        if(openMap[symbol]) {
             queue.push(symbol);
        }else if(queue[queue.length - 1] === closeMap[symbol]) {
            queue.pop();
        }else {
            isValid = false
        }
    }

    return queue.length ? false : isValid
};