let content=document.getElementById("content")
let  date=document.getElementById("date")
let time=document.getElementById("time")
let addedBtn=document.getElementById("addedBtn")
let deletedBtn=document.getElementById("deletedBtn")
let list=document.getElementById("list")

let nn={};
// nn[0]=123;
nn.a=222
nn.kk=22223
nn.ll=[11]
console.log(nn.ll[1])
// let nt=Object.entries
let hh = Object.entries(nn)
console.log(Object.entries(nn))
// nn.pop()
// nn.unshift(5555)
// nn.shift()
// // nn[2]=444
// nn.unshift(5455)
console.log(nn,nn.length)
console.log(hh,hh.length)
for(let i=0;i<hh.length;i++){
    console.log(hh[i])
    console.log(i)
}
hh.forEach(function(e){
    console.log(e)
})


function asd(a,b,c){
    
    sum=0
    for(let i=0,j=arguments.length;i<j;i++){
        sum+=arguments[i]
    }
    return sum
}
let d=asd(8,2)
console.log(d)



function start(){
    let t=new Date()
    let s=[
        t.getFullYear(),
        t.getMonth()+1,
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
    ]
    console.log(s)
    Number.prototype.pad=function(digits){
        for(var n=this.toString();n.length<digits;n=0+n);
        return n;
    }
    console.log(s.length)
    let v = s[1].pad(2)
    let va =s[0]+"-"+s[1].pad(2)+"-"+s[2].pad(2)
    date.value =va
    console.log(va)
    // s[0]+-s[1]+-s[2]
    c(s[3])
    
    function c(c){
        let b=c
        
    if(b<10)
    b="0"+c
    return b
    
    }
    let tt=c(s[3])+":"+c(s[4])
    time.value=tt
    console.log(s[3])
console.log(c(s[3]))
// let ss =document.getElementBYId("time")
let ss =document.querySelector("#time").value
console.log(ss)

// document.getElementById(date)
            // .nodeChild.nodeValue=dates[0];
            // console.log(date)

document.querySelector("#date").classList.add("date")
// let wei=document.querySelector(".date").value
let wei=document.getElementsByClassName("date")[0]
console.log(wei)
    // date.nodeValue=dates[0]
    // date.innerHTML=`<input type="date"id="date"value=${dates[0]}/${dates[1]}/${dates[2]}>`
    // console.log(date)
    console.log(s)
    s.forEach(function(e){
        console.log(e)
    })
}

// let datet = new Date;
// dataValues = [
//   datet.getFullYear(),
//   datet.getMonth() + 1,
//   datet.getDate(),
//   datet.getHours()%12,
//   datet.getMinutes(),
//   datet.getSeconds(),
// ];
// console.log(dataValues);


let ids=[content,date,time,addedBtn,deletedBtn]
// console.log(ids)
let listcontent=[]
console.log(listcontent)
function render(){
    let htmlstr=""
    listcontent.forEach(function(item){
        htmlstr=htmlstr+`
        <div class="item">
                <div>
                    <p>內容:${item.content}</p>
                    <p>時間:${item.date} ${item.time}</p>
                </div>
            </div>
        `
    })
    list.innerHTML=htmlstr
    content.value=""//清空記事
    document.getElementById("content").focus()//focus記事
}   

// ""||
ids[3].addEventListener("click",function(){
    console.log(ids[0].value)
    console.log(ids[1].value)
    console.log(ids[2].value)

    listcontent.push({
        content:ids[0].value,
        date:ids[1].value,
        time:time.value,
    })
    render()
    // let htmlstr=""
    // listcontent.forEach(function(item){
    //     htmlstr=htmlstr+`
    //     <div class="item">
    //             <div>
    //                 <p>內容:${item.content}</p>
    //                 <p>時間:${item.date} ${item.time}</p>
    //             </div>
    //         </div>
    //     `
    // })
    // list.innerHTML=htmlstr
    // content.value=""//清空記事
    // document.getElementById("content").focus()//focus記事
})    
function abc(aa){
     console.log(aa)
    

}
    deletedBtn.addEventListener("click",function(){
        listcontent.pop()
            
        render()
        // let htmlstr=""
        // listcontent.forEach(function(item){
        //     // for(var n=this;n<listcontent.length;n=n); {
        //     htmlstr=htmlstr+`
        //     <div class="item">
        //             <div>
        //                 <p>內容:${item.content}</p>
        //                 <p>時間:${item.date} ${item.time}</p>
        //             </div>
        //         </div>
        //     `
        //     // abc(item)
        // })
        
        // list.innerHTML=htmlstr
      })

    //   function keyCode(event) {
        
    //     if (event.keyCode== 27) {
    //      ids[4].click()}}
    //     }else if (x == 27) {
    //         ids[4].click()
    //        }
    //   }
    
// ids[3].addEventListener("click",function(){
// document.querySelector("p").innerHTML='<em>文本</em>'

// })
let ci=document.querySelector("button").getAttribute("class")
abc(ci+"555")
//按鍵ENTER=13 ESC=27
function keyCode(event) {
    var x = event.keyCode;
    if (x == 13) {
     document.getElementById("addedBtn").click()
    }else if (x == 27) {
        ids[4].click()
       }
  }
  let arr=[1,20,5,4,3]
//   for( let i = 0 ; i < arr.length ; i++ ){
//     console.log(arr[i]);
//    }


arr.forEach(function(e){
    abc(e)
   })
 

        
    


























// window.addEventListener('load',function(){
//     const co = document.getElementById("id")
//     console.log(co)
//     co.innerText="how are you"

//     const bu =document.getElementById("button")
//     console.log(bu)
//     bu.addEventListener("click",function(){
//         console.log("點下去")
//     })
//     const ii = document.getElementById("ii")
//     console.log(ii)
//     ii.innerHTML='<input id="iii" type=text placeholder="輸入">'
//     console.log(iii)
//     iii.addEventListener("keyup",function(e){
//         console.log(e.target.value)
//     })

    
// })





















// let condition=true,
//     target=10,
//     i=1;
//     while(condition){
//         if(i===target){
//             condition=false
//         }
//         console.log(i)
//         i+=1

//     }
    
//     function abc(a,b,c){
//         let a1 =a+b-c
//         return a1
//     }
//     let a2=abc(8,50,61)
//     console.log(a2)
    
//     function cc(cc){
    
//     console.log(cc)
//     }

//     cc(a2)
















// for(let i=0;i<10;i++){
//     console.log('i',i)
// }
// let a =[100,80,59]
// a.push(66)
// console.log("a:",a)
// for(let i=0;i<a.length;i++){
//     // console.log(a[i])
//     if(a[i]<60){
//     console.log(a[i]+"是誰")
//     }else{
//     console.log(a[i])
//     }
// }
// let c=[{
//     name:"a",
//     age:2,
// },
// {
//     name:"b",
//     age:3,
// }
// ]
// for(let i=0;i<c.length;i++){
//     if(i===1){
//         let cc=c[i]
//         console.log(cc)
//     }else{
//         c[i].age+=2
//     console.log(c[i].age)
    
//     }
// }
// console.log(c)























// let title = "提示訊息:"
// let title1 ="錯誤"
// let title2 ="成功"

// let alert1=title+title1
// let alert2=title+title2
// console.log(alert1)
// console.log(alert2)
// // let b=1

// // if(b<2)
// //  a = alert(alert1)
// // else
// //  a = alert(alert2)
// let score =100
// console.log(score+50)
// console.log(50%2)

// let classA=["monday","tuesday","wednesday","thursday",
//             "friday","saturday"]
//             console.log(classA)
//             classA.push("sunday")
//             console.log(classA)
//             console.log(classA.length)
//             console.log('m',classA[0])
//             console.log('s',classA[6])
//             console.log('f',classA[4])
// const a ={
//     name:"weijie",
//     job:"mayfua",
//     age:29,
// }
// s
// switch (a.age){
//     case 29:
//         console.log('29')
//         break;
//     case 28:
//         console.log('28')    
//         break;
//     case 27:
//         console.log('27')    
//         break;
//     default:    
//     console.log('123')
//     break;

// }
    

// console.log("job",a.job)
// const b ={
//     name:"weichine",
//     job:"none",
//     age:29,
// }
// if(b.age==29)
//  console.log(b.age)
//  else
//  console.log(b.name)
// console.log("name",b.name)
// const wall={
//     a,
//     b,
// }
// console.log("a",wall.a)
// console.log("wall",wall)








// console.log(100)
// let myName = "i am wei chine"
// console.log(myName)
// let age = 100
// console.log(age)
// let aa =myName+age
// console.log(aa)
// let tru =true
// console.log(true)
// let fase =false
// console.log(false)
// let bag = undefined
// console.log(bag)
// let bag2 =null
// console.log(bag2)
