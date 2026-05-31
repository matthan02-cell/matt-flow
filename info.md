# Deye Inverter Flow Card

A professional Home Assistant Lovelace custom card for visualizing real-time energy flow with Deye Solar Inverter and LVFU Battery Storage.

## Features

- 🎨 Glassmorphism design with custom day/night backgrounds
- ⚡ Real-time energy flow visualization (Solar → Batteries → Home → Grid)
- 🔋 Dual LVFU battery monitoring with SOC progress bars
- 🌞 Intelligent auto day/night theme switching
- 📱 Fully responsive design (desktop, tablet, mobile)
- 🚀 Zero dependencies, pure JavaScript
- 💻 Visual configuration editor (no YAML required)

## Installation

1. Add to HACS: `https://github.com/matthan02-cell/matt-flow`
2. Search for "Deye Inverter Flow Card"
3. Download and install
4. Add to your dashboard: `type: custom:deye-inverter-flow-card`
5. Use visual editor to configure

## Setup

1. Upload background images to `/config/www/images/`:
   - `DayPhoto.jpg` (your home during daytime)
   - `NightPhoto.jpg` (your home at nighttime)

2. Verify these entities exist:
   - `sensor.deye_total_pv_power`
   - `sensor.deye_grid_power`
   - `sensor.deye_load_power`
   - `sensor.battery_1_soc`, `sensor.battery_1_power`, etc.
   - `sensor.battery_2_soc`, `sensor.battery_2_power`, etc.

3. Configure card with your entity names

## Documentation

- **README.md** - Full project overview
- **INSTALL.md** - Detailed installation guide
- **UI_UX_DESIGN.md** - Design system and patterns
- **CONFIG_EXAMPLE.md** - Configuration examples
- **REDESIGN_SUMMARY.md** - Design redesign details

## Support

For issues, questions, or feature requests, visit the GitHub repository.
