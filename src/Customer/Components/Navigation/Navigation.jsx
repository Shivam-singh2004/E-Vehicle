import { Fragment, useRef, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import '../../../index.css'
// import { IoMdCall } from "react-icons/io";
// import "../../../index.css";
// import Modal from "react-responsive-modal";
// import "react-responsive-modal/styles.css";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", id: "top", href: `{women/clothing/tops}` },
            { name: "Dresses", id: "women_dress", href: "#" },
            { name: "Women Jeans", id: "women_jeans" },
            { name: "Lengha Choli", id: "lengha_choli" },
            { name: "Sweaters", id: "sweater" },
            { name: "T-Shirts", id: "t-shirt" },
            { name: "Jackets", id: "jacket" },
            { name: "Gouns", id: "gouns" },
            { name: "Sarees", id: "sarees" },
            { name: "Kurtas", id: "kurtas" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "watches" },
            { name: "Wallets", href: "wallets" },
            { name: "Bags", href: "bags" },
            { name: "Sunglasses", href: "sunglasses" },
            { name: "Hats", href: "hats" },
            { name: "Belts", href: "belts" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "/" },
    { name: "Stores", href: "/" },
  ],
};

const drawbarData = [
  {
    title : "Courses",
    imageUrl : "https://res.cloudinary.com/dheuqshro/image/upload/v1717144263/E-vehicle/Icons/self-improvement_bxibmv.png",
    href : "/courses"
  },
  
  {
    title : "Lab Setup",
    imageUrl : "https://res.cloudinary.com/dheuqshro/image/upload/v1717144263/E-vehicle/Icons/lab_gfpufp.png",
    href : "/lab-setup"
  },

  {
    title : "Spares",
    imageUrl : "https://res.cloudinary.com/dheuqshro/image/upload/v1717144264/E-vehicle/Icons/tyre_kbailj.png",
    href : "/spares"
  },

  {
    title : "Contact Us",
    imageUrl : "https://res.cloudinary.com/dheuqshro/image/upload/v1717144264/E-vehicle/Icons/phone_xzkpfe.png",
    href : "/contact-us"
  },

  {
    title : "Dealership",
    imageUrl : "https://res.cloudinary.com/dheuqshro/image/upload/v1717144264/E-vehicle/Icons/dealership_eusdeh.png",
    href : "/dealership"
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  // const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorE1] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto drawbarBg pb-12 shadow-xl">
                <div className="flex justify-end px-4 pb-2 pt-5 noSelect">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 "
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                {/* <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                 
                </Tab.Group> */}

                <div className="space-y-6 border border-t  px-4 py-6 noSelect">
                  <div className=" cursor-pointer text-xl space-y-7 ">
                  
                  {/* Courses */}
                    <a
                      href="/courses"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900  noSelect  "
                    >
                     <img
                     className="h-[2rem] inline mx-4 "
                      src="https://res.cloudinary.com/dheuqshro/image/upload/v1717144263/E-vehicle/Icons/self-improvement_bxibmv.png" alt="" />
                       Courses
                    </a>

                  {/* Dealership */}
                    <a
                      href="/dealership"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900 removeBlueHighlight noSelect"
                    >
                      <img 
                      className="h-[2rem] inline mx-4 "
                      src="https://res.cloudinary.com/dheuqshro/image/upload/v1717144264/E-vehicle/Icons/dealership_eusdeh.png" alt="" />
                      Dealership
                    </a>
                    
                    {/* Lab Setup */}
                    <a
                      href="/lab-setup"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900 removeBlueHighlight noSelect "
                    >
                      <img
                      className="h-[2rem] inline mx-4 " 
                      src="https://res.cloudinary.com/dheuqshro/image/upload/v1717144263/E-vehicle/Icons/lab_gfpufp.png" alt="" />
                      Laboratory Setup
                    </a>

                  {/* Spares */}
                    <a
                      href="/spares"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900 removeBlueHighlight noSelect"
                    >
                      <img 
                      className="h-[2rem] inline mx-4 "
                      src="https://res.cloudinary.com/dheuqshro/image/upload/v1717144264/E-vehicle/Icons/tyre_kbailj.png" alt="" />
                      Spares
                    </a>

                  {/* Gallery */}
                    <a
                      href="/gallery"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900 removeBlueHighlight noSelect"
                    >
                      <img 
                      className="h-[2rem] inline mx-4 "
                      src="https://res.cloudinary.com/dheuqshro/image/upload/v1717777199/E-vehicle/Icons/gallery_uifmpj.png" alt="" />
                      Gallery
                    </a>

                  {/* Contact Us */}
                    <a
                      href="/contact-us"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900 removeBlueHighlight noSelect"
                    >
                      <img 
                      className="h-[2rem] inline mx-4 "
                      src="https://res.cloudinary.com/dheuqshro/image/upload/v1717144264/E-vehicle/Icons/phone_xzkpfe.png" alt="" />
                      Contact Us
                    </a>


                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        {/* px-4 sm:px-6 lg:px-8 */}
        <nav
          aria-label="Top"
          className="mx-auto w-full border-b border-gray-200"
        >
          <div className="  w-full ">
            <div className="flex h-16 items-center noSelect">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon
                  className="h-6 w-6 sm:h-8 sm:w-8 "
                  aria-hidden="true"
                />
              </button>

              {/* Logo */}
              <div
                className={`flex justify-between  lg:w-max w-full
                  items-center p-2`}
              >
                <div className="flex removeBlueHighlight ">
                  <a href="/">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-[9rem] -ml-8 sm:h-[10rem] lg:h-[12rem]  w-auto"
                      src="https://res.cloudinary.com/dheuqshro/image/upload/v1716893212/E-vehicle/Logo/GT_E-mobility_origin_svlego.png"
                      alt=""
                    />
                  </a>
                </div>

               
                  
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10"></Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-4">
                  
                    <div>
                      {pathname !== "/courses" && <Button
                        className="text-xs sm:text-2xl font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/courses")}
                      >
                        Courses
                      </Button>}

                  {pathname !== "/lab-setup" &&    <Button
                        className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/lab-setup")}
                      >
                        Laboratory Setup
                      </Button>}

                      {pathname !== "/spares" &&  <Button
                        className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/spares")}
                      >
                        Spares
                      </Button>}


            {pathname !== "/dealership" &&          <Button
                        className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/dealership")}
                      >
                        Dealership
                      </Button>}

            {pathname !== "/gallery" &&          <Button
                        className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/gallery")}
                      >
                        Gallery
                      </Button>}

              {pathname !== "/contact-us" &&        <Button
                        className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/contact-us")}
                      >
                        Contact Us
                      </Button>}

                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
