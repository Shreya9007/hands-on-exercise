# Library Management System Analysis

## 1. Search Algorithms
- **Linear Search**: Scans the list elements one by one from start to end. Simple and requires no sorting.
- **Binary Search**: Repeatedly halves the search interval. Very fast but requires the array to be sorted beforehand.

## 2. Complexity Comparison
| Algorithm | Best Case | Average Case | Worst Case | Space Complexity |
| :--- | :--- | :--- | :--- | :--- |
| **Linear Search** | \(O(1)\) | \(O(N)\) | \(O(N)\) | \(O(1)\) |
| **Binary Search** | \(O(1)\) | \(O(\log N)\) | \(O(\log N)\) | \(O(1)\) |

## 3. Decision Matrix (When to use each)
- **Linear Search**:
  - Small datasets (e.g., \(N < 100\)).
  - Unsorted data where sorting overhead outweighs search benefit.
  - Frequency of search is low.
- **Binary Search**:
  - Large datasets (e.g., library catalogs, directories).
  - Pre-sorted data or data sorted once and searched frequently.
