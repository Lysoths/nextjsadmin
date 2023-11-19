import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <Link className="link" href="/dashboard">
        Click Me
      </Link>
    </div>
  );
};

export default HomePage;
