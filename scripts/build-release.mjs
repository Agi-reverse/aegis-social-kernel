#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const srcDir = path.join(rootDir, "src");
const distDir = path.join(rootDir, "dist");

console.log("⚡ Building AegisSocial Kernel Release Package...\n");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 1. Verify manifest
const manifestPath = path.join(srcDir, "manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
const version = manifest.version;
const zipName = `aegis-social-kernel-v${version}.zip`;
const zipPath = path.join(distDir, zipName);

console.log(`📦 Manifest validated: ${manifest.name} (v${version})`);

// 2. Remove old zip if present
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

// 3. Create zip using zip CLI
try {
  execSync(`cd "${srcDir}" && zip -r "${zipPath}" . -x "*.DS_Store"`, { stdio: "inherit" });
  console.log(`\n✅ Release archive created: dist/${zipName}`);

  // 4. Compute SHA-256
  const fileBuffer = fs.readFileSync(zipPath);
  const hashSum = crypto.createHash("sha256");
  hashSum.update(fileBuffer);
  const hex = hashSum.digest("hex");
  console.log(`🔒 SHA-256 Checksum: ${hex}`);

  fs.writeFileSync(path.join(distDir, `${zipName}.sha256`), hex);
} catch (err) {
  console.error("❌ Failed to create zip archive:", err.message);
  process.exit(1);
}
