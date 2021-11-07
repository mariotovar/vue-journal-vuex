

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime,
            date: new Date().toDateString(),
            text: "xxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy zzzzzzzzzzzzzzzzz",
            picture: null
        },
        {
            id: new Date().getTime + 1000,
            date: new Date().toDateString(),
            text: "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy zzzzzzzzzzzzzzzzz xxxxxxxxxxxxxxxxxx",
            picture: null
        },
        {
            id: new Date().getTime + 2000,
            date: new Date().toDateString(),
            text: "xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx",
            picture: null
        },
    ]
})
