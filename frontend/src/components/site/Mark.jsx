const Mark = ({ className = "h-5 w-5" }) => (
    <svg
        viewBox="0 0 64 64"
        className={className}
        aria-hidden="true"
        focusable="false"
    >
        <circle cx="32" cy="32" r="32" fill="#F48FBB" />
        <rect x="14" y="30" width="8" height="20" fill="#2150DC" />
        <rect x="28" y="14" width="8" height="36" fill="#2150DC" />
        <rect x="42" y="24" width="8" height="26" fill="#2150DC" />
    </svg>
);

export default Mark;
