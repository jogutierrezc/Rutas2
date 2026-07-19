import { motion } from 'framer-motion';

const imgRecurso1Postal3 = "/assets/20fd5b503f6b79dff07b513f3bc7604deafa7331.png";
const imgRecurso3PostalMorado1 = "/assets/c56c8963ea54ddce3fb1dd22c4276099b158fec3.png";

const sampleWords = [
  { id: 1, word: "Asiento", meaning: "Silla de madera con cuero de vaca disecado", type: "(Objeto)", bg: "bg-[#464c33]", img: imgRecurso1Postal3 },
  { id: 2, word: "Avispao", meaning: "Persona que aprovecha las circunstancias para sacar ventajas", type: "(Para referirse)", bg: "bg-[#464c33]", img: imgRecurso1Postal3 },
  { id: 3, word: "Azulejo", meaning: "Baldosa con motivos únicos que se utiliza en casas antiguas", type: "(Objeto)", bg: "bg-[#464c33]", img: imgRecurso1Postal3 },
  { id: 4, word: "Bacano", meaning: "Algo que se siente, se ve o se percibe bueno y bonito", type: "(Para referirse)", bg: "bg-[#564e87]", img: imgRecurso3PostalMorado1 },
  { id: 5, word: "Batea", meaning: "Recipiente cóncavo", type: "(Objeto)", bg: "bg-[#564e87]", img: imgRecurso3PostalMorado1 },
];

export default function SubmitWordSection() {
  return (
    <div className="w-full relative flex items-center justify-center py-24 bg-[#f8ecbe] overflow-hidden">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center gap-16 px-10">
        
        {/* Left Side: Cards */}
        <div className="w-full lg:w-1/2 relative h-[800px] flex gap-6 overflow-hidden">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 animate-[marquee_20s_linear_infinite] mt-[-100px]">
            {[...sampleWords, ...sampleWords].map((item, i) => (
              <motion.div 
                key={`col1-${i}`}
                whileHover={{ scale: 1.05 }}
                className="relative w-[300px] h-[370px] shrink-0"
              >
                <div className="absolute inset-0">
                  <img alt="" className="absolute inset-0 object-cover pointer-events-none size-full" src={item.img} />
                  <div className={`absolute ${item.bg} border-[#e8981b] border-[2.5px] border-solid inset-[4.13%_4.29%] rounded-[24px]`} />
                </div>
                <div className="absolute flex flex-col items-center left-[25px] top-[50px] w-[250px] h-full text-center">
                  <p className="font-trattatello text-[#fffce6] text-[40px] tracking-wide mt-2">
                    {item.word}
                  </p>
                  <p className="font-outfit text-[#fffce6] text-[18px] mt-4 mb-2">Significado:</p>
                  <p className="font-outfit text-[#fffce6] text-[16px] leading-[22px] px-4 h-[70px]">
                    {item.meaning}
                  </p>
                  <p className="font-trattatello text-[24px] text-[rgba(255,252,230,0.75)] tracking-[1.5px] mt-4">
                    {item.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 animate-[marqueeReverse_20s_linear_infinite]">
            {[...sampleWords].reverse().concat([...sampleWords].reverse()).map((item, i) => (
              <motion.div 
                key={`col2-${i}`}
                whileHover={{ scale: 1.05 }}
                className="relative w-[300px] h-[370px] shrink-0"
              >
                <div className="absolute inset-0">
                  <img alt="" className="absolute inset-0 object-cover pointer-events-none size-full" src={item.img} />
                  <div className={`absolute ${item.bg} border-[#e8981b] border-[2.5px] border-solid inset-[4.13%_4.29%] rounded-[24px]`} />
                </div>
                <div className="absolute flex flex-col items-center left-[25px] top-[50px] w-[250px] h-full text-center">
                  <p className="font-trattatello text-[#fffce6] text-[40px] tracking-wide mt-2">
                    {item.word}
                  </p>
                  <p className="font-outfit text-[#fffce6] text-[18px] mt-4 mb-2">Significado:</p>
                  <p className="font-outfit text-[#fffce6] text-[16px] leading-[22px] px-4 h-[70px]">
                    {item.meaning}
                  </p>
                  <p className="font-trattatello text-[24px] text-[rgba(255,252,230,0.75)] tracking-[1.5px] mt-4">
                    {item.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Text & CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pr-10"
        >
          <h2 className="font-heritage text-[#bb4c18] text-[75px] font-bold tracking-wide leading-[80px]">
            ¿Falta alguna vaina?
          </h2>
          <h3 className="font-outfit font-semibold text-black text-[24px] tracking-widest uppercase mt-6 mb-4">
            ¡No te quedes con la palabra en la boca!
          </h3>
          <p className="font-outfit font-medium text-black text-[22px] leading-[32px] max-w-[600px] mb-10">
            Si te sabes un término bien valduparense que no aparece aquí, escríbelo ya mismo con su significado. ¡Haz que tu palabra sea parte del patrimonio del Valle!
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#bb4c18] hover:bg-[#a03d10] transition-colors py-4 px-8 rounded-[6px] shadow-lg"
          >
            <span className="font-heritage text-[#fffce6] text-[24px] tracking-[2px] uppercase">
              Escribe tu palabra
            </span>
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
