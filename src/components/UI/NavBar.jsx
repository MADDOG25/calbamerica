import { useState, useEffect } from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Inicio", href: "#" },
  { name: "Acerca de",
    subItems: [
        { name: "Asociados", href: "#" },
        { name: "Servicio", href: "#" },
        { name: "Formulario", href: "#" },
        { name: "Equipo", href: "#" },
    ]
  },
  { name: "Fundador", href: "#" },
  { name: "Contacto", href: "#" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[--whiteGray] dark:bg-gray-900">
      {/* Navbar */}
      <nav
        className="flex items-center justify-between p-4 lg:px-8 bg-[--mediumGreen] dark:bg-gray-800 rounded-3xl m-8"
        aria-label="Global"
      >
        {/* Logo*/}
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Calbamerica</span>
            <img
              className="h-10 w-auto"
              src="./logo.svg"
              alt="Calbamerica logo"
            />
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[--whiteGray]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-md font-semibold leading-6 text-[--whiteGray]"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Dark Mode */}
        <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-x-6">
          <button
            className="text-md font-semibold leading-6 text-[--whiteGray]"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[--whiteGray] dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[--darkGreen]">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Calbamerica</span>
              <img
                className="h-8 w-auto"
                src="./logo.svg"
                alt="Calbamerica logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[--mediumGreen]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-[--mediumGreen]">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-[--softGray] dark:hover:bg-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <button
                  className="w-full text-left px-3 py-2 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-[--softGray] dark:hover:bg-gray-700"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
