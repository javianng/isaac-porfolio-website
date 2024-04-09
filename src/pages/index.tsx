import PageLayout from "~/components/PageLayout";
import * as React from "react";

export default function Home() {
  return (
    <PageLayout>
      {/*  hero section */}

      <div className="hero bg-brand-300 mb-8 min-h-fit px-14 py-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-7xl font-bold text-white">Hello! Isaac Here</h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-ghost bg-brand-200 border-brand-100 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* skill section */}
      <h1 className="px-14 pb-8 text-7xl font-bold">Skills</h1>

      <div className="flex flex-col gap-4 px-14 pb-8">
        <div className="border-brand-300 flex w-full flex-row items-center justify-between rounded-lg border-2 p-9">
          <p>Voluptate Voluptate</p>
          <img src="/" alt="" className="h-5 w-5" />
        </div>
        <div className="border-brand-300 flex w-full flex-row items-center justify-between rounded-lg border-2 p-9">
          <p>Voluptate Voluptate</p>
          <img src="/" alt="" className="h-5 w-5" />
        </div>
        <div className="border-brand-300 flex w-full flex-row items-center justify-between rounded-lg border-2 p-9">
          <p>Voluptate Voluptate</p>
          <img src="/" alt="" className="h-5 w-5" />
        </div>
      </div>

      {/* project section */}

      <h1 className="px-14 pb-8 text-7xl font-bold">Projects</h1>

      <div className="grid grid-cols-1 gap-4 px-14  pb-8 sm:grid-cols-3">
        {/* project card */}
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project</h2>
            <p>
              Exercitation lorem nostrud, commodo dolor proident
              laborum.Exercitation lorem nostrud.
            </p>
            <div className="card-actions justify-end">
              <a href="/projects/project1">
                <button className="btn btn-ghost bg-brand-200 border-brand-100 text-white">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project</h2>
            <p>
              Exercitation lorem nostrud, commodo dolor proident
              laborum.Exercitation lorem nostrud.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost bg-brand-200 border-brand-100 text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project</h2>
            <p>
              Exercitation lorem nostrud, commodo dolor proident
              laborum.Exercitation lorem nostrud.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost bg-brand-200 border-brand-100 text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project</h2>
            <p>
              Exercitation lorem nostrud, commodo dolor proident
              laborum.Exercitation lorem nostrud.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost bg-brand-200 border-brand-100 text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project</h2>
            <p>
              Exercitation lorem nostrud, commodo dolor proident
              laborum.Exercitation lorem nostrud.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost bg-brand-200 border-brand-100 text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project</h2>
            <p>
              Exercitation lorem nostrud, commodo dolor proident
              laborum.Exercitation lorem nostrud.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost bg-brand-200 border-brand-100 text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials section */}
      <h1 className="px-14 pb-8 text-7xl font-bold">Testimonials</h1>
    </PageLayout>
  );
}
