// ---------- SERVICES LIST (MATCHES links.json) ----------
const services = [
    { id: 'microsoft', name: 'Microsoft', desc: 'Official Microsoft Account portal.', icon: 'fa-building' },
    { id: 'azure', name: 'Azure', desc: 'Build, deploy, and manage cloud applications.', icon: 'fa-cloud' },
    { id: 'imaginecup', name: 'Imagine Cup', desc: 'Global student innovation competition.', icon: 'fa-trophy' },
    { id: 'fabric-blog', name: 'Fabric Blog', desc: 'Latest updates from Microsoft Fabric.', icon: 'fa-newspaper' },
    { id: 'learn', name: 'Microsoft Learn', desc: 'Free learning paths and certifications.', icon: 'fa-graduation-cap' },
    { id: 'learn-copilot', name: 'Learn Copilot', desc: 'Master AI productivity with Copilot.', icon: 'fa-robot' },
    { id: 'fabric-community', name: 'Fabric Community', desc: 'Join discussions and forums.', icon: 'fa-users' },
    { id: 'cloud-blog', name: 'Microsoft Cloud Blog', desc: 'Insights on cloud technology.', icon: 'fa-globe' },
    { id: 'microsoft-fabric', name: 'Microsoft Fabric', desc: 'Unified data analytics platform.', icon: 'fa-database' },
    { id: 'startups', name: 'Microsoft for Startups', desc: 'Resources and support for startups.', icon: 'fa-rocket' },
    { id: 'developer', name: 'Developer Portal', desc: 'Tools and resources for developers.', icon: 'fa-code' },
    { id: 'devblogs', name: 'Dev Blogs', desc: 'Official Microsoft developer blogs.', icon: 'fa-blog' },
    { id: 'dotnet', name: '.NET Platform', desc: 'Build modern applications with .NET.', icon: 'fa-layer-group' },
    { id: 'mvp', name: 'MVP Program', desc: 'Community leader recognition program.', icon: 'fa-star' },
    { id: 'events', name: 'Microsoft Events', desc: 'Upcoming Microsoft tech events.', icon: 'fa-calendar' },
    { id: 'reactor', name: 'Microsoft Reactor', desc: 'Developer community events and workshops.', icon: 'fa-bolt' },
    { id: 'foundershub', name: 'Founders Hub', desc: 'Startup benefits and Azure credits.', icon: 'fa-lightbulb' },
    { id: 'techcommunity', name: 'Tech Community', desc: 'Collaborate with Microsoft professionals.', icon: 'fa-comments' },
    { id: 'vscode', name: 'Visual Studio Code', desc: 'Lightweight powerful code editor.', icon: 'fa-laptop-code' }
];


// ---------- LOAD SERVICES ----------
async function loadHub() {
    try {
        const res = await fetch("links.json");

        if (!res.ok) throw new Error("links.json not found");

        const links = await res.json();
        const grid = document.getElementById("servicesGrid");

        if (!grid) return;

        grid.innerHTML = services.map(s => `
            <div class="card" data-name="${s.name.toLowerCase()}">
                <i class="fas ${s.icon} fa-2x"></i>
                <h3>${s.name}</h3>
                <p>${s.desc}</p>
                <a href="${links[s.id] || '#'}"
                   class="btn-ms"
                   target="_blank"
                   rel="noopener">
                   Get Started
                </a>
            </div>
        `).join("");

    } catch (err) {
        console.error("Failed to load services:", err);
    }
}


// ---------- SEARCH ----------
const searchInput = document.getElementById("search");

if (searchInput) {
    searchInput.addEventListener("input", e => {
        const val = e.target.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card => {
            card.style.display = card.dataset.name.includes(val)
                ? "block"
                : "none";
        });
    });
}


// Dark mode toggling removed — site forces dark theme via HTML attribute


// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", loadHub);