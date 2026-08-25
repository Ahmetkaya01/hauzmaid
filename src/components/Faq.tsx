import { FAQ_ITEMS } from "@/lib/constants";

export function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-[var(--hm-border)] bg-[var(--hm-bg)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium tracking-wide text-[var(--hm-accent)] uppercase">
          FAQ
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium text-[var(--hm-text)] sm:text-4xl">
          Common questions about hourly maid service in KL
        </h2>
        <div className="mt-10 max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group border-b border-[var(--hm-border)] pb-3"
            >
              <summary className="cursor-pointer list-none py-3 font-medium text-[var(--hm-text)] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span
                    className="mt-0.5 text-[var(--hm-accent)] transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="pb-3 text-[var(--hm-muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
