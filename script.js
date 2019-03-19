function Roll(){
  // dice 1

  var randomNumer1 = Math.floor(Math.random() * 6 + 1)

  var randomImage = `dice${randomNumer1}.png`

  var randomImageSource = randomImage

  var img1 = document.querySelectorAll('img')[0]

  img1.setAttribute('src', randomImageSource)

  // dice 2

  var randomNumer2 = Math.floor(Math.random() * 6 + 1)

  var randomImage = `dice${randomNumer2}.png`

  var randomImageSource = randomImage

  var img2 = document.querySelectorAll('img')[1]

  img2.setAttribute('src', randomImageSource)


  if(randomNumer1 > randomNumer2){
    document.querySelector('h1').innerHTML = 'Player 1 Wins !'
  }
  else if(randomNumer2 > randomNumer1){
    document.querySelector('h1').innerHTML = 'Player 2 Wins !'
  }
  else{
    document.querySelector('h1').innerHTML = "It's a Draw !"
  }

  document.querySelector('.btn').innerHTML = "Roll Again !"

}
