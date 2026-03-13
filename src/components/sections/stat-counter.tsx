"use client";

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useRef, useState} from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const props = useSpring({
    from: { number: 0 },
    to: { number: isVisible ? value : 0 },
    config: { duration: 2000 },
  });

  return (
    <div ref={ref} className="text-center">
      <animated.h3 className="text-5xl font-serif font-bold text-[#0F172A] mb-2">
        {props.number.to((n) => Math.floor(n) + suffix)}
      </animated.h3>
      <p className="text-slate-600 font-medium">{label}</p>
    </div>
  );
}