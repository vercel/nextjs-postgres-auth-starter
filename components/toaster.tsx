"use client";

import { useEffect, useState } from "react";
import { Toaster as ToasterClient } from "react-hot-toast";

export default function Toaster() {
  // workaround for react hydration error: https://nextjs.org/docs/messages/react-hydration-error
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSSR(false);
    }
  }, []);
  return isSSR ? null : <ToasterClient />;
}
