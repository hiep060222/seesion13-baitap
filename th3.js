let n = prompt("nhập vào 1 giá trị");
let numbers = [-3, 5, 1, 3, 2, 10];
for (let i = 0; i < numbers.length; i++) {
    if (n == numbers[i]) {
        ("n " + numbers[i] + "found at " + i);
    }
}