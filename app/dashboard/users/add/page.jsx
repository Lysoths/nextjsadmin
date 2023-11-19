import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUsersPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          id=""
        />
        <input type="email" placeholder="Email" name="email" required id="" />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          id=""
        />
        <input type="phone" placeholder="Phone" name="phone" id="" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="adress"
          id="adress"
          rows="16"
          placeholder="Adress"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUsersPage;
