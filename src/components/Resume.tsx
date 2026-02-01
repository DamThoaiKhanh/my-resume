import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";

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
      range: "05/2022 — PRESENT",
      title: "Robotics Software Engineer",
      org: "TEMAS ENGINEERING JOINT STOCK COMPANY",
      description:
        "Developed multi-robot fleet management software: Desktop app (Qt C++) and Web app (ReactJS) for configuration, control and real-time monitoring, local backend server (Qt C++) for manage and realtime communication with multi-robots and devices. Developed Mobile App (Flutter) for robot calling. Designed and implemented real-time communication via TCP/IP, MQTT, HTTP (REST APIs) and WebSocket. Contributed to STM32 firmware development during the early prototyping stage. Owned the full software lifecycle: architecture → coding → debugging → testing → release → documentation.",
    },
    {
      range: "06/2020 – 04/2022",
      title: "Embedded Firmware Engineer (MCU)",
      org: "CANON VIETNAM CO., LTD",
      description:
        "Developed Embedded C/C++ firmware on STM32 for motor control, including stepper accel/decel profiles, anti-step-loss algorithms, and PID-based DC motor speed control. Implemented Modbus RTU communication with HMI, and designed finite state machine architecture for control flow and real-time device management.",
    },
  ];

  const education: EduCard[] = [
    {
      title: "Mechatronics Engineering Technology",
      org: "Hanoi University of Industry",
      range: "2016 — 2020",
      description:
        "Focused on robotics, control systems, sensors/actuators, and embedded programming (microcontrollers). GPA: 3.22/4.0.",
      highlight: "Robotics and Embedded Programming",
      featured: false,
    },
  ];

  const certs = [
    {
      title: "Programming Languages",
      category: [
        "C",
        "C++ (OOP & Design Patterns — SOLID)",
        "C#",
        "JavaScript",
        "TypeScript",
        "Dart (Basic)",
      ],
    },
    {
      title: "Frameworks & Libraries",
      category: ["Qt", "ReactJS", "Flutter", "Tailwind CSS"],
    },
    {
      title: "Protocols & Communication",
      category: ["TCP/IP", "UDP", "HTTP", "WebSocket", "MQTT", "Modbus RTU"],
    },
    {
      title: "Tools & IDEs",
      category: [
        "Qt Creator",
        "Visual Studio",
        "VS Code",
        "STM32CubeIDE",
        "Arduino IDE",
      ],
    },
    {
      title: "Version Control & Collaboration",
      category: ["Git", "GitHub", "GitLab"],
    },
  ];

  return (
    <section id="resume" className="container py-10 sm:py-15">
      {/* Header */}
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold md:text-center">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Resume
          </span>
        </h2>
        {/* <p className="text-xl text-muted-foreground md:text-center mt-4">
          A quick snapshot of experience, education, and certifications—built
          with shadcn/ui.
        </p> */}
      </div>

      <div className="grid lg:grid-cols-[1fr,1fr] gap-10 place-items-start mt-10">
        {/* LEFT */}
        <div className="w-full">
          <SectionHeading title="Working Experience" />

          <div className="mt-6">
            <Timeline>
              {experience.map((item, idx) => (
                <TimelineItem
                  key={item.title}
                  range={item.range}
                  isLast={idx === experience.length - 1}
                >
                  <div className="text-lg font-semibold">{item.title}</div>
                  <div className="text-muted-foreground">{item.org}</div>
                  <p className="mt-2 text-muted-foreground">
                    {item.description}
                  </p>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full">
          <SectionHeading title="Education" />

          <div className="mt-6 space-y-4">
            {education.map((ed) => (
              <Card
                key={ed.title}
                className={[
                  "bg-card/60 border-border/60 shadow-sm mb-[20px]",
                  ed.featured ? "ring-1 ring-emerald-400/40" : "",
                ].join(" ")}
              >
                <CardHeader className="space-y-1">
                  <CardTitle className="text-lg">{ed.title}</CardTitle>
                  <div className="text-muted-foreground">{ed.org}</div>
                  <div className="text-muted-foreground">{ed.range}</div>
                </CardHeader>

                <CardContent className="space-y-2">
                  <p className="leading-relaxed text-muted-foreground">
                    {ed.description}
                  </p>

                  {ed.highlight && (
                    <Badge
                      key={ed.highlight}
                      variant="outline"
                      className=" text-sm mr-2 mb-2 bg-black/5 dark:bg-white/5"
                    >
                      {ed.highlight}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <SectionHeading title="Technical Skills" />
          <div className="mt-3 space-y-3">
            {certs.map((c) => (
              // <div
              //   key={c.title}
              //   className="rounded-lg border border-border/60 bg-card/40 p-3"
              // >
              //   <div className="text-lg">{c.title}</div>
              //   <div className="text-muted-foreground">
              //     {c.category.join(" • ")}
              //   </div>
              // </div>

              <Card
                key={c.title}
                className={"bg-card/60 border-border/60 shadow-sm mb-[10px]"}
              >
                <CardHeader className="space-y-1 px-6 py-2">
                  <CardTitle className="text-lg">{c.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-2 px-6 py-2">
                  <p className="leading-relaxed text-muted-foreground">
                    {c.category.join(" • ")}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <Separator className="mt-8 opacity-40" /> */}
        </div>
      </div>
    </section>
  );
};

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/30">
        <div className="h-4 w-4 rounded-full bg-emerald-300" />
      </div>
      <div>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <div className="mt-1 h-[3px] w-full rounded bg-emerald-400/40" />
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
      {/* LINE (từ tâm dot xuống) */}
      {!isLast && (
        <div className="absolute left-3 top-2 h-[calc(100%+2.5rem)] w-[1px] bg-emerald-400/40 -translate-x-1/2" />
      )}

      {/* DOT */}
      <div className="absolute left-3 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/15" />

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
