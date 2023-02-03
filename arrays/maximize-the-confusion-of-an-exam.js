/***

Declaratios

- Receba um conjunto de respostas, e defina como [answerKey] 
- Receba o numero de vezes que vc é permitido fazer swap, e defina como [k]
- Defina [left] como IGUAL a 0
- Defina [right] como IGUAL a 0
- Defina [counter] como IGUAL a 0
- Defina [total] como IGUAL a 0

Statements

- ENQUANTO [right] for MENOR que [answerKey].LENGTH
    - DEFINA [letter] como IGUAL a [answerKey[right]]
    - SE [letter] for IGUAL a "F" ENTAO:
        - DECREMENTE [k]
    - ENQUANTO [k == -1]:
        - DEFINA [leftLetter] como IGUAL a [answerKey[left]]
        - DECREMENTE [counter]
        - SE [leftLetter] for IGUAL a "F" ENTAO:
            - INCREMENTE [k]
        - INCREMENTE [left]
    - INCREMENTE [counter]
    - SE [counter] for MAIOR QUE [total] ENTAO:
        - DEFINA [total] IGUAL a [counter]
    - INCREMENTE [right]
 */
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let totalT = getConsecutivesByTarget("T", answerKey, k)
    let totalF = getConsecutivesByTarget("F", answerKey, k)

    return Math.max(totalT, totalF)
};

const getConsecutivesByTarget = (target, answerKey, k) => {
    let [left, right, counter, total] = [0,0,0,0]

    while(right < answerKey.length) {
        let letterRight = answerKey[right];

        if(letterRight === target) {
            k--;
        }

        while(k === -1) {
            let leftLetter = answerKey[left]

            counter--;

            if(leftLetter === target) {
                k++;
            }

            left++;
        }
        
        counter++;

        total = Math.max(counter, total);

        right++;
    }

    return total
}

const input = ["TTFF"]
const k = 2;

console.log(`The maximum of consecutive answers is: ${maxConsecutiveAnswers(input, k)}`);