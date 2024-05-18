//import { items } from "./pokemonList";
const items = require('./pokemonList')
// console.log(items)
function randomIntFromIntervalRegion(region) { // min and max included
    let [min, max] = getRange(region)
    // console.log(items.items[Math.floor(Math.random() * (max - min + 1) + min) - 1])
    return items.items[Math.floor(Math.random() * (max - min + 1) + min) - 1];
}

function getRange(region){
    switch (region) {
        case "Kanto":
            return [1,150]
        case "Johto":
            return [151,250]
        case "Hoenn":
            return [251,385]
        case "Sinnoh":
            return [386,493]
        default:
            return [1,150]
    }
}

// randomIntFromIntervalRegion('Kanto')

export default randomIntFromIntervalRegion;