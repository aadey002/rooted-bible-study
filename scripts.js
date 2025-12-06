/* WISDOM Bible Study - Interactive Features
   ========================================= */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initBackToTop();
    initProgressTracking();
    initCollapsibles();
    initSmoothScroll();
    initMobileMenu();
    initNotesFeature();
});

/* Scroll Animations
   ================= */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
}

/* Back to Top Button
   ================== */
function initBackToTop() {
    // Create button if it doesn't exist
    let backToTop = document.querySelector('.back-to-top');
    if (!backToTop) {
        backToTop = document.createElement('button');
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = `
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M18 15l-6-6-6 6"/>
            </svg>
        `;
        backToTop.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(backToTop);
    }

    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* Progress Tracking System
   ======================== */
function initProgressTracking() {
    const STORAGE_KEY = 'wisdom_progress';

    // Get saved progress
    function getProgress() {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {
            completedWeeks: [],
            currentWeek: 1,
            notes: {}
        };
    }

    // Save progress
    function saveProgress(progress) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }

    // Mark week as complete
    window.markWeekComplete = function(weekNumber) {
        const progress = getProgress();
        if (!progress.completedWeeks.includes(weekNumber)) {
            progress.completedWeeks.push(weekNumber);
            progress.currentWeek = Math.max(...progress.completedWeeks) + 1;
            if (progress.currentWeek > 5) progress.currentWeek = 5;
            saveProgress(progress);
            updateProgressUI();
            showCompletionMessage(weekNumber);
        }
    };

    // Toggle week completion
    window.toggleWeekComplete = function(weekNumber) {
        const progress = getProgress();
        const index = progress.completedWeeks.indexOf(weekNumber);
        if (index > -1) {
            progress.completedWeeks.splice(index, 1);
        } else {
            progress.completedWeeks.push(weekNumber);
        }
        progress.currentWeek = progress.completedWeeks.length > 0
            ? Math.max(...progress.completedWeeks) + 1
            : 1;
        if (progress.currentWeek > 5) progress.currentWeek = 5;
        saveProgress(progress);
        updateProgressUI();
    };

    // Check if week is complete
    window.isWeekComplete = function(weekNumber) {
        const progress = getProgress();
        return progress.completedWeeks.includes(weekNumber);
    };

    // Get completion percentage
    window.getCompletionPercentage = function() {
        const progress = getProgress();
        return (progress.completedWeeks.length / 5) * 100;
    };

    // Update UI elements
    function updateProgressUI() {
        const progress = getProgress();
        const percentage = getCompletionPercentage();

        // Update progress bar if exists
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.width = percentage + '%';
        }

        // Update progress text if exists
        const progressText = document.querySelector('.progress-text');
        if (progressText) {
            progressText.textContent = `${progress.completedWeeks.length} of 5 weeks completed`;
        }

        // Update week indicators
        document.querySelectorAll('.week-indicator').forEach((indicator, index) => {
            const weekNum = index + 1;
            indicator.classList.remove('completed', 'current', 'upcoming');
            if (progress.completedWeeks.includes(weekNum)) {
                indicator.classList.add('completed');
                indicator.innerHTML = '✓';
            } else if (weekNum === progress.currentWeek) {
                indicator.classList.add('current');
                indicator.textContent = weekNum;
            } else {
                indicator.classList.add('upcoming');
                indicator.textContent = weekNum;
            }
        });

        // Update mark complete buttons
        document.querySelectorAll('.mark-complete-btn').forEach(btn => {
            const weekNum = parseInt(btn.dataset.week);
            if (progress.completedWeeks.includes(weekNum)) {
                btn.classList.add('completed');
                btn.innerHTML = '<svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Completed';
            } else {
                btn.classList.remove('completed');
                btn.innerHTML = '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg> Mark Complete';
            }
        });
    }

    // Show completion message
    function showCompletionMessage(weekNumber) {
        const message = document.createElement('div');
        message.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-fade-in';
        message.innerHTML = `<span class="font-semibold">Week ${weekNumber} completed!</span> Keep up the great work!`;
        document.body.appendChild(message);

        setTimeout(() => {
            message.style.opacity = '0';
            message.style.transition = 'opacity 0.3s ease';
            setTimeout(() => message.remove(), 300);
        }, 3000);
    }

    // Initialize UI on page load
    updateProgressUI();

    // Create progress tracker widget if container exists
    const progressContainer = document.querySelector('#progress-tracker');
    if (progressContainer) {
        const progress = getProgress();
        progressContainer.innerHTML = `
            <div class="progress-tracker">
                <h3 class="font-cinzel text-lg font-bold text-brown-dark mb-4">Your Progress</h3>
                <div class="progress-container mb-3">
                    <div class="progress-bar" style="width: ${getCompletionPercentage()}%"></div>
                </div>
                <p class="progress-text text-sm text-brown-accent mb-4">${progress.completedWeeks.length} of 5 weeks completed</p>
                <div class="flex justify-between">
                    ${[1,2,3,4,5].map(w => `
                        <div class="week-indicator ${progress.completedWeeks.includes(w) ? 'completed' : w === progress.currentWeek ? 'current' : 'upcoming'}">
                            ${progress.completedWeeks.includes(w) ? '✓' : w}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

/* Collapsible Sections
   ==================== */
function initCollapsibles() {
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = content.classList.contains('open');

            // Close all others (accordion behavior)
            document.querySelectorAll('.collapsible-content.open').forEach(c => {
                if (c !== content) {
                    c.classList.remove('open');
                    c.previousElementSibling.classList.remove('active');
                }
            });

            // Toggle current
            content.classList.toggle('open');
            header.classList.toggle('active');
        });
    });
}

/* Smooth Scroll
   ============= */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('nav')?.offsetHeight || 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* Mobile Menu
   =========== */
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            overlay?.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });

        overlay?.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            overlay.classList.remove('open');
            document.body.style.overflow = '';
        });
    }
}

/* Notes Feature
   ============= */
function initNotesFeature() {
    const NOTES_KEY = 'wisdom_notes';

    // Get all notes
    function getNotes() {
        const saved = localStorage.getItem(NOTES_KEY);
        return saved ? JSON.parse(saved) : {};
    }

    // Save note for a week
    window.saveNote = function(weekNumber, content) {
        const notes = getNotes();
        notes[weekNumber] = content;
        localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
        showSaveConfirmation();
    };

    // Get note for a week
    window.getNote = function(weekNumber) {
        const notes = getNotes();
        return notes[weekNumber] || '';
    };

    // Show save confirmation
    function showSaveConfirmation() {
        const existing = document.querySelector('.save-confirmation');
        if (existing) existing.remove();

        const confirmation = document.createElement('div');
        confirmation.className = 'save-confirmation fixed bottom-20 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50';
        confirmation.textContent = 'Notes saved!';
        document.body.appendChild(confirmation);

        setTimeout(() => {
            confirmation.style.opacity = '0';
            confirmation.style.transition = 'opacity 0.3s ease';
            setTimeout(() => confirmation.remove(), 300);
        }, 2000);
    }

    // Initialize note textareas
    document.querySelectorAll('.notes-textarea').forEach(textarea => {
        const weekNum = parseInt(textarea.dataset.week);
        if (weekNum) {
            textarea.value = getNote(weekNum);

            // Auto-save on blur
            textarea.addEventListener('blur', () => {
                saveNote(weekNum, textarea.value);
            });

            // Auto-save on typing (debounced)
            let saveTimeout;
            textarea.addEventListener('input', () => {
                clearTimeout(saveTimeout);
                saveTimeout = setTimeout(() => {
                    saveNote(weekNum, textarea.value);
                }, 1000);
            });
        }
    });
}

/* Social Sharing
   ============== */
window.shareOnFacebook = function(url, title) {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
};

window.shareOnTwitter = function(url, title) {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
};

window.shareOnWhatsApp = function(url, title) {
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`;
    window.open(shareUrl, '_blank');
};

window.shareByEmail = function(url, title) {
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent('Check out this Bible study: ' + url)}`;
    window.location.href = mailtoUrl;
};

/* Utility Functions
   ================= */
// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
