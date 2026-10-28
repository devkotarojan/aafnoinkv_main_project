import { Prisma } from "../../src/generated/prisma/client"

export const AllUserData: Prisma.UserCreateInput[] = [
  {
    email: "amiacharger@gmail.com",
    fullName: "Rojan Devkota",
    hashedPassword: "lskjhdflkiuojksdflkjsdlfoewutljdslfjosidfj",
    role: "ADMIN",
    address: {
      create: {
        fullName: "Rojan Devkota", 
        phone: "90283459387493",
        city: "kathmandu",
        landmark: "greencity",
        description : "behind greencity",
      }
    }
  },
  {
    email: "angesh@gmail.com",
    fullName: "Angesh Sharma",
    hashedPassword: "lskjhdjksdflkjsdlfoewutljdslfjosidfj",
    role: "USER",
    address: {
      create: {
        fullName: "Angesh Sharma", 
        phone: "902834343459387",
        city: "kathmandu",
        landmark: "chauki",
        description : "behind chauki ",
      }
    }
  },
  {
    email: "roshani@gmail.com",
    fullName: "Roshani Devkota",
    hashedPassword: "lskdjflskjdflskjdoliguslkdjdfsjkl",
    role: "USER",
    address: {
      create: {
        fullName: "Roshani Devkota", 
        phone: "39749347",
        city: "kathmandu",
        landmark: "jhor",
        description : "tokha jhor ",
      }
    }
  },
  {
    email: "simran@gmail.com",
    fullName: "Simran Devkota",
    hashedPassword: "sldkjfoiewulsdjlkfjsodiulksdjlfkjsldkj",
    role: "USER",
    address: {
      create: {
        fullName: "Simran Devkota", 
        phone: "90384584303084",
        city: "kathmandu",
        landmark: "tokha",
        description : "tokha road",
      }
    }
  }
]