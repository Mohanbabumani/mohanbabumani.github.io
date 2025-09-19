// --- MODAL & QUIZ FUNCTIONS (GLOBAL SCOPE) ---

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.classList.add('modal-open');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}

// Quiz Questions Data (Expanded List)
const quizQuestions = [
    // --- Fundamental Questions (7 total) ---
    {
        question: "What phenomenon describes the bending of light as it passes from one medium to another?",
        answers: [
            { text: "Reflection", correct: false }, { text: "Diffraction", correct: false },
            { text: "Refraction", correct: true }, { text: "Dispersion", correct: false }
        ],
        difficulty: "fundamental", source: "https://en.wikipedia.org/wiki/Refraction"
    },
    {
        question: "For a light wave, what is the relationship between its wavelength (λ), frequency (f), and the speed of light (c)?",
        answers: [
            { text: "c = λ / f", correct: false }, { text: "c = f / λ", correct: false },
            { text: "c = λ * f", correct: true }, { text: "c = λ + f", correct: false }
        ],
        difficulty: "fundamental", source: "https://en.wikipedia.org/wiki/Speed_of_light"
    },
    {
        question: "A lens that causes parallel light rays to spread apart is known as a:",
        answers: [
            { text: "Converging or Convex Lens", correct: false },
            { text: "Plano-convex Lens", correct: false },
            { text: "Diverging or Concave Lens", correct: true },
            { text: "Fresnel Lens", correct: false }
        ],
        difficulty: "fundamental", source: "https://en.wikipedia.org/wiki/Lens_(optics)"
    },
    {
        question: "Snell's Law describes the relationship between the angles of incidence/refraction and what other property?",
        answers: [
            { text: "The refractive indices of the media", correct: true }, { text: "The intensity of the light", correct: false },
            { text: "The wavelength of the light", correct: false }, { text: "The polarization of the light", correct: false }
        ],
        difficulty: "fundamental", source: "https://en.wikipedia.org/wiki/Snell%27s_law"
    },
    {
        question: "Which photoreceptor cells in the human eye are responsible for color vision?",
        answers: [
            { text: "Rods", correct: false }, { text: "Cones", correct: true },
            { text: "Ganglion cells", correct: false }, { text: "Bipolar cells", correct: false }
        ],
        difficulty: "fundamental", source: "https://en.wikipedia.org/wiki/Cone_cell"
    },
    {
        question: "In the visible spectrum, which color of light has the longest wavelength?",
        answers: [
            { text: "Blue", correct: false }, { text: "Green", correct: false },
            { text: "Yellow", correct: false }, { text: "Red", correct: true }
        ],
        difficulty: "fundamental", source: "https://en.wikipedia.org/wiki/Visible_spectrum"
    },
    {
        question: "Which of the following is a primary color of light in the additive color model (used in screens)?",
        answers: [
            { text: "Yellow", correct: false }, { text: "Green", correct: true },
            { text: "Magenta", correct: false }, { text: "Cyan", correct: false }
        ],
        difficulty: "fundamental", source: "https://en.wikipedia.org/wiki/Additive_color"
    },
    // --- Intermediate Questions (7 total) ---
    {
        question: "Young's double-slit experiment is a classic demonstration of which wave property of light?",
        answers: [
            { text: "Polarization", correct: false }, { text: "The Photoelectric Effect", correct: false },
            { text: "Interference", correct: true }, { text: "Refraction", correct: false }
        ],
        difficulty: "intermediate", source: "https://en.wikipedia.org/wiki/Young%27s_double-slit_experiment"
    },
    {
        question: "Why does the sky appear blue on a clear day?",
        answers: [
            { text: "The atmosphere absorbs other colors", correct: false }, { text: "Due to thin-film interference", correct: false },
            { text: "Rayleigh scattering of sunlight is stronger for shorter wavelengths", correct: true }, { text: "The Sun's light is naturally blue", correct: false }
        ],
        difficulty: "intermediate", source: "https://en.wikipedia.org/wiki/Rayleigh_scattering"
    },
    {
        question: "The minimum resolvable detail of an imaging system is fundamentally limited by:",
        answers: [
            { text: "The Pockels Effect", correct: false }, { text: "Chromatic Aberration", correct: false },
            { text: "The Diffraction Limit", correct: true }, { text: "Spherical Aberration", correct: false }
        ],
        difficulty: "intermediate", source: "https://en.wikipedia.org/wiki/Diffraction-limited_system"
    },
    {
        question: "What property of a light wave is described by the orientation of its oscillations?",
        answers: [
            { text: "Frequency", correct: false }, { text: "Wavelength", correct: false },
            { text: "Amplitude", correct: false }, { text: "Polarization", correct: true }
        ],
        difficulty: "intermediate", source: "https://en.wikipedia.org/wiki/Polarization_(waves)"
    },
    {
        question: "The iridescent colors seen on a soap bubble are caused by:",
        answers: [
            { text: "Diffraction grating effects", correct: false }, { text: "Thin-film interference", correct: true },
            { text: "Chromatic aberration", correct: false }, { text: "Rayleigh scattering", correct: false }
        ],
        difficulty: "intermediate", source: "https://en.wikipedia.org/wiki/Thin-film_interference"
    },
    {
        question: "An optical component that consists of two parallel, partially reflecting surfaces is known as:",
        answers: [
            { text: "A Michelson Interferometer", correct: false },
            { text: "A Diffraction Grating", correct: false },
            { text: "A Fabry-Pérot Interferometer", correct: true },
            { text: "A Wollaston Prism", correct: false }
        ],
        difficulty: "intermediate", source: "https://en.wikipedia.org/wiki/Fabry%E2%80%93P%C3%A9rot_interferometer"
    },
    {
        question: "The separation of white light into its constituent colors by a prism is known as:",
        answers: [
            { text: "Diffraction", correct: false }, { text: "Dispersion", correct: true },
            { text: "Birefringence", correct: false }, { text: "Scattering", correct: false }
        ],
        difficulty: "intermediate", source: "https://en.wikipedia.org/wiki/Dispersion_(optics)"
    },
    // --- Advanced Questions (7 total) ---
    {
        question: "Which of these concepts is fundamental to the operation of a laser?",
        answers: [
            { text: "Spontaneous Emission", correct: false }, { text: "Black-body Radiation", correct: false },
            { text: "Stimulated Emission", correct: true }, { text: "Compton Scattering", correct: false }
        ],
        difficulty: "advanced", source: "https://en.wikipedia.org/wiki/Stimulated_emission"
    },
    {
        question: "A 'squeezed state' of light is a quantum state where the uncertainty of one quadrature is reduced below what limit?",
        answers: [
            { text: "The Heisenberg Uncertainty Limit", correct: false }, { text: "The Standard Quantum Limit (SQL)", correct: true },
            { text: "The Diffraction Limit", correct: false }, { text: "The Planck Limit", correct: false }
        ],
        difficulty: "advanced", source: "https://en.wikipedia.org/wiki/Squeezed_coherent_state"
    },
    {
        question: "The Pockels effect describes a change in a material's refractive index that is ______ to an applied electric field.",
        answers: [
            { text: "Proportional (Linear)", correct: true },
            { text: "Proportional to the square (Quadratic)", correct: false },
            { text: "Inversely Proportional", correct: false },
            { text: "Unrelated", correct: false }
        ],
        difficulty: "advanced", source: "https://en.wikipedia.org/wiki/Pockels_effect"
    },
    {
        question: "The photoelectric effect, explained by Einstein, demonstrates what quantum property of light?",
        answers: [
            { text: "It behaves only as a wave", correct: false }, { text: "It is composed of particles (photons)", correct: true },
            { text: "Its speed is variable in a vacuum", correct: false }, { text: "It cannot be polarized", correct: false }
        ],
        difficulty: "advanced", source: "https://en.wikipedia.org/wiki/Photoelectric_effect"
    },
    {
        question: "A Bell state is a maximally ______ two-qubit quantum state.",
        answers: [
            { text: "Entangled", correct: true }, { text: "Coherent", correct: false },
            { text: "Squeezed", correct: false }, { text: "Polarized", correct: false }
        ],
        difficulty: "advanced", source: "https://en.wikipedia.org/wiki/Bell_state"
    },
    {
        question: "In an acousto-optic modulator (AOM), how is the frequency of the diffracted light beam shifted?",
        answers: [
            { text: "By the Doppler shift from the traveling acoustic wave", correct: true }, { text: "By changing the refractive index with an electric field", correct: false },
            { text: "By rotating a polarization filter", correct: false }, { text: "By stimulated emission in the crystal", correct: false }
        ],
        difficulty: "advanced", source: "https://en.wikipedia.org/wiki/Acousto-optic_modulator"
    },
    {
        question: "In non-linear optics, what is the process where two photons create a new photon with twice the frequency?",
        answers: [
            { text: "Optical Rectification", correct: false }, { text: "Kerr Effect", correct: false },
            { text: "Raman Scattering", correct: false }, { text: "Second-Harmonic Generation (SHG)", correct: true }
        ],
        difficulty: "advanced", source: "https://en.wikipedia.org/wiki/Second-harmonic_generation"
    }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let incorrectAnswers = [];

function startQuiz(difficulty) {
    const quizStartScreen = document.getElementById('quiz-start-screen');
    const quizQuestionScreen = document.getElementById('quiz-question-screen');
    const quizResultsScreen = document.getElementById('quiz-results-screen');

    currentQuestions = quizQuestions.filter(q => q.difficulty === difficulty).sort(() => Math.random() - 0.5).slice(0, 5); // Now selects 5 questions
    currentQuestionIndex = 0;
    score = 0;
    incorrectAnswers = [];
    quizStartScreen.style.display = 'none';
    quizResultsScreen.style.display = 'none';
    quizQuestionScreen.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('question-counter').innerText = `Question ${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    document.getElementById('question-text').innerText = question.question;
    const answerButtons = document.getElementById('answer-buttons');
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    document.getElementById('next-btn').style.display = 'none';
    const answerButtons = document.getElementById('answer-buttons');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (!isCorrect) {
        incorrectAnswers.push({
            question: currentQuestions[currentQuestionIndex],
            userAnswer: selectedBtn.innerText
        });
    } else {
        score++;
    }
    const answerButtons = document.getElementById('answer-buttons');
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    });
    const nextBtn = document.getElementById('next-btn');
    if (currentQuestions.length > currentQuestionIndex + 1) {
        nextBtn.innerText = 'Next';
    } else {
        nextBtn.innerText = 'Show Results';
    }
    nextBtn.style.display = 'block';
}

function showResults() {
    document.getElementById('quiz-question-screen').style.display = 'none';
    document.getElementById('quiz-results-screen').style.display = 'block';
    document.getElementById('score-text').innerText = `${score} / ${currentQuestions.length}`;
    const reviewContainer = document.getElementById('incorrect-answers-review');
    reviewContainer.innerHTML = '<h4>Review your incorrect answers:</h4>';
    if (incorrectAnswers.length === 0) {
        reviewContainer.innerHTML += "<p>Excellent! You got all the questions right.</p>";
    } else {
        incorrectAnswers.forEach(item => {
            const correctAnswer = item.question.answers.find(a => a.correct).text;
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review-item');
            reviewElement.innerHTML = `
                <p><strong>Question:</strong> ${item.question.question}</p>
                <p><strong>Your Answer:</strong> <span class="user-answer">${item.userAnswer}</span></p>
                <p><strong>Correct Answer:</strong> <span class="correct-answer">${correctAnswer}</span></p>
                <a href="${item.question.source}" target="_blank">Learn more...</a>
            `;
            reviewContainer.appendChild(reviewElement);
        });
    }
}

function resetQuiz() {
    document.getElementById('quiz-question-screen').style.display = 'none';
    document.getElementById('quiz-results-screen').style.display = 'none';
    document.getElementById('quiz-start-screen').style.display = 'block';
}


// --- EVENT LISTENERS & INITIALIZATIONS ---

document.addEventListener('DOMContentLoaded', () => {
    
    new Typed('#typed-subtitle', {
        strings: ['PhD Candidate in Optical Sciences', 'Quantum Information Engineering', 'Acoustoelectric Device Researcher'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    sections.forEach(section => { sectionObserver.observe(section); });
    
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(element => { revealObserver.observe(element); });

    particlesJS('particles-js', {
      "particles": { "number": { "value": 60, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#00f2ea" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": false }, "size": { "value": 3, "random": true }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 }, "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false } },
      "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } } },
      "retina_detect": true
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    });

    // NEW: Add event listener for the exit button
    document.getElementById('exit-quiz-btn').addEventListener('click', resetQuiz);
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
};

window.onkeydown = function(event) {
    if (event.key === "Escape") {
        document.querySelectorAll('.modal').forEach(modal => {
            if(modal.style.display === 'flex') {
                closeModal(modal.id);
            }
        });
    }
};
