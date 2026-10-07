const Mark = ({ className = "h-5 w-5" }) => (
    <svg
        viewBox="0 0 64 64"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <rect width="64" height="64" rx="14" fill="#141312" />
        <rect x="13" y="28" width="9" height="22" fill="#F5F2EB" />
        <rect x="27.5" y="14" width="9" height="36" fill="#8C3B2B" />
        <rect x="42" y="22" width="9" height="28" fill="#F5F2EB" />
    </svg>
);

export default Mark;
