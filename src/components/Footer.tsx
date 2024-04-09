import { DocumentIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";

export default function footer() {
  return (
    <footer className="footer bg-brand-200 p-10 text-white">
      <aside>
        <p>
          Isaac Chin
          <br />
          Data Scientist
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <div className="flex gap-2">
            <a
              className="flex h-[3.1rem] w-[3.1rem] items-center justify-center rounded-full bg-neutral-400"
              href="/cv.pdf"
            >
              <DocumentIcon className="h-8 w-8 text-white" />
            </a>
            <SocialIcon url="https://github.com/isaacchin12" />
            <SocialIcon url="https://www.linkedin.com/in/isaacchin12/" />
            <SocialIcon url="mailto:isaacchin12@gmail.com" />
          </div>
        </div>
      </nav>
    </footer>
  );
}
