import math


def parse_data(file_name):
    file = open(file_name, "r")
    contents = file.read().split("\n")
    base_exponents = []
    for content in contents:
        number = {}
        content = content.split(",")
        number["base"] = int(content[0])
        number["power"] = int(content[1])
        base_exponents.append(number)
    return base_exponents


def get_index_of_largest_exponent(base_exponents):
    largest_exponent_index = 0
    largest_value = 0
    for index in range(len(base_exponents)):
        number = base_powers[index]
        value = number["power"] * math.log10(number["base"])
        if value > largest_value:
            largest_value = value
            largest_exponent_index = index
    return largest_exponent_index


if __name__ == '__main__':
    base_powers = parse_data("base_exp.txt")
    exponent = get_index_of_largest_exponent(base_powers)
    print(exponent + 1)  # because index starts with 0
