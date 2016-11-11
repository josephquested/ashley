var articles = []

function bindEventListeners () {
  var headings = document.getElementsByClassName('intro__article')
  var keys = Object.keys(headings)
  keys.forEach((key) => {
    headings[key].addEventListener("click", headerClick)
    articles.push(headings[key].children[2])
  })
}

function headerClick (e) {
  hideAllArticles()
  e.path[1].children[2].classList.remove('hidden')
}

function hideAllArticles () {
  var keys = Object.keys(articles)
  keys.forEach((key) => {
    articles[key].classList.add('hidden')
  })
}

// init
bindEventListeners()
