import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          key={currentSlideData.index}
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          <Header />
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "/1.png",
    title: "Assassin's Creed Temasek",
    description:
      "Navigate the bustling trade and political intrigues of ancient Singapore, where every street and alley tells a story of empires.",
      location: "Singapore",
  },
  {
    img: "/2.png",
    title: "Assassin's Creed Ledang",
    description:
      "Uncover the mystical secrets of Mount Ledang, where legends whisper and hidden treasures await in the heart of Johor.",
    location: "Johor",
  },
  {
    img: "/3.png",
    title: "Assassin's Creed Nusantara",
    description:
      "Embark on a maritime adventure across the diverse islands of Nusantara, from the courts of sultans to the untamed frontiers of Palembang.",
    location: "Palembang",
  },
  {
    img: "/4.png",
    title: "Assassin's Creed Borneo",
    description:
      "Delve into the heart of Borneo's untamed rainforests, where ancient traditions clash with colonial conquests in the shadows of Sabah.",
    location: "Sabah",
  },
  {
    img: "/7.png",
    title: "Assassin's Creed Keris",
    description:
      "Explore the cultural heritage of Malacca, a melting pot of civilizations, all vying for control of the legendary Keris.",
    location: "Malacca",
  },
];

const initData = sliderData[0];
