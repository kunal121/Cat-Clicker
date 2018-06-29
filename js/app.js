let model=[{
  name:'Snow',
  src:'https://s.hswstatic.com/gif/abyssinian-cat.jpg',
  clicks:0
},
{
  name:'cool',
  src:'http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg',
  clicks:0
}
]

let image=document.querySelector('.images')
let score=document.getElementsByClassName('score')
let count=0

for(let cat of model){
  let div_ref=document.createElement('div')
  div_ref.className="col-md-6"
  div_ref.innerHTML=`<h2>${cat.name}</h2><img class="image" src="${cat.src}"/><h2>Score</h2>
  <h3>Click:<span class="score">${cat.clicks}</span></h3>`
  image.appendChild(div_ref)
}

let img_arr=document.getElementsByClassName('image')
for(let i=0;i<img_arr.length;i++){
  img_arr[i].addEventListener('click',()=>{
    model[i].clicks=model[i].clicks+1
    score[i].innerHTML=model[i].clicks
  })
}
