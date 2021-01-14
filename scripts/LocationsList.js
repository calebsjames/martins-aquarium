/**
 *  LocationList which renders individual fish objects as HTML
 */

import { useLocation } from './LocationsDataProvider.js'
import { Location } from './Locations.js'

export const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".contentContainer__travelLocation")
    const locations = useLocation()

    let locationHTMLRepresentations = ""
    for (const location of locations) {
        locationHTMLRepresentations += Location(location)

    }

console.log(locationHTMLRepresentations)

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <div class="locationCards">
        ${locationHTMLRepresentations}
        </div>
    `
}
