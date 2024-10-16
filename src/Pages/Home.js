import React from 'react';
import '../home.css'
import SectionOne from "../SectionOne";
import SectionTwo from "../SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import FAQSection from "./Faqs";
import CallToAction from "./FooterOne";
 

function Home() {
    return (
      <div>
       <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <FAQSection/>
      <CallToAction/>
     
    </div>
    );
  }
  
  export default Home;