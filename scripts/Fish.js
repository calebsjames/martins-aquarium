// Individual fish objects as HTML

export const Fish = (fish) => {
    return `
        <section class="fishCard">
            <div><img class="fishCard__img" src="${fish.image}" /></div>
            <div class="fishCard__name"><b>Name: </b>${fish.name}</div>
            <div class="fishCard__species"><b>Species: </b>${fish.species}</div>
            <div class="fishCard__length"><b>Length: </b>${fish.length}</div>
            <div class="fishCard__location"><b>Location: </b>${fish.location}</div>
            <div class="fishCard__food"><b>Food: </b>${fish.food}</div>
        </section>
    `
}