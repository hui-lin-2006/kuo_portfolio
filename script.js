
const themeBtn = document.getElementById('themeBtn');

const body = document.body;

function toggleTheme() {
   
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Toggle Light Mode';
    } else {
        themeBtn.textContent = 'Toggle Dark Mode';
    }
}

themeBtn.onclick = toggleTheme;

const editJobBtn = document.getElementById('editJobBtn');
const jobTitleSpan = document.getElementById('jobTitle');

editJobBtn.onclick = function() {
    const newTitle = prompt('Enter a new job title:', jobTitleSpan.textContent);

    if (newTitle !== null && newTitle.trim() !== '') {
        jobTitleSpan.textContent = newTitle.trim();
    }
};

const skillsBtn = document.getElementById('toggleSkillsBtn');
const skillsSection = document.getElementById('skillsSection');

skillsBtn.onclick = function() {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        skillsBtn.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        skillsBtn.textContent = 'Show Skills';
    }
};

const messageTextarea = document.querySelector('textarea[name="message"]');
const charCountSpan = document.getElementById('charCount');
const maxChars = 200;

messageTextarea.oninput = function() {
    const remaining = maxChars - messageTextarea.value.length;
    charCountSpan.textContent = remaining;
}; 

 const name = document.getElementById('nameField');
 const email = document.getElementById('emailField');

function validateForm() {
    if (name.value.trim() === '') {
        alert('Please enter your name.');
        return false;
    }
    else if (email.value.trim() === '') {
        alert('Please enter your email.');
        return false;
    }
    else {
        return true;
    }
   }

   const dateDisplay = document.getElementById('dateDisplay');
   const currentDate = new Date();
   const options = { year: 'numeric', month: 'long', day: 'numeric' };
   dateDisplay.textContent = currentDate.toLocaleDateString(undefined, options);       

   const quotes = [
       "The only way to do great work is to love what you do. - Steve Jobs",
       "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
       "Believe you can and you're halfway there. - Theodore Roosevelt",
       "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
       "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
       "It does not matter how slowly you go as long as you do not stop. - Confucius",
       "Everything you've ever wanted is on the other side of fear. - George Addair",
       "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
       "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
       "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis"
   ];

   const quoteBtn = document.getElementById('quoteBtn');
   const quoteDisplay = document.getElementById('quoteDisplay');

   quoteBtn.onclick = function() {
       const randomIndex = Math.floor(Math.random() * quotes.length);
       quoteDisplay.textContent = quotes[randomIndex];
   };
   