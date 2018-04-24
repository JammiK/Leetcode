/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head == null) {
        return true;
    }
    let count = 0;
    let iter = head;
    let middle = head;
    let tail = null;
    while (iter != null) {
        count++;
        iter = iter.next;
        if (count % 2 == 0) {
            middle = middle.next;
        }
    }
    
    tail = middle;
    let next = tail.next;
    middle.next = null;
    while (next != null) {
        let secondNext = next.next;
        next.next = tail;
        tail = next;
        next = secondNext;
        
    }

    while (tail != null && head != null) {
        if (tail.val != head.val) {
            return false;
        }
        tail = tail.next;
        head = head.next;
    }
    return true;
};