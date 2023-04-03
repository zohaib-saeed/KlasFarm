import React from "react";
import Image from "next/image";

const CornMaze = () => {
  return (
    <div className="w-full max-w-[1440px] pb-16 lg:pb-24 flex flex-col items-center justify-start gap-10 lg:gap-16 px-2 xs:px-3 sm:px-4 md:px-5 mdl:px-6">
      <div className="relative w-full">
        <div className="w-full h-[260px] vsm:h-[280px] md:h-[310px] lg:h-[340px]   flex items-center justify-center relative">
          <Image
            src="/images/corn-maze/wallpaper.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <p className="text-[40px] lg:text-[45px] sxl:text-[50px] mxl:text-[60px] text-white font-mistral absolute top-[35%] left-[6%]">
          Kukuričné bludisko 2022
        </p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] mxl:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-10 mxl:gap-12 ">
        {/* Col 1 */}
        <div className="w-full flex items-center justify-start">
          <div className="w-full  xs:max-w-[85%] sm:max-w-[75%] mdl:max-w-[60%] lg:max-w-none h-[370px] vsm:h-[400px] sm:h-[550px] mdl:h-[600px] flex items-center justify-center relative">
            <Image
              src="/images/corn-maze/photo-group1.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
        {/* Col 2  */}
        <div className="w-full text-[18px] vsm:text-[20px] sxl:text-[22px] mxl:text-[25px] flex flex-col items-start justify-center  gap-3 mxl:gap-5 list-outside  list-disc text-black">
          <p>
            V roku 2022, s cieľom priniesť do regiónu{" "}
            <span className="font-bold">Lučenca</span> a{" "}
            <span className="font-bold">Veľkého Krtíša</span> niečo nové a
            netradičné, sme vybudovali dve{" "}
            <span className="font-bold">Kukuričné bludiská</span>, a to v Dolnej
            Strehovej a v Lučenci. Zámerom bolo okrem tradičného
            poľnohospodárstva ukázať, že aj v poľnohospodárstve sa dajú robiť
            zábavné a zaujímavé projekty. Taktiež sme chceli touto cestou
            poďakovať našim prenajímateľom pôdy za ich dôveru.
          </p>
          <p>
            Uvedomujeme si, že bez dôvery vlastníkov pôdy sa poľnohospodárstvo
            robiť nedá. Myšlienka vzniku kukuričných bludísk vznikla dávnejšie,
            reálne sme však s prípravou bludísk začali cca 3 mesiace pred
            otvorením. Okrem samotnej výsadby, čo bola ta najľahšia vec, bolo za
            tým mnoho ďalšej práce. Do prípravy sme zapojili aj{" "}
            <span className="font-bold">študentov</span>, ktorý sa podieľali
            hlavne na programovaní a vývoji{" "}
            <span className="font-bold">webového</span> kvízu. Samotný výsledok
            je hlavne tímová práca všetkých kolegov a sme nesmierne radi, že sa
            nám to podarilo spustiť aj napriek problémom. Proti nám bolo hlavne
            počasie, lebo veľmi málo pršalo a kukurica nechcela rásť.
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] mxl:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-10 mxl:gap-12">
        {/* Col 1  */}
        <div className="order-2 lg:order-1 w-full text-[18px] vsm:text-[20px] sxl:text-[22px] mxl:text-[25px] flex flex-col items-start justify-center  gap-3 mxl:gap-5 list-outside  list-disc text-black">
          <p>
            <span className="font-bold">Mottom</span> našich bludísk v roku
            2022, bolo priblíženie poľnohospodárstva prioritne deťom, teenagerom
            a samozrejme aj dospelým, prostredníctvom kvízu, aby si uvedomili,
            že mať potraviny na stole nie je až také samozrejme a je za tým kus
            práce všetkých ľudí, ktorí pracujú v tomto odvetví.
          </p>
          <p>
            Druhým cieľom je priniesť{" "}
            <span className="font-bold">
              krajší obraz o Slovenských poľnohospodároch
            </span>
            , vzhľadom na to, že v poslednej dobe bolo dosť negatív na tento
            sektor. V ďalších rokoch chceme v tejto myšlienke pokračovať a každý
            rok priniesť niečo nové a zaujímavé našim návštevníkom z oblasti
            poľnohospodárstva.
          </p>
          <p className="italic">Tešiť sa máte na čo aj tento rok!</p>
        </div>
        {/* Col 2  */}
        <div className="order-1 lg:order-2 w-full flex items-center justify-end lg:justify-start">
          <div className="w-full  xs:max-w-[85%] sm:max-w-[75%] mdl:max-w-[60%] lg:max-w-none h-[370px] vsm:h-[400px] sm:h-[550px] mdl:h-[600px] flex items-center justify-center relative">
            <Image
              src="/images/corn-maze/photo-group2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] mxl:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-10 mxl:gap-12 ">
        {/* Col 1 */}
        <div className="w-full flex items-center justify-start">
          <div className="w-full h-[410px] xs:h-[440px] sm:h-[470px] md:h-[510px] mdl:h-[530px] lg:h-[570px] mxl:h-[600px] flex items-center justify-center relative">
            <Image
              src="/images/corn-maze/solo-photo.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
        {/* Col 2  */}
        <div className="w-full flex items-center justify-start">
          <div className="w-full  xs:max-w-[85%] sm:max-w-[75%] mdl:max-w-[60%] lg:max-w-none h-[370px] vsm:h-[400px] sm:h-[550px] mdl:h-[600px] flex items-center justify-center relative">
            <Image
              src="/images/corn-maze/photo-group3.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CornMaze;
