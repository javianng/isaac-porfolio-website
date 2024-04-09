import PageLayout from "~/components/PageLayout";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <PageLayout>
      {/*  hero section */}

      <div className="hero mb-8 min-h-fit bg-brand-300 px-14 py-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-7xl font-bold text-white">Hello! Isaac Here</h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-ghost border-0 border-brand-100 bg-brand-200 text-white">
              Get Started
            </button>
            <div className="flex gap-2 pt-4">
              <SocialIcon url="https://twitter.com" />
              <SocialIcon url="https://github.com" />
              <SocialIcon url="https://instagram.com" />
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
          <Image src="/python.svg" alt="" className="h-5 w-5" />
        </div>
        <div className="flex w-full flex-row items-center justify-between rounded-lg border-2 border-brand-300 p-9 duration-200 hover:bg-brand-100">
          <p>Python</p>
          <Image src="/python.svg" alt="" className="h-5 w-5" />
        </div>
        <div className="flex w-full flex-row items-center justify-between rounded-lg border-2 border-brand-300 p-9 duration-200 hover:bg-brand-100">
          <p>Python</p>
          <Image src="/python.svg" alt="" className="h-5 w-5" />
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
              <Image
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
                <Link href="/projects/project1">
                  <button className="btn btn-ghost border-brand-100 bg-brand-200 text-white">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* project card */}
          <div className="card card-compact max-w-md bg-base-100 shadow-xl">
            <figure>
              <Image
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
                <Link href="/projects/project1">
                  <button className="btn btn-ghost border-brand-100 bg-brand-200 text-white">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* project card */}
          <div className="card card-compact max-w-md bg-base-100 shadow-xl">
            <figure>
              <Image
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
                <Link href="/projects/project1">
                  <button className="btn btn-ghost border-brand-100 bg-brand-200 text-white">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* project card */}
          <div className="card card-compact max-w-md bg-base-100 shadow-xl">
            <figure>
              <Image
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
                <Link href="/projects/project1">
                  <button className="btn btn-ghost border-brand-100 bg-brand-200 text-white">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* project card */}
          <div className="card card-compact max-w-md bg-base-100 shadow-xl">
            <figure>
              <Image
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
                <Link href="/projects/project1">
                  <button className="btn btn-ghost border-brand-100 bg-brand-200 text-white">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* project card */}
          <div className="card card-compact max-w-md bg-base-100 shadow-xl">
            <figure>
              <Image
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
                <Link href="/projects/project1">
                  <button className="btn btn-ghost border-brand-100 bg-brand-200 text-white">
                    Buy Now
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
            <p className="text-xl font-bold">Work @ NUS</p>
            <p className="py-2 underline">Jan 2023 - Feb 2023</p>
            <p>
              Ex est id ullamco est ea. Id ullamco est ea do anim tempor. Est ea
              do, anim tempor nostrud. Anim tempor nostrud ad, aute proident. Ad
              aute proident laborum.
            </p>
          </div>
          <Image src="/python.svg" alt="" className="h-full w-1/3" />
        </div>
        <div className="flex w-full flex-row items-center justify-between rounded-lg border-2 border-brand-300 p-9 duration-200 hover:bg-brand-100">
          <div>
            <p className="text-xl font-bold">Work @ NUS</p>
            <p className="py-2 underline">Jan 2023 - Feb 2023</p>
            <p>
              Ex est id ullamco est ea. Id ullamco est ea do anim tempor. Est ea
              do, anim tempor nostrud. Anim tempor nostrud ad, aute proident. Ad
              aute proident laborum.
            </p>
          </div>
          <Image src="/python.svg" alt="" className="h-full w-1/3" />
        </div>
        <div className="flex w-full flex-row items-center justify-between rounded-lg border-2 border-brand-300 p-9 duration-200 hover:bg-brand-100">
          <div>
            <p className="text-xl font-bold">Work @ NUS</p>
            <p className="py-2 underline">Jan 2023 - Feb 2023</p>
            <p>
              Ex est id ullamco est ea. Id ullamco est ea do anim tempor. Est ea
              do, anim tempor nostrud. Anim tempor nostrud ad, aute proident. Ad
              aute proident laborum.
            </p>
          </div>
          <Image src="/python.svg" alt="" className="h-full w-1/3" />
        </div>
      </div>

      {/* testimonials section */}
      <h1 className="px-14 pb-8 text-7xl font-bold" id="testimonials">
        Testimonials
      </h1>
      <div className="px-14 pb-12">
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center px-24 py-12">
              <Image src="/" alt="" className="avatar h-12 w-12" />
              <p>Company</p>
              <p className=" line-clamp-3">
                Proident sit minim commodo adipiscing duis consequat. Minim
                commodo adipiscing duis consequat. Adipiscing duis consequat
                laborum excepteur dolor. Consequat laborum excepteur dolor ea
                cupidatat veniam. Excepteur dolor ea cupidatat veniam labore. Ea
                cupidatat veniam labore ea.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center px-24 py-12">
              <Image src="/" alt="" className="avatar h-12 w-12" />
              <p>Company</p>
              <p className=" line-clamp-3">
                Proident sit minim commodo adipiscing duis consequat. Minim
                commodo adipiscing duis consequat. Adipiscing duis consequat
                laborum excepteur dolor. Consequat laborum excepteur dolor ea
                cupidatat veniam. Excepteur dolor ea cupidatat veniam labore. Ea
                cupidatat veniam labore ea.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center px-24 py-12">
              <Image src="/" alt="" className="avatar h-12 w-12" />
              <p>Company</p>
              <p className=" line-clamp-3">
                Proident sit minim commodo adipiscing duis consequat. Minim
                commodo adipiscing duis consequat. Adipiscing duis consequat
                laborum excepteur dolor. Consequat laborum excepteur dolor ea
                cupidatat veniam. Excepteur dolor ea cupidatat veniam labore. Ea
                cupidatat veniam labore ea.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* social link */}
      <h1 className="px-14 pb-8 text-7xl font-bold" id="link">
        Links
      </h1>

      <div className="grid grid-cols-1 gap-4 px-14 pb-8 sm:grid-cols-3">
        <div className="btn btn-ghost items-center bg-brand-300 hover:bg-brand-200">
          <Image src="" alt="" className="h-6 w-6" />
          <p>Irure</p>
        </div>
        <div className="btn btn-ghost items-center bg-brand-300 hover:bg-brand-200">
          <Image src="" alt="" className="h-6 w-6" />
          <p>Irure</p>
        </div>
        <div className="btn btn-ghost items-center bg-brand-300 hover:bg-brand-200">
          <Image src="" alt="" className="h-6 w-6" />
          <p>Irure</p>
        </div>
      </div>

      {/* contact me */}
      <h1 className="px-14 pb-8 text-7xl font-bold" id="contactme">
        Contact Me
      </h1>
      <div className="hero bg-brand-100 py-12">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="avatar mx-auto h-36 w-36 overflow-hidden rounded-full">
              <Image
                src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt=""
              />
            </div>
            <p className=" py-6 text-xl font-semibold">Drop me an email!</p>
            <div className="btn btn-ghost border-brand-100 bg-brand-300 text-white hover:bg-brand-200">
              <a href="mailto:someone@example.com">Email Me</a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
