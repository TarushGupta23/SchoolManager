const db = {
    passingMarks: 33,
    minAttendence: 70,
    classes: {
        1: {}, 2: {}, 
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
                }

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
        { txt: "This is notice 6", expireDate: new Date("2025-12-08"), subj: "english" }
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
    inchargeOf: { // can be null if not an incharge
        class: 12,
        section: "Non Medical"
    }, notices: [
        { txt: "This is notice 3", expireDate: new Date("2025-12-08"), by: "arts department" },
        { txt: "This is notice 4", expireDate: new Date("2025-12-08"), by: "director" },
        { txt: "This is notice 5", expireDate: new Date("2025-12-08"), by: "vice priciple" },
        { txt: "This is notice 6", expireDate: new Date("2025-12-08"), by: "principle" }
    ]
}
export default db;  
export { std, db, teacher };