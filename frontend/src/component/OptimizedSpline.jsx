import { lazy, Suspense, useEffect, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

function OptimizedSpline({ scene, className = "", fallback = null, enabled = true }) {
    const [canRender, setCanRender] = useState(false);

    useEffect(() => {
        if (!enabled) {
            return;
        }

        const desktopQuery = window.matchMedia("(min-width: 768px)");
        const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (!desktopQuery.matches || reducedMotionQuery.matches) {
            return;
        }

        const loadSpline = () => setCanRender(true);
        const idleId = window.requestIdleCallback
            ? window.requestIdleCallback(loadSpline, { timeout: 1500 })
            : window.setTimeout(loadSpline, 600);

        return () => {
            if (window.cancelIdleCallback) {
                window.cancelIdleCallback(idleId);
            } else {
                window.clearTimeout(idleId);
            }
        };
    }, [enabled]);

    if (!enabled || !canRender) {
        return fallback;
    }

    return (
        <Suspense fallback={fallback}>
            <Spline scene={scene} className={className} />
        </Suspense>
    );
}

export default OptimizedSpline;
