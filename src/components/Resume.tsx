import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type TimelineItem = {
  range: string;
  title: string;
  org: string;
  description: string;
  tags?: string[];
};

type EduCard = {
  title: string;
  org: string;
  range: string;
  description: string;
  highlight?: string;
  featured?: boolean;
};

export const Resume = () => {
  const experience: TimelineItem[] = [
    {
      range: "2023 — PRESENT",
      title: "Creative Director",
      org: "Innovation Studios Ltd",
      description:
        "Led design strategy and execution across multiple product lines, mentoring a small team and partnering closely with engineering.",
      tags: ["Team Leadership", "Strategic Planning", "Creative Vision"],
    },
    {
      range: "2020 — 2023",
      title: "Senior Product Designer",
      org: "Digital Innovations Corp",
      description:
        "Owned end-to-end UX for key flows, ran workshops, and shipped iterative improvements based on user insights.",
    },
    {
      range: "2017 — 2020",
      title: "UX/UI Designer",
      org: "Creative Solutions Agency",
      description:
        "Designed responsive interfaces and design systems for client projects, collaborating with PMs and developers.",
    },
  ];

  const education: EduCard[] = [
    {
      title: "Master of Design",
      org: "Tempus Design Institute",
      range: "2015 — 2017",
      description:
        "Focused on interaction design, product systems, and research-led design decisions.",
      highlight: "Magna Cum Laude",
      featured: true,
    },
    {
      title: "Bachelor of Arts",
      org: "Creative Arts University",
      range: "2011 — 2015",
      description:
        "Visual communication, typography, and human-centered design fundamentals.",
    },
  ];

  const certs = [
    { title: "Advanced UX Design", org: "Design Academy", year: "2022" },
    {
      title: "Digital Innovation Strategy",
      org: "Innovation Institute",
      year: "2021",
    },
    { title: "Leadership in Design", org: "Leadership Academy", year: "2020" },
  ];

  return (
    <section id="resume" className="container py-24 sm:py-32">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Resume</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          A quick snapshot of experience, education, and certifications—built
          with shadcn/ui.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center mt-12">
        {/* LEFT */}
        <div className="w-full">
          <SectionHeading title="Professional Experience" />

          <div className="mt-6">
            <Timeline>
              {experience.map((item, idx) => (
                <TimelineItem
                  key={item.title}
                  range={item.range}
                  isLast={idx === experience.length - 1}
                >
                  <div className="text-lg font-semibold">{item.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.org}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full">
          <SectionHeading title="Education & Qualifications" />
          <p className="mt-2 text-sm text-muted-foreground">
            Relevant education and credentials supporting product design +
            leadership.
          </p>

          <div className="mt-6 space-y-4">
            {education.map((ed) => (
              <Card
                key={ed.title}
                className={[
                  "bg-card/60 border-border/60 shadow-sm",
                  ed.featured ? "ring-1 ring-emerald-400/40" : "",
                ].join(" ")}
              >
                <CardHeader className="space-y-1">
                  <CardTitle className="text-base">{ed.title}</CardTitle>
                  <div className="text-sm text-muted-foreground">{ed.org}</div>
                  <div className="text-xs text-muted-foreground">
                    {ed.range}
                  </div>
                </CardHeader>

                <CardContent className="space-y-2">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {ed.description}
                  </p>

                  {ed.highlight && (
                    <Badge className="rounded-full bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/20">
                      {ed.highlight}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="mt-8 text-sm font-semibold">
            Professional Certifications
          </h3>
          <div className="mt-3 space-y-3">
            {certs.map((c) => (
              <div
                key={c.title}
                className="rounded-lg border border-border/60 bg-card/40 p-3"
              >
                <div className="text-sm font-medium">{c.title}</div>
                <div className="text-xs text-muted-foreground">
                  {c.org} • {c.year}
                </div>
              </div>
            ))}
          </div>

          <Separator className="mt-8 opacity-40" />
        </div>
      </div>
    </section>
  );
};

/* ---------- small UI helpers ---------- */

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/30">
        <div className="h-2 w-2 rounded-full bg-emerald-300" />
      </div>
      <div>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <div className="mt-1 h-[2px] w-16 rounded bg-emerald-400/40" />
      </div>
    </div>
  );
}

function Timeline({ children }: { children: React.ReactNode }) {
  return <div className="space-y-10">{children}</div>;
}

function TimelineItem({
  range,
  children,
  isLast = false,
}: {
  range: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div className="relative pl-10">
      {/* DOT */}
      <div className="absolute left-3 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/15" />

      {/* LINE (từ tâm dot xuống) */}
      {!isLast && (
        <div className="absolute left-3 top-2 h-[calc(100%+2.5rem)] w-px bg-border/60 -translate-x-1/2" />
      )}

      {/* RANGE */}
      <div className="text-xs font-semibold tracking-wider text-emerald-400">
        {range}
      </div>

      {/* CARD */}
      <div className="mt-3 rounded-xl border border-border/60 bg-card/40 p-5">
        {children}
      </div>
    </div>
  );
}
