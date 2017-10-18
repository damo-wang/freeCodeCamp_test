/*
如果字符串的长度比给定的参数num长，则把多余的部分用...来表示。
切记，插入到字符串尾部的三个点号也会计入字符串的长度。
然而，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。
*/
function truncate(str, num) {
    // Clear out that junk in your trunk
    if (num <= 3) {
        str = str.slice(0, num).concat('...');
    } else {
        str = str.slice(0, num - 3).concat('...');
    }
    return str;
}

console.log(truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));