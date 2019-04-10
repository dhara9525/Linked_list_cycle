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
var hasCycle = function(head) 
{
    
    if(!head)
        return false;
    var length=0, cur=head;
    
    var cur=head;
    console.log(cur.val);
    var set=new Set();
    while(cur.next!=null)
    {
        console.log('cur.next '+cur.next)
        if(set.has(cur.next))
        {
            return true; 
        }
        else
        {
            (set.add(cur.next));
        }
        cur=cur.next;
    }
    return false;
};