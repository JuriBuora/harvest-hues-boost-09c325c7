import { Suspense, lazy, useEffect, useState } from "react";

const CookieConsentBanner = lazy(() => import("@/components/CookieConsentBanner"));
const Toaster = lazy(() => import("@/components/ui/toaster").then((module) => ({ default: module.Toaster })));
const CLIENT_CHROME_DELAY_MS = 3000;

const scheduleAfterFirstPaint = (callback: () => void) => {
  let firstFrame = 0;
  let secondFrame = 0;
  let timeoutHandle = 0;

  firstFrame = window.requestAnimationFrame(() => {
    secondFrame = window.requestAnimationFrame(() => {
      timeoutHandle = window.setTimeout(callback, CLIENT_CHROME_DELAY_MS);
    });
  });

  return () => {
    window.cancelAnimationFrame(firstFrame);
    window.cancelAnimationFrame(secondFrame);
    window.clearTimeout(timeoutHandle);
  };
};

const DeferredClientChrome = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    return scheduleAfterFirstPaint(() => setReady(true));
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <Toaster />
      <CookieConsentBanner />
    </Suspense>
  );
};

export default DeferredClientChrome;
