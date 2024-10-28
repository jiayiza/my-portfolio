export function Light1() {
  return (
    <div className="fpxu4o transform-none">
      <div
        className="yp8dcl"
        style={{ transform: "skewX(45deg) translateZ(0px)" }}
      ></div>
      <div
        className="tkmzk9"
        style={{ transform: "skewX(45deg) translateZ(0px)" }}
      ></div>
    </div>
  );
}

export function Light2() {
  return (
    <div
      style={{
        background:
          "radial-gradient(100% 100% at 0% 0%,rgb(46, 46, 46) 0%,rgb(0, 0, 0) 100%)",
        mask: "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 88%, rgba(0, 0, 0, 0) 100%)",
        height: "100%",
        left: 0,
        overflow: "hidden",
        pointerEvents: "none",
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: -1,
        userSelect: "none",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 84%, rgba(255, 255, 255, 0) 100%)",
          mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
          opacity: 0.05,
          transform: "skewX(45deg) translateZ(0px)",
          width: 600,
          height: 1269,
          left: "calc(33% - 270px)",
          top: -209,
          overflow: "hidden",
        }}
      ></div>

      <div
        style={{
          background:
            "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 84%, rgba(255, 255, 255, 0) 100%)",
          mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 18%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0) 48%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
          opacity: 0.05,
          transform: "skewX(45deg) translateZ(0px)",
          left: "calc(50% - 340px)",
          height: 1269,
          width: 648,
          position: "absolute",
          overflow: "hidden",
          top: -209,
        }}
      ></div>
    </div>
  );
}
