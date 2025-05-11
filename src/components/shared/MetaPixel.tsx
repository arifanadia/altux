"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq: any;
    _fbq?: any;
  }
}

export default function MetaPixel() {
  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
      return;
    }

    (function (f: any, b: Document, e: string, v: string) {
      if (f.fbq) return;

      const n: any = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };

      f.fbq = n;
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];

      const t = b.createElement(e) as HTMLScriptElement;
      t.async = true;
      t.src = v;

      const s = b.getElementsByTagName(e)[0];
      if (s && s.parentNode) {
        s.parentNode.insertBefore(t, s);
      }
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    window.fbq("init", "589776283519208");
    window.fbq("track", "PageView");
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=589776283519208&ev=PageView&noscript=1"
        alt="Meta Pixel"
      />
    </noscript>
  );
}
