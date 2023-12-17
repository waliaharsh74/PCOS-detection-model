# app.py

from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    age = float(data['age'])
    bmi = float(data['bmi'])
    menstrual_cycle = data['menstrualCycle']
    hirsutism_score = float(data['hirsutismScore'])
    acne_presence = data['acnePresence']
    family_history = data['familyHistory']
    insulin_resistance = data['insulinResistance']
    ovulatory_dysfunction = data['ovulatoryDysfunction']

    # Add your PCOS prediction logic here
    # Replace the following line with your actual prediction logic
    prediction_result = "Positive" if age > 25 and bmi > 25 and menstrual_cycle == 'irregular' and hirsutism_score > 5 else "Negative"

    return jsonify({'result': prediction_result})

if __name__ == '__main__':
    app.run(debug=True)

