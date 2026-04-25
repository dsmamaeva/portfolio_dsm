/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Hero from "./components/Hero";
import { Mail, Phone, Instagram, Send, ExternalLink, ArrowRight, Sparkles, ChevronDown, X } from "lucide-react";
import Markdown from "react-markdown";
import { experienceData } from "./data/experience";
import { articlesData } from "./data/articles";

const Section = ({ id, title, number, children, className = "", variant = "light" }: { id: string, title: string, number: string, children: React.ReactNode, className?: string, variant?: "light" | "dark" | "pink" | "blue" | "light-blue" }) => {
  const bgStyles = {
    light: "bg-brand-offwhite text-brand-grey",
    dark: "bg-brand-charcoal text-white",
    pink: "bg-brand-pink text-brand-charcoal",
    blue: "bg-brand-blue text-white",
    "light-blue": "bg-brand-light-blue text-brand-grey"
  };

  const titleStyles = {
    light: "text-brand-charcoal",
    dark: "text-white",
    pink: "text-brand-charcoal",
    blue: "text-white",
    "light-blue": "text-brand-charcoal"
  };

  const accentStyles = {
    light: "text-brand-vibrant-pink",
    dark: "text-brand-pink",
    pink: "text-white",
    blue: "text-brand-pink",
    "light-blue": "text-brand-vibrant-pink"
  };

  return (
    <section id={id} className={`py-40 px-6 min-h-screen flex flex-col justify-center relative overflow-hidden ${bgStyles[variant]} ${className}`}>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={`font-sans font-black text-xs uppercase tracking-[0.8em] mb-8 block opacity-40 ${titleStyles[variant]}`}>
              STAGE {number}
            </span>
            <h2 className={`font-sans font-black text-7xl md:text-[10rem] leading-[0.75] uppercase tracking-tighter mb-6 ${titleStyles[variant]}`}>
              {title.split(' ')[0]} <br />
              <span className={`serif-italic ${accentStyles[variant]}`}>
                {title.split(' ').slice(1).join(' ')}
              </span>
            </h2>
          </motion.div>
          <div className="hidden lg:block">
            <motion.div 
              className={`w-40 h-40 rounded-full border-4 border-dashed flex items-center justify-center p-6 ${variant === 'dark' ? 'border-white/20 text-white/20' : 'border-brand-pink/30 text-brand-pink/40'}`}
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={60} />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
      
      {/* Dynamic Decorations */}
      <div className={`absolute top-1/2 -right-40 w-96 h-96 rounded-full blur-[120px] opacity-20 ${variant === 'dark' ? 'bg-brand-pink' : 'bg-brand-blue'}`} />
      <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-[120px] opacity-20 ${variant === 'dark' ? 'bg-brand-blue' : 'bg-brand-pink'}`} />
    </section>
  );
};

const ProjectTwoDetails = () => {
  const [activeTab, setActiveTab] = useState('b2b-site');

  const tabs = [
    { id: 'b2b-site', label: 'Сайт для B2B сегмента' },
    { id: 'tiktok-meet', label: 'TikTok Meet Market' },
    { id: 'audio-app', label: 'Аудиоэкскурсии' },
    { id: 'market-cards', label: 'Карточки Meet Market' },
    { id: 'short-film', label: 'Короткий метр' },
    { id: 'personal-blog', label: 'Личный блог' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'b2b-site':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <span className="px-4 py-1 bg-brand-pink/10 text-brand-pink text-[10px] font-black uppercase tracking-wider rounded-full">B2B Case Study</span>
                <h4 className="text-4xl font-black text-brand-grey lowercase tracking-tight italic">Сайт для промышленного сегмента</h4>
                <p className="text-brand-grey/70 leading-relaxed">
                  Разработка на основе «вайб-кодинга». Лендинг, на котором вы находитесь, я также создала самостоятельно с нуля!
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 block mb-1">Задача</span>
                    <p className="text-sm text-brand-grey/80">Заменить устаревший конструкторский сайт на высокотехнологичный лендинг, отвечающий запросам крупных заказчиков.</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 block mb-1">Решение</span>
                    <p className="text-sm text-brand-grey/80">Использование AI-стека позволило реализовать функционал уровня студии силами одного специалиста, сократив цикл разработки на 60%.</p>
                  </div>
                </div>
                <a href="https://dsmamaeva.github.io/lvt_test/index.html" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-pink text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-grey transition-colors">
                  Смотреть Live Demo <ArrowRight size={14} />
                </a>
              </div>
              <div className="bg-brand-grey/5 p-8 rounded-[3rem] border border-white">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-pink mb-4 block">Технический стек</span>
                <div className="flex flex-wrap gap-2">
                  {['Google Gemini', 'Perplexity Pro', 'CodiaAI', 'Figma', 'GitHub Pages'].map(tech => (
                    <span key={tech} className="px-4 py-2 bg-white text-brand-grey text-[10px] font-black rounded-lg border border-brand-grey/5 uppercase">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: '01', title: 'Анализ & Архитектура', desc: 'Аудит конкурентов и проектирование карты сайта в Figma.' },
                { num: '02', title: 'AI Generation', desc: 'Конвертация дизайна в код и кастомизация логики.' },
                { num: '03', title: 'Optimization', desc: 'Доработка адаптивности и промпт-инжиниринг UX.' }
              ].map((step, idx) => (
                <div key={idx} className="space-y-3">
                  <span className="text-3xl font-black text-brand-pink opacity-20">{step.num}</span>
                  <h5 className="font-black text-brand-grey uppercase tracking-tighter">{step.title}</h5>
                  <p className="text-xs text-brand-grey/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'tiktok-meet':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <span className="px-4 py-1 bg-brand-pink/10 text-brand-pink text-[10px] font-black uppercase tracking-wider rounded-full">SMM & Viral Marketing</span>
                <h4 className="text-4xl font-black text-brand-grey lowercase tracking-tight italic">Meet Market: TikTok Масштабирование</h4>
                <p className="text-brand-grey/70 leading-relaxed">
                  Создание SMM-стратегии: от поиска визуального языка до кратного роста охватов через анализ данных и тренды.
                </p>
                <div className="p-6 bg-brand-grey/5 rounded-[2rem] border border-white">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 block mb-2">Методология</span>
                  <p className="text-sm text-brand-grey/80 leading-relaxed">Эксперименты с форматами: от юмора к полезному контенту. Выявление паттернов виральности через техники шнуровок.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Просмотры', val: '1.7M+' },
                  { label: 'Подписчики', val: '14 → 850' },
                  { label: 'Лайки', val: '45K' },
                  { label: 'Репосты', val: '4.5K' }
                ].map((stat, idx) => (
                  <div key={idx} className="glass-card p-6 rounded-[2rem] border-white/50">
                    <div className="text-2xl font-black text-brand-pink mb-1">{stat.val}</div>
                    <div className="text-[10px] text-brand-grey/40 uppercase font-black tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((video) => (
                <div key={video} className="space-y-3">
                   <div className="aspect-[9/16] bg-brand-grey/5 rounded-[2rem] overflow-hidden border border-white">
                      <iframe 
                        className="w-full h-full"
                        src={`https://rutube.ru/play/embed/${['fed51542daf8d6fd2b3c358ed1887d1b', '73d801a8d7013639e992befd553d810c', '5471921ca1f8e55ee7d385eab4cc0715', '2b35176ea7c4e19dfc3e3fb6aa104818', 'c60ae15760954f52a150439915e611a8', '93183a0c87f4c4210a6c38dbb65e53b9', '1d8b9c40b79ad72281cdfa56f2c9fe4d', '45ce4f063dffb0def8bfc4f972f97cc1', '48522d68e2c30097b6546d5b3ac02ca6', '35c41f7780dc3ad882000b8931325755', '50c4c229ed35b48d113f843d0deeba86'][video-1]}/?p=1`} 
                        frameBorder="0" 
                        allowFullScreen>
                      </iframe>
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-brand-grey/40 text-center block">Видео {video}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'audio-app':
        return (
          <div className="py-20 text-center animate-in fade-in slide-in-from-top-4 duration-500">
             <h4 className="text-4xl font-black text-brand-grey lowercase tracking-tight italic mb-6">Приложение для аудиоэкскурсий</h4>
             <p className="text-brand-grey/70 max-w-2xl mx-auto leading-relaxed">
               Разработка интерфейса (UI/UX) для городских прогулок. Создание интуитивного плеера, интерактивных карт и визуального стиля, который не отвлекает от архитектуры города.
             </p>
          </div>
        );
      case 'market-cards':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="space-y-4">
              <span className="px-4 py-1 bg-brand-pink/10 text-brand-pink text-[10px] font-black uppercase tracking-wider rounded-full">Content Design</span>
              <h4 className="text-4xl font-black text-brand-grey lowercase tracking-tight italic">Визуальная стратегия для Telegram</h4>
              <p className="text-brand-grey/70 leading-relaxed max-w-2xl">
                Разработка серии карточек для контент-плана интернет-магазина. Фокус на чистоте композиции, читаемости смыслов и эстетике бренда.
              </p>
              <p className="text-[10px] font-black text-brand-grey/30 uppercase tracking-widest italic">Figma, Adobe Photoshop</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
               {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(i => (
                 <div key={i} className="aspect-square bg-brand-grey/5 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white">
                    <img src={`imgmm-${i}.jpeg`} alt={`Card ${i}`} className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
          </div>
        );
      case 'short-film':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <span className="px-4 py-1 bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-wider rounded-full">Film Production</span>
                <h4 className="text-4xl font-black text-brand-grey lowercase tracking-tight italic">Короткометражный фильм «Первак»</h4>
                <div className="grid grid-cols-3 gap-8">
                  {[
                    { label: 'Роль', val: 'Шоураннер' },
                    { label: 'Жанр', val: 'Драма' },
                    { label: 'Локация', val: 'СПб' }
                  ].map(meta => (
                    <div key={meta.label}>
                       <span className="text-[9px] font-black uppercase tracking-widest text-brand-grey/40 block mb-1">{meta.label}</span>
                       <span className="text-sm font-black text-brand-grey">{meta.val}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-brand-grey/70 leading-relaxed italic">
                  Полный цикл: от идеи до пост-продукшена. История о взрослении и первых серьезных выборах в декорациях Петербурга.
                </p>
                <div className="space-y-2">
                   <span className="text-[9px] font-black uppercase tracking-widest text-brand-grey/40 block">Visual References:</span>
                   <div className="flex gap-4">
                      {['F5', 'Чижики', 'Это я'].map(ref => (
                        <a key={ref} href="#" className="text-xs font-black text-brand-pink underline tracking-widest uppercase hover:text-brand-grey transition-colors">{ref}</a>
                      ))}
                   </div>
                </div>
              </div>
              <div className="flex justify-center">
                 <div className="w-64 aspect-[3/4] bg-white p-4 pb-12 shadow-2xl rotate-3 ring-1 ring-brand-grey/5 relative">
                    <img src="Frame 2.png" className="w-full h-full object-cover grayscale" />
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[8px] text-brand-grey/40">Production Frame #01</span>
                 </div>
              </div>
            </div>
            <div className="bg-brand-grey rounded-[2.5rem] overflow-hidden shadow-2xl">
               <div className="p-4 flex items-center gap-4 bg-brand-grey-dark text-white/40 font-mono text-[9px] uppercase tracking-widest border-b border-white/10">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>REC 00:24:59:12</span>
                  <span className="ml-auto">PROJECT_PETER_V1.RAW</span>
               </div>
               <div className="aspect-video">
                  <iframe 
                    className="w-full h-full"
                    src="https://rutube.ru/play/embed/dce054c2366c341d29c43160a78addf7" 
                    frameBorder="0" 
                    allowFullScreen>
                  </iframe>
               </div>
            </div>
          </div>
        );
      case 'personal-blog':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-500">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
                   <img src="IMG_3850.PNG" className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-brand-pink/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute bottom-8 left-8 px-6 py-2 bg-white rounded-full text-[10px] font-black uppercase tracking-widest">Experimental Space</div>
                </div>
                <div className="space-y-6">
                   <span className="px-4 py-1 bg-brand-pink/10 text-brand-pink text-[10px] font-black uppercase tracking-wider rounded-full">Content Lab</span>
                   <h4 className="text-4xl font-black text-brand-grey lowercase tracking-tight italic">Личный блог как полигон</h4>
                   <p className="text-brand-grey/70 leading-relaxed italic">Тестирую гипотезы, "обкатываю" стратегии и постоянно анализирую результаты.</p>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 border border-brand-grey/10 rounded-2xl">
                         <span className="text-[9px] font-black uppercase tracking-widest text-brand-grey/30 block mb-1">Focus</span>
                         <span className="text-xs font-bold text-brand-grey">Psychology / Lifestyle</span>
                      </div>
                      <div className="p-4 border border-brand-grey/10 rounded-2xl">
                         <span className="text-[9px] font-black uppercase tracking-widest text-brand-grey/30 block mb-1">Goal</span>
                         <span className="text-xs font-bold text-brand-grey">Retention Analysis</span>
                      </div>
                   </div>
                </div>
             </div>

             <div className="h-px bg-brand-grey/10 w-full" />

             <div className="space-y-20">
                {[
                  {
                    title: 'Распаковка ЗЯ',
                    video: '99afafc375cd961b229585fa9a924a95',
                    stats: 'IMG_3838.PNG',
                    analysis: 'На хорошие показатели статистики повлияли: а) оперативность - сделала обзор в числе первых; б) интрига - разные наполнения. Динамичный хук в первых 2 секундах.'
                  },
                  {
                    title: 'Рилс про хобби',
                    video: 'd3428b2ddf839e50b3c9c531e987be63',
                    stats: 'IMG_3840.PNG',
                    analysis: 'Ставка на медитативность и полезность. Тестирование корреляции трендового звука и просмотров (использовала не трендовый, но подходящий звук).'
                  },
                  {
                    title: 'Разговорное видео',
                    video: 'ac8495a7d0313d007c60f6729fcf6570',
                    stats: 'IMG_3841.PNG',
                    analysis: 'Монтаж "на коленке". Живость эмоций, актуальность темы (мошенничество) и сильное удержание за счет манеры повествования.'
                  }
                ].map((row, idx) => (
                  <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="flex gap-4">
                       <div className="w-2/3 aspect-[9/16] bg-brand-grey/5 rounded-3xl overflow-hidden border border-white">
                          <iframe className="w-full h-full" src={`https://rutube.ru/play/embed/${row.video}`} frameBorder="0" allowFullScreen />
                       </div>
                       <div className="w-1/3 aspect-square bg-brand-grey/5 rounded-2xl overflow-hidden self-end border border-white">
                          <img src={row.stats} className="w-full h-full object-cover grayscale" />
                       </div>
                    </div>
                    <div className="space-y-4 pt-8">
                       <span className="text-[10px] font-mono text-brand-pink uppercase tracking-widest">Analysis</span>
                       <h4 className="text-2xl font-black text-brand-grey italic lowercase tracking-tight">{row.title}</h4>
                       <p className="text-sm text-brand-grey/70 leading-relaxed">{row.analysis}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-full transition-all ${activeTab === tab.id ? 'bg-brand-pink text-white shadow-lg' : 'bg-brand-grey/5 text-brand-grey/40 hover:bg-brand-grey/10'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="min-h-[400px]">
        {renderContent()}
      </div>
    </div>
  );
};

const ProjectThreeDetails = () => {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex gap-2">
            <span className="px-4 py-1 bg-brand-pink/10 text-brand-pink text-[10px] font-black uppercase tracking-wider rounded-full">PR & Experience Design</span>
          </div>
          <h4 className="text-4xl font-black text-brand-grey lowercase tracking-tight italic">Летние винные сезоны Simple Wine</h4>
          <p className="text-brand-grey/70 leading-relaxed">
            Комплексная поддержка имиджевого фестиваля в Москве и Петербурге. От формирования пула лидеров мнений до управления репутацией события в реальном времени.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Гости", val: "3 500+", desc: "Посетили фестивали за сезон" },
              { label: "Media Coverage", val: "200+", desc: "Публикаций в СМИ и блогах" }
            ].map(stat => (
              <div key={stat.label} className="p-5 bg-white border border-brand-pink/10 rounded-3xl">
                <div className="text-2xl font-black text-brand-pink mb-1">{stat.val}</div>
                <div className="text-[10px] text-brand-grey/40 uppercase font-black mb-2">{stat.label}</div>
                <p className="text-[10px] text-brand-grey/60 italic leading-tight">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative group">
           <div className="aspect-[4/5] bg-brand-grey/5 rounded-[3rem] overflow-hidden border border-white rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop" alt="Simple Wine" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
           </div>
           <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-pink p-8 rounded-full flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest text-center leading-tight shadow-xl -rotate-12">
              Sold Out Event
           </div>
        </div>
      </div>

      <div className="h-px bg-brand-grey/10 w-full" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-brand-grey">
        <div className="lg:col-span-4 space-y-4">
          <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest">Business Events</span>
          <h4 className="text-3xl font-black tracking-tight leading-none">Конференции РБК <br /><span className="serif-italic lowercase text-brand-pink">в регионах</span></h4>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
           {[
             { title: "Архитектура программы", text: "Проектирование таймингов и смысловых блоков, которые удерживают внимание аудитории 4+ часа." },
             { title: "GR & Networking", text: "Организация эффективного диалога между региональными властями и предпринимателями «без галстуков»." }
           ].map((item, idx) => (
             <div key={idx} className="space-y-2">
                <h5 className="font-black uppercase text-xs tracking-widest">{item.title}</h5>
                <p className="text-sm text-brand-grey/60 leading-relaxed">{item.text}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

const ReadingProgressBar = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const totalHeight = scrollHeight - clientHeight;
        if (totalHeight === 0) setProgress(100);
        else setProgress((scrollTop / totalHeight) * 100);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }
    return () => container?.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[200] bg-brand-pink/10">
      <motion.div
        className="h-full bg-brand-pink shadow-[0_0_10px_rgba(238,194,220,0.5)]"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
    </div>
  );
};

const ArticleLongRead = ({ article, onClose }: { article: any, onClose: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (e: any) => {
      const target = e.target;
      const progress = (target.scrollTop / (target.scrollHeight - target.clientHeight)) * 100;
      setScrollProgress(progress);
    };

    const current = containerRef.current;
    current?.addEventListener('scroll', handleScroll);
    return () => current?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] bg-brand-offwhite overflow-hidden flex flex-col"
    >
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-brand-charcoal/5 z-[100]">
        <motion.div 
          className="h-full bg-brand-vibrant-pink shadow-[0_0_10px_#FF0066]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Magazine Nav Header */}
      <header className="px-6 md:px-12 py-6 border-b-2 border-brand-charcoal/5 flex justify-between items-center bg-white/90 backdrop-blur-xl z-[160]">
        <button 
          onClick={onClose}
          className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-brand-charcoal hover:text-brand-vibrant-pink transition-all active:scale-95"
        >
          <div className="w-12 h-12 rounded-full border-2 border-brand-charcoal/10 flex items-center justify-center group-hover:border-brand-vibrant-pink group-hover:bg-brand-vibrant-pink group-hover:text-white transition-all transform group-hover:rotate-180">
            <ArrowRight size={20} className="rotate-180" />
          </div>
          <span className="hidden sm:inline">BACK TO INDEX</span>
        </button>

        <div className="flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-charcoal/20 mb-1">LONGREAD • ISSUE 01</span>
            <span className="text-[14px] font-serif italic text-brand-charcoal/40 font-black tracking-tight underline decoration-brand-pink underline-offset-4">Daria Mamaeva</span>
        </div>

        <button 
          onClick={onClose}
          className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-transparent hover:border-brand-charcoal/10 transition-all group"
        >
          <X size={28} className="text-brand-charcoal group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </header>

      {/* Main Container */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto overflow-x-hidden pt-16 md:pt-32 pb-48 scroll-smooth"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
            
            {/* Magazine Header Section */}
            <div className="lg:col-span-12 mb-20 md:mb-40">
              <div className="flex items-center gap-8 mb-12">
                <span className="px-6 py-2 bg-brand-charcoal text-white text-[10px] font-black uppercase tracking-[0.5em] rounded-full shadow-2xl">
                  {article.category}
                </span>
                <div className="h-[2px] flex-1 bg-brand-charcoal/10" />
                <span className="text-[11px] font-black text-brand-charcoal/40 uppercase tracking-[0.4em]">
                  {article.source || "ARCHIVE"}
                </span>
              </div>
              
              <h1 className="text-6xl md:text-[14rem] font-black text-brand-charcoal leading-[0.75] uppercase tracking-tighter mb-20 lg:pr-40 selection:bg-brand-charcoal selection:text-white">
                {article.title}
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t-4 border-brand-charcoal pt-16">
                 <div className="md:col-span-4 space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-brand-pink shrink-0 overflow-hidden border-2 border-white shadow-xl">
                          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" alt="Author" className="w-full h-full object-cover" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-brand-charcoal/30 uppercase tracking-[0.4em]">AUTHOR</p>
                          <p className="text-sm font-black uppercase tracking-tight">Daria Mamaeva</p>
                       </div>
                    </div>
                    <div className="pt-4 border-t border-brand-charcoal/5">
                       <p className="text-[10px] font-black text-brand-charcoal/30 uppercase tracking-[0.4em] mb-4">EXPERTISE</p>
                       <div className="flex flex-wrap gap-2">
                          {['Strategy', 'Media', 'PR'].map(e => (
                             <span key={e} className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-[8px] font-black uppercase tracking-widest rounded-lg border border-brand-blue/10">{e}</span>
                          ))}
                       </div>
                    </div>
                 </div>
                 <div className="md:col-span-8">
                    <p className="text-3xl md:text-5xl font-serif italic text-brand-charcoal/80 leading-snug lg:pl-12 border-l-8 border-brand-vibrant-pink">
                       {article.excerpt}
                    </p>
                 </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="lg:col-span-8 lg:col-start-3">
              <div className="prose prose-2xl prose-brand max-w-none text-brand-charcoal leading-relaxed font-light font-display selection:bg-brand-vibrant-pink selection:text-white markdown-body">
                <Markdown>{article.content}</Markdown>
              </div>
              
              {/* Sticker Style Quote / Callout */}
              <div className="mt-24 p-12 bg-white border-4 border-brand-charcoal shadow-[20px_20px_0px_0px_rgba(255,0,102,0.15)] rounded-[3rem] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12 text-brand-pink/20 -rotate-12 group-hover:scale-110 transition-transform">
                    <Sparkles size={120} />
                 </div>
                 <p className="text-4xl font-black uppercase tracking-tighter text-brand-charcoal leading-none mb-6 relative z-10 italic">
                   "Контент — это не просто текст. <br /> Это <span className="text-brand-vibrant-pink">событие</span> в голове читателя."
                 </p>
                 <div className="flex items-center gap-4 relative z-10">
                    <div className="h-[2px] w-12 bg-brand-charcoal" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-charcoal/30">INSIGHT • 2026</span>
                 </div>
              </div>
            </div>
            
            {/* Magazine Footer Info */}
            <div className="lg:col-span-12 mt-40 pt-20 border-t-2 border-brand-charcoal flex flex-col items-center gap-12 text-center pb-20">
               <div className="flex gap-16">
                  {['© 2026', 'DESIGNED BY DM', 'ISSUE 01'].map(f => (
                     <span key={f} className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-charcoal/20">{f}</span>
                  ))}
               </div>
               <Sparkles size={100} className="text-brand-pink opacity-20 floating" />
            </div>
          </article>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectFourDetails = () => {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const activeArticle = articlesData.find(a => a.id === selectedArticle);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="max-w-3xl">
        <h4 className="text-4xl font-black text-brand-grey lowercase tracking-tight italic mb-6">Работа со смыслами</h4>
        <p className="text-brand-grey/70 leading-relaxed italic">
          Текст — это не набор знаков, а инструмент влияния. В моем портфолио: аналитические обзоры, имиджевые интервью и PR-колонки. Выберите категорию материала:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articlesData.map((art) => (
          <motion.div 
            key={art.id}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => setSelectedArticle(art.id)}
            className="group relative p-8 rounded-[3rem] bg-white border border-brand-grey/5 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-brand-pink/10 transition-all flex flex-col justify-between min-h-[260px] overflow-hidden"
          >
            {/* Visual Accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-pink/5 rounded-full blur-2xl group-hover:bg-brand-pink/20 transition-all" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-start">
                <span className="px-4 py-1.5 bg-brand-blue/10 text-brand-blue text-[9px] font-black uppercase tracking-widest rounded-full">{art.type}</span>
                <div className="w-10 h-10 rounded-full bg-brand-grey/5 flex items-center justify-center text-brand-grey/20 group-hover:bg-brand-pink group-hover:text-white transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>
              <h5 className="text-xl font-black text-brand-grey group-hover:text-brand-pink transition-colors leading-tight tracking-tight uppercase">{art.title}</h5>
            </div>

            <div className="pt-6 border-t border-brand-grey/5 flex justify-between items-center relative z-10">
              <span className="text-[10px] font-black text-brand-grey/30 uppercase tracking-widest">{art.source}</span>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                 <Sparkles size={12} className="text-brand-pink" />
                 <span className="text-[8px] font-black uppercase tracking-widest text-brand-pink">READ</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedArticle && activeArticle && (
          <ArticleLongRead 
            article={activeArticle} 
            onClose={() => setSelectedArticle(null)} 
          />
        )}
      </AnimatePresence>

      <div className="p-10 rounded-[4rem] bg-brand-blue/5 border border-brand-blue/10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h4 className="text-2xl font-black uppercase tracking-tighter italic">Гострайтинг & Личный бренд</h4>
            <p className="text-sm text-brand-grey/70 leading-relaxed">
              Помогаю экспертам и топ-менеджерам находить уникальный tone-of-voice и транслировать ценности через авторские колонки и выступления. 
            </p>
            <div className="flex gap-4">
               <div className="text-center px-6 py-3 bg-white rounded-2xl border border-brand-grey/5">
                  <div className="text-xl font-black text-brand-blue">15+</div>
                  <div className="text-[8px] font-black uppercase tracking-widest text-brand-grey/40">Колонок в год</div>
               </div>
               <div className="text-center px-6 py-3 bg-white rounded-2xl border border-brand-grey/5">
                  <div className="text-xl font-black text-brand-blue">100%</div>
                  <div className="text-[8px] font-black uppercase tracking-widest text-brand-grey/40">Конфиденциальность</div>
               </div>
            </div>
          </div>
          <div className="w-48 h-48 bg-white p-6 rounded-full border-4 border-brand-blue/5 flex items-center justify-center text-brand-blue/10">
            <Mail size={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expandedProject && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [expandedProject]);

  const projects = [
    { 
      id: "01", 
      title: "Развитие медиа и охваты", 
      desc: "Масштабирование проектов и дистрибуция (КП, РБК)", 
      color: "bg-brand-pink/5", 
      textColor: "text-brand-pink",
      details: (
        <div className="mt-12 space-y-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-2">
                <span className="px-4 py-1 bg-brand-pink/10 text-brand-pink text-[10px] font-black uppercase tracking-wider rounded-full">Развитие Telegram-канала</span>
              </div>
              <h4 className="text-4xl font-black text-brand-grey lowercase tracking-tight italic">«Комсомольская правда»</h4>
              <p className="text-brand-grey/70 leading-relaxed">
                Переход от классической новостной ленты к современному медиа-формату. Внедрение рубрик, регулярного "живого" контента и интерактивных механик позволило кратно увеличить вовлеченность (ER) и органический прирост.
              </p>
              <ul className="space-y-4">
                {[
                  { label: "Органика", text: "Увеличение базы подписчиков без рекламных вложений." },
                  { label: "Виральность", text: "Рост индекса цитируемости и упоминаний." },
                  { label: "Контент", text: "Внедрение ряда рубрик, набирающих большое количество перерепостов и комментариев." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-2 shrink-0" />
                    <p className="text-sm text-brand-grey/80"><strong className="text-brand-pink uppercase tracking-widest text-[10px] mr-2">{item.label}:</strong> {item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6 justify-center">
              <div className="grid grid-cols-2 gap-4">
                 <div className="glass-card p-4 rounded-3xl border-white/50 text-center">
                    <div className="text-2xl font-black text-brand-pink mb-1">7 138</div>
                    <div className="text-[10px] text-brand-grey/40 uppercase font-black">Апрель</div>
                 </div>
                 <div className="glass-card p-4 rounded-3xl border-white/50 text-center">
                    <div className="text-2xl font-black text-brand-pink mb-1">9 394</div>
                    <div className="text-[10px] text-brand-grey/40 uppercase font-black">Август</div>
                 </div>
              </div>
              <p className="text-[10px] text-center text-brand-grey/40 uppercase tracking-[0.3em] font-black italic">Динамика прироста подписчиков КП</p>
            </div>
          </div>

          <div className="h-px bg-brand-grey/10 w-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-4">
                 {[
                   { icon: "📈", num: "70K+", label: "Уникальных охватов" },
                   { icon: "🤝", num: "100+", label: "Топ-спикеров в базе" },
                   { icon: "🌍", num: "10+", label: "Регионов-партнеров", highlight: true }
                 ].map((stat, idx) => (
                   <div key={idx} className={`p-6 rounded-[2rem] ${stat.highlight ? 'bg-brand-pink text-white shadow-xl shadow-brand-pink/20' : 'bg-white border border-brand-grey/5'} transition-all`}>
                      <span className="text-2xl block mb-2">{stat.icon}</span>
                      <div className={`text-3xl font-black leading-none mb-1 ${stat.highlight ? 'text-white' : 'text-brand-grey'}`}>{stat.num}</div>
                      <div className={`text-[9px] uppercase font-black tracking-widest opacity-60 ${stat.highlight ? 'text-white' : 'text-brand-grey'}`}>{stat.label}</div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1 bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-wider rounded-full">Бизнес и медиа</span>
                <span className="px-4 py-1 bg-brand-grey/5 text-brand-grey/40 text-[10px] font-black uppercase tracking-wider rounded-full">Казань • СПб • Регионы</span>
              </div>
              <h4 className="text-4xl font-black text-brand-grey tracking-tighter uppercase leading-none">Бизнес-день РБК</h4>
              <p className="text-brand-grey/70 leading-relaxed italic">
                Сопряжение интересов власти и крупного бизнеса через создание экспертных площадок и дистрибуцию контента.
              </p>
              <ul className="space-y-4">
                 {[
                   "Подготовка деловых программ (Девелопмент, Кадровый голод, Эффективность бизнеса).",
                   "Формирование пула из 100+ топ-спикеров и стейкхолдеров.",
                   "Создание аналитического контента для РБК Татарстан и РБК Петербург."
                 ].map((text, idx) => (
                   <li key={idx} className="flex gap-4">
                     <ArrowRight size={14} className="text-brand-blue mt-1 shrink-0" />
                     <p className="text-sm text-brand-grey/80 font-medium">{text}</p>
                   </li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: "02", 
      title: "Креативный продакшен & AI", 
      desc: "UI/UX, b2b-сайты и нейросети в производстве", 
      color: "bg-brand-blue/5", 
      textColor: "text-brand-blue",
      details: <ProjectTwoDetails />
    },
    { 
      id: "03", 
      title: "Архитектура событий", 
      desc: "Проектирование опыта и смыслов мероприятий", 
      color: "bg-brand-pink/5", 
      textColor: "text-brand-pink",
      details: <ProjectThreeDetails />
    },
    { 
      id: "04", 
      title: "Стратегические коммуникации", 
      desc: "Работа со словом: колонки, PR и гострайтинг", 
      color: "bg-brand-blue/5", 
      textColor: "text-brand-blue",
      details: <ProjectFourDetails />
    }
  ];

  return (
    <main className="bg-brand-offwhite selection:bg-brand-charcoal selection:text-white overflow-x-hidden">
      <Hero />

      {/* 01. About Me & Professional Path */}
      <Section id="about" title="Обо мне & Путь" number="01" variant="light-blue">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left Column: Personal Context */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-grey/40 mb-6">Бэкграунд</h3>
              <div className="text-lg md:text-xl text-brand-grey/80 leading-relaxed font-light space-y-8">
                <p>
                  Завершаю магистратуру по медиапроизводству. Создаю проекты на стыке <span className="font-bold text-brand-vibrant-pink underline decoration-brand-vibrant-pink underline-offset-4 decoration-2">текста, визуальной эстетики и данных</span>. 
                </p>
                <p>
                  Прошла путь от редактора ленты новостей до креативного стратега. Помогаю брендам находить свой голос и системно укреплять позиции на рынке через имиджевые ивенты и мультимедийный сторителлинг. Использую академическую базу для глубокого анализа инфополя и прикладные <span className="text-white font-bold bg-brand-vibrant-pink px-2 py-0.5 rounded">AI-инструменты</span> для создания вирального контента.
                </p>
              </div>
            </div>
            
            {/* Education Block - Visual Secondary */}
            <div className="pt-10 border-t border-brand-charcoal/10">
               <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-grey/30 mb-8">Образование</h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="flex gap-4 group">
                     <div className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center p-2 shrink-0 group-hover:scale-110 transition-transform">
                        <img src="https://www.hse.ru/favicon.ico" className="w-full h-full object-contain" alt="HSE" />
                     </div>
                     <div>
                        <p className="font-black text-brand-grey text-sm leading-tight">НИУ ВШЭ • <span className="text-brand-vibrant-pink">2026</span></p>
                        <p className="text-[10px] text-brand-grey/40 uppercase tracking-[0.2em] mt-2 leading-relaxed">«Медиапроизводство и медиааналитика»</p>
                     </div>
                  </div>
                  <div className="flex gap-4 group">
                     <div className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center p-2 shrink-0 group-hover:scale-110 transition-transform">
                        <img src="https://lengu.ru/favicon.ico" className="w-full h-full object-contain" alt="Uni" />
                     </div>
                     <div>
                        <p className="font-black text-brand-grey text-sm leading-tight">ЛГУ им. Пушкина • <span className="text-brand-vibrant-pink">2024</span></p>
                        <p className="text-[10px] text-brand-grey/40 uppercase tracking-[0.2em] mt-2 leading-relaxed">Бакалавриат «Журналистика»</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Detailed Skills & Ecosystem */}
            <div className="space-y-10">
               <div className="bg-white/40 p-10 rounded-[3.5rem] border border-white/60 space-y-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
                  <div className="absolute top-0 right-0 p-8 text-brand-charcoal/5 -rotate-12 translate-x-4 -translate-y-4">
                     <Sparkles size={120} />
                  </div>
                  <h3 className="font-sans font-black text-3xl uppercase tracking-tighter flex items-center gap-4 text-brand-charcoal relative z-10">
                    Скиллы & Магия <ArrowRight size={24} className="text-brand-vibrant-pink" />
                  </h3>
                  
                  <div className="space-y-8 relative z-10">
                    {[
                      { label: "Креативный PR & Сторителлинг", val: "98%", color: "bg-brand-vibrant-pink" },
                      { label: "Работа со СМИ & Тексты", val: "95%", color: "bg-brand-blue" },
                      { label: "SMM & New Media", val: "90%", color: "bg-brand-charcoal" },
                      { label: "AI tools & Аналитика", val: "85%", color: "bg-brand-vibrant-pink" },
                      { label: "Event-маркетинг", val: "88%", color: "bg-brand-blue" },
                      { label: "Управление репутацией", val: "82%", color: "bg-brand-charcoal" }
                    ].map((s) => (
                      <div key={s.label}>
                        <div className="flex justify-between mb-3 text-[11px] font-black uppercase tracking-[0.3em] text-brand-grey/50">
                          <span>{s.label}</span>
                          <span className="text-brand-grey">{s.val}</span>
                        </div>
                        <div className="h-3 w-full bg-brand-charcoal/5 rounded-full overflow-hidden p-0.5 border border-brand-charcoal/5">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: s.val }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className={`h-full ${s.color} rounded-full shadow-sm`} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-brand-charcoal/10 relative z-10 text-brand-grey/20">
                    <p className="text-[10px] font-bold uppercase tracking-widest leading-loose">
                      * Уровень «Продвинутый» подтвержден 5-летним опытом и академической базой.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-grey/40 mb-6 flex items-center gap-4">
                    Экосистема навыков <div className="h-[1px] flex-1 bg-gray-100" />
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Кризисный PR", "SMM", "Личный бренд", "Event-стратегии",
                      "Написание текстов", "Работа со СМИ", "Журналистика", 
                      "Редакторская деятельность", "Мониторинг СМИ", "Нейронные сети",
                      "Media Relations", "HR-брендинг", "Управление репутацией"
                    ].map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-full border border-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest bg-brand-blue/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detailed Life Outside Work */}
                <details className="group glass-card !bg-brand-beige/20 p-8 rounded-3xl border-none cursor-pointer overflow-hidden transition-all duration-500 open:pb-10">
                  <summary className="flex items-center justify-between list-none">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-pink text-white flex items-center justify-center group-open:rotate-45 transition-transform shadow-lg shadow-brand-pink/20">
                        <Sparkles size={18} />
                      </div>
                      <span className="font-sans font-black uppercase tracking-tighter text-xl">За пределами офиса</span>
                    </div>
                    <div className="text-brand-pink font-black text-2xl group-open:hidden">+</div>
                    <div className="text-brand-pink font-black text-2xl hidden group-open:block">−</div>
                  </summary>
                  <div className="mt-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-brand-grey/70 leading-relaxed font-light">
                      <div className="space-y-4">
                        <ul className="space-y-4">
                          <li><strong className="text-brand-blue uppercase text-[10px] tracking-widest block mb-1">Шитье</strong> Часть моего гардероба — это вещи, отшитые вручную на собственной машинке.</li>
                          <li><strong className="text-brand-blue uppercase text-[10px] tracking-widest block mb-1">Растения</strong> В коллекции уже 15 тропических кашпо.</li>
                          <li><strong className="text-brand-blue uppercase text-[10px] tracking-widest block mb-1">Спорт</strong> 5 лет регулярных силовых тренировок и бассейн.</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <ul className="space-y-4">
                          <li><strong className="text-brand-pink uppercase text-[10px] tracking-widest block mb-1">Чтение</strong> Знаю ~200 стихотворений наизусть.</li>
                          <li><strong className="text-brand-pink uppercase text-[10px] tracking-widest block mb-1">Вязание</strong> От шарфов-капюшонов до винтажных игрушек крючком.</li>
                          <li><strong className="text-brand-pink uppercase text-[10px] tracking-widest block mb-1">Дисциплина</strong> Похудела на 18кг, что подтверждает умение идти к целям.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>
                
                {/* Compact Contacts Block */}
                <div className="pt-12 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { label: "EMAIL", val: "ds_mamaeva@mail.ru", icon: Mail, color: "text-brand-pink" },
                    { label: "TELEGRAM", val: "@d_s_m", icon: Send, color: "text-brand-blue" },
                    { label: "PHONE", val: "8 911 244 10 34", icon: Phone, color: "text-brand-pink-dark" }
                  ].map(link => (
                    <a key={link.label} href={link.label === "EMAIL" ? `mailto:${link.val}` : "#"} className="flex items-center gap-3 group">
                      <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center ${link.color} group-hover:bg-brand-grey group-hover:text-white transition-all`}>
                        <link.icon size={18} />
                      </div>
                      <div>
                        <span className="text-[8px] font-black uppercase tracking-widest opacity-40 block">{link.label}</span>
                        <span className="text-[11px] font-bold text-brand-grey hover:text-brand-pink transition-colors">
                          {link.val}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
            </div>
          </div>

          {/* Right Column: Professional Path */}
          <div className="lg:col-span-8">
            <div className="space-y-12">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-brand-charcoal/10">
                Карьерный <br /> <span className="text-brand-charcoal">Трек</span>
              </h3>
              
              <div className="space-y-2 mt-8">
                {experienceData.map((job, index) => {
                  const isPink = index % 2 === 0;
                  const tabBg = isPink ? 'bg-brand-pink' : 'bg-brand-blue';
                  const tabText = isPink ? 'text-brand-grey' : 'text-white';
                  const bodyBg = isPink ? 'bg-white' : 'bg-brand-offwhite';
                  
                  return (
                    <motion.div 
                      key={job.id} 
                      className="group relative pt-10"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Folder Tab */}
                      <div 
                        className={`absolute top-0 left-4 h-12 px-10 flex items-center rounded-t-[2rem] ${tabBg} ${tabText} font-black text-[10px] uppercase tracking-[0.2em] z-10 shadow-sm`}
                        style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)' }}
                      >
                        {job.role}
                      </div>

                      {/* Folder Body */}
                      <details className={`group/folder relative z-0 ${bodyBg} p-10 rounded-b-[3rem] rounded-tr-[3rem] rounded-tl-[0.5rem] border-2 border-brand-charcoal/10 cursor-pointer shadow-2xl transition-all duration-500 open:pb-16 group-hover:border-brand-pink`}>
                        <summary className="list-none flex justify-between items-center">
                          <div className="space-y-2">
                            <h4 className="text-3xl font-black uppercase tracking-tighter text-brand-charcoal leading-tight">{job.company}</h4>
                            <div className="flex items-center gap-4">
                              <span className="text-[11px] font-black text-brand-vibrant-pink uppercase tracking-[0.4em]">{job.period}</span>
                              <div className="h-[2px] w-12 bg-brand-charcoal/10" />
                              <span className="text-[11px] font-bold text-brand-charcoal/30 uppercase tracking-[0.4em]">{job.id.toString().padStart(2, '0')} STAGE</span>
                            </div>
                          </div>
                          <div className="w-14 h-14 rounded-full border-2 border-brand-charcoal/5 flex items-center justify-center text-brand-pink group-open/folder:rotate-180 transition-all duration-500 shadow-sm group-hover:bg-brand-charcoal group-hover:text-white group-hover:border-brand-charcoal">
                            <ChevronDown size={28} />
                          </div>
                        </summary>

                        <div className="mt-12 space-y-12">
                          {/* Tasks */}
                          <div className="space-y-8">
                            <h5 className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-charcoal flex items-center gap-4">
                              ОСНОВНЫЕ ЗАДАЧИ <div className="h-[1px] flex-1 bg-brand-charcoal/10" />
                            </h5>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                              {job.tasks.map((task, idx) => (
                                <li key={idx} className="text-sm text-brand-charcoal/80 leading-relaxed font-medium relative pl-8 flex items-start group/task">
                                  <span className="absolute left-0 top-1.5 w-3 h-3 bg-brand-pink rounded-full grow-0 shrink-0 group-hover/task:scale-125 transition-transform" />
                                  {task}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Results */}
                          {job.results && job.results.length > 0 && (
                            <div className="space-y-8">
                              <h5 className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-blue flex items-center gap-4">
                                ДОСТИГНУТЫЕ РЕЗУЛЬТАТЫ <div className="h-[1px] flex-1 bg-brand-blue/20" />
                              </h5>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {job.results.map((res, idx) => (
                                  <div key={idx} className="p-8 rounded-[2.5rem] bg-brand-blue/5 border-2 border-brand-blue/10 relative overflow-hidden group/res">
                                    <div className="absolute -top-4 -right-4 text-brand-blue/10 rotate-12 group-hover/res:scale-110 transition-transform">
                                      <Sparkles size={60} />
                                    </div>
                                    <span className="block text-brand-blue font-black text-xs mb-3 uppercase tracking-[0.2em]">{res.label}</span>
                                    <p className="text-xs text-brand-charcoal/70 leading-relaxed font-serif italic">{res.text}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Ecosystem / Tags */}
                          {job.tags && (
                            <div className="pt-4 border-t border-gray-50 flex flex-wrap gap-2">
                              {job.tags.map(tag => (
                                <span key={tag} className="px-3 py-1.5 bg-brand-blue/5 text-brand-blue text-[8px] font-black uppercase tracking-widest rounded-lg border border-brand-blue/10">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </details>
                    </motion.div>
                  );
                })}
              </div>

              <div className="p-10 rounded-[3rem] bg-brand-blue/5 border border-brand-blue/10 flex items-start gap-6 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 text-brand-blue/10 group-hover:scale-110 transition-transform">
                    <Sparkles size={100} />
                 </div>
                 <div className="relative z-10 space-y-2">
                    <p className="text-sm font-black text-brand-blue uppercase tracking-[0.2em] leading-tight mb-2">Общий стаж в медиа: 5+ лет</p>
                    <p className="text-xs text-brand-grey/50 leading-relaxed italic max-w-sm">
                      От региональных СМИ до федеральных повесток и частного консалтинга. Умею быстро адаптироваться под любой масштаб задач.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 02. Portfolio */}
      <Section id="portfolio" title="Мои Кейсы" number="02" variant="dark">
        <div className="flex flex-col gap-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, i) => (
              <motion.div 
                key={i} 
                layoutId={`project-${project.id}`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                whileHover={{ y: -10 }}
                className={`group relative p-12 rounded-[4rem] flex flex-col justify-between cursor-pointer border-2 transition-all duration-500 min-h-[400px] overflow-hidden ${expandedProject === project.id ? 'border-brand-pink bg-brand-charcoal ring-4 ring-brand-pink/20' : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 shadow-2xl'}`}
              >
                <div className="flex justify-between items-start">
                  <span className={`text-6xl font-black opacity-20 ${expandedProject === project.id ? 'text-brand-pink' : 'text-white'}`}>{project.id}</span>
                  <div className={`w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white ${expandedProject === project.id ? 'bg-brand-pink text-brand-charcoal rotate-90' : 'group-hover:bg-white group-hover:text-brand-charcoal'} transition-all duration-500`}>
                    <ArrowRight size={24} />
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-4xl font-black uppercase tracking-tighter leading-[0.8] text-white group-hover:text-brand-pink transition-colors">{project.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed font-light italic max-w-sm">{project.desc}</p>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-20 transition-all scale-150 rotate-12">
                  <Sparkles size={200} />
                </div>
              </motion.div>
            ))}
          </div>

          <div ref={detailsRef} className="scroll-mt-40">
            <AnimatePresence mode="wait">
              {expandedProject && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                <div className="glass-card !bg-white p-12 lg:p-24 rounded-[5rem] border-none shadow-[20px_20px_0px_0px_rgba(255,77,166,0.3)] relative text-brand-charcoal overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 text-brand-pink/10 -rotate-12">
                    <Sparkles size={200} />
                  </div>
                  <button 
                    onClick={() => setExpandedProject(null)}
                    className="absolute top-12 right-12 text-[11px] font-black uppercase tracking-[0.4em] text-brand-charcoal/20 hover:text-brand-vibrant-pink transition-colors flex items-center gap-3 z-20"
                  >
                    CLOSE PROJECT <X size={20} />
                  </button>
                  {projects.find(p => p.id === expandedProject)?.details || (
                     <div className="py-20 text-center">
                        <p className="text-brand-grey/30 font-black uppercase tracking-widest text-xs">Информация в процессе наполнения...</p>
                     </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </div>
      </Section>

      <footer className="py-32 px-6 bg-brand-charcoal text-white flex flex-col items-center scalloped-top">
        <div className="w-full max-w-6xl">
              <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
                 <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">CONTACTS</span>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                       <a href="mailto:ds_mamaeva@mail.ru" className="text-3xl font-black hover:text-brand-pink transition-colors tracking-tighter uppercase underline decoration-white/10 decoration-1 underline-offset-8">ds_mamaeva@mail.ru</a>
                       <a href="#" className="text-3xl font-black hover:text-brand-blue transition-colors tracking-tighter uppercase underline decoration-white/10 decoration-1 underline-offset-8">TELEGRAM: @D_S_M</a>
                    </div>
                 </div>
              </div>
        </div>
        
        <div className="w-full max-w-6xl h-[1px] bg-white/10 mb-12" />
        <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl items-center gap-8 text-[11px] font-black uppercase tracking-[0.6em] text-white/30">
           <p>&copy; 2026 DARIA MAMAEVA</p>
           <p className="text-brand-pink">CREATOR • JESTER • STRATEGIST</p>
           <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-white transition-colors">SCROLL TOP ↑</button>
        </div>
      </footer>
    </main>
  );
}

