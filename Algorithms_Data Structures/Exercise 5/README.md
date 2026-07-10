# Task Management System Analysis

## 1. Linked List Types
- **Singly Linked List**: Each node contains data and a reference (`next`) to the next node in the sequence. It can only be traversed in one forward direction.
- **Doubly Linked List**: Each node contains data and two references (`next` and `prev`) to the next and previous nodes. It allows bidirectional traversal but requires more memory per node.

## 2. Time Complexity Analysis
- **Add**: \(O(N)\) to append at the end (can be \(O(1)\) if we maintain a reference to the `tail` node).
- **Search**: \(O(N)\) since we must traverse the list sequentially from the head node.
- **Traverse**: \(O(N)\) to visit all nodes.
- **Delete**: \(O(N)\) in the worst case (searching for the node) but the actual pointer redirection operation is \(O(1)\).

## 3. Advantages over Arrays
- **Dynamic Size**: Easily grows and shrinks without resizing operations or predefined capacities.
- **Efficient Deletions/Insertions**: Pointers can be redirected in \(O(1)\) time without shifting elements like arrays.
- **No Memory Wastage**: Memory is allocated dynamically for new nodes as needed.
