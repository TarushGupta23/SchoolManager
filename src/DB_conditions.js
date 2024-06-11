const db = {
    passingMarks: 33,
    minAttendence: 70,
    groups: ["Aviral", "Newton", "Raman", "Aryabhatta"],
    classes: {
        1: {}, 2: {}, 
        10: {
            "D": {
                students: [ // list of student admin no only!!
                    {rollNo: 2, name: "Doma", pic:'person1.png', group: "Aviral"},
                    {rollNo: 3, name: "Tanjiro Kamado", pic:'person1.png', group: "Newton"},
                    {rollNo: 4, name: "Nezuko Kamamoto", pic:'person1.png', group: "Newton"},
                    {rollNo: 5, name: "Inosuke", pic:'person1.png', group: "Aryabhatta"},
                    {rollNo: 6, name: "Zenitsu Agatsuma", pic:'person1.png', group: "Raman"}
                ]
            }
        },
        11: {
            "Non Medical": {
                students: [ // list of student admin no only!!
                    {rollNo: 37, name: "Itadori Yuji", pic:'person1.png', group: "Aviral"},
                    {rollNo: 38, name: "Gojo Saturo", pic:'person1.png', group: "Newton"},
                    {rollNo: 39, name: "Nanami", pic:'person1.png', group: "Raman"}
                ]
            }
        },
        12: {
            "Non Medical": {
                totalClasses: 92,
                subjects: {
                    maths: {
                        'Class Tests': {
                            'Maximum Marks': [20, 20, 20],
                            'Test Name': ["test 1", "test 2", "test 3"],
                            topics: ["unit 1", "unit 2", "unit 3"]
                        },
                        'Assignments': {
                            'Maximum Marks': [],
                            'Test Name': [],
                            topics: []
                        },
                        'Final Exam': 100,
                        'Mid Term': 50
                    }, physics: {
                        'Class Tests': {
                            'Maximum Marks': [20, 20, 20],
                            'Test Name': ["test 1", "test 2", "test 3"],
                            topics: ["unit 1", "unit 2", "unit 3"]
                        },
                        'Final Exam': 100,
                        'Mid Term': 50,
                        'Assignments': {
                            'Maximum Marks': [],
                            'Test Name': [],
                            topics: []
                        }
                    }, english: {
                        'Class Tests': {
                            'Maximum Marks': [20, 20, 20],
                            'Test Name': ["test 1", "test 2", "test 3"],
                            topics: ["unit 1", "unit 2", "unit 3"]
                        },
                        'Final Exam': 100,
                        'Mid Term': 50,
                        'Assignments': {
                            'Maximum Marks': [],
                            'Test Name': [],
                            topics: []
                        },
                    }, chemistry: {
                        'Class Tests': {
                            'Maximum Marks': [20, 20, 20],
                            'Test Name': ["test 1", "test 2", "test 3"],
                            topics: ["unit 1", "unit 2", "unit 3"]
                        },
                        'Final Exam': 100,
                        'Mid Term': 50,
                        'Assignments': {
                            'Maximum Marks': [],
                            'Test Name': [],
                            topics: []
                        },
                    }
                },
                students: [ // list of student admin no only!!
                    {rollNo: 34, name: "Jhon Hail", pic:'person1.png', group: "Aviral"},
                    {rollNo: 35, name: "Strike Shake", pic:'person1.png', group: "Raman"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 36, name: "Peter Quinn", pic:'person1.png', group: "Newton"},
                    {rollNo: 37, name: "Sam Willson", pic:'person1.png', group: "Aryabhatta"}
                    
                ], timeTable: [
                    ['Period', 1, 2, 3, 4, 5],
                    ['Monday', 'Maths', 'Physics', 'English', 'Chemistry', 'Maths'],
                    ['Tursday', 'Maths', 'Physics', 'English', 'Chemistry', 'Physics'],
                    ['Wednesday', 'Maths', 'Physics', 'English', 'Chemistry', 'English'],
                    ['Thursday', 'Chemistry', 'Physics', 'English', 'Chemistry', 'Maths'],
                    ['Friday', 'Maths', 'Physics', 'English', 'Chemistry', 'Physics'],
                    ['Saturday', 'Maths', 'Physics', 'English', 'Chemistry', '-']
                ]
            }, "Medical" : {}
        }
    }
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const std = {
    name: "Sam Willson",
    profilePic: "person1.png",
    dob: new Date(1999, 1, 19), // 19 feb 1999
    gender: "male",
    'Admission No': 131423,
    group: {name: "Aviral", color: "red"},
    rollNo: 37,
    address: "1032/104 sample address, sample city, near sample land mark",
    parents: [
        {name: "Jane Willson", relation: "mother", contact: "9898198981", income: 14_000, occupation: "cook"},
        {name: "Zeke Yeger", relation: "father", contact: "8787287872", income: 124_000, occupation: "Founder of Titan company"}
    ],
    siblings: [
        {name: "Shake Williom", admissionNo:122129, pic: 'person1.png'},
        {name: "RDJ", admissionNo:3_000, pic: 'person1.png'}
    ],
    class: {
      class: 12,
      section: "Non Medical"
    },
    attendence: 68,
    leaves: {
        0: [4, 5, 6],
        1: [23],
        2: [12, 13],
        3: [14, 15, 16, 17],
        4: [24, 26],
        5: [],
        6: [],
        7: [20, 21, 22, 23],
        8: [11],
        9: [25, 29],
        10: [],
        11: [23, 24, 26]
    },
    subjects: {
        english: {
            'Class Tests': [4, 15, 18],
            'Final Exam': 67,
            'Mid Term': 46,
            'Assignments': []
        }, physics: {
            'Class Tests': [7, 10, 4],
            'Final Exam': 49,
            'Mid Term': 25,
            'Assignments': []
        }, chemistry: {
            'Class Tests': [20, 19, 18],
            'Final Exam': 94,
            'Mid Term': 49,
            'Assignments': []
        }, maths: {
            'Class Tests': [13, 8, 8],
            'Final Exam': 68,
            'Mid Term': 36,
            'Assignments': []
        }
    }, notices: [
        { txt: "This is notice 1", expireDate: new Date("2025-12-08"), subj: "maths" },
        { txt: "This is notice 2", expireDate: new Date("2025-12-08"), subj: "maths" },
        { txt: "This is notice 3", expireDate: new Date("2025-12-08"), subj: "physics" },
        { txt: "This is notice 4", expireDate: new Date("2025-12-08"), subj: "chemistry" },
        { txt: "This is notice 5", expireDate: new Date("2025-12-08"), subj: "chemistry" },
        { txt: "This is notice 5", expireDate: new Date("2025-12-08"), subj: "chemistry" },
        { txt: "This is ggnotice 6", expireDate: new Date("2025-12-08"), subj: "english" }
    ], anecdotalRecord: [
        { txt: "hello this is rec 1" },
        { txt: "hello this is rec 2" },
        { txt: "hello this is rec 3" },
        { txt: "hello this is rec 4" },
        { txt: "hello this is rec 5" }
    ]
};
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const teacher = {
    name: "Mr. John Doe",
    id: 1920384,
    gender: "male",
    salary: 52_000,
    earnedLeaves: [8, 32],
    casualLeaves: [2, 6],
    leaves: {
        casual: [
            [],
            [],
            [],
            [],
            [26, 24],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ], 
        earned: [
            [12, 10],
            [],
            [13, 4],
            [],
            [],
            [22],
            [19],
            [3],
            [],
            [28],
            [],
            []
        ]
    },
    inchargeOf: { // can be null if not an incharge
        class: 12,
        section: "Non Medical"
    }, notices: [
        { txt: "This is notice 3", expireDate: new Date("2025-12-08"), by: "arts department" },
        { txt: "This is notice 4", expireDate: new Date("2025-12-08"), by: "director" },
        { txt: "This is notice 5", expireDate: new Date("2025-12-08"), by: "vice priciple" },
        { txt: "This is notice 6", expireDate: new Date("2025-12-08"), by: "principle" }
    ], classes: [
        {class: 12, section: "Non Medical"},
        {class: 11, section: "Non Medical"},
        {class: 10, section: "D"}
    ],
    timeTable: [
        ['Period', 1, 2, 3, 4, 5],
        ['Monday', '10 D', '-', '12 Non Medical', '11 Non Medical', '-'],
        ['Tuesday', '12 Non Medical', '10 D', '11 Non Medical', '-', '-'],
        ['Wednesday', '12 Non Medical', '11 Non Medical', '10 D', '-', '-'],
        ['Thursday', '12 Non Medical', '11 Non Medical', '10 D', '-', '-'],
        ['Friday', '12 Non Medical', '10 D', '11 Non Medical', '-', '-'],
        ['Saturday', '12 Non Medical', '10 D', '-', '11 Non Medical', '-']
    ],
    degrees: [
        "Degree 1",
        "Degree 2",
        "Degree 3"
    ]
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const school = {
    schoolName: 'Ryan International School',
    website: 'https://www.youtube.com', // can be null for no site
    notices: [
        { txt: "This is notice 1", expireDate: new Date("2025-12-08"), by: "arts department" },
        { txt: "This is notice 2", expireDate: new Date("2025-12-08"), by: "sports department" },
        { txt: "This is notice 3", expireDate: new Date("2025-12-08"), by: "State Head" },
        { txt: "This is notice 4", expireDate: new Date("2025-12-08"), by: "Central Head" },
        { txt: "This is notice 5", expireDate: new Date("2025-12-08"), by: "Ms. Suzume" }
    ], teachers: [
        {oasisNo: 12314, name: 'ramesh', salary: 32_000, subj: 'maths', classes: [1, 3, 5], degree: ['M. tech', 'B. tech']},
        {oasisNo: 12315, name: 'dinesh', salary: 42_000, subj: 'english', classes: [1, 3, 5], degree: ['M. tech', 'B. tech']},
        {oasisNo: 12316, name: 'hinako', salary: 50_000, subj: 'hindi', classes: [1, 3, 5], degree: ['M. tech', 'B. tech']},
        {oasisNo: 12317, name: 'manju', salary: 30_000, subj: 'punjabi', classes: [1, 3, 5], degree: ['M. tech', 'B. tech']},
        {oasisNo: 12318, name: 'xyz', salary: 40_000, subj: 'science', classes: [1, 3, 5], degree: ['M. tech', 'B. tech']},
        {oasisNo: 12319, name: 'abc', salary: 55_000, subj: 'sst', classes: [1, 3, 5], degree: ['M. tech', 'B. tech']},
        {oasisNo: 12320, name: 'def', salary: 45_000, subj: 'science', classes: [2, 4, 6], degree: ['M. tech', 'B. tech']},
        {oasisNo: 12324, name: 'ghi', salary: 35_000, subj: 'maths', classes: [7, 8, 9], degree: ['M. tech', 'B. tech']},
        {oasisNo: 12334, name: 'jkl', salary: 38_000, subj: 'hindi', classes: [7, 8, 9], degree: ['M. tech', 'B. tech']},
        {oasisNo: 12344, name: 'mno', salary: 44_000, subj: 'punjabi', classes: [7, 8, 9], degree: ['M. tech', 'B. tech']},
        {oasisNo: 12354, name: 'pqr', salary: 48_000, subj: 'sst', classes: [7, 8, 9], degree: ['M. tech', 'B. tech']},
        {oasisNo: 12364, name: 'stu', salary: 52_000, subj: 'maths', classes: [10], degree: ['M. tech', 'B. tech']}
    ], students: [
        {name: 'ruby', admissionNo: 1324, fees: 50_000, class: 10, section: 'A', group: 'Aviral'},
        {name: 'rina', admissionNo: 1224, fees: 50_100, class: 9, section: 'B', group: 'Aviral'},
        {name: 'hanjito', admissionNo: 1314, fees: 52_000, class: 8, section: 'C', group: 'Aviral'},
        {name: 'albedo', admissionNo: 1320, fees: 60_000, class: 10, section: 'D', group: 'Aviral'},
        {name: 'einstein', admissionNo: 1234, fees: 45_000, class: 1, section: 'E', group: 'Aviral'},
        {name: 'zenin', admissionNo: 1134, fees: 50_200, class: 4, section: 'A', group: 'Aviral'},
        {name: 'ron', admissionNo: 1344, fees: 50_000, class: 5, section: 'A', group: 'Aviral'},
        {name: 'shon', admissionNo: 1024, fees: 50_200, class: 6, section: 'C', group: 'Aviral'},
        {name: 'ramesh', admissionNo: 1004, fees: 55_000, class: 6, section: 'B', group: 'Aviral'},
        {name: 'suresh', admissionNo: 1322, fees: 56_000, class: 7, section: 'B', group: 'Aviral'},
        {name: 'csjka', admissionNo: 1328, fees: 50_700, class: 8, section: 'A', group: 'Aviral'},
        {name: 'cdnjks', admissionNo: 1384, fees: 46_000, class: 9, section: 'B', group: 'Aviral'},
        {name: 'qwerty', admissionNo: 1824, fees: 48_000, class: 1, section: 'C', group: 'Aviral'},
        {name: 'power', admissionNo: 8324, fees: 42_000, class: 1, section: 'C', group: 'Aviral'},
        {name: 'wasd', admissionNo: 1924, fees: 53_000, class: 4, section: 'D', group: 'Aviral'},
        {name: 'lol', admissionNo: 1394, fees: 50_000, class: 6, section: 'D', group: 'Aviral'}
    ], workers: [
        {name: 'pandey', salary: 20_000},
        {name: 'krish', salary: 30_000},
        {name: 'badrinath', salary: 24_000},
        {name: 'rockey', salary: 27_000},
        {name: 'shonty', salary: 21_000},
        {name: 'khatipa', salary: 17_000}
    ], infrastructureExpenditure: [
        {desc: 'white wash', cost: 2_00_000},
        {desc: 'class repairs', cost: 3_00_000},
        {desc: 'water tank cleaning', cost: 1_40_000}
    ], goals: [
        {txt: 'new gym equipment', budget: 22_00_000},
        {txt: 'tennis court', budget: 31_00_000},
        {txt: 'new building', budget: 45_00_000}
    ], busses: [

    ], totalIncome: 3_25_45_600,
    totalTeacherSalary: 1_03_65_000,
    totalWorkerSalary: 82_14_340,
    infrastructure: 65_20_300,
    savings: 0
}
school.savings = school.totalIncome - school.totalTeacherSalary - school.totalWorkerSalary - school.infrastructure
export default db;  
export { std, db, teacher, school };