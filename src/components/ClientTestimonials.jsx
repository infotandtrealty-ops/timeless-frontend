import React, { useEffect, useRef, useState } from "react";

const ClientTestimonials = () => {
  const marqueeRef = useRef(null);
  const sectionRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);
  const [loadInstagram, setLoadInstagram] = useState(false);

  // Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadInstagram(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Load Instagram script only when needed
  useEffect(() => {
    if (loadInstagram) {
      if (!window.instgrm) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
        window.instgrm.Embeds.process();
      }
    }
  }, [loadInstagram]);

  // Marquee scroll logic
  useEffect(() => {
    let scrollAmount = 0;
    const speed = 0.4;
    let requestRef;

    const scroll = () => {
      if (!marqueeRef.current) return;

      if (!isPaused) {
        scrollAmount += speed;
        marqueeRef.current.scrollLeft = scrollAmount;

        if (
          marqueeRef.current.scrollLeft >=
          marqueeRef.current.scrollWidth / 2
        ) {
          scrollAmount = 0;
        }
      } else {
        scrollAmount = marqueeRef.current.scrollLeft;
      }

      requestRef = requestAnimationFrame(scroll);
    };

    requestRef = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(requestRef);
  }, [isPaused]);

  const testimonials = [
    "https://www.instagram.com/reel/DTkuXF1jAcj/",
    "https://www.instagram.com/reel/DRttlCokRDN/",
    "https://www.instagram.com/reel/DLUD8TOxZFE/",
    "https://www.instagram.com/reel/DS4KtLrCB3P/",
  ];

  const loopData = [...testimonials, ...testimonials];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span style={{ color: "#D4AF37" }}>Client Testimonials</span>
          </h2>

          <p className="text-black max-w-2xl mx-auto">
            Real experiences. Real transformations at{" "}
            <span style={{ color: "#D4AF37" }} className="font-semibold">
              Timeless Aesthetics
            </span>
          </p>
        </div>

        {/* Infinite marquee */}
        <div
          ref={marqueeRef}
          className="flex gap-10 overflow-x-hidden whitespace-nowrap py-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {loadInstagram &&
            loopData.map((url, index) => (
              <div
                key={index}
                className="min-w-[340px] md:min-w-[420px] bg-white rounded-2xl shadow-xl p-4 transition-transform duration-300 hover:scale-105"
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    background: "#fff",
                    border: 0,
                    borderRadius: "14px",
                    margin: "0 auto",
                    width: "100%",
                  }}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;