const arr_compact = arr => arr.filter((elem, ind, arr) => !ind || elem != arr[ind - 1])


// console.log(arr_compact([1,2,3,3,3,4,4,4,4,5,6,7,7,7]))