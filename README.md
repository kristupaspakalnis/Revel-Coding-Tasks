# Revel-Coding-Tasks
Both tasks are written in JS and have their outputs in the console.

Task 1:
Execution time: between 0.5 and 1.0 milliseconds and uses around 3600 kB of Memory when ran in Chrome.
The program runs through the first "depth" of the given object and prints out its a layer, entities that have further "depth"
stores into an array. Once one layer is finished function is called again with the new array as the input and the layer count is increased by one. It continues till it can no longer find a layer that's "deeper".

Task 2:
Execution time: between 0.5 and 1.5 milliseconds and uses around 1500 kB of Memory when ran in Chrome.
It goes down the branches of both nodes till it reaches master parent (parent which is a parent to itself and doesn't have another parent) and stores the values into two arrays.
Then it just compares the two arrays to find the first common parent(ancestor).

NOTE:
Results of tests for time and memorry usage were taken using example inputs provided with the tasks.
