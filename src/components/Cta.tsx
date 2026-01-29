import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Email",
    description: "khanhhhdt@gmail.com",
    icon: <Mail className="h-8 w-8 text-primary" />,
  },
  {
    title: "Phone / Zalo",
    description: "0982677046",
    icon: <Phone className="h-8 w-8 text-primary" />,
  },
  {
    title: "Location",
    description:
      "Minh Khai commune of Tu Liem district, Hanoi capital, Vietnam.",
    icon: <MapPin className="h-8 w-8 text-primary" />,
  },
];

export const Cta = () => {
  return (
    <section id="cta" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col gap-4 md:gap-8 md:justify-center">
          <h2 className="text-3xl md:text-4xl font-bold md:text-center">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Contact{" "}
            </span>
            Me
          </h2>

          <p className="text-muted-foreground text-xl flex flex-wrap md:justify-center">
            You can reach me by email, phone or zalo.
          </p>

          {serviceList.map(({ icon, title, description }) => (
            <Card key={title}>
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="mt-1 bg-primary/20 p-2 rounded-xl flex items-center justify-center">
                  {icon}
                </div>

                <div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="text-md mt-2">
                    {description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
