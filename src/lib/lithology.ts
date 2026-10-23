// Mud-log style rock patterns, drawn as small repeating tiles (used as CSS masks so they take the theme's ink color).
type Tile = { w: number; h: number; shapes: string };

export const lithology: Record<string, { label: string; tile: Tile }> = {
  sandstone: {
    label: "Sandstone",
    tile: {
      w: 16, h: 16,
      shapes:
        '<circle cx="3" cy="4" r="1.1"/><circle cx="11" cy="2.5" r="1.1"/><circle cx="7" cy="10" r="1.1"/><circle cx="14" cy="13" r="1.1"/><circle cx="2" cy="14" r=".8"/>',
    },
  },
  limestone: {
    label: "Limestone",
    tile: {
      w: 20, h: 12,
      shapes:
        '<rect x="0" y="0" width="20" height="1"/><rect x="0" y="6" width="20" height="1"/><rect x="0" y="0" width="1" height="6"/><rect x="10" y="6" width="1" height="6"/>',
    },
  },
  shale: {
    label: "Shale",
    tile: {
      w: 20, h: 8,
      shapes: '<rect x="1" y="2" width="12" height="1.2"/><rect x="15" y="6" width="5" height="1.2"/><rect x="0" y="6" width="3" height="1.2"/>',
    },
  },
  granite: {
    label: "Granite",
    tile: {
      w: 24, h: 24,
      shapes:
        '<rect x="4.4" y="3" width="1.2" height="6"/><rect x="2" y="5.4" width="6" height="1.2"/>' +
        '<rect x="17.4" y="14" width="1.2" height="6"/><rect x="15" y="16.4" width="6" height="1.2"/>' +
        '<path d="M13 3.5l3 3.5 3-3.5" fill="none" stroke="#000" stroke-width="1.2"/>' +
        '<path d="M3 15.5l3 3.5 3-3.5" fill="none" stroke="#000" stroke-width="1.2"/>',
    },
  },
  salt: {
    label: "Salt",
    tile: {
      w: 12, h: 12,
      shapes: '<rect x="5.4" y="2.5" width="1.2" height="7"/><rect x="2.5" y="5.4" width="7" height="1.2"/>',
    },
  },
  dolomite: {
    label: "Dolomite",
    tile: {
      w: 20, h: 12,
      shapes:
        '<rect x="0" y="0" width="20" height="1"/><rect x="0" y="6" width="20" height="1"/><path d="M1 0h1.2l3 6H4z"/><path d="M11 6h1.2l3 6H14z"/>',
    },
  },
  conglomerate: {
    label: "Conglomerate",
    tile: {
      w: 22, h: 22,
      shapes:
        '<circle cx="6" cy="6" r="3.2" fill="none" stroke="#000" stroke-width="1.1"/><circle cx="16.5" cy="15.5" r="3.6" fill="none" stroke="#000" stroke-width="1.1"/><circle cx="16" cy="4" r="1"/><circle cx="5" cy="17" r="1"/>',
    },
  },
  coal: {
    label: "Coal",
    tile: { w: 8, h: 8, shapes: '<rect width="8" height="8"/>' },
  },
};

export const rocks = Object.keys(lithology) as [string, ...string[]];

// Each platform's rock. The order here is also the order of the layers when an app supports several.
export const platformRock = {
  iPhone: "sandstone",
  iPad: "limestone",
  Mac: "shale",
  "Apple Watch": "salt",
  "Apple TV": "dolomite",
  "Vision Pro": "conglomerate",
  "Self-Hosted": "granite",
} as const;

export type Platform = keyof typeof platformRock;
export const platforms = Object.keys(platformRock) as [Platform, ...Platform[]];

/** The rocks to draw for an app: its override if set, otherwise one per platform in a fixed order. */
export function rocksFor(app: { platforms: string[]; lithology?: string }): string[] {
  if (app.lithology) return [app.lithology];
  return platforms.filter((p) => app.platforms.includes(p)).map((p) => platformRock[p]);
}

/** CSS url() of the tile, used as a mask so the pattern takes the theme's ink color. */
export function tileUrl(kind: string): string {
  const t = lithology[kind].tile;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${t.w}" height="${t.h}">${t.shapes}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
