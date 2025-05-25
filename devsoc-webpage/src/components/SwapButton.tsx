function SwapButton() {
  return (
    <button
      type="button"
      className="btn btn-primary btn-lg"
      // onClick requires a function to run when clicked, in this case we used an empty lambda that prints swap triggered
      onClick={() => console.log("Swap Triggered")}
    >
      Click me please!
    </button>
  );
}

export default SwapButton;
