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
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isFlipped ? "md:grid-flow-col-dense" : ""
          }`}
        >
          {/* setting up the text for the bio */}
          <div
            className={`space-y-6 transition-all duration-1000 transform ${
              isFlipped ? "md:col-start-2" : ""
            }`}
          >
            <div
              className={`p-6 rounded-lg transition-all duration-1000 ${
                isFlipped ? "bg-slate-700" : "bg-slate-800"
              }`}
              style={{
                transform: isFlipped ? "scaleY(-1)" : "scaleY(1)",
              }}
            >
              <h4 className="text-xl font-semibold text-white mb-4">
                Who's that Pokémon?
              </h4>
              {/* about me section */}
              <p className="text-gray-300 mb-4">
                I'm a passionate second-year software engineering student with
                ample experience with C/C++, JS/TS and python. When I'm not
                coding, you'll find me on a cricket field, keeping behind the
                stumps or on the football pitch, sending it top corner.
              </p>

              <p className="text-gray-300">
                To be honest, this whole "opposites attract" theme is quite a
                hassle to get around but click the button if you want to see my
                best.
                {isReverseScrolling &&
                  " (Anything special about the scrolling here?)"}
              </p>
            </div>

            <div
              className={`p-6 rounded-lg transition-all duration-1000 ${
                isFlipped ? "bg-slate-700" : "bg-slate-800"
              }`}
              style={{
                transform: isFlipped ? "scaleY(-1)" : "scaleY(1)",
              }}
            >
              <h4 className="text-xl font-semibold text-white mb-4">
                Quotes of the Day
              </h4>
              {/* motivational quote */}
              <p className="text-gray-300">
                {isFlipped
                  ? '"And those who were seen dancing were thought to be insane by those who could not hear the music" - Friedrich Nietzche'
                  : '"We are all broken. The sooner you accept this, the sooner you can truly understand what it means to be human" - Aristotle'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
