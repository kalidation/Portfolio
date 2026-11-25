import type { ReactNode } from "react";

interface IProps {
  id: string;
  title: string;
  intro?: string;
  dark?: boolean;
  children: ReactNode;
}

export const Section = ({ id, title, intro, dark, children }: IProps) => (
  <section
    id={id}
    className={`section-anchor ${
      dark ? "on-dark bg-ink text-paper" : "text-ink"
    }`}
  >
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
          {title}
        </h2>
        {intro && (
          <p
            className={`max-w-[62ch] text-base sm:text-lg ${
              dark ? "text-paper/75" : "text-ink-soft"
            }`}
          >
            {intro}
          </p>
        )}
      </div>
      <div className="mt-10 sm:mt-14">{children}</div>
    </div>
  </section>
);
