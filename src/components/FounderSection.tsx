import React from "react";
// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

// const features = [
//   {
//     name: 'Push to deploy.',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: CloudArrowUpIcon,
//   },
//   {
//     name: 'SSL certificates.',
//     description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
//     icon: LockClosedIcon,
//   },
//   {
//     name: 'Database backups.',
//     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
//     icon: ServerIcon,
//   },
// ]

export default function FounderSection() {
  return (
    <div className="overflow-hidden bg-[--bgPrimary] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Cont Elements */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Cont Text */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg text-center lg:text-left">
              <h2 className="text-base font-semibold leading-7 text-[--textSecondary]">
                Fundador
              </h2>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-[--textPrimary] sm:text-4xl">
                Lic. Pablo Rutigliano
              </h3>
              <p className="mt-6 text-md leading-8 text-[--textSecondary]">
                Mas de 20 años de Experiencia en el Mercado de Capitales en
                Argentina. Fue el creador y fundador de la Cámara Argentina de
                Litio como también el que creo e impulso el desarrollo de la
                primera criptomoneda del litio con reservas a nivel mundial
                atomico3, creador & Fundador de la Cámara Latinoamericana de
                Litio e impulsando la creación de las demás Cámaras de Litio, en
                los países con reservas de litio.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <a
                  target="_blank"
                  href="#"
                  className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-[--textButton] shadow-sm bg-[--accent] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent]"
                >
                  LindekIn <span aria-hidden="true">→</span>
                </a>
              </div>
              {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Franco Rutigliano"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] "
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
