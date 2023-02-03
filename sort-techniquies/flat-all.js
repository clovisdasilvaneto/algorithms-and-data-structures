const input = [[[[[1],[2]]]], [3, 4], [[5, 6]]]

let parse = (input) => {
    if(typeof input[0] === "number") return input;

    return input.reduce((acc, current) => {
        return [...acc, ...parse(current)];
    }, [])
}

console.log(parse(input))