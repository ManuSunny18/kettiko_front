module.exports =  {
    "_id": "599267184894010cf3e82af0",
    "version": "v1",
    "deleted": false,
    "questions": {
        "preferences": [
            {
                "_id": "f5716e642f1c3a3c0a83d494d3659a95",
                "question": "Preferred caste/denomination of your match",
                "type": "multiSelection",
                "choice": {
                    "010": "Christian others",
                    "009": "rc syrian christian",
                    "008": "rc latin christian",
                    "007": "orthodox",
                    "006": "marthomite",
                    "005": "Knanaya jacobite",
                    "004": "Knanaya catholic",
                    "003": "Jacobite",
                    "002": "Chaldean Christian",
                    "001": "Anglo Indian"
                },
                "childLink": [],
                "ansTag": [],
                "category": "preferences"
            },
            {
                "_id": "6baf9166583396f13d4230c71bb6578f",
                "question": "Preferred age range of your match",
                "type": "range",
                "childLink": [],
                "ansTag": [],
                "category": "preferences"
            },
            {
                "_id": "5faa2a97f0db46e9bea658d53828e7e6",
                "question": "Preferred height range of your match",
                "type": "range",
                "childLink": [],
                "ansTag": [],
                "category": "preferences"
            },
            {
                "_id": "ef90adf3c0b7c791422937e7c6577f51",
                "question": "Preferred smoking habits of your match",
                "type": "singleSelection",
                "choice": {
                    "003": "Few times a week",
                    "002": "Never",
                    "kac-idm": "It doesn't matter"
                },
                "childLink": [],
                "ansTag": [],
                "category": "preferences"
            },
            {
                "_id": "ca46e33e911a3e76b4c1a8b03c4228f2",
                "question": "Preferred drinking habits of your match",
                "type": "multiSelection",
                "choice": {
                    "004": "On special occasions",
                    "003": "Few times a week",
                    "002": "Never",
                    "kac-idm": "It doesn't matter"
                },
                "childLink": [],
                "ansTag": [],
                "category": "preferences"
            },
            {
                "_id": "efa98e9daf515a45b7c715a86b2dfc84",
                "question": "Preferred eating habits of your match",
                "type": "multiSelection",
                "choice": {
                    "004": "Eggterian",
                    "003": "Non-vegeterian",
                    "002": "Vegeterian",
                    "kac-idm": "It doesn't matter"
                },
                "childLink": [],
                "ansTag": [],
                "category": "preferences"
            },
            {
                "_id": "50ee7ccdc529d973195608513c1298ac",
                "question": "Preferred economic class of your match?",
                "type": "multiSelection",
                "choice": {
                    "005": "Rich",
                    "004": "Upper middle class",
                    "003": "Middle class",
                    "002": "Lower Middle class",
                    "kac-idm": "It doesn't matter"
                },
                "childLink": [],
                "ansTag": [],
                "category": "preferences"
            },
            {
                "_id": "31f4a572fa95fab4e586424aa3d73741",
                "question": "Preferred family category of your match?",
                "type": "multiSelection",
                "choice": {
                    "007": "NRI family",
                    "006": "Agriculture family",
                    "005": "Self-employed family",
                    "004": "Business family",
                    "003": "Working (Govt) family",
                    "002": "Working (Pvt) family",
                    "kac-idm": "It doesn't matter"
                },
                "childLink": [],
                "ansTag": [],
                "category": "preferences"
            },
            {
                "_id": "4541be3e585ccf2cb28b5d67b16f30cf",
                "question": "Your match's family should be currently settled in?",
                "type": "multiSelection",
                "choice": {
                    "004": "Outside India",
                    "003": "Outside Kerala, Within India",
                    "002": "Kerala",
                    "kac-idm": "It doesn't matter"
                },
                "childLink": [
                    "de990a929c3ae14303d53ccd7f03f7b1",
                    "071b423565a95c971a4881f86a9047a1",
                    "1669e3f9812146cf5fffd82ff5574e1d"
                ],
                "ansTag": [],
                "category": "preferences"
            },
            {
                "_id": "de990a929c3ae14303d53ccd7f03f7b1",
                "question": "Your match's family should be settled in Kerala at?",
                "type": "multiSelection",
                "choice": {
                    "013": "Wayanad",
                    "012": "Thrissur",
                    "011": "Thiruvananthapuram",
                    "010": "Pathanamthitta",
                    "009": "Palakkad",
                    "008": "Kozhikode",
                    "007": "Kollam",
                    "006": "Kasaragod",
                    "005": "Kannur",
                    "004": "Idukki",
                    "003": "Ernakulam",
                    "002": "Alapuzha",
                    "kac-idm": "It doesn't matter"
                },
                "parentLink": "4541be3e585ccf2cb28b5d67b16f30cf",
                "childLink": [],
                "ansTag": [
                    "002"
                ],
                "category": "preferences"
            },
            {
                "_id": "071b423565a95c971a4881f86a9047a1",
                "question": "Your match's family should be settled outside Kerala at?",
                "type": "multiSelection",
                "choice": {
                    "kac-cust": "Others",
                    "013": "Vishakapatnam",
                    "012": "Surat",
                    "011": "Pune",
                    "010": "Nagpur",
                    "009": "Mumbai",
                    "008": "Kolkata",
                    "007": "Hyderabad",
                    "006": "Delhi",
                    "005": "Coimbatore",
                    "004": "Chennai",
                    "003": "Bengaluru",
                    "002": "Ahmedabad",
                    "kac-idm": "It doesn't matter"
                },
                "customChoice": "state",
                "parentLink": "4541be3e585ccf2cb28b5d67b16f30cf",
                "childLink": [],
                "ansTag": [
                    "003"
                ],
                "category": "preferences"
            },
            {
                "_id": "1669e3f9812146cf5fffd82ff5574e1d",
                "question": "Your match's family should be settled outside India at?",
                "type": "multiSelection",
                "choice": {
                    "kac-cust": "Others",
                    "014": "USA",
                    "013": "UK",
                    "012": "UAE",
                    "011": "Singapore",
                    "010": "Saudi Arabia",
                    "009": "Qatar",
                    "008": "Oman",
                    "007": "Malaysia",
                    "006": "Kuwait",
                    "005": "Ireland",
                    "004": "European union",
                    "003": "Bahrain",
                    "002": "Australia",
                    "kac-idm": "It doesn't matter"
                },
                "customChoice": "country",
                "parentLink": "4541be3e585ccf2cb28b5d67b16f30cf",
                "childLink": [],
                "ansTag": [
                    "003"
                ],
                "category": "preferences"
            },
            {
                "_id": "ad96f50b7c54176c5e03d12eebb8d65f",
                "question": "Your match's family roots in Kerala should be from?",
                "type": "multiSelection",
                "choice": {
                    "013": "Wayanad",
                    "012": "Thrissur",
                    "011": "Thiruvananthapuram",
                    "010": "Pathanamthitta",
                    "009": "Palakkad",
                    "008": "Kozhikode",
                    "007": "Kollam",
                    "006": "Kasaragod",
                    "005": "Kannur",
                    "004": "Idukki",
                    "003": "Ernakulam",
                    "002": "Alapuzha",
                    "kac-idm": "It doesn't matter"
                },
                "childLink": [],
                "ansTag": [],
                "category": "preferences"
            },
            {
                "_id": "fa0584a3a59488fd5d47923d2f6c9137",
                "question": "Preferred education level of your match?",
                "type": "multiSelection",
                "choice": {
                    "005": "Doctorate/PHD",
                    "004": "Master's",
                    "003": "Degree",
                    "002": "Diploma",
                    "kac-idm": "It doesn't matter"
                },
                "childLink": [
                    "f474b1c8da2373a268d2fbe272a27e9b",
                    "53f1d3556e529b1221632eaec61ae071"
                ],
                "ansTag": [],
                "category": "preferences"
            },
            {
                "_id": "f474b1c8da2373a268d2fbe272a27e9b",
                "question": "Bachelor's degree you prefer for your match?",
                "type": "multiSelection",
                "choice": {
                    "kac-cust": "Others",
                    "018": "MBBS",
                    "017": "LLB",
                    "016": "ICWAI",
                    "015": "CA",
                    "014": "BSC Nursing",
                    "013": "BSC",
                    "012": "BHMS",
                    "011": "BDS",
                    "010": "BCOM",
                    "009": "BCA",
                    "008": "BBA",
                    "007": "BAMS",
                    "006": "BA",
                    "005": "B Tech / BE",
                    "004": "B Pharm",
                    "003": "B Ed",
                    "002": "B ARCH",
                    "kac-idm": "It doesn't matter"
                },
                "customChoice": "degree",
                "parentLink": "fa0584a3a59488fd5d47923d2f6c9137",
                "childLink": [],
                "ansTag": [
                    "003"
                ],
                "category": "preferences"
            },
            {
                "_id": "53f1d3556e529b1221632eaec61ae071",
                "question": "Master's degree you prefer for your match?",
                "type": "multiSelection",
                "choice": {
                    "kac-cust": "Others",
                    "016": "MSC Nurs",
                    "015": "MSC",
                    "014": "MPharm",
                    "013": "MHMS",
                    "012": "MEd",
                    "011": "MDS",
                    "010": "MD",
                    "009": "MCOM",
                    "008": "MCA",
                    "007": "MBA",
                    "006": "MAMS",
                    "005": "MA",
                    "004": "M Tech / ME",
                    "003": "M ARCH",
                    "002": "LLM",
                    "kac-idm": "It doesn't matter"
                },
                "customChoice": "mDegree",
                "parentLink": "fa0584a3a59488fd5d47923d2f6c9137",
                "childLink": [],
                "ansTag": [
                    "003"
                ],
                "category": "preferences"
            },
            {
                "_id": "71f5b4e12d975941bcb54ef06624e86d",
                "question": "Preferred job category your match?",
                "type": "multiSelection",
                "choice": {
                    "010": "Not working",
                    "009": "Student",
                    "008": "Agriculture",
                    "007": "Self-employed",
                    "006": "Business",
                    "005": "Private organization employee",
                    "004": "Indian armed forces",
                    "003": "State government employee",
                    "002": "Central government employee",
                    "kac-idm": "It doesn't matter"
                },
                "parentLink": "fa0584a3a59488fd5d47923d2f6c9137",
                "childLink": [],
                "ansTag": [
                    "004"
                ],
                "category": "preferences"
            },
            {
                "_id": "f88aeb611776070d4dac77fddad189fe",
                "question": "Preferred current/work location of your match?",
                "type": "multiSelection",
                "choice": {
                    "004": "Outside India",
                    "003": "Outside Kerala, Within India",
                    "002": "Kerala",
                    "kac-idm": "It doesn't matter"
                },
                "childLink": [
                    "f3c901fd5a2c2aeadca4d41b19b560f7",
                    "aff4ce6e50649930fef41804cd1d1724",
                    "16bae10bdc67170c08673b8c2325987d"
                ],
                "ansTag": [],
                "category": "preferences"
            },
            {
                "_id": "f3c901fd5a2c2aeadca4d41b19b560f7",
                "question": "Preferred current/work location of your match in Kerala",
                "type": "multiSelection",
                "choice": {
                    "013": "Wayanad",
                    "012": "Thrissur",
                    "011": "Thiruvananthapuram",
                    "010": "Pathanamthitta",
                    "009": "Palakkad",
                    "008": "Kozhikode",
                    "007": "Kollam",
                    "006": "Kasaragod",
                    "005": "Kannur",
                    "004": "Idukki",
                    "003": "Ernakulam",
                    "002": "Alapuzha",
                    "kac-idm": "It doesn't matter"
                },
                "parentLink": "f88aeb611776070d4dac77fddad189fe",
                "childLink": [],
                "ansTag": [
                    "002"
                ],
                "category": "preferences"
            },
            {
                "_id": "aff4ce6e50649930fef41804cd1d1724",
                "question": "Preferred current/work location of your match outside Kerala within India",
                "type": "multiSelection",
                "choice": {
                    "kac-cust": "Others",
                    "013": "Vishakapatnam",
                    "012": "Surat",
                    "011": "Pune",
                    "010": "Nagpur",
                    "009": "Mumbai",
                    "008": "Kolkata",
                    "007": "Hyderabad",
                    "006": "Delhi",
                    "005": "Coimbatore",
                    "004": "Chennai",
                    "003": "Bengaluru",
                    "002": "Ahmedabad",
                    "kac-idm": "It doesn't matter"
                },
                "customChoice": "state",
                "parentLink": "f88aeb611776070d4dac77fddad189fe",
                "childLink": [],
                "ansTag": [
                    "003"
                ],
                "category": "preferences"
            },
            {
                "_id": "16bae10bdc67170c08673b8c2325987d",
                "question": "Preferred current/work location of your match outside India",
                "type": "multiSelection",
                "choice": {
                    "kac-cust": "Others",
                    "014": "USA",
                    "013": "UK",
                    "012": "UAE",
                    "011": "Singapore",
                    "010": "Saudi Arabia",
                    "009": "Qatar",
                    "008": "Oman",
                    "007": "Malaysia",
                    "006": "Kuwait",
                    "005": "Ireland",
                    "004": "European union",
                    "003": "Bahrain",
                    "002": "Australia",
                    "kac-idm": "It doesn't matter"
                },
                "customChoice": "country",
                "parentLink": "f88aeb611776070d4dac77fddad189fe",
                "childLink": [],
                "ansTag": [
                    "004"
                ],
                "category": "preferences"
            },
            {
                "_id": "2967c627f9ccfe0029fb8caf37145df9",
                "question": "Preferred income of your match?",
                "type": "multiSelection",
                "choice": {
                    "011": ">100 lacs",
                    "010": "76-100 lacs",
                    "009": "51-75 lacs",
                    "008": "21-25 lacs",
                    "007": "26-50 lacs",
                    "006": "16-20 lacs",
                    "005": "11-15 lacs",
                    "004": "06-10 lacs",
                    "003": "04-05 lacs",
                    "002": "01-03 lac",
                    "kac-idm": "It doesn't matter"
                },
                "childLink": [],
                "ansTag": [],
                "category": "preferences"
            },
            {
                "_id": "1c17c9468dcaced159f02a31fbfa2712",
                "question": "Do you prefer someone who was brought up outside Kerala?",
                "type": "singleSelection",
                "choice": {
                    "002": "No",
                    "001": "Yes"
                },
                "childLink": [],
                "ansTag": [],
                "category": "preferences"
            },
            {
                "_id": "20094e55ab5e73e9da84b43fd5e9127d",
                "question": "Do you prefer if the match is the only child of the family?",
                "type": "singleSelection",
                "choice": {
                    "002": "No",
                    "001": "Yes"
                },
                "childLink": [],
                "ansTag": [],
                "category": "preferences"
            }
        ],
        "workAndEducation": [
            {
                "_id": "2c743aefb1e2d04b61e55527c10fac16",
                "question": "What is your highest level of education?",
                "type": "singleSelection",
                "choice": {
                    "004": "Doctorate/PHD",
                    "003": "Master's",
                    "002": "Degree",
                    "001": "Diploma"
                },
                "childLink": [
                    "e9ccc6f89f108b3ce1d38c329ba94468",
                    "bf8650b52127db1ea509d6761bf1c53c"
                ],
                "ansTag": [],
                "category": "workAndEducation"
            },
            {
                "_id": "e9ccc6f89f108b3ce1d38c329ba94468",
                "question": "Select your Bachelor's degree?",
                "type": "singleSelection",
                "choice": {
                    "kac-cust": "Others",
                    "017": "MBBS",
                    "016": "LLB",
                    "015": "ICWAI",
                    "014": "CA",
                    "013": "BSC Nursing",
                    "012": "BSC",
                    "011": "BHMS",
                    "010": "BDS",
                    "009": "BCOM",
                    "008": "BCA",
                    "007": "BBA",
                    "006": "BAMS",
                    "005": "BA",
                    "004": "B Tech / BE",
                    "003": "B Pharm",
                    "002": "B Ed",
                    "001": "B ARCH"
                },
                "customChoice": "degree",
                "parentLink": "2c743aefb1e2d04b61e55527c10fac16",
                "childLink": [],
                "ansTag": [
                    "002"
                ],
                "category": "workAndEducation"
            },
            {
                "_id": "bf8650b52127db1ea509d6761bf1c53c",
                "question": "Select your Master's degree",
                "type": "singleSelection",
                "choice": {
                    "kac-cust": "Others",
                    "015": "MSC Nursing",
                    "014": "MSC",
                    "013": "MPharm",
                    "012": "MHMS",
                    "011": "MEd",
                    "010": "MDS",
                    "009": "MD",
                    "008": "MCOM",
                    "007": "MCA",
                    "006": "MBA",
                    "005": "MAMS",
                    "004": "MA",
                    "003": "M Tech / ME",
                    "002": "M ARCH",
                    "001": "LLM"
                },
                "customChoice": "mDegree",
                "parentLink": "2c743aefb1e2d04b61e55527c10fac16",
                "childLink": [],
                "ansTag": [
                    "003"
                ],
                "category": "workAndEducation"
            },
            {
                "_id": "dcf0bfb9ba38733198d473015945adb7",
                "question": "What do you do now?",
                "type": "singleSelection",
                "choice": {
                    "009": "Not working",
                    "008": "Student",
                    "007": "Agriculture",
                    "006": "Self-employed",
                    "005": "Business",
                    "004": "Private organization employee",
                    "003": "Indian armed forces",
                    "002": "State government employee",
                    "001": "Central government employee"
                },
                "childLink": [],
                "ansTag": [],
                "category": "workAndEducation"
            },
            {
                "_id": "4ce9286409507077dd51638f5bf5ee6f",
                "question": "Your current/work location",
                "type": "singleSelection",
                "choice": {
                    "003": "Outside India",
                    "002": "Outside Kerala, Within India",
                    "001": "Kerala"
                },
                "childLink": [
                    "65b4102e28093d9f91d056b2327d0f71",
                    "c83b1796506f7371b858070098df5cca",
                    "9e3c35c5d195fc893fd89bd209dda5cf"
                ],
                "ansTag": [],
                "category": "workAndEducation"
            },
            {
                "_id": "65b4102e28093d9f91d056b2327d0f71",
                "question": "Your current/work location in Kerala",
                "type": "singleSelection",
                "choice": {
                    "012": "Wayanad",
                    "011": "Thrissur",
                    "010": "Thiruvananthapuram",
                    "009": "Pathanamthitta",
                    "008": "Palakkad",
                    "007": "Kozhikode",
                    "006": "Kollam",
                    "005": "Kasaragod",
                    "004": "Kannur",
                    "003": "Idukki",
                    "002": "Ernakulam",
                    "001": "Alapuzha"
                },
                "parentLink": "4ce9286409507077dd51638f5bf5ee6f",
                "childLink": [],
                "ansTag": [
                    "001"
                ],
                "category": "workAndEducation"
            },
            {
                "_id": "c83b1796506f7371b858070098df5cca",
                "question": "Your current/work location in India",
                "type": "singleSelection",
                "choice": {
                    "kac-cust": "Others",
                    "012": "Vishakapatnam",
                    "011": "Surat",
                    "010": "Pune",
                    "009": "Nagpur",
                    "008": "Mumbai",
                    "007": "Kolkata",
                    "006": "Hyderabad",
                    "005": "Delhi",
                    "004": "Coimbatore",
                    "003": "Chennai",
                    "002": "Bengaluru",
                    "001": "Ahmedabad"
                },
                "customChoice": "state",
                "parentLink": "4ce9286409507077dd51638f5bf5ee6f",
                "childLink": [],
                "ansTag": [
                    "002"
                ],
                "category": "workAndEducation"
            },
            {
                "_id": "9e3c35c5d195fc893fd89bd209dda5cf",
                "question": "Your current/work outside India",
                "type": "singleSelection",
                "choice": {
                    "kac-cust": "Others",
                    "013": "USA",
                    "012": "UK",
                    "011": "UAE",
                    "010": "Singapore",
                    "009": "Saudi Arabia",
                    "008": "Qatar",
                    "007": "Oman",
                    "006": "Malaysia",
                    "005": "Kuwait",
                    "004": "Ireland",
                    "003": "European union",
                    "002": "Bahrain",
                    "001": "Australia"
                },
                "customChoice": "country",
                "parentLink": "4ce9286409507077dd51638f5bf5ee6f",
                "childLink": [],
                "ansTag": [
                    "003"
                ],
                "category": "workAndEducation"
            },
            {
                "_id": "872068c052a522df35819125d8269e71",
                "question": "Would you like to share your income details?",
                "type": "singleSelection",
                "choice": {
                    "002": "No",
                    "001": "Yes"
                },
                "childLink": [
                    "a9250bb212529b898d25d8409874923b"
                ],
                "ansTag": [],
                "category": "workAndEducation"
            },
            {
                "_id": "a9250bb212529b898d25d8409874923b",
                "question": "How much is your annual income?",
                "type": "singleSelection",
                "choice": {
                    "010": ">100 lacs",
                    "009": "76-100 lacs",
                    "008": "51-75 lacs",
                    "007": "21-25 lacs",
                    "006": "26-50 lacs",
                    "005": "16-20 lacs",
                    "004": "11-15 lacs",
                    "003": "06-10 lacs",
                    "002": "04-05 lacs",
                    "001": "01-03 lac"
                },
                "parentLink": "872068c052a522df35819125d8269e71",
                "childLink": [],
                "ansTag": [
                    "001"
                ],
                "category": "workAndEducation"
            }
        ],
        "youAndFamily": [
            {
                "_id": "ed5506a1af26a7fa468bf18b7f95aa1c",
                "question": "How many brothers and sisters you have?",
                "type": "singleSelection",
                "choice": {
                    "008": ">6",
                    "007": "6",
                    "006": "5",
                    "005": "4",
                    "004": "3",
                    "003": "2",
                    "002": "1",
                    "001": "0"
                },
                "childLink": [],
                "ansTag": [],
                "category": "youAndFamily"
            },
            {
                "_id": "f9c8adea052911ccc366e4adb3e45d40",
                "question": "How tall are you?",
                "type": "scale",
                "childLink": [],
                "ansTag": [],
                "category": "youAndFamily"
            },
            {
                "_id": " bf79c886a41757451e07d6236d178e2e",
                "question": "When is your Birthday?",
                "type": "date",
                "childLink": [],
                "ansTag": [],
                "category": "youAndFamily"
            },
            {
                "_id": "87d46a9f57921b8ba34d2d67deb51eb5",
                "question": "Your smoking habits?",
                "type": "singleSelection",
                "choice": {
                    "002": "Few times a week",
                    "001": "Never"
                },
                "childLink": [],
                "ansTag": [],
                "category": "youAndFamily"
            },
            {
                "_id": "be8a88bfeee0c3ab08f919f4e8d937f6",
                "question": "Your Drinking Habits?",
                "type": "singleSelection",
                "choice": {
                    "003": "Few times a week",
                    "002": "On special occasions",
                    "001": "Never"
                },
                "childLink": [],
                "ansTag": [],
                "category": "youAndFamily"
            },
            {
                "_id": "1f883479a96e47033558a3c3baaa4bff",
                "question": "Your eating habits?",
                "type": "singleSelection",
                "choice": {
                    "003": "Eggterian",
                    "002": "Non-vegeterian",
                    "001": "Vegeterian"
                },
                "childLink": [],
                "ansTag": [],
                "category": "youAndFamily"
            },
            {
                "_id": "919a5870f5d40ea9899df1c3c61bc2b8",
                "question": "Were you brought up outside of Kerala?",
                "type": "singleSelection",
                "choice": {
                    "002": "No",
                    "001": "Yes"
                },
                "childLink": [],
                "ansTag": [],
                "category": "youAndFamily"
            },
            {
                "_id": " b01be680a38c490fd09a694ae5918a23",
                "question": "The economic class your family belongs to?",
                "type": "singleSelection",
                "choice": {
                    "004": "Rich",
                    "003": "Upper middle class",
                    "002": "Middle class",
                    "001": "Lower Middle class"
                },
                "childLink": [],
                "ansTag": [],
                "category": "youAndFamily"
            },
            {
                "_id": "  74b4cc2e193e93fd89787d4ea37d65a5",
                "question": "The category explains your family the best?",
                "type": "singleSelection",
                "choice": {
                    "007": "Other",
                    "006": "NRI family",
                    "005": "Agriculture family",
                    "004": "Self-employed family",
                    "003": "Business family",
                    "002": "Working (Govt) family",
                    "001": "Working (Pvt) family"
                },
                "childLink": [],
                "ansTag": [],
                "category": "youAndFamily"
            },
            {
                "_id": "  2ac30aca43add19ecbe1d3c5975251bd",
                "question": "The caste/denomination your family belongs to?",
                "type": "singleSelection",
                "choice": {
                    "010": "Christian others",
                    "009": "rc syrian christian",
                    "008": "rc latin christian",
                    "007": "orthodox",
                    "006": "marthomite",
                    "005": "Knanaya jacobite",
                    "004": "Knanaya catholic",
                    "003": "Jacobite",
                    "002": "Chaldean Christian",
                    "001": "Anglo Indian"
                },
                "childLink": [],
                "ansTag": [],
                "category": "youAndFamily"
            },
            {
                "_id": "  e8866337975897fb2e9757100a945b9d",
                "question": "Where is your family settled now?",
                "type": "singleSelection",
                "choice": {
                    "003": "Outside India",
                    "002": "Outside Kerala, Within India",
                    "001": "Kerala"
                },
                "childLink": [
                    "1db3371bffbb16baa1fc7f68a0d08f2a",
                    "a5db474bd5179470419eb928834ee30f",
                    "2eb0ef2cf33dd61594a9674ea4a46f20"
                ],
                "ansTag": [],
                "category": "youAndFamily"
            },
            {
                "_id": "1db3371bffbb16baa1fc7f68a0d08f2a",
                "question": "Where is your family settled in Kerala?",
                "type": "singleSelection",
                "choice": {
                    "012": "Wayanad",
                    "011": "Thrissur",
                    "010": "Thiruvananthapuram",
                    "009": "Pathanamthitta",
                    "008": "Palakkad",
                    "007": "Kozhikode",
                    "006": "Kollam",
                    "005": "Kasaragod",
                    "004": "Kannur",
                    "003": "Idukki",
                    "002": "Ernakulam",
                    "001": "Alapuzha"
                },
                "parentLink": "e8866337975897fb2e9757100a945b9d",
                "childLink": [],
                "ansTag": [
                    "001"
                ],
                "category": "youAndFamily"
            },
            {
                "_id": "a5db474bd5179470419eb928834ee30f",
                "question": "If outside Kerala within India",
                "type": "singleSelection",
                "choice": {
                    "kac-cust": "Others",
                    "012": "Vishakapatnam",
                    "011": "Surat",
                    "010": "Pune",
                    "009": "Nagpur",
                    "008": "Mumbai",
                    "007": "Kolkata",
                    "006": "Hyderabad",
                    "005": "Delhi",
                    "004": "Coimbatore",
                    "003": "Chennai",
                    "002": "Bengaluru",
                    "001": "Ahmedabad"
                },
                "customChoice": "state",
                "parentLink": "e8866337975897fb2e9757100a945b9d",
                "childLink": [],
                "ansTag": [
                    "002"
                ],
                "category": "youAndFamily"
            },
            {
                "_id": "2eb0ef2cf33dd61594a9674ea4a46f20",
                "question": "If outside India",
                "type": "singleSelection",
                "choice": {
                    "kac-cust": "Others",
                    "013": "USA",
                    "012": "UK",
                    "011": "UAE",
                    "010": "Singapore",
                    "009": "Saudi Arabia",
                    "008": "Qatar",
                    "007": "Oman",
                    "006": "Malaysia",
                    "005": "Kuwait",
                    "004": "Ireland",
                    "003": "European union",
                    "002": "Bahrain",
                    "001": "Australia"
                },
                "customChoice": "country",
                "parentLink": "e8866337975897fb2e9757100a945b9d",
                "childLink": [],
                "ansTag": [
                    "003"
                ],
                "category": "youAndFamily"
            },
            {
                "_id": "d8fb9579ccb2d39bcdd167ba01f14c90",
                "question": "Where is your family basically from?",
                "type": "singleSelection",
                "choice": {
                    "012": "Wayanad",
                    "011": "Thrissur",
                    "010": "Thiruvananthapuram",
                    "009": "Pathanamthitta",
                    "008": "Palakkad",
                    "007": "Kozhikode",
                    "006": "Kollam",
                    "005": "Kasaragod",
                    "004": "Kannur",
                    "003": "Idukki",
                    "002": "Ernakulam",
                    "001": "Alapuzha"
                },
                "childLink": [],
                "ansTag": [],
                "category": "youAndFamily"
            }
        ]
    }
}
