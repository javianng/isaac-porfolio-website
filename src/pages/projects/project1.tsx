export default function Project1() {
  return (
    <div>
      {/* navbar */}

      <div className="navbar bg-brand-200 mb-8 px-12 text-white">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">back</a>
            </li>
          </ul>
        </div>
      </div>

      {/* header */}

      <h1 className="px-14 pb-8 text-7xl font-bold">project 1</h1>

      {/* body */}

      <div className="flex flex-col gap-4 px-14 pb-8">
        <img src="" alt="" className=" min-h-32 w-full bg-slate-200" />

        <a href="/">
          <div className="btn btn-ghost bg-brand-300 hover:bg-brand-200 border-brand-100 text-white">
            view project
          </div>
        </a>
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
