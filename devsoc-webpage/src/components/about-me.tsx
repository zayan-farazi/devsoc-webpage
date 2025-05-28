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
      <div className="max-w-4xl mx-auto">
        <h3
          // this is the styling for the "About Me" header text
          className={`text-3xl font-bold text-center mb-12 transition-colors duration-1000 ${
            isFlipped ? "text-yellow-400" : "text-purple-400"
          }`}
          style={{
            transform: isFlipped ? "scaleY(-1)" : "scaleY(1)",
          }}
        >
          About Me
        </h3>
      </div>
    </section>
  );
}
