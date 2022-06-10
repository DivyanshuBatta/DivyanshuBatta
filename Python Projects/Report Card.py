name = input('Enter your Name:')
father_name = input("Enter your Father's Name:")
mother_name = input("Enter your Mother's Name:")
date = input("Enter your Date of Birth:")
english = int(input("Enter your English marks:"))
hindi = int(input("Enter your hindi marks:"))
science = int(input("Enter your science marks:"))
social_studies = int(input("Enter your social studies marks:"))
mathematics = int(input("Enter your mathematics marks:"))
classes = input("Enter your Class")
total_marks = hindi + english + science + social_studies + mathematics
percentage = int((total_marks / 500) * 100) 
print('Your Report Card is ready!')
print('Name:',name)
print("Father's Name:",father_name)
print("Mother's Name:",mother_name)
print("Class:",classes)
print('Date of Birth:',date)
print('English:',english)
print('Hindi:',hindi)
print('Science:',science)
print('Social Studies:',social_studies)
print('Mathematics:',mathematics)
print('Total Marks:',total_marks)
print('Percentage:',percentage)
if (percentage < 40):
    print('Overall Grade: D')
elif (percentage < 50 or percentage > 40):
    print('Overall Grade: C')
elif (percentage < 60 or percentage >= 51):
    print('Overall Grade: C+')
elif (percentage < 70 or percentage >= 61):
    print('Overall Grade: B')
elif (percentage < 80 or percentage >= 71):
    print('Overall Grade: B+')
elif (percentage < 90 or percentage >= 81):
    print('Overall Grade: A')
elif (percentage > 90):
    print('Overall Grade: A+')