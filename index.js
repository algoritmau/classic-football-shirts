import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()
  const theMatrixMovies = await prisma.movies.findMany({
    where: { title: 'The Matrix' }
  })
  console.log(objectToString(theMatrixMovies))
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
