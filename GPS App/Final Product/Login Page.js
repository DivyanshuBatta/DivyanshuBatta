function display() {
  document.getElementById("login").style.display = "none";
  document.getElementById("class").style.display = "block";
  let username = document.getElementById("input").value;
  if (
    username == null ||
    username == "" ||
    username == " " ||
    username == undefined
  ) {
    alert("Please enter a Name to Proceed!");
    document.getElementById("login").style.display = "block";
    document.getElementById("class").style.display = "none";
  }
  var time = new Date().getHours();
  console.log(time);
  if (time < 12) {
    document.getElementById(
      "salutation"
    ).innerHTML = `<h2>Good Morning, ${username}</h2>`;
  } else if (time > 12 && time <= 16) {
    document.getElementById(
      "salutation"
    ).innerHTML = `<h2>Good Afternoon, ${username}</h2>`;
  } else if (time >= 16 && time <= 24) {
    document.getElementById(
      "salutation"
    ).innerHTML = `<h2>Good Evening, ${username}</h2>`;
  }
}

function section() {
  let classes = document.getElementById("classes").value;
  if (
    classes == "I" ||
    classes == "II" ||
    classes == "III" ||
    classes == "IV" ||
    classes == "V" ||
    classes == "VI" ||
    classes == "VII" ||
    classes == "VIII" ||
    classes == "Nursery" ||
    classes == "Jr KG" ||
    classes == "Sr KG" ||
    classes == "IX" ||
    classes == "X" ||
    classes == "XI" ||
    classes == "XII"
  ) {
    document.getElementById("class").style.display = "none";
    document.getElementById("section").style.display = "block";
  } else {
    alert("Invalid Class Entered!");
    document.getElementById("class").style.display = "block";
    document.getElementById("section").style.display = "none";
  }
}

function home() {
  let section = document.getElementById("section-input").value;
  let classes = document.getElementById("classes").value;

  if (classes == "Nursery" || classes == "Jr. Kg" || classes == "Jr. KG") {
    if (
      section == "Adorable" ||
      section == "Bold" ||
      section == "Confident" ||
      section == "ADORABLE" ||
      section == "BOLD" ||
      section == "CONFIDENT"
    ) {
      document.getElementById("section").style.display = "none";
      document.getElementById("home").style.display = "block";
    } else {
      alert("Invalid Section Entered!");
      document.getElementById("section").style.display = "block";
      document.getElementById("home").style.display = "none";
    }
  } else if (classes == "Sr. KG" || classes == "Sr. Kg") {
    if (
      section == "Adorable" ||
      section == "Bold" ||
      section == "Confident" ||
      section == "Diligent" ||
      section == "ADORABLE" ||
      section == "BOLD" ||
      section == "CONFIDENT" ||
      section == "DILIGENT"
    ) {
      document.getElementById("section").style.display = "none";
      document.getElementById("home").style.display = "block";
    } else {
      alert("Invalid Section Entered!");
      document.getElementById("section").style.display = "block";
      document.getElementById("home").style.display = "none";
    }
  } else if (
    classes == "I" ||
    classes == "II" ||
    classes == "III" ||
    classes == "IV" ||
    classes == "V" ||
    classes == "VI" ||
    classes == "VII" ||
    classes == "VIII"
  ) {
    if (
      section == "Adorable" ||
      section == "Bold" ||
      section == "Confident" ||
      section == "Diligent" ||
      section == "Elegant" ||
      section == "CAIE" ||
      section == "ADORABLE" ||
      section == "BOLD" ||
      section == "CONFIDENT" ||
      section == "DILIGENT" ||
      section == "ELEGANT" ||
      section == "Caie" ||
      section == "caie"
    ) {
      document.getElementById("section").style.display = "none";
      document.getElementById("home").style.display = "block";
    } else {
      alert("Invalid Section Entered!");
      document.getElementById("section").style.display = "block";
      document.getElementById("home").style.display = "none";
    }
  } else if (classes == "IX" || classes == "X") {
    if (
      section == "Adorable" ||
      section == "Bold" ||
      section == "Confident" ||
      section == "Diligent" ||
      section == "Elegant" ||
      section == "CAIE" ||
      section == "ADORABLE" ||
      section == "BOLD" ||
      section == "CONFIDENT" ||
      section == "DILIGENT" ||
      section == "ELEGANT" ||
      section == "Caie" ||
      section == "caie" ||
      section == "Fabulous" ||
      section == "FABULOUS"
    ) {
      document.getElementById("section").style.display = "none";
      document.getElementById("home").style.display = "block";
    } else {
      alert("Invalid Section Entered!");
      document.getElementById("section").style.display = "block";
      document.getElementById("home").style.display = "none";
    }
  } else if (classes == "XI" || classes == "XII") {
    if (
      section == "Arts Adorable" ||
      section == "Arts Bold" ||
      section == "Com Adorable" ||
      section == "Com Bold" ||
      section == "Sci Adorable" ||
      section == "Sci Bold"||
      section == "ARTS ADORABLE"||
      section == "ARTS BOLD"||
      section == "SCI ADORABLE"||
      section == "SCI BOLD"||
      section == "COM ADORABLE"||
      section == "COM BOLD"||
      section == "COMMERCE ADORABLE"||
      section == "COMMERCE BOLD"||
      section == "SCIENCE ADORABLE"||
      section == "SCIENCE BOLD"||
      section == "Commerce Adorable"||
      section == "Commerce Bold"||
      section == "Science Adorable"||
      section == "Science Bold"
    ) {
      document.getElementById("section").style.display = "none";
      document.getElementById("home").style.display = "block";
    } else {
      alert("Invalid Section Entered!");
      document.getElementById("section").style.display = "block";
      document.getElementById("home").style.display = "none";
    }
  } else {
    alert("Invalid Section Entered!");
    document.getElementById("section").style.display = "block";
    document.getElementById("home").style.display = "none";
  }
}

function homework() {
  let section = document.getElementById("section-input").value;
  let classes = document.getElementById("classes").value;
  window.location = `http://www.gobindgarhpublicschool.in/Examination/CBSEHomeWork/StudentsHomeWorkView.php?CLASS=${
    document.getElementById("classes").value
  }_${document.getElementById("section-input").value}&SecurityKey=8584`;

  let XIXIIsection = String(section).split(" ");
  if (classes == "XI" || classes == "XII") {
    window.location = ` http://www.gobindgarhpublicschool.in/Examination/CBSEHomeWork/StudentsHomeWorkView.php?CLASS=${classes}_${XIXIIsection[0]}_${XIXIIsection[1]}&SecurityKey=`;
  }
  if (classes == 'XI' || classes == 'XII' && section == 'COMMERCE ADORABLE' || section == 'Commerce Adorable') {
    window.location = `http://www.gobindgarhpublicschool.in/Examination/CBSEHomeWork/StudentsHomeWorkView.php?CLASS=${classes}_Com_Adorable&SecurityKey=8584`;
  }
  else if (classes == 'XI' || classes == 'XII' && section == 'COMMERCE ADORABLE' || section == 'Commerce Adorable') {
    window.location = `http://www.gobindgarhpublicschool.in/Examination/CBSEHomeWork/StudentsHomeWorkView.php?CLASS=${classes}_Com_Adorable&SecurityKey=8584`;
  }
  else if (classes == 'XI' || classes == 'XII' && section == 'COMMERCE BOLD' || section == 'Commerce Bold') {
    window.location = `http://www.gobindgarhpublicschool.in/Examination/CBSEHomeWork/StudentsHomeWorkView.php?CLASS=${classes}_Com_Bold&SecurityKey=8584`;
  }
  else if (classes == 'XI' || classes == 'XII' && section == 'SCIENCE ADORABLE' || section == 'Science Adorable') {
    window.location = `http://www.gobindgarhpublicschool.in/Examination/CBSEHomeWork/StudentsHomeWorkView.php?CLASS=${classes}_Sci_Adorable&SecurityKey=8584`;
  }
  else if (classesMaiclasses == 'XI' || classes == 'XII' && section == 'SCIENCE BOLD' || section == 'Science Bold') {
    window.location = `http://www.gobindgarhpublicschool.in/Examination/CBSEHomeWork/StudentsHomeWorkView.php?CLASS=${classes}_Sci_Bold&SecurityKey=8584`;
  }
}

function syllabus() {
  let subject = document.getElementById("syllabus-input").value;
  let classes = document.getElementById("classes").value;
  if (classes == "Nursery" || classes == "Jr. Kg" || classes == "Jr. KG") {
    let subject = document.getElementById("syllabus-input").value;
  let classes = document.getElementById("classes").value;
    if (subject == "English Written"  || subject == "ENGLISH WRITTEN") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${document.getElementById("classes").value}&SUBJECT=English_Written`;
    } 
    else if (subject == "Mathematics Written" || subject == "MATHEMATICS WRITTEN") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Mathematics_Written`;
    } 
    else if (subject == "English Oral" || subject == "ENGLISH ORAL") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=English_Oral`;
    } 
    else if (subject == "Mathematics Oral" || subject == "MATHEMATICS ORAL") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Mathematics_Oral`;
    }
    else if (subject == "Hindi Oral" || subject == "HINDI ORAL") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Hindi_Oral`;
    }
    else if (subject == "Hindi Written" || subjectMai == "HINDI WRITTEN") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Hindi_Written`;
    }
    else if (subject == "General Awareness Written" || subject == "GENERAL AWARENESS WRITTEN") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=General_Awareness_Written`;
    }
    else if (subject == "General Awareness Oral" || subject == "GENERAL AWARENESS ORAL") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=General_Awareness_Oral`;
    }
  }
  else if (classes == 'Sr. Kg' || classes == 'Sr. KG') {
    let subject = document.getElementById("syllabus-input").value;
  let classes = document.getElementById("classes").value;
    if (subject == "English Written" || subject == "ENGLISH WRITTEN") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${document.getElementById("classes").value}&SUBJECT=English_Written`;
    } 
    else if (subject == "Mathematics Written" || subject == "MATHEMATICS WRITTEN") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Mathematics_Written`;
    } 
    else if (subject == "English Oral" || subject == "ENGLISH ORAL") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=English_Oral`;
    } 
    else if (subject == "Hindi Oral" || subject == "HINDI ORAL") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Hindi_Oral`;
    }
    else if (subject == "Hindi Written" || subject == "HINDI WRITTEN") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Hindi_Written`;
    }
    else if (subject == "General Awareness Written" || subject == "GENERAL AWARENESS WRITTEN") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=General_Awareness_Written`;
    }
    else if (subject == "General Awareness Oral" || subject == "GENERAL AWARENESS ORAL") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=General_Awareness_Oral`;
    }
  }
  else if (classes == 'I' || classes == 'II' || classes == 'III' || classes == 'IV' || classes == 'V') {
    let subject = document.getElementById("syllabus-input").value;
  let classes = document.getElementById("classes").value;
    if (subject == "General Knowledge"  || subject == 'GENERAL KNOWLEDGE') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${classes}&SUBJECT=General_Knowledge`;
    } else if (subject == "English"  || subject == 'ENGLISH') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    } else if (subject == "Mathematics" || subject == 'MATHEMATICS') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    } else if (subject == "Hindi" || subject == 'HINDI') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    } else if (subject == "Punjabi" ||subject == "PUNJABI") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    }
     else if (subject == "Computer Application" ||subject == "COMPUTER APPLICATION") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Computer_Application`;
    }
    else if (subject == "Environmental Studies" ||subject == "ENVIRONMENTAL STUDIES") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Environmental_Studies`;
     } else {
      alert("Invalid Subject Entered!");
      document.getElementById("syllabus").style.display = "block";
    }
  }
  else if (classes == 'VI' || classes == 'VII') {
    let subject = document.getElementById("syllabus-input").value;
  let classes = document.getElementById("classes").value;
    if (subject == "General Knowledge"  || subject == 'GENERAL KNOWLEDGE') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${classes}&SUBJECT=General_Knowledge`;
    } else if (subject == "English"  || subject == 'ENGLISH') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    } else if (subject == "Mathematics" ||subject == 'MATHEMATICS') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    } else if (subject == "Hindi" ||subject == 'HINDI') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    } else if (subject == "Punjabi" ||subject == "PUNJABI") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    } else if (subject == "Science" ||subject == "SCIENCE") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    } else if (subject == "Social Science" ||subject == "SOCIAL SCIENCE") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Social_Science`;
    }
    else if (subject == "sst" ||subject == "SST") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Social_Science`;
    }
    else if (subject == "Social Studies" || subject == "SOCIAL STUDIES") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Social_Science`;
     }
     else if (subject == "Computer Application" || subject == "COMPUTER APPLICATION") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Computer_Application`;
     }
     else if (subject == "Environmental Studies" || subject == "ENVIRONMENTAL STUDIES") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Environmental_Studies`;
     }
      else {
      alert("Invalid Subject Entered!");
      document.getElementById("syllabus").style.display = "block";
    }
  }
  else if (classes == 'VIII') {
    let subject = document.getElementById("syllabus-input").value;
  let classes = document.getElementById("classes").value;
    if (subject == "General Knowledge"  || subject == 'GENERAL KNOWLEDGE') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${classes}&SUBJECT=General_Knowledge`;
    } else if (subject == "English"  || subject == 'ENGLISH') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    } else if (subject == "Mathematics" ||subject == 'MATHEMATICS') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    } else if (subject == "Hindi" || subject == 'HINDI') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    } else if (subject == "Punjabi" ||subject == "PUNJABI") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    } else if (subject == "Science" ||subject == "SCIENCE") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    } else if (subject == "Social Science" || subject == "SOCIAL SCIENCE") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Social_Science`;
    }
    else if (subject == "Social Studies" || subject == "SOCIAL STUDIES") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Social_Science`;
     }
     else if (subject == "sst" ||subject ==  "SST") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Social_Science`;
    }
     else if (subject == "Environmental Studies" || subject == "ENVIRONMENTAL STUDIES") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Environmental_Studies`;
     }
      else {
      alert("Invalid Subject Entered!");
      document.getElementById("syllabus").style.display = "block";
    }
  }
  else if (classes == 'IX' || classes == 'X') {
    let subject = document.getElementById("syllabus-input").value;
  let classes = document.getElementById("classes").value;
   if (subject == "English" || subject == 'ENGLISH') {
    window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
      document.getElementById("classes").value
    }&SUBJECT=${subject}`;
  } else if (subject == "Mathematics" ||subject ==  'MATHEMATICS') {
    window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
      document.getElementById("classes").value
    }&SUBJECT=${subject}`;
  } else if (subject == "Hindi" || subject == 'HINDI') {
    window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
      document.getElementById("classes").value
    }&SUBJECT=${subject}`;
  } else if (subject == "Punjabi" ||subject ==  "PUNJABI") {
    window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
      document.getElementById("classes").value
    }&SUBJECT=${subject}`;
  } else if (subject == "Science" ||subject ==  "SCIENCE") {
    window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
      document.getElementById("classes").value
    }&SUBJECT=${subject}`;
  } else if (subject == "Social Science" ||subject ==  "SOCIAL SCIENCE") {
    window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
      document.getElementById("classes").value
    }&SUBJECT=Social_Science`;
  }
  else if (subject == "sst" || subject == "SST") {
    window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
      document.getElementById("classes").value
    }&SUBJECT=Social_Science`;
  }
  else if (subject == "Social Studies" ||subject ==  "SOCIAL STUDIES") {
    window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
      document.getElementById("classes").value
    }&SUBJECT=Social_Science`;
   }
   else if (subject == "Information Technology" ||subject ==  "INFORMATION TECHNOLOGY") {
    window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
      document.getElementById("classes").value
    }&SUBJECT=Information_Technology`;
   } else {
    alert("Invalid Subject Entered!");
    document.getElementById("syllabus").style.display = "block";
  }
  }
  else if (classes == 'XI') {
    let subject = document.getElementById("syllabus-input").value;
  let classes = document.getElementById("classes").value;
    if (subject == "English" || subject == 'ENGLISH') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    }
      else if (subject == "Physical Education" || subject == "PHYSICAL EDUCATION") {
        window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
          document.getElementById("classes").value
        }&SUBJECT=Physical_Education`;
    }
    else if (subject == "Dance" || subject == 'DANCE') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
     } 
     else if (subject == "Music Instrumental" || subject == "MUSIC INSTRUMENTAL") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Music_Instrumental`;
  }
  else if (subject == "Physics" || subject == "PHYSICS") {
    window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
      document.getElementById("classes").value
    }&SUBJECT=Physics`;
}
     else if (subject == "Chemistry" || subject == 'CHEMISTRY') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Chemistry`;
    } 
    else if (subject == "Accounts" ||subject == 'ACCOUNTS') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Accounts`;
    }
    else if (subject == "Business Studies" ||subject == 'BUSINESS STUDIES') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Business_Studies`;
    }
    else if (subject == "Economics" ||subject == 'ECONOMICS') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Economics`;
    }
    else if (subject == "Political Science" ||subject == 'POLITICAL SCIENCE') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Political_Science`;
    }
    else if (subject == "History" ||subject == 'HISTORY') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=History`;
    } 
    else if (subject == "Psychology" ||subject == 'PSYCHOLOGY') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Psychology`;
    }
    else if (subject == "Home Science" ||subject == 'HOME SCIENCE') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Home_Science`;
    }
     else if (subject == "Punjabi" ||subject == "PUNJABI") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    } 
    else if (subject == "Biology" ||subject == "BIOLOGY") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    }
     else if (subject == "Information Technology" ||subject == "INFORMATION TECHNOLOGY") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Information_Technology`;
     } else {
      alert("Invalid Subject Entered!");
      document.getElementById("syllabus").style.display = "block";
    }
  }
  else if (classes == 'XII') {
    let subject = document.getElementById("syllabus-input").value;
  let classes = document.getElementById("classes").value;
    if (subject == "English" || subject == 'ENGLISH') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    }
      else if (subject == "Physical Education" || subject == "PHYSICAL EDUCATION") {
        window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
          document.getElementById("classes").value
        }&SUBJECT=Physical_Education`;
    }
    else if (subject == "Painting" || subject == "PAINTING") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Painting`;
  }
    else if (subject == "Dance" || subject == 'DANCE') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
     } 
     else if (subject == "Music Instrumental" || subject == "MUSIC INSTRUMENTAL") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Music_Instrumental`;
  }
  else if (subject == "Physics" || subject == "PHYSICS") {
    window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
      document.getElementById("classes").value
    }&SUBJECT=Physics`;
}
     else if (subject == "Chemistry" || subject == 'CHEMISTRY') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Chemistry`;
    } 
    else if (subject == "Accounts" ||subject == 'ACCOUNTS') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Accounts`;
    }
    else if (subject == "Business Studies" ||subject == 'BUSINESS STUDIES') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Business_Studies`;
    }
    else if (subject == "Economics" ||subject == 'ECONOMICS') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Economics`;
    }
    else if (subject == "Political Science" ||subject == 'POLITICAL SCIENCE') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Political_Science`;
    }
    else if (subject == "History" ||subject == 'HISTORY') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=History`;
    } 
    else if (subject == "Psychology" ||subject == 'PSYCHOLOGY') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Psychology`;
    }
    else if (subject == "Home Science" ||subject == 'HOME SCIENCE') {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Home_Science`;
    }
     else if (subject == "Punjabi" ||subject == "PUNJABI") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    } 
    else if (subject == "Biology" ||subject == "BIOLOGY") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=${subject}`;
    }
     else if (subject == "Information Technology" ||subject == "INFORMATION TECHNOLOGY") {
      window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
        document.getElementById("classes").value
      }&SUBJECT=Information_Technology`;
     } else {
      alert("Invalid Subject Entered!");
      document.getElementById("syllabus").style.display = "block";
    }
  }
  }

function timetable() {
  window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/ClassesTimeTableLogin.php`;
}

function subject() {
  document.getElementById("home").style.display = "none";
  document.getElementById("syllabus").style.display = "block";
}

let profile = document.getElementById("profile");
let randomNum = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
];

function random() {
  return parseInt(Math.random() * randomNum.length);
}
profile.src = `https://avatars.dicebear.com/4.9/api/micah/:seed${random()}.svg`;

let input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.key === "Enter") {
    document.getElementById("button1").click();
  }
});

let input2 = document.getElementById("classes");
input2.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.key === "Enter") {
    document.getElementById("button2").click();
  }
});

let input3 = document.getElementById("section-input");
input3.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.key === "Enter") {
    document.getElementById("button3").click();
  }
});

let input4 = document.getElementById("syllabus-input");
input4.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.key === "Enter") {
    document.getElementById("button4").click();
  }
});
//  document.getElementById('home').style.display = "block";
//  if(document.getElementById('home').style.display == "block") {
//     document.getElementById('home').style.display = "block";
//     localStorage.setItem('show', 'true'); //store state in localStorage
// };
// window.onload() = function() {
//     var show = localStorage.getItem('show');
//     if(show === 'true'){
//          document.getElementById('home').style.display = "block";
//     }
// }
function showHome() {
  let username = document.getElementById("input").value;
  let syllabusMain = document.getElementById("syllabus-input").value;
  let section = document.getElementById("section-input").value;
  let classes = document.getElementById("classes").value;
  document.getElementById("home").style.display = "block";
  localStorage.setItem("show", "true");
  localStorage.setItem("name", username);
  localStorage.setItem("syllabus", syllabusMain);
  localStorage.setItem("section", section);
  localStorage.setItem("classes", classes);
}
window.onload = function () {
  var show = localStorage.getItem("show");
  var name = localStorage.getItem("name");
  var classes = localStorage.getItem("classes");
  var section = localStorage.getItem("section");
  var subject = localStorage.getItem('syllabus');
  if (show === "true") {
    var time = new Date().getHours();
    console.log(time);
    if (time < 12) {
      document.getElementById(
        "salutation"
      ).innerHTML = `<h2>Good Morning, ${name}</h2>`;
    } else if (time >= 12 && time <= 18) {
      document.getElementById(
        "salutation"
      ).innerHTML = `<h2>Good Afternoon, ${name}</h2>`;
    } else if (time >= 18  && time <= 24) {
      document.getElementById(
        "salutation"
      ).innerHTML = `<h2>Good Evening,${name}</h2>`;
    }
     document.getElementById("home").style.display = "block";
     document.getElementById("login").style.display = "none";
     document.getElementById("section").style.display = "none";
     document.getElementById("syllabus").style.display = "none";
     document.getElementById("class").style.display = "none";
  let home = document.getElementById('home');
  if (home.style.display == "block") {
  let homework_button = document.getElementById("homework_button");
   homework_button.addEventListener("click", function() {    
     window.location = `http://www.gobindgarhpublicschool.in/Examination/CBSEHomeWork/StudentsHomeWorkView.php?CLASS=${classes}_${section}&SecurityKey=8584`;

     let XIXIIsection = String(section).split(" ");
     if (classes == "XI" || classes == "XII") {
       window.location = ` http://www.gobindgarhpublicschool.in/Examination/CBSEHomeWork/StudentsHomeWorkView.php?CLASS=${classes}_${XIXIIsection[0]}_${XIXIIsection[1]}&SecurityKey=`;
     }
     else if (classes == 'XI' || classes == 'XII' && section == 'COMMERCE ADORABLE' || section == 'Commerce Adorable') {
       window.location = `http://www.gobindgarhpublicschool.in/Examination/CBSEHomeWork/StudentsHomeWorkView.php?CLASS=${classes}_Com_Adorable&SecurityKey=8584`;
     }
     else if (classes == 'XI' || classes == 'XII' && section == 'COMMERCE BOLD' || section == 'Commerce Bold') {
       window.location = `http://www.gobindgarhpublicschool.in/Examination/CBSEHomeWork/StudentsHomeWorkView.php?CLASS=${classes}_Com_Bold&SecurityKey=8584`;
     }
     else if (classes == 'XI' || classes == 'XII' && section == 'SCIENCE ADORABLE' || section == 'Science Adorable') {
       window.location = `http://www.gobindgarhpublicschool.in/Examination/CBSEHomeWork/StudentsHomeWorkView.php?CLASS=${classes}_Sci_Adorable&SecurityKey=8584`;
     }
     else if (classes == 'XI' || classes == 'XII' && section == 'SCIENCE BOLD' || section == 'Science Bold') {
       window.location = `http://www.gobindgarhpublicschool.in/Examination/CBSEHomeWork/StudentsHomeWorkView.php?CLASS=${classes}_Sci_Bold&SecurityKey=8584`;
     }
   });
   let button4 = document.getElementById("button4");
   button4.addEventListener("click", function() {
  let classes = localStorage.getItem("classes");
   let subject = document.getElementById("syllabus-input").value;
     // let classes = localStorage.getItem("classes");
     if (classes == "Nursery" || classes == "Jr. Kg" || classes == "Jr. KG") {
       // let subject = document.getElementById("syllabus-input").value;
       if (subject == "English Written"  || subject == "ENGLISH WRITTEN") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${classes}&SUBJECT=English_Written`;
       } 
       else if (subject == "Mathematics Written" || subject == "MATHEMATICS WRITTEN") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${classes}&SUBJECT=Mathematics_Written`;
       } 
       else if (subject == "English Oral" || subject == "ENGLISH ORAL") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${classes}&SUBJECT=English_Oral`;
       } 
       else if (subject == "Mathematics Oral" || subject == "MATHEMATICS ORAL") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${classes}&SUBJECT=Mathematics_Oral`;
       }
       else if (subject == "Hindi Oral" || subject == "HINDI ORAL") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${classes}&SUBJECT=Hindi_Oral`;
       }
       else if (subject == "Hindi Written" || subject == "HINDI WRITTEN") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${classes}&SUBJECT=Hindi_Written`;
       }
       else if (subject == "General Awareness Written" || subject == "GENERAL AWARENESS WRITTEN") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${classes}&SUBJECT=General_Awareness_Written`;
       }
       else if (subject == "General Awareness Oral" || subject == "GENERAL AWARENESS ORAL") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=General_Awareness_Oral`;
       }
     }
     else if (classes == 'Sr. Kg' || classes == 'Sr. KG') {
       if (subject == "English Written" || subject == "ENGLISH WRITTEN") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${classes}&SUBJECT=English_Written`;
       } 
       else if (subject == "Mathematics Written" || subject == "MATHEMATICS WRITTEN") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Mathematics_Written`;
       } 
       else if (subject == "English Oral" || subject == "ENGLISH ORAL") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=English_Oral`;
       } 
       else if (subject == "Hindi Oral" || subject == "HINDI ORAL") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Hindi_Oral`;
       }
       else if (subject == "Hindi Written" || subject == "HINDI WRITTEN") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Hindi_Written`;
       }
       else if (subject == "General Awareness Written" || subject == "GENERAL AWARENESS WRITTEN") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=General_Awareness_Written`;
       }
       else if (subject == "General Awareness Oral" || subject == "GENERAL AWARENESS ORAL") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=General_Awareness_Oral`;
       }
     }
     else if (classes == 'I' || classes == 'II' || classes == 'III' || classes == 'IV' || classes == 'V') {
       if (subject == "General Knowledge"  || subject == 'GENERAL KNOWLEDGE') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${classes}&SUBJECT=General_Knowledge`;
       } else if (subject == "English"  || subject == 'ENGLISH') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       } else if (subject == "Mathematics" || subject == 'MATHEMATICS') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       } else if (subject == "Hindi" || subject == 'HINDI') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
        }&SUBJECT=${subject}`;
       } else if (subject == "Punjabi" ||subject == "PUNJABI") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       }
        else if (subject == "Computer Application" ||subject == "COMPUTER APPLICATION") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Computer_Application`;
       }
       else if (subject == "Environmental Studies" ||subject == "ENVIRONMENTAL STUDIES") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Environmental_Studies`;
        } else {
         alert("Invalid Subject Entered!");
         document.getElementById("syllabus").style.display = "block";
       }
     }
     else if (classes == 'VI' || classes == 'VII') {
       if (subject == "General Knowledge"  || subject == 'GENERAL KNOWLEDGE') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${classes}&SUBJECT=General_Knowledge`;
       } else if (subject == "English"  || subject == 'ENGLISH') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       } else if (subject == "Mathematics" ||subject == 'MATHEMATICS') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       } else if (subject == "Hindi" ||subject == 'HINDI') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       } else if (subject == "Punjabi" ||subject == "PUNJABI") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       } else if (subject == "Science" ||subject == "SCIENCE") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
        }&SUBJECT=${subject}`;
       } else if (subject == "Social Science" ||subject == "SOCIAL SCIENCE") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Social_Science`;
       }
       else if (subject == "sst" ||subject == "SST") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Social_Science`;
       }
       else if (subject == "Social Studies" || subject == "SOCIAL STUDIES") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Social_Science`;
        }
        else if (subject == "Computer Application" || subject == "COMPUTER APPLICATION") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Computer_Application`;
        }
        else if (subject == "Environmental Studies" || subject == "ENVIRONMENTAL STUDIES") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${classes}&SUBJECT=Environmental_Studies`;
        }
         else {
         alert("Invalid Subject Entered!");
         document.getElementById("syllabus").style.display = "block";
       }
     }
     else if (classes == 'VIII') {
       if (subject == "General Knowledge"  || subject == 'GENERAL KNOWLEDGE') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${classes}&SUBJECT=General_Knowledge`;
       } else if (subject == "English"  || subject == 'ENGLISH') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       } else if (subject == "Mathematics" ||subject == 'MATHEMATICS') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       } else if (subject == "Hindi" || subject == 'HINDI') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       } else if (subject == "Punjabi" ||subject == "PUNJABI") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       } else if (subject == "Science" ||subject == "SCIENCE") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       } else if (subject == "Social Science" || subject == "SOCIAL SCIENCE") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Social_Science`;
       }
       else if (subject == "Social Studies" || subject == "SOCIAL STUDIES") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Social_Science`;
        }
        else if (subject == "sst" ||subject ==  "SST") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Social_Science`;
       }
        else if (subject == "Environmental Studies" || subject == "ENVIRONMENTAL STUDIES") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Environmental_Studies`;
        }
         else {
         alert("Invalid Subject Entered!");
         document.getElementById("syllabus").style.display = "block";
       }
     }
     else if (classes == 'IX' || classes == 'X') {
      if (subject == "English" || subject == 'ENGLISH') {
       window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
         classes
       }&SUBJECT=${subject}`;
     } else if (subject == "Mathematics" ||subject ==  'MATHEMATICS') {
       window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
         classes
       }&SUBJECT=${subject}`;
     } else if (subject == "Hindi" || subject == 'HINDI') {
       window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
         classes
       }&SUBJECT=${subject}`;
     } else if (subject == "Punjabi" ||subject ==  "PUNJABI") {
       window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
         classes
       }&SUBJECT=${subject}`;
     } else if (subject == "Science" ||subject ==  "SCIENCE") {
       window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
         classes
       }&SUBJECT=${subject}`;
     } else if (subject == "Social Science" ||subject ==  "SOCIAL SCIENCE") {
       window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
         classes
       }&SUBJECT=Social_Science`;
     }
     else if (subject == "sst" || subject == "SST") {
       window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
         classes
       }&SUBJECT=Social_Science`;
     }
     else if (subject == "Social Studies" ||subject ==  "SOCIAL STUDIES") {
       window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
         classes
       }&SUBJECT=Social_Science`;
      }
      else if (subject == "Information Technology" ||subject ==  "INFORMATION TECHNOLOGY") {
       window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
         classes
       }&SUBJECT=Information_Technology`;
      } else {
       alert("Invalid Subject Entered!");
       document.getElementById("syllabus").style.display = "block";
     }
     }
     else if (classes == 'XI') {
       if (subject == "English" || subject == 'ENGLISH') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       }
         else if (subject == "Physical Education" || subject == "PHYSICAL EDUCATION") {
           window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
             classes
           }&SUBJECT=Physical_Education`;
       }
       else if (subject == "Dance" || subject == 'DANCE') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
        } 
        else if (subject == "Music Instrumental" || subject == "MUSIC INSTRUMENTAL") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Music_Instrumental`;
     }
     else if (subject == "Physics" || subject == "PHYSICS") {
       window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
         classes
       }&SUBJECT=Physics`;
   }
        else if (subject == "Chemistry" || subject == 'CHEMISTRY') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Chemistry`;
       } 
       else if (subject == "Accounts" ||subject == 'ACCOUNTS') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Accounts`;
       }
       else if (subject == "Business Studies" ||subject == 'BUSINESS STUDIES') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Business_Studies`;
       }
       else if (subject == "Economics" ||subject == 'ECONOMICS') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Economics`;
       }
       else if (subject == "Political Science" ||subject == 'POLITICAL SCIENCE') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Political_Science`;
       }
       else if (subject == "History" ||subject == 'HISTORY') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=History`;
       } 
       else if (subject == "Psychology" ||subject == 'PSYCHOLOGY') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Psychology`;
       }
       else if (subject == "Home Science" ||subject == 'HOME SCIENCE') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Home_Science`;
       }
        else if (subject == "Punjabi" ||subject == "PUNJABI") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       } 
       else if (subject == "Biology" ||subject == "BIOLOGY") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       }
        else if (subject == "Information Technology" ||subject == "INFORMATION TECHNOLOGY") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Information_Technology`;
        } else {
         alert("Invalid Subject Entered!");
         document.getElementById("syllabus").style.display = "block";
       }
     }
     else if (classes == 'XII') {
       if (subject == "English" || subject == 'ENGLISH') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       }
         else if (subject == "Physical Education" || subject == "PHYSICAL EDUCATION") {
           window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
             classes
           }&SUBJECT=Physical_Education`;
       }
       else if (subject == "Painting" || subject == "PAINTING") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Painting`;
     }
       else if (subject == "Dance" || subject == 'DANCE') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
        } 
        else if (subject == "Music Instrumental" || subject == "MUSIC INSTRUMENTAL") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Music_Instrumental`;
     }
     else if (subject == "Physics" || subject == "PHYSICS") {
       window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
         classes
       }&SUBJECT=Physics`;
   }
        else if (subject == "Chemistry" || subject == 'CHEMISTRY') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Chemistry`;
       } 
       else if (subject == "Accounts" ||subject == 'ACCOUNTS') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Accounts`;
       }
       else if (subject == "Business Studies" ||subject == 'BUSINESS STUDIES') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Business_Studies`;
       }
       else if (subject == "Economics" ||subject == 'ECONOMICS') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Economics`;
       }
       else if (subject == "Political Science" ||subject == 'POLITICAL SCIENCE') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Political_Science`;
       }
       else if (subject == "History" ||subject == 'HISTORY') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=History`;
       } 
       else if (subject == "Psychology" ||subject == 'PSYCHOLOGY') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Psychology`;
       }
       else if (subject == "Home Science" ||subject == 'HOME SCIENCE') {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Home_Science`;
       }
        else if (subject == "Punjabi" ||subject == "PUNJABI") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       } 
       else if (subject == "Biology" ||subject == "BIOLOGY") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=${subject}`;
       }
        else if (subject == "Information Technology" ||subject == "INFORMATION TECHNOLOGY") {
         window.location = `http://www.gobindgarhpublicschool.in/Syllabus_2020_21/SubjectSyllabusLogin1.php?CLASS=${
           classes
         }&SUBJECT=Information_Technology`;
        } else {
         alert("Invalid Subject Entered!");
         document.getElementById("syllabus").style.display = "block";
       }
     }
   });
   }
  }
};
function removeItem() {
  localStorage.removeItem("show");
  localStorage.removeItem("name");
  localStorage.removeItem("syllabus");
  localStorage.removeItem("section");
  localStorage.removeItem('classes');
  if (
    localStorage.length !== 0 ||
    localStorage.length !== undefined ||
    localStorage.length !== null
  ) {
    document.getElementById("home").style.display = "none";
    document.getElementById("login").style.display = "block";
  }
}
var animation_loader = document.getElementById("loader");
window.addEventListener("load", function(){
    animation_loader.style.display = "none";
})