import { describe, expect, it } from "vitest";
import { getSiteImage } from "@/lib/siteImages";

describe("getSiteImage", () => {
  it("returns original and generated sources for known assets", () => {
    const image = getSiteImage("logo-farina.png");

    expect(image.src).toMatch(/logo-farina/);
    expect(image.webp).toMatch(/logo-farina/);
    expect(image.avif).toMatch(/logo-farina/);
  });

  it("throws for missing assets", () => {
    expect(() => getSiteImage("missing-image.jpg")).toThrow("Missing site image source");
  });
});
