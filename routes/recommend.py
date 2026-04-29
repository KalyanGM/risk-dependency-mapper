from flask import Blueprint, request, jsonify
from services.groq_client import call_groq
import json
import re

recommend_bp = Blueprint("recommend", __name__)


def load_prompt(user_input):
    with open("prompts/recommend_prompt.txt", "r") as f:
        template = f.read()
    return template.replace("{input}", user_input)


def extract_json(text):
    # Extract JSON array from messy AI output
    match = re.search(r'\[.*\]', text, re.DOTALL)
    if match:
        return match.group(0)
    return None


@recommend_bp.route("/recommend", methods=["POST"])
def recommend():

    data = request.get_json()
    user_input = data.get("input", "").strip()

    if not user_input:
        return jsonify({"error": "Input required"}), 400

    prompt = load_prompt(user_input)

    result = call_groq(prompt)

    # 🔥 FIX: extract clean JSON
    json_part = extract_json(result)

    if not json_part:
        return jsonify({"error": "No JSON found", "raw": result}), 500

    try:
        parsed = json.loads(json_part)
    except:
        return jsonify({"error": "Invalid JSON format", "raw": result}), 500

    return jsonify(parsed)