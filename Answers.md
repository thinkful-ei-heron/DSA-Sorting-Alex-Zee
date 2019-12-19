### Question 1

21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

1st run:
  middle = 8
  left = [21, 1, 26, 45, 29, 28, 2, 9]
  right = [16, 49, 39, 27, 43, 34, 46, 40]

  left = mergeSort(left)

  1st recursive call:
    middle = 4
    left = [21, 1, 26, 45] ---> After all of the below, sorted to [1, 21, 26, 45]
    right = [29, 28, 2, 9] ---> Then, repeat same pattern with right side... ---> [2, 9, 29, 28]  ---> merge returns [1, 2, 9, 21, 26, 28, 29, 45] ---> returns to 1st

    left = mergeSort(left)

    2nd recursive call:
      middle = 2
      left = [21, 1]
      right = [26, 45]

      left = mergeSort(left)

      3rd recursive call:
        middle = 1
        left = [21]
        right = [1]

        left = mergeSort(left)

        4th recursive call:
          return [21]
          return to 3rd recursive call
      
      3rd recursive call:
        ...
        left = [21]
        right = mergeSort(right)

        5th recursive call:
          return [1]
          returns to 3rd recursive call

      3rd recursive call:
        ...
        right = [1]
        merge([21], [1], [])

        merge call:
          return [1, 21]
          return to 2nd recursive call

      2nd recursive call:
        ...
        left = [1, 21]
        right = mergeSort(right)
        
        6th recursive call:
          middle = 1
          left = [26]
          right = [45]

          left = mergeSort(left)

          7th recursive call:
            returns [26]
            returns to 6th recursive call

        6th recursive call:
          ...
          right = mergeSort(right)

          8th recursive call:
            returns [45]
            returns to 6th recursive call
        
        6th recursive call:
          merge([26], [45], [])

          merge call:
            return [26, 45]
            returns to 2nd recursive call
          
        2nd recursive call:
          left = [1, 21]
          right = [26, 45]
          merge([1, 21], [26, 45], [])

          merge call:
            returns [1, 21, 26, 45]
            returns to 1st recursive call

List after three recursive calls = [1, 21]
List after sixteen recursive calls = [16, 49, 39, 27, 43, 34, 46, 40]
The first two lists to be merged are [21] and [1]
1st merge: 21, 1
2nd merge: 26, 45
3rd merge: 1, 21 & 26, 45
4th merge: 29, 28
5th merge: 2, 9
6th merge: 29, 28 & 2, 9
*** 7th merge: 1, 21, 26, 45 & 2, 9, 28, 29 ***


### Question 2
 1) Either 14 or 17 could have been the pivot
 2) 
    input: 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
    Second partition, last-item pivot: 3,9,10,12,19,14,17,16,13,15
    Second partition, first-item pivot: 9, 3, 10, 13, 12, 14, 17, 15, 19, 16

### Question 3
  See QuickSort.js

### Question 4
  See MergeSort.js

### Question 5
  See LinkedList.js

### Question 6
  See BucketSort.js

### Question 7
  See RandomizeArray.js

### Question 8
  Since Numbers and Strings follow the same value conventions as one another, using the QuickSort function on an array of book titles will yield a correct result. With this in mind, it is viable to use the QuickSort function without any alterations as long as the array of book string titles are uniform (capital letters at beginning of string).
  See SortBooks.js for implementation (or lack thereof).