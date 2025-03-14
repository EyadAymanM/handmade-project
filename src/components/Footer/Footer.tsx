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
      <div className="flex flex-col items-center  px-5">
        <div className="py-12">
          <img src={logo} className="h-26 md:h-30 w-27 md:w-32" alt="" />
        </div>

        <div className="w-full">
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
      </div>

      <div className="text-white flex not-lg:flex-col justify-around items-center">

        <div className="flex flex-col lg:flex-row justify-around">
          
          <div className="flex flex-col gap-4 px-8 py-10">
            <h3>Powered by</h3>
            <span><img src={itiLogo} alt="iti" className={styles.logo} /></span>
          </div>

          <div className="flex flex-col gap-4 px-8 py-10">
            <h3>Powered by</h3>
            <span><img src={itiLogo} alt="iti" className={styles.logo} /></span>
          </div>

        </div>

        <div className="w-full px-8 py-6 flex flex-col gap-4">
          <h3 className="text-2xl">Partners and Collaborators</h3>
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
