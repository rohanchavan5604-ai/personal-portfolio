// Fixed, low-opacity backdrop: grid, slow gradient blobs and a few dots. Pure CSS, no JS cost.
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <span className="blob b1" /><span className="blob b2" /><span className="blob b3" /><span className="blob b4" />
      {Array.from({ length: 14 }, (_, i) => <i key={i} className="dotp" style={{ left: `${(i * 37 + 8) % 100}%`, top: `${(i * 53 + 12) % 100}%`, animationDelay: `${i * 0.7}s` }} />)}
    </div>
  );
}
