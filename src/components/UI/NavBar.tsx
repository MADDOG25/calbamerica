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

const navigation = [
  { name: "Inicio", href: "#" },
  {
    name: "Acerca de",
    subItems: [
      { name: "Asociados", href: "#" },
      { name: "Servicio", href: "#" },
      { name: "Formulario", href: "#" },
      { name: "Equipo", href: "#" },
    ],
  },
  { name: "Fundador", href: "#" },
  { name: "Contacto", href: "#" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          {navigation.map((item) =>
            item.subItems ? (
              <Disclosure as="div" key={item.name} className="relative">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center text-md font-semibold leading-6 text-[--whiteGray]">
                      {item.name}
                      <ChevronDownIcon
                        className={`ml-2 h-5 w-5 transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="absolute left-0 mt-2 w-40 rounded-md bg-gray-800 shadow-lg ring-1 ring-[--whiteGray] ring-opacity-5">
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm dark:text-[--whiteGray] hover:text-[--mediumGreen] dark:hover:bg-[--softGray]"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-md font-semibold leading-6 text-[--whiteGray]"
              >
                {item.name}
              </a>
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
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[--whiteGray] dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[--darkGreen]">
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
              className="-m-2.5 rounded-md p-2.5 text-[--mediumGreen]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-[--mediumGreen]">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.subItems ? (
                    <Disclosure as="div" key={item.name} className="relative">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 px-3 text-sm font-semibold leading-7 dark:text-[--whiteGray] hover:text-[--mediumGreen] dark:hover:bg-[--softGray]">
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
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block rounded-lg px-3 py-2 text-sm font-semibold leading-7 dark:text-[--whiteGray] hover:text-[--mediumGreen] dark:hover:bg-[--softGray]"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 dark:text-[--whiteGray] hover:text-[--mediumGreen] dark:hover:bg-[--softGray]"
                    >
                      {item.name}
                    </a>
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
