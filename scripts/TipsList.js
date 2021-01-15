/**
 *  TipList which renders individual tip objects as HTML
 */

import { useTip } from './TipDataProvider.js'
import { Tip } from './Tip.js'

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerRight")
    const tips = useTip()

    let tipHTMLRepresentations = ""
    for (const tip of tips) {
        tipHTMLRepresentations += Tip(tip)

    }

console.log(tipHTMLRepresentations)

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="tipList">
        ${tipHTMLRepresentations}
        </article>
    `
}
