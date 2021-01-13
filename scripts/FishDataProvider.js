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
        name: "Nemo",
        species: "Clown Fish",
        location: "Great Barrier Reef",
        food: "Yes, you can eat Nemo",
        length: "3 inches",
        image:"https://mission-blue.org/wp-content/uploads/2013/04/image2.jpeg"

    },
    {
        name: "Nemo",
        species: "Clown Fish",
        location: "Great Barrier Reef",
        food: "Yes, you can eat Nemo",
        length: "3 inches",
        image:"https://mission-blue.org/wp-content/uploads/2013/04/image2.jpeg"

    },
    {
        name: "Rupert",
        species: "Polar Bear",
        location: "Arctic Circle",
        food: "You",
        length: "8 feet",
        image:"https://media.gettyimages.com/photos/polar-bear-nunavut-canada-picture-id534981978?k=6&m=534981978&s=612x612&w=0&h=skCjjFpA3qdmTJwVATHW_8w46e4Dw2rtEssTT66VvOQ="
    },

]

export const useFish = () => {
    return fishCollection.slice()
}

console.log(fishCollection)