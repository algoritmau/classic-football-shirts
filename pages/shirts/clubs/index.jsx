import { PrismaClient } from "@prisma/client"
import ShirtCard from "../../../components/ShirtCard"
import ShirtCardsGrid from "../../../components/ShirtCardsGrid"

const ClubShirtsPage = ({ shirts }) => (
  <main className="main">
    <h1 className="main__title">Club Shirts</h1>
    <p className="main__subtitle">
      Find that classic shirt of your
      {" "}
      <em>beloved</em>
      {" "}
      football club.
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

export default ClubShirtsPage

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const shirts = await prisma.shirts.findMany({
    where: {
      is_club_kit: true
    }
  })

  return {
    props: { shirts }
  }
}
