export const Location = (location) => {
    return `
        <section class="locationCard">
            <div class="locationCard__city"><b>City: </b>${location.city}</div>
            <div class="locationCard__country"><b>Country: </b>${location.country}</div>
            <div class="locationCard__waterBody"><b>Body of Water: </b>${location.waterBody}</div>
            <div><img class="locationCard__img" src="${location.image}" /></div>
        </section>
    `
}