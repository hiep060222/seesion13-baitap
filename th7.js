
let a = prompt("Nhập vào đấy số bất kỳ ngắn cách bởi dấu ,");
let convert = a.split(",");
console.log("Chuyển đổi string sang array", convert);

let max = convert[0];
for (let i = 0; i < convert.length; i++) {
    if (max < convert[i]) {
        max = convert[i]
    }
}
console.log(max);