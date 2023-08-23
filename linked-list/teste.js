const testList = {
    val: 7,
    next: {
        val: 2,
        next: {
            val: 4,
            next: {
                val: 3,
                next: null
            }
        }
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const reverseList = (list, prev) => {
        const next = list.next
        list.next = prev
        prev = list

        if(!next) return list;

        return reverseList(next, prev)
    }

    const tp =  reverseList(l1)
    console.log(tp.next)

    return l2
};


addTwoNumbers(testList)