import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Switch } from "./SwitchMode";
import { Link } from "react-scroll";

const navigation = [
  { name: "Inicio", href: "hero-section" },
  {
    name: "Acerca de",
    subItems: [
      { name: "Asociados", href: "partners-section" },
      { name: "Servicio", href: "service-section" },
      { name: "Formulario", href: "form-section" },
      { name: "Equipo", href: "team-section" },
    ],
  },
  { name: "Fundador", href: "founder-section" },
  { name: "Contacto", href: "contact-section" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Navbar */}
      <nav
        className="flex items-center justify-between p-4 lg:px-8 bg-[--bgnavbar] rounded-3xl m-6"
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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[--textMenu]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center lg:gap-x-12">
          {navigation.map((item) =>
            item.subItems ? (
              <Disclosure as="div" key={item.name} className="relative">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center text-md font-semibold leading-6 text-[--textPrimary] hover:text-[--textPrimary]">
                      {item.name}
                      <ChevronDownIcon
                        className={`ml-2 h-5 w-5 transition-transform
                          open ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="absolute left-0 mt-2 w-40 rounded-md bg-[--bgPrimary] shadow-lg ring-1 ring-[--accent] ring-opacity-10">
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            to={subItem.href}
                            smooth={true}
                            duration={500}
                            key={subItem.name}
                            className="cursor-pointer block px-4 py-2 text-sm text-[--textPrimary] hover:text-[--textHoverMenu] hover:bg-[--accent]"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ) : (
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                key={item.name}
                className="cursor-pointer text-md font-semibold leading-6 text-[--textPrimary] hover:text-[--textPrimary]"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Dark Mode Desktop */}
        <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-x-6">
          <Switch />
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[--bgnavbar] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[--accent]">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Calbamerica</span>
              <img
                className="h-8 w-auto"
                src="./logo.svg"
                alt="Calbamerica logo"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[--textMenu]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-[--accent]">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.subItems ? (
                    <Disclosure as="div" key={item.name} className="relative">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 px-3 text-sm font-semibold leading-7 hover:bg-[--bgPrimary] text-[--textPrimary] hover:text-[--textHover]">
                            {item.name}
                            <ChevronDownIcon
                              className={`ml-2 h-5 w-5 transition-transform ${
                                open ? "rotate-180" : ""
                              }`}
                              aria-hidden="true"
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2 pl-6">
                            {item.subItems.map((subItem) => (
                              <Link
                                to={subItem.href}
                                smooth={true}
                                duration={500}
                                key={subItem.name}
                                className=" cursor-pointer block rounded-lg px-3 py-2 text-sm font-semibold leading-7 hover:bg-[--bgPrimary] text-[--textPrimary] hover:text-[--textHover]"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <Link
                      to={item.href}
                      smooth={true}
                      duration={500}
                      key={item.name}
                      className="cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-[--textPrimary] hover:bg-[--bgPrimary] hover:text-[--textHover]"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>

              {/* Dark Mode Mobile */}
              <div className="py-6">
                <Switch />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
