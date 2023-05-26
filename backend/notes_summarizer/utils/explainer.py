import openai


system_msg = "You are a helpful assistant who can explain how code works."


def explainCode(api_key, code):
    openai.api_key = api_key
    code = str(code)
    response = openai.Completion.create(
        model="text-davinci-003",
        messages=[
            {"role": "system", "content": system_msg},
            {"role": "user", "content": code},
        ],
    )

    return response
