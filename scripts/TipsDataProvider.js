const tipsCollection = [
    {
        subject: "How not to kill your fish",
        text: "Don't sit on it."
    },
    {
        subject: "How not to kill your fish",
        text: "Don't electricute it"  
    },
]

export const useTips = () => {
    return tipsCollection.slice()
}
