import pickle

with open('string_filtered_test.pkl', 'rb') as file:
    ners = pickle.load(file)
    print(ners)