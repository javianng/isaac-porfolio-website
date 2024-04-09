import PageLayout from "~/components/PageLayout";
import * as React from "react";
import { SocialIcon } from "react-social-icons";
import { DocumentIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

export default function Home() {
  return (
    <PageLayout>
      {/*  hero section */}

      <div className="hero mb-8 min-h-fit bg-brand-300 px-14 py-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/profilephoto.png"
            alt=""
            width={300}
            height={300}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-7xl font-bold text-white">
              Hello, I&apos;m <br />
              Isaac Chin.
            </h1>
            <p className="text-white">
              I’m a sophomore in the National University of Singapore pursuing a
              major in Data Science & Analytics.
            </p>
            <p className="my-2 border-l-2 pl-2 text-white">
              With experience in Data manipulation and Analytics, I am looking
              for a 6-month technical internship in Paris from 19th August 2024
              to 10th January 2025!
            </p>
            <div className="flex gap-2 pt-4">
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
        </div>
      </div>

      {/* skill section */}
      <h1 className="px-14 pb-8 text-7xl font-bold" id="skill">
        Skills
      </h1>

      <div className="flex flex-col gap-4 px-14 pb-8">
        <div className="flex w-full flex-row items-center justify-between rounded-lg border-2 border-brand-300 p-9 duration-200 hover:bg-brand-100">
          <p>Python</p>
          <img
            src="/python.svg"
            alt=""
            className="h-5 w-5"
            width={100}
            height={100}
          />
        </div>
        <div className="flex w-full flex-row items-center justify-between rounded-lg border-2 border-brand-300 p-9 duration-200 hover:bg-brand-100">
          <p>Java</p>
          <img
            src="/java.svg"
            alt=""
            className="h-5 w-5"
            width={100}
            height={100}
          />
        </div>
        <div className="flex w-full flex-row items-center justify-between rounded-lg border-2 border-brand-300 p-9 duration-200 hover:bg-brand-100">
          <p>Bloomberg Terminal</p>
          <img
            src="/bloombergterminal.jpg"
            alt=""
            className="h-5 w-5"
            width={100}
            height={100}
          />
        </div>
        <div className="flex w-full flex-row items-center justify-between rounded-lg border-2 border-brand-300 p-9 duration-200 hover:bg-brand-100">
          <p>Microsoft Excel</p>
          <img
            src="/excel.png"
            alt=""
            className="h-5 w-5"
            width={100}
            height={100}
          />
        </div>
        <div className="flex w-full flex-row items-center justify-between rounded-lg border-2 border-brand-300 p-9 duration-200 hover:bg-brand-100">
          <p>Adobe Premiere Pro</p>
          <img
            src="/premierepro.png"
            alt=""
            className="h-5 w-5"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* project section */}

      <h1 className="px-14 pb-8 text-7xl font-bold" id="projects">
        Projects
      </h1>

      <div className="flex items-center">
        <div className="grid grid-cols-1 gap-4 px-14  pb-8 sm:grid-cols-3">
          {/* project card */}
          <div className="card card-compact max-w-md bg-base-100 shadow-xl">
            <figure>
              <img src="/datathon.png" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title h-14">NUS Datathon 2024: Singlife</h2>
              <p className=" line-clamp-2">
                The project aimed to enhance the customer experience in the
                insurance acquisition process by analyzing Singlife&apos;s
                dataset. The team cleaned the dataset and used a decision tree
                to predict customer churn.
              </p>
              <div className="card-actions justify-end">
                <Link href="/projects/project1">
                  <button className="btn btn-ghost border-brand-100 bg-brand-200 text-white">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* project card */}
          <div className="card card-compact max-w-md bg-base-100 shadow-xl">
            <figure>
              <img src="/fintech.jpeg" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title h-14">
                NUS Fintech Month Hackathon 2023
              </h2>
              <p className=" line-clamp-2">
                The project aimed to reduce customer churn in a telco service by
                creating a logistic regression model. More information can be
                found in the Devpost submission and project documentation linked
                below.
              </p>
              <div className="card-actions justify-end">
                <Link href="/projects/project1">
                  <button className="btn btn-ghost border-brand-100 bg-brand-200 text-white">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* project card */}
          <div className="card card-compact max-w-md bg-base-100 shadow-xl">
            <figure>
              <img src="/shopee.jpg" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title h-14">
                NUS Fintech Month Hackathon 2023
              </h2>
              <p className=" line-clamp-2">
                The project aimed to reduce customer churn in a telco service by
                creating a logistic regression model. More information can be
                found in the Devpost submission and project documentation linked
                below.
              </p>
              <div className="card-actions justify-end">
                <Link href="/projects/project1">
                  <button className="btn btn-ghost border-brand-100 bg-brand-200 text-white">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* project card */}
          <div className="card card-compact max-w-md bg-base-100 shadow-xl">
            <figure>
              <img src="/sozo.png" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title h-14">SOZO Customer Interest Survey</h2>
              <p className=" line-clamp-2">
                Generated a survey that gathered what latest shows and artists
                customers of the company were interested in.
              </p>
              <div className="card-actions justify-end">
                <Link href="/projects/project1">
                  <button className="btn btn-ghost border-brand-100 bg-brand-200 text-white">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* skill section */}
      <h1 className="px-14 pb-8 text-7xl font-bold" id="workexperience">
        Work Experience
      </h1>

      <div className="flex flex-col gap-4 px-14 pb-8">
        <div className="flex w-full flex-row items-center justify-between rounded-lg border-2 border-brand-300 p-9 duration-200 hover:bg-brand-100">
          <div>
            <p className="text-xl font-bold">Data Analyst Intern @ MAS</p>
            <a
              className="py-2 underline"
              href="https://drive.google.com/file/d/1JbQpy6JCrBY_yLTOY2Wx5G4Wsyy6nV2a/view?usp=drive_link"
            >
              https://drive.google.com/file/d/1JbQpy6JCrBY_yLTOY2Wx5G4Wsyy6nV2a/view?usp=drive_link
            </a>
            <p className="pb-2 pt-4 font-bold">Experiences</p>
            <ul className="list-inside list-disc">
              <li>
                Examined fund data to develop prediction models using linear
                regression, feature selection, and train-test splitting
                techniques. Feature engineering for variables such as
                Information ratio, Sortino ratio, market capture, and batting
                average for enhanced accuracy.
              </li>
              <li>
                Explored time series analysis methods such as ARIMA and SARIMAX
                to analyse past values and identify potential patterns.
              </li>
              <li>
                Applied visualization techniques to analyse factor correlations
                and behaviors of mandates over time, utilizing MSCI factors and
                beta analysis.
              </li>
            </ul>
          </div>
          <img src="/mas.png" alt="" className="h-full w-1/3" />
        </div>

        <div className="flex w-full flex-row items-center justify-between rounded-lg border-2 border-brand-300 p-9 duration-200 hover:bg-brand-100">
          <div>
            <p className="text-xl font-bold">
              Analyst Intern @ Fuchs Capital Partners
            </p>
            <a
              className="py-2 underline"
              href="https://drive.google.com/file/d/1UmNmKPNujJ_A6l-dThmIwHyiEzNNeVFs/view?usp=drive_link"
            >
              https://drive.google.com/file/d/1UmNmKPNujJ_A6l-dThmIwHyiEzNNeVFs/view?usp=drive_link
            </a>
            <p className="pb-2 pt-4 font-bold">Experiences</p>
            <ul className="list-inside list-disc">
              <li>
                Carried out data manipulation, time series analysis and projects
                that require reading multiple spreadsheets in Python.
              </li>
              <li>
                Built analytical projects with common Python packages such as
                pandas, NumPy, SciPy, plotly and bql.
              </li>
              <li>
                Completed training and used Bloomberg Terminal and BQuant daily.
              </li>
              <li>
                Worked with analysts on different projects in new areas for the
                firm, such as: process driven quantitative analysis of
                fundamental data and data visualisation of stock
                sector/subsector historic performance.
              </li>
            </ul>
          </div>
          <img src="FCP.png" alt="" className="h-full w-1/3" />
        </div>

        <div className="flex w-full flex-row items-center justify-between rounded-lg border-2 border-brand-300 p-9 duration-200 hover:bg-brand-100">
          <div>
            <p className="text-xl font-bold">
              43rd JCRC Director of Media @ Sheares Hall
            </p>
            <a
              className="py-2 underline"
              href="https://drive.google.com/file/d/1UmNmKPNujJ_A6l-dThmIwHyiEzNNeVFs/view?usp=drive_link"
            >
              https://drive.google.com/file/d/1UmNmKPNujJ_A6l-dThmIwHyiEzNNeVFs/view?usp=drive_link
            </a>
          </div>
          <img src="/sheares.png" alt="" className="h-full w-1/3" />
        </div>
      </div>

      {/* social link */}
      <h1 className="px-14 pb-8 text-7xl font-bold" id="link">
        Links
      </h1>

      <div className="grid grid-cols-1 gap-4 px-14 pb-8 sm:grid-cols-3">
        <a
          className="btn btn-ghost items-center bg-brand-300 hover:bg-brand-200"
          href="/cv.pdf"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-300">
            <DocumentIcon className="h-4 w-4 text-white" />
          </div>
          <p>Resume/CV</p>
        </a>
        <a
          className="btn btn-ghost items-center bg-brand-300 hover:bg-brand-200"
          href="https://www.linkedin.com/in/isaacchin12/"
        >
          <img src="linkedin.png" alt="" className="h-6 w-6" />
          <p>LinkedIn</p>
        </a>
        <a
          className="btn btn-ghost items-center bg-brand-300 hover:bg-brand-200"
          href="https://github.com/isaacchin12"
        >
          <img src="/github-mark.png" alt="" className="h-6 w-6" />
          <p>GitHub</p>
        </a>
      </div>

      {/* contact me */}
      <h1 className="px-14 pb-8 text-7xl font-bold" id="contactme">
        Contact Me
      </h1>
      <div className="hero bg-brand-100 py-12">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="avatar mx-auto h-36 w-36 overflow-hidden rounded-full">
              <img src="profilephoto.png" alt="" />
            </div>
            <p className=" py-6 text-xl font-semibold">
              Looking to collaborate on a project?
            </p>
            <div className="btn btn-ghost border-brand-100 bg-brand-300 text-white hover:bg-brand-200">
              <a href="mailto:isaacchin12@gmail.com">Contact Me!</a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
