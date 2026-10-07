// ============================================================================
// PORTAL CONFIGURATION
// EDIT ONLY THE PORTALS ARRAY BELOW.
// DO NOT EDIT index.html TO ADD A PORTAL.
// ============================================================================
//
// SUPPORTED PORTAL TYPES:
//
// 1. NORMAL PORTAL:
//    Uses guidelineLink + portalLink
//    Renders: "Guidelines" text link and "Proceed →" primary button
//    Example:
//    {
//      name: "Faculty-Events Management Portal",
//      description: "Generate event brochure, submit for approval and download event report.",
//      icon: "calendar",
//      guidelineLink: "PASTE GUIDELINE URL HERE",
//      portalLink: "PASTE PORTAL LOGIN URL HERE"
//    }
//
// 2. ROLE-BASED PORTAL (Faculty / Student):
//    Uses facultyLink + studentLink
//    Renders: "Faculty" secondary button and "Student" primary button
//    (Does NOT show Guidelines/Proceed on this type of card)
//    Example:
//    {
//      name: "Project Review Schedule Look Up",
//      description: "Quick lookup of your review date, time, panel and venue.",
//      icon: "search",
//      facultyLink: "PASTE FACULTY URL HERE",
//      studentLink: "PASTE STUDENT URL HERE"
//    }
//
// AVAILABLE ICONS:
// 'calendar', 'file-text', 'users', 'shield', 'search', 'clipboard'
// ============================================================================

const portals = [
  // 1. Faculty-Events Management Portal
  {
    name: "Faculty-Events Management Portal",
    description: "Generate event brochure, submit for approval and download event report.",
    icon: "calendar",
    guidelineLink: "https://google.com",
    portalLink: "https://google.com"
  },
  // 2. LaTeX Project Report Preparation Portal
  {
    name: "LaTeX Project Report Preparation Portal",
    description: "Code, compile and get ready with your LaTeX project report.",
    icon: "file-text",
    guidelineLink: "https://google.com",
    portalLink: "https://google.com"
  },
  // 3. Project Self Group Formation Portal
  /*{
    name: "Project Self Group Formation Portal",
    description: "Identify, select and confirm your team members.",
    icon: "users",
    guidelineLink: "https://google.com",
    portalLink: "https://google.com"
  },
  // 4. LaTeX Project Report Approval Portal
  {
    name: "LaTeX Project Report Approval Portal",
    description: "Submit, compile, and review project reports without the clutter.",
    icon: "shield",
    guidelineLink: "https://google.com",
    portalLink: "https://google.com"
  },
  // 5. Project Review Schedule Look Up (Role-Based: Faculty / Student)
  {
    name: "Project Review Schedule Look Up",
    description: "Quick lookup of your review date, time, panel and venue.",
    icon: "search",
    facultyLink: "https://google.com",
    studentLink: "https://google.com"
  },
  // 6. ReCAT Application Submission Portal
  {
    name: "ReCAT Application Submission Portal",
    description: "Apply and submit with proof.",
    icon: "clipboard",
    guidelineLink: "https://google.com",
    portalLink: "https://google.com"
  }*/
];

// SVG Icon Library
const portalIcons = {
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>
    <path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>
  </svg>`,

  'file-text': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>
    <path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
  </svg>`,

  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>`,

  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>`,

  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>`,

  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>
  </svg>`,

  default: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>`
};

function escapeHtml(string) {
  if (!string) return '';
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Ensure initial scroll position starts strictly at the top on load
if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

function resetScrollPosition() {
  if (typeof document !== 'undefined') {
    const scrollContainer = document.getElementById('portals-scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }
}

function renderPortalCards() {
  const container = document.getElementById('portal-cards-container');
  if (!container) return;

  container.innerHTML = portals.map(portal => {
    const iconSvg = portalIcons[portal.icon] || portalIcons.default;
    const isRoleBased = Boolean(portal.facultyLink || portal.studentLink);

    let actionsHtml = '';
    if (isRoleBased) {
      actionsHtml = `
        <div class="schedule-actions-row">
          <a href="${escapeHtml(portal.facultyLink || '#')}" class="btn-faculty" aria-label="Faculty Review Schedule Lookup">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="5"/>
              <path d="M20 21a8 8 0 0 0-16 0"/>
            </svg>
            <span>Faculty</span>
          </a>
          <a href="${escapeHtml(portal.studentLink || '#')}" class="btn-student" aria-label="Student Review Schedule Lookup">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
              <path d="M22 10v6"/>
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
            </svg>
            <span>Student</span>
          </a>
        </div>
      `;
    } else {
      actionsHtml = `
        <div class="card-actions-bar">
          <a href="${escapeHtml(portal.guidelineLink || '#')}" class="link-guidelines">Guidelines</a>
          <a href="${escapeHtml(portal.portalLink || '#')}" class="btn-proceed" aria-label="Proceed to ${escapeHtml(portal.name)}">
            <span>Proceed</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      `;
    }

    return `
      <article class="portal-card">
        <div>
          <div class="card-header-row">
            <div class="card-icon-box">
              ${iconSvg}
            </div>
            <h2 class="card-title">${escapeHtml(portal.name)}</h2>
          </div>
          <p class="card-description">${escapeHtml(portal.description)}</p>
        </div>
        ${actionsHtml}
      </article>
    `;
  }).join('');

  resetScrollPosition();
}

// Optional: expose on window for browser console access
if (typeof window !== 'undefined') {
  window.portals = portals;
  window.renderPortalCards = renderPortalCards;
}

// Render on page load
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      renderPortalCards();
      resetScrollPosition();
    });
  } else {
    renderPortalCards();
    resetScrollPosition();
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('load', resetScrollPosition);
}

