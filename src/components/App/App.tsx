import RootRouter from "../../routes/RootRouter";
import Footer from "../Footer/Footer";
import Header from "../Header";
import { useRef } from "react"

import styles from "./App.module.css"


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
import armenVahagni2 from "../../images/ArmenVahagni/c.jpg"
import armenVahagni3 from "../../images/ArmenVahagni/d.jpg"
import armenVahagni4 from "../../images/ArmenVahagni/e.jpg"
import armenVahagniProfile from "../../images/ArmenVahagni/profile.jpg"

import buzand1 from "../../images/Buzand/1.jpg"
import buzand2 from "../../images/Buzand/2.jpg"
import buzand3 from "../../images/Buzand/3.jpg"
import buzand4 from "../../images/Buzand/4.jpg"
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
import manvel2 from "../../images/Manvel/2.jpg"
import manvel3 from "../../images/Manvel/3.jpg"
import manvel4 from "../../images/Manvel/5.jpg"
import manvel5 from "../../images/Manvel/6.jpg"
import manvel6 from "../../images/Manvel/7.jpg"
import manvelProfile from "../../images/Manvel/profile.jpg"


import vitess1 from "../../images/vitess/1.jpg"
import vitess2 from "../../images/vitess/2.jpg"
import vitess3 from "../../images/vitess/4.jpg"
import vitessProfile from "../../images/vitess/profile.jpg"


import laboratory1 from "../../images/YeastLaboratory/2.jpg"
import laboratory2 from "../../images/YeastLaboratory/3.jpg"
import laboratory3 from "../../images/YeastLaboratory/4.jpg"
import laboratory4 from "../../images/YeastLaboratory/5.jpg"
import laboratory1Profile from "../../images/YeastLaboratory/profile.jpg"


import zoler1 from "../../images/Zoler/1.jpg"
import zoler2 from "../../images/Zoler/3.jpg"
import zoler3 from "../../images/Zoler/4.jpg"
import zoler4 from "../../images/Zoler/5.jpg"
import zoler5 from "../../images/Zoler/6.jpg"
import zoler6 from "../../images/Zoler/7.jpg"
import zolerProfile from "../../images/Zoler/profile.jpg"


import avtosrah1 from "../../images/avtosrah/1.jpg"
import avtosrahProfile from "../../images/avtosrah/profile.jpg"


import ayrum1 from "../../images/Ayrum/1.jpg"
import ayrum2 from "../../images/Ayrum/2.jpg"
import ayrum3 from "../../images/Ayrum/3.jpg"
import ayrum4 from "../../images/Ayrum/4.jpg"
import ayrum5 from "../../images/Ayrum/5.jpg"
import ayrum6 from "../../images/Ayrum/6.jpg"
import ayrum7 from "../../images/Ayrum/7.jpg"
import ayrum8 from "../../images/Ayrum/8.jpg"
import ayrum9 from "../../images/Ayrum/9.jpg"
import ayrumProfile from "../../images/Ayrum/profile.jpg"


import saryan1 from "../../images/saryan/1.jpg"
import saryan2 from "../../images/saryan/2.jpg"
import saryanProfile from "../../images/saryan/profile.jpg"


import zigzag1 from "../../images/sayatnovazigzag/1.jpg"
import zigzag2 from "../../images/sayatnovazigzag/2.jpg"
import zigzag3 from "../../images/sayatnovazigzag/3.jpg"
import zigzag4 from "../../images/sayatnovazigzag/4.jpg"
import zigzag5 from "../../images/sayatnovazigzag/5.jpg"
import zigzag6 from "../../images/sayatnovazigzag/6.jpg"
import zigzag7 from "../../images/sayatnovazigzag/7.jpg"
import zigzag8 from "../../images/sayatnovazigzag/8.jpg"
import zigzag9 from "../../images/sayatnovazigzag/9.jpg"
import zigzag10 from "../../images/sayatnovazigzag/10.jpg"
import zigzag11 from "../../images/sayatnovazigzag/11.jpg"
import zigzag12 from "../../images/sayatnovazigzag/12.jpg"
import zigzag13 from "../../images/sayatnovazigzag/13.jpg"
import zigzag14 from "../../images/sayatnovazigzag/14.jpg"
import zigzagProfile from "../../images/sayatnovazigzag/profile.jpg"


import saghmosavanq1 from "../../images/saghmosavanq/1.jpg"
import saghmosavanq2 from "../../images/saghmosavanq/2.jpg"
import saghmosavanq3 from "../../images/saghmosavanq/3.jpg"
import saghmosavanq4 from "../../images/saghmosavanq/4.jpg"
import saghmosavanqProfile from "../../images/saghmosavanq/profile.jpg"

import vahagni1 from "../../images/Vahagni/1.jpg"
import vahagni2 from "../../images/Vahagni/2.jpg"
import vahagni3 from "../../images/Vahagni/3.jpg"
import vahagni4 from "../../images/Vahagni/4.jpg"
import vahagni5 from "../../images/Vahagni/5.jpg"
import vahagni6 from "../../images/Vahagni/6.jpg"
import vahagni7 from "../../images/Vahagni/7.jpg"
import vahagni8 from "../../images/Vahagni/8.jpg"
import vahagni9 from "../../images/Vahagni/9.jpg"
import vahagniProfile from "../../images/Vahagni/profile.jpg"








export interface FakeDataEntry {
  id: number;
  title: string;
  description: string;
  profile: string;
  images: string[]; 
}


const App = () => {


  const footerRef = useRef<any>(null)
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };



 

  const fakeData: FakeDataEntry[] = [
    {
      id: 1,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      profile: armenBaldryanProfile,
      images: [armenBaldryanProfile, armenBaldryan1, armenBaldryan2, armenBaldryan4, armenBaldryan5]

    },
    {
      id: 2,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      profile: araikProfile,
      images: [araikProfile, araik1, araik2, araik4]

    },
    {
      id: 3,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      profile: armenVahagniProfile,
      images: [armenVahagniProfile, armenVahagni1, armenVahagni2, armenVahagni3, armenVahagni4]

    },
    {
      id: 4,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      profile: buzandProfile,
      images: [buzandProfile, buzand1, buzand2, buzand3, buzand4, buzand5]

    },
    {
      id: 5,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      profile: charencProfile,
      images: [charencProfile, charenc1, charenc2, charenc3, charenc4, charenc5, charenc6, charenc7, charenc8, charenc9]

    },
    {
      id: 6,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      profile: manvelProfile,
      images: [manvelProfile, manvel1, manvel2, manvel3, manvel4, manvel5 ,manvel6]

    },
    {
      id: 7,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      profile: vitessProfile,
      images: [vitessProfile, vitess1, vitess2, vitess3]

    },
    {
      id: 8,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      profile: laboratory1Profile,
      images: [laboratory1Profile, laboratory1, laboratory2, laboratory3, laboratory4]

    },
    {
      id: 9,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      profile: zolerProfile,
      images: [zolerProfile, zoler1, zoler2, zoler3, zoler4, zoler5, zoler6]

    },
    {
      id: 10,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      profile: avtosrahProfile,
      images: [avtosrahProfile, avtosrah1]

    },
    {
      id: 11,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      profile: ayrumProfile,
      images: [ayrumProfile, ayrum1, ayrum2, ayrum3, ayrum4, ayrum5, ayrum6, ayrum7, ayrum8, ayrum9]

    },
    {
      id: 12,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      profile: saryanProfile,
      images: [saryanProfile, saryan1, saryan2]

    },
    {
      id: 13,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      profile: zigzagProfile,
      images: [zigzagProfile, zigzag1, zigzag2, zigzag3, zigzag4, zigzag5, zigzag6, zigzag7, zigzag8, zigzag9, zigzag10, zigzag11, zigzag12, zigzag13, zigzag14]

    },
    {
      id: 14,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      profile: saghmosavanqProfile,
      images: [saghmosavanq2, saghmosavanq1, saghmosavanq3, saghmosavanq4]

    },
    {
      id: 15,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      profile: vahagniProfile,
      images: [vahagniProfile, vahagni1, vahagni2, vahagni3, vahagni4, vahagni5, vahagni6, vahagni7, vahagni8, vahagni9]

    },
  ]

  return (
    <div className={styles.app}>
      <Header scrollToFooter={scrollToFooter} />
      <RootRouter fakeData={fakeData} />
      <Footer footerRef={footerRef} />
    </div>
  )
}

export default App










 // const category = [
  //   {
  //     id: 1,
  //     name: CategoryName.RESIDENTAL,
  //     projects: [

  //     ]
  //   },
  //   {
  //     id: 2,
  //     name: CategoryName.PUBLIC,
  //     projects: [

  //     ]
  //   },
  //   {
  //     id: 3,
  //     name: CategoryName.PUBLIC,
  //     projects: [

  //     ]
  //   },  
  // ]