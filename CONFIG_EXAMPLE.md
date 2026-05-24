# Configuration Examples

## Basic Setup - Deye Inverter with 2 LVFU Batteries

This is the most common configuration with a Deye inverter monitoring PV panels, dual LVFU batteries, and grid/home consumption.

```yaml
type: custom:deye-inverter-flow-card
title: "My Solar System"
inverter_name: "Deye 5-10K"

# Solar and Grid
pv_total_power: sensor.deye_total_pv_power
grid_power: sensor.deye_grid_power
house_power: sensor.deye_load_power

# Primary LVFU Battery
battery_primary:
  name: "LVFU Battery 1"
  soc: sensor.battery_1_soc
  power: sensor.battery_1_power
  voltage: sensor.battery_1_voltage
  current: sensor.battery_1_current
  temp: sensor.battery_1_temp
  capacity_ah: 100

# Secondary LVFU Battery
battery_secondary:
  name: "LVFU Battery 2"
  soc: sensor.battery_2_soc
  power: sensor.battery_2_power
  voltage: sensor.battery_2_voltage
  current: sensor.battery_2_current
  temp: sensor.battery_2_temp
  capacity_ah: 100

# Optional: Custom background
background_image: "/local/images/my-solar-system.jpg"
background_opacity: 0.15
```

## Entity Names Reference

### Common Deye Inverter Entities
```
sensor.deye_total_pv_power       # Total solar generation
sensor.deye_pv1_power            # PV String 1 power
sensor.deye_pv2_power            # PV String 2 power
sensor.deye_pv3_power            # PV String 3 power
sensor.deye_pv4_power            # PV String 4 power
sensor.deye_grid_power           # Grid import/export (+ = import, - = export)
sensor.deye_grid_voltage         # Grid voltage
sensor.deye_load_power           # House consumption
sensor.deye_battery_power        # Battery power from inverter
sensor.deye_battery_soc          # Battery SOC from inverter
```

### LVFU Battery Entities (Multiple Variations)
Depending on your integration setup, battery entities may look like:

**Option A - Simple naming:**
```
sensor.battery_1_soc             # State of Charge
sensor.battery_1_power           # Current power
sensor.battery_1_voltage         # Pack voltage
sensor.battery_1_current         # Pack current
sensor.battery_1_temp            # BMS temperature
```

**Option B - Detailed naming:**
```
sensor.lvfu_battery_1_soc
sensor.lvfu_battery_1_power
sensor.lvfu_battery_1_voltage
sensor.lvfu_battery_1_current
sensor.lvfu_battery_1_bms_temp
```

**Option C - Can-Bus integration:**
```
sensor.bms_soc_1
sensor.bms_power_1
sensor.bms_voltage_1
sensor.bms_current_1
sensor.bms_temp_1
```

## Setup Steps

### Step 1: Integrate Deye Inverter
1. Go to Home Assistant Settings → Devices & Services → Create Automation
2. Add Deye inverter integration (check HACS for available integrations)
3. Verify these entities exist:
   - `sensor.deye_total_pv_power`
   - `sensor.deye_grid_power`
   - `sensor.deye_load_power`

### Step 2: Integrate LVFU Batteries
1. Connect your LVFU BMS via:
   - CAN-Bus to your Home Assistant setup, OR
   - MQTT integration if available, OR
   - Manual entity creation with REST sensors
2. Create/verify these entities for each battery:
   - `sensor.battery_X_soc` (0-100 %)
   - `sensor.battery_X_power` (Watts)
   - `sensor.battery_X_voltage` (Volts)
   - `sensor.battery_X_current` (Amps)
   - `sensor.battery_X_temp` (°C)

### Step 3: Install Deye Flow Card
1. Go to HACS → Frontend → Custom Repositories
2. Add: `https://github.com/matthan02-cell/matt-flow`
3. Download "deye-inverter-flow-card"
4. Hard refresh browser

### Step 4: Configure the Card
1. Add card to dashboard: `type: custom:deye-inverter-flow-card`
2. Use visual editor to fill in entity names
3. Optional: Add background image
4. Save and view live energy flow!

## Troubleshooting Entity Names

### Finding Your Entity Names
1. Go to Home Assistant Settings → Developer Tools → States
2. Search for your inverter or battery device
3. Note the exact entity names (case-sensitive!)

### Entity Not Found
- Verify entity exists in Developer Tools → States
- Check for typos in configuration
- Some integrations may name entities differently
- See your integration's documentation for entity naming

### Missing Values
- Check entity state value in Developer Tools
- Ensure sensor is not in "unavailable" state
- Restart Home Assistant integration if needed

## Background Image Setup

### Uploading Your Image
1. Create folder: `/config/www/images/`
2. Upload your image (JPG/PNG, <500KB recommended)
3. In card config, set: `background_image: "/local/images/my-image.jpg"`

### Recommended Dimensions
- Width: 1200px or more
- Height: 800px or more
- Aspect ratio: 16:9 or wider
- File size: < 500KB for optimal performance

### Adjusting Opacity
Set `background_opacity` between 0 and 1:
- `0` = fully transparent (invisible)
- `0.15` = very faint (default, good readability)
- `0.5` = moderate visibility
- `1` = fully opaque (image only)

## Customization

### Battery Capacity
Set correct capacity in Ah (Ampere-hours):
```yaml
battery_primary:
  capacity_ah: 100  # Adjust to your battery specs
```

### Custom Labels
Use the `name` field to customize display names:
```yaml
battery_primary:
  name: "Main Battery"  # Instead of "LVFU Battery 1"
  
battery_secondary:
  name: "Backup Battery"  # Instead of "LVFU Battery 2"
```

### Card Title
```yaml
title: "My Solar Monitoring"  # Custom card title
```

## Integration Examples

### With MQTT
If your batteries use MQTT:
```yaml
battery_primary:
  soc: sensor.mqtt_battery_1_soc
  power: sensor.mqtt_battery_1_power
  # ... etc
```

### With CAN-Bus
If using CAN-Bus integration:
```yaml
battery_primary:
  soc: sensor.can_battery_1_soc
  power: sensor.can_battery_1_power
  # ... etc
```

### With REST Sensors
If polling HTTP API:
```yaml
battery_primary:
  soc: sensor.battery_api_soc_1
  power: sensor.battery_api_power_1
  # ... etc
```

## Advanced: Custom Automations

Monitor your solar system and trigger automations based on card data:

```yaml
automation:
  - alias: Battery Low Alert
    trigger:
      platform: numeric_state
      entity_id: sensor.battery_1_soc
      below: 20
    action:
      service: notify.mobile_app
      data:
        message: "Battery SOC below 20%"

  - alias: Grid Export Alert
    trigger:
      platform: numeric_state
      entity_id: sensor.deye_grid_power
      above: 5000
    action:
      service: notify.mobile_app
      data:
        message: "Exporting high power to grid"
```

## Performance Tips

- Reduce `background_opacity` if page loads slowly
- Compress background image to < 200KB
- Update interval is automatic with Home Assistant
- No performance impact on Home Assistant instance

---

For more help, check the main README.md or GitHub issues!
