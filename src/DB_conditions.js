const db = {
    passingMarks: 33,
    minAttendence: 70,
    classes: {
        1: {}, 2: {}, 
        12: {
            "non-medical": {
                totalClasses: 90,
                subjects: {
                    maths: {
                        classTest: {
                            maxMarks: [20, 20, 20],
                            testName: ["test 1", "test 2", "test 3"],
                            topics: ["unit 1", "unit 2", "unit 3"]
                        },
                        finalExam: 100,
                        midTerm: 50
                    }, physics: {
                        classTest: {
                            maxMarks: [20, 20, 20],
                            testName: ["test 1", "test 2", "test 3"],
                            topics: ["unit 1", "unit 2", "unit 3"]
                        },
                        finalExam: 100,
                        midTerm: 50
                    }, english: {
                        classTest: {
                            maxMarks: [20, 20, 20],
                            testName: ["test 1", "test 2", "test 3"],
                            topics: ["unit 1", "unit 2", "unit 3"]
                        },
                        finalExam: 100,
                        midTerm: 50
                    }, chemistry: {
                        classTest: {
                            maxMarks: [20, 20, 20],
                            testName: ["test 1", "test 2", "test 3"],
                            topics: ["unit 1", "unit 2", "unit 3"]
                        },
                        finalExam: 100,
                        midTerm: 50
                    }, vocational: {
                        classTest: [20, 20, 20],
                        finalExam: 100,
                        midTerm: 50
                    }
                }

            }, "medical" : {}
        }
    }
}

const std = {
    name: "Sam Willson",
    profilePic: "person1.png",
    rollNo: 37,
    class: {
      class: 12,
      section: "non-medical"
    },
    attendence: 68,
    subjects: {
      english: {
            classTests: [20, 15, 18],
            finalExam: 88,
            midTerm: 46
        }, physics: {
            classTests: [7, 10, 4],
            finalExam: 25,
            midTerm: 12
        }, chemistry: {
            classTests: [20, 19, 18],
            finalExam: 94,
            midTerm: 49
        }, maths: {
            classTests: [13, 8, 8],
            finalExam: 68,
            midTerm: 36
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

export default db;  
export { std, db };