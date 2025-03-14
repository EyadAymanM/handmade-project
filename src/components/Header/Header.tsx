import { ChevronDown } from "lucide-react";
import cartSVG from "../../assets/shopping-cart-outline.svg";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

function Header() {
  const [categoryMenuOpen, setCategoryMenuOpen] = useState<boolean>(false);
  const navigationData = [
    {
      name: "Jewelry",
      href: "/jewelry",
      subcategories: [
        { name: "All Jewelry", href: "/jewelry" },
        { name: "Anklets", href: "/jewelry/anklets" },
        { name: "Bracelets", href: "/jewelry/bracelets" },
        { name: "Brooches", href: "/jewelry/brooches" },
        { name: "Earrings", href: "/jewelry/earrings" },
        { name: "Jewelry Sets", href: "/jewelry/sets" },
        { name: "Necklaces", href: "/jewelry/necklaces" },
        { name: "Rings", href: "/jewelry/rings" },
        { name: "Toe Rings", href: "/jewelry/toe-rings" },
      ],
    },
    {
      name: "Home Decor",
      href: "/home-decor",
      subcategories: [
        { name: "All Home Decor", href: "/home-decor" },
        { name: "Area Rugs", href: "/home-decor/area-rugs" },
        { name: "Baskets", href: "/home-decor/baskets" },
        { name: "Chess Sets Games", href: "/home-decor/chess-sets-games" },
        { name: "Decor Accessories", href: "/home-decor/accessories" },
        { name: "Furniture", href: "/home-decor/furniture" },
        { name: "Hammocks", href: "/home-decor/hammocks" },
        { name: "Holiday Decor & Ornaments", href: "/home-decor/holiday" },
        { name: "Jewelry Boxes", href: "/home-decor/jewelry-boxes" },
        { name: "Lamps & Lighting", href: "/home-decor/lighting" },
        { name: "Masks", href: "/home-decor/masks" },
        { name: "Musical Instruments", href: "/home-decor/instruments" },
        { name: "Outdoor Living", href: "/home-decor/outdoor" },
        { name: "Pillows & Throws", href: "/home-decor/pillows-throws" },
        { name: "Sculpture", href: "/home-decor/sculpture" },
        { name: "Tableware", href: "/home-decor/tableware" },
        { name: "Vases", href: "/home-decor/vases" },
        { name: "Wall Decor", href: "/home-decor/wall-decor" },
      ],
    },
    {
      name: "Clothing",
      href: "/clothing",
      subcategories: [
        { name: "All Clothing", href: "/clothing" },
        { name: "Blazers", href: "/clothing/blazers" },
        { name: "Dresses", href: "/clothing/dresses" },
        { name: "Kimonos", href: "/clothing/kimonos" },
        { name: "Pajama Sets", href: "/clothing/pajama-sets" },
        { name: "Pants", href: "/clothing/pants" },
        { name: "Ponchos", href: "/clothing/ponchos" },
        { name: "Robes", href: "/clothing/robes" },
        { name: "Sarongs", href: "/clothing/sarongs" },
        { name: "Shirts", href: "/clothing/shirts" },
        { name: "Skirts", href: "/clothing/skirts" },
        { name: "Sweaters", href: "/clothing/sweaters" },
        { name: "Tops", href: "/clothing/tops" },
        { name: "Wraps & Ruanas", href: "/clothing/wraps-ruanas" },
      ],
    },
    {
      name: "Accessories",
      href: "/accessories",
      subcategories: [
        { name: "All Accessories", href: "/accessories" },
        { name: "Belts", href: "/accessories/belts" },
        { name: "Fans", href: "/accessories/fans" },
        { name: "Gloves", href: "/accessories/gloves" },
        { name: "Hair Accessories", href: "/accessories/hair" },
        { name: "Handbags", href: "/accessories/handbags" },
        { name: "Hats", href: "/accessories/hats" },
        { name: "Keychains & Straps", href: "/accessories/keychains-straps" },
        { name: "Scarves", href: "/accessories/scarves" },
        { name: "Shawls", href: "/accessories/shawls" },
        { name: "Socks", href: "/accessories/socks" },
        { name: "Other Accessories", href: "/accessories/other" },
      ],
    },
  ];
  return (
    <>
      <div className="border-b border-gray-300 pb-4">
        <nav className="font-semibold relative">
          <div className="py-4 px-8 ">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button
                  className="rounded-2xl px-2 py-1 cursor-pointer hover:bg-[#f5f0e6] flex items-center gap-1 "
                  onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
                >
                  Shop All{" "}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-all duration-200",
                      categoryMenuOpen ? "rotate-180" : ""
                    )}
                  />
                </button>

                <button className="rounded-2xl px-2 py-1 cursor-pointer hover:bg-[#f5f0e6]">
                  About Us
                </button>
              </div>
              <div className="text-4xl font-normal font-sans tracking-widest">
                TESTING.com
              </div>
              <div className="flex gap-2">
                <button className="rounded-2xl px-2 py-1 cursor-pointer hover:bg-[#f5f0e6]">
                  Log In
                </button>
                <button className="rounded-2xl px-2 py-1 cursor-pointer hover:bg-[#f5f0e6]">
                  Sign Up
                </button>
                <button className="rounded-2xl px-2 py-1 cursor-pointer hover:bg-[#f5f0e6]">
                  <img width={25} height={25} src={cartSVG} alt="cart" />
                </button>
              </div>
            </div>
          </div>
          <div
            className={cn(
              "absolute z-50 bg-white border-y transition-all py-5 w-full flex justify-around",
              categoryMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            {navigationData.map((category) => (
              <div key={category.name} className="space-y-4">
                <h3 className="text-lg font-medium text-stone-900">
                  {category.name}
                </h3>
                <ul className="space-y-0.5">
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory.name}>
                      <Link
                        to={subcategory.href}
                        className="text-sm text-stone-600 hover:text-stone-900 hover:underline"
                      >
                        {subcategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-2 w-1/2 m-auto">
            <form className="flex justify-center w-full relative">
              <input
                type="text"
                placeholder="Seek unique"
                className="w-full bg-[#f5f0e6] border border-[#876a5c] rounded-3xl py-2 px-4 focus:outline-0"
              />
              <svg
                className="absolute end-4 top-2"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="28"
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Header;
