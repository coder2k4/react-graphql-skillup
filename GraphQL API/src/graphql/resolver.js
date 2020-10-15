const people = [
    {
        id: 1,
        name: "Alex",
        age: 33,
        city: "San Francisco"
    },
    {
        id: 2,
        name: "Serget",
        age: 31,
        city: "San Francisco"
    },
    {
        id: 3,
        name: "Maxim",
        age: 30,
        city: "San Francisco"
    },
]


export const resolver = {
    Query: {
        people: () => people
    }
}