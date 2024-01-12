import math

## String data type
## literal assignment
# first = "Dave"
# last = "Gray"
# print (type(first))
# print (type(first) == str)
# print (isinstance(first, str))

## constructor
# pizza = str("Pepperoni")
# print (type(pizza))
# print (type(pizza) == str)
# print (isinstance(pizza, str))

## Concatenation
# fullname = first + " " + last
# fullname += "!"
# print(fullname)

## Casting a number to a string
# decade = str(1980)
# print(type(decade))
# print(decade)

## String concatenation
# statement = "I like rock music from the " + decade + "s."
# print(statement)

## Multiple lines
# multiline = '''
# Hey, how are you

# I was just checking in.
# '''
# print(multiline)

## Escaping special characters
# sentence = 'I\'m back at work!\tHey!\n\nWhere\'s this at\\located'
# print(sentence)

## String Methods
# print(first)
# print(first.lower())
# print(first.upper())

# print(multiline.title())
# print(multiline.replace("good", "ok"))
# print(len(multiline))
# multiline += "                             "
# multiline = "               " + multiline
# print(len(multiline))

# print(multiline.strip())

## Build a menu
# title = "menu".upper()
# print(title.center(20, "="))
# print("Coffee".ljust(16, ".") + "1$".rjust(4))
# print("Muffin".ljust(16, ".") + "2$".rjust(4))
# print("Cheesecake".ljust(16, ".") + "2$".rjust(4))

## String index values
# first = "Dave"
# print(first[1])
# print(first[-1])
# print(first[1:3])
# print(first[1:])

## Some methods return boolean data
# first = "Dave"
# print(first.startswith("D"))
# print(first.endswith("Z"))

## Boolean data type
# isChecked = True
# isChecked2 = bool(False)
# print(type(isChecked))
# print(isinstance(isChecked, bool))

## Numeric data types
# number = 100
# number2 = int(80)
# print(type(number))
# print(type(number2))
# print(isinstance(number, int))

## Float data type
# x = 2.60
# y = float(1.60)
# print(type(x))
# print(isinstance(y, float))

## Complex type
# complex_value = 5+3j
# print(type(complex_value))
# print(complex_value.real)
# print(complex_value.imag)

## Built-in functions for numbers
# print(abs(5 - 6))
# print(round(1.5))
# print(round(1.5, 1))
# print(math.floor(1.5))
# print(math.ceil(1.5))
# print(math.pi)
# print(math.sqrt(64))

## Casting a string to a number
# zipcode = "10001"
# zip_value = int(zipcode)
# print(type(zip_value))
# zip_value = int("New York") # Error if you attemt to cast incorrect data