/*
  扑克牌
 */
/*
  花色
 */
var hua=[{s:1,name:'红桃'},{s:2,name:'黑桃'},{s:3,name:'梅花'},{s:4,name:'方片'}];
/*
  数字
  1-10
 */
var shu=[];
for(var i=1;i<11;i++)
{
   var shu1={s1:i,name:i};
    shu.push(shu1) ;

}
/*
   J Q K
 */
var shu1={s1:11,name:'J'};
shu.push(shu1) ;

var shu1={s1:12,name:'Q'};
shu.push(shu1) ;
var shu1={s1:13,name:'K'};
shu.push(shu1) ;


var pai=[] ;
for(var i=0;i<shu.length;i++)
{
    var pai1=[{pai:shu[i],hua:hua[0]}]
    pai.push(pai1)
    var pai1=[{pai:shu[i],hua:hua[1]}]
    pai.push(pai1)
    var pai1=[{pai:shu[i],hua:hua[2]}]
    pai.push(pai1)
    var pai1=[{pai:shu[i],hua:hua[3]}]
    pai.push(pai1)
}
var pai1=[{pai:{s1:14,name:'小王'},hua:{s1:5,name:'小王'}}]
pai.push(pai1)

var pai1=[{pai:{s1:15,name:'大王'},hua:{s1:6,name:'大王'}}]
pai.push(pai1)

console.log(JSON.stringify(pai),pai.length);

for(var i=0;i<10;i++)
{
    console.log(JSON.stringify(pai[i]));
}