import { Prisma } from "../../src/generated/prisma/client";
import { randomUUID } from "node:crypto";

export const AllUserData: Prisma.UserCreateInput[] = [
  {
    id: randomUUID(),
    email: "amiacharger@gmail.com",
    name: "Rojan Devkota",
    emailVerified: true,
    role: "ADMIN",
    image: null,
    address: {
      create: {
        fullName: "Rojan Devkota",
        phone: "90283459387493",
        city: "kathmandu",
        landmark: "greencity",
        description: "behind greencity",
      },
    },
  },
  {
    id: randomUUID(),
    email: "angesh@gmail.com",
    name: "Angesh Sharma",
    emailVerified: true,
    role: "USER",
    image: null,
    address: {
      create: {
        fullName: "Angesh Sharma",
        phone: "902834343459387",
        city: "kathmandu",
        landmark: "chauki",
        description: "behind chauki",
      },
    },
  },
  {
    id: randomUUID(),
    email: "roshani@gmail.com",
    name: "Roshani Devkota",
    emailVerified: true,
    role: "USER",
    image: null,
    address: {
      create: {
        fullName: "Roshani Devkota",
        phone: "39749347",
        city: "kathmandu",
        landmark: "jhor",
        description: "tokha jhor",
      },
    },
  },
  {
    id: randomUUID(),
    email: "simran@gmail.com",
    name: "Simran Devkota",
    emailVerified: true,
    role: "USER",
    image: null,
    address: {
      create: {
        fullName: "Simran Devkota",
        phone: "90384584303084",
        city: "kathmandu",
        landmark: "tokha",
        description: "tokha road",
      },
    },
  },
];
