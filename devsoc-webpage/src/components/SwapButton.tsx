import { useSwap } from "../SwapContext";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

export function SwapButton() {
  const { isFlipped, toggleSwap, isReverseScrolling } = useSwap();

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center gap-2">
      {/* button is  imported from shadcn */}
      <Button
        onClick={toggleSwap}
        className={`transition-all duration-500 ${
          isFlipped
            ? "bg-yellow-500 hover:bg-yellow-600 text-black"
            : "bg-purple-600 hover:bg-purple-700 text-white"
        }`}
        size="lg"
      >
        <RotateCcw className="mr-2 h-5 w-5" />
        {isFlipped ? "Return to Reality" : "Flip Reality"}
      </Button>

      {isReverseScrolling && (
        <div
          className={`text-xs px-3 py-1 rounded-full transition-all duration-500 ${
            isFlipped ? "bg-yellow-400 text-black" : "bg-purple-400 text-white"
          }`}
        >
          ⬆️ Reverse Scroll Active ⬇️
        </div>
      )}
    </div>
  );
}
