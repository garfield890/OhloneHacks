  // Define responses for the dating chatbot
  const responses = {
    greetings: ["Hello!", "Hi there!", "Hey! How are you feeling?"],
    how_are_you: ["I'm just a chatbot, but I'm here to chat with you!", "I'm doing well, thank you!"],
    tell_me_about_yourself: ["I'm your virtual dating partner!", "I'm a chatbot designed to keep you company."],
    love: ["Love is a beautiful thing! Tell me more about your feelings.", "I'm here to listen and support you."],
    date: ["I'm here to chat with you, whether it's about dating or anything else.", "Let's talk about what's on your mind."],
    sad: ["I'm here for you. Let's talk about what's on your mind.", "It's okay to feel sad sometimes. I'm here to listen."],
    happy: ["I'm glad to hear that you're feeling happy! What's making you feel that way?", "That's wonderful! Tell me more about what's making you happy."],
    hobbies: ["What are your favorite hobbies?", "Tell me about the things you enjoy doing in your free time."],
    dreams: ["What are your dreams and aspirations?", "I'd love to hear about your hopes for the future."],
    movies: ["Do you have a favorite movie?", "Let's chat about movies! What genres do you enjoy?"],
    music: ["What type of music do you like to listen to?", "Music can be so uplifting! Do you have a favorite artist or band?"],
    food: ["What's your favorite cuisine?", "I'm always curious about people's favorite foods! What do you enjoy eating?"],
    travel: ["Have you been on any exciting trips lately?", "Let's talk about travel destinations! Where would you love to visit?"],
    goals: ["What are your goals for the future?", "It's important to have goals to strive towards. What are yours?"],
    farewell: ["Goodbye! Take care of yourself.", "It was nice chatting with you!"]
};

function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    var chatbox = document.getElementById("chatbox");

    // Add user message to chat display
    var userMessage = '<div class="message sent">' + userInput + '</div>';
    chatbox.innerHTML += userMessage;

    // Generate bot response based on user input
    var botResponse = generateBotResponse(userInput);
    var botMessage = '<div class="message received">' + botResponse + '</div>';
    chatbox.innerHTML += botMessage;

    // Clear input field
    document.getElementById("userInput").value = "";

    // Scroll to bottom of chat display
    chatbox.scrollTop = chatbox.scrollHeight;
}

function generateBotResponse(userInput) {
    // Determine response based on user input
    if (userInput.toLowerCase().includes("hi") || userInput.toLowerCase().includes("hello") || userInput.toLowerCase().includes("hey")) {
        return responses.greetings[Math.floor(Math.random() * responses.greetings.length)];
    } else if (userInput.toLowerCase().includes("how are you")) {
        return responses.how_are_you[Math.floor(Math.random() * responses.how_are_you.length)];
    } else if (userInput.toLowerCase().includes("tell me about yourself")) {
        return responses.tell_me_about_yourself[Math.floor(Math.random() * responses.tell_me_about_yourself.length)];
    } else if (userInput.toLowerCase().includes("love")) {
        return responses.love[Math.floor(Math.random() * responses.love.length)];
    } else if (userInput.toLowerCase().includes("date") || userInput.toLowerCase().includes("dating")) {
        return responses.date[Math.floor(Math.random() * responses.date.length)];
    } else if (userInput.toLowerCase().includes("sad") || userInput.toLowerCase().includes("upset") || userInput.toLowerCase().includes("lonely")) {
        return responses.sad[Math.floor(Math.random() * responses.sad.length)];
    } else if (userInput.toLowerCase().includes("happy") || userInput.toLowerCase().includes("excited")) {
        return responses.happy[Math.floor(Math.random() * responses.happy.length)];
    } else if (userInput.toLowerCase().includes("bye") || userInput.toLowerCase().includes("goodbye")) {
        return responses.farewell[Math.floor(Math.random() * responses.farewell.length)];
    } else {
        return "I'm here to chat with you! Feel free to share anything on your mind.";
    }
}