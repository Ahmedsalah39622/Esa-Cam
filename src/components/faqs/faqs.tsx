"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { PhoneCall } from "lucide-react";
import { useStore } from "@/context/store-context";

function AccordionItemFAQs(props: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      {...props}
      className={cn(
        "bg-card/70 data-[state=open]:bg-card border border-border rounded-2xl px-5 py-2 transition-all data-[state=open]:shadow-md lg:px-6 mb-3",
        props.className
      )}
    />
  );
}

function AccordionTriggerFAQs(props: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      {...props}
      className={cn("[&[data-state=open]>svg]:text-primary text-sm font-semibold lg:text-base text-foreground text-left", props.className)}
    />
  );
}

function AccordionContentFAQs(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} className={cn("text-xs lg:text-sm text-muted-foreground leading-relaxed pt-2 pb-3", props.className)} />;
}

export function FAQs() {
  const { homepageContent } = useStore();
  const hotline = homepageContent?.footer?.hotline || "+20 1092298665";

  return (
    <section id="faqs" className="w-full py-16 md:py-24 border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-12 md:gap-12">
        {/* Left Column (5 Cols) */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <Badge variant="secondary" className="uppercase font-mono text-[10px] tracking-wider mb-2 bg-primary/10 text-primary border border-primary/20">
              Clear Answers
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Everything you need to know about official warranties, serial number verification, dispatch across Egypt, and custom optical calibration.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/30 border border-border space-y-3">
            <div className="flex items-center gap-2 text-foreground font-bold text-sm">
              <PhoneCall className="w-4 h-4 text-primary" />
              <span>Need Custom Kit Advice?</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Our on-set camera engineers and optical specialists are available to verify compatibility for your upcoming shoot.
            </p>
            <Button size="sm" className="rounded-xl text-xs font-semibold w-full mt-1" asChild>
              <a href={`tel:${hotline.replace(/[^0-9+]/g, "")}`}>
                <span>Call Cine Hotline ({hotline})</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Right Accordion Column (7 Cols) */}
        <div className="md:col-span-7">
          <Accordion type="single" collapsible defaultValue="warranty" className="w-full">
            <AccordionItemFAQs value="warranty">
              <AccordionTriggerFAQs>
                Are all camera bodies and lenses 100% genuine with official warranty?
              </AccordionTriggerFAQs>
              <AccordionContentFAQs>
                <p>
                  Yes, unconditionally. ESA CAM is an official authorized distributor and dealer for Sony Alpha, Canon Cinema EOS, RED Digital Cinema, Blackmagic Design, Aputure, DJI Pro, and RØDE. Every item comes factory sealed with valid regional serial numbers and a 2-Year Official Manufacturer Warranty.
                </p>
              </AccordionContentFAQs>
            </AccordionItemFAQs>

            <AccordionItemFAQs value="shipping">
              <AccordionTriggerFAQs>
                How do you safely ship high-end cinema cameras and fragile glass?
              </AccordionTriggerFAQs>
              <AccordionContentFAQs>
                <p>
                  We operate a specialized Fragile-Cine armored courier service. All optical lenses and camera bodies are packed in custom high-density EVA foam, tamper-evident sealed, and 100% transit-insured. Standard delivery is 24 hours within Greater Cairo and Alexandria, and 48 hours across other governorates.
                </p>
              </AccordionContentFAQs>
            </AccordionItemFAQs>

            <AccordionItemFAQs value="sensor-clean">
              <AccordionTriggerFAQs>
                What is included in the Free Lifetime Sensor Cleaning Desk?
              </AccordionTriggerFAQs>
              <AccordionContentFAQs>
                <p>
                  Every camera purchased from ESA CAM qualifies for complimentary wet and dry sensor cleanings, optical calibration, and firmware flashing for life at our Zamalek Flagship and Sheikh Zayed Studio locations.
                </p>
              </AccordionContentFAQs>
            </AccordionItemFAQs>

            <AccordionItemFAQs value="trade-in">
              <AccordionTriggerFAQs>
                How does the Trade-In & Upgrade program work?
              </AccordionTriggerFAQs>
              <AccordionContentFAQs>
                <p>
                  You can bring or ship your used camera bodies, lenses, or gimbals. Our certified technicians perform a 90-point optical and sensor diagnostic (checking shutter count, dead pixels, and autofocus alignment) and provide an instant credit quote towards your new mirrorless or cinema purchase.
                </p>
              </AccordionContentFAQs>
            </AccordionItemFAQs>

            <AccordionItemFAQs value="installments">
              <AccordionTriggerFAQs>
                What 0% installment and studio payment plans are available?
              </AccordionTriggerFAQs>
              <AccordionContentFAQs>
                <p>
                  We support up to 24 months 0% interest installment plans through major Egyptian and regional credit cards (CIB, NBE, Banque Misr, QNB, FAB, Emirates NBD) as well as ValU, Tabby, Tamara, and dedicated commercial studio invoicing.
                </p>
              </AccordionContentFAQs>
            </AccordionItemFAQs>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
