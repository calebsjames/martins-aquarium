//FishList which renders individual fish objects as HTML

import { Fish } from './Fish.js'
import { mostHolyFish, killerFish, nonHolyFish } from './FishDataProvider.js'


export const FishList = () => {

    // Get a reference to the HTML element you want the HTML inserted into
    const contentElement = document.querySelector(".containerLeft__fishList")
    // const fishes = useFish()
    const holyFish = mostHolyFish()
    const soldiers = killerFish()
    const normalFish = nonHolyFish()
    

    let holyFishHTMLRepresentation = "<h3>Holy Fish</h3>"
    for (const fish of holyFish) {
        holyFishHTMLRepresentation += Fish(fish)
    }

    let soldierFishHTMLRepresentation = "<h3>Soldier Fish</h3>"
    for (const fish of soldiers) {
        soldierFishHTMLRepresentation += Fish(fish)
    }

    let regularFishHTMLRepresentation = "<h3>Regular Fish</h3>"
    for (const fish of normalFish) {
        regularFishHTMLRepresentation += Fish(fish)
    }
    // console.log(regularFishHTMLRepresentation)
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fishList">

            <div class="cardContainer">
                <div class="holyCard">
                    ${holyFishHTMLRepresentation}
                </div>
            </div>
            <div class="cardContainer">
                <div class="soldierCard">
                ${soldierFishHTMLRepresentation}
                </div>
            </div>    
            <div class="cardContainer">
                <div class="regularCard">
                ${regularFishHTMLRepresentation}
                </div>
            </div>
        </article>
    `
}





// const buildFishListHTML = (arrayOfFish, heading) => {
//     let fishHTMLRepresentaion = `<h3>${heading}</h3>`
//     for (const fishObj of arrayOfFish) {
//         fishHTMLRepresentation +=fish(fishObj)
//     }
//     return fishHTMLRepresentation
// }