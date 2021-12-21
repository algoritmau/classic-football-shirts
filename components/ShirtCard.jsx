import ShirtCardStyles from "../styles/components/ShirtCard.module.sass"

const ShirtCard = ({ title, price, imageUrl }) => (
  <div className={ShirtCardStyles.shirtCard}>
    <figure className={ShirtCardStyles.shirtCard__figure}>
      <img
        className={ShirtCardStyles.shirtCard__image}
        src={imageUrl}
        alt={title}
      />
    </figure>
    <h2 className={ShirtCardStyles.shirtCard__title}>{title}</h2>
    <p className={ShirtCardStyles.shirtCard__price}>
      <span className={ShirtCardStyles.shirtCard__price__symbol}>$</span>
      {price}
    </p>
  </div>
)

export default ShirtCard
