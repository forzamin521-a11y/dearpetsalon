'use client'

import React, { Suspense, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
// import Spline from '@splinetool/react-spline' 
import { Phone, Check, Scissors, Heart, Calendar, Star, MapPin, X, Instagram } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
   Card,
   CardContent,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"

// NOTE: If you have a Spline URL, uncomment the import above and the component below.
// const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function LandingPage() {
   const { scrollY } = useScroll();
   const y1 = useTransform(scrollY, [0, 500], [0, 200]);
   const [selectedImage, setSelectedImage] = useState<string | null>(null);

   return (
      <main className="relative min-h-screen overflow-hidden selection:bg-secondary selection:text-secondary-foreground font-sans">

         {/* Sticky Top Nav (Transparent) */}
         <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-exclusion text-[#FDFBF7]">
            <div className="text-xl font-heading font-bold tracking-widest uppercase cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
               디어펫<span className="font-light">살롱</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm tracking-wide font-medium">
               <a href="#about" className="hover:opacity-70 transition-opacity">서비스 소개</a>
               <a href="#gallery" className="hover:opacity-70 transition-opacity">스타일 제안</a>
               <a href="#reviews" className="hover:opacity-70 transition-opacity">고객 후기</a>
               <a href="#contact" className="hover:opacity-70 transition-opacity">오시는 길</a>
            </div>
         </nav>

         {/* --- HERO SECTION --- */}
         <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">

            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
               <Image
                  src="/images/fur-bg.png"
                  alt="Fur Texture"
                  fill
                  className="object-cover opacity-60 mix-blend-multiply"
                  priority
               />
            </div>

            <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-6">

               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6 md:space-y-8"
               >
                  <span className="inline-block border border-primary/20 bg-white/50 backdrop-blur-sm text-xs md:text-sm font-bold tracking-wider text-primary py-2 px-4 rounded-full">
                     수원 곡반정동 프리미엄 펫 살롱
                  </span>

                  {/* 자연스러운 줄바꿈을 위해 break-keep 및 반응형 폰트 사이즈 조절 */}
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold leading-[1.2] tracking-tight text-foreground break-keep">
                     가위 끝에서 피어나는<br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                        아이만의 눈부신 순간
                     </span>
                  </h1>

                  <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-lg leading-relaxed break-keep">
                     기계적인 미용이 아닌, 따뜻한 교감을 나눕니다.<br />
                     섬세한 디테일로 아이의 숨겨진 아름다움을 찾아드려요.
                  </p>

                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="inline-block pt-4"
                  >
                     <Button size="lg" className="rounded-full px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all" asChild>
                        <a href="tel:01095002938">
                           상담 및 예약 문의하기
                        </a>
                     </Button>
                  </motion.div>
               </motion.div>

               <motion.div
                  style={{ y: y1 }}
                  className="relative hidden md:block h-[600px] w-full"
               >
                  {/* Hero Image */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[380px] md:w-[480px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50 rotate-3 transition-transform hover:rotate-0 duration-700">
                     <Image
                        src="/images/hero-dog-new.jpg"
                        alt="비숑 프리제 가위컷"
                        fill
                        className="object-cover"
                        priority
                     />
                  </div>
                  {/* Badge */}
                  <div className="absolute -bottom-10 right-20 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-lg max-w-[240px] z-20 border border-primary/10">
                     <p className="font-heading text-lg font-bold text-primary">Detail Work</p>
                     <p className="text-sm text-muted-foreground mt-1">아이의 체형과 모질에 맞춘<br />맞춤형 디자인 컷</p>
                  </div>
               </motion.div>

            </div>
         </section>

         {/* --- SOLUTION SECTION (Cards Grid) --- */}
         <section id="about" className="py-24 bg-white relative">
            <div className="container px-6 mx-auto">
               <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Dearpet Salon?</h2>
                  <p className="text-muted-foreground break-keep text-lg">
                     획일화된 미용이 아닌, 아이에게 가장 잘 어울리는 스타일을 디자인합니다.<br />
                     클리핑이 필요한 곳은 안전하게, 스타일이 필요한 곳은 가위로 섬세하게.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="border-none shadow-lg bg-soft-beige/50 hover:bg-soft-beige transition-colors duration-300">
                     <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-mute-rose flex items-center justify-center mb-4 text-white">
                           <Heart className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl font-bold">스트레스 최소화</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-muted-foreground leading-relaxed break-keep">
                           기계 사용을 필요한 부분으로 최소화하고, 부드러운 가위질과 핸들링으로 예민한 아이들도 편안하게 미용을 받을 수 있도록 배려합니다.
                        </p>
                     </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg bg-soft-beige/50 hover:bg-soft-beige transition-colors duration-300">
                     <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 text-white">
                           <Scissors className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl font-bold">맞춤형 성형 미용</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-muted-foreground leading-relaxed break-keep">
                           아이마다 다른 두상, 골격, 모량을 정밀 분석합니다. 단점을 자연스럽게 커버하고 장점은 극대화하는 '성형 컷'을 경험해보세요.
                        </p>
                     </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg bg-soft-beige/50 hover:bg-soft-beige transition-colors duration-300">
                     <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-dark-charcoal flex items-center justify-center mb-4 text-white">
                           <Check className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl font-bold">오래가는 예쁨</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-muted-foreground leading-relaxed break-keep">
                           정교한 가위 컷으로 마무리하여 털 끝 손상이 적고, 털이 자라날 때도 라인이 자연스럽게 유지되어 미용 직후의 예쁨이 오래 지속됩니다.
                        </p>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </section>

         {/* --- GALLERY SECTION --- */}
         <section id="gallery" className="py-24 bg-soft-beige">
            <div className="container px-6 mx-auto">
               <div className="flex justify-between items-end mb-12">
                  <div>
                     <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">Signature Styles</h2>
                     <p className="text-muted-foreground font-medium">디어펫만의 감성 스타일 제안</p>
                  </div>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
                  {[
                     "/images/style-1.png",
                     "/images/style-2.png",
                     "/images/style-3.png",
                     "/images/style-4.png",
                  ].map((img, i) => (
                     <motion.div
                        key={i}
                        className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 cursor-zoom-in bg-gray-100"
                        whileHover={{ y: -5 }}
                        onClick={() => setSelectedImage(img)}
                     >
                        <Image
                           src={img}
                           alt={`Signature Style ${i + 1}`}
                           fill
                           quality={100}
                           unoptimized
                           className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                           <span className="bg-white/90 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                              크게 보기
                           </span>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* --- REVIEW SECTION (New) --- */}
         <section id="reviews" className="py-24 bg-white relative">
            <div className="container px-6 mx-auto">
               <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Happy Moments</h2>
                  <p className="text-muted-foreground">다녀가신 견주님들의 솔직한 이야기</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {[
                     {
                        name: "망고 맘",
                        text: "맨날 집에서 미용했었는데, 역시 전문가는 달라요!!!! 사장님도 넘 친절하시고, 원하는대로 너무 예쁘게 잘잘라주셔서 만족합니다!!! 앞으로 여기 정착하려구요! 강추합니다!",
                        rating: 5,
                        img: "/images/review-3.png"
                     },
                     {
                        name: "두부 맘",
                        text: "올때마다 항상 만족스럽습니다ㅠㅠ💜 서울에서 여기까지 오는게 하나도 아쉬울게없을정도로 너무너무 좋아요. 견주로써 내눈에만 이쁜 내아가들인데, 저도 저희 애들말고는 다른 강아지는 그렇게 이뻐하지도 않거든요. 그런데 애들을 너무너무 이뻐해주고... 항상 감사하게생각해요 또올게요👍💜💜",
                        rating: 5,
                        img: "/images/review-2.png"
                     },
                     {
                        name: "구름이 맘",
                        text: "방문 할 때마다 기분 좋아져요 사장님이 가위컷을 정말 잘 하시고 반려견을 더욱 사랑스럽고 이쁘게 만들어 주세요 곰돌이컷 / 알머리컷 / 다리 스포팅 으로 진행했었는데 미용 맡길 때 마다 너무 만족하고 사장님 실력에 감탄해요😊💛👍🏻",
                        rating: 5,
                        img: "/images/review-1.png"
                     }
                  ].map((review, i) => (
                     <Card key={i} className="border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-gray-50/50 hover:bg-white flex flex-col">
                        <div
                           className="relative h-64 w-full overflow-hidden cursor-zoom-in group"
                           onClick={() => setSelectedImage(review.img)}
                        >
                           <Image
                              src={review.img}
                              alt={review.name}
                              fill
                              quality={100}
                              unoptimized
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                           />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <span className="bg-white/90 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                                 크게 보기
                              </span>
                           </div>
                        </div>
                        <CardHeader className="pb-2 pt-6">
                           <div className="flex gap-1 mb-2">
                              {[...Array(review.rating)].map((_, i) => (
                                 <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                           </div>
                           <CardTitle className="text-lg font-bold">{review.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                           <p className="text-muted-foreground text-sm leading-relaxed break-keep line-clamp-4">
                              "{review.text}"
                           </p>
                        </CardContent>
                     </Card>
                  ))}
               </div>

               <div className="text-center">
                  <Button variant="outline" size="lg" className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors gap-2" asChild>
                     <a
                        href="https://map.naver.com/p/search/%EA%B3%A1%EB%B0%98%EC%A0%95%EB%8F%99%20%EC%95%A0%EA%B2%AC%EB%AF%B8%EC%9A%A9/place/1887924058?c=15.00,0,0,0,dh&placePath=/review"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <p className="font-bold">네이버 방문자 리뷰 더보기</p>
                        <MapPin className="w-4 h-4" />
                     </a>
                  </Button>
               </div>
            </div>
         </section>

         {/* --- PHILOSOPHY SECTION --- */}
         <section id="philosophy" className="py-32 bg-dark-charcoal text-soft-beige relative overflow-hidden">
            <div className="container px-6 mx-auto relative z-10 text-center">
               <Scissors className="w-12 h-12 mx-auto mb-8 text-mute-rose opacity-90" />
               <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight break-keep">
                  "속도가 아닌,<br className="hidden md:block" />
                  <span className="text-mute-rose">완성도에 집중합니다."</span>
               </h2>
               <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed break-keep">
                  우리는 공장형 미용을 지양합니다.<br />
                  한 아이에게 충분한 시간을 쏟아, 안전하고 아름다운 결과를 약속합니다.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
                  <div className="p-8 border border-white/20 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors shadow-inner">
                     <div className="mb-6 text-mute-rose"><Calendar className="w-10 h-10" /></div>
                     <h4 className="text-xl font-bold mb-3 text-white">100% 예약제 운영</h4>
                     <p className="text-base text-gray-300 leading-relaxed font-light break-keep">
                        충분한 상담과 교감을 위해 예약제로만 운영됩니다. 아이의 컨디션을 최우선으로 하여 쫓기듯 미용하지 않습니다.
                     </p>
                  </div>
                  <div className="p-8 border border-white/20 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors shadow-inner">
                     <div className="mb-6 text-mute-rose"><Heart className="w-10 h-10" /></div>
                     <h4 className="text-xl font-bold mb-3 text-white">개방형 미용실</h4>
                     <p className="text-base text-gray-300 leading-relaxed font-light break-keep">
                        투명한 유리창을 통해 미용 과정을 보호자님이 직접 확인하실 수 있습니다. 숨기지 않는 정직함으로 신뢰를 드립니다.
                     </p>
                  </div>
                  <div className="p-8 border border-white/20 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors shadow-inner">
                     <div className="mb-6 text-mute-rose"><Check className="w-10 h-10" /></div>
                     <h4 className="text-xl font-bold mb-3 text-white">안전 최우선 원칙</h4>
                     <p className="text-base text-gray-300 leading-relaxed font-light break-keep">
                        미용 완성도보다 중요한 것은 아이의 안전입니다. 싫어하는 입질이 심한 경우 억지로 진행하지 않고, 달래가며 천천히 진행합니다.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <footer id="contact" className="bg-[#222] text-white/30 py-12 text-center text-sm">
            <div className="flex justify-center mb-6">
               <a
                  href="http://instagram.com/dear.petsalon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all group"
                  aria-label="Instagram"
               >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
               </a>
            </div>
            <p className="mb-2">수원시 권선구 동수원로146번길 73 태선빌딩 1층 디어펫 살롱</p>
            <p>&copy; 2026 Dearpet Salon. All rights reserved.</p>
         </footer>

         {/* --- STICKY CTA --- */}
         <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs md:max-w-sm">
            <motion.div
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
               <Button size="lg" className="w-full rounded-full bg-mute-rose text-dark-charcoal hover:bg-white hover:text-black transition-all h-14 text-lg shadow-2xl border border-white/20" asChild>
                  <a href="tel:01095002938" className="flex items-center justify-center gap-3">
                     <Phone className="w-5 h-5 fill-current" />
                     <span className="font-bold tracking-wide">전화 상담 연결</span>
                  </a>
               </Button>
            </motion.div>
         </div>

         {/* --- IMAGE MODAL --- */}
         <AnimatePresence>
            {selectedImage && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedImage(null)}
                  className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
               >
                  <div className="relative w-full max-w-5xl h-[80vh] md:h-[90vh]">
                     <Image
                        src={selectedImage}
                        alt="Full size review"
                        fill
                        unoptimized
                        quality={100}
                        className="object-contain" // Shows full image without crop
                        priority
                     />
                     <button
                        onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                        className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
                     >
                        <X className="w-6 h-6" />
                     </button>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

      </main>
   )
}
