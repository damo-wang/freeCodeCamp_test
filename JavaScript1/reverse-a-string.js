/*
实战翻转字符串算法
你可以先把字符串转化成数组，再借助数组的reverse方法翻转数组顺序，然后把数组转化成字符串。
提示:你的结果必须得是一个字符串
*/
//下面为答案
function reverseString(str) {
    str = str.split('');
    str = str.reverse();
    str = str.join('');
    return str;
}

reverseString("hello");

//下面为测试代码
console.log(reverseString("hello"));

//使用 node reverseString("hello"); 执行结果