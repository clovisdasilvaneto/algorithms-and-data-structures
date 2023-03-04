/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let left = 0;
    let right = 0;

    while(left < chars.length) {
        if(chars[right] !== chars[left]) {
            if(left + 1 < right) {
                const s = `${right - left}`

                Array.from(s, (value, index) => {
                    chars.splice(left + index + 1, 0, value);
                    right++;
                });

                if(left + 2 < right) {
                    chars.splice(left + s.length + 1, right - (left + s.length + 1))
                    right = left + s.length + 1
                }
            }

            left = right
        }

        right++;
    }
};