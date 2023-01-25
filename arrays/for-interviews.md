## What to look out

- Check if there will be any duplicated values in the array. If so, will the presence of them affect the answer? Does it makes the question simpler?
- Watch out to not go out of bounds when using an index to iterate through the array elements
- Be careful when using slicing or concat arrays in your code! Typically they take O(n) time. Try to use start and end indices to demarcate a subarray where it is possible.

## Techniques

Most of these techniques bellow can be used for arrays and also string problems, because a string is pretty much an array of characters.

### Sliding Window
Applies to many subarray/substring problems. It has two pointers which usually moves in the same direction and will never overtake each other. This ensures that each value will be only visited at most twice AND the time complexty will still be O(n)! **EVEN HAVING A NESTED LOOP IT WILL BE O(M+N) === O(N)**.