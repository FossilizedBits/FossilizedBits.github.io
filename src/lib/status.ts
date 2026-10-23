export const statusLabel = {
  planned: "Planned",
  "in-development": "In Development",
  testing: "Testing",
  released: "Released",
} as const;

// Progress band for each status, in percent. The home page log draws each app's curve inside its band.
export const statusRange = {
  planned: [0, 25],
  "in-development": [25, 50],
  testing: [50, 75],
  released: [75, 100],
} as const;

export function platformList(platforms: string[]): string {
  if (platforms.length <= 1) return platforms.join("");
  return `${platforms.slice(0, -1).join(", ")} and ${platforms.at(-1)}`;
}

export function storeUrl(appStoreId?: string) {
  return appStoreId ? `https://apps.apple.com/app/id${appStoreId}` : undefined;
}

export function formatDate(d: Date) {
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
