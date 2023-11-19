import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.username}
            id=""
          />
          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder={user.email} id="" />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="***********"
            id=""
          />
          <label htmlFor="">Phone</label>
          <input type="phone" name="phone" placeholder={user.phone} id="" />
          <label htmlFor="">Address</label>
          <textarea type="text" name="adress" placeholder={user.adress} id="" />
          <label htmlFor="">is Admin?</label>
          <select name="isAdmin" id="">
            <option selected={user.isAdmin === true} value={true}>
              Yes
            </option>
            <option selected={user.isAdmin === false} value={false}>
              No
            </option>
          </select>
          <label htmlFor="">is Active?</label>
          <select name="isActive" id="">
            <option selected={user.isActive === true} value={true}>
              Yes
            </option>
            <option selected={user.isActive === false} value={false}>
              No
            </option>
          </select>
          <input type="text" name="id" hidden value={user.id} id="" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
