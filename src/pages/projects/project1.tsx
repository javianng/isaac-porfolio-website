import Link from "next/link";
import Image from "next/image";

export default function Project1() {
  return (
    <div>
      {/* navbar */}

      <div className="navbar mb-8 bg-brand-200 px-12 text-white">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">back </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* header */}

      <h1 className="px-14 pb-8 text-7xl font-bold">project 1</h1>

      {/* body */}

      <div className="flex flex-col gap-4 px-14 pb-8">
        <Image src="" alt="" className=" min-h-32 w-full bg-slate-200" />

        <Link href="/">
          <div className="btn btn-ghost border-brand-100 bg-brand-300 text-white hover:bg-brand-200">
            view project
          </div>
        </Link>
        <p>
          Reprehenderit ut pariatur sunt consequat et. Pariatur sunt consequat
          et deserunt. Consequat et deserunt do dolor. Deserunt, do dolor culpa
          elit mollit adipiscing eu. Culpa elit mollit adipiscing eu culpa.
          Mollit adipiscing, eu culpa. Culpa proident labore do do. Labore do do
          non fugiat. Do non, fugiat aute.
        </p>
      </div>
    </div>
  );
}
