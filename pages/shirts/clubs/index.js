import { PrismaClient } from '@prisma/client'

export default function Clubs({ shirts }) {
  return (
    <div>
      <h1>Club Shirts</h1>
      <ul>
        {shirts.map(shirt => (
          <li key={shirt.id}>
            <img src={shirt.image} alt={shirt.name} />
            <h2>{shirt.name}</h2>
            <p>{shirt.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const shirts = await prisma.shirts.findMany()

  return {
    props: { shirts }
  }
}
