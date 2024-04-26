

export const marketCap = [
  { title: "Micro" },
  { title: "Small" },
  { title: "Large" },
]

export const riskLevel = [
  { title: "Low Risk" },
  { title: "Mid Risk" },
  { title: "High Risk" },
]

//? **********************  FramerMotion-Variables  ****************************
export const sidebarShrink = {
  open: { width: "11rem", },
  close: { width: "4rem", transition: { damping: 15 } },
};
export const sidebarIcons = {
  openIcon: {
    y: ["2rem", "1rem"],
    transition: { type: "spring", damping: 15, duration: 0.5 },
  },
  closeIcon: {
    y: ["2rem", "4rem"],
    transition: { type: "spring", damping: 15, duration: 0.5 },
  },
};
export const textAvatar = {
  openIcon: {
    opacity: [0.25, 0.5, 0.75, 1],
    transition: { type: "spring", damping: 15, duration: 0.5 },
  },
  closeIcon: {
    opacity: [0.1, 0],
    transition: { type: "spring", damping: 15, duration: 0.5 },
  },
};