// Data for Solutions
const solutions = [
  {
    icon: "🔍",
    title: "FactForge",
    desc: "Crowdsourced fact-verification using cryptographic timestamping and AI.",
    color: "orange"
  },
  {
    icon: "🗺️",
    title: "CrisisMap",
    desc: "Real-time community-powered hazard and disaster reporting platform.",
    color: "red"
  },
  {
    icon: "🔐",
    title: "DataVault",
    desc: "End-to-end encrypted personal data vault with user sovereignty.",
    color: "emerald"
  }
];

// Render Solutions
function renderSolutions() {
  const container = document.getElementById('solutions-grid');
  container.innerHTML = solutions.map(s => `
    <div class="bg-gray-800 rounded-3xl p-8 hover:scale-105 transition demo-box">
      <div class="text-4xl mb-6">${s.icon}</div>
      <h3 class="text-2xl font-semibold mb-3">${s.title}</h3>
      <p class="text-gray-400">${s.desc}</p>
    </div>
  `).join('');
}

// Live Demo Function
function runVerification() {
  const input = document.getElementById('demoInput').value.trim();
  const resultDiv = document.getElementById('result');

  if (!input) {
    alert("Please enter a URL or headline to verify.");
    return;
  }

  resultDiv.classList.remove('hidden');
  resultDiv.innerHTML = `
    <div class="flex items-center gap-3 text-green-400 mb-6">
      <i class="fas fa-shield-alt text-3xl"></i>
      <h3 class="text-2xl font-semibold">Verification Successful</h3>
    </div>
    <p><strong>Status:</strong> <span class="text-green-400">Authentic</span></p>
    <p><strong>Timestamp:</strong> 2026-06-05 14:32:19 UTC (Blockchain Anchored)</p>
    <p><strong>Confidence Score:</strong> <span class="font-bold text-green-400">96%</span></p>
    <p><strong>Hash:</strong> sha256:8f3a9c...b2e7d4f1</p>
    <p class="mt-4 text-gray-400">This content matches multiple trusted archives and has not been tampered with.</p>
  `;
}

// Scroll Function
function scrollToDemo() {
  document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderSolutions();
});