export function Logo({ light = true }: { light?: boolean }) {
  return (
    <span className={`brand-lockup ${light ? "brand-lockup--light" : ""}`}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 34 42" role="presentation">
          <path d="M2 4 17 0l15 4v5L17 5 2 9Z" />
          <path d="M2 12 17 8l15 4v5l-15-4-15 4Z" />
          <path d="M2 20 17 16l15 4v5l-15-4-15 4Z" />
          <path d="M2 28 17 24l15 4v5l-15-4-15 4Z" />
          <path d="M2 36 17 32l15 4v5l-15-4-15 4Z" />
        </svg>
      </span>
      <span className="brand-word">
        CONCRE<span>BOX</span>
      </span>
      <span className="brand-pty">PTY</span>
    </span>
  );
}
