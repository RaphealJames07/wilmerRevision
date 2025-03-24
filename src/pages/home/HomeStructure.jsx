import HomeHero from "./components/HomeHero"
import HomeNewsLetter from "./components/HomeNewsLetter"
import HomeShopThree from "./components/HomeShopThree"
import HomeShopTwo from "./components/HomeShopTwo"
import HomeSneakerBrands from "./components/HomeSneakerBrands"
import HomeStreetWearBrands from "./components/HomeStreetWearBrands"
import HomeTopTag1 from "./components/HomeTopTag1"
import HomeTrendy from "./components/HomeTrendy"
import MarqueeTexts from "./components/Marquee"


const HomeStructure = () => {
  return (
    <div className="w-full h-max">
      <HomeHero/>
      <MarqueeTexts />
      <HomeTopTag1/>
      <HomeTrendy/>
      <HomeShopTwo/>
      <HomeShopThree/>
      <HomeSneakerBrands/>
      <HomeStreetWearBrands/>
      <HomeNewsLetter/>
    </div>
  )
}

export default HomeStructure