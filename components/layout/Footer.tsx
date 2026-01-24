// import Link from "next/link";
// import { Instagram, Facebook, Twitter } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/Input";


// export default function Footer() {
//   return (
//     <footer className="bg-emerald-primary text-cream-primary mt-auto">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div>
//             <h3 className="brillant text-xl mb-4 text-gold-primary">
//               A3 Jewelry
//             </h3>
//             <p className="text-sm text-cream-primary/80 leading-relaxed">
//               Where heritage meets contemporary elegance. Crafting timeless
//               pieces since 2020.
//             </p>
//             <div className="flex gap-3 mt-4">
//               <Link
//                 href="https://instagram.com"
//                 target="_blank"
//                 className="hover:text-gold-primary transition-colors"
//               >
//                 <Instagram className="h-5 w-5" />
//               </Link>
//               <Link
//                 href="https://facebook.com"
//                 target="_blank"
//                 className="hover:text-gold-primary transition-colors"
//               >
//                 <Facebook className="h-5 w-5" />
//               </Link>
//               <Link
//                 href="https://twitter.com"
//                 target="_blank"
//                 className="hover:text-gold-primary transition-colors"
//               >
//                 <Twitter className="h-5 w-5" />
//               </Link>
//             </div>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4 text-gold-primary">Shop</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link
//                   href="/collections"
//                   className="hover:text-gold-primary transition-colors"
//                 >
//                   Collections
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/rings"
//                   className="hover:text-gold-primary transition-colors"
//                 >
//                   Rings
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/necklaces"
//                   className="hover:text-gold-primary transition-colors"
//                 >
//                   Necklaces
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/earrings"
//                   className="hover:text-gold-primary transition-colors"
//                 >
//                   Earrings
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/bracelets"
//                   className="hover:text-gold-primary transition-colors"
//                 >
//                   Bracelets
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4 text-gold-primary">
//               Customer Care
//             </h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link
//                   href="/contact-us"
//                   className="hover:text-gold-primary transition-colors"
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/shipping"
//                   className="hover:text-gold-primary transition-colors"
//                 >
//                   Shipping
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/returns"
//                   className="hover:text-gold-primary transition-colors"
//                 >
//                   Returns
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/sizing-guide"
//                   className="hover:text-gold-primary transition-colors"
//                 >
//                   Sizing Guide
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/faq"
//                   className="hover:text-gold-primary transition-colors"
//                 >
//                   FAQ
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4 text-gold-primary">
//               Stay Connected
//             </h4>
//             <p className="text-sm text-cream-primary/80 mb-4">
//               Subscribe for exclusive offers and updates.
//             </p>
//             <div className="flex gap-2">
//               <Input
//                 type="email"
//                 placeholder="Your email"
//                 className="bg-cream-white/10 border-cream-white/20 text-cream-primary placeholder:text-cream-primary/50"
//               />
//               <Button variant="gold" size="sm">
//                 Join
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-cream-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream-primary/60">
//           <p>&copy; 2024 A3 Fine Jewelry. All rights reserved.</p>
//           <div className="flex gap-6">
//             <Link
//               href="/privacy"
//               className="hover:text-gold-primary transition-colors"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               href="/terms"
//               className="hover:text-gold-primary transition-colors"
//             >
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
