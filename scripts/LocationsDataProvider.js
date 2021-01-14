const locationsCollection = [
    {
        city: "Queensland",
        country: "Autralia",
        waterBody: "Great Barrier Reef",
        image:"https://afar-production.imgix.net/uploads/images/afar_post_headers/images/3NkLajcdGy/original_shutterstock_1158634060_20copy.jpg?auto=compress,format&fit=crop&crop=top&lossless=true&w=1600&h=700"

    },
    {
        city: "Queensland",
        country: "Autralia",
        waterBody: "Great Barrier Reef",
        image:"https://afar-production.imgix.net/uploads/images/afar_post_headers/images/3NkLajcdGy/original_shutterstock_1158634060_20copy.jpg?auto=compress,format&fit=crop&crop=top&lossless=true&w=1600&h=700"

    }

]

export const useLocation = () => {
    return locationsCollection.slice()
}
