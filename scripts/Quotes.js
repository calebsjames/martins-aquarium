// Individual quote objects as HTML

export const Quote = (quote) => {
    return `
        <section class="quoteCard">
            <div class="quoteCard__quote"><b>${quote.quote}</b></div>
            <div class="quoteCard__author">-${quote.author}</div>
            <div class="quoteCard__date">${quote.date}</div>
            <div class="quoteCard__location">${quote.location}</div>
        </section>
    `
}

console.log(Quote)