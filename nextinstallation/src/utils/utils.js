// src/utils/utils.js
export const animationCreate = () => {
    if (typeof window === "undefined") return;
  
    import("wowjs")
      .then((mod) => {
        const WOWCtor =
          mod.WOW ||                 // named export
          (mod.default && mod.default.WOW) || // fallback ESM
          mod.default;               // fallback CommonJS
  
        if (typeof WOWCtor === "function") {
          const wow = new WOWCtor({ live: false });
          wow.init();
        } else {
          console.error("WOW constructor not found in wowjs module:", mod);
        }
      })
      .catch((err) => {
        console.error("Error loading wowjs:", err);
      });
  };
  