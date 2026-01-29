// Risk Report JSON Schema Definition
const riskReportSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "title": "Risk Report Schema",
    "description": "Schema for Web3 asset risk assessment reports",
    "required": ["asset", "riskLevel", "reason", "timestamp"],
    "properties": {
        "asset": {
            "type": "string",
            "description": "Asset symbol or identifier",
            "examples": ["BTC", "ETH", "SOL"]
        },
        "riskLevel": {
            "type": "number",
            "description": "Risk level as percentage (0-100)",
            "minimum": 0,
            "maximum": 100
        },
        "reason": {
            "type": "string",
            "description": "Explanation for the risk assessment",
            "minLength": 10
        },
        "timestamp": {
            "type": "string",
            "format": "date-time",
            "description": "ISO 8601 timestamp of the assessment"
        }
    }
};

// Asset full names mapping
const assetNames = {
    "ETH": "Ethereum",
    "BTC": "Bitcoin", 
    "SOL": "Solana",
    "AVAX": "Avalanche",
    "MATIC": "Polygon",
    "ADA": "Cardano",
    "DOT": "Polkadot",
    "LINK": "Chainlink",
    "UNI": "Uniswap",
    "ATOM": "Cosmos",
    "NEAR": "Near Protocol",
    "FTM": "Fantom",
    "ALGO": "Algorand",
    "XRP": "Ripple",
    "LTC": "Litecoin",
    "BCH": "Bitcoin Cash",
    "TRX": "Tron",
    "VET": "VeChain"
};

// Sample risk reports following the schema
const riskReports = [
    {
        "asset": "ETH",
        "riskLevel": 64,
        "reason": "High network congestion and validator load",
        "timestamp": "2026-01-29T10:00:00Z"
    },
    {
        "asset": "BTC",
        "riskLevel": 28,
        "reason": "Stable hash rate and strong institutional adoption",
        "timestamp": "2026-01-29T09:45:00Z"
    },
    {
        "asset": "SOL",
        "riskLevel": 72,
        "reason": "Recent network outages and centralization concerns",
        "timestamp": "2026-01-29T09:30:00Z"
    },
    {
        "asset": "AVAX",
        "riskLevel": 45,
        "reason": "Moderate ecosystem growth but facing increased competition",
        "timestamp": "2026-01-29T09:15:00Z"
    },
    {
        "asset": "MATIC",
        "riskLevel": 38,
        "reason": "Solid layer-2 adoption but transition to POL token creates uncertainty",
        "timestamp": "2026-01-29T09:00:00Z"
    },
    {
        "asset": "ADA",
        "riskLevel": 52,
        "reason": "Slow development progress and limited DeFi ecosystem",
        "timestamp": "2026-01-29T08:45:00Z"
    },
    {
        "asset": "DOT",
        "riskLevel": 41,
        "reason": "Strong parachain technology but low market adoption",
        "timestamp": "2026-01-29T08:30:00Z"
    },
    {
        "asset": "LINK",
        "riskLevel": 35,
        "reason": "Leading oracle network with expanding use cases",
        "timestamp": "2026-01-29T08:15:00Z"
    },
    {
        "asset": "UNI",
        "riskLevel": 48,
        "reason": "DEX dominance but regulatory uncertainty around governance token",
        "timestamp": "2026-01-29T08:00:00Z"
    },
    {
        "asset": "ATOM",
        "riskLevel": 43,
        "reason": "Inter-blockchain communication potential offset by governance complexity",
        "timestamp": "2026-01-29T07:45:00Z"
    },
    {
        "asset": "NEAR",
        "riskLevel": 49,
        "reason": "Innovative sharding technology but limited mainstream adoption",
        "timestamp": "2026-01-29T07:30:00Z"
    },
    {
        "asset": "FTM",
        "riskLevel": 58,
        "reason": "Fast transaction speeds but ecosystem dependency on few protocols",
        "timestamp": "2026-01-29T07:15:00Z"
    },
    {
        "asset": "ALGO",
        "riskLevel": 36,
        "reason": "Strong technical foundation with institutional partnerships",
        "timestamp": "2026-01-29T07:00:00Z"
    },
    {
        "asset": "XRP",
        "riskLevel": 67,
        "reason": "Ongoing regulatory challenges and centralization concerns",
        "timestamp": "2026-01-29T06:45:00Z"
    },
    {
        "asset": "LTC",
        "riskLevel": 31,
        "reason": "Established network with consistent performance and low volatility",
        "timestamp": "2026-01-29T06:30:00Z"
    },
    {
        "asset": "BCH",
        "riskLevel": 54,
        "reason": "Limited adoption growth and ongoing scaling debate",
        "timestamp": "2026-01-29T06:15:00Z"
    },
    {
        "asset": "TRX",
        "riskLevel": 61,
        "reason": "High transaction volume but centralization and governance issues",
        "timestamp": "2026-01-29T06:00:00Z"
    },
    {
        "asset": "VET",
        "riskLevel": 44,
        "reason": "Strong enterprise partnerships but limited retail adoption",
        "timestamp": "2026-01-29T05:45:00Z"
    }
];

// Historical risk data for the last 7 days
const riskHistory = {
    "ETH": [58, 62, 59, 65, 68, 66, 64],
    "BTC": [25, 30, 28, 26, 32, 29, 28],
    "SOL": [75, 78, 74, 70, 73, 76, 72],
    "AVAX": [42, 48, 45, 43, 47, 44, 45],
    "MATIC": [35, 40, 38, 36, 41, 39, 38],
    "ADA": [55, 50, 53, 54, 49, 51, 52],
    "DOT": [38, 43, 41, 39, 44, 42, 41],
    "LINK": [32, 37, 35, 33, 38, 36, 35],
    "UNI": [45, 50, 48, 46, 51, 49, 48],
    "ATOM": [40, 45, 43, 41, 46, 44, 43],
    "NEAR": [52, 47, 50, 48, 51, 49, 49],
    "FTM": [62, 59, 61, 57, 60, 58, 58],
    "ALGO": [33, 38, 36, 34, 39, 37, 36],
    "XRP": [70, 68, 72, 69, 71, 68, 67],
    "LTC": [28, 33, 31, 29, 34, 32, 31],
    "BCH": [57, 52, 55, 53, 56, 54, 54],
    "TRX": [64, 62, 66, 63, 65, 62, 61],
    "VET": [41, 46, 44, 42, 47, 45, 44]
};

const dayLabels = ["7d ago", "6d ago", "5d ago", "4d ago", "3d ago", "2d ago", "Today"];

// ============================================================================
// 0G STORAGE LAYER SIMULATION
// ============================================================================

/**
 * Simulates uploading risk data to 0G storage network
 * In production, this function would:
 * 1. Connect to 0G storage SDK
 * 2. Serialize the JSON data
 * 3. Upload to 0G distributed storage nodes
 * 4. Return actual storage hash/reference from 0G network
 * 
 * @param {Object} data - JSON risk data to store
 * @returns {Promise<string>} Mock storage reference/hash
 */
async function uploadTo0G(data) {
    // Simulate network latency
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 200));
    
    // Generate mock storage hash (in production, this would be returned by 0G SDK)
    const timestamp = Date.now();
    const dataHash = btoa(JSON.stringify(data)).slice(0, 16);
    const mockStorageHash = `0g_${timestamp}_${dataHash}`;
    
    // Simulate storing in 0G network (in production, use 0G SDK methods)
    console.log(`📦 Uploading to 0G Storage: ${JSON.stringify(data).length} bytes`);
    console.log(`✅ Stored on 0G Network with hash: ${mockStorageHash}`);
    
    // Store locally for simulation (in production, this would be handled by 0G network)
    localStorage.setItem(`0g_storage_${mockStorageHash}`, JSON.stringify({
        data: data,
        timestamp: timestamp,
        hash: mockStorageHash,
        size: JSON.stringify(data).length
    }));
    
    return mockStorageHash;
}

/**
 * Simulates retrieving risk data from 0G storage network
 * In production, this function would:
 * 1. Connect to 0G storage SDK
 * 2. Query 0G network using storage reference
 * 3. Retrieve and deserialize data from distributed nodes
 * 4. Return the original risk data
 * 
 * @param {string} storageHash - Storage reference/hash from 0G network
 * @returns {Promise<Object>} Retrieved risk data
 */
async function fetchFrom0G(storageHash) {
    // Simulate network latency
    await new Promise(resolve => setTimeout(resolve, Math.random() * 300 + 100));
    
    console.log(`🔍 Fetching from 0G Storage: ${storageHash}`);
    
    // Simulate retrieving from 0G network (in production, use 0G SDK methods)
    const storedItem = localStorage.getItem(`0g_storage_${storageHash}`);
    
    if (!storedItem) {
        throw new Error(`Data not found in 0G storage for hash: ${storageHash}`);
    }
    
    const storageRecord = JSON.parse(storedItem);
    console.log(`✅ Retrieved from 0G Network: ${storageRecord.size} bytes`);
    
    return storageRecord.data;
}

// ============================================================================
// DATA LAYER - Risk Data Management
// ============================================================================

class RiskDataManager {
    constructor() {
        this.storageHashes = new Map(); // Maps asset symbols to storage hashes
        this.cachedData = new Map(); // Local cache for performance
    }

    /**
     * Store risk report data to 0G storage
     * @param {Object} riskReport - Risk report to store
     * @returns {Promise<string>} Storage hash
     */
    async storeRiskData(riskReport) {
        try {
            const storageHash = await uploadTo0G(riskReport);
            this.storageHashes.set(riskReport.asset, storageHash);
            this.cachedData.set(riskReport.asset, riskReport);
            return storageHash;
        } catch (error) {
            console.error(`Failed to store ${riskReport.asset} data:`, error);
            throw error;
        }
    }

    /**
     * Fetch risk report from 0G storage
     * @param {string} assetSymbol - Asset symbol to fetch
     * @returns {Promise<Object>} Risk report data
     */
    async fetchRiskData(assetSymbol) {
        try {
            const storageHash = this.storageHashes.get(assetSymbol);
            if (!storageHash) {
                throw new Error(`No storage hash found for ${assetSymbol}`);
            }

            const data = await fetchFrom0G(storageHash);
            this.cachedData.set(assetSymbol, data);
            return data;
        } catch (error) {
            console.error(`Failed to fetch ${assetSymbol} data:`, error);
            // Fallback to cached data if available
            return this.cachedData.get(assetSymbol) || null;
        }
    }

    /**
     * Fetch all risk reports from 0G storage
     * @returns {Promise<Array>} Array of risk reports
     */
    async fetchAllRiskData() {
        const fetchPromises = Array.from(this.storageHashes.keys()).map(
            assetSymbol => this.fetchRiskData(assetSymbol)
        );

        const results = await Promise.allSettled(fetchPromises);
        return results
            .filter(result => result.status === 'fulfilled' && result.value)
            .map(result => result.value);
    }

    /**
     * Initialize data manager with sample data
     */
    async initialize() {
        console.log('🚀 Initializing Risk Data Manager with 0G Storage...');
        
        // Store all sample risk reports to 0G
        const storePromises = riskReports.map(report => this.storeRiskData(report));
        await Promise.all(storePromises);
        
        console.log(`✅ Stored ${riskReports.length} risk reports to 0G Storage`);
    }

    /**
     * Update risk data and store to 0G
     */
    async updateRiskData(assetSymbol, newRiskLevel, newReason) {
        try {
            const existingData = this.cachedData.get(assetSymbol);
            if (!existingData) {
                throw new Error(`No existing data found for ${assetSymbol}`);
            }

            const updatedReport = {
                ...existingData,
                riskLevel: newRiskLevel,
                reason: newReason,
                timestamp: new Date().toISOString()
            };

            await this.storeRiskData(updatedReport);
            console.log(`📊 Updated ${assetSymbol} risk data stored on 0G`);
            
            return updatedReport;
        } catch (error) {
            console.error(`Failed to update ${assetSymbol} data:`, error);
            throw error;
        }
    }
}

// ============================================================================
// BUSINESS LOGIC - Risk Assessment Logic
// ============================================================================

class RiskAnalyzer {
    /**
     * Determine risk category from numeric score
     * @param {number} riskLevel - Risk level (0-100)
     * @returns {string} Risk category (low/medium/high)
     */
    static getRiskCategory(riskLevel) {
        if (riskLevel < 35) return 'low';
        if (riskLevel < 65) return 'medium';
        return 'high';
    }

    /**
     * Get risk color based on category
     * @param {string} category - Risk category
     * @returns {Object} Color configuration
     */
    static getRiskColors(category) {
        const colorMap = {
            low: {
                primary: '#22c55e',
                background: 'rgba(34, 197, 94, 0.1)',
                border: 'rgba(34, 197, 94, 0.2)'
            },
            medium: {
                primary: '#eab308',
                background: 'rgba(234, 179, 8, 0.1)',
                border: 'rgba(234, 179, 8, 0.2)'
            },
            high: {
                primary: '#ef4444',
                background: 'rgba(239, 68, 68, 0.1)',
                border: 'rgba(239, 68, 68, 0.2)'
            }
        };
        return colorMap[category] || colorMap.medium;
    }

    /**
     * Calculate trend information from historical data
     * @param {Array} history - Historical risk data
     * @returns {Object} Trend information
     */
    static calculateTrend(history) {
        const first = history[0];
        const last = history[history.length - 1];
        const change = last - first;
        const percentageChange = Math.abs(change);
        
        if (change > 5) {
            return { 
                icon: '📈', 
                text: `Risk Increased by ${percentageChange.toFixed(1)}%`, 
                class: 'trend-up',
                change: `+${change.toFixed(1)}%`
            };
        } else if (change < -5) {
            return { 
                icon: '📉', 
                text: `Risk Decreased by ${percentageChange.toFixed(1)}%`, 
                class: 'trend-down',
                change: `${change.toFixed(1)}%`
            };
        } else {
            return { 
                icon: '➡️', 
                text: `Risk Stable (${change >= 0 ? '+' : ''}${change.toFixed(1)}%)`, 
                class: 'trend-stable',
                change: `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`
            };
        }
    }
}

// ============================================================================
// UI LAYER - Dashboard Rendering
// ============================================================================

class DashboardRenderer {
    constructor(dataManager) {
        this.dataManager = dataManager;
        this.gridContainer = null;
    }

    /**
     * Initialize the renderer
     */
    initialize() {
        this.gridContainer = document.getElementById('riskGrid');
        if (!this.gridContainer) {
            throw new Error('Risk grid container not found');
        }
    }

    /**
     * Create a single risk card element
     * @param {Object} riskReport - Risk report data
     * @returns {HTMLElement} Risk card element
     */
    createRiskCard(riskReport) {
        const riskCategory = RiskAnalyzer.getRiskCategory(riskReport.riskLevel);
        const colors = RiskAnalyzer.getRiskColors(riskCategory);
        
        const card = document.createElement('article');
        card.className = 'risk-card';
        card.setAttribute('role', 'gridcell');
        card.setAttribute('aria-label', `Risk assessment for ${riskReport.asset}`);
        card.setAttribute('tabindex', '0');
        card.style.cursor = 'pointer';
        
        // Add click event listeners
        const clickHandler = () => this.showAssetDetails(riskReport.asset);
        card.addEventListener('click', clickHandler);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                clickHandler();
            }
        });
        
        card.innerHTML = `
            <header class="card-header">
                <h3 class="asset-name">${riskReport.asset}</h3>
                <span class="risk-badge ${riskCategory}" aria-label="Risk level: ${riskCategory}">
                    ${riskCategory}
                </span>
            </header>
            <div class="risk-score ${riskCategory}" aria-label="Risk score: ${riskReport.riskLevel} percent">
                ${riskReport.riskLevel}%
            </div>
            <p class="risk-explanation">${riskReport.reason}</p>
            <time class="timestamp" datetime="${riskReport.timestamp}">
                Last updated: ${this.formatTimestamp(riskReport.timestamp)}
            </time>
            <div class="click-hint">Click for details</div>
        `;
        
        return card;
    }

    /**
     * Render all risk cards to the dashboard
     * @param {Array} riskReports - Array of risk reports
     */
    async renderDashboard(riskReports = null) {
        try {
            // Fetch data from 0G storage if not provided
            if (!riskReports) {
                console.log('📊 Retrieving risk assessment data from 0G storage network...');
                riskReports = await this.dataManager.fetchAllRiskData();
            }

            // Clear existing content
            this.gridContainer.innerHTML = '';

            // Create loading indicator
            this.showLoadingState();

            // Brief delay to show loading state
            await new Promise(resolve => setTimeout(resolve, 200));

            // Clear loading and render cards
            this.gridContainer.innerHTML = '';

            // Create and append risk cards
            riskReports.forEach(report => {
                const card = this.createRiskCard(report);
                this.gridContainer.appendChild(card);
            });

            console.log(`✅ Successfully rendered ${riskReports.length} risk assessments from 0G storage`);

        } catch (error) {
            console.error('❌ Failed to render risk dashboard:', error);
            this.showErrorState(error.message);
        }
    }

    /**
     * Show loading state
     */
    showLoadingState() {
        this.gridContainer.innerHTML = `
            <div class="loading-state">
                <div class="loading-spinner"></div>
                <p>Retrieving risk data from 0G storage network</p>
            </div>
        `;
    }

    /**
     * Show error state
     * @param {string} message - Error message
     */
    showErrorState(message) {
        this.gridContainer.innerHTML = `
            <div class="error-state">
                <p>Unable to retrieve risk data: ${message}</p>
                <button onclick="dashboardRenderer.renderDashboard()">Retry Connection</button>
            </div>
        `;
    }

    /**
     * Format timestamp for display
     * @param {string} timestamp - ISO timestamp
     * @returns {string} Formatted timestamp
     */
    formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        });
    }

    /**
     * Show asset details modal
     * @param {string} assetSymbol - Asset symbol
     */
    async showAssetDetails(assetSymbol) {
        try {
            // Fetch fresh data from 0G storage
            const report = await this.dataManager.fetchRiskData(assetSymbol);
            const history = riskHistory[assetSymbol];
            const fullName = assetNames[assetSymbol];
            
            if (!report || !history || !fullName) return;
            
            const riskCategory = RiskAnalyzer.getRiskCategory(report.riskLevel);
            const trend = RiskAnalyzer.calculateTrend(history);
            const avgRisk = Math.round(history.reduce((a, b) => a + b, 0) / history.length);
            
            // Create and show modal
            this.createAndShowModal(report, history, fullName, riskCategory, trend, avgRisk);
            
        } catch (error) {
            console.error('Failed to show asset details:', error);
        }
    }

    /**
     * Create and show the asset details modal
     */
    createAndShowModal(report, history, fullName, riskCategory, trend, avgRisk) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <header class="modal-header">
                    <h2>${fullName} (${report.asset}) Risk Analysis</h2>
                    <button class="close-btn" aria-label="Close modal">&times;</button>
                </header>
                
                <div class="modal-body">
                    <div class="current-risk">
                        <div class="risk-score ${riskCategory}">${report.riskLevel}%</div>
                        <span class="risk-badge ${riskCategory}">${riskCategory} Risk</span>
                    </div>
                    
                    <div class="risk-trend">
                        <h3>7-Day Risk Trend ${trend.icon}</h3>
                        <div class="trend-info">
                            <span class="trend-text ${trend.class}">${trend.text}</span>
                            <span class="trend-change ${trend.class}">${trend.change}</span>
                        </div>
                        <div class="avg-risk">7-day average: ${avgRisk}%</div>
                    </div>
                    
                    <div class="risk-history">
                        <h3>Risk Performance (Last 7 Days)</h3>
                        <div class="history-chart">
                            ${history.map((risk, index) => `
                                <div class="history-bar">
                                    <div class="bar ${RiskAnalyzer.getRiskCategory(risk)}" 
                                         style="height: ${risk}%" 
                                         title="${dayLabels[index]}: ${risk}%">
                                    </div>
                                    <span class="day-label">${dayLabels[index].split(' ')[0]}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="risk-details">
                        <h3>Current Assessment</h3>
                        <p>${report.reason}</p>
                        <time>Last updated: ${this.formatTimestamp(report.timestamp)}</time>
                    </div>
                </div>
            </div>
        `;
        
        // Add event listeners
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('close-btn')) {
                this.closeModal(modal);
            }
        });
        
        document.addEventListener('keydown', function escapeHandler(e) {
            if (e.key === 'Escape') {
                this.closeModal(modal);
                document.removeEventListener('keydown', escapeHandler);
            }
        }.bind(this));
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
    }

    /**
     * Close modal
     */
    closeModal(modal) {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    }
}

// ============================================================================
// APPLICATION INITIALIZATION
// ============================================================================

// Global instances
let riskDataManager;
let dashboardRenderer;

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    try {
        console.log('🌐 Initializing RiskLens system...');
        
        // Initialize data manager
        riskDataManager = new RiskDataManager();
        await riskDataManager.initialize();
        
        // Initialize dashboard renderer
        dashboardRenderer = new DashboardRenderer(riskDataManager);
        dashboardRenderer.initialize();
        
        // Render dashboard with data from 0G storage
        await dashboardRenderer.renderDashboard();
        
        // Simulate real-time updates every 30 seconds
        setInterval(async () => {
            console.log('\n🔄 Processing real-time risk assessment update...');
            
            // Update one random asset
            const randomAsset = riskReports[Math.floor(Math.random() * riskReports.length)];
            const fluctuation = (Math.random() - 0.5) * 16;
            let newRiskLevel = randomAsset.riskLevel + fluctuation;
            newRiskLevel = Math.max(0, Math.min(100, Math.round(newRiskLevel)));
            
            try {
                await riskDataManager.updateRiskData(
                    randomAsset.asset, 
                    newRiskLevel, 
                    randomAsset.reason
                );
                
                // Re-render dashboard with updated data
                await dashboardRenderer.renderDashboard();
                
            } catch (error) {
                console.error('❌ Failed to update risk data:', error);
            }
        }, 30000);
        
        console.log('✅ RiskLens system operational with 0G storage integration');
        
    } catch (error) {
        console.error('❌ Failed to initialize dashboard:', error);
    }
});