import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type AudioApi = {
  enabled: boolean;
  toggle: () => void;
  sparkle: () => void;
  resonance: () => void;
};

const AudioCtx = createContext<AudioApi | null>(null);

export function useMagicAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useMagicAudio must be used inside <AudioProvider>");
  return ctx;
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const acRef = useRef<AudioContext | null>(null);

  // Read persisted preference on client only (avoids hydration mismatch)
  useEffect(() => {
    try {
      const v = localStorage.getItem("aeternum-audio");
      // Włącz domyślnie, chyba że użytkownik celowo wyłączył ("off")
      if (v !== "off") setEnabled(true);
    } catch {
      setEnabled(true);
    }
  }, []);

  const ensureCtx = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!acRef.current) {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      acRef.current = new AC();
    }
    if (acRef.current.state === "suspended") {
      void acRef.current.resume();
    }
    return acRef.current;
  }, []);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("aeternum-audio", next ? "on" : "off");
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const sparkle = useCallback(() => {
    if (!enabled) return;
    const ac = ensureCtx();
    if (!ac) return;
    const now = ac.currentTime;
    const gain = ac.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.16, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
    gain.connect(ac.destination);
    [1760, 2637, 3520].forEach((freq, i) => {
      const o = ac.createOscillator();
      o.type = "sine";
      o.frequency.setValueAtTime(freq, now);
      o.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.6);
      const g = ac.createGain();
      g.gain.value = 0.5 - i * 0.15;
      o.connect(g).connect(gain);
      o.start(now + i * 0.04);
      o.stop(now + 0.75);
    });
  }, [enabled, ensureCtx]);

  const resonance = useCallback(() => {
    if (!enabled) return;
    const ac = ensureCtx();
    if (!ac) return;
    const now = ac.currentTime;
    const master = ac.createGain();
    master.gain.setValueAtTime(0, now);
    master.gain.linearRampToValueAtTime(0.5, now + 0.4);
    master.gain.exponentialRampToValueAtTime(0.001, now + 3.2);
    master.connect(ac.destination);

    const filter = ac.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(180, now);
    filter.frequency.linearRampToValueAtTime(500, now + 2.5);
    filter.connect(master);

    [41, 55, 82.4].forEach((f, i) => {
      const o = ac.createOscillator();
      o.type = i === 2 ? "triangle" : "sine";
      o.frequency.setValueAtTime(f, now);
      const g = ac.createGain();
      g.gain.value = i === 0 ? 0.9 : 0.5;
      o.connect(g).connect(filter);
      o.start(now);
      o.stop(now + 3.3);
    });
  }, [enabled, ensureCtx]);

  return (
    <AudioCtx.Provider value={{ enabled, toggle, sparkle, resonance }}>
      {children}
      {enabled && (
        <iframe
          width="1"
          height="1"
          src="https://www.youtube.com/embed/fAfD-I5Z6Wc?autoplay=1&list=RDfAfD-I5Z6Wc&start=1918&loop=1"
          title="Background Music"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ position: "absolute", top: "-9999px", left: "-9999px", opacity: 0 }}
        />
      )}
    </AudioCtx.Provider>
  );
}
