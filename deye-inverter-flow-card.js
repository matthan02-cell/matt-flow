/**
 * Deye Inverter Flow Card - Master UI/UX Design
 * Professional Home Assistant Lovelace Dashboard
 *
 * Features:
 * - Dual background images (day/night)
 * - Intelligent theme switching
 * - Glassmorphism UI design
 * - Smooth animated power flows
 * - Real-time energy visualization
 * - Responsive grid layout
 */

class DeyeInverterFlowCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = config;
    this.render();
  }

  getConfig() {
    return this._config || {};
  }

  render() {
    this.innerHTML = `
      <div style="padding: 20px; font-family: 'Segoe UI', Roboto, sans-serif; background: #f5f7fa;">
        <div style="max-width: 600px;">
          <h2 style="margin: 0 0 20px 0; color: #1a1a1a; font-size: 24px; font-weight: 600;">⚡ Deye Inverter Flow Card</h2>

          <!-- System Configuration -->
          <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin: 0 0 16px 0; color: #333; font-size: 16px; font-weight: 600;">🏠 System Configuration</h3>

            <div style="margin-bottom: 12px;">
              <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Card Title</label>
              <input type="text" id="cardTitle" placeholder="Solar Energy Flow"
                style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
            </div>

            <div style="margin-bottom: 12px;">
              <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Inverter Name</label>
              <input type="text" id="inverterName" placeholder="e.g., Deye Inverter"
                style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
            </div>

            <div style="margin-bottom: 12px;">
              <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Theme Mode</label>
              <select id="themeMode" style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px;">
                <option value="auto">Auto (based on time)</option>
                <option value="day">Day Mode</option>
                <option value="night">Night Mode</option>
              </select>
            </div>
          </div>

          <!-- Solar & Grid -->
          <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin: 0 0 16px 0; color: #333; font-size: 16px; font-weight: 600;">☀️ Solar & Grid</h3>

            <div style="margin-bottom: 12px;">
              <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">PV Total Power</label>
              <input type="text" id="pvTotalPower" placeholder="sensor.deye_total_pv_power"
                style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
            </div>

            <div style="margin-bottom: 12px;">
              <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Grid Power</label>
              <input type="text" id="gridPower" placeholder="sensor.deye_grid_power"
                style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
            </div>

            <div style="margin-bottom: 12px;">
              <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">House Consumption</label>
              <input type="text" id="housePower" placeholder="sensor.deye_load_power"
                style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
            </div>
          </div>

          <!-- Battery 1 -->
          <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin: 0 0 16px 0; color: #333; font-size: 16px; font-weight: 600;">🔋 Primary Battery (LVFU 1)</h3>

            <div style="margin-bottom: 12px;">
              <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Battery Name</label>
              <input type="text" id="battery1Name" placeholder="LVFU Battery 1"
                style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div>
                <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">SOC</label>
                <input type="text" id="battery1Soc" placeholder="sensor.battery_1_soc"
                  style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
              </div>
              <div>
                <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Power</label>
                <input type="text" id="battery1Power" placeholder="sensor.battery_1_power"
                  style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
              </div>
              <div>
                <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Voltage</label>
                <input type="text" id="battery1Voltage" placeholder="sensor.battery_1_voltage"
                  style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
              </div>
              <div>
                <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Current</label>
                <input type="text" id="battery1Current" placeholder="sensor.battery_1_current"
                  style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
              </div>
              <div>
                <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Temperature</label>
                <input type="text" id="battery1Temp" placeholder="sensor.battery_1_temp"
                  style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
              </div>
              <div>
                <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Capacity (Ah)</label>
                <input type="number" id="battery1Capacity" placeholder="100"
                  style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
              </div>
            </div>
          </div>

          <!-- Battery 2 -->
          <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin: 0 0 16px 0; color: #333; font-size: 16px; font-weight: 600;">🔋 Secondary Battery (LVFU 2)</h3>

            <div style="margin-bottom: 12px;">
              <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Battery Name</label>
              <input type="text" id="battery2Name" placeholder="LVFU Battery 2"
                style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div>
                <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">SOC</label>
                <input type="text" id="battery2Soc" placeholder="sensor.battery_2_soc"
                  style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
              </div>
              <div>
                <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Power</label>
                <input type="text" id="battery2Power" placeholder="sensor.battery_2_power"
                  style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
              </div>
              <div>
                <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Voltage</label>
                <input type="text" id="battery2Voltage" placeholder="sensor.battery_2_voltage"
                  style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
              </div>
              <div>
                <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Current</label>
                <input type="text" id="battery2Current" placeholder="sensor.battery_2_current"
                  style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
              </div>
              <div>
                <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Temperature</label>
                <input type="text" id="battery2Temp" placeholder="sensor.battery_2_temp"
                  style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
              </div>
              <div>
                <label style="display: block; margin-bottom: 6px; color: #555; font-weight: 500; font-size: 13px;">Capacity (Ah)</label>
                <input type="number" id="battery2Capacity" placeholder="100"
                  style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
              </div>
            </div>
          </div>

          <button id="saveBtn" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; transition: transform 0.2s;">
            💾 Save Configuration
          </button>
        </div>
      </div>
    `;

    this.loadConfig();
    this.querySelector('#saveBtn').addEventListener('click', () => this.saveConfig());
  }

  loadConfig() {
    const config = this._config || {};
    document.getElementById('cardTitle').value = config.title || '';
    document.getElementById('inverterName').value = config.inverter_name || '';
    document.getElementById('themeMode').value = config.theme_mode || 'auto';
    document.getElementById('pvTotalPower').value = config.pv_total_power || '';
    document.getElementById('gridPower').value = config.grid_power || '';
    document.getElementById('housePower').value = config.house_power || '';
    document.getElementById('battery1Name').value = config.battery_primary?.name || 'LVFU Battery 1';
    document.getElementById('battery1Soc').value = config.battery_primary?.soc || '';
    document.getElementById('battery1Power').value = config.battery_primary?.power || '';
    document.getElementById('battery1Voltage').value = config.battery_primary?.voltage || '';
    document.getElementById('battery1Current').value = config.battery_primary?.current || '';
    document.getElementById('battery1Temp').value = config.battery_primary?.temp || '';
    document.getElementById('battery1Capacity').value = config.battery_primary?.capacity_ah || 100;
    document.getElementById('battery2Name').value = config.battery_secondary?.name || 'LVFU Battery 2';
    document.getElementById('battery2Soc').value = config.battery_secondary?.soc || '';
    document.getElementById('battery2Power').value = config.battery_secondary?.power || '';
    document.getElementById('battery2Voltage').value = config.battery_secondary?.voltage || '';
    document.getElementById('battery2Current').value = config.battery_secondary?.current || '';
    document.getElementById('battery2Temp').value = config.battery_secondary?.temp || '';
    document.getElementById('battery2Capacity').value = config.battery_secondary?.capacity_ah || 100;
  }

  saveConfig() {
    const newConfig = {
      type: 'custom:deye-inverter-flow-card',
      title: document.getElementById('cardTitle').value,
      inverter_name: document.getElementById('inverterName').value,
      theme_mode: document.getElementById('themeMode').value,
      pv_total_power: document.getElementById('pvTotalPower').value,
      grid_power: document.getElementById('gridPower').value,
      house_power: document.getElementById('housePower').value,
      battery_primary: {
        name: document.getElementById('battery1Name').value,
        soc: document.getElementById('battery1Soc').value,
        power: document.getElementById('battery1Power').value,
        voltage: document.getElementById('battery1Voltage').value,
        current: document.getElementById('battery1Current').value,
        temp: document.getElementById('battery1Temp').value,
        capacity_ah: parseFloat(document.getElementById('battery1Capacity').value)
      },
      battery_secondary: {
        name: document.getElementById('battery2Name').value,
        soc: document.getElementById('battery2Soc').value,
        power: document.getElementById('battery2Power').value,
        voltage: document.getElementById('battery2Voltage').value,
        current: document.getElementById('battery2Current').value,
        temp: document.getElementById('battery2Temp').value,
        capacity_ah: parseFloat(document.getElementById('battery2Capacity').value)
      }
    };
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: newConfig } }));
  }
}

class DeyeInverterFlowCard extends HTMLElement {
  setConfig(config) {
    this._config = config;
    this._hass = undefined;
    this._animationId = null;
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._cardElement) {
      this.render();
    }
    this.updateValues();
  }

  getCardSize() {
    return 4;
  }

  render() {
    if (!this._hass || !this._config) return;

    const config = this._config;

    this._cardElement = document.createElement('div');
    this._cardElement.innerHTML = `
      <ha-card>
        <style>
          .flow-card-container {
            position: relative;
            overflow: hidden;
            min-height: 600px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
          }

          .flow-card-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0.4;
            z-index: 1;
          }

          .flow-card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            z-index: 2;
          }

          .flow-card-content {
            position: relative;
            z-index: 3;
            padding: 24px;
            color: white;
            font-family: 'Segoe UI', Roboto, sans-serif;
          }

          .flow-card-title {
            font-size: 24px;
            font-weight: 700;
            margin: 0 0 8px 0;
            letter-spacing: -0.5px;
          }

          .flow-card-subtitle {
            font-size: 13px;
            opacity: 0.8;
            margin: 0 0 20px 0;
          }

          .energy-flow-diagram {
            margin: 20px 0;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            padding: 20px;
          }

          .energy-nodes {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 12px;
            margin-top: 16px;
          }

          .energy-node {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            border-radius: 10px;
            padding: 16px 12px;
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
          }

          .energy-node:hover {
            background: rgba(255, 255, 255, 0.25);
            border-color: rgba(255, 255, 255, 0.4);
            transform: translateY(-2px);
          }

          .energy-node-icon {
            font-size: 32px;
            margin-bottom: 8px;
          }

          .energy-node-label {
            font-size: 11px;
            opacity: 0.9;
            margin-bottom: 6px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .energy-node-value {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 2px;
          }

          .energy-node-unit {
            font-size: 11px;
            opacity: 0.7;
          }

          .battery-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 16px;
          }

          .battery-card {
            background: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            padding: 14px;
            font-size: 12px;
          }

          .battery-header {
            font-weight: 600;
            margin-bottom: 10px;
            opacity: 0.95;
          }

          .battery-stat {
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;
            opacity: 0.85;
            font-size: 11px;
          }

          .battery-stat-label {
            opacity: 0.75;
          }

          .battery-stat-value {
            font-weight: 600;
          }

          .soc-bar {
            width: 100%;
            height: 6px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
            margin-top: 8px;
            overflow: hidden;
          }

          .soc-fill {
            height: 100%;
            background: linear-gradient(90deg, #4ade80, #22c55e);
            border-radius: 3px;
            transition: width 0.6s ease;
          }

          .summary-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-top: 16px;
          }

          .summary-item {
            background: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            padding: 12px;
            text-align: center;
          }

          .summary-label {
            font-size: 10px;
            opacity: 0.75;
            margin-bottom: 6px;
            text-transform: uppercase;
            font-weight: 500;
            letter-spacing: 0.3px;
          }

          .summary-value {
            font-size: 20px;
            font-weight: 700;
          }

          .energy-animation {
            animation: pulse 2s ease-in-out infinite;
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }

          .flow-arrow {
            display: inline-block;
            animation: flow 1.5s ease-in-out infinite;
          }

          @keyframes flow {
            0%, 100% { transform: translateX(0) scale(1); opacity: 0.6; }
            50% { transform: translateX(4px) scale(1.1); opacity: 1; }
          }

          .day-mode {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }

          .night-mode {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          }

          .timestamp {
            font-size: 11px;
            opacity: 0.6;
            margin-top: 12px;
            text-align: right;
          }
        </style>

        <div class="flow-card-container day-mode" id="flowCard">
          <div class="flow-card-bg" id="bgImage"></div>
          <div class="flow-card-overlay"></div>

          <div class="flow-card-content">
            <div class="flow-card-title">⚡ ${config.title || 'Solar Energy Flow'}</div>
            <div class="flow-card-subtitle">Real-time energy monitoring</div>

            <!-- Energy Flow Diagram -->
            <div class="energy-flow-diagram">
              <div style="font-size: 12px; font-weight: 600; opacity: 0.9;">📊 Energy Flow</div>
              <div class="energy-nodes">
                <div class="energy-node">
                  <div class="energy-node-icon">☀️</div>
                  <div class="energy-node-label">Solar</div>
                  <div class="energy-node-value" id="pvValue">0</div>
                  <div class="energy-node-unit">W</div>
                </div>

                <div class="energy-node">
                  <div class="energy-node-icon">⚡</div>
                  <div class="energy-node-label">Grid</div>
                  <div class="energy-node-value" id="gridValue">0</div>
                  <div class="energy-node-unit">W</div>
                </div>

                <div class="energy-node">
                  <div class="energy-node-icon">🏠</div>
                  <div class="energy-node-label">House</div>
                  <div class="energy-node-value" id="houseValue">0</div>
                  <div class="energy-node-unit">W</div>
                </div>

                <div class="energy-node">
                  <div class="energy-node-icon">🔋</div>
                  <div class="energy-node-label">Batteries</div>
                  <div class="energy-node-value" id="batteryTotalValue">0</div>
                  <div class="energy-node-unit">W</div>
                </div>
              </div>
            </div>

            <!-- Battery Details -->
            <div class="battery-grid">
              <div class="battery-card">
                <div class="battery-header">🔋 ${config.battery_primary?.name || 'Battery 1'}</div>
                <div class="battery-stat">
                  <span class="battery-stat-label">SOC</span>
                  <span class="battery-stat-value" id="bat1Soc">0%</span>
                </div>
                <div class="soc-bar">
                  <div class="soc-fill" id="bat1SocBar" style="width: 0%"></div>
                </div>
                <div class="battery-stat" style="margin-top: 8px;">
                  <span class="battery-stat-label">Power</span>
                  <span class="battery-stat-value" id="bat1Power">0W</span>
                </div>
                <div class="battery-stat">
                  <span class="battery-stat-label">Voltage</span>
                  <span class="battery-stat-value" id="bat1Voltage">0V</span>
                </div>
                <div class="battery-stat">
                  <span class="battery-stat-label">Temp</span>
                  <span class="battery-stat-value" id="bat1Temp">0°C</span>
                </div>
              </div>

              <div class="battery-card">
                <div class="battery-header">🔋 ${config.battery_secondary?.name || 'Battery 2'}</div>
                <div class="battery-stat">
                  <span class="battery-stat-label">SOC</span>
                  <span class="battery-stat-value" id="bat2Soc">0%</span>
                </div>
                <div class="soc-bar">
                  <div class="soc-fill" id="bat2SocBar" style="width: 0%"></div>
                </div>
                <div class="battery-stat" style="margin-top: 8px;">
                  <span class="battery-stat-label">Power</span>
                  <span class="battery-stat-value" id="bat2Power">0W</span>
                </div>
                <div class="battery-stat">
                  <span class="battery-stat-label">Voltage</span>
                  <span class="battery-stat-value" id="bat2Voltage">0V</span>
                </div>
                <div class="battery-stat">
                  <span class="battery-stat-label">Temp</span>
                  <span class="battery-stat-value" id="bat2Temp">0°C</span>
                </div>
              </div>
            </div>

            <!-- Summary -->
            <div class="summary-row">
              <div class="summary-item">
                <div class="summary-label">Total Generation</div>
                <div class="summary-value" id="summaryPv">0W</div>
              </div>
              <div class="summary-item">
                <div class="summary-label">House Load</div>
                <div class="summary-value" id="summaryHouse">0W</div>
              </div>
              <div class="summary-item">
                <div class="summary-label">Grid Status</div>
                <div class="summary-value" id="gridStatus" style="font-size: 16px;">→</div>
              </div>
            </div>

            <div class="timestamp">Updated: <span id="timestamp">--:--:--</span></div>
          </div>
        </div>
      </ha-card>
    `;

    this.appendChild(this._cardElement);
  }

  updateValues() {
    if (!this._hass || !this._config) return;

    const config = this._config;
    const hass = this._hass;

    const getState = (entity) => {
      if (!entity) return null;
      const state = hass.states[entity];
      return state ? parseFloat(state.state) : 0;
    };

    const formatNumber = (num, decimals = 0) => {
      return typeof num === 'number' ? num.toFixed(decimals) : '0';
    };

    // Get values
    const pvPower = getState(config.pv_total_power) || 0;
    const gridPower = getState(config.grid_power) || 0;
    const housePower = getState(config.house_power) || 0;

    const battery1Soc = getState(config.battery_primary?.soc) || 0;
    const battery1Power = getState(config.battery_primary?.power) || 0;
    const battery1Voltage = getState(config.battery_primary?.voltage) || 0;
    const battery1Current = getState(config.battery_primary?.current) || 0;
    const battery1Temp = getState(config.battery_primary?.temp) || 0;

    const battery2Soc = getState(config.battery_secondary?.soc) || 0;
    const battery2Power = getState(config.battery_secondary?.power) || 0;
    const battery2Voltage = getState(config.battery_secondary?.voltage) || 0;
    const battery2Current = getState(config.battery_secondary?.current) || 0;
    const battery2Temp = getState(config.battery_secondary?.temp) || 0;

    const batteryTotalPower = Math.abs(battery1Power) + Math.abs(battery2Power);
    const batteryTotalSoc = (battery1Soc + battery2Soc) / 2;

    // Update theme
    this.updateTheme(config.theme_mode, pvPower);

    // Update values in DOM
    const card = this.querySelector('.flow-card-container');
    if (card) {
      card.querySelector('#pvValue').textContent = formatNumber(pvPower);
      card.querySelector('#gridValue').textContent = formatNumber(Math.abs(gridPower));
      card.querySelector('#houseValue').textContent = formatNumber(housePower);
      card.querySelector('#batteryTotalValue').textContent = formatNumber(batteryTotalPower);

      card.querySelector('#bat1Soc').textContent = formatNumber(battery1Soc) + '%';
      card.querySelector('#bat1Power').textContent = formatNumber(battery1Power) + 'W';
      card.querySelector('#bat1Voltage').textContent = formatNumber(battery1Voltage, 2) + 'V';
      card.querySelector('#bat1Temp').textContent = formatNumber(battery1Temp, 1) + '°C';
      card.querySelector('#bat1SocBar').style.width = Math.min(battery1Soc, 100) + '%';

      card.querySelector('#bat2Soc').textContent = formatNumber(battery2Soc) + '%';
      card.querySelector('#bat2Power').textContent = formatNumber(battery2Power) + 'W';
      card.querySelector('#bat2Voltage').textContent = formatNumber(battery2Voltage, 2) + 'V';
      card.querySelector('#bat2Temp').textContent = formatNumber(battery2Temp, 1) + '°C';
      card.querySelector('#bat2SocBar').style.width = Math.min(battery2Soc, 100) + '%';

      card.querySelector('#summaryPv').textContent = formatNumber(pvPower) + 'W';
      card.querySelector('#summaryHouse').textContent = formatNumber(housePower) + 'W';

      const gridStatus = gridPower > 100 ? '← Import' : gridPower < -100 ? 'Export →' : '⟷ Balanced';
      card.querySelector('#gridStatus').textContent = gridStatus;

      card.querySelector('#timestamp').textContent = new Date().toLocaleTimeString();
    }

    // Schedule next update
    if (!this._updateScheduled) {
      this._updateScheduled = true;
      setTimeout(() => {
        this._updateScheduled = false;
        if (this._hass) this.updateValues();
      }, 1000);
    }
  }

  updateTheme(themeMode, pvPower) {
    const card = this.querySelector('.flow-card-container');
    const bg = this.querySelector('.flow-card-bg');

    if (!card || !bg) return;

    let isDayMode = true;

    if (themeMode === 'auto') {
      const hour = new Date().getHours();
      isDayMode = hour >= 6 && hour < 18 && pvPower > 100;
    } else if (themeMode === 'night') {
      isDayMode = false;
    }

    if (isDayMode) {
      card.className = card.className.replace('night-mode', '').replace(/\s+/g, ' ') + ' day-mode';
      bg.style.backgroundImage = "url('/local/images/DayPhoto.jpg')";
      card.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    } else {
      card.className = card.className.replace('day-mode', '').replace(/\s+/g, ' ') + ' night-mode';
      bg.style.backgroundImage = "url('/local/images/NightPhoto.jpg')";
      card.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
    }
  }

  static getConfigElement() {
    return document.createElement('deye-inverter-flow-card-editor');
  }

  static getStubConfig() {
    return {
      type: 'custom:deye-inverter-flow-card',
      title: 'Solar Energy Flow',
      inverter_name: 'Deye Inverter',
      theme_mode: 'auto',
      pv_total_power: 'sensor.deye_total_pv_power',
      grid_power: 'sensor.deye_grid_power',
      house_power: 'sensor.deye_load_power',
      battery_primary: {
        name: 'LVFU Battery 1',
        soc: 'sensor.battery_1_soc',
        power: 'sensor.battery_1_power',
        voltage: 'sensor.battery_1_voltage',
        current: 'sensor.battery_1_current',
        temp: 'sensor.battery_1_temp',
        capacity_ah: 100
      },
      battery_secondary: {
        name: 'LVFU Battery 2',
        soc: 'sensor.battery_2_soc',
        power: 'sensor.battery_2_power',
        voltage: 'sensor.battery_2_voltage',
        current: 'sensor.battery_2_current',
        temp: 'sensor.battery_2_temp',
        capacity_ah: 100
      }
    };
  }
}

customElements.define('deye-inverter-flow-card', DeyeInverterFlowCard);
customElements.define('deye-inverter-flow-card-editor', DeyeInverterFlowCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'deye-inverter-flow-card',
  name: 'Deye Inverter Flow Card',
  description: 'Master UI/UX energy flow visualization with dual day/night themes'
});
