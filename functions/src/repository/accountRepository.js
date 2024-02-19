import prisma from "../db/database";
// import {Prisma} from "@prisma/client"

const collection = prisma.account;

export async function list() {
    return collection.findMany();
}
