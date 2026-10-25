# 🚀 Omni Social Permission & Gatekeeper Unlocker (Instagram & X / Twitter)
> **Chrome Extension Manifest V3 | Version 2.0.0**  
> **Unified Architecture**: Overrides, unlocks, and guards **1,450+ Instagram Gatekeepers** AND **80+ X (Twitter) Feature Switches**, nullifies tracking telemetry (FalcoLogger & Scribe), unmasks blurred media, and enables 0-network data extraction.

---

## ⚡ Master Dual-Platform Capabilities

### 📸 1. Instagram Suite
| Module | Unlocked Impact |
|---|---|
| **541 Gatekeepers (`gkx`)** | Globally bypassed via `window.require('gkx')`. All evaluate to `true`. |
| **39 Quick Experiments (`qex`)** | AV1 high-res video, uncapped comments, 320kbps audio. |
| **50 JustKnobs (`justknobx`)** | All UI & layout restrictions removed. |
| **Restricted Filters Off** | Sensitive media blur filters removed, warning overlays suppressed. |
| **Omni Bulk Harvester** | 1-Click extraction of timeline posts, comments, buyer intent leads, and competitor chaining. |
| **Video Pixel Eye** | Live luminance, contrast, hook retention scoring, and direct lookaside MP4 resolution. |
| **Exploits Toolkit** | Zero-width invisible watermarking, BigInt shortcode conversion, CDN token expiry parsing, and `__RELAY_STORE__` RAM dump. |

### 𝕏 2. X (Twitter) Suite
| Module | Unlocked Impact |
|---|---|
| **80+ Internal Feature Switches** | `freedom_of_speech_not_reach_fetch_enabled`, `longform_notetweets_consumption_enabled`, `responsive_web_grok_analyze_button_fetch_trends_enabled`, and creator flags permanently forced to `{ value: true }`. |
| **Scribe Telemetry Null-Sink** | Intercepts and drops `/jot/client_event.json` and tracking beacons with dummy 200 responses, making bot-detection heuristics blind. |
| **Sensitive Media Blur Unmasker** | Continuous daemon automatically clears `filter: blur(...)` and clicks "View" on sensitive media warnings. |
| **Snowflake ID Timestamp Math** | Decodes `(id >> 22) + 1288834974657` to inject exact millisecond UTC creation badges on tweets in 0.0001ms. |
| **Heavy Ranker Algo Scorer** | Interactive calculator simulating Twitter's open-source weights (+54x reply, +75x author reply, +1x retweet, +0.5x like, -60% link penalty). |
| **Link-in-Reply Second-Post Splitter** | Auto-splits commercial tweets into a link-free hook and reply #1 to evade the -60% reach suppression penalty. |
| **TweepCred PageRank Simulator** | Evaluates follower/following ratio to verify if the account passes the 'For You' viral candidate threshold (>65). |
| **0-Network Active Tab Tweet Dump** | Instant dump of rendered timeline tweets, metrics, and media to JSON without issuing an HTTP request. |

---

## 📦 How to Install / Reload in Google Chrome

1. Open **Google Chrome**.
2. In the URL bar, go to:
   ```
   chrome://extensions/
   ```
3. Enable **Developer mode** (top-right toggle).
4. If already installed:
   - Click the **🔄 Reload** icon on the **Omni Social Permission & Gatekeeper Unlocker** card.
5. If installing fresh:
   - Click **Load unpacked** (top-left).
   - Select either path:
     - `/Users/apple/Projects/instagram-permission-guard-extension`
     - OR `/Users/apple/Projects/instgram/instagram-permission-guard-extension`

---

## 🔍 How to Verify Live Operation

### On Instagram:
1. Navigate to [https://www.instagram.com/](https://www.instagram.com/).
2. Click the extension icon. The popup automatically displays the **📸 Instagram** panel.
3. Live status shows: **ACTIVE (1,728+ Switches & Knobs Unlocked)**.

### On X (Twitter):
1. Navigate to [https://x.com/home](https://x.com/home).
2. Click the extension icon. The popup automatically switches to the **𝕏 X (Twitter)** panel.
3. Live status shows: **ACTIVE (80+ Feature Switches Forced TRUE)**.
4. Console (`Cmd + Option + I`) will show:
   ```
   [𝕏 Permission Guard] 80+ Feature Switches Locked to TRUE & Scribe Null-Sink Active.
   ```
