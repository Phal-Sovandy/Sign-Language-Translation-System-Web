export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,107,255,0.08),transparent_55%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,12,12,0.4),rgba(12,12,12,0.9))]"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(47,107,255,0.06)_1px,transparent_1px)] bg-[length:120px_120px] animate-grid-move"></div>
      </div>
      <div className="absolute -left-1/4 top-10 h-[60vh] w-[80vw] rounded-full bg-linear-to-r from-[#2F6BFF10] via-[#00C2FF10] to-[#2F6BFF0C] blur-[180px] animate-float-soft"></div>
      <div
        className="absolute right-[-10%] bottom-[-20%] h-[50vh] w-[50vw] rounded-full bg-linear-to-r from-[#2F6BFF0E] to-[#00C2FF0E] blur-[200px] animate-float-soft"
        style={{ animationDelay: "2.5s" }}
      ></div>
    </div>
  );
}
