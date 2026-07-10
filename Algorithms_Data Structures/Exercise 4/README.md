# Employee Management System Analysis

## 1. Array Representation in Memory
Arrays are represented in memory as contiguous blocks of memory cells.
- **Base Address**: The starting address of the block.
- **Index offset**: Direct mapping to calculation `Address = Base + (Index * Element_Size)`.
- **Advantages**: Constant-time access (\(O(1)\)) to elements by index, cache-locality (contiguous cells are loaded together in CPU cache).

## 2. Time Complexity Analysis
- **Add**: \(O(1)\) if adding at the end (assuming capacity is not exceeded).
- **Search**: \(O(N)\) linear search since we must scan the elements sequentially by ID.
- **Traverse**: \(O(N)\) to visit each element.
- **Delete**: \(O(N)\) because we must shift elements left to fill the deleted index's slot.

## 3. Limitations of Arrays
- **Fixed Size**: Once initialized, their size cannot be changed dynamically.
- **Costly Deletion/Insertion**: Inserting or deleting an element in the middle requires shifting elements, resulting in \(O(N)\) complexity.
- **Memory Overhead**: An over-allocated array wastes memory, while under-allocated ones cause capacity failures.
