import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/logo.png";
import styles from "./Footer.module.css";
import partner1 from "@/assets/footer/partner-1.png";
import partner2 from "@/assets/footer/partner-2.png";
import partner3 from "@/assets/footer/partner-3.png";
import partner4 from "@/assets/footer/partner-4.png";
import itiLogo from "@/assets/footer/iti-logo.svg";
import certified from "@/assets/footer/certified.png";

const headers = [
  {
    title: "Shop",
    content: ["Jewelry", "Home", "Clothing", "Sculpture", "Accessories"],
  },
  {
    title: "Info",
    content: [
      "Buyer FAQ",
      "Seller FAQ",
      "Seller Rates & Incentives",
      "Privacy Policy",
      "Terms and Conditions",
    ],
  },
  {
    title: "About",
    content: ["The Movement", "Our Commitment", "Village Council", "Our Story"],
  },
];

function Footer() {
  return (
    <div className={`${styles.footer} bg-[#876A5C]`}>
      <div className="flex flex-col items-center mb-5 px-5">
        <div className="py-12">
          <img src={logo} className="h-26 md:h-30 w-27 md:w-32" alt="" />
        </div>

        <div className="w-full md:hidden">
          <Accordion
            type="single"
            collapsible
            className="w-full text-white font-[DM_Sans] font-light"
          >
            {headers.map((h, i) => (
              <AccordionItem
                key={h.title}
                className="first:border-t ease-in"
                value={`item-${i + 1}`}
              >
                <AccordionTrigger className="hover:no-underline hover:cursor-pointer text-2xl">
                  {h.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="ps-3 flex flex-col gap-1">
                    {h.content.map((e, i) => (
                      <li
                        key={i}
                        className="hover:underline hover:cursor-pointer text-base"
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="w-full hidden md:flex text-white justify-center gap-20">
          {headers.map(h =>
            <div key={h.title} className="text-center">
              <h3 className="text-2xl mb-4 cursor-pointer">{h.title}</h3>
              <ul className="list-none flex flex-col gap-2">
                {h.content.map((c,i)=>
                  <li key={i} className="cursor-pointer hover:underline">{c}</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 text-white">


        <div className="col-span-4 sm:col-span-2 lg:col-span-1 flex justify-between gap-2 px-8 py-10 items-center border-t border-e">
          <img src={certified} alt="iti" className="w-14" />
          <div>This company meets the highest standards of social and environmental impact</div>
        </div>

        <div className="col-span-4 sm:col-span-2 lg:col-span-1 flex flex-col not-sm:items-center gap-4 px-8 py-6 border-t border-e">
          <h3>Powered by</h3>
          <img src={itiLogo} alt="iti" className={`${styles.logo} w-42`} />
        </div>


        <div className="col-span-4 lg:col-span-2 px-8 py-6 gap-4 border-t">
          <h3 className="text-2xl mb-3">Partners and Collaborators</h3>
          <div className="flex justify-around flex-wrap gap-6 items-center">
            <span><img src={partner1} className="w-12 xl:w-20" alt="partner-1" /></span>
            <span><img src={partner2} className={`w-25 ${styles.logo}`} alt="partner-2" /></span>
            <span><img src={partner3} className={`w-28 ${styles.logo}`} alt="partner-3" /></span>
            <span><img src={partner4} className="w-36" alt="partner-4" /></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
