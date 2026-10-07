const Divider = ({ idx = 0 }) => (
    <div
        className="divider-pattern my-2 md:my-4"
        aria-hidden="true"
        data-testid={`section-divider-${idx}`}
    />
);

export default Divider;
