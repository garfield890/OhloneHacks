from flask import Flask, render_template, request, jsonify
import openai

# Initialize Flask app
app = Flask(__name__)

client = openai.OpenAI(
    api_key = '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'
)


# Define a route to serve the HTML file
@app.route('/')
def index():
    return render_template('friends.html')

# Define a route for generating responses
@app.route('/chat', methods=['POST'])
def chat():
    prompt = request.form['prompt']
    
    # Make request to OpenAI API
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are having a with a potential date who is romantically interested in you"},
            {"role": "user", "content": prompt}
        ]
    )
    response = client.images.generate(
        model="dall-e-3",
        prompt="a 21 year old adult female texting a friend",
        size="1024x1024",
        quality="standard",
        n=1,
    )
    print(completion.choices[0].message)
    return jsonify({'response': completion.choices[0].message.content, 'image': response.data[0].url})
    


app.run(debug = True)