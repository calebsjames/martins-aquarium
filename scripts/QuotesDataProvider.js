const quotesCollection = [
    {
        quote: "Many men go fishing all of their lives without knowing that it is not fish they are after",
        author: "Henery David Thoreau",
        date: "1847",
        location: "Somewhere"
    },
    {
        quote: "There is a fine line between fishing and just standing on the shore like an idiot",
        author: "Steven Wright",
        date: "1985",
        location: "Someplace"
    },
    {
        quote: "There's a Polar Bear In our Frigidaire-- He likes it 'cause it's cold in there. With his seat in the meat And his face in the fish And his big hairy paws In the buttery dish, He's nibbling the noodles, And munching the rice, He's slurping the soda, He's licking the ice. And he lets out a roar If you open the door. And it gives me a scare To know he's in there-- That Polary Bear In our Fridgitydaire.",
        author: "Shel Silverstein",
        date: "1981",
        location: "The Attic"
    },
    

]

export const useQuote = () => {
    return quotesCollection.slice()
}

console.log(quotesCollection)