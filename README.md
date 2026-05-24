# Deye Inverter Flow Card

A fully custom Home Assistant Lovelace card that renders a live, animated energy-flow diagram for a **Deye Solar Inverter** system with **LVFU Battery Storage**.

This card provides real-time visualization of:
- ☀️ Solar panel generation (PV1, PV2, PV3, PV4)
- 🔋 Dual LVFU battery monitoring (SOC, power, voltage, temperature)
- 🏠 Home consumption
- ⚡ Grid import/export
- 🎨 Custom background image support

## Features

- **Animated Energy Flow** - Watch power flow in real-time between solar, batteries, grid, and home
- **Dual Battery Support** - Monitor two LVFU batteries independently with separate metrics
- **Live Monitoring** - Real-time power, voltage, current, and temperature data
- **Custom Background** - Use your own images as the card background
- **No Dependencies** - Single JavaScript file, runs entirely within Home Assistant
- **Visual Editor** - Easy configuration through Home Assistant's built-in UI
- **Responsive Design** - Works on desktop, tablets, and mobile devices

## Installation

### Method 1: HACS (Recommended)

1. Open **HACS** → **Frontend** → **Custom repositories**
2. Add this repository: `https://github.com/matthan02-cell/matt-flow`
3. Search for **deye-inverter-flow-card** and click **Explore & Download**
4. The card will be automatically registered
5. **Hard refresh** your browser (`Ctrl + Shift + R`)
6. Add the card to your dashboard: `type: custom:deye-inverter-flow-card`

### Method 2: Manual Installation

1. Clone or download this repository
2. Copy `deye-inverter-flow-card.js` to `/config/www/`
3. In Home Assistant, go to **Settings** → **Dashboards** → **Resources**
4. Click **Create resource** and add:
   - **URL**: `/local/deye-inverter-flow-card.js`
   - **Type**: `JavaScript Module`
5. Hard refresh your browser
6. Add the card to your dashboard with type: `custom:deye-inverter-flow-card`

## Configuration

### Basic Setup

The card uses Home Assistant's visual editor for configuration. No YAML knowledge required!

#### Required Entities

**Inverter:**
- Inverter name/display name
- Total PV power entity
- Grid import/export entity
- House consumption entity

**Battery (Primary & Secondary):**
- State of Charge (%)
- Current power (W)
- Voltage (V)
- Current (A)
- Cell temperatures
- Capacity (Ah or Wh)

### Optional Entities

- Extra PV strings (PV3, PV4)
- System temperature sensors
- Custom labels for tiles

### Custom Background Image

To use your custom image as the background:

1. Upload your image to `/config/www/images/`
2. In the card configuration, set the background image URL to: `/local/images/your-image.jpg`
3. Adjust opacity if needed for better text readability

**Recommended image specifications:**
- Format: JPG or PNG
- Dimensions: 1200x800 px or wider
- File size: < 500 KB for optimal performance

## Configuration Example

```yaml
type: custom:deye-inverter-flow-card
title: "Solar Energy Flow"
inverter_name: "Deye Inverter"
pv_total_power: sensor.deye_total_pv_power
grid_power: sensor.deye_grid_power
house_power: sensor.deye_house_consumption
battery_primary:
  soc: sensor.battery_1_soc
  power: sensor.battery_1_power
  voltage: sensor.battery_1_voltage
  current: sensor.battery_1_current
  temp: sensor.battery_1_temp
  capacity_ah: 100
battery_secondary:
  soc: sensor.battery_2_soc
  power: sensor.battery_2_power
  voltage: sensor.battery_2_voltage
  current: sensor.battery_2_current
  temp: sensor.battery_2_temp
  capacity_ah: 100
background_image: "/local/images/my-system.jpg"
background_opacity: 0.15
```

## Supported Entities

### Deye Inverter
Most Deye inverters expose the following entities via Home Assistant:
- `sensor.deye_*_total_pv_power` - Total solar generation
- `sensor.deye_*_grid_power` - Grid import/export (positive = import, negative = export)
- `sensor.deye_*_load_power` - Home consumption
- `sensor.deye_*_battery_power` - Battery power flow

### LVFU Batteries
- `sensor.lvfu_battery_*_soc` - State of charge (%)
- `sensor.lvfu_battery_*_power` - Power (W)
- `sensor.lvfu_battery_*_voltage` - Voltage (V)
- `sensor.lvfu_battery_*_current` - Current (A)
- `sensor.lvfu_battery_*_cell_voltage_01` through `15` - Individual cell voltages
- `sensor.lvfu_battery_*_temperature` - BMS temperature

## Troubleshooting

### Card doesn't appear
- Check the browser console for errors (`F12` → **Console** tab)
- Verify the file path is correct in Resources
- Hard refresh (`Ctrl + Shift + R`)

### Missing data
- Ensure all required entities exist in Home Assistant
- Check entity names match your system exactly
- Some integrations may require additional setup

### Image not showing
- Verify the image path is accessible at `/local/images/`
- Check file size and format
- Use the browser DevTools to see if the image loads

## Architecture

The card is built with:
- **Pure JavaScript** (ES6) - No frameworks or build tools
- **SVG** - Animated flow diagrams
- **HTML Canvas** - Future sun position visualization
- **Home Assistant API** - Real-time entity updates

The single `deye-inverter-flow-card.js` file contains:
1. **DeyeInverterFlowCardEditor** - Configuration interface
2. **DeyeInverterFlowCard** - Display and animation engine

## Browser Compatibility

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - See LICENSE file

## Credits

Based on the excellent [k-flow-card](https://github.com/thekhan1122/k-flow-card) project by thekhan1122, adapted for Deye Inverter and LVFU battery systems.

## Support

For issues, feature requests, or questions:
1. Check existing issues on GitHub
2. Provide your Home Assistant version, integration versions, and entity names when reporting
3. Include browser console errors if relevant

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Test thoroughly with your setup
4. Submit a pull request with a clear description

---

**Happy solar monitoring! ☀️🔋**
