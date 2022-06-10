#Data Types
var1 = "hello world"
var2 = 100
var3 = 56.8
var4 = "Harshit"
print(var1 + var4)
print(var2 + var3)
print(10 * "Hello world\n")
print(str(int(10 * var2 + var3)))
Nani = "HELLO"
print(Nani[2:5:2])
#String Functions
mystr = "Harshit is a good boy"
print(mystr.isalnum())
print(mystr.isalpha())
print(mystr.endswith("boy"))
print(mystr.startswith("good"))
print(mystr.replace("is","are"))
print(mystr.lower())
print(mystr.isalnum())
print(mystr.isalpha())
print(mystr.lower())
print(mystr.upper())
print(mystr.capitalize())
print(mystr.casefold())
#List
iPhoneAccessories = "Wireless charger " , "Silicone case" , "Lens protector" , "Spigen screen protector" , 100
print(iPhoneAccessories)
print(iPhoneAccessories[1])
print(iPhoneAccessories[2:4])
#List Functions
numbers = [2, 3, 6, 100 ,7, 9]
numbers.remove(2)
numbers.sort()
numbers.pop()
numbers.append(3)
numbers.insert(99, 42.5)
numbers.extend("H")
numbers.count(numbers)
numbers[1] = 90
print(numbers)

a = 100 
b = 50 
a, b = b, a
print(a, b)