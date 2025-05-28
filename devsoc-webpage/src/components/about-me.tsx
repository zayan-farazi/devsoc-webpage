export function AboutSection() {
  //   initialise flipped variables
  let isFlipped, isReverseScrolling;
  return (
    // once again applying a header w/ transitions
    <section
      className="py-20 px-8 transition-all duration-1000"
      style={{
        transform: isFlipped ? "scaleY(-1)" : "scaleY(1)",
        filter: isFlipped ? "invert(1) hue-rotate(180deg)" : "none",
      }}
    >
      <div className="max-w-4xl mx-auto"></div>
    </section>
  );
}
