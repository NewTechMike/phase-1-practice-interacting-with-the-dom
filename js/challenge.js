
let count = document.querySelector("#counter").textContent 
let test = setInterval(more, 1000)

let plus = document.querySelector('button#plus')
plus.addEventListener('click', () => more())
let minus = document.querySelector('button#minus')
minus.addEventListener('click', () => less())

let heart = document.querySelector('button#heart')
let likes = document.querySelector('.likes')
let pause = document.querySelector('button#pause')
pause.addEventListener('click', () => pauseAll())

function pauseAll(){
  if(document.querySelector('button#heart').disabled === false){
    document.querySelector('button#heart').disabled = true
    document.querySelector('button#plus').disabled = true
    document.querySelector('button#minus').disabled = true
    clearInterval(test)
    pause.innerHTML = " resume "
  } else if(document.querySelector('button#heart').disabled === true){
    document.querySelector('button#heart').disabled = false
    document.querySelector('button#plus').disabled = false
    document.querySelector('button#minus').disabled = false
    setInterval(more, 1000)
    pause.innerHTML = " pause "
  }
}

let clicks = 0;
heart.addEventListener('click', () => {
  const li = document.createElement("li")
  heart.onclick = function(){
    clicks += 1;
  }
  li.textContent = `${count} got liked ${clicks} times`
  likes.append(li)
  clicks = 0
})

console.log(count)
function more(){
  document.querySelector("#counter").textContent = count++
}
/*
function add(){
  let up = count
  console.log(up)
  document.querySelector("#counter").textContent = up++
}
*/
function less(){
  count--
  document.querySelector("#counter").textContent = count
}

const list = document.querySelector('#list')

let comment = document.querySelector("#comment-form")
  comment.addEventListener('submit', (e)=> {
    e.preventDefault()
    const line = e.target.querySelector("input").value
    const li = document.createElement("li")
    li.innerHTML = line
    list.append(li)
  })