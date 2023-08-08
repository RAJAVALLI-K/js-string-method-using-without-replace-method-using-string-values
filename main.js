var str = "https://teams.microsoft456.com/_#/235modern-calling/";

function stringVal() {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (!(str.charCodeAt(i) >= 97 &&
            str.charCodeAt(i) <= 122)) {
            newStr += 'raji';
        }
        else {
            newStr += str[i];
        }
    }
    console.log(newStr);
}

stringVal();