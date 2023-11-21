import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Link href={`/dashboard/`}>
        <p className="goto">Go to dashboard...</p>
      </Link>
    </div>
  );
};

export default Page;
