const db = {
    passingMarks: 33,
    classes: {
        1: {}, 2: {}, 
        12: {
            "non-medical": {
                totalClasses: 80,
                subjects: {
                    maths: {
                        classTest: [20, 20, 20], // max marks in that thing
                        finalExam: 100,
                        midTerm: 50
                    }, physics: {
                        classTest: [20, 20, 20],
                        finalExam: 100,
                        midTerm: 50
                    }, english: {
                        classTest: [20, 20, 20],
                        finalExam: 100,
                        midTerm: 50
                    }, chemistry: {
                        classTest: [20, 20, 20],
                        finalExam: 100,
                        midTerm: 50
                    }, vocational: {
                        classTest: [20, 20, 20],
                        finalExam: 100,
                        midTerm: 50
                    }
                }, notices: [
                    { txt: "This is notice 1", expireDate: new Date("2025-12-08") },
                    { txt: "This is notice 2", expireDate: new Date("2025-12-08") },
                    { txt: "This is notice 3", expireDate: new Date("2025-12-08") },
                    { txt: "This is notice 4", expireDate: new Date("2025-12-08") },
                    { txt: "This is notice 5", expireDate: new Date("2025-12-08") }
                ]
            }, "medical" : {}
        }
    }
}

const std = {
    name: "Tarush Gupta",
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
    }
  };

export default db;  
export { std };