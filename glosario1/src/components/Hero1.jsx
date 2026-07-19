import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const imgVector = "/assets/b73c7b38153a37b28c7dd09804c37c6904b4c5e3.svg";
const imgVector1 = "/assets/535dba80c4cf6f07347cf23e74be841a1b0e01e7.svg";
const imgRecurso1Postal3 = "/assets/20fd5b503f6b79dff07b513f3bc7604deafa7331.png";
const imgRecurso3PostalMorado1 = "/assets/c56c8963ea54ddce3fb1dd22c4276099b158fec3.png";

const words = [
  { id: 1, word: "Icotea", meaning: "Conocida como tortuga de monte ya que esta se encuentra en principalmente en jagüeyes y ciénegas", type: "(Animal)", img: imgRecurso1Postal3, rotate: -16.71, bg: "bg-[#464c33]" },
  { id: 2, word: "Vironda", meaning: "Bastimento de la costa, que es parecido a una papa", type: "(Para referirse)", img: imgRecurso3PostalMorado1, rotate: -7.24, bg: "bg-[#564e87]" },
  { id: 3, word: "Perrenque", meaning: "Alguien que tiene muchas ganas de hacer algo", type: "(Para referirse)", img: imgRecurso1Postal3, rotate: 2.03, bg: "bg-[#464c33]" },
  { id: 4, word: "Fundingue", meaning: "Personas que están en el desorden cuando hay una festividad", type: "(Para referirse)", img: imgRecurso3PostalMorado1, rotate: 11.74, bg: "bg-[#564e87]" },
  { id: 5, word: "Rula o sable", meaning: "Machete con cuchillo grande que tiene mucho filo y es utilizada por jornaleros", type: "(Objeto)", img: imgRecurso1Postal3, rotate: 21.55, bg: "bg-[#464c33]" },
  { id: 6, word: "Foquiao", meaning: "Persona que esta dormida profundamente", type: "(Para referirse)", img: imgRecurso3PostalMorado1, rotate: 32.29, bg: "bg-[#564e87]" },
  { id: 7, word: "Apalastrao", meaning: "Persona que tiene mucha flojera o no tiene ánimos para hacer algo", type: "(Para referirse)", img: imgRecurso1Postal3, rotate: 42.82, bg: "bg-[#464c33]" },
  { id: 8, word: "Derroche", meaning: "Acción de malgastar o desperdiciar algo", type: "(Para referirse)", img: imgRecurso3PostalMorado1, rotate: 32.56, bg: "bg-[#564e87]" },
];

function BotonExplora() {
  return (
    <div className="relative content-stretch flex flex-col items-start w-[324px] cursor-pointer hover:scale-105 transition-transform">
      <div className="bg-[#bb4c18] content-stretch flex flex-col h-[67px] items-start pb-[4px] pt-[5px] px-[11px] relative rounded-[6px] shrink-0 w-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
          <p className="font-trattatello leading-[38px] not-italic relative shrink-0 text-[#fffce6] text-[24px] tracking-[2.16px] uppercase whitespace-nowrap">
            CONOCE MÁS PALABRAS
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % words.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + words.length) % words.length);
  };

  // Create a stack where the current card is at the top
  const visibleCards = [];
  for (let i = 0; i < 4; i++) {
    const index = (currentIndex + i) % words.length;
    visibleCards.push(words[index]);
  }
  // Reverse so the current card is rendered last (on top)
  const stack = [...visibleCards].reverse();

  return (
    <div className="h-[1080px] overflow-hidden relative w-full bg-[#ffdd89]">
      <div className="absolute h-[946px] left-[55%] top-[50%] w-[776px] -translate-y-1/2">
        <img alt="" className="absolute block inset-0 max-w-none size-full object-contain" src={imgVector} />
      </div>
      
      <div className="absolute border-11 border-[#464c33] border-solid h-[842px] left-[58%] rounded-[27px] top-[10%] w-[645px] border-[11px]" />
      
      <div className="absolute left-[70%] overflow-clip size-[74px] top-1/2 -translate-y-1/2">
        <div className="absolute inset-[7.11%_16.67%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
        </div>
      </div>

      <div className="absolute bg-[#fffce6] flex flex-col h-[496px] items-start left-[5%] px-[35px] py-[60px] rounded-[44px] top-1/2 -translate-y-1/2 w-[795px] shadow-lg z-10">
        <div className="flex flex-col items-start relative shrink-0 w-[728px]">
          <p className="font-heritage leading-[61px] not-italic relative shrink-0 text-[#bb4c18] text-[48px]">
            ¿No entendiste? ¡No pasa nada, ombe!
          </p>
          <div className="flex flex-col items-start relative shrink-0 w-[711px]">
            <div className="flex flex-col font-heritage h-[96px] justify-center leading-[0] mb-[-15px] not-italic relative shrink-0 text-[64px] text-black w-full uppercase font-bold tracking-wide">
              <p className="leading-[40px]">Palabras populares</p>
            </div>
            <div className="flex flex-col gap-[14px] items-start relative shrink-0 w-full mt-4">
              <div className="flex items-center py-[6px] relative shrink-0 w-full">
                <p className="font-outfit font-medium leading-[33px] relative shrink-0 text-[26px] text-black w-[691px]">
                  {`Si te dijeron que eras un 'Bacano' o te mandaron a 'recoger una vaina', aquí te explicamos el asunto. Este glosario es la guía para entender el hablao' del pueblo. Referencias locales y toda esa jerga que nos hace únicos en el mapa.`}
                </p>
              </div>
              <div className="mt-8">
                <BotonExplora />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute flex gap-[50px] items-center left-[60%] top-[822px] z-20">
        <button onClick={prevCard} className="bg-[#bb4c18] flex h-[75px] items-center justify-center px-[30px] rounded-[6px] cursor-pointer hover:bg-[#a03d10] transition-colors">
          <p className="font-heritage text-[#fffce6] text-[48px] uppercase tracking-wider">Ant.</p>
        </button>
        <button onClick={nextCard} className="bg-[#bb4c18] flex h-[75px] items-center justify-center px-[30px] rounded-[6px] cursor-pointer hover:bg-[#a03d10] transition-colors">
          <p className="font-heritage text-[#fffce6] text-[48px] uppercase tracking-wider">Sig.</p>
        </button>
      </div>

      <div className="absolute flex h-[700px] items-center justify-center left-[55%] top-[10%] w-[700px]">
        <AnimatePresence mode="popLayout">
          {stack.map((item, i) => {
            const isTop = i === stack.length - 1;
            return (
              <motion.div
                key={item.id}
                layoutId={`card-${item.id}`}
                initial={{ opacity: 0, scale: 0.8, y: 50, rotate: item.rotate - 10 }}
                animate={{ opacity: 1, scale: isTop ? 1 : 1 - (stack.length - 1 - i) * 0.05, y: isTop ? 0 : (stack.length - 1 - i) * 20, rotate: item.rotate }}
                exit={{ opacity: 0, scale: 1.2, x: 200, rotate: item.rotate + 10 }}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
                className="absolute flex-none"
                style={{ zIndex: i }}
              >
                <div className="h-[569px] relative w-[461px]">
                  <div className="absolute inset-0">
                    <img alt="" className="absolute inset-0 object-cover pointer-events-none size-full" src={item.img} />
                    <div className={`absolute ${item.bg} border-[#e8981b] border-[3.7px] border-solid inset-[4.13%_4.29%] rounded-[34px]`} />
                  </div>
                  <div className="absolute flex flex-col items-center left-[39px] top-[82px] w-[381px] h-full text-center">
                    <div className="flex h-[70px] items-center justify-center w-full mt-4">
                      <p className="font-trattatello text-[#fffce6] text-[58px] tracking-[2.3px]">
                        {item.word}
                      </p>
                    </div>
                    <p className="font-outfit text-[#fffce6] text-[29px] mt-10">Significado:</p>
                    <div className="flex items-center justify-center w-full px-8 mt-2 h-[120px]">
                      <p className="font-outfit text-[#fffce6] text-[26px] leading-[30px]">
                        {item.meaning}
                      </p>
                    </div>
                    <p className="font-trattatello text-[39px] text-[rgba(255,252,230,0.75)] tracking-[1.5px] mt-8">
                      {item.type}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
