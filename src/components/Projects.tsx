import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  project: string;
  role: string;
  date: string;
  responsibilities: string;
  results: string;
  techStack: string[];
}

export const features: FeatureProps[] = [
  {
    project: "Multi-Robot Configuration & Real-Time Monitoring - Desktop App",
    role: "Robotics Software Engineer (Qt/C++)",
    date: "03/2023 – Present",
    responsibilities:
      "Designed a scalable software architecture and functional modules. Developed UI graphics for robot configuration and monitoring. Designed and implemented communication APIs using TCP/IP, MQTT, HTTP (REST APIs) and WebSocket. Collaborated with the embedded team to design and implement new features.",
    results: "Production.",
    techStack: [
      "Qt",
      "C++",
      "OOP & Design Patterns",
      "TCP/IP",
      "MQTT",
      "HTTP / REST APIs",
      "WebSocket",
    ],
  },
  {
    project: "Multi-Robot Management - Local Backend App",
    role: "Robotics Software Engineer (Qt/C++)",
    date: "04/2024 – Present",
    responsibilities:
      "Designed a scalable software architecture for manage and realtime communication 20+ robtos and 20+ devices. Designed and implemented communication APIs using TCP/IP, MQTT, HTTP (REST APIs) and WebSocket; authentication and authorization (JWT-like).",
    results: "Production.",
    techStack: [
      "Qt",
      "C++",
      "OOP & Design Patterns",
      "Multithreading & Concurrency",
      "TCP/IP",
      "SQLite",
      "MQTT",
      "HTTP / REST APIs",
      "WebSocket",
    ],
  },
  {
    project: "Multi-Robot Management & Real-Time Monitoring - Web App",
    role: "Robotics Software Engineer (Frontend Developer)",
    date: "01/2025 – Present",
    responsibilities:
      "Clone desktop app to web app using ReactJS + TypeScript, Tailwind CSS and Shadcn/ui. Implemented communication APIs using HTTP (REST APIs) and WebSocket.",
    results: "Developing.",
    techStack: [
      "ReactJS",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "HTTP / REST APIs",
      "WebSocket",
    ],
  },
  {
    project:
      "Personal Device Assistance for Calling and Registration Robot - Mobile App",
    role: "Robotics Software Engineer (Mobile App Developer)",
    date: "06/2025 – Present",
    responsibilities:
      "Developed mobile applications for robot calling and task/mission registration. Implemented communication APIs using MQTT, HTTP (REST APIs) and WebSocket.",
    results: "Developing.",
    techStack: ["Flutter", "REST APIs", "WebSocket", "MQTT"],
  },
  {
    project: "AMR Robot - Embedded Firmware",
    role: "Robotics / Embedded Firmware Engineer",
    date: "05/2022 – 06/2023",
    responsibilities:
      "Programmed STM32 firmware for Controller Board and Power Safety Boards. Implemented motion tracking algorithms for controling robot position. Managed peripherals (Strip LED RGB, speaker, servo motors, BMS, ultrasonic sensors, LiDAR, etc.). Communicated with the IPC via TCP/IP and with devices via Modbus RTU (RS485/RS232). Make electrical integration drawings. Built C# (WinForms) terminal tools for testing/debugging.",
    results: "Released version 1.0.",
    techStack: [
      "Embedded C/C++",
      "STM32F4",
      "TCP/IP & UDP",
      "RS232 / RS485",
      "Modbus RTU",
      "C# WinForms",
    ],
  },
  {
    project: "Robot 3-Axis",
    role: "Embedded Firmware Engineer (MCU) & Schematic Design",
    date: "10/2020 – 04/2022",
    responsibilities:
      "Programmed STM32H7 firmware to control 4 stepper motors moving synchronously. Designed and implemented acceleration/deceleration profiles and anti-step-loss algorithms for stepper motors. Communicated with the HMI via Modbus RTU for configuration, control, and teaching points. Designed and improved schematic circuits for control and power boards using KiCad.",
    results: "Manufactured 10+ sets.",
    techStack: ["Embedded C/C++", "STM32H7", "Stepper Motors", "KiCad"],
  },
  {
    project: "Automatic Wire Cutting Machine",
    role: "Embedded Firmware Engineer (MCU)",
    date: "07/2021 – 11/2021",
    responsibilities:
      "Programmed STM32 firmware to control stepper motors to move the predefined setup positions. Received position/command signals via PLC I/O; ",
    results: "Prototype.",
    techStack: ["Embedded C/C++", "STM32H7", "Stepper Motors"],
  },
  {
    project: "Jig Fixing Unit",
    role: "Embedded Firmware Engineer (MCU)",
    date: "06/2020 – 10/2020",
    responsibilities:
      "Programmed PIC16F firmware for the jig fixing unit to move to precise position using a DC motor and sensors. Improved the schematic by adding a current sensor to monitor motor current for protection and diagnostics.",
    results: "Production.",
    techStack: ["Embedded C", "PIC16F", "KiCad"],
  },
];

const featureList: string[] = [
  "Embedded C/C++",
  "STM32 / ESP32",
  "Qt / C++",
  "C++ OOP & Design Patterns (SOLID)",
  "Multithreading & Concurrency",
  "TCP/IP & UDP",
  "MQTT",
  "WebSocket",
  "HTTP / REST APIs",
  "SQLite / MySQL",
  "ReactJS + TypeScript",
  "Flutter",
];

export const Projects = () => {
  return (
    <section id="projects" className="container py-10 sm:py-15 space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold md:text-center">
        My{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Projects
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-2">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((project: FeatureProps, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-lg">{project.project}</CardTitle>
            </CardHeader>

            <CardDescription className="px-4 -mt-2 mb-2 text-sm text-muted-foreground">
              <p>{project.date}</p>
              <p className="font-bold">{project.role}</p>
            </CardDescription>

            <CardContent>
              <div>
                <span className="font-bold">Role: </span>
                {project.responsibilities}
              </div>
              <div>
                <span className="font-bold">Result: </span>
                {project.results}
              </div>
            </CardContent>

            <CardFooter className="flex flex-wrap">
              {project.techStack?.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-sm mr-2 mb-2 bg-black/5 dark:bg-white/5"
                >
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
