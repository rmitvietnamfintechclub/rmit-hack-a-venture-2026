"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import {
  IconCalendarEvent,
  IconFileDescription,
  IconUsersGroup,
  IconCode,
  IconTrophy,
  IconClockHour4,
  IconVideo,
  IconUser,
  IconTarget,
  IconMapPin,
  IconCheck,
} from "@tabler/icons-react";

export const TimelineSection = () => {
  return (
    <section className="w-full flex flex-col items-center px-6 md:px-20 mt-16 md:mt-20 overflow-x-hidden">
      <div>
        <h1 className="text-4xl md:text-6xl text-center text-white font-bold mb-4">
          <span className="drop-shadow-text">Hack-A-Venture</span>{" "}
          <span className="text-color-gradient drop-shadow-[0_0_20px_rgba(232,81,2,0.8)]">Timeline</span>
        </h1>
      </div>
      <RoundFormatTimeline />
      <TrainingWorkshopTimeline />
    </section>
  );
};

// --- DATA CẬP NHẬT TỪ SLIDE 2026 ---
const roundFormatData = [
  {
    id: "reg",
    round: "REGISTRATION",
    title: "FORM YOUR SQUAD",
    date: "Sep 28 – Nov 01, 2026",
    icon: <IconUsersGroup size={24} className="text-white" />,
    description:
      "Gather your team and register for the competition. At least 03 team members must be able to attend the HackDay & Pitching (Jan 20-21, 2027) at the RMIT Vietnam Saigon South Campus.",
    target: "Nationwide Students",
    deliverables: [
      { label: "Form", value: "Individual/Team Registration Form" },
      { label: "Size", value: "3-4 members" },
    ],
  },
  {
    id: "r1",
    round: "ROUND 1",
    title: "IDEA PROPOSAL",
    date: "Nov 02 – Nov 15, 2026",
    icon: <IconFileDescription size={24} className="text-white" />,
    description:
      "Submit an idea proposal addressing a challenge within Vietnam's financial system, using emerging technologies. Select a primary pillar or a cross-functional combination of two pillars, drawn from the challenges announced at the commencement of Round 1. Demonstrate innovation, feasibility, scalability, competitiveness, sustainability, and anticipated impact.",
    target: "All Registered Teams",
    deliverables: [
      { label: "Format", value: "Microsoft Word (DOCX)" },
      { label: "Deliverable", value: "Idea Proposal" },
      { label: "Word Limit", value: "1500 words" },
    ],
  },
  {
    id: "r2",
    round: "ROUND 2",
    title: "DOCUMENTATION",
    date: "Nov 30 – Dec 13, 2026",
    icon: <IconFileDescription size={24} className="text-white" />,
    description:
      "Develop an integrated Business & Technical Executive Report that validates the commercial and technical feasibility of the proposed solution. Both the Business and Technical Documentations carry equal weight. Online mentoring from industry experts provided.",
    target: "Top 20-25 Teams",
    deliverables: [
      { label: "Format", value: "Executive Format (PDF)" },
      { label: "Deliverables", value: "Business & Technical Executive Report" },
      { label: "Limit", value: "10 Pages of Main Content" },
    ],
  },
  {
    id: "r3-prep",
    round: "FINAL STAGE",
    title: "PROTOTYPE DEVELOPMENT",
    date: "Jan 11 – Jan 17, 2026",
    icon: <IconCode size={24} className="text-white" />,
    description:
      "As soon as the Round 2 results are released, Finalists can begin developing their prototypes based on the proposed system, functional requirements, and technical architecture documented in Round 2. Finalists will also receive online mentoring from industry experts.",
    target: "Top 5 Finalist Teams",
    deliverables: [
      { label: "Task", value: "Build MVP / Prototype" },
      { label: "Support", value: "Online Mentoring Sessions" },
    ],
  },
  {
    id: "r3-final",
    round: "ROUND 3",
    title: "HACKDAY & PRESENTATION",
    date: "Jan 20 – Jan 21, 2027",
    icon: <IconTrophy size={24} className="text-white" />,
    description: (
      <div className="flex flex-col gap-3">
        <p>
          <strong className="text-white">HackDay (Jan 20):</strong> Finalists
          must develop a minimum viable product (MVP) or prototype satisfying
          specific functionalities requirements released at the start of HackDay
          1. Teams must develop their prototype and business plan within a
          24-hour period, with live mentoring from industry experts.
        </p>
        <p>
          <strong className="text-white">Presentation (Jan 21):</strong>{" "}
          Finalists continue developing their prototype before submission at
          noon. Afterward, deliver an offline presentation and a live prototype
          demo, followed by a Q&A session with the Panel Judges to defend your
          solution architecture.
        </p>
      </div>
    ),
    target: "Top 5 Finalist Teams",
    deliverables: [
      {
        label: "Deliverables",
        value: "Prototype (Soft copy) & Presentation Slide (PPTX)",
      },
      { label: "Live", value: "Demo and Presentation" },
      {
        label: "Limit",
        value: "Presentation (10 mins) | Demo (5 mins) | Q&A (10 mins)",
      },
    ],
  },
];

const RoundFormatTimeline = () => {
  return (
    <section className="w-full flex flex-col items-center mt-4 md:mt-8 relative mx-auto">
      <div className="bg-gradient-to-r from-[#bf0701]/20 to-[#e85102]/20 border border-[#bf0701]/40 text-white text-lg md:text-xl font-bold py-2 px-6 md:px-8 rounded-full shadow-[0_0_20px_rgba(191,7,1,0.3)] mb-12 tracking-widest uppercase">
        Round Format
      </div>

      <div className="absolute left-[18px] md:left-1/2 top-[100px] bottom-0 w-[2px] bg-gradient-to-b from-[#bf0701] via-[#e85102] to-transparent -translate-x-1/2 opacity-50 z-0"></div>

      <div className="w-full flex flex-col gap-10 md:gap-24 relative z-10">
        {roundFormatData.map((item, index) => {
          const isEven = index % 2 === 0;
          return <TimelineCard key={item.id} data={item} isEven={isEven} />;
        })}
      </div>
    </section>
  );
};

const TimelineCard = ({ data, isEven }: { data: any; isEven: boolean }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col md:flex-row items-start w-full relative",
        isEven ? "md:flex-row-reverse" : "",
      )}
    >
      <div className="hidden md:block md:w-1/2"></div>

      <div className="absolute left-[16px] md:left-1/2 transform -translate-x-1/2 mt-6 z-20 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#bf0701] to-[#e85102] border-4 border-[#050101] shadow-[0_0_15px_rgba(232,81,2,0.8)] flex items-center justify-center">
          {data.icon}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
        className={clsx(
          "w-full md:w-1/2 pl-[50px] md:pl-0",
          isEven ? "md:pr-12" : "md:pl-12",
        )}
      >
        <div className="bg-[#0a0202]/90 backdrop-blur-md border rounded-2xl md:rounded-[2rem] p-5 md:p-8 border-[#e85102]/60 shadow-[0_15px_40px_rgba(232,81,2,0.2)] transition-all duration-300">
          <div className="flex items-center gap-2 text-[#e85102] bg-[#e85102]/10 border border-[#e85102]/20 w-fit px-3 py-1 rounded-full mb-3 md:mb-4">
            <IconCalendarEvent size={16} />
            <span className="text-[13px] md:text-sm font-bold tracking-wider">
              {data.date}
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
            {data.round}{" "}
            <span className="text-gray-600 hidden md:inline">|</span>{" "}
            <br className="md:hidden" />
            <span className="text-color-gradient">{data.title}</span>
          </h2>

          <div className="text-gray-300 text-[15px] md:text-base font-medium leading-[1.6] md:leading-relaxed mb-6 mt-3 text-left md:text-justify">
            {data.description}
          </div>

          <div className="bg-[#140505] border border-[#bf0701]/40 rounded-xl p-4 mt-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0 mb-3 border-b border-white/10 pb-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Requirements & Deliverables
              </h4>
              {data.target && (
                <span className="text-[10px] md:text-xs font-bold text-[#e85102] bg-[#e85102]/10 px-2.5 py-1 rounded border border-[#e85102]/20">
                  {data.target}
                </span>
              )}
            </div>

            <ul className="flex flex-col gap-2.5">
              {data.deliverables.map((del: any, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[14px] md:text-sm"
                >
                  <span className="text-[#e85102] mt-0.5 shrink-0">❖</span>
                  <div className="leading-snug">
                    <span className="text-gray-400 font-semibold">
                      {del.label}:{" "}
                    </span>
                    <span className="text-white font-medium">{del.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- WORKSHOP DATA (Giữ nguyên) ---
const trainingWorkshopData = [
  {
    id: "ws1",
    order: "01",
    title: "UNDERSTANDING THE THEME: PILLARS & ESG MAPPING",
    exclusive: "EXCLUSIVE FOR ROUND 1 PARTICIPANTS ONLY",
    date: "November 4th, 2026",
    duration: "1 hour",
    format: "Online",
    speaker: "To be announced",
    role: "Guest Speaker",
    learn: [
      "Interpret the 2026 theme correctly and pinpoint a real, specific problem within one of the five pillars.",
      "Decode what each pillar means in the Vietnamese market.",
      "Anchor your idea to a single primary pillar and recognise a strong cross-pillar opportunity.",
      "Link your idea to ESG standards and state an impact that can be measured.",
    ],
    activities: [
      "A walkthrough of the theme and pillars with a Vietnamese example for each, followed by a pillar-matching sprint using real news headlines.",
      "A live teardown of two weak and two strong problem statements.",
      "A guided worksheet where each team drafts a one-sentence problem statement, tags its ESG, and shares it for instant feedback.",
    ],
  },
  {
    id: "ws2",
    order: "02",
    title: "CHOOSING THE RIGHT TECH STACK",
    exclusive: "EXCLUSIVE FOR ROUND 1 PARTICIPANTS ONLY",
    date: "November 6th, 2026",
    duration: "1 hour",
    format: "Online",
    speaker: "Thuan Phat Vu",
    role: "Founder & Product Builder @ Cyno Software",
    learn: [
      "Select and justify the technologies (AI, Blockchain, Data Analytics, etc.) that best fit your challenge.",
      "Match technologies to the five pillars.",
      "Build responsible innovation addressing bias, data privacy, energy efficiency, and regulatory compliance.",
      "Assess feasibility, scalability, and user adoption across Vietnam's diverse contexts.",
      "Weigh the trade-offs and risks of different tech choices.",
    ],
    activities: [
      "A Tech Fit Canvas sprint comparing 2-3 technologies for your problem, followed by scenario-based group exercises on responsible innovation.",
      "Mentors demo and critique real Vietnamese and ASEAN fintech examples.",
      "A decision matrix showdown where teams defend their chosen tech stack against friendly judge questions.",
    ],
  },
  {
    id: "ws3",
    order: "03",
    title: "BUSINESS DOCUMENTATION & EXECUTIVE BLUEPRINT",
    exclusive: "EXCLUSIVE FOR ROUND 2 PARTICIPANTS ONLY",
    date: "December 1st, 2026",
    duration: "1 hour",
    format: "Online",
    speaker: "To be announced",
    role: "Guest Speaker",
    learn: [
      "Translate your initial concept into comprehensive Business Documentation that meets Round 2's evaluation criteria.",
      "Build a detailed market analysis, competitive overview, sustainable business model, pricing strategy, Go-to-market pipeline, and ESG impact metrics.",
      "Document adherence to on-going financial regulations.",
      "Plan a clear task-sharing strategy so workload is distributed efficiently.",
    ],
    activities: [
      "Rapid teardowns of standard Executive Business Reports submissions, covering structure, expectations, and common mistakes.",
      "Teams map their Round 1 concepts into structured system requirements and draft their Business Documentation with an ESG analysis.",
      "Finalize blueprint with a Business Implementation & Feasibility plan and a Regulatory & Risk Assessment.",
    ],
  },
  {
    id: "ws4",
    order: "04",
    title: "TECHNICAL DOCUMENTATION",
    exclusive: "EXCLUSIVE FOR ROUND 2 PARTICIPANTS ONLY",
    date: "December 3rd, 2026",
    duration: "1 hour",
    format: "Online",
    speaker: "To be announced",
    role: "Guest Speaker",
    learn: [
      "Translate your initial concept into comprehensive Technical Documentation.",
      "Turn conceptual ideas into clear system architecture use-case diagrams and core functional requirements.",
      "Build a detailed technical project execution plan and risk management analysis.",
      "Document technical implementation roadmap, evaluation plan, alongside foreseeable constraints and data security measures.",
    ],
    activities: [
      "Teams map their Round 1 concepts into structured system requirements and draft their Technical Documentation with a comprehensive, framework-based architecture.",
      "Finalize blueprint with a Technical Implementation & Feasibility plan and a Regulatory & Risk Assessment.",
    ],
  },
  {
    id: "ws5",
    order: "05",
    title: "PROTOTYPE DEVELOPMENT",
    exclusive: "EXCLUSIVE FOR ROUND 3 FINALISTS ONLY",
    date: "January 12th, 2027",
    duration: "1 hour",
    format: "Online",
    speaker: "To be announced",
    role: "Guest Speaker",
    learn: [
      "Convert detailed documentation in Round 2 into prioritized technical feature sets for rapid development.",
      "Implement core features leveraging AI, Blockchain, and Cybersecurity protocols.",
      "Select and configure the most effective development variables (tech stack, APIs, data sources) for a 24h hackathon.",
      "Execute critical validation and testing to meet judge expectations.",
      "Strategize final presentation narratives, technical pitch flow, and data handling processes.",
    ],
    activities: [
      "Hands-on documentation-to-feature mapping and feature prioritization workshop.",
      "Deep-dive technology selection sessions with discussion on AI model selection, blockchain platform choices, and security implementation.",
      "Peer review session of preliminary soft-copy architecture and receive judge-perspective feedback.",
      "24h Hackday sprint planning and workflow management session.",
    ],
  },
  {
    id: "ws6",
    order: "06",
    title: "PITCHING & LIVE DEMO",
    exclusive: "EXCLUSIVE FOR ROUND 3 FINALISTS ONLY",
    date: "January 20th, 2027",
    duration: "1 hour",
    format: "Offline",
    speaker: "To be announced",
    role: "Guest Speaker",
    learn: [
      "Prepare finalist teams for persuasive presentation and live judging.",
      "Master Storytelling, demo flow, and Q&A handling.",
      "Refine narrative, value proposition, slide clarity, demo sequencing, and objection handling.",
    ],
    activities: [
      "Pitch drill, demo rehearsal, mock judging panel.",
      "Q&A practice, and feedback based on judging criteria (clarity of problem, solution logic, and feasibility).",
      "Refine pitch narrative and demo plan.",
    ],
  },
];

const TrainingWorkshopTimeline = () => {
  return (
    <section className="w-full flex flex-col items-center mt-20 relative mx-auto">
      <div className="bg-gradient-to-r from-[#bf0701]/20 to-[#e85102]/20 border border-[#bf0701]/40 text-white text-lg md:text-xl font-bold py-2 px-6 md:px-8 rounded-full shadow-[0_0_20px_rgba(191,7,1,0.3)] mb-6 tracking-widest uppercase text-center">
        Training Workshops
      </div>
      <p className="text-center text-[15px] md:text-lg font-medium mb-10 md:mb-12 text-gray-400 px-4 leading-[1.6]">
        To support participants, Hack-A-Venture 2026 will provide a series of
        exclusive training workshops.
      </p>

      <div className="absolute left-[8px] md:left-[10px] top-[160px] bottom-0 w-[2px] bg-gradient-to-b from-[#bf0701] via-[#e85102] to-transparent opacity-40 z-0"></div>

      <div className="w-full flex flex-col gap-10 relative z-10 pl-[40px] md:pl-[60px]">
        {trainingWorkshopData.map((item) => (
          <WorkshopCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

const WorkshopCard = ({ data }: { data: any }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
      }}
      className="relative w-full"
    >
      {/* Node (Dấu chấm trên trục thời gian) */}
      <div className="absolute -left-[32px] md:-left-[50px] top-8 transform -translate-x-1/2 z-20">
        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#e85102] border-[4px] md:border-[5px] border-[#080303] shadow-[0_0_10px_rgba(232,81,2,0.8)]"></div>
      </div>

      <div className="bg-[#0f0404]/90 backdrop-blur-md border rounded-xl md:rounded-2xl overflow-hidden shadow-lg border-[#e85102]/50 transition-colors duration-300">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-[#1a0505] to-[#0a0202] p-4 md:p-6 border-b border-white/5 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
            <span className="text-color-gradient font-black text-xl md:text-2xl tracking-widest drop-shadow-md">
              WORKSHOP {data.order}
            </span>
            <span className="bg-[#bf0701]/20 text-[#ffb09e] border border-[#bf0701]/40 text-[9px] md:text-xs font-bold px-3 py-1.5 md:py-1 rounded-full uppercase tracking-wider w-fit text-left">
              {data.exclusive}
            </span>
          </div>
          <h2 className="text-[17px] md:text-2xl font-bold text-white uppercase tracking-wide leading-snug">
            {data.title}
          </h2>
        </div>

        {/* Card Meta - FIX MOBILE: Ép khoảng cách (gap) hẹp lại để không bị rớt dòng */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 p-4 md:p-6 bg-[#050101]/50">
          <div className="flex items-center gap-2">
            <div className="bg-[#e85102]/20 p-1.5 md:p-2 rounded-lg text-[#e85102]">
              <IconCalendarEvent size={18} className="md:w-5 md:h-5" />
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                Date
              </p>
              <p className="text-[13px] md:text-sm font-semibold text-gray-200">
                {data.date}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#e85102]/20 p-1.5 md:p-2 rounded-lg text-[#e85102]">
              <IconClockHour4 size={18} className="md:w-5 md:h-5" />
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                Duration
              </p>
              <p className="text-[13px] md:text-sm font-semibold text-gray-200">
                {data.duration}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#e85102]/20 p-1.5 md:p-2 rounded-lg text-[#e85102]">
              {data.format === "Online" ? (
                <IconVideo size={18} />
              ) : (
                <IconMapPin size={18} />
              )}
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                Format
              </p>
              <p className="text-[13px] md:text-sm font-semibold text-gray-200">
                {data.format}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#e85102]/20 p-1.5 md:p-2 rounded-lg text-[#e85102]">
              <IconUser size={18} className="md:w-5 md:h-5" />
            </div>
            <div>
              <p
                className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-wider line-clamp-1"
                title={data.role}
              >
                {data.role}
              </p>
              <p className="text-[13px] md:text-sm font-semibold text-gray-200">
                {data.speaker}
              </p>
            </div>
          </div>
        </div>

        {/* Card Body - FIX MOBILE: Flex column cho 2 cột nội dung */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-px bg-white/5">
          {/* Cột Trái */}
          <div className="bg-[#0a0202] p-4 md:p-6 border-b md:border-b-0 border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <IconTarget className="text-[#e85102]" size={20} />
              <h3 className="text-[#e85102] font-bold tracking-widest uppercase text-[13px] md:text-sm">
                You'll Learn To
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {data.learn.map((txt: string, i: number) => (
                // FIX LỖI RỚT DÒNG BULLET: Thêm shrink-0 và mt-1
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#bf0701] mt-1 font-black text-sm shrink-0">
                    ▹
                  </span>
                  <span className="text-gray-300 text-[14px] md:text-sm font-medium leading-[1.6] md:leading-relaxed text-left">
                    {txt}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột Phải */}
          <div className="bg-[#0a0202] p-4 md:p-6">
            <div className="flex items-center gap-2 mb-4">
              <IconCheck className="text-[#bf0701]" size={20} />
              <h3 className="text-[#bf0701] font-bold tracking-widest uppercase text-[13px] md:text-sm">
                Activities
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {data.activities.map((txt: string, i: number) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#e85102] mt-1 font-black text-sm shrink-0">
                    ▹
                  </span>
                  <span className="text-gray-300 text-[14px] md:text-sm font-medium leading-[1.6] md:leading-relaxed text-left">
                    {txt}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
