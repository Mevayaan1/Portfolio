// import { motion } from "framer-motion";

// export default function NavLogo() {
//   return (
//     <a href="#hero" className="flex items-center">
//       <motion.svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 32 32"
//         width="34"
//         height="34"
//         initial="idle"
//         whileHover="hover"
//       >
//         {/* Outer body */}
//         <motion.rect
//           x="2" y="3" width="28" height="22" rx="3"
//           fill="none"
//           stroke="#3DFF8F"
//           strokeWidth="1.2"
//           variants={{
//             idle: { opacity: 0.9 },
//             hover: { opacity: 1, strokeWidth: 1.5 },
//           }}
//           transition={{ duration: 0.25 }}
//         />

//         {/* Screen */}
//         <motion.rect
//           x="5" y="6" width="22" height="15" rx="1.5"
//           fill="none"
//           stroke="#3DFF8F"
//           strokeWidth="0.6"
//           variants={{
//             idle: { opacity: 0.3 },
//             hover: { opacity: 0.6 },
//           }}
//           transition={{ duration: 0.25 }}
//         />

//         {/* Scanlines — only visible on hover */}
//         {[8, 10, 12, 14, 16, 18].map((y) => (
//           <motion.rect
//             key={y}
//             x="5" y={y} width="22" height="0.35"
//             fill="#3DFF8F"
//             variants={{
//               idle: { opacity: 0 },
//               hover: { opacity: 0.08 },
//             }}
//             transition={{ duration: 0.3 }}
//           />
//         ))}

//         {/* Left eye — wink line, always closed */}
//         <motion.rect
//           x="9" y="11.5" width="4.5" height="1.2" rx="0.6"
//           fill="#3DFF8F"
//           variants={{
//             idle: { opacity: 0.85, scaleX: 1 },
//             hover: { opacity: 1, scaleX: 1.05 },
//           }}
//           style={{ originX: "11.25px", originY: "12.1px" }}
//           transition={{ duration: 0.2 }}
//         />

//         {/* Right eye — solid square, blinks on hover */}
//         <motion.rect
//           x="18.5" y="9.8" width="3.2" height="3.2" rx="0.4"
//           fill="#3DFF8F"
//           variants={{
//             idle: { scaleY: 1, opacity: 0.85 },
//             hover: {
//               scaleY: [1, 0.1, 1],
//               opacity: 1,
//             },
//           }}
//           style={{ originX: "20.1px", originY: "11.4px" }}
//           transition={{
//             duration: 0.4,
//             times: [0, 0.4, 1],
//             delay: 0.1,
//           }}
//         />

//         {/* Mouth — flat neutral line at idle, slight smile on hover */}
//         <motion.g
//           variants={{
//             idle: { opacity: 0.75 },
//             hover: { opacity: 1 },
//           }}
//           transition={{ duration: 0.2 }}
//         >
//           <rect x="10"   y="15.5" width="1.5" height="1.2" rx="0.2" fill="#3DFF8F"/>
//           <rect x="12"   y="16.2" width="1.5" height="1.2" rx="0.2" fill="#3DFF8F"/>
//           <rect x="14"   y="16.4" width="4"   height="1.2" rx="0.2" fill="#3DFF8F"/>
//           <rect x="18.5" y="16.2" width="1.5" height="1.2" rx="0.2" fill="#3DFF8F"/>
//           <rect x="20.5" y="15.5" width="1.5" height="1.2" rx="0.2" fill="#3DFF8F"/>
//         </motion.g>

//         {/* Stand neck */}
//         <motion.rect
//           x="14" y="25" width="4" height="1.4" rx="0.5"
//           fill="none"
//           stroke="#3DFF8F"
//           strokeWidth="0.9"
//           variants={{
//             idle: { opacity: 0.4 },
//             hover: { opacity: 0.7 },
//           }}
//           transition={{ duration: 0.25 }}
//         />

//         {/* Stand base */}
//         <motion.rect
//           x="10.5" y="26.5" width="11" height="1.4" rx="0.5"
//           fill="none"
//           stroke="#3DFF8F"
//           strokeWidth="0.9"
//           variants={{
//             idle: { opacity: 0.4 },
//             hover: { opacity: 0.7 },
//           }}
//           transition={{ duration: 0.25 }}
//         />

//         {/* Power dot */}
//         <motion.circle
//           cx="16" cy="24.2" r="0.7"
//           fill="#3DFF8F"
//           variants={{
//             idle: { opacity: 0.3, scale: 1 },
//             hover: { opacity: 0.9, scale: 1.4 },
//           }}
//           transition={{ duration: 0.25 }}
//         />
//       </motion.svg>
//     </a>
//   );
// }

export default function NavLogo() {
  return (
    <a href="#hero" className="flex items-center gap-1 group">
      <span className="font-mono text-base font-medium text-zinc-100 tracking-tight">
        ayaan
      </span>
      <span className="font-mono text-base font-medium text-emerald-400 tracking-tight">
        .
      </span>
    </a>
  );
}