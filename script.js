const jurisdictions = {
    UK: [],
    US: [],
    QM: []
};

// Define all questions for UK
const questionsUK = [
    [
        { 
            text: "What is the work type?", 
            type: "choice", 
            options: ["Creative Work", "Functional Work", "Work from Natural Process"], 
            next: { "Creative Work": 1, "Functional Work": "PD", "Work from Natural Process": "PD" } 
        },
        { 
            text: "Is the creator known or unknown?", 
            type: "choice", 
            options: ["Known", "Unknown"], 
            next: { "Known": 2, "Unknown": 3 } 
        },
        { 
            text: "Is the work foreign?", 
            type: "boolean", 
            next: { yes: "Please follow the shorter-term rule", no: 4 } 
        },
        { 
            text: "Was the work published over 120 years ago?", 
            type: "boolean", 
            next: { yes: "PD", no: "Requires Further Review" } 
        },
        { 
            text: "Was the work published?", 
            type: "boolean", 
            next: { yes: 5, no: "Requires Further Review" } 
        },
        { 
            text: "Enter the creator's year of death:", 
            type: "number", 
            next: (year) => (year && year <= new Date().getFullYear() - 70 ? "PD" : "CR") 
        }
    ],
    [
        { 
            text: "Is the digital surrogate a faithful reproduction of the underlying work?", 
            type: "boolean", 
            next: { yes: "PD", no: 1 } 
        },
        { 
            text: "Did digitization incorporate sufficiently creative choices?", 
            type: "boolean", 
            next: { no: "PD", yes: 2 } 
        },
        { 
            text: "Who made the digital surrogate?", 
            type: "choice", 
            options: [
                "An employee of the organization",
                "A contractor who assigned rights to the organization",
                "A contractor who retained rights or the contract imposes limits",
                "Unsure of the creator’s identity or rights owner"
            ], 
            next: { 
                "An employee of the organization": "PD", 
                "A contractor who assigned rights to the organization": "PD", 
                "A contractor who retained rights or the contract imposes limits": "Requires Further Review", 
                "Unsure of the creator’s identity or rights owner": "Requires Further Review" 
            }
        }
    ],
[
        { 
            text: "What type of metadata is there?", 
            type: "choice", 
            options: ["Basic metadata only", "More detailed or expressive metadata"], 
            next: { "Basic metadata only": "PD", "More detailed or expressive metadata": 1 } 
        },
        { 
            text: "Who created the expressive metadata?", 
            type: "choice", 
            options: [
                "An employee of the organization",
                "A contractor who assigned rights to the organization",
                "Unsure of the creator’s identity or rights owner",
                "If removing or excluding metadata is not an option"
            ], 
            next: { 
                "An employee of the organization": "PD", 
                "A contractor who assigned rights to the organization": "PD", 
                "Unsure of the creator’s identity or rights owner": "CR", 
                "If removing or excluding metadata is not an option": "Further review required"
            }
        }
    ]
];

// Define all questions for US
const questionsUS = [
    [
        { 
            text: "What is the work type?", 
            type: "choice", 
            options: ["Creative Work", "Functional Work", "Work from Natural Process"], 
            next: { "Creative Work": 1, "Functional Work": "PD", "Work from Natural Process": "PD" } 
        },
        { text: "Was the work published?", type: "boolean", next: { yes: 2, no: "Further review required" } },
        { 
            text: "When was the work published?", 
            type: "choice", 
            options: [
                "Published on or before December 31, 1929",
                "Published after January 1, 1978",
                "Published between January 1, 1929, and January 1, 1978",
                "Unsure whether the work was ever published"
            ], 
            next: { 
                "Published on or before December 31, 1929": "PD", 
                "Published after January 1, 1978": "CR", 
                "Published between January 1, 1929, and January 1, 1978": 3, 
                "Unsure whether the work was ever published": "Further review required" 
            }
        },
        { 
            text: "Is the underlying work a domestic or foreign work?", 
            type: "choice", 
            options: [
                "Domestic work",
                "Foreign work",
                "Unsure of the country of publication"
            ], 
            next: { 
                "Domestic work": 4, 
                "Foreign work": "Further review required", 
                "Unsure of the country of publication": "Further review required" 
            }
        },
	{ 
            text: "Does the work meet copyright notice requirements?", 
            type: "boolean", 
            next: { no: "PD", yes: 5 } 
        },
        { 
            text: "Does the work meet registration and renewal requirements?", 
            type: "boolean", 
            next: { no: "PD", yes: "CR" } 
        }
    ],
    [
        { 
            text: "Is the digital surrogate a faithful reproduction of the underlying work?", 
            type: "boolean", 
            next: { yes: "PD", no: 1 } 
        },
        { 
            text: "Did digitization incorporate sufficiently creative choices?", 
            type: "boolean", 
            next: { no: "PD", yes: 2 } 
        },
        { 
            text: "Who made the digital surrogate?", 
            type: "choice", 
            options: [
                "An employee of the organization",
                "A contractor who assigned rights to the organization",
                "A contractor who retained rights or the contract imposes limits",
                "Unsure of the creator’s identity or rights owner"
            ], 
            next: { 
                "An employee of the organization": "PD", 
                "A contractor who assigned rights to the organization": "PD", 
                "A contractor who retained rights or the contract imposes limits": "Requires Further Review", 
                "Unsure of the creator’s identity or rights owner": "Requires Further Review" 
            }
        }
    ],
    [
        { 
            text: "What type of metadata is there?", 
            type: "choice", 
            options: ["Basic metadata only", "More detailed or expressive metadata"], 
            next: { "Basic metadata only": "PD", "More detailed or expressive metadata": 1 } 
        },
        { 
            text: "Who created the expressive metadata?", 
            type: "choice", 
            options: [
                "An employee of the organization",
                "A contractor who assigned rights to the organization",
                "Unsure of the creator’s identity or rights owner",
                "If removing or excluding metadata is not an option"
            ], 
            next: { 
                "An employee of the organization": "PD", 
                "A contractor who assigned rights to the organization": "PD", 
                "Unsure of the creator’s identity or rights owner": "CR", 
                "If removing or excluding metadata is not an option": "Further review required"
            }
        }
    ]
];

// Define all questions for QM (Only one checklist)
const questionsQM = [
   [
        { 
            text: "Is the work under copyright protection?", 
            type: "boolean", 
            next: { yes: "CR", no: 1} 
        },
        { 
            text: "What is the status of the artist?", 
            type: "choice", 
            options: [
                "Artist is alive",
                "Artist is deceased",
                "Anonymous or pseudonymous author"
            ], 
            next: { 
                "Artist is alive": "CR", 
                "Artist is deceased": 2, 
                "Anonymous or pseudonymous author": "Further review required" 
            }
        },
        { 
            text: "When did the artist pass away?", 
            type: "number", 
            next: (year) => (year && year < 1975 ? "PD" : "CR") 
        }
    ]
];


// Assign updated UK questions + existing US and QM questions
jurisdictions.UK = questionsUK;
jurisdictions.US = questionsUS;
jurisdictions.QM = questionsQM;

let currentJurisdiction = [];

function selectJurisdiction(jurisdiction) {
    if (!jurisdictions[jurisdiction]) {
        return;
    }

    currentJurisdiction = jurisdictions[jurisdiction];

    // Remove welcome message
    const welcomeMessage = document.querySelector(".welcome");
    if (welcomeMessage) welcomeMessage.style.display = "none";

    loadQuestions(currentJurisdiction);
}

function loadQuestions(questions) {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = ""; // Clear previous content

    questions.forEach((checklist, index) => {
        const section = document.createElement("div");
        section.id = `checklist-${index + 1}`;
        section.className = "checklist-section";
        section.style.display = index === 0 ? "block" : "none"; // Show only first checklist initially

        const title = document.createElement("h3");
        title.textContent = `Checklist ${index + 1}`;
        section.appendChild(title);

        const questionArea = document.createElement("div");
        questionArea.id = `questions-${index + 1}`;
        section.appendChild(questionArea);

        const decisionArea = document.createElement("div");
        decisionArea.id = `decision-${index + 1}`;
        decisionArea.className = "decision-area";
        section.appendChild(decisionArea);

        questionContainer.appendChild(section);

        if (index === 0) {
            loadNextQuestion(index, 0); // Load first question for first checklist
        }
    });
}

function loadNextQuestion(checklistIndex, questionIndex) {
    const questions = currentJurisdiction[checklistIndex];
    if (!questions || questionIndex >= questions.length) return;

    const questionData = questions[questionIndex];
    const questionArea = document.getElementById(`questions-${checklistIndex + 1}`);

    if (!questionArea) return;

    questionArea.innerHTML = ""; // Clear previous question

    const questionDiv = document.createElement("div");
    questionDiv.className = "question-item";
    questionDiv.innerHTML = `<p>${questionData.text}</p>`;

    if (questionData.type === "boolean") {
        questionDiv.innerHTML += `
            <button onclick="processAnswer(${checklistIndex}, ${questionIndex}, 'yes')">Yes</button>
            <button onclick="processAnswer(${checklistIndex}, ${questionIndex}, 'no')">No</button>
        `;
    } else if (questionData.type === "choice") {
        questionData.options.forEach(option => {
            questionDiv.innerHTML += `<button onclick="processAnswer(${checklistIndex}, ${questionIndex}, '${option}')">${option}</button> `;
        });
    } else if (questionData.type === "number") {
        questionDiv.innerHTML += `
            <input type="number" id="input-${questionIndex}" placeholder="Enter year">
            <button onclick="processAnswer(${checklistIndex}, ${questionIndex}, document.getElementById('input-${questionIndex}').value)">Submit</button>
        `;
    }

    questionArea.appendChild(questionDiv);
}

function processAnswer(checklistIndex, questionIndex, answer) {
    const questions = currentJurisdiction[checklistIndex];
    const questionData = questions[questionIndex];

    if (!questionData) return;

    let nextStep = questionData.next;
    if (typeof nextStep === "function") {
        nextStep = nextStep(answer);
    } else {
        nextStep = nextStep[answer];
    }

    if (typeof nextStep === "number") {
        loadNextQuestion(checklistIndex, nextStep);
    } else {
        document.getElementById(`decision-${checklistIndex + 1}`).innerHTML = `<p><strong>Decision:</strong> ${formatDecision(nextStep)}</p>`;

        if (nextStep === "PD") {
            const nextChecklist = document.getElementById(`checklist-${checklistIndex + 2}`);
            if (nextChecklist) {
                nextChecklist.style.display = "block"; // Show next checklist only if PD
                loadNextQuestion(checklistIndex + 1, 0); // Load first question of the next checklist
            }
        }
    }
}

function formatDecision(decision) {
    return decision === "PD" ? "✅ Public Domain (Can apply CC0)" :
           decision === "CR" ? "❌ Copyrighted" :
           decision === "LegalReview" ? "⚖️ Requires Extra/Legal Review" :
           "📜 Review country-specific rules";
}