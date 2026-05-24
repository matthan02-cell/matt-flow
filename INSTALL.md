# Installation Guide

## Quick Start (3 Steps)

### Step 1: Add to HACS
1. Open **Home Assistant** → **HACS**
2. Go to **Frontend** → **Custom repositories**
3. Paste: `https://github.com/matthan02-cell/matt-flow`
4. Select **Lovelace** as category
5. Click **Create**
6. Search for **deye-inverter-flow-card** → Download

### Step 2: Restart Home Assistant
1. Settings → System → Restart
2. Wait for restart to complete

### Step 3: Add Card to Dashboard
1. Open any dashboard in edit mode
2. Click **+ Add Card** → **Custom: Deye Inverter Flow Card**
3. Configure with your entity names
4. Save and enjoy!

---

## Manual Installation (Alternative)

### If HACS is not available:

1. **Download the file:**
   ```bash
   # Clone the repository
   git clone https://github.com/matthan02-cell/matt-flow.git
   cd matt-flow
   ```

2. **Copy to Home Assistant:**
   - Copy `deye-inverter-flow-card.js` to `/config/www/`
   - (Create `/www` folder if it doesn't exist)

3. **Register in Home Assistant:**
   - Settings → Dashboards → Resources
   - Click **Create resource**
   - URL: `/local/deye-inverter-flow-card.js`
   - Type: `JavaScript Module`
   - Click **Create**

4. **Hard refresh browser:**
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

5. **Add card to dashboard:**
   - Edit dashboard → Add Card
   - Select **Custom: Deye Inverter Flow Card**

---

## Prerequisites

### Required:
- **Home Assistant** 2021.12+
- **Deye Inverter** with integration
- **LVFU Batteries** (2 units minimum)
- Entities for solar, grid, and battery data

### Optional:
- Custom background image

---

## Entity Setup

### 1. Deye Inverter Integration

**If not already installed:**
1. Settings → Devices & Services → Create Automation
2. Search for Deye Inverter integration
3. Install and configure with your inverter details

**Verify these entities exist:**
```
sensor.deye_total_pv_power
sensor.deye_grid_power
sensor.deye_load_power
```

Check in: Settings → Devices & Services → Entities (search "deye")

### 2. LVFU Battery Integration

**Option A: CAN-Bus (Recommended)**
1. Set up CAN-Bus adapter to your Home Assistant system
2. Connect battery BMS via CAN
3. Install CAN-Bus Home Assistant integration
4. Entities will appear automatically

**Option B: MQTT**
1. Ensure batteries publish MQTT data
2. Configure MQTT integration in Home Assistant
3. Create sensors from MQTT topics

**Option C: REST Sensors**
1. If batteries expose HTTP API:
   ```yaml
   # In configuration.yaml
   sensor:
     - platform: rest
       resource: http://battery-ip:port/api/soc
       name: battery_1_soc
       # Configure other endpoints similarly
   ```

**Verify these entities exist for each battery:**
```
sensor.battery_1_soc        # State of Charge (0-100%)
sensor.battery_1_power      # Power in Watts
sensor.battery_1_voltage    # Voltage in Volts
sensor.battery_1_current    # Current in Amps
sensor.battery_1_temp       # Temperature in °C

sensor.battery_2_soc        # Repeat for second battery
sensor.battery_2_power
sensor.battery_2_voltage
sensor.battery_2_current
sensor.battery_2_temp
```

---

## Configuration

### Visual Editor (Recommended)

1. Add card: `type: custom:deye-inverter-flow-card`
2. Click **Edit card**
3. Fill in your entity names from Developer Tools
4. Optionally add background image
5. Click **Save**

### YAML Configuration

Alternative YAML configuration:

```yaml
type: custom:deye-inverter-flow-card
title: "Solar Energy Flow"

# Inverter and Grid
pv_total_power: sensor.deye_total_pv_power
grid_power: sensor.deye_grid_power
house_power: sensor.deye_load_power

# Primary Battery
battery_primary:
  soc: sensor.battery_1_soc
  power: sensor.battery_1_power
  voltage: sensor.battery_1_voltage
  current: sensor.battery_1_current
  temp: sensor.battery_1_temp
  capacity_ah: 100

# Secondary Battery
battery_secondary:
  soc: sensor.battery_2_soc
  power: sensor.battery_2_power
  voltage: sensor.battery_2_voltage
  current: sensor.battery_2_current
  temp: sensor.battery_2_temp
  capacity_ah: 100

# Optional appearance settings
background_image: "/local/images/my-system.jpg"
background_opacity: 0.15
```

---

## Finding Your Entity Names

### Method 1: Developer Tools (Easiest)

1. Home Assistant → Settings → Developer Tools
2. Go to **States** tab
3. Search for your device name (e.g., "deye" or "battery")
4. Note exact entity names (case-sensitive!)

Example:
```
sensor.deye_total_pv_power ← This is your entity name
sensor.battery_1_soc
```

### Method 2: Services Tab

1. Developer Tools → **Services** tab
2. Call `recorder.get_statistics` to list all entities
3. Search for your devices

---

## Testing Your Setup

### Before Adding Card:

1. **Verify all entities exist:**
   - Settings → Developer Tools → States
   - Search for each entity name
   - Ensure values are numbers (not "unavailable")

2. **Check entity values:**
   - Click each entity to see current value
   - Confirm they're updating (timestamps change)

3. **Sample entities to verify:**
   ```
   sensor.deye_total_pv_power = 2500 (Watts)
   sensor.deye_grid_power = -1200 (Watts, negative = export)
   sensor.deye_load_power = 1300 (Watts)
   sensor.battery_1_soc = 85 (%)
   sensor.battery_1_power = 500 (Watts)
   ```

### After Adding Card:

1. Refresh dashboard
2. Verify values appear in card
3. Check data updates in real-time
4. Confirm background image displays (if configured)

---

## Troubleshooting

### Card doesn't appear
- [ ] Hard refresh browser (`Ctrl+Shift+R`)
- [ ] Check HACS shows "Installed" status
- [ ] Restart Home Assistant
- [ ] Check browser console for errors (F12)

### Entities show as "Unknown"
- [ ] Verify entity names in Developer Tools
- [ ] Check for typos (case-sensitive!)
- [ ] Restart Home Assistant integration
- [ ] Ensure integration is installed

### Values not updating
- [ ] Check entity state in Developer Tools
- [ ] Verify integration is enabled
- [ ] Check Home Assistant logs for errors
- [ ] Restart the specific integration

### Background image not showing
- [ ] Verify file in `/config/www/images/` exists
- [ ] Check file path: `/local/images/filename.jpg`
- [ ] Use supported format: JPG or PNG
- [ ] Check browser console for 404 errors

### Performance issues
- [ ] Reduce background image size (< 500KB)
- [ ] Lower opacity setting (0.10 instead of 0.15)
- [ ] Disable browser extensions
- [ ] Check Home Assistant system resources

---

## Getting Help

1. **Check Configuration Examples:**
   - See `CONFIG_EXAMPLE.md` in repository

2. **Check Home Assistant Logs:**
   - Settings → System → Logs

3. **GitHub Issues:**
   - Visit: https://github.com/matthan02-cell/matt-flow/issues

4. **Community Support:**
   - Home Assistant Forums
   - Home Assistant Discord

---

## Next Steps

1. ✅ Install the card (this guide)
2. 📊 Configure with your entities
3. 🎨 Optional: Add custom background image
4. 🏠 Add to your dashboard
5. ⚡ Monitor your solar system!

**Enjoy your solar monitoring! ☀️🔋**
