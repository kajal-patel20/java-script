//funtion 2
//1
function ka(a,b){
    return a+b
}
console.log(ka(45,67))
//2
function s(hey){
    return(hey)
}
console.log(s("hello world"))
//3
function q(hey){
    console.log(hey.length)
}
q("hello baby")
//4
function w(a){
    let largest=a[0];
    for (let i=1;i<a.length;i++)
    {
        if (a[i]>largest)
        {
            largest=a[i];
        }
    }
console.log(largest);
}
w([1,2456,865,45])
//5
function r(a){
    if (a%2==0)
        console.log(a,"is even")
    else
        console.log(a,"is odd")
}
r(765)
//6
function e(a,b){
    console.log(a.concat(b))
}
e("kajal","patel")
//7
function fact(n){
    let a=1;
    if (n===0)
        return 1;
    else{
        return n * fact(n-1)
    }
}
console.log(fact(9))
//8
function reverse(a){
    for(let i=a.length-1;i>=0;i--)
        console.log(a[i])

}
reverse("kajal")
//9
function r(a){
    let b=0;
    for (let i=0;i<b.length;i++)
    {
    b += a[i]
    }
    return b
}
let q=r([3,5,6,8,2,5])
console.log(q)
//10
function c(s,c){
    return s.includes(c);
}

const a="kajal"
const t="r"
console.log(c(a,t))
//11
function isPrime(num){
    if (num<=1) return false;
    for (let i=2;i<num;i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}
const a =11;
console.log(isPrime(a));
//12
function a(b){
    let c=b[0]
    console.log(c)
}
a([2,3,5,6,7,1])
//13
function q(s){
    const v=("aeiou")
    let a=0;
    for(let i=0;i<v.length;i++)
    {
        if(v.includes(s[i]))
            a++
    }
    return a
}
let a=q("kajal")
console.log(a)
//14
function k(a,b){
    if(a>b)
        return a
    else
        return b
}
console.log(k(44,87))
//15
function a(q){
return q.toUpperCase();
}
console.log(a("priya"))
//16
function ka(g){
let r
for(let i=0;i<g.length;i++){
    const c=g[i]
    r=c+r;
    return true
}
}
console.log(ka("mama"))
//17
function u(a){
    a.push(65);
    return a;
}
console.log(u([23,54,27,98,30]))
//18
function g(r){
    r.pop();
    return r;
}
console.log(g([87,45,9,34]))
//19
function r(y){
    y.sort();
    return y;
}
console.log(r([89,65,34,52,10]))
//20
function n(o){
    let a=o**2
    return a
}
console.log(n(6))