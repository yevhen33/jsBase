

if (num < 49) {
    console.log("false")
} else if (num >100) {
    console.log("veri big")
} else {
    console.log("true")
};

(num == 50) ? console.log("true") : console.log("false"); 

switch (num) {
    case num < 49:
        console.log("false");
        break;
    case num > 100:
        console.log("veri big");
        break;
    case num > 80:
        console.log("big");
        break;
    case 50:
        console.log("true!!!");
        break;
    default:
        console.log("oooo!!!");
        break;
}

let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 57);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    
    console.log(i)
}