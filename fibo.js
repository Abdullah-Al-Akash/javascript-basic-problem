
let fibo = [0, 1];
for (var i = 2; i <= 10; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo)

/*
Create a Function
For FibonacciSeries
*/

function fibonacciSeries(n) {
        let fibo = [0, 1];
        for (var i = 2; i <= n; i++) {
                fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
        return fibo;
}
console.log(fibonacciSeries(12))
