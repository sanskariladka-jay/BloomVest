import { createFileRoute } from "@tanstack/react-router";
import { Shield, TrendingUp, Handshake, Calendar, Wallet, Coins, HandCoins, ArrowRight, CheckCircle2 } from "lucide-react";
import bannerImg from "@/assets/bloomvest-banner.png";

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScpyVfLRf73gXfmWGEIb4_2m7v8UmYfRZTFYQxSWYKIKT74UA/viewform";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BloomVest Capital — Money Gala | Invest Today, Grow Tomorrow" },
      {
        name: "description",
        content:
          "Join BloomVest Capital Money Gala. Invest ₹100 to ₹3000 and get up to ₹3995 back in 15 days. Safe, secure, and trusted investment plans.",
      },
      { property: "og:title", content: "BloomVest Capital — Money Gala" },
      {
        property: "og:description",
        content: "Invest Today, Grow Tomorrow. Returns settled to your account in 15 days.",
      },
      { property: "og:image", content: bannerImg },
    ],
  }),
  component: Index,
});

const plans = [
  { spent: "₹100", get: "₹130", icon: Wallet },
  { spent: "₹1000", get: "₹1330", icon: TrendingUp },
  { spent: "₹2000", get: "₹2660", icon: Coins },
  { spent: "₹3000", get: "₹3995", icon: HandCoins },
];

const features = [
  { icon: Shield, title: "Safe & Secure", desc: "Bank-grade security for every transaction." },
  { icon: TrendingUp, title: "High Returns", desc: "Earn up to 33% on every plan you choose." },
  { icon: Handshake, title: "Trusted & Reliable", desc: "Thousands of investors trust BloomVest." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--gradient-hero)] text-primary-foreground font-bold">
              B
            </div>
            <div className="leading-tight">
              <div className="font-bold text-primary text-sm sm:text-base">BloomVest</div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.2em] text-secondary font-semibold">CAPITAL</div>
            </div>
          </div>
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-secondary px-3 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-secondary-foreground shadow-[var(--shadow-green)] transition hover:scale-105"
          >
            Register <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
        </div>
      </header>

      {/* Hero with banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-[0.06]" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="inline-block rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-secondary">
              🎉 Money Gala Event
            </span>
            <h1 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] text-primary">
              Invest Today,{" "}
              <span className="bg-[var(--gradient-green)] bg-clip-text text-transparent">
                Grow Tomorrow.
              </span>
            </h1>
            <p className="mt-4 sm:mt-5 max-w-lg text-base sm:text-lg text-muted-foreground">
              Turn ₹100 into ₹130 — or ₹3000 into ₹3995 — with BloomVest Capital's Money Gala.
              Returns settled straight to your account in just <b className="text-secondary">15 days</b>.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-green)] px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-white shadow-[var(--shadow-green)] transition hover:scale-105"
              >
                Register Now <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#plans"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                View Plans
              </a>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-primary"><CheckCircle2 className="h-4 w-4 text-secondary" /> Safe & Secure</div>
              <div className="flex items-center gap-2 text-primary"><CheckCircle2 className="h-4 w-4 text-secondary" /> 15-day Payout</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-hero)] opacity-20 blur-2xl" />
            <img
              src={bannerImg}
              alt="BloomVest Capital Money Gala — investment plans and returns"
              className="relative w-full rounded-2xl sm:rounded-3xl shadow-[var(--shadow-elegant)] ring-1 ring-border"
            />
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="mx-auto max-w-6xl px-4 py-12 sm:py-20">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary">Investment Plans</h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">Choose a plan. Settle in 15 days. Repeat.</p>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => {
            const Icon = p.icon;
            const featured = i === 3;
            return (
              <div
                key={p.spent}
                className={`group relative overflow-hidden rounded-2xl p-5 sm:p-6 transition hover:-translate-y-1 ${
                  featured
                    ? "bg-[var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-elegant)]"
                    : "border border-border bg-card shadow-sm hover:shadow-[var(--shadow-green)]"
                }`}
              >
                {featured && (
                  <span className="absolute right-3 top-3 rounded-full bg-[color:var(--gold)] px-2 py-0.5 text-[10px] font-bold text-primary">
                    BEST
                  </span>
                )}
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${featured ? "bg-white/15" : "bg-secondary/10 text-secondary"}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className={`text-xs uppercase tracking-wider ${featured ? "text-white/70" : "text-muted-foreground"}`}>Spent</div>
                <div className={`text-2xl font-bold ${featured ? "text-white" : "text-primary"}`}>{p.spent}</div>
                <div className={`my-3 h-px w-full ${featured ? "bg-white/20" : "bg-border"}`} />
                <div className={`text-xs uppercase tracking-wider ${featured ? "text-white/70" : "text-muted-foreground"}`}>You Get</div>
                <div className={`text-3xl font-black ${featured ? "text-white" : "text-secondary"}`}>{p.get}</div>
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 inline-flex items-center gap-1 text-sm font-bold ${featured ? "text-white" : "text-secondary"}`}
                >
                  Invest now <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* 15 Days callout */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:pb-20">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-[var(--gradient-navy)] p-6 sm:p-10 md:p-14 text-primary-foreground">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-secondary/20">
                <Calendar className="h-6 w-6 sm:h-7 sm:w-7 text-secondary" />
              </div>
              <h3 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl font-black">
                Money settles to your account in{" "}
                <span className="text-secondary">15 Days</span> after investing.
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
                No delays. No hidden fees. Just consistent, reliable returns — every single time.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-3 sm:gap-4 rounded-xl bg-white/5 p-3 sm:p-4 ring-1 ring-white/10">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-base">{f.title}</div>
                      <div className="text-xs sm:text-sm text-white/70">{f.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section id="register" className="mx-auto max-w-6xl px-4 pb-12 sm:pb-20">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-secondary/30 bg-card p-6 sm:p-10 md:p-16 text-center shadow-[var(--shadow-green)]">
          <div className="absolute inset-0 bg-[var(--gradient-green)] opacity-[0.05]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary">Register Now</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground">
              Start your investment journey with{" "}
              <span className="font-bold text-secondary">BloomVest Capital</span>. Fill the
              registration form to join the Money Gala.
            </p>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[var(--gradient-hero)] px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:scale-105"
            >
              Open Registration Form <ArrowRight className="h-5 w-5" />
            </a>
            <div className="mt-5 sm:mt-6 break-all text-[10px] sm:text-xs text-muted-foreground">
              {REGISTRATION_URL}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center">
          <div className="text-sm font-bold tracking-[0.3em] text-secondary">
            INVEST TODAY, GROW TOMORROW
          </div>
          <div className="mt-2 text-xs text-white/60">
            © {new Date().getFullYear()} BloomVest Capital. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
