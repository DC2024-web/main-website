import Link from "next/link";
import React from "react";
import styles from "./ProductCard.module.css"

interface Props {
  title: string;
  img: string;
  // price: string;
  link: string;
}
const ProductCard = (props: Props) => {
  const data = props;

  return (
    <>
      <Link href={`${data.link}`} className="no-under-line">
        <div className={styles.productcardsContainer}>
          <p className="text-white text-center font-bold">{data.title}</p>
          <img
            src={
              data.img
                ? data.img
                : "/images/image-placeholder-black.png"
            }
            className="img-fluid rounded"
          />
          {/* <p className="text-black my-2 font-bold text-center text-lg bg-white rounded">{data.price}</p> */}
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
