#mutation{
#    addStudent(name:"Gosho", specialty:"BIT", city: "Plovdiv"){
#      _id,
#      name,
#      specialty,
#      city
#    },
#    addUniversity(name: "Plovdivski Universitet", city: "Plovdiv"){
#      _id,
#      city
#  },
#    }
query {
  students {
    _id,
    name,
    specialty,
    city
  },
  universities {
    _id,
    name,
    city
  }
}
