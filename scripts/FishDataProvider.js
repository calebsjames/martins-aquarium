const fishCollection = [
    {
        name: "Nemo",
        species: "Clown Fish",
        location: "Great Barrier Reef",
        food: "Yes, you can eat Nemo",
        length: 3,
        image:"https://mission-blue.org/wp-content/uploads/2013/04/image2.jpeg"

    },
    {
        name: "Omen",
        species: "Sad Clown Fish",
        location: "Great Barrier Reef in 50 years",
        food: "You cannot eat Omen",
        length: 4,
        image:"https://www.browndeerwi.org/wp-content/uploads/2016/08/Sad-fish-face.jpg"

    },
    {
        name: "Ares",
        species: "God of War Fish",
        location: "Olympus",
        food: "You cannot eat Ares",
        length: 5,
        image:"https://fishingbooker.com/blog/media/Anglerfish-1-e1540224525672.jpg"

    },
    {
        name: "Rupert",
        species: "Polar Bear",
        location: "Arctic Circle",
        food: "You",
        length: 105,
        image:"https://media.gettyimages.com/photos/polar-bear-nunavut-canada-picture-id534981978?k=6&m=534981978&s=612x612&w=0&h=skCjjFpA3qdmTJwVATHW_8w46e4Dw2rtEssTT66VvOQ="
    },

]
//exports entire fish collection as object
export const useFish = () => {
    return fishCollection.slice()
}

//export fish whose length eis divisable by 3

export const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish
}

//export fish whose length is divisable by 5
export const killerFish = () => {
    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0) {
                soldiers.push(fish)
        }
    }
    return soldiers
}


//export fish whose length is not divisable by 3 or 5
export const nonHolyFish = () => {
    const normalFish = []
    
    for (const fish of fishCollection) {
        if (fish.length % 5 !==0 && fish.length % 3 !==0) {
        normalFish.push(fish)
        }
    }
    return normalFish
}