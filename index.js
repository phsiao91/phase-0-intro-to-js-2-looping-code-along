const gifts = ["teddy bear" , "drone" , "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(friends, event) {
    let message = [];
    for (let n = 0; n < friends.length; n++) {
        message.push (`Thank you, ${friends[n]}, for the wonderful surprise gift!`);
    }
    return message
}

function countDown(positiveNumber) {
    while (positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber --;
    }
}