// Sample data
const events = [
    { id: 1, name: "CodeRush", date: "2025-03-15", time: "10:00 AM" },
    { id: 2, name: "QuizMania", date: "2025-03-15", time: "2:00 PM" },
];

const announcements = [
    { text: "CodeRush registration opens tomorrow!", date: "2025-03-07" }
];

const quizQuestions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: "Delhi"
    }
];

// Event Listing
function loadEvents() {
    const container = document.getElementById('events-container');
    if (container) {
        container.innerHTML = events.map(event => `
            <div>
                <h3>${event.name}</h3>
                <p>Date: ${event.date} | Time: ${event.time}</p>
            </div>
        `).join('');
    }
}

// Announcements
function loadAnnouncements() {
    const list = document.getElementById('announcement-list');
    if (list) {
        list.innerHTML = announcements.map(ann => `
            <p>${ann.text} - ${ann.date}</p>
        `).join('');
    }
}

// Registration
function setupRegistration() {
    const form = document.getElementById('registration-form');
    const select = document.getElementById('event-select');
    
    if (select) {
        events.forEach(event => {
            const option = document.createElement('option');
            option.value = event.id;
            option.textContent = event.name;
            select.appendChild(option);
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Registration successful!');
            form.reset();
        });
    }
}

// Quiz
function loadQuiz() {
    const container = document.getElementById('quiz-questions');
    const submitBtn = document.getElementById('submit-quiz');
    
    if (container) {
        container.innerHTML = quizQuestions.map((q, i) => `
            <div>
                <p>${q.question}</p>
                ${q.options.map(opt => `
                    <label>
                        <input type="radio" name="q${i}" value="${opt}">
                        ${opt}
                    </label><br>
                `).join('')}
            </div>
        `).join('');
        submitBtn.style.display = 'block';
        
        submitBtn.addEventListener('click', () => {
            alert('Quiz submitted!');
        });
    }
}

// Dashboard
function loadDashboard() {
    const eventsDiv = document.getElementById('registered-events');
    const scoresDiv = document.getElementById('quiz-scores');
    
    if (eventsDiv && scoresDiv) {
        eventsDiv.innerHTML = '<h3>Registered Events</h3>' + events.map(e => `<p>${e.name}</p>`).join('');
        scoresDiv.innerHTML = '<h3>Quiz Scores</h3><p>QuizMania: 85%</p>';
    }
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('announcement-list')) loadAnnouncements();
    if (document.getElementById('events-container')) loadEvents();
    if (document.getElementById('registration-form')) setupRegistration();
    if (document.getElementById('quiz-questions')) loadQuiz();
    if (document.getElementById('registered-events')) loadDashboard();
});
