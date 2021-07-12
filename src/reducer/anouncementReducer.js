const initState= [
    {
        id: 1,
        url: "anouncement1.jpg"
    },
    {
        id: 2,
        url: "anouncement2.jpg"
    },
    {
        id: 3,
        url: "anouncement3.jpg"
    }
]

const anouncementReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default anouncementReducer;