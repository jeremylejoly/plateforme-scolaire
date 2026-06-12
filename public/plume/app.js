/* 
   ==========================================================================
   JAVASCRIPT LOGIC: Plume en Main - L'Atelier d'Écriture P5-P6
   Handles SPA navigation, localStorage synchronization, and "4 Lunettes" highlighting.
   ========================================================================== 
*/

// Application State
const state = {
  currentCycle: null,    // "A" (P5) or "B" (P6)
  currentProject: null,  // Project object from CYCLE_DATA
  activeGlasses: {
    lecteur: false,
    architecte: false,
    policier: false,
    detective: false
  }
};

// DOM Elements
const elements = {
  welcomeScreen: document.getElementById("screen-welcome"),
  dashboardScreen: document.getElementById("screen-dashboard"),
  workshopScreen: document.getElementById("screen-workshop"),
  
  cycleTitle: document.getElementById("cycle-title"),
  cycleSubtitle: document.getElementById("cycle-subtitle"),
  progressText: document.getElementById("progress-text"),
  progressBarFill: document.getElementById("progress-bar-fill"),
  projectsGrid: document.getElementById("projects-grid"),
  
  btnBackToCycles: document.getElementById("btn-back-to-cycles"),
  btnBackToDashboard: document.getElementById("btn-back-to-dashboard"),
  
  // Workshop specific
  workshopTitle: document.getElementById("workshop-title"),
  workshopIntention: document.getElementById("workshop-intention"),
  workshopTextType: document.getElementById("workshop-type"),
  workshopObjective: document.getElementById("workshop-objective"),
  modelTextContent: document.getElementById("model-text-content"),
  vocabGrid: document.getElementById("vocab-grid"),
  grammarBoxRule: document.getElementById("grammar-box-rule"),
  planningPromptText: document.getElementById("planning-prompt-text"),
  planningTextarea: document.getElementById("planning-textarea"),
  writingPromptText: document.getElementById("writing-prompt-text"),
  writingTextarea: document.getElementById("writing-textarea"),
  editorBackdrop: document.getElementById("editor-backdrop"),
  checklistContainer: document.getElementById("checklist-container"),
  
  // Glasses Buttons
  btnGlassLecteur: document.getElementById("btn-glass-lecteur"),
  btnGlassArchitecte: document.getElementById("btn-glass-architecte"),
  btnGlassPolicier: document.getElementById("btn-glass-policier"),
  btnGlassDetective: document.getElementById("btn-glass-detective"),
  btnHelpGlasses: document.getElementById("btn-help-glasses"),
  
  // General Actions
  btnExport: document.getElementById("btn-export"),
  btnPrint: document.getElementById("btn-print"),
  
  // Printing placeholders
  printProjectTitle: document.getElementById("print-project-title"),
  printCycle: document.getElementById("print-cycle"),
  printStudentName: document.getElementById("print-student-name"),
  
  // Modals
  helpModal: document.getElementById("help-modal"),
  btnModalClose: document.getElementById("btn-modal-close"),
  btnModalOk: document.getElementById("btn-modal-ok")
};

// Init Event Listeners on Load
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupEditorSync();
  setupGlasses();
  setupActions();
  loadAppState();
});

// Setup App Navigation
function setupNavigation() {
  // Cycle selection buttons
  document.getElementById("btn-cycle-a").addEventListener("click", () => enterCycle("A"));
  document.getElementById("btn-cycle-b").addEventListener("click", () => enterCycle("B"));
  
  // Back buttons
  elements.btnBackToCycles.addEventListener("click", () => {
    state.currentCycle = null;
    saveAppState();
    showScreen(elements.welcomeScreen);
  });
  
  elements.btnBackToDashboard.addEventListener("click", () => {
    state.currentProject = null;
    saveAppState();
    renderDashboard();
    showScreen(elements.dashboardScreen);
  });
}

// Show specific screen helper
function showScreen(screenEl) {
  [elements.welcomeScreen, elements.dashboardScreen, elements.workshopScreen].forEach(el => {
    el.classList.add("hidden");
  });
  screenEl.classList.remove("hidden");
  window.scrollTo(0, 0);
}

// Enter Year A or Year B cycle
function enterCycle(cycleId) {
  state.currentCycle = cycleId;
  saveAppState();
  renderDashboard();
  showScreen(elements.dashboardScreen);
}

// Save & Load state to persist across reloads
function saveAppState() {
  localStorage.setItem("plume_app_state", JSON.stringify({
    currentCycle: state.currentCycle,
    currentProjectId: state.currentProject ? state.currentProject.id : null
  }));
}

function loadAppState() {
  const saved = localStorage.getItem("plume_app_state");
  if (saved) {
    const parsed = JSON.parse(saved);
    if (parsed.currentCycle) {
      state.currentCycle = parsed.currentCycle;
      if (parsed.currentProjectId) {
        const projList = CYCLE_DATA[state.currentCycle];
        const proj = projList.find(p => p.id === parsed.currentProjectId);
        if (proj) {
          enterProject(proj);
          return;
        }
      }
      renderDashboard();
      showScreen(elements.dashboardScreen);
      return;
    }
  }
  showScreen(elements.welcomeScreen);
}

// Render Dashboard Screen
function renderDashboard() {
  const cycleName = state.currentCycle === "A" ? "Année A (Niveau P5)" : "Année B (Niveau P6)";
  const cycleDesc = state.currentCycle === "A" 
    ? "Cycle basé sur les attendus de 5ème primaire : structure narrative, descriptive, argumentative simple et prescriptive."
    : "Cycle basé sur les attendus de 6ème primaire : enrichissement lexical, conditionnel, fait divers et intégration du numérique.";
    
  elements.cycleTitle.textContent = cycleName;
  elements.cycleSubtitle.textContent = cycleDesc;
  
  elements.projectsGrid.innerHTML = "";
  
  const projects = CYCLE_DATA[state.currentCycle];
  let completedCount = 0;
  
  projects.forEach((proj, index) => {
    // Check project progress in localStorage
    const savedText = localStorage.getItem(`plume_writing_${proj.id}`) || "";
    const savedChecklist = JSON.parse(localStorage.getItem(`plume_check_${proj.id}`)) || [];
    
    let statusClass = "";
    let statusText = "Pas commencé";
    
    if (savedText.trim().length > 0) {
      const allChecked = savedChecklist.length === proj.successCriteria.length && savedChecklist.every(c => c === true);
      if (allChecked) {
        statusClass = "project-status-done";
        statusText = "Terminé";
        completedCount++;
      } else {
        statusClass = "project-status-started";
        statusText = "En cours";
      }
    }
    
    const card = document.createElement("div");
    card.className = "project-card";
    
    // Customize border and badge colors based on intention
    const intentionSlug = proj.intention.split(" / ")[0].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    card.innerHTML = `
      <div class="project-tag-row">
        <span class="tag-intention tag-${intentionSlug}">${proj.intention}</span>
        <div class="project-status-dot ${statusClass}" title="${statusText}"></div>
      </div>
      <h3 class="project-title">${proj.title}</h3>
      <p class="project-desc">${proj.objective}</p>
      <div class="project-footer">
        <span class="project-type-label">✍️ ${proj.textType}</span>
        <button class="btn-start-project" data-idx="${index}">
          ${savedText ? "Continuer" : "Commencer"} →
        </button>
      </div>
    `;
    
    card.querySelector(".btn-start-project").addEventListener("click", () => {
      enterProject(proj);
    });
    
    elements.projectsGrid.appendChild(card);
  });
  
  // Update progress bar widget
  const pct = Math.round((completedCount / projects.length) * 100);
  elements.progressText.textContent = `${completedCount} / ${projects.length} projet(s) terminés (${pct}%)`;
  elements.progressBarFill.style.width = `${pct}%`;
}

// Enter Workshop for a specific project
function enterProject(project) {
  state.currentProject = project;
  saveAppState();
  
  // Fill text headers
  elements.workshopTitle.textContent = project.title;
  elements.workshopIntention.textContent = project.intention;
  
  // Style Intention Tag on Workshop Header
  const intentionSlug = project.intention.split(" / ")[0].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  elements.workshopIntention.className = `tag-intention tag-${intentionSlug}`;
  
  elements.workshopTextType.textContent = project.textType;
  elements.workshopObjective.textContent = project.objective;
  
  // Render model text
  elements.modelTextContent.innerHTML = project.modelText;
  
  // Render vocab badges
  elements.vocabGrid.innerHTML = "";
  project.vocabulary.forEach(word => {
    const badge = document.createElement("span");
    badge.className = "vocab-badge";
    badge.textContent = word;
    elements.vocabGrid.appendChild(badge);
  });
  
  // Render grammar card and prompts
  elements.grammarBoxRule.innerHTML = project.grammarRule;
  elements.planningPromptText.textContent = project.planningPrompt;
  elements.writingPromptText.textContent = project.writingPrompt;
  
  // Load saved inputs
  elements.planningTextarea.value = localStorage.getItem(`plume_plan_${project.id}`) || "";
  elements.writingTextarea.value = localStorage.getItem(`plume_writing_${project.id}`) || "";
  
  // Load & render checklist
  const savedChecklist = JSON.parse(localStorage.getItem(`plume_check_${project.id}`)) || new Array(project.successCriteria.length).fill(false);
  renderChecklist(project.successCriteria, savedChecklist);
  
  // Initialize editor highlight overlays
  resetGlasses();
  handleEditorInput();
  
  showScreen(elements.workshopScreen);
}

// Render success criteria checkboxes
function renderChecklist(criteria, values) {
  elements.checklistContainer.innerHTML = "";
  
  criteria.forEach((text, idx) => {
    const label = document.createElement("label");
    label.className = "checklist-item";
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checklist-checkbox";
    checkbox.checked = values[idx] || false;
    
    checkbox.addEventListener("change", () => {
      values[idx] = checkbox.checked;
      localStorage.setItem(`plume_check_${state.currentProject.id}`, JSON.stringify(values));
    });
    
    const textSpan = document.createElement("span");
    textSpan.textContent = text;
    
    label.appendChild(checkbox);
    label.appendChild(textSpan);
    elements.checklistContainer.appendChild(label);
  });
}

// Sync Editor Textarea with Backdrop Overlay
function setupEditorSync() {
  const textarea = elements.writingTextarea;
  const backdrop = elements.editorBackdrop;
  
  // Sync scrolling
  textarea.addEventListener("scroll", () => {
    backdrop.scrollTop = textarea.scrollTop;
    backdrop.scrollLeft = textarea.scrollLeft;
  });
  
  // Sync and process text on typing
  textarea.addEventListener("input", () => {
    handleEditorInput();
    
    // Autosave text
    if (state.currentProject) {
      localStorage.setItem(`plume_writing_${state.currentProject.id}`, textarea.value);
    }
  });
  
  // Autosave planning text
  elements.planningTextarea.addEventListener("input", () => {
    if (state.currentProject) {
      localStorage.setItem(`plume_plan_${state.currentProject.id}`, elements.planningTextarea.value);
    }
  });
}

// Text analysis and highlight formatting
function handleEditorInput() {
  const text = elements.writingTextarea.value;
  
  // 1. Update word counter
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  document.getElementById("word-count-num").textContent = words;
  
  // 2. Render highlights in backdrop
  elements.editorBackdrop.innerHTML = highlightText(text);
  
  // Sync backdrop dimensions and scrolls
  elements.editorBackdrop.scrollTop = elements.writingTextarea.scrollTop;
  elements.editorBackdrop.scrollLeft = elements.writingTextarea.scrollLeft;
}

// Escape html helpers
function escapeHTML(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Core text highlighting engine
function highlightText(text) {
  if (!text) return "";
  
  // Escape user inputs to prevent HTML rendering issues
  let escaped = escapeHTML(text);
  
  // If no glasses are active, just render the plain text with safe layout line breaks
  if (!state.activeGlasses.lecteur && 
      !state.activeGlasses.architecte && 
      !state.activeGlasses.policier && 
      !state.activeGlasses.detective) {
    return escaped + (escaped.endsWith('\n') ? '\n' : '');
  }
  
  // Apply Highlights based on active glasses
  
  // 👓 1. LECTEUR - Pronouns highlighting to verify repetitions
  if (state.activeGlasses.lecteur) {
    const pronounsRegex = /\b(il|elle|ils|elles|le|la|les|lui|leur|en|y|ceux|celles|celui|celle|ce|cet|cette|ces)\b/gi;
    escaped = escaped.replace(pronounsRegex, '<span class="hl-lecteur">$1</span>');
  }
  
  // 👓 2. ARCHITECTE - Connectors highlighting
  if (state.activeGlasses.architecte) {
    const connectors = [
      "d'abord", "d’abord", "ensuite", "puis", "enfin", "car", "parce que", "parce qu’", "parce qu'",
      "donc", "par conséquent", "par conséquent", "mais", "cependant", "néanmoins", "néanmoins",
      "de plus", "puisque", "comme", "alors", "c'est pourquoi", "c’est pourquoi", "en effet"
    ];
    
    // Build a regex search matching any of these connector expressions
    const connRegex = new RegExp(`\\b(${connectors.join('|')})\\b`, 'gi');
    escaped = escaped.replace(connRegex, '<span class="hl-architecte">$1</span>');
  }
  
  // 👓 3. POLICIER - Punctuation points and checking capital letters
  if (state.activeGlasses.policier) {
    // Highlight punctuation marks
    const punctRegex = /([.!?…,:;—])/g;
    escaped = escaped.replace(punctRegex, '<span class="hl-policier">$1</span>');
    
    // Highlight lower-case letters immediately following a period (plus spacing) to indicate a missing capital
    const missingCapRegex = /(\.\s+)([a-zàéèùâêîôûëïüç])/g;
    escaped = escaped.replace(missingCapRegex, '$1<span class="hl-policier" style="border: 2px solid #ef4444; border-radius: 4px; padding: 0 2px;">$2</span>');
  }
  
  // 👓 4. DÉTECTIVE - Homophones and verb endings
  if (state.activeGlasses.detective) {
    // Highlight common FWB homophones (a/à, ou/où, se/ce, ces/ses/c'est/s'est, et/est, son/sont, on/ont)
    const homophonesRegex = /\b(a|à|ou|où|se|ce|ces|ses|c'est|c’est|s'est|s’est|et|est|son|sont|on|ont)\b/gi;
    escaped = escaped.replace(homophonesRegex, '<span class="hl-detective">$1</span>');
    
    // Highlight verb suffixes -er and -é/-és/-ée/-ées to trigger correct agreement re-reading
    const verbEndingsRegex = /(\w+)(er|é|és|ée|ées)\b/gi;
    escaped = escaped.replace(verbEndingsRegex, '<span class="hl-detective">$1$2</span>');
  }
  
  // Textarea layout consistency hack: must end in newline if input does
  return escaped + (escaped.endsWith('\n') ? '\n' : '');
}

// Handle Glasses button clicks
function setupGlasses() {
  elements.btnGlassLecteur.addEventListener("click", () => toggleGlass("lecteur"));
  elements.btnGlassArchitecte.addEventListener("click", () => toggleGlass("architecte"));
  elements.btnGlassPolicier.addEventListener("click", () => toggleGlass("policier"));
  elements.btnGlassDetective.addEventListener("click", () => toggleGlass("detective"));
  
  // Modal triggers
  elements.btnHelpGlasses.addEventListener("click", () => {
    elements.helpModal.classList.remove("hidden");
  });
  
  elements.btnModalClose.addEventListener("click", hideModal);
  elements.btnModalOk.addEventListener("click", hideModal);
  elements.helpModal.addEventListener("click", (e) => {
    if (e.target === elements.helpModal) hideModal();
  });
}

function hideModal() {
  elements.helpModal.classList.add("hidden");
}

function toggleGlass(glassType) {
  // Toggle states
  state.activeGlasses[glassType] = !state.activeGlasses[glassType];
  
  // Update class styles on buttons
  const buttonMap = {
    lecteur: { btn: elements.btnGlassLecteur, cls: "active-lecteur" },
    architecte: { btn: elements.btnGlassArchitecte, cls: "active-architecte" },
    policier: { btn: elements.btnGlassPolicier, cls: "active-policier" },
    detective: { btn: elements.btnGlassDetective, cls: "active-detective" }
  };
  
  const current = buttonMap[glassType];
  if (state.activeGlasses[glassType]) {
    current.btn.classList.add(current.cls);
  } else {
    current.btn.classList.remove(current.cls);
  }
  
  // Recalculate editor overlays
  handleEditorInput();
}

function resetGlasses() {
  state.activeGlasses = { lecteur: false, architecte: false, policier: false, detective: false };
  elements.btnGlassLecteur.classList.remove("active-lecteur");
  elements.btnGlassArchitecte.classList.remove("active-architecte");
  elements.btnGlassPolicier.classList.remove("active-policier");
  elements.btnGlassDetective.classList.remove("active-detective");
}

// Setup top and bottom bar button actions (Export, print)
function setupActions() {
  // Print button
  elements.btnPrint.addEventListener("click", () => {
    if (!state.currentProject) return;
    
    // Fill placeholders for printing
    elements.printProjectTitle.textContent = state.currentProject.title;
    elements.printCycle.textContent = state.currentCycle === "A" ? "P5" : "P6";
    elements.printStudentName.textContent = prompt("Saisis ton prénom pour la feuille d'impression :") || "Élève";
    
    window.print();
  });
  
  // Export button
  elements.btnExport.addEventListener("click", () => {
    if (!state.currentProject) return;
    
    const proj = state.currentProject;
    const planText = elements.planningTextarea.value;
    const writingText = elements.writingTextarea.value;
    const dateStr = new Date().toLocaleDateString("fr-BE");
    
    // Create text file structure
    let content = `========================================================\n`;
    content += `        FICHE D'ÉCRITURE - PLUME EN MAIN (${proj.id})\n`;
    content += `========================================================\n`;
    content += `Projet : ${proj.title}\n`;
    content += `Date d'export : ${dateStr}\n`;
    content += `Niveau : 5e/6e primaire (Cycle FWB - Année ${state.currentCycle})\n`;
    content += `Intention : ${proj.intention} (${proj.textType})\n\n`;
    
    content += `--------------------------------------------------------\n`;
    content += `1. MON BROUILLON & MA PLANIFICATION\n`;
    content += `--------------------------------------------------------\n`;
    content += planText || "(Rien n'a été saisi pour la planification.)";
    content += `\n\n`;
    
    content += `--------------------------------------------------------\n`;
    content += `2. MON TEXTE RÉDIGÉ\n`;
    content += `--------------------------------------------------------\n`;
    content += writingText || "(Rien n'a été rédigé pour ce projet.)";
    content += `\n\n`;
    
    content += `--------------------------------------------------------\n`;
    content += `3. MON AUTO-ÉVALUATION\n`;
    content += `--------------------------------------------------------\n`;
    
    const savedChecklist = JSON.parse(localStorage.getItem(`plume_check_${proj.id}`)) || [];
    proj.successCriteria.forEach((criteriaText, idx) => {
      const isChecked = savedChecklist[idx] ? "[X]" : "[ ]";
      content += `${isChecked} ${criteriaText}\n`;
    });
    content += `\n========================================================\n`;
    
    // Trigger download
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Plume_Ecriture_${proj.id}_Export.txt`;
    link.click();
  });
}
