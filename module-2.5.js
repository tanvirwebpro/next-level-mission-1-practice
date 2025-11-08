const cartItems = [
    {id:"p-001" , name: "daraz laptop bag",price:1500, quantity:1},
    {id:"p-002" , name: "walton USB-c cable",price:600, quantity:3},
    {id:"p-003" , name: "aarong kutta",price:2000, quantity:1}
]

const subTotal = cartItems.reduce((subTotal ,item)=>{
    return subTotal + (item.price * item.quantity);
},0)

// console.log(subTotal)

// find best scorer

const players = [
    {name:"tanvir" , score:50},
    {name:"shahadat" , score:80},
    {name:"samiul" , score:60},
]

const bestScorer = players.reduce((bestplayer,play)=>{
    if(bestplayer.score > play.score) {
        return bestplayer;
    }
    return play.name;
},players[0])

console.log(bestScorer)