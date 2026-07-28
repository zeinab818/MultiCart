import Footer from "@/components/ui/Footer/Footer";

import Navbar1 from "@/components/ui/Navbar-1/Navbar1";
import Navbar from "@/components/ui/Navbar-2/Navbar";

import Hero from "./(pages)/Hero/page";
import BuyButton from "@/components/ui/BuyButton/BuyButton";
import ScrollTop from "@/components/ui/ScrollTop/ScrollTop";
import RecentlyPurchaseToast from "@/components/ui/RecentlyPurchaseToast/RecentlyPurchaseToast";

export default function Home() {
  return <>

    <Navbar1/>
    <Navbar/>

    <Hero/>

      <RecentlyPurchaseToast/>

    <ScrollTop/>
    <Footer/>
    <BuyButton/>
 

  </>
}
