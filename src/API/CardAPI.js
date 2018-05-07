import AuthAPI from './AuthAPI'

class Card{
  constructor(){
    let card= [{ "cardNumber":"123456789","username":"user", "nameOnCard": "vikash gupta", "expiryMonth": "12","expiryYear":"2022"},
               { "cardNumber":"987654321","username":"user", "nameOnCard": "vikash gupta", "expiryMonth": "12","expiryYear":"2022"}
              ];

    if(!localStorage.getItem('DBCARD')){
      localStorage.setItem('DBCARD',JSON.stringify(card));
  }
}

getCard(){
    return  JSON.parse(localStorage.getItem('DBCARD'));
}

setCard(a){
    let u = this.getCard();
    u.push(a);
    localStorage.setItem('DBCARD',JSON.stringify(u))
}



getAll(){ return this.getCard().filter(x=>x.username===AuthAPI.GetLoggedInUser())}

get(cardNumber){ return this.getCard().filter(x=>x.cardNumber===cardNumber && x.username===AuthAPI.GetLoggedInUser())[0]}

add(card) {
  card.username = AuthAPI.GetLoggedInUser(); 
  this.setCard(card);
}

modify(card) {
  card.username = AuthAPI.GetLoggedInUser();
  let newCard = this.getCard();
  
  let index = this.getCard().findIndex(x=>x.cardNumber===card.cardNumber && x.username===AuthAPI.GetLoggedInUser())
  if(index >= 0){
    newCard[index] = card;
  }

  //Save the card
  localStorage.setItem('DBCARD',JSON.stringify(newCard));
}

delete(card) {
  let newCard = this.getCard().filter(x=>x.cardNumber !== card.cardNumber);

  //Save the card
  localStorage.setItem('DBCARD',JSON.stringify(newCard));

  }
}

const CardAPI = new Card();
export default CardAPI