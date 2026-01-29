import { LinkedInLogoIcon, GlobeIcon } from "@radix-ui/react-icons";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/khanh.thoai.54/",
    icon: GlobeIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dam-khanh-3b206a3a6/",
    icon: LinkedInLogoIcon,
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-16 text-center">
        <h2 className="text-4xl font-semibold tracking-tight">Dam Khanh</h2>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
          I’m currently looking for opportunities to collaborate. If you have a
          project that may be a good fit, please feel free to reach out.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-12 w-12 place-items-center rounded-full bg-emerald-400 text-slate-900 transition hover:opacity-90"
            >
              <s.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
