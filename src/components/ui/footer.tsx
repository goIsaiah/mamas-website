import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between w-full bg-white mt-10 min-h-20 p-5">
      <div>
        <p className="text-xl font-bold">
          Isaiah Gocool
        </p>
        <p>&copy; 2025</p>
      </div>
      <div>
        <ul>
          <li>
            <Link className="font-bold hover:underline" href="/">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
