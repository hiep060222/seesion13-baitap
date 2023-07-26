let array = [1, 2, 3, 4, 5, 6];
let n = prompt("nhập vào 1 số");
let check = false;
for (let i = 0; i < array.length; i++) {
    if (n == array[i]) {
        check = true
    }
}
if (check == true) {
    alert("Bingo")
} else {
    alert("chúc bạn may mắn lần sau")
}