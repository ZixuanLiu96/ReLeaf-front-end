import { useEffect, useRef, useState } from "react";

export default function LazyBackground({
  src,
  height,
  children,
  onMouseEnter,
  onMouseLeave,
}) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // 加载一次即可
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: visible ? `url(${src})` : "none",
      }}
      className="w-full break-inside-avoid rounded-xl overflow-hidden shadow-md hover:scale-[1.03] transition-transform duration-300 cursor-pointer flex items-end"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
