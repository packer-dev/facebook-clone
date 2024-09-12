
const shadow = {
  shadowColor: "#ccc",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.1,
  shadowRadius: 2,

  elevation: 2,
};

const absoluteFull = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

const css = {
  absolute: {
    position: "absolute",
  },
  relative: {
    position: "relative",
  },
  "left-0": {
    left: 0,
  },
  "top-0": {
    top: 0,
  },
  "right-0": {
    right: 0,
  },
  "bottom-0": {
    bottom: 0,
  },
  "gap-0": {
    gap: 0,
  },
  "left-1": {
    left: 4,
  },
  "top-1": {
    top: 4,
  },
  "bottom-1": {
    bottom: 4,
  },
  "right-1": {
    right: 4,
  },
  "h-1": {
    height: 4,
  },
  "w-1": {
    width: 4,
  },
  "gap-1": {
    gap: 4,
  },
  "left-1.5": {
    left: 6,
  },
  "-left-1.5": {
    left: -6,
  },
  "right-1.5": {
    right: 6,
  },
  "-right-1.5": {
    right: -6,
  },
  "bottom-1.5": {
    bottom: 6,
  },
  "-bottom-1.5": {
    bottom: -6,
  },
  "top-1.5": {
    top: 6,
  },
  "-top-1.5": {
    top: -6,
  },
  "w-1.5": {
    width: 6,
  },
  "-w-1.5": {
    width: -6,
  },
  "h-1.5": {
    height: 6,
  },
  "-h-1.5": {
    height: -6,
  },
  "gap-1.5": {
    gap: 6,
  },
  "-gap-1.5": {
    gap: -6,
  },
  "left-2": {
    left: 8,
  },
  "-left-2": {
    left: -8,
  },
  "right-2": {
    right: 8,
  },
  "-right-2": {
    right: -8,
  },
  "bottom-2": {
    bottom: 8,
  },
  "-bottom-2": {
    bottom: -8,
  },
  "top-2": {
    top: 8,
  },
  "-top-2": {
    top: -8,
  },
  "w-2": {
    width: 8,
  },
  "-w-2": {
    width: -8,
  },
  "h-2": {
    height: 8,
  },
  "-h-2": {
    height: -8,
  },
  "gap-2": {
    gap: 8,
  },
  "-gap-2": {
    gap: -8,
  },
  "left-2.5": {
    left: 10,
  },
  "-left-2.5": {
    left: -10,
  },
  "right-2.5": {
    right: 10,
  },
  "-right-2.5": {
    right: -10,
  },
  "bottom-2.5": {
    bottom: 10,
  },
  "-bottom-2.5": {
    bottom: -10,
  },
  "top-2.5": {
    top: 10,
  },
  "-top-2.5": {
    top: -10,
  },
  "w-2.5": {
    width: 10,
  },
  "-w-2.5": {
    width: -10,
  },
  "h-2.5": {
    height: 10,
  },
  "-h-2.5": {
    height: -10,
  },
  "gap-2.5": {
    gap: 10,
  },
  "-gap-2.5": {
    gap: -10,
  },
  "left-3": {
    left: 12,
  },
  "-left-3": {
    left: -12,
  },
  "right-3": {
    right: 12,
  },
  "-right-3": {
    right: -12,
  },
  "bottom-3": {
    bottom: 12,
  },
  "-bottom-3": {
    bottom: -12,
  },
  "top-3": {
    top: 12,
  },
  "-top-3": {
    top: -12,
  },
  "w-3": {
    width: 12,
  },
  "-w-3": {
    width: -12,
  },
  "h-3": {
    height: 12,
  },
  "-h-3": {
    height: -12,
  },
  "gap-3": {
    gap: 12,
  },
  "-gap-3": {
    gap: -12,
  },
  "left-3.5": {
    left: 14,
  },
  "-left-3.5": {
    left: -14,
  },
  "right-3.5": {
    right: 14,
  },
  "-right-3.5": {
    right: -14,
  },
  "bottom-3.5": {
    bottom: 14,
  },
  "-bottom-3.5": {
    bottom: -14,
  },
  "top-3.5": {
    top: 14,
  },
  "-top-3.5": {
    top: -14,
  },
  "w-3.5": {
    width: 14,
  },
  "-w-3.5": {
    width: -14,
  },
  "h-3.5": {
    height: 14,
  },
  "-h-3.5": {
    height: -14,
  },
  "gap-3.5": {
    gap: 14,
  },
  "-gap-3.5": {
    gap: -14,
  },
  "left-4": {
    left: 16,
  },
  "-left-4": {
    left: -16,
  },
  "right-4": {
    right: 16,
  },
  "-right-4": {
    right: -16,
  },
  "bottom-4": {
    bottom: 16,
  },
  "-bottom-4": {
    bottom: -16,
  },
  "top-4": {
    top: 16,
  },
  "-top-4": {
    top: -16,
  },
  "w-4": {
    width: 16,
  },
  "-w-4": {
    width: -16,
  },
  "h-4": {
    height: 16,
  },
  "-h-4": {
    height: -16,
  },
  "gap-4": {
    gap: 16,
  },
  "-gap-4": {
    gap: -16,
  },
  "left-4.5": {
    left: 18,
  },
  "-left-4.5": {
    left: -18,
  },
  "right-4.5": {
    right: 18,
  },
  "-right-4.5": {
    right: -18,
  },
  "bottom-4.5": {
    bottom: 18,
  },
  "-bottom-4.5": {
    bottom: -18,
  },
  "top-4.5": {
    top: 18,
  },
  "-top-4.5": {
    top: -18,
  },
  "w-4.5": {
    width: 18,
  },
  "-w-4.5": {
    width: -18,
  },
  "h-4.5": {
    height: 18,
  },
  "-h-4.5": {
    height: -18,
  },
  "gap-4.5": {
    gap: 18,
  },
  "-gap-4.5": {
    gap: -18,
  },
  "left-5": {
    left: 20,
  },
  "-left-5": {
    left: -20,
  },
  "right-5": {
    right: 20,
  },
  "-right-5": {
    right: -20,
  },
  "bottom-5": {
    bottom: 20,
  },
  "-bottom-5": {
    bottom: -20,
  },
  "top-5": {
    top: 20,
  },
  "-top-5": {
    top: -20,
  },
  "w-5": {
    width: 20,
  },
  "-w-5": {
    width: -20,
  },
  "h-5": {
    height: 20,
  },
  "-h-5": {
    height: -20,
  },
  "gap-5": {
    gap: 20,
  },
  "-gap-5": {
    gap: -20,
  },
  "left-5.5": {
    left: 22,
  },
  "-left-5.5": {
    left: -22,
  },
  "right-5.5": {
    right: 22,
  },
  "-right-5.5": {
    right: -22,
  },
  "bottom-5.5": {
    bottom: 22,
  },
  "-bottom-5.5": {
    bottom: -22,
  },
  "top-5.5": {
    top: 22,
  },
  "-top-5.5": {
    top: -22,
  },
  "w-5.5": {
    width: 22,
  },
  "-w-5.5": {
    width: -22,
  },
  "h-5.5": {
    height: 22,
  },
  "-h-5.5": {
    height: -22,
  },
  "gap-5.5": {
    gap: 22,
  },
  "-gap-5.5": {
    gap: -22,
  },
  "left-6": {
    left: 24,
  },
  "-left-6": {
    left: -24,
  },
  "right-6": {
    right: 24,
  },
  "-right-6": {
    right: -24,
  },
  "bottom-6": {
    bottom: 24,
  },
  "-bottom-6": {
    bottom: -24,
  },
  "top-6": {
    top: 24,
  },
  "-top-6": {
    top: -24,
  },
  "w-6": {
    width: 24,
  },
  "-w-6": {
    width: -24,
  },
  "h-6": {
    height: 24,
  },
  "-h-6": {
    height: -24,
  },
  "gap-6": {
    gap: 24,
  },
  "-gap-6": {
    gap: -24,
  },
  "left-6.5": {
    left: 26,
  },
  "-left-6.5": {
    left: -26,
  },
  "right-6.5": {
    right: 26,
  },
  "-right-6.5": {
    right: -26,
  },
  "bottom-6.5": {
    bottom: 26,
  },
  "-bottom-6.5": {
    bottom: -26,
  },
  "top-6.5": {
    top: 26,
  },
  "-top-6.5": {
    top: -26,
  },
  "w-6.5": {
    width: 26,
  },
  "-w-6.5": {
    width: -26,
  },
  "h-6.5": {
    height: 26,
  },
  "-h-6.5": {
    height: -26,
  },
  "gap-6.5": {
    gap: 26,
  },
  "-gap-6.5": {
    gap: -26,
  },
  "left-7": {
    left: 28,
  },
  "-left-7": {
    left: -28,
  },
  "right-7": {
    right: 28,
  },
  "-right-7": {
    right: -28,
  },
  "bottom-7": {
    bottom: 28,
  },
  "-bottom-7": {
    bottom: -28,
  },
  "top-7": {
    top: 28,
  },
  "-top-7": {
    top: -28,
  },
  "w-7": {
    width: 28,
  },
  "-w-7": {
    width: -28,
  },
  "h-7": {
    height: 28,
  },
  "-h-7": {
    height: -28,
  },
  "gap-7": {
    gap: 28,
  },
  "-gap-7": {
    gap: -28,
  },
  "left-7.5": {
    left: 30,
  },
  "-left-7.5": {
    left: -30,
  },
  "right-7.5": {
    right: 30,
  },
  "-right-7.5": {
    right: -30,
  },
  "bottom-7.5": {
    bottom: 30,
  },
  "-bottom-7.5": {
    bottom: -30,
  },
  "top-7.5": {
    top: 30,
  },
  "-top-7.5": {
    top: -30,
  },
  "w-7.5": {
    width: 30,
  },
  "-w-7.5": {
    width: -30,
  },
  "h-7.5": {
    height: 30,
  },
  "-h-7.5": {
    height: -30,
  },
  "gap-7.5": {
    gap: 30,
  },
  "-gap-7.5": {
    gap: -30,
  },
  "left-8": {
    left: 32,
  },
  "-left-8": {
    left: -32,
  },
  "right-8": {
    right: 32,
  },
  "-right-8": {
    right: -32,
  },
  "bottom-8": {
    bottom: 32,
  },
  "-bottom-8": {
    bottom: -32,
  },
  "top-8": {
    top: 32,
  },
  "-top-8": {
    top: -32,
  },
  "w-8": {
    width: 32,
  },
  "-w-8": {
    width: -32,
  },
  "h-8": {
    height: 32,
  },
  "-h-8": {
    height: -32,
  },
  "gap-8": {
    gap: 32,
  },
  "-gap-8": {
    gap: -32,
  },
  "left-8.5": {
    left: 34,
  },
  "-left-8.5": {
    left: -34,
  },
  "right-8.5": {
    right: 34,
  },
  "-right-8.5": {
    right: -34,
  },
  "bottom-8.5": {
    bottom: 34,
  },
  "-bottom-8.5": {
    bottom: -34,
  },
  "top-8.5": {
    top: 34,
  },
  "-top-8.5": {
    top: -34,
  },
  "w-8.5": {
    width: 34,
  },
  "-w-8.5": {
    width: -34,
  },
  "h-8.5": {
    height: 34,
  },
  "-h-8.5": {
    height: -34,
  },
  "gap-8.5": {
    gap: 34,
  },
  "-gap-8.5": {
    gap: -34,
  },
  "left-9": {
    left: 36,
  },
  "-left-9": {
    left: -36,
  },
  "right-9": {
    right: 36,
  },
  "-right-9": {
    right: -36,
  },
  "bottom-9": {
    bottom: 36,
  },
  "-bottom-9": {
    bottom: -36,
  },
  "top-9": {
    top: 36,
  },
  "-top-9": {
    top: -36,
  },
  "w-9": {
    width: 36,
  },
  "-w-9": {
    width: -36,
  },
  "h-9": {
    height: 36,
  },
  "-h-9": {
    height: -36,
  },
  "gap-9": {
    gap: 36,
  },
  "-gap-9": {
    gap: -36,
  },
  "left-9.5": {
    left: 38,
  },
  "-left-9.5": {
    left: -38,
  },
  "right-9.5": {
    right: 38,
  },
  "-right-9.5": {
    right: -38,
  },
  "bottom-9.5": {
    bottom: 38,
  },
  "-bottom-9.5": {
    bottom: -38,
  },
  "top-9.5": {
    top: 38,
  },
  "-top-9.5": {
    top: -38,
  },
  "w-9.5": {
    width: 38,
  },
  "-w-9.5": {
    width: -38,
  },
  "h-9.5": {
    height: 38,
  },
  "-h-9.5": {
    height: -38,
  },
  "gap-9.5": {
    gap: 38,
  },
  "-gap-9.5": {
    gap: -38,
  },
  "left-10": {
    left: 40,
  },
  "-left-10": {
    left: -40,
  },
  "right-10": {
    right: 40,
  },
  "-right-10": {
    right: -40,
  },
  "bottom-10": {
    bottom: 40,
  },
  "-bottom-10": {
    bottom: -40,
  },
  "top-10": {
    top: 40,
  },
  "-top-10": {
    top: -40,
  },
  "w-10": {
    width: 40,
  },
  "-w-10": {
    width: -40,
  },
  "h-10": {
    height: 40,
  },
  "-h-10": {
    height: -40,
  },
  "gap-10": {
    gap: 40,
  },
  "-gap-10": {
    gap: -40,
  },
  "left-10.5": {
    left: 42,
  },
  "-left-10.5": {
    left: -42,
  },
  "right-10.5": {
    right: 42,
  },
  "-right-10.5": {
    right: -42,
  },
  "bottom-10.5": {
    bottom: 42,
  },
  "-bottom-10.5": {
    bottom: -42,
  },
  "top-10.5": {
    top: 42,
  },
  "-top-10.5": {
    top: -42,
  },
  "w-10.5": {
    width: 42,
  },
  "-w-10.5": {
    width: -42,
  },
  "h-10.5": {
    height: 42,
  },
  "-h-10.5": {
    height: -42,
  },
  "gap-10.5": {
    gap: 42,
  },
  "-gap-10.5": {
    gap: -42,
  },
  "left-11": {
    left: 44,
  },
  "-left-11": {
    left: -44,
  },
  "right-11": {
    right: 44,
  },
  "-right-11": {
    right: -44,
  },
  "bottom-11": {
    bottom: 44,
  },
  "-bottom-11": {
    bottom: -44,
  },
  "top-11": {
    top: 44,
  },
  "-top-11": {
    top: -44,
  },
  "w-11": {
    width: 44,
  },
  "-w-11": {
    width: -44,
  },
  "h-11": {
    height: 44,
  },
  "-h-11": {
    height: -44,
  },
  "gap-11": {
    gap: 44,
  },
  "-gap-11": {
    gap: -44,
  },
  "left-11.5": {
    left: 46,
  },
  "-left-11.5": {
    left: -46,
  },
  "right-11.5": {
    right: 46,
  },
  "-right-11.5": {
    right: -46,
  },
  "bottom-11.5": {
    bottom: 46,
  },
  "-bottom-11.5": {
    bottom: -46,
  },
  "top-11.5": {
    top: 46,
  },
  "-top-11.5": {
    top: -46,
  },
  "w-11.5": {
    width: 46,
  },
  "-w-11.5": {
    width: -46,
  },
  "h-11.5": {
    height: 46,
  },
  "-h-11.5": {
    height: -46,
  },
  "gap-11.5": {
    gap: 46,
  },
  "-gap-11.5": {
    gap: -46,
  },
  "left-12": {
    left: 48,
  },
  "-left-12": {
    left: -48,
  },
  "right-12": {
    right: 48,
  },
  "-right-12": {
    right: -48,
  },
  "bottom-12": {
    bottom: 48,
  },
  "-bottom-12": {
    bottom: -48,
  },
  "top-12": {
    top: 48,
  },
  "-top-12": {
    top: -48,
  },
  "w-12": {
    width: 48,
  },
  "-w-12": {
    width: -48,
  },
  "h-12": {
    height: 48,
  },
  "-h-12": {
    height: -48,
  },
  "gap-12": {
    gap: 48,
  },
  "-gap-12": {
    gap: -48,
  },
  "left-12.5": {
    left: 50,
  },
  "-left-12.5": {
    left: -50,
  },
  "right-12.5": {
    right: 50,
  },
  "-right-12.5": {
    right: -50,
  },
  "bottom-12.5": {
    bottom: 50,
  },
  "-bottom-12.5": {
    bottom: -50,
  },
  "top-12.5": {
    top: 50,
  },
  "-top-12.5": {
    top: -50,
  },
  "w-12.5": {
    width: 50,
  },
  "-w-12.5": {
    width: -50,
  },
  "h-12.5": {
    height: 50,
  },
  "-h-12.5": {
    height: -50,
  },
  "gap-12.5": {
    gap: 50,
  },
  "-gap-12.5": {
    gap: -50,
  },
  "left-13": {
    left: 52,
  },
  "-left-13": {
    left: -52,
  },
  "right-13": {
    right: 52,
  },
  "-right-13": {
    right: -52,
  },
  "bottom-13": {
    bottom: 52,
  },
  "-bottom-13": {
    bottom: -52,
  },
  "top-13": {
    top: 52,
  },
  "-top-13": {
    top: -52,
  },
  "w-13": {
    width: 52,
  },
  "-w-13": {
    width: -52,
  },
  "h-13": {
    height: 52,
  },
  "-h-13": {
    height: -52,
  },
  "gap-13": {
    gap: 52,
  },
  "-gap-13": {
    gap: -52,
  },
  "left-13.5": {
    left: 54,
  },
  "-left-13.5": {
    left: -54,
  },
  "right-13.5": {
    right: 54,
  },
  "-right-13.5": {
    right: -54,
  },
  "bottom-13.5": {
    bottom: 54,
  },
  "-bottom-13.5": {
    bottom: -54,
  },
  "top-13.5": {
    top: 54,
  },
  "-top-13.5": {
    top: -54,
  },
  "w-13.5": {
    width: 54,
  },
  "-w-13.5": {
    width: -54,
  },
  "h-13.5": {
    height: 54,
  },
  "-h-13.5": {
    height: -54,
  },
  "gap-13.5": {
    gap: 54,
  },
  "-gap-13.5": {
    gap: -54,
  },
  "left-14": {
    left: 56,
  },
  "-left-14": {
    left: -56,
  },
  "right-14": {
    right: 56,
  },
  "-right-14": {
    right: -56,
  },
  "bottom-14": {
    bottom: 56,
  },
  "-bottom-14": {
    bottom: -56,
  },
  "top-14": {
    top: 56,
  },
  "-top-14": {
    top: -56,
  },
  "w-14": {
    width: 56,
  },
  "-w-14": {
    width: -56,
  },
  "h-14": {
    height: 56,
  },
  "-h-14": {
    height: -56,
  },
  "gap-14": {
    gap: 56,
  },
  "-gap-14": {
    gap: -56,
  },
  "left-14.5": {
    left: 58,
  },
  "-left-14.5": {
    left: -58,
  },
  "right-14.5": {
    right: 58,
  },
  "-right-14.5": {
    right: -58,
  },
  "bottom-14.5": {
    bottom: 58,
  },
  "-bottom-14.5": {
    bottom: -58,
  },
  "top-14.5": {
    top: 58,
  },
  "-top-14.5": {
    top: -58,
  },
  "w-14.5": {
    width: 58,
  },
  "-w-14.5": {
    width: -58,
  },
  "h-14.5": {
    height: 58,
  },
  "-h-14.5": {
    height: -58,
  },
  "gap-14.5": {
    gap: 58,
  },
  "-gap-14.5": {
    gap: -58,
  },
  "left-15": {
    left: 60,
  },
  "-left-15": {
    left: -60,
  },
  "right-15": {
    right: 60,
  },
  "-right-15": {
    right: -60,
  },
  "bottom-15": {
    bottom: 60,
  },
  "-bottom-15": {
    bottom: -60,
  },
  "top-15": {
    top: 60,
  },
  "-top-15": {
    top: -60,
  },
  "w-15": {
    width: 60,
  },
  "-w-15": {
    width: -60,
  },
  "h-15": {
    height: 60,
  },
  "-h-15": {
    height: -60,
  },
  "gap-15": {
    gap: 60,
  },
  "-gap-15": {
    gap: -60,
  },
  "left-15.5": {
    left: 62,
  },
  "-left-15.5": {
    left: -62,
  },
  "right-15.5": {
    right: 62,
  },
  "-right-15.5": {
    right: -62,
  },
  "bottom-15.5": {
    bottom: 62,
  },
  "-bottom-15.5": {
    bottom: -62,
  },
  "top-15.5": {
    top: 62,
  },
  "-top-15.5": {
    top: -62,
  },
  "w-15.5": {
    width: 62,
  },
  "-w-15.5": {
    width: -62,
  },
  "h-15.5": {
    height: 62,
  },
  "-h-15.5": {
    height: -62,
  },
  "gap-15.5": {
    gap: 62,
  },
  "-gap-15.5": {
    gap: -62,
  },
  "left-16": {
    left: 64,
  },
  "-left-16": {
    left: -64,
  },
  "right-16": {
    right: 64,
  },
  "-right-16": {
    right: -64,
  },
  "bottom-16": {
    bottom: 64,
  },
  "-bottom-16": {
    bottom: -64,
  },
  "top-16": {
    top: 64,
  },
  "-top-16": {
    top: -64,
  },
  "w-16": {
    width: 64,
  },
  "-w-16": {
    width: -64,
  },
  "h-16": {
    height: 64,
  },
  "-h-16": {
    height: -64,
  },
  "gap-16": {
    gap: 64,
  },
  "-gap-16": {
    gap: -64,
  },
  "left-16.5": {
    left: 66,
  },
  "-left-16.5": {
    left: -66,
  },
  "right-16.5": {
    right: 66,
  },
  "-right-16.5": {
    right: -66,
  },
  "bottom-16.5": {
    bottom: 66,
  },
  "-bottom-16.5": {
    bottom: -66,
  },
  "top-16.5": {
    top: 66,
  },
  "-top-16.5": {
    top: -66,
  },
  "w-16.5": {
    width: 66,
  },
  "-w-16.5": {
    width: -66,
  },
  "h-16.5": {
    height: 66,
  },
  "-h-16.5": {
    height: -66,
  },
  "gap-16.5": {
    gap: 66,
  },
  "-gap-16.5": {
    gap: -66,
  },
  "left-17": {
    left: 68,
  },
  "-left-17": {
    left: -68,
  },
  "right-17": {
    right: 68,
  },
  "-right-17": {
    right: -68,
  },
  "bottom-17": {
    bottom: 68,
  },
  "-bottom-17": {
    bottom: -68,
  },
  "top-17": {
    top: 68,
  },
  "-top-17": {
    top: -68,
  },
  "w-17": {
    width: 68,
  },
  "-w-17": {
    width: -68,
  },
  "h-17": {
    height: 68,
  },
  "-h-17": {
    height: -68,
  },
  "gap-17": {
    gap: 68,
  },
  "-gap-17": {
    gap: -68,
  },
  "left-17.5": {
    left: 70,
  },
  "-left-17.5": {
    left: -70,
  },
  "right-17.5": {
    right: 70,
  },
  "-right-17.5": {
    right: -70,
  },
  "bottom-17.5": {
    bottom: 70,
  },
  "-bottom-17.5": {
    bottom: -70,
  },
  "top-17.5": {
    top: 70,
  },
  "-top-17.5": {
    top: -70,
  },
  "w-17.5": {
    width: 70,
  },
  "-w-17.5": {
    width: -70,
  },
  "h-17.5": {
    height: 70,
  },
  "-h-17.5": {
    height: -70,
  },
  "gap-17.5": {
    gap: 70,
  },
  "-gap-17.5": {
    gap: -70,
  },
  "left-18": {
    left: 72,
  },
  "-left-18": {
    left: -72,
  },
  "right-18": {
    right: 72,
  },
  "-right-18": {
    right: -72,
  },
  "bottom-18": {
    bottom: 72,
  },
  "-bottom-18": {
    bottom: -72,
  },
  "top-18": {
    top: 72,
  },
  "-top-18": {
    top: -72,
  },
  "w-18": {
    width: 72,
  },
  "-w-18": {
    width: -72,
  },
  "h-18": {
    height: 72,
  },
  "-h-18": {
    height: -72,
  },
  "gap-18": {
    gap: 72,
  },
  "-gap-18": {
    gap: -72,
  },
  "left-18.5": {
    left: 74,
  },
  "-left-18.5": {
    left: -74,
  },
  "right-18.5": {
    right: 74,
  },
  "-right-18.5": {
    right: -74,
  },
  "bottom-18.5": {
    bottom: 74,
  },
  "-bottom-18.5": {
    bottom: -74,
  },
  "top-18.5": {
    top: 74,
  },
  "-top-18.5": {
    top: -74,
  },
  "w-18.5": {
    width: 74,
  },
  "-w-18.5": {
    width: -74,
  },
  "h-18.5": {
    height: 74,
  },
  "-h-18.5": {
    height: -74,
  },
  "gap-18.5": {
    gap: 74,
  },
  "-gap-18.5": {
    gap: -74,
  },
  "left-19": {
    left: 76,
  },
  "-left-19": {
    left: -76,
  },
  "right-19": {
    right: 76,
  },
  "-right-19": {
    right: -76,
  },
  "bottom-19": {
    bottom: 76,
  },
  "-bottom-19": {
    bottom: -76,
  },
  "top-19": {
    top: 76,
  },
  "-top-19": {
    top: -76,
  },
  "w-19": {
    width: 76,
  },
  "-w-19": {
    width: -76,
  },
  "h-19": {
    height: 76,
  },
  "-h-19": {
    height: -76,
  },
  "gap-19": {
    gap: 76,
  },
  "-gap-19": {
    gap: -76,
  },
  "left-19.5": {
    left: 78,
  },
  "-left-19.5": {
    left: -78,
  },
  "right-19.5": {
    right: 78,
  },
  "-right-19.5": {
    right: -78,
  },
  "bottom-19.5": {
    bottom: 78,
  },
  "-bottom-19.5": {
    bottom: -78,
  },
  "top-19.5": {
    top: 78,
  },
  "-top-19.5": {
    top: -78,
  },
  "w-19.5": {
    width: 78,
  },
  "-w-19.5": {
    width: -78,
  },
  "h-19.5": {
    height: 78,
  },
  "-h-19.5": {
    height: -78,
  },
  "gap-19.5": {
    gap: 78,
  },
  "-gap-19.5": {
    gap: -78,
  },
  "left-20": {
    left: 80,
  },
  "-left-20": {
    left: -80,
  },
  "right-20": {
    right: 80,
  },
  "-right-20": {
    right: -80,
  },
  "bottom-20": {
    bottom: 80,
  },
  "-bottom-20": {
    bottom: -80,
  },
  "top-20": {
    top: 80,
  },
  "-top-20": {
    top: -80,
  },
  "w-20": {
    width: 80,
  },
  "-w-20": {
    width: -80,
  },
  "h-20": {
    height: 80,
  },
  "-h-20": {
    height: -80,
  },
  "gap-20": {
    gap: 80,
  },
  "-gap-20": {
    gap: -80,
  },
  "left-20.5": {
    left: 82,
  },
  "-left-20.5": {
    left: -82,
  },
  "right-20.5": {
    right: 82,
  },
  "-right-20.5": {
    right: -82,
  },
  "bottom-20.5": {
    bottom: 82,
  },
  "-bottom-20.5": {
    bottom: -82,
  },
  "top-20.5": {
    top: 82,
  },
  "-top-20.5": {
    top: -82,
  },
  "w-20.5": {
    width: 82,
  },
  "-w-20.5": {
    width: -82,
  },
  "h-20.5": {
    height: 82,
  },
  "-h-20.5": {
    height: -82,
  },
  "gap-20.5": {
    gap: 82,
  },
  "-gap-20.5": {
    gap: -82,
  },
  "left-21": {
    left: 84,
  },
  "-left-21": {
    left: -84,
  },
  "right-21": {
    right: 84,
  },
  "-right-21": {
    right: -84,
  },
  "bottom-21": {
    bottom: 84,
  },
  "-bottom-21": {
    bottom: -84,
  },
  "top-21": {
    top: 84,
  },
  "-top-21": {
    top: -84,
  },
  "w-21": {
    width: 84,
  },
  "-w-21": {
    width: -84,
  },
  "h-21": {
    height: 84,
  },
  "-h-21": {
    height: -84,
  },
  "gap-21": {
    gap: 84,
  },
  "-gap-21": {
    gap: -84,
  },
  "left-21.5": {
    left: 86,
  },
  "-left-21.5": {
    left: -86,
  },
  "right-21.5": {
    right: 86,
  },
  "-right-21.5": {
    right: -86,
  },
  "bottom-21.5": {
    bottom: 86,
  },
  "-bottom-21.5": {
    bottom: -86,
  },
  "top-21.5": {
    top: 86,
  },
  "-top-21.5": {
    top: -86,
  },
  "w-21.5": {
    width: 86,
  },
  "-w-21.5": {
    width: -86,
  },
  "h-21.5": {
    height: 86,
  },
  "-h-21.5": {
    height: -86,
  },
  "gap-21.5": {
    gap: 86,
  },
  "-gap-21.5": {
    gap: -86,
  },
  "left-22": {
    left: 88,
  },
  "-left-22": {
    left: -88,
  },
  "right-22": {
    right: 88,
  },
  "-right-22": {
    right: -88,
  },
  "bottom-22": {
    bottom: 88,
  },
  "-bottom-22": {
    bottom: -88,
  },
  "top-22": {
    top: 88,
  },
  "-top-22": {
    top: -88,
  },
  "w-22": {
    width: 88,
  },
  "-w-22": {
    width: -88,
  },
  "h-22": {
    height: 88,
  },
  "-h-22": {
    height: -88,
  },
  "gap-22": {
    gap: 88,
  },
  "-gap-22": {
    gap: -88,
  },
  "left-22.5": {
    left: 90,
  },
  "-left-22.5": {
    left: -90,
  },
  "right-22.5": {
    right: 90,
  },
  "-right-22.5": {
    right: -90,
  },
  "bottom-22.5": {
    bottom: 90,
  },
  "-bottom-22.5": {
    bottom: -90,
  },
  "top-22.5": {
    top: 90,
  },
  "-top-22.5": {
    top: -90,
  },
  "w-22.5": {
    width: 90,
  },
  "-w-22.5": {
    width: -90,
  },
  "h-22.5": {
    height: 90,
  },
  "-h-22.5": {
    height: -90,
  },
  "gap-22.5": {
    gap: 90,
  },
  "-gap-22.5": {
    gap: -90,
  },
  "left-23": {
    left: 92,
  },
  "-left-23": {
    left: -92,
  },
  "right-23": {
    right: 92,
  },
  "-right-23": {
    right: -92,
  },
  "bottom-23": {
    bottom: 92,
  },
  "-bottom-23": {
    bottom: -92,
  },
  "top-23": {
    top: 92,
  },
  "-top-23": {
    top: -92,
  },
  "w-23": {
    width: 92,
  },
  "-w-23": {
    width: -92,
  },
  "h-23": {
    height: 92,
  },
  "-h-23": {
    height: -92,
  },
  "gap-23": {
    gap: 92,
  },
  "-gap-23": {
    gap: -92,
  },
  "left-23.5": {
    left: 94,
  },
  "-left-23.5": {
    left: -94,
  },
  "right-23.5": {
    right: 94,
  },
  "-right-23.5": {
    right: -94,
  },
  "bottom-23.5": {
    bottom: 94,
  },
  "-bottom-23.5": {
    bottom: -94,
  },
  "top-23.5": {
    top: 94,
  },
  "-top-23.5": {
    top: -94,
  },
  "w-23.5": {
    width: 94,
  },
  "-w-23.5": {
    width: -94,
  },
  "h-23.5": {
    height: 94,
  },
  "-h-23.5": {
    height: -94,
  },
  "gap-23.5": {
    gap: 94,
  },
  "-gap-23.5": {
    gap: -94,
  },
  "left-24": {
    left: 96,
  },
  "-left-24": {
    left: -96,
  },
  "right-24": {
    right: 96,
  },
  "-right-24": {
    right: -96,
  },
  "bottom-24": {
    bottom: 96,
  },
  "-bottom-24": {
    bottom: -96,
  },
  "top-24": {
    top: 96,
  },
  "-top-24": {
    top: -96,
  },
  "w-24": {
    width: 96,
  },
  "-w-24": {
    width: -96,
  },
  "h-24": {
    height: 96,
  },
  "-h-24": {
    height: -96,
  },
  "gap-24": {
    gap: 96,
  },
  "-gap-24": {
    gap: -96,
  },
  "left-24.5": {
    left: 98,
  },
  "-left-24.5": {
    left: -98,
  },
  "right-24.5": {
    right: 98,
  },
  "-right-24.5": {
    right: -98,
  },
  "bottom-24.5": {
    bottom: 98,
  },
  "-bottom-24.5": {
    bottom: -98,
  },
  "top-24.5": {
    top: 98,
  },
  "-top-24.5": {
    top: -98,
  },
  "w-24.5": {
    width: 98,
  },
  "-w-24.5": {
    width: -98,
  },
  "h-24.5": {
    height: 98,
  },
  "-h-24.5": {
    height: -98,
  },
  "gap-24.5": {
    gap: 98,
  },
  "-gap-24.5": {
    gap: -98,
  },
  "left-25": {
    left: 100,
  },
  "-left-25": {
    left: -100,
  },
  "right-25": {
    right: 100,
  },
  "-right-25": {
    right: -100,
  },
  "bottom-25": {
    bottom: 100,
  },
  "-bottom-25": {
    bottom: -100,
  },
  "top-25": {
    top: 100,
  },
  "-top-25": {
    top: -100,
  },
  "w-25": {
    width: 100,
  },
  "-w-25": {
    width: -100,
  },
  "h-25": {
    height: 100,
  },
  "-h-25": {
    height: -100,
  },
  "gap-25": {
    gap: 100,
  },
  "-gap-25": {
    gap: -100,
  },
  "left-25.5": {
    left: 102,
  },
  "-left-25.5": {
    left: -102,
  },
  "right-25.5": {
    right: 102,
  },
  "-right-25.5": {
    right: -102,
  },
  "bottom-25.5": {
    bottom: 102,
  },
  "-bottom-25.5": {
    bottom: -102,
  },
  "top-25.5": {
    top: 102,
  },
  "-top-25.5": {
    top: -102,
  },
  "w-25.5": {
    width: 102,
  },
  "-w-25.5": {
    width: -102,
  },
  "h-25.5": {
    height: 102,
  },
  "-h-25.5": {
    height: -102,
  },
  "gap-25.5": {
    gap: 102,
  },
  "-gap-25.5": {
    gap: -102,
  },
  "left-26": {
    left: 104,
  },
  "-left-26": {
    left: -104,
  },
  "right-26": {
    right: 104,
  },
  "-right-26": {
    right: -104,
  },
  "bottom-26": {
    bottom: 104,
  },
  "-bottom-26": {
    bottom: -104,
  },
  "top-26": {
    top: 104,
  },
  "-top-26": {
    top: -104,
  },
  "w-26": {
    width: 104,
  },
  "-w-26": {
    width: -104,
  },
  "h-26": {
    height: 104,
  },
  "-h-26": {
    height: -104,
  },
  "gap-26": {
    gap: 104,
  },
  "-gap-26": {
    gap: -104,
  },
  "left-26.5": {
    left: 106,
  },
  "-left-26.5": {
    left: -106,
  },
  "right-26.5": {
    right: 106,
  },
  "-right-26.5": {
    right: -106,
  },
  "bottom-26.5": {
    bottom: 106,
  },
  "-bottom-26.5": {
    bottom: -106,
  },
  "top-26.5": {
    top: 106,
  },
  "-top-26.5": {
    top: -106,
  },
  "w-26.5": {
    width: 106,
  },
  "-w-26.5": {
    width: -106,
  },
  "h-26.5": {
    height: 106,
  },
  "-h-26.5": {
    height: -106,
  },
  "gap-26.5": {
    gap: 106,
  },
  "-gap-26.5": {
    gap: -106,
  },
  "left-27": {
    left: 108,
  },
  "-left-27": {
    left: -108,
  },
  "right-27": {
    right: 108,
  },
  "-right-27": {
    right: -108,
  },
  "bottom-27": {
    bottom: 108,
  },
  "-bottom-27": {
    bottom: -108,
  },
  "top-27": {
    top: 108,
  },
  "-top-27": {
    top: -108,
  },
  "w-27": {
    width: 108,
  },
  "-w-27": {
    width: -108,
  },
  "h-27": {
    height: 108,
  },
  "-h-27": {
    height: -108,
  },
  "gap-27": {
    gap: 108,
  },
  "-gap-27": {
    gap: -108,
  },
  "left-27.5": {
    left: 110,
  },
  "-left-27.5": {
    left: -110,
  },
  "right-27.5": {
    right: 110,
  },
  "-right-27.5": {
    right: -110,
  },
  "bottom-27.5": {
    bottom: 110,
  },
  "-bottom-27.5": {
    bottom: -110,
  },
  "top-27.5": {
    top: 110,
  },
  "-top-27.5": {
    top: -110,
  },
  "w-27.5": {
    width: 110,
  },
  "-w-27.5": {
    width: -110,
  },
  "h-27.5": {
    height: 110,
  },
  "-h-27.5": {
    height: -110,
  },
  "gap-27.5": {
    gap: 110,
  },
  "-gap-27.5": {
    gap: -110,
  },
  "left-28": {
    left: 112,
  },
  "-left-28": {
    left: -112,
  },
  "right-28": {
    right: 112,
  },
  "-right-28": {
    right: -112,
  },
  "bottom-28": {
    bottom: 112,
  },
  "-bottom-28": {
    bottom: -112,
  },
  "top-28": {
    top: 112,
  },
  "-top-28": {
    top: -112,
  },
  "w-28": {
    width: 112,
  },
  "-w-28": {
    width: -112,
  },
  "h-28": {
    height: 112,
  },
  "-h-28": {
    height: -112,
  },
  "gap-28": {
    gap: 112,
  },
  "-gap-28": {
    gap: -112,
  },
  "left-28.5": {
    left: 114,
  },
  "-left-28.5": {
    left: -114,
  },
  "right-28.5": {
    right: 114,
  },
  "-right-28.5": {
    right: -114,
  },
  "bottom-28.5": {
    bottom: 114,
  },
  "-bottom-28.5": {
    bottom: -114,
  },
  "top-28.5": {
    top: 114,
  },
  "-top-28.5": {
    top: -114,
  },
  "w-28.5": {
    width: 114,
  },
  "-w-28.5": {
    width: -114,
  },
  "h-28.5": {
    height: 114,
  },
  "-h-28.5": {
    height: -114,
  },
  "gap-28.5": {
    gap: 114,
  },
  "-gap-28.5": {
    gap: -114,
  },
  "left-29": {
    left: 116,
  },
  "-left-29": {
    left: -116,
  },
  "right-29": {
    right: 116,
  },
  "-right-29": {
    right: -116,
  },
  "bottom-29": {
    bottom: 116,
  },
  "-bottom-29": {
    bottom: -116,
  },
  "top-29": {
    top: 116,
  },
  "-top-29": {
    top: -116,
  },
  "w-29": {
    width: 116,
  },
  "-w-29": {
    width: -116,
  },
  "h-29": {
    height: 116,
  },
  "-h-29": {
    height: -116,
  },
  "gap-29": {
    gap: 116,
  },
  "-gap-29": {
    gap: -116,
  },
  "left-29.5": {
    left: 118,
  },
  "-left-29.5": {
    left: -118,
  },
  "right-29.5": {
    right: 118,
  },
  "-right-29.5": {
    right: -118,
  },
  "bottom-29.5": {
    bottom: 118,
  },
  "-bottom-29.5": {
    bottom: -118,
  },
  "top-29.5": {
    top: 118,
  },
  "-top-29.5": {
    top: -118,
  },
  "w-29.5": {
    width: 118,
  },
  "-w-29.5": {
    width: -118,
  },
  "h-29.5": {
    height: 118,
  },
  "-h-29.5": {
    height: -118,
  },
  "gap-29.5": {
    gap: 118,
  },
  "-gap-29.5": {
    gap: -118,
  },
  "left-30": {
    left: 120,
  },
  "-left-30": {
    left: -120,
  },
  "right-30": {
    right: 120,
  },
  "-right-30": {
    right: -120,
  },
  "bottom-30": {
    bottom: 120,
  },
  "-bottom-30": {
    bottom: -120,
  },
  "top-30": {
    top: 120,
  },
  "-top-30": {
    top: -120,
  },
  "w-30": {
    width: 120,
  },
  "-w-30": {
    width: -120,
  },
  "h-30": {
    height: 120,
  },
  "-h-30": {
    height: -120,
  },
  "gap-30": {
    gap: 120,
  },
  "-gap-30": {
    gap: -120,
  },
  "left-30.5": {
    left: 122,
  },
  "-left-30.5": {
    left: -122,
  },
  "right-30.5": {
    right: 122,
  },
  "-right-30.5": {
    right: -122,
  },
  "bottom-30.5": {
    bottom: 122,
  },
  "-bottom-30.5": {
    bottom: -122,
  },
  "top-30.5": {
    top: 122,
  },
  "-top-30.5": {
    top: -122,
  },
  "w-30.5": {
    width: 122,
  },
  "-w-30.5": {
    width: -122,
  },
  "h-30.5": {
    height: 122,
  },
  "-h-30.5": {
    height: -122,
  },
  "gap-30.5": {
    gap: 122,
  },
  "-gap-30.5": {
    gap: -122,
  },
  "left-31": {
    left: 124,
  },
  "-left-31": {
    left: -124,
  },
  "right-31": {
    right: 124,
  },
  "-right-31": {
    right: -124,
  },
  "bottom-31": {
    bottom: 124,
  },
  "-bottom-31": {
    bottom: -124,
  },
  "top-31": {
    top: 124,
  },
  "-top-31": {
    top: -124,
  },
  "w-31": {
    width: 124,
  },
  "-w-31": {
    width: -124,
  },
  "h-31": {
    height: 124,
  },
  "-h-31": {
    height: -124,
  },
  "gap-31": {
    gap: 124,
  },
  "-gap-31": {
    gap: -124,
  },
  "left-31.5": {
    left: 126,
  },
  "-left-31.5": {
    left: -126,
  },
  "right-31.5": {
    right: 126,
  },
  "-right-31.5": {
    right: -126,
  },
  "bottom-31.5": {
    bottom: 126,
  },
  "-bottom-31.5": {
    bottom: -126,
  },
  "top-31.5": {
    top: 126,
  },
  "-top-31.5": {
    top: -126,
  },
  "w-31.5": {
    width: 126,
  },
  "-w-31.5": {
    width: -126,
  },
  "h-31.5": {
    height: 126,
  },
  "-h-31.5": {
    height: -126,
  },
  "gap-31.5": {
    gap: 126,
  },
  "-gap-31.5": {
    gap: -126,
  },
  "left-32": {
    left: 128,
  },
  "-left-32": {
    left: -128,
  },
  "right-32": {
    right: 128,
  },
  "-right-32": {
    right: -128,
  },
  "bottom-32": {
    bottom: 128,
  },
  "-bottom-32": {
    bottom: -128,
  },
  "top-32": {
    top: 128,
  },
  "-top-32": {
    top: -128,
  },
  "w-32": {
    width: 128,
  },
  "-w-32": {
    width: -128,
  },
  "h-32": {
    height: 128,
  },
  "-h-32": {
    height: -128,
  },
  "gap-32": {
    gap: 128,
  },
  "-gap-32": {
    gap: -128,
  },
  "left-32.5": {
    left: 130,
  },
  "-left-32.5": {
    left: -130,
  },
  "right-32.5": {
    right: 130,
  },
  "-right-32.5": {
    right: -130,
  },
  "bottom-32.5": {
    bottom: 130,
  },
  "-bottom-32.5": {
    bottom: -130,
  },
  "top-32.5": {
    top: 130,
  },
  "-top-32.5": {
    top: -130,
  },
  "w-32.5": {
    width: 130,
  },
  "-w-32.5": {
    width: -130,
  },
  "h-32.5": {
    height: 130,
  },
  "-h-32.5": {
    height: -130,
  },
  "gap-32.5": {
    gap: 130,
  },
  "-gap-32.5": {
    gap: -130,
  },
  "left-33": {
    left: 132,
  },
  "-left-33": {
    left: -132,
  },
  "right-33": {
    right: 132,
  },
  "-right-33": {
    right: -132,
  },
  "bottom-33": {
    bottom: 132,
  },
  "-bottom-33": {
    bottom: -132,
  },
  "top-33": {
    top: 132,
  },
  "-top-33": {
    top: -132,
  },
  "w-33": {
    width: 132,
  },
  "-w-33": {
    width: -132,
  },
  "h-33": {
    height: 132,
  },
  "-h-33": {
    height: -132,
  },
  "gap-33": {
    gap: 132,
  },
  "-gap-33": {
    gap: -132,
  },
  "left-33.5": {
    left: 134,
  },
  "-left-33.5": {
    left: -134,
  },
  "right-33.5": {
    right: 134,
  },
  "-right-33.5": {
    right: -134,
  },
  "bottom-33.5": {
    bottom: 134,
  },
  "-bottom-33.5": {
    bottom: -134,
  },
  "top-33.5": {
    top: 134,
  },
  "-top-33.5": {
    top: -134,
  },
  "w-33.5": {
    width: 134,
  },
  "-w-33.5": {
    width: -134,
  },
  "h-33.5": {
    height: 134,
  },
  "-h-33.5": {
    height: -134,
  },
  "gap-33.5": {
    gap: 134,
  },
  "-gap-33.5": {
    gap: -134,
  },
  "left-34": {
    left: 136,
  },
  "-left-34": {
    left: -136,
  },
  "right-34": {
    right: 136,
  },
  "-right-34": {
    right: -136,
  },
  "bottom-34": {
    bottom: 136,
  },
  "-bottom-34": {
    bottom: -136,
  },
  "top-34": {
    top: 136,
  },
  "-top-34": {
    top: -136,
  },
  "w-34": {
    width: 136,
  },
  "-w-34": {
    width: -136,
  },
  "h-34": {
    height: 136,
  },
  "-h-34": {
    height: -136,
  },
  "gap-34": {
    gap: 136,
  },
  "-gap-34": {
    gap: -136,
  },
  "left-34.5": {
    left: 138,
  },
  "-left-34.5": {
    left: -138,
  },
  "right-34.5": {
    right: 138,
  },
  "-right-34.5": {
    right: -138,
  },
  "bottom-34.5": {
    bottom: 138,
  },
  "-bottom-34.5": {
    bottom: -138,
  },
  "top-34.5": {
    top: 138,
  },
  "-top-34.5": {
    top: -138,
  },
  "w-34.5": {
    width: 138,
  },
  "-w-34.5": {
    width: -138,
  },
  "h-34.5": {
    height: 138,
  },
  "-h-34.5": {
    height: -138,
  },
  "gap-34.5": {
    gap: 138,
  },
  "-gap-34.5": {
    gap: -138,
  },
  "left-35": {
    left: 140,
  },
  "-left-35": {
    left: -140,
  },
  "right-35": {
    right: 140,
  },
  "-right-35": {
    right: -140,
  },
  "bottom-35": {
    bottom: 140,
  },
  "-bottom-35": {
    bottom: -140,
  },
  "top-35": {
    top: 140,
  },
  "-top-35": {
    top: -140,
  },
  "w-35": {
    width: 140,
  },
  "-w-35": {
    width: -140,
  },
  "h-35": {
    height: 140,
  },
  "-h-35": {
    height: -140,
  },
  "gap-35": {
    gap: 140,
  },
  "-gap-35": {
    gap: -140,
  },
  "left-35.5": {
    left: 142,
  },
  "-left-35.5": {
    left: -142,
  },
  "right-35.5": {
    right: 142,
  },
  "-right-35.5": {
    right: -142,
  },
  "bottom-35.5": {
    bottom: 142,
  },
  "-bottom-35.5": {
    bottom: -142,
  },
  "top-35.5": {
    top: 142,
  },
  "-top-35.5": {
    top: -142,
  },
  "w-35.5": {
    width: 142,
  },
  "-w-35.5": {
    width: -142,
  },
  "h-35.5": {
    height: 142,
  },
  "-h-35.5": {
    height: -142,
  },
  "gap-35.5": {
    gap: 142,
  },
  "-gap-35.5": {
    gap: -142,
  },
  "left-36": {
    left: 144,
  },
  "-left-36": {
    left: -144,
  },
  "right-36": {
    right: 144,
  },
  "-right-36": {
    right: -144,
  },
  "bottom-36": {
    bottom: 144,
  },
  "-bottom-36": {
    bottom: -144,
  },
  "top-36": {
    top: 144,
  },
  "-top-36": {
    top: -144,
  },
  "w-36": {
    width: 144,
  },
  "-w-36": {
    width: -144,
  },
  "h-36": {
    height: 144,
  },
  "-h-36": {
    height: -144,
  },
  "gap-36": {
    gap: 144,
  },
  "-gap-36": {
    gap: -144,
  },
  "left-36.5": {
    left: 146,
  },
  "-left-36.5": {
    left: -146,
  },
  "right-36.5": {
    right: 146,
  },
  "-right-36.5": {
    right: -146,
  },
  "bottom-36.5": {
    bottom: 146,
  },
  "-bottom-36.5": {
    bottom: -146,
  },
  "top-36.5": {
    top: 146,
  },
  "-top-36.5": {
    top: -146,
  },
  "w-36.5": {
    width: 146,
  },
  "-w-36.5": {
    width: -146,
  },
  "h-36.5": {
    height: 146,
  },
  "-h-36.5": {
    height: -146,
  },
  "gap-36.5": {
    gap: 146,
  },
  "-gap-36.5": {
    gap: -146,
  },
  "left-37": {
    left: 148,
  },
  "-left-37": {
    left: -148,
  },
  "right-37": {
    right: 148,
  },
  "-right-37": {
    right: -148,
  },
  "bottom-37": {
    bottom: 148,
  },
  "-bottom-37": {
    bottom: -148,
  },
  "top-37": {
    top: 148,
  },
  "-top-37": {
    top: -148,
  },
  "w-37": {
    width: 148,
  },
  "-w-37": {
    width: -148,
  },
  "h-37": {
    height: 148,
  },
  "-h-37": {
    height: -148,
  },
  "gap-37": {
    gap: 148,
  },
  "-gap-37": {
    gap: -148,
  },
  "left-37.5": {
    left: 150,
  },
  "-left-37.5": {
    left: -150,
  },
  "right-37.5": {
    right: 150,
  },
  "-right-37.5": {
    right: -150,
  },
  "bottom-37.5": {
    bottom: 150,
  },
  "-bottom-37.5": {
    bottom: -150,
  },
  "top-37.5": {
    top: 150,
  },
  "-top-37.5": {
    top: -150,
  },
  "w-37.5": {
    width: 150,
  },
  "-w-37.5": {
    width: -150,
  },
  "h-37.5": {
    height: 150,
  },
  "-h-37.5": {
    height: -150,
  },
  "gap-37.5": {
    gap: 150,
  },
  "-gap-37.5": {
    gap: -150,
  },
  "left-38": {
    left: 152,
  },
  "-left-38": {
    left: -152,
  },
  "right-38": {
    right: 152,
  },
  "-right-38": {
    right: -152,
  },
  "bottom-38": {
    bottom: 152,
  },
  "-bottom-38": {
    bottom: -152,
  },
  "top-38": {
    top: 152,
  },
  "-top-38": {
    top: -152,
  },
  "w-38": {
    width: 152,
  },
  "-w-38": {
    width: -152,
  },
  "h-38": {
    height: 152,
  },
  "-h-38": {
    height: -152,
  },
  "gap-38": {
    gap: 152,
  },
  "-gap-38": {
    gap: -152,
  },
  "left-38.5": {
    left: 154,
  },
  "-left-38.5": {
    left: -154,
  },
  "right-38.5": {
    right: 154,
  },
  "-right-38.5": {
    right: -154,
  },
  "bottom-38.5": {
    bottom: 154,
  },
  "-bottom-38.5": {
    bottom: -154,
  },
  "top-38.5": {
    top: 154,
  },
  "-top-38.5": {
    top: -154,
  },
  "w-38.5": {
    width: 154,
  },
  "-w-38.5": {
    width: -154,
  },
  "h-38.5": {
    height: 154,
  },
  "-h-38.5": {
    height: -154,
  },
  "gap-38.5": {
    gap: 154,
  },
  "-gap-38.5": {
    gap: -154,
  },
  "left-39": {
    left: 156,
  },
  "-left-39": {
    left: -156,
  },
  "right-39": {
    right: 156,
  },
  "-right-39": {
    right: -156,
  },
  "bottom-39": {
    bottom: 156,
  },
  "-bottom-39": {
    bottom: -156,
  },
  "top-39": {
    top: 156,
  },
  "-top-39": {
    top: -156,
  },
  "w-39": {
    width: 156,
  },
  "-w-39": {
    width: -156,
  },
  "h-39": {
    height: 156,
  },
  "-h-39": {
    height: -156,
  },
  "gap-39": {
    gap: 156,
  },
  "-gap-39": {
    gap: -156,
  },
  "left-39.5": {
    left: 158,
  },
  "-left-39.5": {
    left: -158,
  },
  "right-39.5": {
    right: 158,
  },
  "-right-39.5": {
    right: -158,
  },
  "bottom-39.5": {
    bottom: 158,
  },
  "-bottom-39.5": {
    bottom: -158,
  },
  "top-39.5": {
    top: 158,
  },
  "-top-39.5": {
    top: -158,
  },
  "w-39.5": {
    width: 158,
  },
  "-w-39.5": {
    width: -158,
  },
  "h-39.5": {
    height: 158,
  },
  "-h-39.5": {
    height: -158,
  },
  "gap-39.5": {
    gap: 158,
  },
  "-gap-39.5": {
    gap: -158,
  },
  "left-40": {
    left: 160,
  },
  "-left-40": {
    left: -160,
  },
  "right-40": {
    right: 160,
  },
  "-right-40": {
    right: -160,
  },
  "bottom-40": {
    bottom: 160,
  },
  "-bottom-40": {
    bottom: -160,
  },
  "top-40": {
    top: 160,
  },
  "-top-40": {
    top: -160,
  },
  "w-40": {
    width: 160,
  },
  "-w-40": {
    width: -160,
  },
  "h-40": {
    height: 160,
  },
  "-h-40": {
    height: -160,
  },
  "gap-40": {
    gap: 160,
  },
  "-gap-40": {
    gap: -160,
  },
  "left-40.5": {
    left: 162,
  },
  "-left-40.5": {
    left: -162,
  },
  "right-40.5": {
    right: 162,
  },
  "-right-40.5": {
    right: -162,
  },
  "bottom-40.5": {
    bottom: 162,
  },
  "-bottom-40.5": {
    bottom: -162,
  },
  "top-40.5": {
    top: 162,
  },
  "-top-40.5": {
    top: -162,
  },
  "w-40.5": {
    width: 162,
  },
  "-w-40.5": {
    width: -162,
  },
  "h-40.5": {
    height: 162,
  },
  "-h-40.5": {
    height: -162,
  },
  "gap-40.5": {
    gap: 162,
  },
  "-gap-40.5": {
    gap: -162,
  },
  "left-41": {
    left: 164,
  },
  "-left-41": {
    left: -164,
  },
  "right-41": {
    right: 164,
  },
  "-right-41": {
    right: -164,
  },
  "bottom-41": {
    bottom: 164,
  },
  "-bottom-41": {
    bottom: -164,
  },
  "top-41": {
    top: 164,
  },
  "-top-41": {
    top: -164,
  },
  "w-41": {
    width: 164,
  },
  "-w-41": {
    width: -164,
  },
  "h-41": {
    height: 164,
  },
  "-h-41": {
    height: -164,
  },
  "gap-41": {
    gap: 164,
  },
  "-gap-41": {
    gap: -164,
  },
  "left-41.5": {
    left: 166,
  },
  "-left-41.5": {
    left: -166,
  },
  "right-41.5": {
    right: 166,
  },
  "-right-41.5": {
    right: -166,
  },
  "bottom-41.5": {
    bottom: 166,
  },
  "-bottom-41.5": {
    bottom: -166,
  },
  "top-41.5": {
    top: 166,
  },
  "-top-41.5": {
    top: -166,
  },
  "w-41.5": {
    width: 166,
  },
  "-w-41.5": {
    width: -166,
  },
  "h-41.5": {
    height: 166,
  },
  "-h-41.5": {
    height: -166,
  },
  "gap-41.5": {
    gap: 166,
  },
  "-gap-41.5": {
    gap: -166,
  },
  "left-42": {
    left: 168,
  },
  "-left-42": {
    left: -168,
  },
  "right-42": {
    right: 168,
  },
  "-right-42": {
    right: -168,
  },
  "bottom-42": {
    bottom: 168,
  },
  "-bottom-42": {
    bottom: -168,
  },
  "top-42": {
    top: 168,
  },
  "-top-42": {
    top: -168,
  },
  "w-42": {
    width: 168,
  },
  "-w-42": {
    width: -168,
  },
  "h-42": {
    height: 168,
  },
  "-h-42": {
    height: -168,
  },
  "gap-42": {
    gap: 168,
  },
  "-gap-42": {
    gap: -168,
  },
  "left-42.5": {
    left: 170,
  },
  "-left-42.5": {
    left: -170,
  },
  "right-42.5": {
    right: 170,
  },
  "-right-42.5": {
    right: -170,
  },
  "bottom-42.5": {
    bottom: 170,
  },
  "-bottom-42.5": {
    bottom: -170,
  },
  "top-42.5": {
    top: 170,
  },
  "-top-42.5": {
    top: -170,
  },
  "w-42.5": {
    width: 170,
  },
  "-w-42.5": {
    width: -170,
  },
  "h-42.5": {
    height: 170,
  },
  "-h-42.5": {
    height: -170,
  },
  "gap-42.5": {
    gap: 170,
  },
  "-gap-42.5": {
    gap: -170,
  },
  "left-43": {
    left: 172,
  },
  "-left-43": {
    left: -172,
  },
  "right-43": {
    right: 172,
  },
  "-right-43": {
    right: -172,
  },
  "bottom-43": {
    bottom: 172,
  },
  "-bottom-43": {
    bottom: -172,
  },
  "top-43": {
    top: 172,
  },
  "-top-43": {
    top: -172,
  },
  "w-43": {
    width: 172,
  },
  "-w-43": {
    width: -172,
  },
  "h-43": {
    height: 172,
  },
  "-h-43": {
    height: -172,
  },
  "gap-43": {
    gap: 172,
  },
  "-gap-43": {
    gap: -172,
  },
  "left-43.5": {
    left: 174,
  },
  "-left-43.5": {
    left: -174,
  },
  "right-43.5": {
    right: 174,
  },
  "-right-43.5": {
    right: -174,
  },
  "bottom-43.5": {
    bottom: 174,
  },
  "-bottom-43.5": {
    bottom: -174,
  },
  "top-43.5": {
    top: 174,
  },
  "-top-43.5": {
    top: -174,
  },
  "w-43.5": {
    width: 174,
  },
  "-w-43.5": {
    width: -174,
  },
  "h-43.5": {
    height: 174,
  },
  "-h-43.5": {
    height: -174,
  },
  "gap-43.5": {
    gap: 174,
  },
  "-gap-43.5": {
    gap: -174,
  },
  "left-44": {
    left: 176,
  },
  "-left-44": {
    left: -176,
  },
  "right-44": {
    right: 176,
  },
  "-right-44": {
    right: -176,
  },
  "bottom-44": {
    bottom: 176,
  },
  "-bottom-44": {
    bottom: -176,
  },
  "top-44": {
    top: 176,
  },
  "-top-44": {
    top: -176,
  },
  "w-44": {
    width: 176,
  },
  "-w-44": {
    width: -176,
  },
  "h-44": {
    height: 176,
  },
  "-h-44": {
    height: -176,
  },
  "gap-44": {
    gap: 176,
  },
  "-gap-44": {
    gap: -176,
  },
  "left-44.5": {
    left: 178,
  },
  "-left-44.5": {
    left: -178,
  },
  "right-44.5": {
    right: 178,
  },
  "-right-44.5": {
    right: -178,
  },
  "bottom-44.5": {
    bottom: 178,
  },
  "-bottom-44.5": {
    bottom: -178,
  },
  "top-44.5": {
    top: 178,
  },
  "-top-44.5": {
    top: -178,
  },
  "w-44.5": {
    width: 178,
  },
  "-w-44.5": {
    width: -178,
  },
  "h-44.5": {
    height: 178,
  },
  "-h-44.5": {
    height: -178,
  },
  "gap-44.5": {
    gap: 178,
  },
  "-gap-44.5": {
    gap: -178,
  },
  "left-45": {
    left: 180,
  },
  "-left-45": {
    left: -180,
  },
  "right-45": {
    right: 180,
  },
  "-right-45": {
    right: -180,
  },
  "bottom-45": {
    bottom: 180,
  },
  "-bottom-45": {
    bottom: -180,
  },
  "top-45": {
    top: 180,
  },
  "-top-45": {
    top: -180,
  },
  "w-45": {
    width: 180,
  },
  "-w-45": {
    width: -180,
  },
  "h-45": {
    height: 180,
  },
  "-h-45": {
    height: -180,
  },
  "gap-45": {
    gap: 180,
  },
  "-gap-45": {
    gap: -180,
  },
  "left-45.5": {
    left: 182,
  },
  "-left-45.5": {
    left: -182,
  },
  "right-45.5": {
    right: 182,
  },
  "-right-45.5": {
    right: -182,
  },
  "bottom-45.5": {
    bottom: 182,
  },
  "-bottom-45.5": {
    bottom: -182,
  },
  "top-45.5": {
    top: 182,
  },
  "-top-45.5": {
    top: -182,
  },
  "w-45.5": {
    width: 182,
  },
  "-w-45.5": {
    width: -182,
  },
  "h-45.5": {
    height: 182,
  },
  "-h-45.5": {
    height: -182,
  },
  "gap-45.5": {
    gap: 182,
  },
  "-gap-45.5": {
    gap: -182,
  },
  "left-46": {
    left: 184,
  },
  "-left-46": {
    left: -184,
  },
  "right-46": {
    right: 184,
  },
  "-right-46": {
    right: -184,
  },
  "bottom-46": {
    bottom: 184,
  },
  "-bottom-46": {
    bottom: -184,
  },
  "top-46": {
    top: 184,
  },
  "-top-46": {
    top: -184,
  },
  "w-46": {
    width: 184,
  },
  "-w-46": {
    width: -184,
  },
  "h-46": {
    height: 184,
  },
  "-h-46": {
    height: -184,
  },
  "gap-46": {
    gap: 184,
  },
  "-gap-46": {
    gap: -184,
  },
  "left-46.5": {
    left: 186,
  },
  "-left-46.5": {
    left: -186,
  },
  "right-46.5": {
    right: 186,
  },
  "-right-46.5": {
    right: -186,
  },
  "bottom-46.5": {
    bottom: 186,
  },
  "-bottom-46.5": {
    bottom: -186,
  },
  "top-46.5": {
    top: 186,
  },
  "-top-46.5": {
    top: -186,
  },
  "w-46.5": {
    width: 186,
  },
  "-w-46.5": {
    width: -186,
  },
  "h-46.5": {
    height: 186,
  },
  "-h-46.5": {
    height: -186,
  },
  "gap-46.5": {
    gap: 186,
  },
  "-gap-46.5": {
    gap: -186,
  },
  "left-47": {
    left: 188,
  },
  "-left-47": {
    left: -188,
  },
  "right-47": {
    right: 188,
  },
  "-right-47": {
    right: -188,
  },
  "bottom-47": {
    bottom: 188,
  },
  "-bottom-47": {
    bottom: -188,
  },
  "top-47": {
    top: 188,
  },
  "-top-47": {
    top: -188,
  },
  "w-47": {
    width: 188,
  },
  "-w-47": {
    width: -188,
  },
  "h-47": {
    height: 188,
  },
  "-h-47": {
    height: -188,
  },
  "gap-47": {
    gap: 188,
  },
  "-gap-47": {
    gap: -188,
  },
  "left-47.5": {
    left: 190,
  },
  "-left-47.5": {
    left: -190,
  },
  "right-47.5": {
    right: 190,
  },
  "-right-47.5": {
    right: -190,
  },
  "bottom-47.5": {
    bottom: 190,
  },
  "-bottom-47.5": {
    bottom: -190,
  },
  "top-47.5": {
    top: 190,
  },
  "-top-47.5": {
    top: -190,
  },
  "w-47.5": {
    width: 190,
  },
  "-w-47.5": {
    width: -190,
  },
  "h-47.5": {
    height: 190,
  },
  "-h-47.5": {
    height: -190,
  },
  "gap-47.5": {
    gap: 190,
  },
  "-gap-47.5": {
    gap: -190,
  },
  "left-48": {
    left: 192,
  },
  "-left-48": {
    left: -192,
  },
  "right-48": {
    right: 192,
  },
  "-right-48": {
    right: -192,
  },
  "bottom-48": {
    bottom: 192,
  },
  "-bottom-48": {
    bottom: -192,
  },
  "top-48": {
    top: 192,
  },
  "-top-48": {
    top: -192,
  },
  "w-48": {
    width: 192,
  },
  "-w-48": {
    width: -192,
  },
  "h-48": {
    height: 192,
  },
  "-h-48": {
    height: -192,
  },
  "gap-48": {
    gap: 192,
  },
  "-gap-48": {
    gap: -192,
  },
  "left-48.5": {
    left: 194,
  },
  "-left-48.5": {
    left: -194,
  },
  "right-48.5": {
    right: 194,
  },
  "-right-48.5": {
    right: -194,
  },
  "bottom-48.5": {
    bottom: 194,
  },
  "-bottom-48.5": {
    bottom: -194,
  },
  "top-48.5": {
    top: 194,
  },
  "-top-48.5": {
    top: -194,
  },
  "w-48.5": {
    width: 194,
  },
  "-w-48.5": {
    width: -194,
  },
  "h-48.5": {
    height: 194,
  },
  "-h-48.5": {
    height: -194,
  },
  "gap-48.5": {
    gap: 194,
  },
  "-gap-48.5": {
    gap: -194,
  },
  "left-49": {
    left: 196,
  },
  "-left-49": {
    left: -196,
  },
  "right-49": {
    right: 196,
  },
  "-right-49": {
    right: -196,
  },
  "bottom-49": {
    bottom: 196,
  },
  "-bottom-49": {
    bottom: -196,
  },
  "top-49": {
    top: 196,
  },
  "-top-49": {
    top: -196,
  },
  "w-49": {
    width: 196,
  },
  "-w-49": {
    width: -196,
  },
  "h-49": {
    height: 196,
  },
  "-h-49": {
    height: -196,
  },
  "gap-49": {
    gap: 196,
  },
  "-gap-49": {
    gap: -196,
  },
  "left-49.5": {
    left: 198,
  },
  "-left-49.5": {
    left: -198,
  },
  "right-49.5": {
    right: 198,
  },
  "-right-49.5": {
    right: -198,
  },
  "bottom-49.5": {
    bottom: 198,
  },
  "-bottom-49.5": {
    bottom: -198,
  },
  "top-49.5": {
    top: 198,
  },
  "-top-49.5": {
    top: -198,
  },
  "w-49.5": {
    width: 198,
  },
  "-w-49.5": {
    width: -198,
  },
  "h-49.5": {
    height: 198,
  },
  "-h-49.5": {
    height: -198,
  },
  "gap-49.5": {
    gap: 198,
  },
  "-gap-49.5": {
    gap: -198,
  },
  "left-50": {
    left: 200,
  },
  "-left-50": {
    left: -200,
  },
  "right-50": {
    right: 200,
  },
  "-right-50": {
    right: -200,
  },
  "bottom-50": {
    bottom: 200,
  },
  "-bottom-50": {
    bottom: -200,
  },
  "top-50": {
    top: 200,
  },
  "-top-50": {
    top: -200,
  },
  "w-50": {
    width: 200,
  },
  "-w-50": {
    width: -200,
  },
  "h-50": {
    height: 200,
  },
  "-h-50": {
    height: -200,
  },
  "gap-50": {
    gap: 200,
  },
  "-gap-50": {
    gap: -200,
  },
  "left-50.5": {
    left: 202,
  },
  "-left-50.5": {
    left: -202,
  },
  "right-50.5": {
    right: 202,
  },
  "-right-50.5": {
    right: -202,
  },
  "bottom-50.5": {
    bottom: 202,
  },
  "-bottom-50.5": {
    bottom: -202,
  },
  "top-50.5": {
    top: 202,
  },
  "-top-50.5": {
    top: -202,
  },
  "w-50.5": {
    width: 202,
  },
  "-w-50.5": {
    width: -202,
  },
  "h-50.5": {
    height: 202,
  },
  "-h-50.5": {
    height: -202,
  },
  "gap-50.5": {
    gap: 202,
  },
  "-gap-50.5": {
    gap: -202,
  },
  "left-51": {
    left: 204,
  },
  "-left-51": {
    left: -204,
  },
  "right-51": {
    right: 204,
  },
  "-right-51": {
    right: -204,
  },
  "bottom-51": {
    bottom: 204,
  },
  "-bottom-51": {
    bottom: -204,
  },
  "top-51": {
    top: 204,
  },
  "-top-51": {
    top: -204,
  },
  "w-51": {
    width: 204,
  },
  "-w-51": {
    width: -204,
  },
  "h-51": {
    height: 204,
  },
  "-h-51": {
    height: -204,
  },
  "gap-51": {
    gap: 204,
  },
  "-gap-51": {
    gap: -204,
  },
  "left-51.5": {
    left: 206,
  },
  "-left-51.5": {
    left: -206,
  },
  "right-51.5": {
    right: 206,
  },
  "-right-51.5": {
    right: -206,
  },
  "bottom-51.5": {
    bottom: 206,
  },
  "-bottom-51.5": {
    bottom: -206,
  },
  "top-51.5": {
    top: 206,
  },
  "-top-51.5": {
    top: -206,
  },
  "w-51.5": {
    width: 206,
  },
  "-w-51.5": {
    width: -206,
  },
  "h-51.5": {
    height: 206,
  },
  "-h-51.5": {
    height: -206,
  },
  "gap-51.5": {
    gap: 206,
  },
  "-gap-51.5": {
    gap: -206,
  },
  "left-52": {
    left: 208,
  },
  "-left-52": {
    left: -208,
  },
  "right-52": {
    right: 208,
  },
  "-right-52": {
    right: -208,
  },
  "bottom-52": {
    bottom: 208,
  },
  "-bottom-52": {
    bottom: -208,
  },
  "top-52": {
    top: 208,
  },
  "-top-52": {
    top: -208,
  },
  "w-52": {
    width: 208,
  },
  "-w-52": {
    width: -208,
  },
  "h-52": {
    height: 208,
  },
  "-h-52": {
    height: -208,
  },
  "gap-52": {
    gap: 208,
  },
  "-gap-52": {
    gap: -208,
  },
  "left-52.5": {
    left: 210,
  },
  "-left-52.5": {
    left: -210,
  },
  "right-52.5": {
    right: 210,
  },
  "-right-52.5": {
    right: -210,
  },
  "bottom-52.5": {
    bottom: 210,
  },
  "-bottom-52.5": {
    bottom: -210,
  },
  "top-52.5": {
    top: 210,
  },
  "-top-52.5": {
    top: -210,
  },
  "w-52.5": {
    width: 210,
  },
  "-w-52.5": {
    width: -210,
  },
  "h-52.5": {
    height: 210,
  },
  "-h-52.5": {
    height: -210,
  },
  "gap-52.5": {
    gap: 210,
  },
  "-gap-52.5": {
    gap: -210,
  },
  "left-53": {
    left: 212,
  },
  "-left-53": {
    left: -212,
  },
  "right-53": {
    right: 212,
  },
  "-right-53": {
    right: -212,
  },
  "bottom-53": {
    bottom: 212,
  },
  "-bottom-53": {
    bottom: -212,
  },
  "top-53": {
    top: 212,
  },
  "-top-53": {
    top: -212,
  },
  "w-53": {
    width: 212,
  },
  "-w-53": {
    width: -212,
  },
  "h-53": {
    height: 212,
  },
  "-h-53": {
    height: -212,
  },
  "gap-53": {
    gap: 212,
  },
  "-gap-53": {
    gap: -212,
  },
  "left-53.5": {
    left: 214,
  },
  "-left-53.5": {
    left: -214,
  },
  "right-53.5": {
    right: 214,
  },
  "-right-53.5": {
    right: -214,
  },
  "bottom-53.5": {
    bottom: 214,
  },
  "-bottom-53.5": {
    bottom: -214,
  },
  "top-53.5": {
    top: 214,
  },
  "-top-53.5": {
    top: -214,
  },
  "w-53.5": {
    width: 214,
  },
  "-w-53.5": {
    width: -214,
  },
  "h-53.5": {
    height: 214,
  },
  "-h-53.5": {
    height: -214,
  },
  "gap-53.5": {
    gap: 214,
  },
  "-gap-53.5": {
    gap: -214,
  },
  "left-54": {
    left: 216,
  },
  "-left-54": {
    left: -216,
  },
  "right-54": {
    right: 216,
  },
  "-right-54": {
    right: -216,
  },
  "bottom-54": {
    bottom: 216,
  },
  "-bottom-54": {
    bottom: -216,
  },
  "top-54": {
    top: 216,
  },
  "-top-54": {
    top: -216,
  },
  "w-54": {
    width: 216,
  },
  "-w-54": {
    width: -216,
  },
  "h-54": {
    height: 216,
  },
  "-h-54": {
    height: -216,
  },
  "gap-54": {
    gap: 216,
  },
  "-gap-54": {
    gap: -216,
  },
  "left-54.5": {
    left: 218,
  },
  "-left-54.5": {
    left: -218,
  },
  "right-54.5": {
    right: 218,
  },
  "-right-54.5": {
    right: -218,
  },
  "bottom-54.5": {
    bottom: 218,
  },
  "-bottom-54.5": {
    bottom: -218,
  },
  "top-54.5": {
    top: 218,
  },
  "-top-54.5": {
    top: -218,
  },
  "w-54.5": {
    width: 218,
  },
  "-w-54.5": {
    width: -218,
  },
  "h-54.5": {
    height: 218,
  },
  "-h-54.5": {
    height: -218,
  },
  "gap-54.5": {
    gap: 218,
  },
  "-gap-54.5": {
    gap: -218,
  },
  "left-55": {
    left: 220,
  },
  "-left-55": {
    left: -220,
  },
  "right-55": {
    right: 220,
  },
  "-right-55": {
    right: -220,
  },
  "bottom-55": {
    bottom: 220,
  },
  "-bottom-55": {
    bottom: -220,
  },
  "top-55": {
    top: 220,
  },
  "-top-55": {
    top: -220,
  },
  "w-55": {
    width: 220,
  },
  "-w-55": {
    width: -220,
  },
  "h-55": {
    height: 220,
  },
  "-h-55": {
    height: -220,
  },
  "gap-55": {
    gap: 220,
  },
  "-gap-55": {
    gap: -220,
  },
  "left-55.5": {
    left: 222,
  },
  "-left-55.5": {
    left: -222,
  },
  "right-55.5": {
    right: 222,
  },
  "-right-55.5": {
    right: -222,
  },
  "bottom-55.5": {
    bottom: 222,
  },
  "-bottom-55.5": {
    bottom: -222,
  },
  "top-55.5": {
    top: 222,
  },
  "-top-55.5": {
    top: -222,
  },
  "w-55.5": {
    width: 222,
  },
  "-w-55.5": {
    width: -222,
  },
  "h-55.5": {
    height: 222,
  },
  "-h-55.5": {
    height: -222,
  },
  "gap-55.5": {
    gap: 222,
  },
  "-gap-55.5": {
    gap: -222,
  },
  "left-56": {
    left: 224,
  },
  "-left-56": {
    left: -224,
  },
  "right-56": {
    right: 224,
  },
  "-right-56": {
    right: -224,
  },
  "bottom-56": {
    bottom: 224,
  },
  "-bottom-56": {
    bottom: -224,
  },
  "top-56": {
    top: 224,
  },
  "-top-56": {
    top: -224,
  },
  "w-56": {
    width: 224,
  },
  "-w-56": {
    width: -224,
  },
  "h-56": {
    height: 224,
  },
  "-h-56": {
    height: -224,
  },
  "gap-56": {
    gap: 224,
  },
  "-gap-56": {
    gap: -224,
  },
  "left-56.5": {
    left: 226,
  },
  "-left-56.5": {
    left: -226,
  },
  "right-56.5": {
    right: 226,
  },
  "-right-56.5": {
    right: -226,
  },
  "bottom-56.5": {
    bottom: 226,
  },
  "-bottom-56.5": {
    bottom: -226,
  },
  "top-56.5": {
    top: 226,
  },
  "-top-56.5": {
    top: -226,
  },
  "w-56.5": {
    width: 226,
  },
  "-w-56.5": {
    width: -226,
  },
  "h-56.5": {
    height: 226,
  },
  "-h-56.5": {
    height: -226,
  },
  "gap-56.5": {
    gap: 226,
  },
  "-gap-56.5": {
    gap: -226,
  },
  "left-57": {
    left: 228,
  },
  "-left-57": {
    left: -228,
  },
  "right-57": {
    right: 228,
  },
  "-right-57": {
    right: -228,
  },
  "bottom-57": {
    bottom: 228,
  },
  "-bottom-57": {
    bottom: -228,
  },
  "top-57": {
    top: 228,
  },
  "-top-57": {
    top: -228,
  },
  "w-57": {
    width: 228,
  },
  "-w-57": {
    width: -228,
  },
  "h-57": {
    height: 228,
  },
  "-h-57": {
    height: -228,
  },
  "gap-57": {
    gap: 228,
  },
  "-gap-57": {
    gap: -228,
  },
  "left-57.5": {
    left: 230,
  },
  "-left-57.5": {
    left: -230,
  },
  "right-57.5": {
    right: 230,
  },
  "-right-57.5": {
    right: -230,
  },
  "bottom-57.5": {
    bottom: 230,
  },
  "-bottom-57.5": {
    bottom: -230,
  },
  "top-57.5": {
    top: 230,
  },
  "-top-57.5": {
    top: -230,
  },
  "w-57.5": {
    width: 230,
  },
  "-w-57.5": {
    width: -230,
  },
  "h-57.5": {
    height: 230,
  },
  "-h-57.5": {
    height: -230,
  },
  "gap-57.5": {
    gap: 230,
  },
  "-gap-57.5": {
    gap: -230,
  },
  "left-58": {
    left: 232,
  },
  "-left-58": {
    left: -232,
  },
  "right-58": {
    right: 232,
  },
  "-right-58": {
    right: -232,
  },
  "bottom-58": {
    bottom: 232,
  },
  "-bottom-58": {
    bottom: -232,
  },
  "top-58": {
    top: 232,
  },
  "-top-58": {
    top: -232,
  },
  "w-58": {
    width: 232,
  },
  "-w-58": {
    width: -232,
  },
  "h-58": {
    height: 232,
  },
  "-h-58": {
    height: -232,
  },
  "gap-58": {
    gap: 232,
  },
  "-gap-58": {
    gap: -232,
  },
  "left-58.5": {
    left: 234,
  },
  "-left-58.5": {
    left: -234,
  },
  "right-58.5": {
    right: 234,
  },
  "-right-58.5": {
    right: -234,
  },
  "bottom-58.5": {
    bottom: 234,
  },
  "-bottom-58.5": {
    bottom: -234,
  },
  "top-58.5": {
    top: 234,
  },
  "-top-58.5": {
    top: -234,
  },
  "w-58.5": {
    width: 234,
  },
  "-w-58.5": {
    width: -234,
  },
  "h-58.5": {
    height: 234,
  },
  "-h-58.5": {
    height: -234,
  },
  "gap-58.5": {
    gap: 234,
  },
  "-gap-58.5": {
    gap: -234,
  },
  "left-59": {
    left: 236,
  },
  "-left-59": {
    left: -236,
  },
  "right-59": {
    right: 236,
  },
  "-right-59": {
    right: -236,
  },
  "bottom-59": {
    bottom: 236,
  },
  "-bottom-59": {
    bottom: -236,
  },
  "top-59": {
    top: 236,
  },
  "-top-59": {
    top: -236,
  },
  "w-59": {
    width: 236,
  },
  "-w-59": {
    width: -236,
  },
  "h-59": {
    height: 236,
  },
  "-h-59": {
    height: -236,
  },
  "gap-59": {
    gap: 236,
  },
  "-gap-59": {
    gap: -236,
  },
  "left-59.5": {
    left: 238,
  },
  "-left-59.5": {
    left: -238,
  },
  "right-59.5": {
    right: 238,
  },
  "-right-59.5": {
    right: -238,
  },
  "bottom-59.5": {
    bottom: 238,
  },
  "-bottom-59.5": {
    bottom: -238,
  },
  "top-59.5": {
    top: 238,
  },
  "-top-59.5": {
    top: -238,
  },
  "w-59.5": {
    width: 238,
  },
  "-w-59.5": {
    width: -238,
  },
  "h-59.5": {
    height: 238,
  },
  "-h-59.5": {
    height: -238,
  },
  "gap-59.5": {
    gap: 238,
  },
  "-gap-59.5": {
    gap: -238,
  },
  "left-60": {
    left: 240,
  },
  "-left-60": {
    left: -240,
  },
  "right-60": {
    right: 240,
  },
  "-right-60": {
    right: -240,
  },
  "bottom-60": {
    bottom: 240,
  },
  "-bottom-60": {
    bottom: -240,
  },
  "top-60": {
    top: 240,
  },
  "-top-60": {
    top: -240,
  },
  "w-60": {
    width: 240,
  },
  "-w-60": {
    width: -240,
  },
  "h-60": {
    height: 240,
  },
  "-h-60": {
    height: -240,
  },
  "gap-60": {
    gap: 240,
  },
  "-gap-60": {
    gap: -240,
  },
  "left-60.5": {
    left: 242,
  },
  "-left-60.5": {
    left: -242,
  },
  "right-60.5": {
    right: 242,
  },
  "-right-60.5": {
    right: -242,
  },
  "bottom-60.5": {
    bottom: 242,
  },
  "-bottom-60.5": {
    bottom: -242,
  },
  "top-60.5": {
    top: 242,
  },
  "-top-60.5": {
    top: -242,
  },
  "w-60.5": {
    width: 242,
  },
  "-w-60.5": {
    width: -242,
  },
  "h-60.5": {
    height: 242,
  },
  "-h-60.5": {
    height: -242,
  },
  "gap-60.5": {
    gap: 242,
  },
  "-gap-60.5": {
    gap: -242,
  },
  "left-61": {
    left: 244,
  },
  "-left-61": {
    left: -244,
  },
  "right-61": {
    right: 244,
  },
  "-right-61": {
    right: -244,
  },
  "bottom-61": {
    bottom: 244,
  },
  "-bottom-61": {
    bottom: -244,
  },
  "top-61": {
    top: 244,
  },
  "-top-61": {
    top: -244,
  },
  "w-61": {
    width: 244,
  },
  "-w-61": {
    width: -244,
  },
  "h-61": {
    height: 244,
  },
  "-h-61": {
    height: -244,
  },
  "gap-61": {
    gap: 244,
  },
  "-gap-61": {
    gap: -244,
  },
  "left-61.5": {
    left: 246,
  },
  "-left-61.5": {
    left: -246,
  },
  "right-61.5": {
    right: 246,
  },
  "-right-61.5": {
    right: -246,
  },
  "bottom-61.5": {
    bottom: 246,
  },
  "-bottom-61.5": {
    bottom: -246,
  },
  "top-61.5": {
    top: 246,
  },
  "-top-61.5": {
    top: -246,
  },
  "w-61.5": {
    width: 246,
  },
  "-w-61.5": {
    width: -246,
  },
  "h-61.5": {
    height: 246,
  },
  "-h-61.5": {
    height: -246,
  },
  "gap-61.5": {
    gap: 246,
  },
  "-gap-61.5": {
    gap: -246,
  },
  "left-62": {
    left: 248,
  },
  "-left-62": {
    left: -248,
  },
  "right-62": {
    right: 248,
  },
  "-right-62": {
    right: -248,
  },
  "bottom-62": {
    bottom: 248,
  },
  "-bottom-62": {
    bottom: -248,
  },
  "top-62": {
    top: 248,
  },
  "-top-62": {
    top: -248,
  },
  "w-62": {
    width: 248,
  },
  "-w-62": {
    width: -248,
  },
  "h-62": {
    height: 248,
  },
  "-h-62": {
    height: -248,
  },
  "gap-62": {
    gap: 248,
  },
  "-gap-62": {
    gap: -248,
  },
  "left-62.5": {
    left: 250,
  },
  "-left-62.5": {
    left: -250,
  },
  "right-62.5": {
    right: 250,
  },
  "-right-62.5": {
    right: -250,
  },
  "bottom-62.5": {
    bottom: 250,
  },
  "-bottom-62.5": {
    bottom: -250,
  },
  "top-62.5": {
    top: 250,
  },
  "-top-62.5": {
    top: -250,
  },
  "w-62.5": {
    width: 250,
  },
  "-w-62.5": {
    width: -250,
  },
  "h-62.5": {
    height: 250,
  },
  "-h-62.5": {
    height: -250,
  },
  "gap-62.5": {
    gap: 250,
  },
  "-gap-62.5": {
    gap: -250,
  },
  "left-63": {
    left: 252,
  },
  "-left-63": {
    left: -252,
  },
  "right-63": {
    right: 252,
  },
  "-right-63": {
    right: -252,
  },
  "bottom-63": {
    bottom: 252,
  },
  "-bottom-63": {
    bottom: -252,
  },
  "top-63": {
    top: 252,
  },
  "-top-63": {
    top: -252,
  },
  "w-63": {
    width: 252,
  },
  "-w-63": {
    width: -252,
  },
  "h-63": {
    height: 252,
  },
  "-h-63": {
    height: -252,
  },
  "gap-63": {
    gap: 252,
  },
  "-gap-63": {
    gap: -252,
  },
  "left-63.5": {
    left: 254,
  },
  "-left-63.5": {
    left: -254,
  },
  "right-63.5": {
    right: 254,
  },
  "-right-63.5": {
    right: -254,
  },
  "bottom-63.5": {
    bottom: 254,
  },
  "-bottom-63.5": {
    bottom: -254,
  },
  "top-63.5": {
    top: 254,
  },
  "-top-63.5": {
    top: -254,
  },
  "w-63.5": {
    width: 254,
  },
  "-w-63.5": {
    width: -254,
  },
  "h-63.5": {
    height: 254,
  },
  "-h-63.5": {
    height: -254,
  },
  "gap-63.5": {
    gap: 254,
  },
  "-gap-63.5": {
    gap: -254,
  },
  "left-64": {
    left: 256,
  },
  "-left-64": {
    left: -256,
  },
  "right-64": {
    right: 256,
  },
  "-right-64": {
    right: -256,
  },
  "bottom-64": {
    bottom: 256,
  },
  "-bottom-64": {
    bottom: -256,
  },
  "top-64": {
    top: 256,
  },
  "-top-64": {
    top: -256,
  },
  "w-64": {
    width: 256,
  },
  "-w-64": {
    width: -256,
  },
  "h-64": {
    height: 256,
  },
  "-h-64": {
    height: -256,
  },
  "gap-64": {
    gap: 256,
  },
  "-gap-64": {
    gap: -256,
  },
  "left-64.5": {
    left: 258,
  },
  "-left-64.5": {
    left: -258,
  },
  "right-64.5": {
    right: 258,
  },
  "-right-64.5": {
    right: -258,
  },
  "bottom-64.5": {
    bottom: 258,
  },
  "-bottom-64.5": {
    bottom: -258,
  },
  "top-64.5": {
    top: 258,
  },
  "-top-64.5": {
    top: -258,
  },
  "w-64.5": {
    width: 258,
  },
  "-w-64.5": {
    width: -258,
  },
  "h-64.5": {
    height: 258,
  },
  "-h-64.5": {
    height: -258,
  },
  "gap-64.5": {
    gap: 258,
  },
  "-gap-64.5": {
    gap: -258,
  },
  "left-65": {
    left: 260,
  },
  "-left-65": {
    left: -260,
  },
  "right-65": {
    right: 260,
  },
  "-right-65": {
    right: -260,
  },
  "bottom-65": {
    bottom: 260,
  },
  "-bottom-65": {
    bottom: -260,
  },
  "top-65": {
    top: 260,
  },
  "-top-65": {
    top: -260,
  },
  "w-65": {
    width: 260,
  },
  "-w-65": {
    width: -260,
  },
  "h-65": {
    height: 260,
  },
  "-h-65": {
    height: -260,
  },
  "gap-65": {
    gap: 260,
  },
  "-gap-65": {
    gap: -260,
  },
  "left-65.5": {
    left: 262,
  },
  "-left-65.5": {
    left: -262,
  },
  "right-65.5": {
    right: 262,
  },
  "-right-65.5": {
    right: -262,
  },
  "bottom-65.5": {
    bottom: 262,
  },
  "-bottom-65.5": {
    bottom: -262,
  },
  "top-65.5": {
    top: 262,
  },
  "-top-65.5": {
    top: -262,
  },
  "w-65.5": {
    width: 262,
  },
  "-w-65.5": {
    width: -262,
  },
  "h-65.5": {
    height: 262,
  },
  "-h-65.5": {
    height: -262,
  },
  "gap-65.5": {
    gap: 262,
  },
  "-gap-65.5": {
    gap: -262,
  },
  "left-66": {
    left: 264,
  },
  "-left-66": {
    left: -264,
  },
  "right-66": {
    right: 264,
  },
  "-right-66": {
    right: -264,
  },
  "bottom-66": {
    bottom: 264,
  },
  "-bottom-66": {
    bottom: -264,
  },
  "top-66": {
    top: 264,
  },
  "-top-66": {
    top: -264,
  },
  "w-66": {
    width: 264,
  },
  "-w-66": {
    width: -264,
  },
  "h-66": {
    height: 264,
  },
  "-h-66": {
    height: -264,
  },
  "gap-66": {
    gap: 264,
  },
  "-gap-66": {
    gap: -264,
  },
  "left-66.5": {
    left: 266,
  },
  "-left-66.5": {
    left: -266,
  },
  "right-66.5": {
    right: 266,
  },
  "-right-66.5": {
    right: -266,
  },
  "bottom-66.5": {
    bottom: 266,
  },
  "-bottom-66.5": {
    bottom: -266,
  },
  "top-66.5": {
    top: 266,
  },
  "-top-66.5": {
    top: -266,
  },
  "w-66.5": {
    width: 266,
  },
  "-w-66.5": {
    width: -266,
  },
  "h-66.5": {
    height: 266,
  },
  "-h-66.5": {
    height: -266,
  },
  "gap-66.5": {
    gap: 266,
  },
  "-gap-66.5": {
    gap: -266,
  },
  "left-67": {
    left: 268,
  },
  "-left-67": {
    left: -268,
  },
  "right-67": {
    right: 268,
  },
  "-right-67": {
    right: -268,
  },
  "bottom-67": {
    bottom: 268,
  },
  "-bottom-67": {
    bottom: -268,
  },
  "top-67": {
    top: 268,
  },
  "-top-67": {
    top: -268,
  },
  "w-67": {
    width: 268,
  },
  "-w-67": {
    width: -268,
  },
  "h-67": {
    height: 268,
  },
  "-h-67": {
    height: -268,
  },
  "gap-67": {
    gap: 268,
  },
  "-gap-67": {
    gap: -268,
  },
  "left-67.5": {
    left: 270,
  },
  "-left-67.5": {
    left: -270,
  },
  "right-67.5": {
    right: 270,
  },
  "-right-67.5": {
    right: -270,
  },
  "bottom-67.5": {
    bottom: 270,
  },
  "-bottom-67.5": {
    bottom: -270,
  },
  "top-67.5": {
    top: 270,
  },
  "-top-67.5": {
    top: -270,
  },
  "w-67.5": {
    width: 270,
  },
  "-w-67.5": {
    width: -270,
  },
  "h-67.5": {
    height: 270,
  },
  "-h-67.5": {
    height: -270,
  },
  "gap-67.5": {
    gap: 270,
  },
  "-gap-67.5": {
    gap: -270,
  },
  "left-68": {
    left: 272,
  },
  "-left-68": {
    left: -272,
  },
  "right-68": {
    right: 272,
  },
  "-right-68": {
    right: -272,
  },
  "bottom-68": {
    bottom: 272,
  },
  "-bottom-68": {
    bottom: -272,
  },
  "top-68": {
    top: 272,
  },
  "-top-68": {
    top: -272,
  },
  "w-68": {
    width: 272,
  },
  "-w-68": {
    width: -272,
  },
  "h-68": {
    height: 272,
  },
  "-h-68": {
    height: -272,
  },
  "gap-68": {
    gap: 272,
  },
  "-gap-68": {
    gap: -272,
  },
  "left-68.5": {
    left: 274,
  },
  "-left-68.5": {
    left: -274,
  },
  "right-68.5": {
    right: 274,
  },
  "-right-68.5": {
    right: -274,
  },
  "bottom-68.5": {
    bottom: 274,
  },
  "-bottom-68.5": {
    bottom: -274,
  },
  "top-68.5": {
    top: 274,
  },
  "-top-68.5": {
    top: -274,
  },
  "w-68.5": {
    width: 274,
  },
  "-w-68.5": {
    width: -274,
  },
  "h-68.5": {
    height: 274,
  },
  "-h-68.5": {
    height: -274,
  },
  "gap-68.5": {
    gap: 274,
  },
  "-gap-68.5": {
    gap: -274,
  },
  "left-69": {
    left: 276,
  },
  "-left-69": {
    left: -276,
  },
  "right-69": {
    right: 276,
  },
  "-right-69": {
    right: -276,
  },
  "bottom-69": {
    bottom: 276,
  },
  "-bottom-69": {
    bottom: -276,
  },
  "top-69": {
    top: 276,
  },
  "-top-69": {
    top: -276,
  },
  "w-69": {
    width: 276,
  },
  "-w-69": {
    width: -276,
  },
  "h-69": {
    height: 276,
  },
  "-h-69": {
    height: -276,
  },
  "gap-69": {
    gap: 276,
  },
  "-gap-69": {
    gap: -276,
  },
  "left-69.5": {
    left: 278,
  },
  "-left-69.5": {
    left: -278,
  },
  "right-69.5": {
    right: 278,
  },
  "-right-69.5": {
    right: -278,
  },
  "bottom-69.5": {
    bottom: 278,
  },
  "-bottom-69.5": {
    bottom: -278,
  },
  "top-69.5": {
    top: 278,
  },
  "-top-69.5": {
    top: -278,
  },
  "w-69.5": {
    width: 278,
  },
  "-w-69.5": {
    width: -278,
  },
  "h-69.5": {
    height: 278,
  },
  "-h-69.5": {
    height: -278,
  },
  "gap-69.5": {
    gap: 278,
  },
  "-gap-69.5": {
    gap: -278,
  },
  "left-70": {
    left: 280,
  },
  "-left-70": {
    left: -280,
  },
  "right-70": {
    right: 280,
  },
  "-right-70": {
    right: -280,
  },
  "bottom-70": {
    bottom: 280,
  },
  "-bottom-70": {
    bottom: -280,
  },
  "top-70": {
    top: 280,
  },
  "-top-70": {
    top: -280,
  },
  "w-70": {
    width: 280,
  },
  "-w-70": {
    width: -280,
  },
  "h-70": {
    height: 280,
  },
  "-h-70": {
    height: -280,
  },
  "gap-70": {
    gap: 280,
  },
  "-gap-70": {
    gap: -280,
  },
  "left-70.5": {
    left: 282,
  },
  "-left-70.5": {
    left: -282,
  },
  "right-70.5": {
    right: 282,
  },
  "-right-70.5": {
    right: -282,
  },
  "bottom-70.5": {
    bottom: 282,
  },
  "-bottom-70.5": {
    bottom: -282,
  },
  "top-70.5": {
    top: 282,
  },
  "-top-70.5": {
    top: -282,
  },
  "w-70.5": {
    width: 282,
  },
  "-w-70.5": {
    width: -282,
  },
  "h-70.5": {
    height: 282,
  },
  "-h-70.5": {
    height: -282,
  },
  "gap-70.5": {
    gap: 282,
  },
  "-gap-70.5": {
    gap: -282,
  },
  "left-71": {
    left: 284,
  },
  "-left-71": {
    left: -284,
  },
  "right-71": {
    right: 284,
  },
  "-right-71": {
    right: -284,
  },
  "bottom-71": {
    bottom: 284,
  },
  "-bottom-71": {
    bottom: -284,
  },
  "top-71": {
    top: 284,
  },
  "-top-71": {
    top: -284,
  },
  "w-71": {
    width: 284,
  },
  "-w-71": {
    width: -284,
  },
  "h-71": {
    height: 284,
  },
  "-h-71": {
    height: -284,
  },
  "gap-71": {
    gap: 284,
  },
  "-gap-71": {
    gap: -284,
  },
  "left-71.5": {
    left: 286,
  },
  "-left-71.5": {
    left: -286,
  },
  "right-71.5": {
    right: 286,
  },
  "-right-71.5": {
    right: -286,
  },
  "bottom-71.5": {
    bottom: 286,
  },
  "-bottom-71.5": {
    bottom: -286,
  },
  "top-71.5": {
    top: 286,
  },
  "-top-71.5": {
    top: -286,
  },
  "w-71.5": {
    width: 286,
  },
  "-w-71.5": {
    width: -286,
  },
  "h-71.5": {
    height: 286,
  },
  "-h-71.5": {
    height: -286,
  },
  "gap-71.5": {
    gap: 286,
  },
  "-gap-71.5": {
    gap: -286,
  },
  "left-72": {
    left: 288,
  },
  "-left-72": {
    left: -288,
  },
  "right-72": {
    right: 288,
  },
  "-right-72": {
    right: -288,
  },
  "bottom-72": {
    bottom: 288,
  },
  "-bottom-72": {
    bottom: -288,
  },
  "top-72": {
    top: 288,
  },
  "-top-72": {
    top: -288,
  },
  "w-72": {
    width: 288,
  },
  "-w-72": {
    width: -288,
  },
  "h-72": {
    height: 288,
  },
  "-h-72": {
    height: -288,
  },
  "gap-72": {
    gap: 288,
  },
  "-gap-72": {
    gap: -288,
  },
  "left-72.5": {
    left: 290,
  },
  "-left-72.5": {
    left: -290,
  },
  "right-72.5": {
    right: 290,
  },
  "-right-72.5": {
    right: -290,
  },
  "bottom-72.5": {
    bottom: 290,
  },
  "-bottom-72.5": {
    bottom: -290,
  },
  "top-72.5": {
    top: 290,
  },
  "-top-72.5": {
    top: -290,
  },
  "w-72.5": {
    width: 290,
  },
  "-w-72.5": {
    width: -290,
  },
  "h-72.5": {
    height: 290,
  },
  "-h-72.5": {
    height: -290,
  },
  "gap-72.5": {
    gap: 290,
  },
  "-gap-72.5": {
    gap: -290,
  },
  "left-73": {
    left: 292,
  },
  "-left-73": {
    left: -292,
  },
  "right-73": {
    right: 292,
  },
  "-right-73": {
    right: -292,
  },
  "bottom-73": {
    bottom: 292,
  },
  "-bottom-73": {
    bottom: -292,
  },
  "top-73": {
    top: 292,
  },
  "-top-73": {
    top: -292,
  },
  "w-73": {
    width: 292,
  },
  "-w-73": {
    width: -292,
  },
  "h-73": {
    height: 292,
  },
  "-h-73": {
    height: -292,
  },
  "gap-73": {
    gap: 292,
  },
  "-gap-73": {
    gap: -292,
  },
  "left-73.5": {
    left: 294,
  },
  "-left-73.5": {
    left: -294,
  },
  "right-73.5": {
    right: 294,
  },
  "-right-73.5": {
    right: -294,
  },
  "bottom-73.5": {
    bottom: 294,
  },
  "-bottom-73.5": {
    bottom: -294,
  },
  "top-73.5": {
    top: 294,
  },
  "-top-73.5": {
    top: -294,
  },
  "w-73.5": {
    width: 294,
  },
  "-w-73.5": {
    width: -294,
  },
  "h-73.5": {
    height: 294,
  },
  "-h-73.5": {
    height: -294,
  },
  "gap-73.5": {
    gap: 294,
  },
  "-gap-73.5": {
    gap: -294,
  },
  "left-74": {
    left: 296,
  },
  "-left-74": {
    left: -296,
  },
  "right-74": {
    right: 296,
  },
  "-right-74": {
    right: -296,
  },
  "bottom-74": {
    bottom: 296,
  },
  "-bottom-74": {
    bottom: -296,
  },
  "top-74": {
    top: 296,
  },
  "-top-74": {
    top: -296,
  },
  "w-74": {
    width: 296,
  },
  "-w-74": {
    width: -296,
  },
  "h-74": {
    height: 296,
  },
  "-h-74": {
    height: -296,
  },
  "gap-74": {
    gap: 296,
  },
  "-gap-74": {
    gap: -296,
  },
  "left-74.5": {
    left: 298,
  },
  "-left-74.5": {
    left: -298,
  },
  "right-74.5": {
    right: 298,
  },
  "-right-74.5": {
    right: -298,
  },
  "bottom-74.5": {
    bottom: 298,
  },
  "-bottom-74.5": {
    bottom: -298,
  },
  "top-74.5": {
    top: 298,
  },
  "-top-74.5": {
    top: -298,
  },
  "w-74.5": {
    width: 298,
  },
  "-w-74.5": {
    width: -298,
  },
  "h-74.5": {
    height: 298,
  },
  "-h-74.5": {
    height: -298,
  },
  "gap-74.5": {
    gap: 298,
  },
  "-gap-74.5": {
    gap: -298,
  },
  "left-75": {
    left: 300,
  },
  "-left-75": {
    left: -300,
  },
  "right-75": {
    right: 300,
  },
  "-right-75": {
    right: -300,
  },
  "bottom-75": {
    bottom: 300,
  },
  "-bottom-75": {
    bottom: -300,
  },
  "top-75": {
    top: 300,
  },
  "-top-75": {
    top: -300,
  },
  "w-75": {
    width: 300,
  },
  "-w-75": {
    width: -300,
  },
  "h-75": {
    height: 300,
  },
  "-h-75": {
    height: -300,
  },
  "gap-75": {
    gap: 300,
  },
  "-gap-75": {
    gap: -300,
  },
  "left-75.5": {
    left: 302,
  },
  "-left-75.5": {
    left: -302,
  },
  "right-75.5": {
    right: 302,
  },
  "-right-75.5": {
    right: -302,
  },
  "bottom-75.5": {
    bottom: 302,
  },
  "-bottom-75.5": {
    bottom: -302,
  },
  "top-75.5": {
    top: 302,
  },
  "-top-75.5": {
    top: -302,
  },
  "w-75.5": {
    width: 302,
  },
  "-w-75.5": {
    width: -302,
  },
  "h-75.5": {
    height: 302,
  },
  "-h-75.5": {
    height: -302,
  },
  "gap-75.5": {
    gap: 302,
  },
  "-gap-75.5": {
    gap: -302,
  },
  "left-76": {
    left: 304,
  },
  "-left-76": {
    left: -304,
  },
  "right-76": {
    right: 304,
  },
  "-right-76": {
    right: -304,
  },
  "bottom-76": {
    bottom: 304,
  },
  "-bottom-76": {
    bottom: -304,
  },
  "top-76": {
    top: 304,
  },
  "-top-76": {
    top: -304,
  },
  "w-76": {
    width: 304,
  },
  "-w-76": {
    width: -304,
  },
  "h-76": {
    height: 304,
  },
  "-h-76": {
    height: -304,
  },
  "gap-76": {
    gap: 304,
  },
  "-gap-76": {
    gap: -304,
  },
  "left-76.5": {
    left: 306,
  },
  "-left-76.5": {
    left: -306,
  },
  "right-76.5": {
    right: 306,
  },
  "-right-76.5": {
    right: -306,
  },
  "bottom-76.5": {
    bottom: 306,
  },
  "-bottom-76.5": {
    bottom: -306,
  },
  "top-76.5": {
    top: 306,
  },
  "-top-76.5": {
    top: -306,
  },
  "w-76.5": {
    width: 306,
  },
  "-w-76.5": {
    width: -306,
  },
  "h-76.5": {
    height: 306,
  },
  "-h-76.5": {
    height: -306,
  },
  "gap-76.5": {
    gap: 306,
  },
  "-gap-76.5": {
    gap: -306,
  },
  "left-77": {
    left: 308,
  },
  "-left-77": {
    left: -308,
  },
  "right-77": {
    right: 308,
  },
  "-right-77": {
    right: -308,
  },
  "bottom-77": {
    bottom: 308,
  },
  "-bottom-77": {
    bottom: -308,
  },
  "top-77": {
    top: 308,
  },
  "-top-77": {
    top: -308,
  },
  "w-77": {
    width: 308,
  },
  "-w-77": {
    width: -308,
  },
  "h-77": {
    height: 308,
  },
  "-h-77": {
    height: -308,
  },
  "gap-77": {
    gap: 308,
  },
  "-gap-77": {
    gap: -308,
  },
  "left-77.5": {
    left: 310,
  },
  "-left-77.5": {
    left: -310,
  },
  "right-77.5": {
    right: 310,
  },
  "-right-77.5": {
    right: -310,
  },
  "bottom-77.5": {
    bottom: 310,
  },
  "-bottom-77.5": {
    bottom: -310,
  },
  "top-77.5": {
    top: 310,
  },
  "-top-77.5": {
    top: -310,
  },
  "w-77.5": {
    width: 310,
  },
  "-w-77.5": {
    width: -310,
  },
  "h-77.5": {
    height: 310,
  },
  "-h-77.5": {
    height: -310,
  },
  "gap-77.5": {
    gap: 310,
  },
  "-gap-77.5": {
    gap: -310,
  },
  "left-78": {
    left: 312,
  },
  "-left-78": {
    left: -312,
  },
  "right-78": {
    right: 312,
  },
  "-right-78": {
    right: -312,
  },
  "bottom-78": {
    bottom: 312,
  },
  "-bottom-78": {
    bottom: -312,
  },
  "top-78": {
    top: 312,
  },
  "-top-78": {
    top: -312,
  },
  "w-78": {
    width: 312,
  },
  "-w-78": {
    width: -312,
  },
  "h-78": {
    height: 312,
  },
  "-h-78": {
    height: -312,
  },
  "gap-78": {
    gap: 312,
  },
  "-gap-78": {
    gap: -312,
  },
  "left-78.5": {
    left: 314,
  },
  "-left-78.5": {
    left: -314,
  },
  "right-78.5": {
    right: 314,
  },
  "-right-78.5": {
    right: -314,
  },
  "bottom-78.5": {
    bottom: 314,
  },
  "-bottom-78.5": {
    bottom: -314,
  },
  "top-78.5": {
    top: 314,
  },
  "-top-78.5": {
    top: -314,
  },
  "w-78.5": {
    width: 314,
  },
  "-w-78.5": {
    width: -314,
  },
  "h-78.5": {
    height: 314,
  },
  "-h-78.5": {
    height: -314,
  },
  "gap-78.5": {
    gap: 314,
  },
  "-gap-78.5": {
    gap: -314,
  },
  "left-79": {
    left: 316,
  },
  "-left-79": {
    left: -316,
  },
  "right-79": {
    right: 316,
  },
  "-right-79": {
    right: -316,
  },
  "bottom-79": {
    bottom: 316,
  },
  "-bottom-79": {
    bottom: -316,
  },
  "top-79": {
    top: 316,
  },
  "-top-79": {
    top: -316,
  },
  "w-79": {
    width: 316,
  },
  "-w-79": {
    width: -316,
  },
  "h-79": {
    height: 316,
  },
  "-h-79": {
    height: -316,
  },
  "gap-79": {
    gap: 316,
  },
  "-gap-79": {
    gap: -316,
  },
  "left-79.5": {
    left: 318,
  },
  "-left-79.5": {
    left: -318,
  },
  "right-79.5": {
    right: 318,
  },
  "-right-79.5": {
    right: -318,
  },
  "bottom-79.5": {
    bottom: 318,
  },
  "-bottom-79.5": {
    bottom: -318,
  },
  "top-79.5": {
    top: 318,
  },
  "-top-79.5": {
    top: -318,
  },
  "w-79.5": {
    width: 318,
  },
  "-w-79.5": {
    width: -318,
  },
  "h-79.5": {
    height: 318,
  },
  "-h-79.5": {
    height: -318,
  },
  "gap-79.5": {
    gap: 318,
  },
  "-gap-79.5": {
    gap: -318,
  },
  "left-80": {
    left: 320,
  },
  "-left-80": {
    left: -320,
  },
  "right-80": {
    right: 320,
  },
  "-right-80": {
    right: -320,
  },
  "bottom-80": {
    bottom: 320,
  },
  "-bottom-80": {
    bottom: -320,
  },
  "top-80": {
    top: 320,
  },
  "-top-80": {
    top: -320,
  },
  "w-80": {
    width: 320,
  },
  "-w-80": {
    width: -320,
  },
  "h-80": {
    height: 320,
  },
  "-h-80": {
    height: -320,
  },
  "gap-80": {
    gap: 320,
  },
  "-gap-80": {
    gap: -320,
  },
  "h-auto": {
    height: "auto",
  },
  "h-px": {
    height: 1,
  },
  "h-full": {
    height: "100%",
  },
  "text-xs": {
    fontSize: 12,
  },
  "text-sm": {
    fontSize: 14,
  },
  "text-base": {
    fontSize: 16,
  },
  "text-lg": {
    fontSize: 18,
  },
  "text-xl": {
    fontSize: 20,
  },
  "text-2xl": {
    fontSize: 24,
  },
  "text-3xl": {
    fontSize: 30,
  },
  "text-4xl": {
    fontSize: 36,
  },
  "text-5xl": {
    fontSize: 48,
  },
  "text-6xl": {
    fontSize: 64,
  },
  "bg-transparent": {
    backgroundColor: "transparent",
  },
  "bg-black": {
    backgroundColor: "#000",
  },
  "bg-white": {
    backgroundColor: "#fff",
  },
  "bg-gray-100": {
    backgroundColor: "#f7fafc",
  },
  "bg-gray-200": {
    backgroundColor: "#edf2f7",
  },
  "bg-gray-300": {
    backgroundColor: "#e2e8f0",
  },
  "bg-gray-400": {
    backgroundColor: "#cbd5e0",
  },
  "bg-gray-500": {
    backgroundColor: "#a0aec0",
  },
  "bg-gray-600": {
    backgroundColor: "#718096",
  },
  "bg-gray-700": {
    backgroundColor: "#4a5568",
  },
  "bg-gray-800": {
    backgroundColor: "#2d3748",
  },
  "bg-gray-900": {
    backgroundColor: "#1a202c",
  },
  "bg-red-100": {
    backgroundColor: "#fff5f5",
  },
  "bg-red-200": {
    backgroundColor: "#fed7d7",
  },
  "bg-red-300": {
    backgroundColor: "#feb2b2",
  },
  "bg-red-400": {
    backgroundColor: "#fc8181",
  },
  "bg-red-500": {
    backgroundColor: "#f56565",
  },
  "bg-red-600": {
    backgroundColor: "#e53e3e",
  },
  "bg-red-700": {
    backgroundColor: "#c53030",
  },
  "bg-red-800": {
    backgroundColor: "#9b2c2c",
  },
  "bg-red-900": {
    backgroundColor: "#742a2a",
  },
  "bg-orange-100": {
    backgroundColor: "#fffaf0",
  },
  "bg-orange-200": {
    backgroundColor: "#feebc8",
  },
  "bg-orange-300": {
    backgroundColor: "#fbd38d",
  },
  "bg-orange-400": {
    backgroundColor: "#f6ad55",
  },
  "bg-orange-500": {
    backgroundColor: "#ed8936",
  },
  "bg-orange-600": {
    backgroundColor: "#dd6b20",
  },
  "bg-orange-700": {
    backgroundColor: "#c05621",
  },
  "bg-orange-800": {
    backgroundColor: "#9c4221",
  },
  "bg-orange-900": {
    backgroundColor: "#7b341e",
  },
  "bg-yellow-100": {
    backgroundColor: "#fffff0",
  },
  "bg-yellow-200": {
    backgroundColor: "#fefcbf",
  },
  "bg-yellow-300": {
    backgroundColor: "#faf089",
  },
  "bg-yellow-400": {
    backgroundColor: "#f6e05e",
  },
  "bg-yellow-500": {
    backgroundColor: "#ecc94b",
  },
  "bg-yellow-600": {
    backgroundColor: "#d69e2e",
  },
  "bg-yellow-700": {
    backgroundColor: "#b7791f",
  },
  "bg-yellow-800": {
    backgroundColor: "#975a16",
  },
  "bg-yellow-900": {
    backgroundColor: "#744210",
  },
  "bg-green-100": {
    backgroundColor: "#f0fff4",
  },
  "bg-green-200": {
    backgroundColor: "#c6f6d5",
  },
  "bg-green-300": {
    backgroundColor: "#9ae6b4",
  },
  "bg-green-400": {
    backgroundColor: "#68d391",
  },
  "bg-green-500": {
    backgroundColor: "#48bb78",
  },
  "bg-green-600": {
    backgroundColor: "#38a169",
  },
  "bg-green-700": {
    backgroundColor: "#2f855a",
  },
  "bg-green-800": {
    backgroundColor: "#276749",
  },
  "bg-green-900": {
    backgroundColor: "#22543d",
  },
  "bg-teal-100": {
    backgroundColor: "#e6fffa",
  },
  "bg-teal-200": {
    backgroundColor: "#b2f5ea",
  },
  "bg-teal-300": {
    backgroundColor: "#81e6d9",
  },
  "bg-teal-400": {
    backgroundColor: "#4fd1c5",
  },
  "bg-teal-500": {
    backgroundColor: "#38b2ac",
  },
  "bg-teal-600": {
    backgroundColor: "#319795",
  },
  "bg-teal-700": {
    backgroundColor: "#2c7a7b",
  },
  "bg-teal-800": {
    backgroundColor: "#285e61",
  },
  "bg-teal-900": {
    backgroundColor: "#234e52",
  },
  "bg-blue-100": {
    backgroundColor: "#ebf8ff",
  },
  "bg-blue-200": {
    backgroundColor: "#bee3f8",
  },
  "bg-blue-300": {
    backgroundColor: "#90cdf4",
  },
  "bg-blue-400": {
    backgroundColor: "#63b3ed",
  },
  "bg-blue-500": {
    backgroundColor: "#4299e1",
  },
  "bg-blue-600": {
    backgroundColor: "#3182ce",
  },
  "bg-blue-700": {
    backgroundColor: "#2b6cb0",
  },
  "bg-blue-800": {
    backgroundColor: "#2c5282",
  },
  "bg-blue-900": {
    backgroundColor: "#2a4365",
  },
  "bg-indigo-100": {
    backgroundColor: "#ebf4ff",
  },
  "bg-indigo-200": {
    backgroundColor: "#c3dafe",
  },
  "bg-indigo-300": {
    backgroundColor: "#a3bffa",
  },
  "bg-indigo-400": {
    backgroundColor: "#7f9cf5",
  },
  "bg-indigo-500": {
    backgroundColor: "#667eea",
  },
  "bg-indigo-600": {
    backgroundColor: "#5a67d8",
  },
  "bg-indigo-700": {
    backgroundColor: "#4c51bf",
  },
  "bg-indigo-800": {
    backgroundColor: "#434190",
  },
  "bg-indigo-900": {
    backgroundColor: "#3c366b",
  },
  "bg-purple-100": {
    backgroundColor: "#faf5ff",
  },
  "bg-purple-200": {
    backgroundColor: "#e9d8fd",
  },
  "bg-purple-300": {
    backgroundColor: "#d6bcfa",
  },
  "bg-purple-400": {
    backgroundColor: "#b794f4",
  },
  "bg-purple-500": {
    backgroundColor: "#9f7aea",
  },
  "bg-purple-600": {
    backgroundColor: "#805ad5",
  },
  "bg-purple-700": {
    backgroundColor: "#6b46c1",
  },
  "bg-purple-800": {
    backgroundColor: "#553c9a",
  },
  "bg-purple-900": {
    backgroundColor: "#44337a",
  },
  "bg-pink-100": {
    backgroundColor: "#fff5f7",
  },
  "bg-pink-200": {
    backgroundColor: "#fed7e2",
  },
  "bg-pink-300": {
    backgroundColor: "#fbb6ce",
  },
  "bg-pink-400": {
    backgroundColor: "#f687b3",
  },
  "bg-pink-500": {
    backgroundColor: "#ed64a6",
  },
  "bg-pink-600": {
    backgroundColor: "#d53f8c",
  },
  "bg-pink-700": {
    backgroundColor: "#b83280",
  },
  "bg-pink-800": {
    backgroundColor: "#97266d",
  },
  "bg-pink-900": {
    backgroundColor: "#702459",
  },
  "border-transparent": {
    borderColor: "transparent",
  },
  "border-black": {
    borderColor: "#000",
  },
  "border-white": {
    borderColor: "#fff",
  },
  "border-gray-100": {
    borderColor: "#f7fafc",
  },
  "border-gray-200": {
    borderColor: "#edf2f7",
  },
  "border-gray-300": {
    borderColor: "#e2e8f0",
  },
  "border-gray-400": {
    borderColor: "#cbd5e0",
  },
  "border-gray-500": {
    borderColor: "#a0aec0",
  },
  "border-gray-600": {
    borderColor: "#718096",
  },
  "border-gray-700": {
    borderColor: "#4a5568",
  },
  "border-gray-800": {
    borderColor: "#2d3748",
  },
  "border-gray-900": {
    borderColor: "#1a202c",
  },
  "border-red-100": {
    borderColor: "#fff5f5",
  },
  "border-red-200": {
    borderColor: "#fed7d7",
  },
  "border-red-300": {
    borderColor: "#feb2b2",
  },
  "border-red-400": {
    borderColor: "#fc8181",
  },
  "border-red-500": {
    borderColor: "#f56565",
  },
  "border-red-600": {
    borderColor: "#e53e3e",
  },
  "border-red-700": {
    borderColor: "#c53030",
  },
  "border-red-800": {
    borderColor: "#9b2c2c",
  },
  "border-red-900": {
    borderColor: "#742a2a",
  },
  "border-orange-100": {
    borderColor: "#fffaf0",
  },
  "border-orange-200": {
    borderColor: "#feebc8",
  },
  "border-orange-300": {
    borderColor: "#fbd38d",
  },
  "border-orange-400": {
    borderColor: "#f6ad55",
  },
  "border-orange-500": {
    borderColor: "#ed8936",
  },
  "border-orange-600": {
    borderColor: "#dd6b20",
  },
  "border-orange-700": {
    borderColor: "#c05621",
  },
  "border-orange-800": {
    borderColor: "#9c4221",
  },
  "border-orange-900": {
    borderColor: "#7b341e",
  },
  "border-yellow-100": {
    borderColor: "#fffff0",
  },
  "border-yellow-200": {
    borderColor: "#fefcbf",
  },
  "border-yellow-300": {
    borderColor: "#faf089",
  },
  "border-yellow-400": {
    borderColor: "#f6e05e",
  },
  "border-yellow-500": {
    borderColor: "#ecc94b",
  },
  "border-yellow-600": {
    borderColor: "#d69e2e",
  },
  "border-yellow-700": {
    borderColor: "#b7791f",
  },
  "border-yellow-800": {
    borderColor: "#975a16",
  },
  "border-yellow-900": {
    borderColor: "#744210",
  },
  "border-green-100": {
    borderColor: "#f0fff4",
  },
  "border-green-200": {
    borderColor: "#c6f6d5",
  },
  "border-green-300": {
    borderColor: "#9ae6b4",
  },
  "border-green-400": {
    borderColor: "#68d391",
  },
  "border-green-500": {
    borderColor: "#48bb78",
  },
  "border-green-600": {
    borderColor: "#38a169",
  },
  "border-green-700": {
    borderColor: "#2f855a",
  },
  "border-green-800": {
    borderColor: "#276749",
  },
  "border-green-900": {
    borderColor: "#22543d",
  },
  "border-teal-100": {
    borderColor: "#e6fffa",
  },
  "border-teal-200": {
    borderColor: "#b2f5ea",
  },
  "border-teal-300": {
    borderColor: "#81e6d9",
  },
  "border-teal-400": {
    borderColor: "#4fd1c5",
  },
  "border-teal-500": {
    borderColor: "#38b2ac",
  },
  "border-teal-600": {
    borderColor: "#319795",
  },
  "border-teal-700": {
    borderColor: "#2c7a7b",
  },
  "border-teal-800": {
    borderColor: "#285e61",
  },
  "border-teal-900": {
    borderColor: "#234e52",
  },
  "border-blue-100": {
    borderColor: "#ebf8ff",
  },
  "border-blue-200": {
    borderColor: "#bee3f8",
  },
  "border-blue-300": {
    borderColor: "#90cdf4",
  },
  "border-blue-400": {
    borderColor: "#63b3ed",
  },
  "border-blue-500": {
    borderColor: "#4299e1",
  },
  "border-blue-600": {
    borderColor: "#3182ce",
  },
  "border-blue-700": {
    borderColor: "#2b6cb0",
  },
  "border-blue-800": {
    borderColor: "#2c5282",
  },
  "border-blue-900": {
    borderColor: "#2a4365",
  },
  "border-indigo-100": {
    borderColor: "#ebf4ff",
  },
  "border-indigo-200": {
    borderColor: "#c3dafe",
  },
  "border-indigo-300": {
    borderColor: "#a3bffa",
  },
  "border-indigo-400": {
    borderColor: "#7f9cf5",
  },
  "border-indigo-500": {
    borderColor: "#667eea",
  },
  "border-indigo-600": {
    borderColor: "#5a67d8",
  },
  "border-indigo-700": {
    borderColor: "#4c51bf",
  },
  "border-indigo-800": {
    borderColor: "#434190",
  },
  "border-indigo-900": {
    borderColor: "#3c366b",
  },
  "border-purple-100": {
    borderColor: "#faf5ff",
  },
  "border-purple-200": {
    borderColor: "#e9d8fd",
  },
  "border-purple-300": {
    borderColor: "#d6bcfa",
  },
  "border-purple-400": {
    borderColor: "#b794f4",
  },
  "border-purple-500": {
    borderColor: "#9f7aea",
  },
  "border-purple-600": {
    borderColor: "#805ad5",
  },
  "border-purple-700": {
    borderColor: "#6b46c1",
  },
  "border-purple-800": {
    borderColor: "#553c9a",
  },
  "border-purple-900": {
    borderColor: "#44337a",
  },
  "border-pink-100": {
    borderColor: "#fff5f7",
  },
  "border-pink-200": {
    borderColor: "#fed7e2",
  },
  "border-pink-300": {
    borderColor: "#fbb6ce",
  },
  "border-pink-400": {
    borderColor: "#f687b3",
  },
  "border-pink-500": {
    borderColor: "#ed64a6",
  },
  "border-pink-600": {
    borderColor: "#d53f8c",
  },
  "border-pink-700": {
    borderColor: "#b83280",
  },
  "border-pink-800": {
    borderColor: "#97266d",
  },
  "border-pink-900": {
    borderColor: "#702459",
  },
  "rounded-none": {
    borderRadius: 0,
  },
  "rounded-sm": {
    borderRadius: 2,
  },
  "rounded-md": {
    borderRadius: 6,
  },
  rounded: {
    borderRadius: 4,
  },
  "rounded-lg": {
    borderRadius: 8,
  },
  "rounded-xl": {
    borderRadius: 12,
  },
  "rounded-full": {
    borderRadius: 9999,
  },
  "rounded-t-none": {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  "rounded-r-none": {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  "rounded-b-none": {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  "rounded-l-none": {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  "rounded-t-sm": {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  "rounded-r-sm": {
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  "rounded-b-sm": {
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
  },
  "rounded-l-sm": {
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  "rounded-t": {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  "rounded-r": {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  "rounded-b": {
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  "rounded-l": {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  "rounded-t-lg": {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  "rounded-r-lg": {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  "rounded-b-lg": {
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  "rounded-l-lg": {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  "rounded-t-full": {
    borderTopLeftRadius: 9999,
    borderTopRightRadius: 9999,
  },
  "rounded-r-full": {
    borderTopRightRadius: 9999,
    borderBottomRightRadius: 9999,
  },
  "rounded-b-full": {
    borderBottomRightRadius: 9999,
    borderBottomLeftRadius: 9999,
  },
  "rounded-l-full": {
    borderTopLeftRadius: 9999,
    borderBottomLeftRadius: 9999,
  },
  "rounded-tl-none": {
    borderTopLeftRadius: 0,
  },
  "rounded-tr-none": {
    borderTopRightRadius: 0,
  },
  "rounded-br-none": {
    borderBottomRightRadius: 0,
  },
  "rounded-bl-none": {
    borderBottomLeftRadius: 0,
  },
  "rounded-tl-sm": {
    borderTopLeftRadius: 2,
  },
  "rounded-tr-sm": {
    borderTopRightRadius: 2,
  },
  "rounded-br-sm": {
    borderBottomRightRadius: 2,
  },
  "rounded-bl-sm": {
    borderBottomLeftRadius: 2,
  },
  "rounded-tl": {
    borderTopLeftRadius: 4,
  },
  "rounded-tr": {
    borderTopRightRadius: 4,
  },
  "rounded-br": {
    borderBottomRightRadius: 4,
  },
  "rounded-bl": {
    borderBottomLeftRadius: 4,
  },
  "rounded-tl-lg": {
    borderTopLeftRadius: 8,
  },
  "rounded-tr-lg": {
    borderTopRightRadius: 8,
  },
  "rounded-br-lg": {
    borderBottomRightRadius: 8,
  },
  "rounded-bl-lg": {
    borderBottomLeftRadius: 8,
  },
  "rounded-tl-full": {
    borderTopLeftRadius: 9999,
  },
  "rounded-tr-full": {
    borderTopRightRadius: 9999,
  },
  "rounded-br-full": {
    borderBottomRightRadius: 9999,
  },
  "rounded-bl-full": {
    borderBottomLeftRadius: 9999,
  },
  "border-solid": {
    borderStyle: "solid",
  },
  "border-dashed": {
    borderStyle: "dashed",
  },
  "border-dotted": {
    borderStyle: "dotted",
  },
  "border-double": {
    borderStyle: "double",
  },
  "border-none": {
    borderStyle: "none",
  },
  "border-0": {
    borderWidth: 0,
  },
  "border-2": {
    borderWidth: 2,
  },
  "border-4": {
    borderWidth: 4,
  },
  "border-8": {
    borderWidth: 8,
  },
  border: {
    borderWidth: 1,
  },
  "border-t-0": {
    borderTopWidth: 0,
  },
  "border-r-0": {
    borderRightWidth: 0,
  },
  "border-b-0": {
    borderBottomWidth: 0,
  },
  "border-l-0": {
    borderLeftWidth: 0,
  },
  "border-t-2": {
    borderTopWidth: 2,
  },
  "border-r-2": {
    borderRightWidth: 2,
  },
  "border-b-2": {
    borderBottomWidth: 2,
  },
  "border-l-2": {
    borderLeftWidth: 2,
  },
  "border-t-4": {
    borderTopWidth: 4,
  },
  "border-r-4": {
    borderRightWidth: 4,
  },
  "border-b-4": {
    borderBottomWidth: 4,
  },
  "border-l-4": {
    borderLeftWidth: 4,
  },
  "border-t-8": {
    borderTopWidth: 8,
  },
  "border-r-8": {
    borderRightWidth: 8,
  },
  "border-b-8": {
    borderBottomWidth: 8,
  },
  "border-l-8": {
    borderLeftWidth: 8,
  },
  "border-t": {
    borderTopWidth: 1,
  },
  "border-r": {
    borderRightWidth: 1,
  },
  "border-b": {
    borderBottomWidth: 1,
  },
  "border-l": {
    borderLeftWidth: 1,
  },
  flex: {
    display: "flex",
  },
  "inline-flex": {
    display: "inline-flex",
  },
  "flex-row": {
    flexDirection: "row",
  },
  "flex-row-reverse": {
    flexDirection: "row-reverse",
  },
  "flex-col": {
    flexDirection: "column",
  },
  "flex-col-reverse": {
    flexDirection: "column-reverse",
  },
  "flex-wrap": {
    flexWrap: "wrap",
  },
  "flex-wrap-reverse": {
    flexWrap: "wrap-reverse",
  },
  "flex-no-wrap": {
    flexWrap: "nowrap",
  },
  "items-start": {
    alignItems: "flex-start",
  },
  "items-end": {
    alignItems: "flex-end",
  },
  "items-center": {
    alignItems: "center",
  },
  "items-baseline": {
    alignItems: "baseline",
  },
  "items-stretch": {
    alignItems: "stretch",
  },
  "self-auto": {
    alignSelf: "auto",
  },
  "self-start": {
    alignSelf: "flex-start",
  },
  "self-end": {
    alignSelf: "flex-end",
  },
  "self-center": {
    alignSelf: "center",
  },
  "self-stretch": {
    alignSelf: "stretch",
  },
  "justify-start": {
    justifyContent: "flex-start",
  },
  "justify-end": {
    justifyContent: "flex-end",
  },
  "justify-center": {
    justifyContent: "center",
  },
  "justify-between": {
    justifyContent: "space-between",
  },
  "justify-around": {
    justifyContent: "space-around",
  },
  "content-center": {
    alignContent: "center",
  },
  "content-start": {
    alignContent: "flex-start",
  },
  "content-end": {
    alignContent: "flex-end",
  },
  "content-between": {
    alignContent: "space-between",
  },
  "content-around": {
    alignContent: "space-around",
  },
  "flex-1": {
    flex: 1,
  },
  "flex-grow-0": {
    flexGrow: 0,
  },
  "flex-grow": {
    flexGrow: 1,
  },
  "flex-shrink-0": {
    flexShrink: 0,
  },
  "flex-shrink": {
    flexShrink: 1,
  },
  "font-hairline": {
    fontWeight: "100",
  },
  "font-thin": {
    fontWeight: "200",
  },
  "font-light": {
    fontWeight: "300",
  },
  "font-normal": {
    fontWeight: "400",
  },
  "font-medium": {
    fontWeight: "500",
  },
  "font-semibold": {
    fontWeight: "600",
  },
  "font-bold": {
    fontWeight: "700",
  },
  "font-extrabold": {
    fontWeight: "800",
  },
  "font-black": {
    fontWeight: "900",
  },
  "m-0": {
    margin: 0,
  },
  "m-1": {
    margin: 4,
  },
  "m-2": {
    margin: 8,
  },
  "m-3": {
    margin: 12,
  },
  "m-4": {
    margin: 16,
  },
  "m-5": {
    margin: 20,
  },
  "m-6": {
    margin: 24,
  },
  "m-8": {
    margin: 32,
  },
  "m-10": {
    margin: 40,
  },
  "m-12": {
    margin: 48,
  },
  "m-16": {
    margin: 64,
  },
  "m-20": {
    margin: 80,
  },
  "m-24": {
    margin: 96,
  },
  "m-32": {
    margin: 128,
  },
  "m-40": {
    margin: 160,
  },
  "m-48": {
    margin: 192,
  },
  "m-56": {
    margin: 224,
  },
  "m-64": {
    margin: 256,
  },
  "m-auto": {
    margin: "auto",
  },
  "m-px": {
    margin: 1,
  },
  "-m-1": {
    margin: -4,
  },
  "-m-2": {
    margin: -8,
  },
  "-m-3": {
    margin: -12,
  },
  "-m-4": {
    margin: -16,
  },
  "-m-5": {
    margin: -20,
  },
  "-m-6": {
    margin: -24,
  },
  "-m-8": {
    margin: -32,
  },
  "-m-10": {
    margin: -40,
  },
  "-m-12": {
    margin: -48,
  },
  "-m-16": {
    margin: -64,
  },
  "-m-20": {
    margin: -80,
  },
  "-m-24": {
    margin: -96,
  },
  "-m-32": {
    margin: -128,
  },
  "-m-40": {
    margin: -160,
  },
  "-m-48": {
    margin: -192,
  },
  "-m-56": {
    margin: -224,
  },
  "-m-64": {
    margin: -256,
  },
  "-m-px": {
    margin: -1,
  },
  "my-0": {
    marginTop: 0,
    marginBottom: 0,
  },
  "mx-0": {
    marginLeft: 0,
    marginRight: 0,
  },
  "my-1": {
    marginTop: 4,
    marginBottom: 4,
  },
  "mx-1": {
    marginLeft: 4,
    marginRight: 4,
  },
  "my-2": {
    marginTop: 8,
    marginBottom: 8,
  },
  "mx-2": {
    marginLeft: 8,
    marginRight: 8,
  },
  "my-3": {
    marginTop: 12,
    marginBottom: 12,
  },
  "mx-3": {
    marginLeft: 12,
    marginRight: 12,
  },
  "my-4": {
    marginTop: 16,
    marginBottom: 16,
  },
  "mx-4": {
    marginLeft: 16,
    marginRight: 16,
  },
  "my-5": {
    marginTop: 20,
    marginBottom: 20,
  },
  "mx-5": {
    marginLeft: 20,
    marginRight: 20,
  },
  "my-6": {
    marginTop: 24,
    marginBottom: 24,
  },
  "mx-6": {
    marginLeft: 24,
    marginRight: 24,
  },
  "my-8": {
    marginTop: 32,
    marginBottom: 32,
  },
  "mx-8": {
    marginLeft: 32,
    marginRight: 32,
  },
  "my-10": {
    marginTop: 40,
    marginBottom: 40,
  },
  "mx-10": {
    marginLeft: 40,
    marginRight: 40,
  },
  "my-12": {
    marginTop: 48,
    marginBottom: 48,
  },
  "mx-12": {
    marginLeft: 48,
    marginRight: 48,
  },
  "my-16": {
    marginTop: 64,
    marginBottom: 64,
  },
  "mx-16": {
    marginLeft: 64,
    marginRight: 64,
  },
  "my-20": {
    marginTop: 80,
    marginBottom: 80,
  },
  "mx-20": {
    marginLeft: 80,
    marginRight: 80,
  },
  "my-24": {
    marginTop: 96,
    marginBottom: 96,
  },
  "mx-24": {
    marginLeft: 96,
    marginRight: 96,
  },
  "my-32": {
    marginTop: 128,
    marginBottom: 128,
  },
  "mx-32": {
    marginLeft: 128,
    marginRight: 128,
  },
  "my-40": {
    marginTop: 160,
    marginBottom: 160,
  },
  "mx-40": {
    marginLeft: 160,
    marginRight: 160,
  },
  "my-48": {
    marginTop: 192,
    marginBottom: 192,
  },
  "mx-48": {
    marginLeft: 192,
    marginRight: 192,
  },
  "my-56": {
    marginTop: 224,
    marginBottom: 224,
  },
  "mx-56": {
    marginLeft: 224,
    marginRight: 224,
  },
  "my-64": {
    marginTop: 256,
    marginBottom: 256,
  },
  "mx-64": {
    marginLeft: 256,
    marginRight: 256,
  },
  "my-auto": {
    marginTop: "auto",
    marginBottom: "auto",
  },
  "mx-auto": {
    marginLeft: "auto",
    marginRight: "auto",
  },
  "my-px": {
    marginTop: 1,
    marginBottom: 1,
  },
  "mx-px": {
    marginLeft: 1,
    marginRight: 1,
  },
  "-my-1": {
    marginTop: -4,
    marginBottom: -4,
  },
  "-mx-1": {
    marginLeft: -4,
    marginRight: -4,
  },
  "-my-2": {
    marginTop: -8,
    marginBottom: -8,
  },
  "-mx-2": {
    marginLeft: -8,
    marginRight: -8,
  },
  "-my-3": {
    marginTop: -12,
    marginBottom: -12,
  },
  "-mx-3": {
    marginLeft: -12,
    marginRight: -12,
  },
  "-my-4": {
    marginTop: -16,
    marginBottom: -16,
  },
  "-mx-4": {
    marginLeft: -16,
    marginRight: -16,
  },
  "-my-5": {
    marginTop: -20,
    marginBottom: -20,
  },
  "-mx-5": {
    marginLeft: -20,
    marginRight: -20,
  },
  "-my-6": {
    marginTop: -24,
    marginBottom: -24,
  },
  "-mx-6": {
    marginLeft: -24,
    marginRight: -24,
  },
  "-my-8": {
    marginTop: -32,
    marginBottom: -32,
  },
  "-mx-8": {
    marginLeft: -32,
    marginRight: -32,
  },
  "-my-10": {
    marginTop: -40,
    marginBottom: -40,
  },
  "-mx-10": {
    marginLeft: -40,
    marginRight: -40,
  },
  "-my-12": {
    marginTop: -48,
    marginBottom: -48,
  },
  "-mx-12": {
    marginLeft: -48,
    marginRight: -48,
  },
  "-my-16": {
    marginTop: -64,
    marginBottom: -64,
  },
  "-mx-16": {
    marginLeft: -64,
    marginRight: -64,
  },
  "-my-20": {
    marginTop: -80,
    marginBottom: -80,
  },
  "-mx-20": {
    marginLeft: -80,
    marginRight: -80,
  },
  "-my-24": {
    marginTop: -96,
    marginBottom: -96,
  },
  "-mx-24": {
    marginLeft: -96,
    marginRight: -96,
  },
  "-my-32": {
    marginTop: -128,
    marginBottom: -128,
  },
  "-mx-32": {
    marginLeft: -128,
    marginRight: -128,
  },
  "-my-40": {
    marginTop: -160,
    marginBottom: -160,
  },
  "-mx-40": {
    marginLeft: -160,
    marginRight: -160,
  },
  "-my-48": {
    marginTop: -192,
    marginBottom: -192,
  },
  "-mx-48": {
    marginLeft: -192,
    marginRight: -192,
  },
  "-my-56": {
    marginTop: -224,
    marginBottom: -224,
  },
  "-mx-56": {
    marginLeft: -224,
    marginRight: -224,
  },
  "-my-64": {
    marginTop: -256,
    marginBottom: -256,
  },
  "-mx-64": {
    marginLeft: -256,
    marginRight: -256,
  },
  "-my-px": {
    marginTop: -1,
    marginBottom: -1,
  },
  "-mx-px": {
    marginLeft: -1,
    marginRight: -1,
  },
  "mt-0": {
    marginTop: 0,
  },
  "mr-0": {
    marginRight: 0,
  },
  "mb-0": {
    marginBottom: 0,
  },
  "ml-0": {
    marginLeft: 0,
  },
  "mt-1": {
    marginTop: 4,
  },
  "mr-1": {
    marginRight: 4,
  },
  "mb-1": {
    marginBottom: 4,
  },
  "ml-1": {
    marginLeft: 4,
  },
  "mt-2": {
    marginTop: 8,
  },
  "mr-2": {
    marginRight: 8,
  },
  "mb-2": {
    marginBottom: 8,
  },
  "ml-2": {
    marginLeft: 8,
  },
  "mt-3": {
    marginTop: 12,
  },
  "mr-3": {
    marginRight: 12,
  },
  "mb-3": {
    marginBottom: 12,
  },
  "ml-3": {
    marginLeft: 12,
  },
  "mt-4": {
    marginTop: 16,
  },
  "mr-4": {
    marginRight: 16,
  },
  "mb-4": {
    marginBottom: 16,
  },
  "ml-4": {
    marginLeft: 16,
  },
  "mt-5": {
    marginTop: 20,
  },
  "mr-5": {
    marginRight: 20,
  },
  "mb-5": {
    marginBottom: 20,
  },
  "ml-5": {
    marginLeft: 20,
  },
  "mt-6": {
    marginTop: 24,
  },
  "mr-6": {
    marginRight: 24,
  },
  "mb-6": {
    marginBottom: 24,
  },
  "ml-6": {
    marginLeft: 24,
  },
  "mt-8": {
    marginTop: 32,
  },
  "mr-8": {
    marginRight: 32,
  },
  "mb-8": {
    marginBottom: 32,
  },
  "ml-8": {
    marginLeft: 32,
  },
  "mt-10": {
    marginTop: 40,
  },
  "mr-10": {
    marginRight: 40,
  },
  "mb-10": {
    marginBottom: 40,
  },
  "ml-10": {
    marginLeft: 40,
  },
  "mt-12": {
    marginTop: 48,
  },
  "mr-12": {
    marginRight: 48,
  },
  "mb-12": {
    marginBottom: 48,
  },
  "ml-12": {
    marginLeft: 48,
  },
  "mt-16": {
    marginTop: 64,
  },
  "mr-16": {
    marginRight: 64,
  },
  "mb-16": {
    marginBottom: 64,
  },
  "ml-16": {
    marginLeft: 64,
  },
  "mt-20": {
    marginTop: 80,
  },
  "mr-20": {
    marginRight: 80,
  },
  "mb-20": {
    marginBottom: 80,
  },
  "ml-20": {
    marginLeft: 80,
  },
  "mt-24": {
    marginTop: 96,
  },
  "mr-24": {
    marginRight: 96,
  },
  "mb-24": {
    marginBottom: 96,
  },
  "ml-24": {
    marginLeft: 96,
  },
  "mt-32": {
    marginTop: 128,
  },
  "mr-32": {
    marginRight: 128,
  },
  "mb-32": {
    marginBottom: 128,
  },
  "ml-32": {
    marginLeft: 128,
  },
  "mt-40": {
    marginTop: 160,
  },
  "mr-40": {
    marginRight: 160,
  },
  "mb-40": {
    marginBottom: 160,
  },
  "ml-40": {
    marginLeft: 160,
  },
  "mt-48": {
    marginTop: 192,
  },
  "mr-48": {
    marginRight: 192,
  },
  "mb-48": {
    marginBottom: 192,
  },
  "ml-48": {
    marginLeft: 192,
  },
  "mt-56": {
    marginTop: 224,
  },
  "mr-56": {
    marginRight: 224,
  },
  "mb-56": {
    marginBottom: 224,
  },
  "ml-56": {
    marginLeft: 224,
  },
  "mt-64": {
    marginTop: 256,
  },
  "mr-64": {
    marginRight: 256,
  },
  "mb-64": {
    marginBottom: 256,
  },
  "ml-64": {
    marginLeft: 256,
  },
  "mt-auto": {
    marginTop: "auto",
  },
  "mr-auto": {
    marginRight: "auto",
  },
  "mb-auto": {
    marginBottom: "auto",
  },
  "ml-auto": {
    marginLeft: "auto",
  },
  "mt-px": {
    marginTop: 1,
  },
  "mr-px": {
    marginRight: 1,
  },
  "mb-px": {
    marginBottom: 1,
  },
  "ml-px": {
    marginLeft: 1,
  },
  "-mt-1": {
    marginTop: -4,
  },
  "-mr-1": {
    marginRight: -4,
  },
  "-mb-1": {
    marginBottom: -4,
  },
  "-ml-1": {
    marginLeft: -4,
  },
  "-mt-2": {
    marginTop: -8,
  },
  "-mr-2": {
    marginRight: -8,
  },
  "-mb-2": {
    marginBottom: -8,
  },
  "-ml-2": {
    marginLeft: -8,
  },
  "-mt-3": {
    marginTop: -12,
  },
  "-mr-3": {
    marginRight: -12,
  },
  "-mb-3": {
    marginBottom: -12,
  },
  "-ml-3": {
    marginLeft: -12,
  },
  "-mt-4": {
    marginTop: -16,
  },
  "-mr-4": {
    marginRight: -16,
  },
  "-mb-4": {
    marginBottom: -16,
  },
  "-ml-4": {
    marginLeft: -16,
  },
  "-mt-5": {
    marginTop: -20,
  },
  "-mr-5": {
    marginRight: -20,
  },
  "-mb-5": {
    marginBottom: -20,
  },
  "-ml-5": {
    marginLeft: -20,
  },
  "-mt-6": {
    marginTop: -24,
  },
  "-mr-6": {
    marginRight: -24,
  },
  "-mb-6": {
    marginBottom: -24,
  },
  "-ml-6": {
    marginLeft: -24,
  },
  "-mt-8": {
    marginTop: -32,
  },
  "-mr-8": {
    marginRight: -32,
  },
  "-mb-8": {
    marginBottom: -32,
  },
  "-ml-8": {
    marginLeft: -32,
  },
  "-mt-10": {
    marginTop: -40,
  },
  "-mr-10": {
    marginRight: -40,
  },
  "-mb-10": {
    marginBottom: -40,
  },
  "-ml-10": {
    marginLeft: -40,
  },
  "-mt-12": {
    marginTop: -48,
  },
  "-mr-12": {
    marginRight: -48,
  },
  "-mb-12": {
    marginBottom: -48,
  },
  "-ml-12": {
    marginLeft: -48,
  },
  "-mt-16": {
    marginTop: -64,
  },
  "-mr-16": {
    marginRight: -64,
  },
  "-mb-16": {
    marginBottom: -64,
  },
  "-ml-16": {
    marginLeft: -64,
  },
  "-mt-20": {
    marginTop: -80,
  },
  "-mr-20": {
    marginRight: -80,
  },
  "-mb-20": {
    marginBottom: -80,
  },
  "-ml-20": {
    marginLeft: -80,
  },
  "-mt-24": {
    marginTop: -96,
  },
  "-mr-24": {
    marginRight: -96,
  },
  "-mb-24": {
    marginBottom: -96,
  },
  "-ml-24": {
    marginLeft: -96,
  },
  "-mt-32": {
    marginTop: -128,
  },
  "-mr-32": {
    marginRight: -128,
  },
  "-mb-32": {
    marginBottom: -128,
  },
  "-ml-32": {
    marginLeft: -128,
  },
  "-mt-40": {
    marginTop: -160,
  },
  "-mr-40": {
    marginRight: -160,
  },
  "-mb-40": {
    marginBottom: -160,
  },
  "-ml-40": {
    marginLeft: -160,
  },
  "-mt-48": {
    marginTop: -192,
  },
  "-mr-48": {
    marginRight: -192,
  },
  "-mb-48": {
    marginBottom: -192,
  },
  "-ml-48": {
    marginLeft: -192,
  },
  "-mt-56": {
    marginTop: -224,
  },
  "-mr-56": {
    marginRight: -224,
  },
  "-mb-56": {
    marginBottom: -224,
  },
  "-ml-56": {
    marginLeft: -224,
  },
  "-mt-64": {
    marginTop: -256,
  },
  "-mr-64": {
    marginRight: -256,
  },
  "-mb-64": {
    marginBottom: -256,
  },
  "-ml-64": {
    marginLeft: -256,
  },
  "-mt-px": {
    marginTop: -1,
  },
  "-mr-px": {
    marginRight: -1,
  },
  "-mb-px": {
    marginBottom: -1,
  },
  "-ml-px": {
    marginLeft: -1,
  },
  "max-h-full": {
    maxHeight: "100%",
  },
  "max-h-screen": {
    maxHeight: "100vh",
  },
  "max-w-xs": {
    maxWidth: 320,
  },
  "max-w-sm": {
    maxWidth: 384,
  },
  "max-w-md": {
    maxWidth: 448,
  },
  "max-w-lg": {
    maxWidth: 512,
  },
  "max-w-xl": {
    maxWidth: 576,
  },
  "max-w-2xl": {
    maxWidth: 672,
  },
  "max-w-3xl": {
    maxWidth: 768,
  },
  "max-w-4xl": {
    maxWidth: 896,
  },
  "max-w-5xl": {
    maxWidth: 1024,
  },
  "max-w-6xl": {
    maxWidth: 1152,
  },
  "max-w-full": {
    maxWidth: "100%",
  },
  "min-h-0": {
    minHeight: 0,
  },
  "min-h-full": {
    minHeight: "100%",
  },
  "min-h-screen": {
    minHeight: "100vh",
  },
  "min-w-0": {
    minWidth: 0,
  },
  "min-w-full": {
    minWidth: "100%",
  },
  "opacity-0": {
    opacity: 0,
  },
  "opacity-25": {
    opacity: 0.25,
  },
  "opacity-50": {
    opacity: 0.5,
  },
  "opacity-75": {
    opacity: 0.75,
  },
  "opacity-100": {
    opacity: 1,
  },
  "p-0": {
    padding: 0,
  },
  "p-1": {
    padding: 4,
  },
  "p-2": {
    padding: 8,
  },
  "p-3": {
    padding: 12,
  },
  "p-4": {
    padding: 16,
  },
  "p-5": {
    padding: 20,
  },
  "p-6": {
    padding: 24,
  },
  "p-8": {
    padding: 32,
  },
  "p-10": {
    padding: 40,
  },
  "p-12": {
    padding: 48,
  },
  "p-16": {
    padding: 64,
  },
  "p-20": {
    padding: 80,
  },
  "p-24": {
    padding: 96,
  },
  "p-32": {
    padding: 128,
  },
  "p-40": {
    padding: 160,
  },
  "p-48": {
    padding: 192,
  },
  "p-56": {
    padding: 224,
  },
  "p-64": {
    padding: 256,
  },
  "p-px": {
    padding: 1,
  },
  "py-0": {
    paddingTop: 0,
    paddingBottom: 0,
  },
  "px-0": {
    paddingLeft: 0,
    paddingRight: 0,
  },
  "py-1": {
    paddingTop: 4,
    paddingBottom: 4,
  },
  "px-1": {
    paddingLeft: 4,
    paddingRight: 4,
  },
  "py-2": {
    paddingTop: 8,
    paddingBottom: 8,
  },
  "px-2": {
    paddingLeft: 8,
    paddingRight: 8,
  },
  "py-3": {
    paddingTop: 12,
    paddingBottom: 12,
  },
  "px-3": {
    paddingLeft: 12,
    paddingRight: 12,
  },
  "py-4": {
    paddingTop: 16,
    paddingBottom: 16,
  },
  "px-4": {
    paddingLeft: 16,
    paddingRight: 16,
  },
  "py-5": {
    paddingTop: 20,
    paddingBottom: 20,
  },
  "px-5": {
    paddingLeft: 20,
    paddingRight: 20,
  },
  "py-6": {
    paddingTop: 24,
    paddingBottom: 24,
  },
  "px-6": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "py-8": {
    paddingTop: 32,
    paddingBottom: 32,
  },
  "px-8": {
    paddingLeft: 32,
    paddingRight: 32,
  },
  "py-10": {
    paddingTop: 40,
    paddingBottom: 40,
  },
  "px-10": {
    paddingLeft: 40,
    paddingRight: 40,
  },
  "py-12": {
    paddingTop: 48,
    paddingBottom: 48,
  },
  "px-12": {
    paddingLeft: 48,
    paddingRight: 48,
  },
  "py-16": {
    paddingTop: 64,
    paddingBottom: 64,
  },
  "px-16": {
    paddingLeft: 64,
    paddingRight: 64,
  },
  "py-20": {
    paddingTop: 80,
    paddingBottom: 80,
  },
  "px-20": {
    paddingLeft: 80,
    paddingRight: 80,
  },
  "py-24": {
    paddingTop: 96,
    paddingBottom: 96,
  },
  "px-24": {
    paddingLeft: 96,
    paddingRight: 96,
  },
  "py-32": {
    paddingTop: 128,
    paddingBottom: 128,
  },
  "px-32": {
    paddingLeft: 128,
    paddingRight: 128,
  },
  "py-40": {
    paddingTop: 160,
    paddingBottom: 160,
  },
  "px-40": {
    paddingLeft: 160,
    paddingRight: 160,
  },
  "py-48": {
    paddingTop: 192,
    paddingBottom: 192,
  },
  "px-48": {
    paddingLeft: 192,
    paddingRight: 192,
  },
  "py-56": {
    paddingTop: 224,
    paddingBottom: 224,
  },
  "px-56": {
    paddingLeft: 224,
    paddingRight: 224,
  },
  "py-64": {
    paddingTop: 256,
    paddingBottom: 256,
  },
  "px-64": {
    paddingLeft: 256,
    paddingRight: 256,
  },
  "py-px": {
    paddingTop: 1,
    paddingBottom: 1,
  },
  "px-px": {
    paddingLeft: 1,
    paddingRight: 1,
  },
  "pt-0": {
    paddingTop: 0,
  },
  "pr-0": {
    paddingRight: 0,
  },
  "pb-0": {
    paddingBottom: 0,
  },
  "pl-0": {
    paddingLeft: 0,
  },
  "pt-1": {
    paddingTop: 4,
  },
  "pr-1": {
    paddingRight: 4,
  },
  "pb-1": {
    paddingBottom: 4,
  },
  "pl-1": {
    paddingLeft: 4,
  },
  "pt-2": {
    paddingTop: 8,
  },
  "pr-2": {
    paddingRight: 8,
  },
  "pb-2": {
    paddingBottom: 8,
  },
  "pl-2": {
    paddingLeft: 8,
  },
  "pt-3": {
    paddingTop: 12,
  },
  "pr-3": {
    paddingRight: 12,
  },
  "pb-3": {
    paddingBottom: 12,
  },
  "pl-3": {
    paddingLeft: 12,
  },
  "pt-4": {
    paddingTop: 16,
  },
  "pr-4": {
    paddingRight: 16,
  },
  "pb-4": {
    paddingBottom: 16,
  },
  "pl-4": {
    paddingLeft: 16,
  },
  "pt-5": {
    paddingTop: 20,
  },
  "pr-5": {
    paddingRight: 20,
  },
  "pb-5": {
    paddingBottom: 20,
  },
  "pl-5": {
    paddingLeft: 20,
  },
  "pt-6": {
    paddingTop: 24,
  },
  "pr-6": {
    paddingRight: 24,
  },
  "pb-6": {
    paddingBottom: 24,
  },
  "pl-6": {
    paddingLeft: 24,
  },
  "pt-8": {
    paddingTop: 32,
  },
  "pr-8": {
    paddingRight: 32,
  },
  "pb-8": {
    paddingBottom: 32,
  },
  "pl-8": {
    paddingLeft: 32,
  },
  "pt-10": {
    paddingTop: 40,
  },
  "pr-10": {
    paddingRight: 40,
  },
  "pb-10": {
    paddingBottom: 40,
  },
  "pl-10": {
    paddingLeft: 40,
  },
  "pt-12": {
    paddingTop: 48,
  },
  "pr-12": {
    paddingRight: 48,
  },
  "pb-12": {
    paddingBottom: 48,
  },
  "pl-12": {
    paddingLeft: 48,
  },
  "pt-16": {
    paddingTop: 64,
  },
  "pr-16": {
    paddingRight: 64,
  },
  "pb-16": {
    paddingBottom: 64,
  },
  "pl-16": {
    paddingLeft: 64,
  },
  "pt-20": {
    paddingTop: 80,
  },
  "pr-20": {
    paddingRight: 80,
  },
  "pb-20": {
    paddingBottom: 80,
  },
  "pl-20": {
    paddingLeft: 80,
  },
  "pt-24": {
    paddingTop: 96,
  },
  "pr-24": {
    paddingRight: 96,
  },
  "pb-24": {
    paddingBottom: 96,
  },
  "pl-24": {
    paddingLeft: 96,
  },
  "pt-32": {
    paddingTop: 128,
  },
  "pr-32": {
    paddingRight: 128,
  },
  "pb-32": {
    paddingBottom: 128,
  },
  "pl-32": {
    paddingLeft: 128,
  },
  "pt-40": {
    paddingTop: 160,
  },
  "pr-40": {
    paddingRight: 160,
  },
  "pb-40": {
    paddingBottom: 160,
  },
  "pl-40": {
    paddingLeft: 160,
  },
  "pt-48": {
    paddingTop: 192,
  },
  "pr-48": {
    paddingRight: 192,
  },
  "pb-48": {
    paddingBottom: 192,
  },
  "pl-48": {
    paddingLeft: 192,
  },
  "pt-56": {
    paddingTop: 224,
  },
  "pr-56": {
    paddingRight: 224,
  },
  "pb-56": {
    paddingBottom: 224,
  },
  "pl-56": {
    paddingLeft: 224,
  },
  "pt-64": {
    paddingTop: 256,
  },
  "pr-64": {
    paddingRight: 256,
  },
  "pb-64": {
    paddingBottom: 256,
  },
  "pl-64": {
    paddingLeft: 256,
  },
  "pt-px": {
    paddingTop: 1,
  },
  "pr-px": {
    paddingRight: 1,
  },
  "pb-px": {
    paddingBottom: 1,
  },
  "pl-px": {
    paddingLeft: 1,
  },
  "text-left": {
    textAlign: "left",
  },
  "text-center": {
    textAlign: "center",
  },
  "text-right": {
    textAlign: "right",
  },
  "text-justify": {
    textAlign: "justify",
  },
  "text-transparent": {
    color: "transparent",
  },
  "text-black": {
    color: "#000",
  },
  "text-white": {
    color: "#fff",
  },
  "text-gray-100": {
    color: "#f7fafc",
  },
  "text-gray-200": {
    color: "#edf2f7",
  },
  "text-gray-300": {
    color: "#e2e8f0",
  },
  "text-gray-400": {
    color: "#cbd5e0",
  },
  "text-gray-500": {
    color: "#a0aec0",
  },
  "text-gray-600": {
    color: "#718096",
  },
  "text-gray-700": {
    color: "#4a5568",
  },
  "text-gray-800": {
    color: "#2d3748",
  },
  "text-gray-900": {
    color: "#1a202c",
  },
  "text-red-100": {
    color: "#fff5f5",
  },
  "text-red-200": {
    color: "#fed7d7",
  },
  "text-red-300": {
    color: "#feb2b2",
  },
  "text-red-400": {
    color: "#fc8181",
  },
  "text-red-500": {
    color: "#f56565",
  },
  "text-red-600": {
    color: "#e53e3e",
  },
  "text-red-700": {
    color: "#c53030",
  },
  "text-red-800": {
    color: "#9b2c2c",
  },
  "text-red-900": {
    color: "#742a2a",
  },
  "text-orange-100": {
    color: "#fffaf0",
  },
  "text-orange-200": {
    color: "#feebc8",
  },
  "text-orange-300": {
    color: "#fbd38d",
  },
  "text-orange-400": {
    color: "#f6ad55",
  },
  "text-orange-500": {
    color: "#ed8936",
  },
  "text-orange-600": {
    color: "#dd6b20",
  },
  "text-orange-700": {
    color: "#c05621",
  },
  "text-orange-800": {
    color: "#9c4221",
  },
  "text-orange-900": {
    color: "#7b341e",
  },
  "text-yellow-100": {
    color: "#fffff0",
  },
  "text-yellow-200": {
    color: "#fefcbf",
  },
  "text-yellow-300": {
    color: "#faf089",
  },
  "text-yellow-400": {
    color: "#f6e05e",
  },
  "text-yellow-500": {
    color: "#ecc94b",
  },
  "text-yellow-600": {
    color: "#d69e2e",
  },
  "text-yellow-700": {
    color: "#b7791f",
  },
  "text-yellow-800": {
    color: "#975a16",
  },
  "text-yellow-900": {
    color: "#744210",
  },
  "text-green-100": {
    color: "#f0fff4",
  },
  "text-green-200": {
    color: "#c6f6d5",
  },
  "text-green-300": {
    color: "#9ae6b4",
  },
  "text-green-400": {
    color: "#68d391",
  },
  "text-green-500": {
    color: "#48bb78",
  },
  "text-green-600": {
    color: "#38a169",
  },
  "text-green-700": {
    color: "#2f855a",
  },
  "text-green-800": {
    color: "#276749",
  },
  "text-green-900": {
    color: "#22543d",
  },
  "text-teal-100": {
    color: "#e6fffa",
  },
  "text-teal-200": {
    color: "#b2f5ea",
  },
  "text-teal-300": {
    color: "#81e6d9",
  },
  "text-teal-400": {
    color: "#4fd1c5",
  },
  "text-teal-500": {
    color: "#38b2ac",
  },
  "text-teal-600": {
    color: "#319795",
  },
  "text-teal-700": {
    color: "#2c7a7b",
  },
  "text-teal-800": {
    color: "#285e61",
  },
  "text-teal-900": {
    color: "#234e52",
  },
  "text-blue-100": {
    color: "#ebf8ff",
  },
  "text-blue-200": {
    color: "#bee3f8",
  },
  "text-blue-300": {
    color: "#90cdf4",
  },
  "text-blue-400": {
    color: "#63b3ed",
  },
  "text-blue-500": {
    color: "#4299e1",
  },
  "text-blue-600": {
    color: "#3182ce",
  },
  "text-blue-700": {
    color: "#2b6cb0",
  },
  "text-blue-800": {
    color: "#2c5282",
  },
  "text-blue-900": {
    color: "#2a4365",
  },
  "text-indigo-100": {
    color: "#ebf4ff",
  },
  "text-indigo-200": {
    color: "#c3dafe",
  },
  "text-indigo-300": {
    color: "#a3bffa",
  },
  "text-indigo-400": {
    color: "#7f9cf5",
  },
  "text-indigo-500": {
    color: "#667eea",
  },
  "text-indigo-600": {
    color: "#5a67d8",
  },
  "text-indigo-700": {
    color: "#4c51bf",
  },
  "text-indigo-800": {
    color: "#434190",
  },
  "text-indigo-900": {
    color: "#3c366b",
  },
  "text-purple-100": {
    color: "#faf5ff",
  },
  "text-purple-200": {
    color: "#e9d8fd",
  },
  "text-purple-300": {
    color: "#d6bcfa",
  },
  "text-purple-400": {
    color: "#b794f4",
  },
  "text-purple-500": {
    color: "#9f7aea",
  },
  "text-purple-600": {
    color: "#805ad5",
  },
  "text-purple-700": {
    color: "#6b46c1",
  },
  "text-purple-800": {
    color: "#553c9a",
  },
  "text-purple-900": {
    color: "#44337a",
  },
  "text-pink-100": {
    color: "#fff5f7",
  },
  "text-pink-200": {
    color: "#fed7e2",
  },
  "text-pink-300": {
    color: "#fbb6ce",
  },
  "text-pink-400": {
    color: "#f687b3",
  },
  "text-pink-500": {
    color: "#ed64a6",
  },
  "text-pink-600": {
    color: "#d53f8c",
  },
  "text-pink-700": {
    color: "#b83280",
  },
  "text-pink-800": {
    color: "#97266d",
  },
  "text-pink-900": {
    color: "#702459",
  },
  "w-auto": {
    width: "auto",
  },
  "w-px": {
    width: 1,
  },
  "w-1/2": {
    width: "50%",
  },
  "w-1/3": {
    width: "33.333333%",
  },
  "w-2/3": {
    width: "66.666667%",
  },
  "w-1/4": {
    width: "25%",
  },
  "w-2/4": {
    width: "50%",
  },
  "w-3/4": {
    width: "75%",
  },
  "w-1/5": {
    width: "20%",
  },
  "w-2/5": {
    width: "40%",
  },
  "w-3/5": {
    width: "60%",
  },
  "w-4/5": {
    width: "80%",
  },
  "w-1/6": {
    width: "16.666667%",
  },
  "w-2/6": {
    width: "33.333333%",
  },
  "w-3/6": {
    width: "50%",
  },
  "w-4/6": {
    width: "66.666667%",
  },
  "w-5/6": {
    width: "83.333333%",
  },
  "w-1/12": {
    width: "8.333333%",
  },
  "w-2/12": {
    width: "16.666667%",
  },
  "w-3/12": {
    width: "25%",
  },
  "w-4/12": {
    width: "33.333333%",
  },
  "w-5/12": {
    width: "41.666667%",
  },
  "w-6/12": {
    width: "50%",
  },
  "w-7/12": {
    width: "58.333333%",
  },
  "w-8/12": {
    width: "66.666667%",
  },
  "w-9/12": {
    width: "75%",
  },
  "w-10/12": {
    width: "83.333333%",
  },
  "w-11/12": {
    width: "91.666667%",
  },
  "w-full": {
    width: "100%",
  },
  "w-screen": {
    width: "100vw",
  },
  "z-0": {
    zIndex: 0,
  },
  "z-10": {
    zIndex: 10,
  },
  "z-20": {
    zIndex: 20,
  },
  "z-30": {
    zIndex: 30,
  },
  "z-40": {
    zIndex: 40,
  },
  "z-50": {
    zIndex: 50,
  },
  "z-auto": {
    zIndex: "auto",
  },
};

const primary = {
  "bg-primary": {
    backgroundColor: "#DB3022",
  },
  "text-primary": {
    color: "#DB3022",
  },
  "border-primary": {
    borderColor: "#DB3022",
  },
  "bg-gray": {
    backgroundColor: "#F2F2F2",
  },
};

export { shadow, absoluteFull, css, primary };
