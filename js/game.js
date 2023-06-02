const grid = document.querySelector('.grid')


const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',    
]

const createElement =(tag, className)=>{

    const element = document.createElement(tag)
    element.className = className
    return element

}

const createCard = (character) =>{
    const card =createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../images/${character}.png')`

    //card.className = 'card'
   // front.className = 'face front'
   //back.className = 'face back'

    card.appendChild(front)
    card.appendChild(back)

   // grid.appendChild(card)
   return card
}
//createCard()

const loadGame = () =>{

    const duplicateCharacters = []

    characters.forEach((character)=>{
        
        const card = createCard(character);
        grid.appendChild(card)
        
       
    })

    
    //console.log(characters)
}

loadGame()