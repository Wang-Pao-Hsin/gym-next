"use client"
import styles from "./_styles/ProductCard.module.css";
import { IMG_PATH } from "@/config/api-path";
import Link from "next/link";
import FavoriteButton from "./favorite-button";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";


const ProductCard = ({ id, product_name, price, description, image_url, variant, like_id, setIsLiked, average_rating  }) => {
  const cardClass = variant === "light" ? styles.cardLight : styles.cardDark;

  const renderStars = (rating) => {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} color="#f87808" size={20} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt  key={i} color="#f87808" size={20} />);
      } else {
        stars.push(<FaRegStar key={i} color="#f87808" size={20} />);
      }
    }

    return stars;
  };

  return (
    <Link href={`/products/${id}`} className={`${styles.card} ${cardClass}`}>
      <article className={`${styles.card} ${cardClass}`}>
        <div className={styles.imageContainer}>
          <img src={`${IMG_PATH}/${image_url}`} alt={product_name} className={styles.productImage} />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>{product_name}</h2>
            <p className={styles.price}>{`${price}元/天`}</p>
          </div>
          <hr className={styles.divider} />
          <p className={styles.description}>{description}</p>
          

          <div className={styles.btns}>
          <div className={styles.rating}>
            {average_rating !== null ? (
              <>
                {renderStars(average_rating)}
                {<span className={styles.reviewCount}>({average_rating})</span>}
              </>
            ) : (
              <span className={styles.noReviews}>尚無評價</span>
            )}
          </div>
            {/* <AddToCartButton variant={variant} /> */}
      <FavoriteButton product_id={id} like_id={like_id} setIsLiked={setIsLiked}/>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
