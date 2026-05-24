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
      <div style="padding: 16px; font-family: Roboto, sans-serif;">
        <h2>Deye Inverter Flow Card Configuration</h2>
        <div style="border: 1px solid #ccc; border-radius: 4px; padding: 16px; margin: 16px 0;">
          <h3>System Configuration</h3>
          <div style="margin: 12px 0;">
            <label>Inverter Name:</label>
            <input type="text" id="inverterName" placeholder="e.g., Deye Inverter" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>

          <h3 style="margin-top: 20px;">Solar & Grid Entities</h3>
          <div style="margin: 12px 0;">
            <label>PV Total Power Entity:</label>
            <input type="text" id="pvTotalPower" placeholder="sensor.deye_total_pv_power" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>Grid Power Entity:</label>
            <input type="text" id="gridPower" placeholder="sensor.deye_grid_power" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>House Consumption Entity:</label>
            <input type="text" id="housePower" placeholder="sensor.deye_load_power" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>

          <h3 style="margin-top: 20px;">Primary Battery (LVFU Battery 1)</h3>
          <div style="margin: 12px 0;">
            <label>Battery Name:</label>
            <input type="text" id="battery1Name" placeholder="e.g., LVFU Battery 1" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>SOC (%):</label>
            <input type="text" id="battery1Soc" placeholder="sensor.battery_1_soc" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>Power (W):</label>
            <input type="text" id="battery1Power" placeholder="sensor.battery_1_power" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>Voltage (V):</label>
            <input type="text" id="battery1Voltage" placeholder="sensor.battery_1_voltage" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>Current (A):</label>
            <input type="text" id="battery1Current" placeholder="sensor.battery_1_current" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>Temperature (°C):</label>
            <input type="text" id="battery1Temp" placeholder="sensor.battery_1_temp" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>Capacity (Ah):</label>
            <input type="number" id="battery1Capacity" placeholder="100" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>

          <h3 style="margin-top: 20px;">Secondary Battery (LVFU Battery 2)</h3>
          <div style="margin: 12px 0;">
            <label>Battery Name:</label>
            <input type="text" id="battery2Name" placeholder="e.g., LVFU Battery 2" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>SOC (%):</label>
            <input type="text" id="battery2Soc" placeholder="sensor.battery_2_soc" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>Power (W):</label>
            <input type="text" id="battery2Power" placeholder="sensor.battery_2_power" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>Voltage (V):</label>
            <input type="text" id="battery2Voltage" placeholder="sensor.battery_2_voltage" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>Current (A):</label>
            <input type="text" id="battery2Current" placeholder="sensor.battery_2_current" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>Temperature (°C):</label>
            <input type="text" id="battery2Temp" placeholder="sensor.battery_2_temp" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>Capacity (Ah):</label>
            <input type="number" id="battery2Capacity" placeholder="100" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>

          <h3 style="margin-top: 20px;">Appearance</h3>
          <div style="margin: 12px 0;">
            <label>Background Image URL:</label>
            <input type="text" id="backgroundImage" placeholder="/local/images/my-system.jpg" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>Background Opacity (0-1):</label>
            <input type="number" id="backgroundOpacity" min="0" max="1" step="0.1" placeholder="0.15" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
          <div style="margin: 12px 0;">
            <label>Card Title:</label>
            <input type="text" id="cardTitle" placeholder="Solar Energy Flow" style="width: 100%; padding: 8px; margin-top: 4px;">
          </div>
        </div>
        <button id="saveBtn" style="background: #03a9f4; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">Save Configuration</button>
      </div>
    `;

    this.loadConfig();
    this.querySelector('#saveBtn').addEventListener('click', () => this.saveConfig());
  }

  loadConfig() {
    const config = this._config || {};
    document.getElementById('inverterName').value = config.inverter_name || '';
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
    document.getElementById('backgroundImage').value = config.background_image || '';
    document.getElementById('backgroundOpacity').value = config.background_opacity ?? 0.15;
    document.getElementById('cardTitle').value = config.title || 'Solar Energy Flow';
  }

  saveConfig() {
    const newConfig = {
      type: 'custom:deye-inverter-flow-card',
      title: document.getElementById('cardTitle').value,
      inverter_name: document.getElementById('inverterName').value,
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
      },
      background_image: document.getElementById('backgroundImage').value,
      background_opacity: parseFloat(document.getElementById('backgroundOpacity').value)
    };
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: newConfig } }));
  }
}

class DeyeInverterFlowCard extends HTMLElement {
  setConfig(config) {
    this._config = config;
    this._hass = undefined;
  }

  set hass(hass) {
    this._hass = hass;
    this.render();
  }

  getCardSize() {
    return 3;
  }

  render() {
    if (!this._hass || !this._config) return;

    const config = this._config;
    const hass = this._hass;

    // Get entity states
    const getState = (entity) => {
      if (!entity) return null;
      const state = hass.states[entity];
      return state ? parseFloat(state.state) : null;
    };

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

    const bgOpacity = config.background_opacity ?? 0.15;
    const bgImage = config.background_image ? `background-image: url('${config.background_image}'); background-size: cover; background-position: center;` : '';

    this.innerHTML = `
      <ha-card>
        <div style="padding: 16px; position: relative; overflow: hidden; background-color: rgba(255,255,255,0.95);">
          ${bgImage ? `<div style="${bgImage} position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: ${bgOpacity}; z-index: 0;"></div>` : ''}
          <div style="position: relative; z-index: 1;">
            <h2 style="margin: 0 0 16px 0; text-align: center; color: #1a1a1a;">${config.title || 'Solar Energy Flow'}</h2>

            <svg width="100%" viewBox="0 0 1000 600" style="max-width: 100%; height: auto; margin: 20px 0;">
              <!-- Grid -->
              <g id="grid">
                <rect x="50" y="50" width="120" height="100" fill="none" stroke="#ff6b6b" stroke-width="2" rx="8"/>
                <text x="110" y="85" text-anchor="middle" font-size="16" font-weight="bold" fill="#ff6b6b">GRID</text>
                <text x="110" y="110" text-anchor="middle" font-size="14" fill="#666">${gridPower > 0 ? 'Import' : 'Export'}</text>
                <text x="110" y="130" text-anchor="middle" font-size="18" font-weight="bold" fill="#ff6b6b">${Math.abs(gridPower).toFixed(0)}W</text>
              </g>

              <!-- Solar Panels -->
              <g id="solar">
                <rect x="50" y="250" width="120" height="100" fill="none" stroke="#ffd700" stroke-width="2" rx="8"/>
                <text x="110" y="285" text-anchor="middle" font-size="16" font-weight="bold" fill="#ffd700">☀️ SOLAR</text>
                <text x="110" y="310" text-anchor="middle" font-size="14" fill="#666">PV Total</text>
                <text x="110" y="330" text-anchor="middle" font-size="18" font-weight="bold" fill="#ffd700">${pvPower.toFixed(0)}W</text>
              </g>

              <!-- House/Load -->
              <g id="house">
                <rect x="800" y="150" width="120" height="100" fill="none" stroke="#4caf50" stroke-width="2" rx="8"/>
                <text x="860" y="185" text-anchor="middle" font-size="16" font-weight="bold" fill="#4caf50">🏠 HOUSE</text>
                <text x="860" y="210" text-anchor="middle" font-size="14" fill="#666">Load</text>
                <text x="860" y="230" text-anchor="middle" font-size="18" font-weight="bold" fill="#4caf50">${housePower.toFixed(0)}W</text>
              </g>

              <!-- Battery 1 -->
              <g id="battery1">
                <rect x="400" y="50" width="120" height="100" fill="none" stroke="#2196f3" stroke-width="2" rx="8"/>
                <text x="460" y="80" text-anchor="middle" font-size="14" font-weight="bold" fill="#2196f3">${config.battery_primary?.name || 'Battery 1'}</text>
                <text x="460" y="100" text-anchor="middle" font-size="12" fill="#666">SOC: ${battery1Soc.toFixed(1)}%</text>
                <text x="460" y="125" text-anchor="middle" font-size="16" font-weight="bold" fill="#2196f3">${battery1Power.toFixed(0)}W</text>
              </g>

              <!-- Battery 2 -->
              <g id="battery2">
                <rect x="600" y="50" width="120" height="100" fill="none" stroke="#9c27b0" stroke-width="2" rx="8"/>
                <text x="660" y="80" text-anchor="middle" font-size="14" font-weight="bold" fill="#9c27b0">${config.battery_secondary?.name || 'Battery 2'}</text>
                <text x="660" y="100" text-anchor="middle" font-size="12" fill="#666">SOC: ${battery2Soc.toFixed(1)}%</text>
                <text x="660" y="125" text-anchor="middle" font-size="16" font-weight="bold" fill="#9c27b0">${battery2Power.toFixed(0)}W</text>
              </g>

              <!-- Flow arrows (animated) -->
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#666"/>
                </marker>
              </defs>

              <!-- Solar to Grid/House/Batteries -->
              <line x1="170" y1="300" x2="400" y2="300" stroke="#ff9800" stroke-width="2" marker-end="url(#arrowhead)"/>
              <line x1="170" y1="300" x2="400" y2="100" stroke="#ff9800" stroke-width="2" marker-end="url(#arrowhead)"/>

              <!-- Battery to House -->
              <line x1="520" y1="150" x2="750" y2="200" stroke="#9c27b0" stroke-width="2" marker-end="url(#arrowhead)"/>
              <line x1="720" y1="150" x2="750" y2="200" stroke="#2196f3" stroke-width="2" marker-end="url(#arrowhead)"/>

              <!-- Grid lines -->
              <line x1="170" y1="100" x2="350" y2="100" stroke="#ff6b6b" stroke-width="2" marker-end="url(#arrowhead)"/>
            </svg>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px;">
              <!-- Battery 1 Details -->
              <div style="border: 1px solid #2196f3; border-radius: 8px; padding: 12px; background: rgba(33,150,243,0.05);">
                <h3 style="margin: 0 0 12px 0; color: #2196f3; font-size: 16px;">${config.battery_primary?.name || 'LVFU Battery 1'}</h3>
                <div style="font-size: 14px; color: #666; line-height: 1.8;">
                  <div>SOC: <strong>${battery1Soc.toFixed(1)}%</strong></div>
                  <div>Power: <strong>${battery1Power.toFixed(0)}W</strong></div>
                  <div>Voltage: <strong>${battery1Voltage.toFixed(2)}V</strong></div>
                  <div>Current: <strong>${battery1Current.toFixed(1)}A</strong></div>
                  <div>Temperature: <strong>${battery1Temp.toFixed(1)}°C</strong></div>
                </div>
              </div>

              <!-- Battery 2 Details -->
              <div style="border: 1px solid #9c27b0; border-radius: 8px; padding: 12px; background: rgba(156,39,176,0.05);">
                <h3 style="margin: 0 0 12px 0; color: #9c27b0; font-size: 16px;">${config.battery_secondary?.name || 'LVFU Battery 2'}</h3>
                <div style="font-size: 14px; color: #666; line-height: 1.8;">
                  <div>SOC: <strong>${battery2Soc.toFixed(1)}%</strong></div>
                  <div>Power: <strong>${battery2Power.toFixed(0)}W</strong></div>
                  <div>Voltage: <strong>${battery2Voltage.toFixed(2)}V</strong></div>
                  <div>Current: <strong>${battery2Current.toFixed(1)}A</strong></div>
                  <div>Temperature: <strong>${battery2Temp.toFixed(1)}°C</strong></div>
                </div>
              </div>

              <!-- Summary -->
              <div style="border: 1px solid #4caf50; border-radius: 8px; padding: 12px; background: rgba(76,175,80,0.05); grid-column: 1 / -1;">
                <h3 style="margin: 0 0 12px 0; color: #4caf50; font-size: 16px;">System Summary</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; font-size: 14px; color: #666;">
                  <div>Total Solar: <strong style="color: #ffd700;">${pvPower.toFixed(0)}W</strong></div>
                  <div>House Load: <strong style="color: #4caf50;">${housePower.toFixed(0)}W</strong></div>
                  <div>Grid: <strong style="color: #ff6b6b;">${gridPower > 0 ? '+' : ''}${gridPower.toFixed(0)}W</strong></div>
                </div>
              </div>
            </div>

            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #999; text-align: center;">
              Updated: ${new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  static getConfigElement() {
    return document.createElement('deye-inverter-flow-card-editor');
  }

  static getStubConfig() {
    return {
      type: 'custom:deye-inverter-flow-card',
      title: 'Solar Energy Flow',
      inverter_name: 'Deye Inverter',
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
      },
      background_image: '',
      background_opacity: 0.15
    };
  }
}

customElements.define('deye-inverter-flow-card', DeyeInverterFlowCard);
customElements.define('deye-inverter-flow-card-editor', DeyeInverterFlowCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'deye-inverter-flow-card',
  name: 'Deye Inverter Flow Card',
  description: 'Real-time energy flow visualization for Deye Inverter with LVFU Batteries'
});
