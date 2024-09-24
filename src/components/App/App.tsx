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











export interface FakeDataEntry {
  id: number;
  title: string;
  description: string;
  date: string;
  client: string;
  address: string;
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
      description: "",
      date: "Year of Design: 2016",
      client: "Client: 'A.Baldryan'",
      address: "",
      profile: armenBaldryanProfile,
      images: [armenBaldryanProfile, armenBaldryan1, armenBaldryan2, armenBaldryan4, armenBaldryan5]

    },
    {
      id: 2,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      date: "Year of Design: 2001",
      client: "Client: 'A.Mkrtchyan'",
      address: "",
      profile: araikProfile,
      images: [araikProfile, araik1, araik2, araik4]

    },
    {
      id: 3,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      date: "Year of Design: 2005",
      client: "Client: 'A.Khachatryan'",
      address: "",
      profile: armenVahagniProfile,
      images: [armenVahagniProfile, armenVahagni1, armenVahagni3, armenVahagni4]

    },
    {
      id: 4,
      title: "Multifunctional Residential Structure",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      date: "Year of Design: 2012",
      client: "Client: 'V.Gevorgyan'",
      address: "Address: P.Buzand street 45",
      profile: buzandProfile,
      images: [buzandProfile, buzand1, buzand2, buzand3, buzand5]

    },
    {
      id: 5,
      title: "Multifunctional Residential Structure",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      date: "Year of Design: 2004",
      client: "Client: 'FoxFord' LLC",
      address: "Address: E.Charenc street 24",
      profile: charencProfile,
      images: [charencProfile, charenc1, charenc2, charenc3, charenc4, charenc5, charenc6, charenc7, charenc8, charenc9]

    },
    {
      id: 6,
      title: "Single House",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      date: "Year of Design: 2007",
      client: "Client: 'M.Ghazaryan'",
      address: "",
      profile: manvelProfile,
      images: [manvelProfile, manvel1, manvel5 ,manvel6]

    },
    {
      id: 7,
      title: `"Vitesse" Store and Service center`,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      date: "Year of Design: 2007",
      client: "Client: 'Zigi Resources'",
      address: "Address: Avan Acharyan street 41/3",
      profile: vitessProfile,
      images: [vitessProfile, vitess1, vitess2, vitess3]

    },
    {
      id: 8,
      title: "Microbial Farm",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      date: "Year of Design: 2015",
      client: "Client: 'Greta Grigoryan'",
      address: "Address: Armavir city, Voskehat community, str. Friendship 126",
      profile: laboratory1Profile,
      images: [laboratory1Profile, laboratory1, laboratory2]

    },
    {
      id: 9,
      title: `"Zoler" complex of funeral services`,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      date: "Year of Design: 2015",
      client: "Client: 'A.Z.D. Studio LLC'",
      address: "Address: District, Hasratyan street",
      profile: zolerProfile,
      images: [zolerProfile, zoler1, zoler2, zoler3, zoler4]

    },
    {
      id: 10,
      title: "Public Building Project",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      date: "Year of Design: 2024",
      client: "Client: 'H.Hovakimyan'",
      address: "Address: RA, Kotayk region, Abovyan community, Verin Ptghni village, Boyni district, 1st street 15",
      profile: avtosrahProfile,
      images: [avtosrahProfile, avtosrah1]

    },
    {
      id: 11,
      title: "Phytosanitary Inspection Checkpoint",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      date: "Year of Design: 2018",
      client: "Client: 'KUAT'",
      address: "Address: RA Lori marz, Chochkan community, Ayrum-Jiliza",
      profile: ayrumProfile,
      images: [ayrumProfile, ayrum2, ayrum4, ayrum5, ayrum6, ayrum8]

    },
    {
      id: 12,
      title: "Multifunctional Residential Structure",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      date: "Year of Design: 2007-2008",
      client: "Client: 'Flintrig' CJSC",
      address: "Address: M.Saryan street 12",
      profile: saryanProfile,
      images: [saryanProfile, saryan1]

    },
    {
      id: 13,
      title: "Commercial space",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      date: "Year of Design: 2006",
      client: "Client: 'Sh.Tsarukyan'",
      address: "Address: Sayat-Nova Ave. 20",
      profile: zigzagProfile,
      images: [zigzagProfile, zigzag2, zigzag6, zigzag9, zigzag13]

    },
    {
      id: 14,
      title: "Public Building",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      date: "Year of Design: 2008",
      client: "Client: 'LAV-SAR LLC'",
      address: "Address: A. Mikoyan 25",
      profile: felicityProfile,
      images: [felicityProfile, felicity1, felicity2]

    },
    {
      id: 15,
      title: "Martini Royale",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      date: "Year of Design: 2013",
      client: "Client: 'Andako' LLC",
      address: "Abovyan street 16",
      profile: martiniProfile,
      images: [martiniProfile, martini1, martini2, martini3]

    },
    {
      id: 16,
      title: `Mommy "Store"`,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sedtempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation ipsumdolor sit amet consectetur adipiscing elit sed",
      date: "Year of Design: 2011",
      client: "Client: 'A. Mkrtchyan'",
      address: "Abovyan street 3/1",
      profile: mommyProfile,
      images: [mommyProfile, mommy1, mommy2]

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