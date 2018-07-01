let model=[{
  name:'Snow',
  src:'https://s.hswstatic.com/gif/abyssinian-cat.jpg',
  clicks:0
},
{
  name:'cool',
  src:'http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg',
  clicks:0
},
{
  name:'tom',
  src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlR7dIduBPHd5JLhutC-xeIarGGyczy7nlMGGx8c0YYocOF6lOQ',
  clicks:0
},
{
  name:'potter',
  src:'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350',
  clicks:0
},
{
  name:'jerry',
  src:'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Russian-Blue_01-390x203.jpg',
  clicks:0
}
]

let navbar=document.querySelector('.nav')
let fragment=document.createDocumentFragment()
//Appending Cat into the list
let appendCat=()=>{
  for(let i of model){
    let li=document.createElement('li')
    li.innerHTML=`<a class="nav_name">${i.name}</a>`
    fragment.append(li)
  }
  navbar.append(fragment)
}

//Displaying image of specific
let li_ref=document.getElementsByClassName('nav_name')
let image=document.querySelector('.image')
let display_image=()=>{
  let j = 0;
  for (let i of li_ref){
    i.addEventListener('click',(function(i_copy){
        return function(){
          image.innerHTML=`<h2>${i_copy.name}</h2><img class="images" src="${i_copy.src}"/><h2>Score</h2>
          <h3>Click:<span class="score">${i_copy.clicks}</span></h3>`
          increment_score()
        };
    })(model[j]))
    j++
  }

}
let score_ref=document.getElementsByClassName('score')
let increment_score=()=>{
    let image_ref=document.querySelector('.images')
    image_ref.addEventListener('click',(function(image_copy){
        return function(){
          for(let i of model){
            if(image_copy.src== i.src){
              i.clicks=i.clicks+1
              score_ref[0].innerHTML=i.clicks
            }
         }
        };
    })(image_ref))
}
appendCat()
display_image()
