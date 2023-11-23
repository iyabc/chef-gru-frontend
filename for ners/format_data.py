import json

# Define the paths for input and output JSON files
input_json_file = 'output.json'
output_json_file = 'final_ners.json'

# Read the input JSON file
with open(input_json_file, 'r') as infile:
    data = json.load(infile)

# Create a new list with objects having "value" and "label" keys
formatted_data = [{"value": item, "label": item} for item in data]

# Write the formatted data to the output JSON file
with open(output_json_file, 'w') as outfile:
    json.dump(formatted_data, outfile, indent=4)

print(f"Formatted data has been written to {output_json_file}")
