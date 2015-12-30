# Sorting Algorithims

This web app contains modules for different sorting types and a visualizer for seeing the sorting in process.

## Bubble Sort

  Starts at the beginning of an array and checks each pair and swaps when needed then starts at the beginning again until there are no more swaps needed, meaning that the array has been sorted.

  ### PseudoCode
    repeat
      for all pairs
        if a < b
          swap a for b
          continue
    when no swaps
      array is sorted;

  ### Performance
    Probably the worst sorting method to use as it's complexity increases exponentially with the number of arguments passed in.
    In it's best case the array is already sorted and it will run quickly.
    In it's worst case the array is reverse sorted from what you want and it will take the maximum number of swaps to arrange it.

## Quick Sort

  Breaks up the array into smaller and smaller pieces while evaluating them around a pivot until the pieces are all a single value and pieces them back together using the order predetermined by breaking them up based on the pivot.

  ## PseudoCode
      a = []
      b = []
    if array <= 1
      pass back array
     else go through array
      if number in array <= pivot value
        move to a
        else
        move to b
    call recursively add together resulting arrays around pivot

  ## Performance
    Good sorting method with log n complexity.
    In it's worst case the pivot point chosen will always be either the greatest or least in the array and will result in exponential complexity.
    In it's best case the pivot will always evenly partition the array into half as complex arrays resulting in a diminishing incremental complexity as the number of arguments go up.


## Selection Sort
  Searches for either the greatest or least item in an array and moves it to its respective side and continues this search in the remaining unsorted list until all values are sorted.

  ## PseudoCode
    for all items
      start with lowest = first
      if any number < lowest
        lowest = that number
      after checking all numbers
      move lowest to front
    repeat checking everything after lowest

  ## Performance
    So-so method that's complexity increases with each argument given to it.
    It's best and worst case have the same performance because it is always checking each value against each other value.

## Insertion Sort

  Starts at the beginning of an array checks if that number belongs before the initial number, or if it fits in between anything in the already known as sorted sublist else it adds it to the end of the sorted sublist and moves on.

  ## PseudoCode
    for number in array
      if less than index [0]
        insert before index zero
      if between items in sublist
        insert between them
      otherwise leave in place
        sorted sublist +1
    repeat with next number

  ## Performance
    Okay sorting method that increases exponentially with added arguments.
    In it's worst case it will make the same number of comparisons but in it's best case it will not need to make any swaps.

## Merge Sort

  Breaks down the array using recursion using an arbitrary divisor, once completely broken down it combines pairs of arrays by their first value and moves it into a new combined array until it merges all arrays into one.

  ##Pseudo Code
    if array <=1
      return that array
    split in half
      left repeat split
      right repeat split
    merge left and right
      repeat
      eval which first number is less
      add to merged array
      until both are empty
    merge next pair

  ## Performance
    Works well and in both worst and best case performs with log n complexity as it continues to break the problem down into half as complex problems before combining to larger and larger lists.