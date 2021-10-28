import { PrismaClient } from '@prisma/client'

export default function NewIn({ newInShirts }) {
  return (
    <div>
      <h1>Club Shirts</h1>
      <ul>
        {newInShirts.map(newInShirt => (
          <li key={newInShirt.id}>
            <img src={newInShirt.image} alt={newInShirt.name} />
            <h2>{newInShirt.name}</h2>
            <p>{newInShirt.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const newInShirts = await prisma.shirts.findMany({
    where: {
      is_new_in: true
    }
  })

  return {
    props: { newInShirts }
  }
}
