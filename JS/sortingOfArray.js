let testArray = [12, 4, 6, 89, 46, 100, -8];

console.log(testArray.sort(function(a,b){ return a - b}));

console.log(testArray.sort(function(a,b){ return b - a}));
