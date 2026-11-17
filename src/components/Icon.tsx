type IconName = 'arrow' | 'print' | 'spark' | 'vinyl';
export default function Icon({ name = 'arrow' }: { name?: IconName }) {
  return <svg className="graphic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {name === 'arrow' && <path d="M5 19 19 5M5 5h14v14" />}
    {name === 'print' && <><path d="M3 3h18v18H3zM3 8h18M3 13h18M3 18h18" /></>}
    {name === 'spark' && <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5" />}
    {name === 'vinyl' && <><path d="M3 8h13a5 5 0 0 1 5 5v6H8V8M3 8a3 3 0 0 1 6 0M8 19l5-5h8" /></>}
  </svg>;
}
