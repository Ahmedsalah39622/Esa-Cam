"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/context/store-context";
import {
  Eye,
  ArrowRight,
  Video,
  Aperture,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { toast } from "sonner";

interface GearItemInfo {
  role: string;
  productId: string;
  name: string;
  setting: string;
}

interface SceneProject {
  id: string;
  genre: string;
  title: string;
  client: string;
  director: string;
  image: string;
  formatBadge: string;
  technicalMetadata: {
    resolution: string;
    frameRate: string;
    iso: string;
    shutterAngle: string;
    colorProfile: string;
  };
  gearUsed: GearItemInfo[];
}

export function StudioStage() {
  const { setQuickViewProduct, addToCart, formatPrice, homepageContent } = useStore();

  const customStage = homepageContent?.studioStage;

  const projects: SceneProject[] = [
    {
      id: "automotive-commercial",
      genre: "Commercial & Automotive",
      title: customStage?.projectTitle || "Night Drift • Midnight Neon Campaign",
      client: customStage?.clientName || "Porsche & Speedhouse Media",
      director: customStage?.directorName || "Tariq Al-Sayed (Head DP)",
      image:
        customStage?.image ||
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      formatBadge: customStage?.formatBadge || "8K 60P N-RAW",
      technicalMetadata: {
        resolution: customStage?.resolution || "8.3K Full-Frame",
        frameRate: customStage?.frameRate || "60 fps RAW",
        iso: customStage?.iso || "ISO 800 / Dual Base",
        shutterAngle: customStage?.shutterAngle || "180.0° (1/120s)",
        colorProfile: customStage?.colorProfile || "12-Bit N-Log • Rec.2020",
      },
      gearUsed: [
        {
          role: customStage?.gearRole || "Cinema Camera Core",
          productId: customStage?.featuredProductId || "esa-637",
          name: customStage?.gearName || "Sony FX3 Cinema Line Full-Frame",
          setting: customStage?.gearSetting || "4K 120p • Active Fan Cooling",
        },

        {
          role: "Optical Master Glass",
          productId: "sony-24-70-gm2",
          name: "Sony FE 24-70mm f/2.8 GM II",
          setting: "Shot wide open @ f/2.8 35mm",
        },
        {
          role: "Key Soundstage Lighting",
          productId: "aputure-600d-pro",
          name: "Aputure LS 600d Pro Daylight LED",
          setting: "100% Output with Fresnel 2X",
        },
        {
          role: "High-Speed Gimbal & LiDAR",
          productId: "dji-rs4-pro",
          name: "DJI RS 4 Pro Gimbal Combo",
          setting: "Automated Axis Lock Tracking",
        },
      ],
    },
    {
      id: "narrative-drama",
      genre: "Narrative Cinema",
      title: "The Silent Quarter • Historical Drama",
      client: "Cairo Independent Film Festival",
      director: "Karim El-Shazly (Director)",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=85",
      formatBadge: "15+ STOPS DYNAMIC RANGE",
      technicalMetadata: {
        resolution: "4K DCI All-Intra",
        frameRate: "24.000 fps Cine",
        iso: "ISO 12,800 Low Light",
        shutterAngle: "180.0° (1/48s)",
        colorProfile: "S-Cinetone Film LUT",
      },
      gearUsed: [
        {
          role: "A-Cam Cinema Body",
          productId: "canon-eos-r5-c",
          name: "Canon EOS R5 C 8K Cinema Body",
          setting: "Cinema EOS OS • 8K 24p RAW",
        },
        {
          role: "High-Speed Prime Lens",
          productId: "canon-rf-50-f12",
          name: "Canon RF 50mm f/1.2 L USM Prime",
          setting: "Ultra-Fast f/1.2 Natural Bokeh",
        },
        {
          role: "32-Bit Float Wireless Audio",
          productId: "dji-mic-2-kit",
          name: "DJI Mic 2 Dual Wireless Kit",
          setting: "Internal 32-Bit Float On-Board",
        },
        {
          role: "RGB Mood Tube Lighting",
          productId: "nanlite-pavotube-ii-30c",
          name: "Nanlite PavoTube II 30C 4-Light Kit",
          setting: "Warm Amber 3200K Edge Rim",
        },
      ],
    },
    {
      id: "music-fashion",
      genre: "Music Video & Fashion",
      title: "Chromance • Editorial Visual Anthem",
      client: "Universal Music & Vogue Visuals",
      director: "Nourhan Medhat (Creative DP)",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=85",
      formatBadge: "ULTRA 120FPS SLOW-MO",
      technicalMetadata: {
        resolution: "6K Full-Frame Open Gate",
        frameRate: "120 fps High-Speed",
        iso: "ISO 400 Clean Studio",
        shutterAngle: "90.0° Crisp Shutter",
        colorProfile: "Blackmagic Film Gen 5",
      },
      gearUsed: [
        {
          role: "Large Format Cinema Body",
          productId: "blackmagic-cinema-6k-ff",
          name: "Blackmagic Cinema Camera 6K Full-Frame",
          setting: "Open Gate 6:5 Anamorphic",
        },
        {
          role: "Studio Monolight Strobe",
          productId: "aputure-600d-pro",
          name: "Aputure LS 600d Pro Daylight LED",
          setting: "Lantern 90 Diffusion Dome",
        },
        {
          role: "Pro Stabilization Rig",
          productId: "dji-rs4-pro",
          name: "DJI RS 4 Pro Gimbal Stabilizer",
          setting: "Car Mount Rigged with LiDAR",
        },
      ],
    },
    {
      id: "documentary-expedition",
      genre: "Documentary & Expedition",
      title: "Untamed Horizons • Sinai Mountain Trek",
      client: "National Geographic & Wild Heritage",
      director: "Youssef Mansour (Wildlife DP)",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1600&q=85",
      formatBadge: "WEATHER-SEALED 40MP RAW",
      technicalMetadata: {
        resolution: "6.2K Open Gate RAW",
        frameRate: "60 fps Fast Track",
        iso: "ISO 1600 All-Weather",
        shutterAngle: "180.0° (1/120s)",
        colorProfile: "F-Log2 • ETERNA Cinema",
      },
      gearUsed: [
        {
          role: "Rugged Expedition Body",
          productId: "fujifilm-x-t5-used",
          name: "Fujifilm X-T5 Mirrorless Pro Body",
          setting: "40.2MP BSI X-Trans • 7-Stop IBIS",
        },
        {
          role: "Fast Master Zoom Lens",
          productId: "sony-24-70-gm2",
          name: "Sony FE 24-70mm f/2.8 GM II",
          setting: "Nano AR II Anti-Flare Coating",
        },
        {
          role: "Weatherproof 32-Bit Audio",
          productId: "dji-mic-2-kit",
          name: "DJI Mic 2 Dual Wireless Kit",
          setting: "Internal 32-Bit Float Windscreen",
        },
        {
          role: "High-Payload Gimbal Support",
          productId: "dji-rs4-pro",
          name: "DJI RS 4 Pro Carbon Stabilizer",
          setting: "All-Terrain Carbon Fiber Rig",
        },
      ],
    },
  ];

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const project = projects[activeProjectIndex];

  // Calculate total price of all gear in the scene
  const totalScenePrice = project.gearUsed.reduce((sum, item) => {
    const prod = PRODUCTS.find((p) => p.id === item.productId);
    return sum + (prod ? prod.price : 0);
  }, 0);

  // 1-Click Buy Complete Scene Setup
  const handleBuySceneSetup = () => {
    let addedCount = 0;
    project.gearUsed.forEach((item) => {
      const prod = PRODUCTS.find((p) => p.id === item.productId);
      if (prod) {
        addToCart(prod, 1);
        addedCount++;
      }
    });
    toast.success(
      `🎬 Added all ${addedCount} gear items used in "${project.title}" to your Cart!`
    );
  };

  return (
    <section
      id="studios"
      className="w-full bg-[#000000] text-[#FFFFFF] px-6 sm:px-10 lg:px-12 py-16 sm:py-24 select-none border-b border-[#27272A] relative overflow-hidden"
    >
      {/* Top Nikon Yellow Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FFE600]" />

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#27272A] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FFE600] inline-block" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FFE600]">
                SHOT ON ESA CAM • BEHIND THE LENS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight uppercase text-white leading-none">
              REAL PROJECTS. <span className="text-[#FFE600]">REAL GEAR.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-xl font-normal">
              Click through real cinematic productions to inspect the exact cameras, lenses, lighting, and camera settings used to capture each frame.
            </p>
          </div>

          {/* Genre Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#18181B] border border-[#27272A] rounded-sm self-start lg:self-auto">
            {projects.map((p, idx) => {
              const isActive = activeProjectIndex === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveProjectIndex(idx)}
                  className={`px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-[#FFE600] text-black shadow-md"
                      : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>{p.genre}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 Columns: Cinematic Scene Viewer with Camera Viewfinder HUD */}
          <div className="lg:col-span-7 relative min-h-[460px] sm:min-h-[520px] bg-[#18181B] border border-[#27272A] overflow-hidden group shadow-2xl flex flex-col justify-between p-5 sm:p-6">
            <Image
              key={project.image}
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-center brightness-[0.88] group-hover:scale-105 transition-transform duration-700 animate-in fade-in"
            />
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/70 pointer-events-none" />

            {/* Top Viewfinder HUD Overlay */}
            <div className="relative z-20 flex items-center justify-between text-xs font-mono text-[#D4D4D8]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse" />
                <span className="font-bold tracking-widest text-white">● REC 01:24:18:09</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="bg-[#FFE600] text-black text-[10px] font-black px-2 py-0.5 uppercase tracking-wider">
                  {project.formatBadge}
                </span>
                <span className="bg-black/80 px-2.5 py-0.5 border border-white/20 text-[11px] text-white">
                  BAT 98%
                </span>
              </div>
            </div>

            {/* Bottom Viewfinder HUD Metadata Bar */}
            <div className="relative z-20 space-y-3 pt-12">
              <div className="space-y-1">
                <p className="text-[11px] font-mono text-[#FFE600] uppercase tracking-widest font-bold">
                  Directed by {project.director} • {project.client}
                </p>
                <h3 className="text-xl sm:text-2xl font-black font-sans uppercase text-white tracking-tight leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* Camera Live Settings Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-black/90 backdrop-blur-md p-3.5 rounded-sm border border-white/20 text-[11px] font-mono">
                <div>
                  <span className="text-[#A1A1AA] text-[9px] uppercase block">Res &amp; FPS</span>
                  <span className="text-white font-bold">{project.technicalMetadata.frameRate}</span>
                </div>
                <div>
                  <span className="text-[#A1A1AA] text-[9px] uppercase block">Sensitivity</span>
                  <span className="text-[#FFE600] font-bold">{project.technicalMetadata.iso}</span>
                </div>
                <div>
                  <span className="text-[#A1A1AA] text-[9px] uppercase block">Shutter</span>
                  <span className="text-white font-bold">{project.technicalMetadata.shutterAngle}</span>
                </div>
                <div>
                  <span className="text-[#A1A1AA] text-[9px] uppercase block">Color Profile</span>
                  <span className="text-emerald-400 font-bold">{project.technicalMetadata.colorProfile.split("•")[0]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Complete Gear Breakdown & 1-Click Purchase */}
          <div className="lg:col-span-5 bg-[#121214] border border-[#27272A] p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-2xl">
            <div className="space-y-4">
              {/* Header */}
              <div className="border-b border-[#27272A] pb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Aperture className="w-4 h-4 text-[#FFE600]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FFFFFF]">
                    Gear Used in this Shot
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-[#FFE600]/15 text-[#FFE600] border border-[#FFE600]/40 px-2 py-0.5 font-bold">
                  {project.gearUsed.length} Components
                </span>
              </div>

              {/* Gear Items List with Clear Typography and Thumbnails */}
              <div className="space-y-2.5">
                {project.gearUsed.map((gear, i) => {
                  const prod = PRODUCTS.find((p) => p.id === gear.productId);
                  return (
                    <div
                      key={i}
                      className="p-3 bg-[#1C1C1F] border border-[#2E2E33] hover:border-[#FFE600] rounded-sm transition-all duration-200 flex items-center justify-between gap-3 group/item"
                    >
                      {/* Left: Role and Name */}
                      <div className="flex-1 min-w-0 space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] shrink-0" />
                          <span className="text-[9px] font-mono text-[#FFE600] uppercase tracking-wider font-bold">
                            {gear.role}
                          </span>
                        </div>
                        <p className="text-xs font-bold text-[#FFFFFF] truncate group-hover/item:text-[#FFE600] transition-colors">
                          {gear.name}
                        </p>
                        <p className="text-[10px] text-[#A1A1AA] font-mono truncate">
                          {gear.setting}
                        </p>
                      </div>

                      {/* Right: Price & Quick View */}
                      <div className="flex items-center gap-2.5 shrink-0 pl-2">
                        {prod && (
                          <span className="font-mono text-xs font-black text-[#FFFFFF]">
                            {formatPrice(prod.price)}
                          </span>
                        )}
                        {prod && (
                          <button
                            onClick={() => setQuickViewProduct(prod)}
                            className="p-2 bg-[#27272A] hover:bg-[#FFE600] text-white hover:text-black rounded-sm transition-colors cursor-pointer"
                            title="Quick View Specs"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Total Bundle Pricing & 1-Click Purchase */}
            <div className="border-t border-[#27272A] pt-4 space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#A1A1AA] block">
                    Combined Setup Total
                  </span>
                  <span className="text-xs text-emerald-400 font-mono font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Includes 2-Year Official Warranty</span>
                  </span>
                </div>
                <span className="text-xl sm:text-2xl font-black font-mono text-[#FFE600]">
                  {formatPrice(totalScenePrice)}
                </span>
              </div>

              {/* Primary 1-Click Action */}
              <button
                onClick={handleBuySceneSetup}
                className="w-full py-4 bg-[#FFE600] hover:bg-[#FFD000] text-black text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-200 hover:scale-[1.01] cursor-pointer shadow-lg font-sans"
              >
                <Zap className="w-4 h-4 fill-black" />
                <span>BUY THIS COMPLETE LOOK &amp; RIG</span>
              </button>

              <Link
                href="/store"
                className="w-full py-2 text-center text-xs font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-[#FFE600] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Browse All Cameras &amp; Optics in Store</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
