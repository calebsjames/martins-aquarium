const fishCollection = [
    {
        name: "Nemo",
        species: "Clown Fish",
        Location: "Great Barrier Reef",
        food: "Yes, you can eat Nemo",
        length: "3 inches",

    }
]

export const useFish = () => {
    return fishCollection.slice()
}

console.log(fishCollection)