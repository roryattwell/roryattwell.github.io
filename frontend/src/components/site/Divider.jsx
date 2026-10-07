const Divider = ({ idx = 0, variant = "bars" }) => (
    <div
        className={`divider-pattern divider-${variant} my-2 md:my-4`}
        aria-hidden="true"
        data-testid={`section-divider-${idx}`}
    />
);

export default Divider;
