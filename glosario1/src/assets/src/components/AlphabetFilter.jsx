import { motion } from 'framer-motion';

const alphabet = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "Ñ", "O",
  "P", "Q", "R", "S", "T", "V", "Y", "Z"
];

export default function AlphabetFilter() {
  return (
    <div className="w-full relative flex flex-col items-center justify-center py-20 bg-transparent min-h-[500px]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-[1238px] px-10 sm:px-20 py-16"
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-[rgba(217,217,217,0.1)] border border-[rgba(210,136,94,0.1)] rounded-[38px] shadow-[0px_4px_147px_15px_rgba(187,76,24,0.5)] z-[-1]" />
        
        <div className="flex flex-col gap-8 items-center justify-center">
          <h3 className="font-outfit font-semibold text-[#1a0f08] text-[45px] text-center">
            Palabras que empiezan con...
          </h3>
          
          <div className="flex flex-wrap gap-[14px] items-center justify-center max-w-[800px]">
            {alphabet.map((letter, index) => {
              const bgColor = index % 2 === 0 ? 'bg-[#464c33]' : 'bg-[#564e87]';
              return (
                <motion.button 
                  key={letter}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${bgColor} w-[45px] h-[45px] rounded-[8px] flex items-center justify-center cursor-pointer shadow-md transition-colors`}
                >
                  <span className="font-outfit font-medium text-[#fffce6] text-[24px] tracking-wide mt-1">
                    {letter}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
