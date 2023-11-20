import csv
import json

# Specify the paths for your CSV input file and JSON output file
csv_file_path = 'ners.csv'
json_file_path = 'output.json'

# Read CSV file and extract values from the "NER" column
csv_data = []
with open(csv_file_path, 'r') as csv_file:
    csv_reader = csv.reader(csv_file)
    next(csv_reader)  # Skip the header row if it exists
    for row in csv_reader:
        csv_data.append(row[0])  # Assuming the NER column is the first column

# Write the list of strings to a JSON file
with open(json_file_path, 'w') as json_file:
    json.dump(csv_data, json_file, indent=2)

print(f'Conversion complete. JSON file saved at: {json_file_path}')
