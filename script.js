

const quotes = [
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { quote: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
    { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { quote: "Whoever is happy will make others happy too.", author: "Anne Frank" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { quote: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
    { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { quote: "Keep smiling, because life is a beautiful thing and there's so much to smile about.", author: "Marilyn Monroe" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "It is better to fail in originality than to succeed in imitation.", author: "Herman Melville" },
    { quote: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { quote: "I wake up every morning and think to myself, 'How far can I push this company in the next 24 hours?'", author: "Leah Busque" },
    { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { quote: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin" },
    { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    { quote: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
    { quote: "Don’t wish it were easier; wish you were better.", author: "Jim Rohn" },
    { quote: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Ryun" },
    { quote: "Success seems to be connected with action. Successful people keep moving.", author: "Conrad Hilton" },
    { quote: "In order to succeed, we must first believe that we can.", author: "Nikos Kazantzakis" },
    { quote: "Always do your best. What you plant now, you will harvest later.", author: "Og Mandino" },
    { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { quote: "The harder the conflict, the greater the triumph.", author: "George Washington" },
    { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { quote: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    { quote: "If you’re going through hell, keep going.", author: "Winston Churchill" },
    { quote: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Failure is the condiment that gives success its flavor.", author: "Truman Capote" },
    { quote: "Fall seven times and stand up eight.", author: "Japanese Proverb" }
  ];
  

let quoteEl = document.querySelector(".quotes");
let authorEl = document.querySelector(".author");
let buttonEl = document.querySelector(".button");

buttonEl.addEventListener("click" , fun);

function fun() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[randomIndex].quote;
    authorEl.textContent = quotes[randomIndex].author;
}