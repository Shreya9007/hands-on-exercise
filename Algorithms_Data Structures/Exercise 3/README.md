# Sorting Customer Orders Analysis

## 1. Overview of Sorting Algorithms
- **Bubble Sort**: Repeats swaps of adjacent out-of-order elements. Simple but slow.
- **Insertion Sort**: Builds a sorted array one element at a time by inserting elements at their correct positions.
- **Merge Sort**: Divide-and-conquer, divides array in half, recursively sorts, and merges. Stable but requires \(O(N)\) extra space.
- **Quick Sort**: Divide-and-conquer, partitions the array around a pivot element. In-place and fast on average.

## 2. Comparison (Time Complexity)
| Algorithm | Best Case | Average Case | Worst Case | Space Complexity |
| :--- | :--- | :--- | :--- | :--- |
| **Bubble Sort** | \(O(N)\) (sorted) | \(O(N^2)\) | \(O(N^2)\) | \(O(1)\) |
| **Quick Sort** | \(O(N \log N)\) | \(O(N \log N)\) | \(O(N^2)\) (poor pivot) | \(O(\log N)\) (stack space) |

## 3. Why Quick Sort is Preferred
- **Average Performance**: Quick Sort achieves \(O(N \log N)\) performance on average and typically outperforms Merge Sort and Heap Sort in practice due to lower constant overhead.
- **In-Place Sorting**: It does not require additional auxiliary array buffers like Merge Sort, saving memory.
- **Cache Friendly**: It works well with virtual memory and CPU caches.
