print('\n')
print('Hello,What do you want to do?,\n')
print('Enter + for Addition')
print('Enter - for Subtraction')
print('Enter * for Multiplication')
print('Enter / for Division')
print('Enter ** for Exponential Division')
print('Enter % for Getting only Remainder after Division')
print('Enter // for Floor Division - To get the quotient in integer only without decimals\n')
while True:
    num1 = float(input('Enter Your First Number:'))
    num2 = float(input('Enter Your Second Number:'))
    operation = input('Enter your Operation:')
    if (operation == '+'):
        print(num1+num2)
    elif (operation == '-'):
        print(num1-num2)
    elif (operation == '*'):
        print(num1*num2)
    elif (operation == '/'):
        print(num1/num2)
    elif (operation == '**'):
        print(num1**num2)
    elif (operation == '%'):
        print(num1%num2)
    elif (operation == '//'):
        print(num1//num2)
    else:
        print('Invalid Operation')
    print('\nEnter exit to Exit the Calculator\n or Enter continue for doing more calculations')
    bye = input('')
    if (bye == 'continue'):
        print('\n')
        continue
    elif (bye == 'exit'):
        print('\nThanks for using the Calculator')
        print('We will meet After Sometime')
        break
    else:
        print('Invalid Choice')
        break