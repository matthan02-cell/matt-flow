# Installation Guide - Deye Inverter Flow Card (Master UI/UX Edition)

**Professional Home Assistant Lovelace Custom Card**

## 🚀 Quick Start (5 Minutes)

### Step 1: Add to HACS
1. Open **HACS** → **Frontend** → **Custom repositories**
2. Paste: `https://github.com/matthan02-cell/matt-flow`
3. Select **Lovelace** category
4. Click **Create**
5. Search **deye-inverter-flow-card** → **Explore & Download**

### Step 2: Restart Home Assistant
- Settings → System → **Restart**
- Wait 2-3 minutes

### Step 3: Add Background Images
1. Create folder: `/config/www/images/`
2. Upload:
   - `DayPhoto.jpg` (your daytime home photo)
   - `NightPhoto.jpg` (your nighttime home photo)

### Step 4: Add Card to Dashboard
1. Edit dashboard → **Add Card** → **Custom: Deye Inverter Flow Card**
2. Click **Edit card** (pencil icon)
3. Enter your entity names (from Developer Tools)
4. **Save**

**Done! Your solar monitoring dashboard is ready.** ☀️

---

## 📋 Prerequisites

### Required
- Home Assistant 2021.12 or newer
- Deye Inverter with Home Assistant integration
- LVFU Batteries (x2) with entities in Home Assistant
- HACS installed and configured

### Recommended
- Modern browser (Chrome 90+, Firefox 88+, Safari 14+)
- Custom background photos (1200x800px+, <500KB)
- Wired network for stable integrations

---

## 🔧 Detailed Installation

### Method 1: HACS Installation (Recommended)

#### A. Add Custom Repository

```
Home Assistant:
1. HACS → Frontend (left menu)
2. Click three dots (top right) → Custom repositories
3. Paste: https://github.com/matthan02-cell/matt-flow
4. Category: Lovelace
5. Click Create
```

#### B. Find and Install Card

```
1. HACS → Frontend
2. Search: "deye-inverter-flow-card"
3. Click card result
4. "Explore & Download" or "Download"
5. Confirm installation
```

#### C. Restart Home Assistant

```
Settings → System → Restart
Wait for restart to complete
```

#### D. Clear Browser Cache

```
Hard refresh your browser:
- Windows/Linux: Ctrl + Shift + R
- Mac: Cmd + Shift + R
- Mobile: Force refresh in address bar
```

#### E. Verify Installation

```
Settings → Dashboards → Resources
You should see: /frontend_latest/deye-inverter-flow-card.js
```

### Method 2: Manual Installation

#### A. Download Files

```bash
# Clone or download repository
git clone https://github.com/matthan02-cell/matt-flow.git
```

#### B. Copy JavaScript File

```
Source: deye-inverter-flow-card.js
Destination: /config/www/deye-inverter-flow-card.js

Create /www folder if it doesn't exist:
ssh into Home Assistant or use File Editor addon
```

#### C. Register in Home Assistant

```
Settings → Dashboards → Resources
→ Create resource
  URL: /local/deye-inverter-flow-card.js
  Type: JavaScript Module
→ Create
```

#### D. Hard Refresh Browser

```
Ctrl + Shift + R (or Cmd + Shift + R on Mac)
```

#### E. Add to Dashboard

```
Edit dashboard → Add Card
→ Custom: Deye Inverter Flow Card
```

---

## 📸 Background Images Setup

### Download or Create Your Images

You need two photos:
1. **DayPhoto.jpg** - Home during daytime (sunset/sunrise OK)
2. **NightPhoto.jpg** - Home at night (nighttime lighting)

**Tips:**
- Use your actual home for best results
- Include solar panels in day photo
- Show house lighting in night photo
- Clear sky (daytime) and stars (nighttime) look great

### Upload to Home Assistant

#### Via SSH/Terminal
```bash
# SSH into Home Assistant
ssh root@homeassistant

# Create folder
mkdir -p /config/www/images

# Copy files
cp DayPhoto.jpg /config/www/images/
cp NightPhoto.jpg /config/www/images/

# Verify
ls -lah /config/www/images/
```

#### Via File Editor (GUI)
1. Settings → Add-ons → File editor (if installed)
2. Navigate to `www/` folder
3. Create `images` folder
4. Upload both photos

#### Via SFTP Client (Windows/Mac)
1. Use WinSCP, Transmit, or FileZilla
2. Connect to Home Assistant SFTP
3. Navigate to `/config/www/`
4. Create `images` folder
5. Drag and drop photos

### Image Requirements

**Specifications:**
```
Format: JPEG or PNG
Size: 1200x800px minimum (1920x1080 recommended)
File size: <500KB each (compression recommended)
Aspect ratio: 16:9 or wider
Color profile: sRGB
```

**Optimization Tools:**
- TinyJPG: https://tinyjpg.com/
- ImageOptim: https://imageoptim.com/
- FileZilla: Built-in compression
- Squoosh: https://squoosh.app/

**How to Compress:**
1. Open TinyJPG.com
2. Drop images
3. Download compressed versions
4. Upload to `/config/www/images/`

---

## 🔍 Entity Setup

### Verify Deye Inverter Entities

1. **Settings → Developer Tools → States**
2. **Search** for "deye"
3. You should see:
   - `sensor.deye_total_pv_power`
   - `sensor.deye_grid_power`
   - `sensor.deye_load_power`
   - Optional: PV1, PV2, PV3, PV4 individual strings

**If not visible:**
- Restart Deye integration
- Check integration is enabled
- Verify Deye inverter credentials

### Verify LVFU Battery Entities

**Search for "battery"** in Developer Tools → States

**You should see for each battery:**
```
sensor.battery_1_soc        (0-100%)
sensor.battery_1_power      (Watts)
sensor.battery_1_voltage    (Volts)
sensor.battery_1_current    (Amps)
sensor.battery_1_temp       (Celsius)

sensor.battery_2_soc        (repeat for battery 2)
sensor.battery_2_power
sensor.battery_2_voltage
sensor.battery_2_current
sensor.battery_2_temp
```

**If not visible:**
- Install CAN-Bus/MQTT/REST integration
- Configure battery BMS connection
- Check Home Assistant logs for errors

### Entity Name Mapping

If your entities have different names, note the exact names:

**Example variations:**
```
Option A (Simple):
sensor.battery_1_soc

Option B (Detailed):
sensor.lvfu_battery_1_soc

Option C (Can-Bus):
sensor.bms_soc_1

Option D (MQTT):
sensor.battery/1/soc
```

Use the exact names in the card configuration.

---

## ⚙️ Card Configuration

### Visual Editor (Easiest)

1. **Add Card** → **Custom: Deye Inverter Flow Card**
2. Click **Edit card** (pencil icon)
3. Fill in:
   - **Card Title**: "Solar Energy Flow"
   - **Inverter Name**: "Deye 5000W" (or your model)
   - **Theme Mode**: "Auto" (recommended)
   - **Solar Entities**: Your PV entity names
   - **Grid Entity**: Your grid power entity
   - **House Entity**: Your consumption entity
   - **Battery 1 & 2**: All 5 fields per battery
4. **Save**

### YAML Configuration

Add to your dashboard YAML:

```yaml
type: custom:deye-inverter-flow-card
title: "Solar Energy Flow"
inverter_name: "Deye Inverter"
theme_mode: auto

# Solar & Grid
pv_total_power: sensor.deye_total_pv_power
grid_power: sensor.deye_grid_power
house_power: sensor.deye_load_power

# Battery 1
battery_primary:
  name: "Main Battery"
  soc: sensor.battery_1_soc
  power: sensor.battery_1_power
  voltage: sensor.battery_1_voltage
  current: sensor.battery_1_current
  temp: sensor.battery_1_temp
  capacity_ah: 100

# Battery 2
battery_secondary:
  name: "Backup Battery"
  soc: sensor.battery_2_soc
  power: sensor.battery_2_power
  voltage: sensor.battery_2_voltage
  current: sensor.battery_2_current
  temp: sensor.battery_2_temp
  capacity_ah: 100
```

### Theme Mode Options

```
auto   - Switches day/night based on time and solar generation
day    - Always show day theme (bright colors)
night  - Always show night theme (dark colors)
```

---

## ✅ Testing & Verification

### Step 1: Check Installation
```
Browser Console (F12) → No errors?
HACS → Shows "installed"?
Dashboard Resources → File listed?
```

### Step 2: Verify Entities
```
Developer Tools → States
Search for each entity name
All should show numbers, not "unavailable"
```

### Step 3: Check Background Images
```
F12 → Elements → Find <img> tags
Network tab → Check images load (status 200)?
File sizes <500KB?
```

### Step 4: Test Live Data
```
Edit an entity value in Developer Tools
Card should update within 1 second
All values should change appropriately
```

### Step 5: Test Theme Switching
```
Change theme_mode in card config
Day theme: Light purple gradients
Night theme: Dark navy gradients
Background images should switch
```

---

## 🐛 Troubleshooting

### Card Not Appearing

**Checklist:**
- [ ] Hard refresh browser (`Ctrl+Shift+R`)
- [ ] HACS shows "installed" (not "download")
- [ ] Resource registered in Settings → Dashboards
- [ ] No JavaScript errors in browser console (`F12`)
- [ ] Home Assistant restarted

**If still missing:**
1. Remove from dashboard
2. Clear browser cache (Settings → Clear browsing data)
3. Hard refresh
4. Re-add card

### Entities Show as 0 or Unknown

**Checklist:**
- [ ] Developer Tools → States shows entities
- [ ] Entity names match exactly (case-sensitive!)
- [ ] Entity values are numbers, not "unavailable"
- [ ] Integration enabled and running
- [ ] No recent Home Assistant updates broken integration

**If still not working:**
1. Check Home Assistant logs (Settings → Logs)
2. Restart the Deye/Battery integration
3. Verify credentials in integration settings
4. Re-check entity names character-by-character

### Images Not Showing

**Checklist:**
- [ ] Files in `/config/www/images/DayPhoto.jpg`
- [ ] Files in `/config/www/images/NightPhoto.jpg`
- [ ] Files are JPEG or PNG format
- [ ] File sizes reasonable (<500KB)
- [ ] Browser console shows no 404 errors

**If still not showing:**
1. Open DevTools (F12) → Network tab
2. Look for `DayPhoto.jpg` and `NightPhoto.jpg`
3. Check status (200 = success, 404 = not found)
4. Verify file names match exactly

### Slow Performance

**Checklist:**
- [ ] Images compressed to <500KB
- [ ] Close browser DevTools (they slow things down)
- [ ] No browser extensions interfering
- [ ] Home Assistant CPU usage normal
- [ ] Network connection stable

**Optimization tips:**
- Compress images more aggressively
- Reduce dashboard complexity
- Disable browser extensions
- Close other Home Assistant tabs

---

## 📞 Getting Help

### Documentation
- `README.md` - Overview and features
- `CONFIG_EXAMPLE.md` - Configuration examples
- `UI_UX_DESIGN.md` - Design philosophy and details

### Home Assistant Resources
- Forums: https://community.home-assistant.io/
- Discord: https://discord.gg/home-assistant
- Docs: https://www.home-assistant.io/

### Debugging Steps

**1. Check Logs**
```
Settings → System → Logs
Look for errors related to deye or battery
```

**2. Browser Console**
```
F12 → Console tab
Look for JavaScript errors
Note exact error message
```

**3. Verify Integration**
```
Settings → Devices & Services
Deye Inverter → enabled?
Battery integration → enabled?
```

**4. Entity Status**
```
Developer Tools → States
Click each entity
Check "Last updated" timestamp
Should update every few seconds
```

---

## 🎉 Success Checklist

You're done when:
- ✅ Card appears on dashboard
- ✅ All values update in real-time
- ✅ Background images show (day and night)
- ✅ Theme switches automatically
- ✅ Battery SOC bars animate smoothly
- ✅ Energy flow diagram displays all nodes

**Congratulations! Your solar monitoring dashboard is live! ☀️🔋**

---

## Next Steps

1. **Customize**: Adjust entity names and battery labels
2. **Explore**: Try different background images
3. **Monitor**: Watch your solar system in real-time
4. **Automate**: Create automations based on SOC/generation
5. **Share**: Show off your dashboard to friends!

---

## Additional Help

### Forum Post Template

If you need help, post on Home Assistant forums with:

```
**System:**
- Home Assistant version: [e.g., 2024.12]
- Deye integration: [version or link]
- Browser: [Chrome/Firefox/Safari]

**Issue:**
[Describe what's not working]

**Steps Taken:**
[What you've already tried]

**Entity Names:**
[Your actual entity names from Developer Tools]

**Logs/Errors:**
[Any error messages]

**Screenshots:**
[Attach screenshots if relevant]
```

This helps others assist you faster!

---

**Happy Solar Monitoring! ☀️🔋**

*v1.0 Installation Guide*
*Last Updated: 2026-05-31*
