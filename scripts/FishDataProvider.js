const fishCollection = [
    {
        name: "Nemo",
        species: "Clown Fish",
        location: "Great Barrier Reef",
        food: "Yes, you can eat Nemo",
        length: "3 inches",
        image:"https://mission-blue.org/wp-content/uploads/2013/04/image2.jpeg"

    },
    {
        name: "Omen",
        species: "Sad Clown Fish",
        location: "Great Barrier Reef in 50 years",
        food: "You cannot eat Omen",
        length: "4 inches",
        image:"https://www.browndeerwi.org/wp-content/uploads/2016/08/Sad-fish-face.jpg"

    },
    {
        name: "Ares",
        species: "God of War Fish",
        location: "Olympus",
        food: "You cannot eat Ares",
        length: "5 inches",
        image:"https://fishingbooker.com/blog/media/Anglerfish-1-e1540224525672.jpg"

    },
    {
        name: "Rupert",
        species: "Polar Bear",
        location: "Arctic Circle",
        food: "You",
        length: "105 inches",
        image:"https://media.gettyimages.com/photos/polar-bear-nunavut-canada-picture-id534981978?k=6&m=534981978&s=612x612&w=0&h=skCjjFpA3qdmTJwVATHW_8w46e4Dw2rtEssTT66VvOQ="
    },

]
//exports entire fish collection as object
export const useFish = () => {
    return fishCollection.slice()
}

//export fish whose length is divisable by 3
export const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            if (holyFish.length === 0) {
                holyFish += fish.name
            } else {
                holyFish += ", " + fish.name
            }
        }
    }
    return holyFish
}

//export fish whose length is divisable by 5
export const killerFish = () => {
    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0) {
            if (soldiers.length === 0) {
                soldiers += fish.name
            } else {
                soldiers += ", " + fish.name
            }
        }
    }
    return soldiers
}

//export fish whose length is divisable by 3
export const soldierFish = () => {
    const normalFish = []
    
    for (const fish of fishCollection) {
        if (fish.length % 5 != 0 && fish.length % 3 !=0) {
        normalFish += fish.name
        }
    }
        return normalFish
}