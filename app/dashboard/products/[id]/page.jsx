import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={product.img || "/noproduct.jpg"} alt="" fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <label htmlFor="">Title</label>
          <input type="text" name="title" placeholder={product.title} id="" />
          <label htmlFor="">Price</label>
          <input type="number" name="price" placeholder={product.price} id="" />
          <label htmlFor="">Stock</label>
          <input type="number" name="stock" placeholder={product.stock} id="" />
          <label htmlFor="">Color</label>
          <input type="text" name="color" placeholder={product.color} id="" />
          <label htmlFor="">Size</label>
          <input type="text" name="size" placeholder={product.size} id="" />
          <label htmlFor="">Category</label>
          <select name={product.cat} id="">
            <option selected={product.cat} value={"kitchen"}>
              Kitchen
            </option>
            <option selected={product.title} value={"computers"}>
              Computers
            </option>
          </select>
          <input type="text" name="id" hidden value={product.id} id="" />
          <textarea
            name="desc"
            id=""
            placeholder="Description"
            rows="16"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
