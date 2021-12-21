import { PrismaClient } from "@prisma/client"
import ShirtCard from "../components/ShirtCard"
import ShirtCardsGrid from "../components/ShirtCardsGrid"

export default function NewInShirts({ shirts }) {
  console.log(shirts)

  return (
    <main className="main">
      <h1 className="main__title">National Teams&apos; Shirts</h1>
      <p className="main__subtitle">
        Find that classic shirt of your favorite national team.
      </p>
      <ShirtCardsGrid>
        {shirts.map((shirt) => (
          <ShirtCard
            key={shirt.id}
            title={shirt.name}
            price={shirt.price}
            imageUrl={shirt.imageUrls[0].url}
          />
        ))}
      </ShirtCardsGrid>
    </main>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const shirts = await prisma.shirts.findMany({
    where: {
      is_new_in: true
    }
  })

  return {
    props: { shirts }
  }
}
