const input = [[1,2],[1,1]]

const minimumPath = (input) => {
    const memoizedArray = []

    const traversePath = (i, j, sum) => {
        if(!input[i]) return sum;
        let rightNumber = input[i][j+1];
        let bottomNumber = input[i+1];
        let rightNumberExists = rightNumber !== undefined
        let bottomNumberExists = bottomNumber && bottomNumber[j] !== undefined
        let traversedRight = Infinity;
        let traversedBottom = Infinity;

        if(memoizedArray[i] !== undefined && memoizedArray[i][j] !== undefined) return memoizedArray[i][j]

        if(rightNumberExists) traversedRight = traversePath(i, j + 1, rightNumber)
        if(bottomNumberExists) traversedBottom = traversePath(i + 1, j, bottomNumber[j])

        if(!rightNumberExists && !bottomNumberExists) return sum

        const result = sum + Math.min(traversedRight, traversedBottom);

        if(memoizedArray[i] === undefined) memoizedArray[i] = [];
        
        memoizedArray[i][j] = result;
        
        return result
    }

    return traversePath(0,0, input[0][0])
}

console.log(minimumPath(input))