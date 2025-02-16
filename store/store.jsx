import { create } from 'zustand'

const useStore = create((set, get) => ({
    theme: 'amy',
    langauge: 'plaintext',
    style: 'default',
    borderRadius: 20,
    shadowType: 'none',
    shadowOpacity: 50,
    width: 700,
    height: 500,
    scale: 1,
    paddingX: 5,
    paddingY: 5,
    position: {
        x: 192 / 2, y: 194 / 2
    },
    fontSize: 16,
    lineHeight: 1,
    noise: 20,
    blur: 0,
    bgImage: { type: "image", value: "https://mir-s3-cdn-cf.behance.net/projects/404/d0bf76110130697.Y3JvcCw1NzUzLDQ1MDAsMTEyNSww.png" },
    frameDimension: { name: "default", aspect_ratio: "16:9", width: 1920, height: 1080 },
    setLineHeight: (lineHeight) => set({ lineHeight }),
    setTheme: (theme) => set({ theme }),
    setLangauge: (langauge) => set({ langauge }),
    setBlur: (blur) => set({ blur }),
    setNoise: (noise) => set({ noise }),
    setStyle: (style) => set({ style }),
    setBorderRadius: (borderRadius) => set({ borderRadius }),
    setShadowType: (shadowType) => set({ shadowType }),
    setShadowOpacity: (shadowOpacity) => set({ shadowOpacity }),
    setWidth: (width) => set({ width }),
    setHeight: (height) => set({ height }),
    setScale: (scale) => set({ scale }),
    setPaddingX: (paddingX) => set({ paddingX }),
    setPaddingY: (paddingY) => set({ paddingY }),
    setPosition: (position) => set({ position }),
    setFontSize: (fontSize) => set({ fontSize }),
    setFrameDimension: (frameDimension) => set({ frameDimension }),
    setBgImage: (bgImage) => set({ bgImage }),
}))

export default useStore 