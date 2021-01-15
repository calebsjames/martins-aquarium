// Individual quote objects as HTML

export const Tip = (tip) => {
    return `
    <h2>${tip.subject}</h2>
        <section class="tipCard">
            <div class="tipCard__text"><b>${tip.text}</b></div>
        </section>
    `
}
