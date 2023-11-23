import pickle
import json

# Load data from Pickle file
with open('string_filtered_test.pkl', 'rb') as f:
    data = pickle.load(f)

# Convert data to JSON format
json_data = json.dumps(data, indent=2)

# Save the JSON data to a file
with open('output.json', 'w') as json_file:
    json_file.write(json_data)
