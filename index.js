// Code your solution here
const drivers = ["Richie", "Jane", "Mary",]
                ["Brian", "Sammy", "Oti"  ]


//returns all drivers that match  the passed in name
const findMatching =(p,q) => p.filter(p => p.toLowerCase() === q.toLowerCase())

//returns a driver if beginning provided letters match
const fuzzyMatch = (p,q) => p.filter(p => p.charAt(0) === q.charAt(0))

//acces the data structure to check if the name match
const matchName = (p, q) => p.filter(p => p.name === q)
