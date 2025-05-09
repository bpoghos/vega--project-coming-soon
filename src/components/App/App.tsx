import RootRouter from "../../routes/RootRouter";
import Footer from "../Footer/Footer";
import Header from "../Header";
import { useEffect, useRef, useState } from "react"

import styles from "./App.module.scss"


import araik1 from "../../images/Araik/1.jpg"
import araik2 from "../../images/Araik/2.jpg"
import araik4 from "../../images/Araik/4.jpg"
import araikProfile from "../../images/Araik/profile.jpg"



import armenBaldryan1 from "../../images/ArmenBaldryan/1.jpg"
import armenBaldryan2 from "../../images/ArmenBaldryan/2.jpg"
import armenBaldryan4 from "../../images/ArmenBaldryan/4.jpg"
import armenBaldryan5 from "../../images/ArmenBaldryan/5.jpg"
import armenBaldryanProfile from "../../images/ArmenBaldryan/profile.jpg"


import armenVahagni1 from "../../images/ArmenVahagni/a.jpg"
import armenVahagni3 from "../../images/ArmenVahagni/d.jpg"
import armenVahagni4 from "../../images/ArmenVahagni/e.jpg"
import armenVahagniProfile from "../../images/ArmenVahagni/profile.jpg"

import buzand1 from "../../images/Buzand/1.jpg"
import buzand2 from "../../images/Buzand/2.jpg"
import buzand3 from "../../images/Buzand/3.jpg"
import buzand5 from "../../images/Buzand/5.jpg"
import buzandProfile from "../../images/Buzand/profile.jpg"

import charenc1 from "../../images/Charenc/1.jpg"
import charenc2 from "../../images/Charenc/2.jpg"
import charenc3 from "../../images/Charenc/3.jpg"
import charenc4 from "../../images/Charenc/4.jpg"
import charenc5 from "../../images/Charenc/5.jpg"
import charenc6 from "../../images/Charenc/6.jpg"
import charenc7 from "../../images/Charenc/7.jpg"
import charenc8 from "../../images/Charenc/9.jpg"
import charenc9 from "../../images/Charenc/10.jpg"
import charencProfile from "../../images/Charenc/profile.jpg"


import manvel1 from "../../images/Manvel/1.jpg"
import manvel5 from "../../images/Manvel/6.jpg"
import manvel6 from "../../images/Manvel/7.jpg"
import manvelProfile from "../../images/Manvel/profile.jpg"


import vitess1 from "../../images/vitess/1.jpg"
import vitess2 from "../../images/vitess/2.jpg"
import vitess3 from "../../images/vitess/4.jpg"
import vitessProfile from "../../images/vitess/profile.jpg"


import laboratory1 from "../../images/YeastLaboratory/2.jpg"
import laboratory2 from "../../images/YeastLaboratory/3.jpg"
import laboratory1Profile from "../../images/YeastLaboratory/profile.jpg"


import zoler1 from "../../images/Zoler/1.jpg"
import zoler2 from "../../images/Zoler/3.jpg"
import zoler3 from "../../images/Zoler/4.jpg"
import zoler4 from "../../images/Zoler/5.jpg"
import zolerProfile from "../../images/Zoler/profile.jpg"


import avtosrah1 from "../../images/avtosrah/1.jpg"
import avtosrahProfile from "../../images/avtosrah/profile.jpg"


import ayrum2 from "../../images/Ayrum/2.jpg"
import ayrum4 from "../../images/Ayrum/4.jpg"
import ayrum5 from "../../images/Ayrum/5.jpg"
import ayrum6 from "../../images/Ayrum/6.jpg"
import ayrum8 from "../../images/Ayrum/8.jpg"
import ayrumProfile from "../../images/Ayrum/profile.jpg"


import saryan1 from "../../images/saryan/1.jpg"
import saryanProfile from "../../images/saryan/profile.jpg"


import zigzag2 from "../../images/sayatnovazigzag/2.jpg"
import zigzag6 from "../../images/sayatnovazigzag/6.jpg"
import zigzag9 from "../../images/sayatnovazigzag/9.jpg"
import zigzag13 from "../../images/sayatnovazigzag/13.jpg"
import zigzagProfile from "../../images/sayatnovazigzag/profile.jpg"

import felicity1 from "../../images/felicity/1.jpg"
import felicity2 from "../../images/felicity/2.jpg"
import felicityProfile from "../../images/felicity/profile.jpg"

import martini1 from "../../images/martini royale 2013/1.jpg"
import martini2 from "../../images/martini royale 2013/2.jpg"
import martini3 from "../../images/martini royale 2013/3.jpg"
import martiniProfile from "../../images/martini royale 2013/profile.jpg"

import mommy1 from "../../images/Mommy/1.jpg"
import mommy2 from "../../images/Mommy/2.jpg"
import mommyProfile from "../../images/Mommy/profile.jpg"

const App = () => {

  const footerRef = useRef<any>(null)
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.app}>
      <Header scrollToFooter={scrollToFooter} />
      <RootRouter /* fakeData={fakeData}  *//>
      <Footer footerRef={footerRef} />
    </div>
  )
}

export default App
