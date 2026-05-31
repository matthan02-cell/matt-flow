# Deye Inverter Flow Card - Master UI/UX Edition

A beautifully designed Home Assistant Lovelace card that visualizes real-time energy flow for **Deye Solar Inverter** systems with **LVFU Battery Storage**.

**Built with Master UI/UX Design principles for maximum clarity, interactivity, and visual appeal.**

## ✨ Key Features

### 🎨 Professional UI/UX Design
- **Glassmorphism Design** - Modern frosted glass aesthetic with backdrop blur effects
- **Dual Day/Night Themes** - Automatically switches between day and night backgrounds with intelligent time-based detection
- **Custom Background Images** - Use your own day/night photos for immersive monitoring
- **Responsive Grid Layout** - Adapts perfectly to any screen size
- **Smooth Animations** - Subtle transitions and pulsing energy flows
- **Professional Typography** - Carefully chosen fonts and hierarchy for readability

### ⚡ Real-Time Energy Monitoring
- **Live Power Flow Visualization** - Watch energy move between solar, batteries, home, and grid
- **Animated Energy Nodes** - Interactive cards showing current power generation/consumption
- **Battery State Tracking** - Dual battery monitoring with SOC bars and real-time metrics
- **Grid Direction Indicator** - Shows import, export, or balanced grid status
- **System Summary** - Quick overview of total generation, consumption, and grid status

### 🌞 Intelligent Day/Night Switching
- **Auto Mode** - Switches based on time of day and solar generation
- **Manual Modes** - Force day or night theme
- **Context-Aware Colors** - Background gradients change with theme
- **Optimized Readability** - Text colors and opacity adjust for visibility

### 🎯 Advanced Features
- **No External Dependencies** - Single JavaScript file, pure ES6
- **Visual Configuration Editor** - No YAML needed, intuitive GUI
- **Real-Time Updates** - Data refreshes every second
- **Hover Effects** - Interactive elements respond to user interaction
- **Accessibility Ready** - Clear contrast and readable fonts

## 📸 Design Preview

The card displays your custom day/night background images with an elegant overlay system:

- **Daytime**: Shows your home with bright sunlight, solar panels generating power
- **Nighttime**: Shows your home with moonlight, house lights on, minimal solar generation

The glassmorphic UI elements float over your images with perfect readability.

## 🚀 Quick Installation

### Method 1: HACS (Recommended)

1. Open **HACS** → **Frontend** → **Custom repositories**
2. Add: `https://github.com/matthan02-cell/matt-flow`
3. Search for **deye-inverter-flow-card** and download
4. Hard refresh browser (`Ctrl + Shift + R`)
5. Add card: `type: custom:deye-inverter-flow-card`

### Method 2: Manual

1. Copy `deye-inverter-flow-card.js` to `/config/www/`
2. Settings → Dashboards → Resources → Add:
   - URL: `/local/deye-inverter-flow-card.js`
   - Type: `JavaScript Module`
3. Hard refresh browser
4. Add card to dashboard

## 📋 Configuration

### Visual Editor (Recommended)

1. Add card with type: `custom:deye-inverter-flow-card`
2. Click **Edit card** to open visual editor
3. Fill in your entity names
4. Select theme mode (Auto/Day/Night)
5. Save and enjoy!

### YAML Configuration

```yaml
type: custom:deye-inverter-flow-card
title: "Solar Energy Flow"
inverter_name: "Deye Inverter"
theme_mode: auto  # auto, day, or night

# Solar & Grid
pv_total_power: sensor.deye_total_pv_power
grid_power: sensor.deye_grid_power
house_power: sensor.deye_load_power

# Battery 1
battery_primary:
  name: "LVFU Battery 1"
  soc: sensor.battery_1_soc
  power: sensor.battery_1_power
  voltage: sensor.battery_1_voltage
  current: sensor.battery_1_current
  temp: sensor.battery_1_temp
  capacity_ah: 100

# Battery 2
battery_secondary:
  name: "LVFU Battery 2"
  soc: sensor.battery_2_soc
  power: sensor.battery_2_power
  voltage: sensor.battery_2_voltage
  current: sensor.battery_2_current
  temp: sensor.battery_2_temp
  capacity_ah: 100
```

## 🎨 UI/UX Design Highlights

### Glassmorphism Implementation
The card uses a modern design pattern combining:
- Frosted glass effect with `backdrop-filter: blur()`
- Semi-transparent backgrounds with RGBA colors
- Subtle borders with opacity
- Smooth transitions on all interactive elements

### Color Scheme
- **Day Mode**: Purple to violet gradient (`#667eea` to `#764ba2`)
- **Night Mode**: Dark slate gradient (`#0f172a` to `#1e293b`)
- **Accent Colors**: Green for positive states, warm whites for text

### Typography Hierarchy
- **Title**: 24px, Bold, High contrast
- **Section Labels**: 12px, Uppercase, Medium weight
- **Values**: 18-20px, Bold, Clear visibility
- **Stats**: 11-13px, Regular weight, Slightly muted

### Interactive Elements
- **Energy Nodes**: Hover for elevation and background change
- **Cards**: Smooth scale and opacity transitions
- **Progress Bars**: Smooth width animations
- **Icons**: Emoji for quick visual recognition

## 🏠 Setup Guide

### Step 1: Prepare Your Background Images

Place in `/config/www/images/`:
- `DayPhoto.jpg` - Your home during daytime (recommended: 1200x800+ px)
- `NightPhoto.jpg` - Your home at night (recommended: 1200x800+ px)

**Image Tips:**
- Use high-quality photos for best visual impact
- Ensure key elements (solar panels, home) are visible
- Compress to <500KB for optimal performance
- 16:9 aspect ratio works best

### Step 2: Configure Deye Inverter

Ensure these entities exist in Home Assistant:
```
sensor.deye_total_pv_power
sensor.deye_grid_power
sensor.deye_load_power
```

**Verify in Developer Tools → States**

### Step 3: Configure LVFU Batteries

Set up battery monitoring via:
- **CAN-Bus** (recommended)
- **MQTT** integration
- **REST sensors** if HTTP API available

**Required entities per battery:**
```
sensor.battery_X_soc       # State of Charge (%)
sensor.battery_X_power     # Power (W)
sensor.battery_X_voltage   # Voltage (V)
sensor.battery_X_current   # Current (A)
sensor.battery_X_temp      # Temperature (°C)
```

### Step 4: Add Card to Dashboard

Use visual editor and configure with your entities.

## 📊 Data Display

### Energy Flow Section
Shows real-time power for:
- ☀️ **Solar**: PV generation
- ⚡ **Grid**: Import/export power
- 🏠 **House**: Home consumption
- 🔋 **Batteries**: Combined battery power

### Battery Cards
Each battery displays:
- **Battery Name** with icon
- **State of Charge** with visual bar
- **Current Power** output/input
- **Voltage** in volts
- **Temperature** in celsius

### System Summary
Quick overview of:
- **Total Generation**: Current solar output
- **House Load**: Home consumption
- **Grid Status**: Direction indicator (Import/Export/Balanced)

## 🎯 Theme Switching

### Auto Mode (Recommended)
- Switches based on time of day (6 AM - 6 PM = day, else = night)
- Also considers solar generation (if <100W = night theme)
- Intelligent for cloudy days and seasonal changes

### Day Mode
- Always shows day theme
- Use for testing or if you prefer day visualization

### Night Mode
- Always shows night theme
- Use for testing or if you prefer night visualization

## 🔧 Advanced Configuration

### Custom Entity Names

If your entities have different names:

```yaml
battery_primary:
  name: "Main Battery"
  soc: sensor.my_custom_soc_entity
  power: sensor.my_custom_power_entity
  # ... map all entities
```

### Theme Colors

The card uses CSS gradients that can be customized. For custom themes, modify the `.day-mode` and `.night-mode` class styles in the JavaScript.

## 📱 Responsive Design

The card adapts to:
- **Desktop**: Full 3-column layout
- **Tablet**: 2-column layout
- **Mobile**: Single column stacked layout

All elements scale automatically with viewport.

## ⚡ Performance

- **No dependencies**: Pure JavaScript
- **Lightweight**: ~20KB uncompressed
- **Efficient updates**: 1-second refresh cycle
- **GPU acceleration**: CSS animations use `transform`
- **Low memory usage**: Single card instance

## 🐛 Troubleshooting

### Card doesn't appear
- [ ] Hard refresh: `Ctrl+Shift+R`
- [ ] Check console for errors: `F12`
- [ ] Verify file path in Resources
- [ ] Restart Home Assistant

### Values show as 0
- [ ] Verify entities in Developer Tools → States
- [ ] Check entity names (case-sensitive)
- [ ] Ensure integrations are enabled
- [ ] Check Home Assistant logs

### Images not showing
- [ ] Verify `DayPhoto.jpg` and `NightPhoto.jpg` in `/config/www/images/`
- [ ] Use `/local/images/` prefix in paths
- [ ] Check browser console for 404 errors
- [ ] Supported formats: JPG, PNG, WEBP

### Slow animations
- [ ] Close browser DevTools
- [ ] Check system CPU usage
- [ ] Reduce card update frequency if needed
- [ ] Try disabling browser extensions

## 📚 File Structure

```
matt-flow/
├── deye-inverter-flow-card.js    # Main card (Master UI/UX redesign)
├── README.md                      # This file
├── INSTALL.md                     # Installation guide
├── CONFIG_EXAMPLE.md              # Configuration examples
├── UI_UX_DESIGN.md               # Design documentation
├── package.json                   # Package metadata
├── LICENSE                        # MIT license
└── images/
    ├── DayPhoto.jpg              # Your daytime background
    └── NightPhoto.jpg            # Your nighttime background
```

## 🎓 Design Principles Used

1. **Visual Hierarchy** - Size and color guide attention
2. **Glassmorphism** - Modern, elegant aesthetic
3. **Progressive Disclosure** - Show key info, hide details
4. **Consistency** - Uniform colors, spacing, typography
5. **Feedback** - Hover states, animations provide feedback
6. **Accessibility** - High contrast, readable fonts
7. **Responsiveness** - Works on all screen sizes
8. **Performance** - Smooth 60fps animations

## 📄 License

MIT License - See LICENSE file

## 🙏 Credits

- **k-flow-card** by thekhan1122 - Original inspiration
- **Home Assistant Community** - Ideas and feedback
- **UI/UX Design** - Modern design patterns and principles

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Test thoroughly with your setup
3. Submit pull requests with clear descriptions

## 📞 Support

- 📖 See `INSTALL.md` for installation help
- 📋 See `CONFIG_EXAMPLE.md` for configuration examples
- 🔧 See `UI_UX_DESIGN.md` for design details
- 🐛 Report issues on GitHub

---

**Built with ❤️ for solar enthusiasts and Home Assistant lovers**

**Ready to monitor your solar energy like never before? ☀️🔋**
