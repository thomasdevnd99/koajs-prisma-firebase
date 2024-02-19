import {PrismaClient} from "@prisma/client"
import appConfig from "../config/app"

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: appConfig.dbUrl
        },
    },
})

export default prisma
