/**
 *  QuoteList which renders individual quote objects as HTML
 */

import { useQuote } from './QuotesDataProvider.js'
import { Quote } from './Quotes.js'

export const QuoteList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".contentContainer__travelQuotes")
    const quotes = useQuote()

    let quoteHTMLRepresentations = ""
    for (const quote of quotes) {
        quoteHTMLRepresentations += Quote(quote)

    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="quoteCards">
        ${quoteHTMLRepresentations}
        </article>
    `
}
