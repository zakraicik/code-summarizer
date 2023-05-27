import openai
import openai.error
import logging
from openai.error import AuthenticationError, RateLimitError

logging.basicConfig(filename="error.log", level=logging.ERROR)

system_msg = "You are a helpful assistant who can explain how code works."


def explainCode(api_key, code):
    openai.api_key = api_key

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": f"{system_msg}",
                },
                {"role": "user", "content": f"{code}"},
            ],
        )

        return response
    except AuthenticationError as e:
        logging.error(f"AuthenticationError: {str(e)}")
        raise e
    except RateLimitError as e:
        logging.error(f"RateLimitError: {str(e)}")
        raise e
    except Exception as e:
        logging.error(f"Unexpected error: {str(e)}")
        raise e
