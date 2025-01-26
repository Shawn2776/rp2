import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <button>
        <Link href="/users">Users</Link>
      </button>
    </div>
  );
}
