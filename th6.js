
let n = prompt("Nhập vào đây số bất kỳ được ngăn cách bởi dấu ,");
let convert = n.split(",");
consoloe.log("Chuyển đổi string sang array", convert);
let array = [];
for (i = convert.length - 1; i >= 0; i--) {
    array.push(convert[i]);
    console.log("Đảo ngược các phần tử", array);
}