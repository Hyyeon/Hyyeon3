module.exports = function main(str) {
    //write your code
    var b,c,d,f;
    var a=parseInt(str);
    b=a%10;
    a=a/10;
    c=a%10;
    console.log(c)
    a=a/10;
    d=parseInt(a%10);
    f=b+c+d;
    return f;
};
