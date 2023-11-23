import pickle
import csv
import json

file_name = "string_filtered_test.pkl"
file_ouput = "string_filtered_test"
output_type = "JSON"

def for_csv():
    with open(f'{file_ouput}.csv', 'w', newline='') as output_csv_file:
        csv_writer = csv.writer(output_csv_file)
        csv_writer.writerow(['Unique Terms'])  # Write header
        csv_writer.writerows([[term] for term in unique_terms_list])

def for_json():
    with open(f'{file_ouput}.json', 'w') as output_json_file:
        json.dump(unique_terms_list, output_json_file, indent=4)

# Load data from pickle file
with open(file_name, 'rb') as pickle_file:
    data = pickle.load(pickle_file)

unique_terms = set()

for text in data:
    terms = text.split("[NER_NEXT]")

    for term in terms:
        term = term.strip()
        if term:
            unique_terms.add(term)

unique_terms_list = sorted(list(unique_terms))

if output_type == "CSV":
    for_csv()
else:
    for_json()

