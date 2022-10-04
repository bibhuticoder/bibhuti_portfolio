const _ = require("lodash");
const moment = require("moment");

// transformer
const $ = (item) => {
    let isMarried = !_.isEmpty(item.spouse);

    // let isAlive = (person) => !(person.dod && person.dod.length);
    // let DOB = (person) => moment(person.dob, "YYYY-MM-DD");
    // let DOD = (person) => moment(person.dod, "YYYY-MM-DD");
    // let AGE = (person) => moment(person.dob, "YYYY-MM-DD").fromNow('years');

    // let selfInfo = {
    //     isAlive: isAlive(item.self),
    //     dob: DOB(item.self),
    //     age: AGE(item.self),
    // }
    // let isAlive = _.isEmpty(item.self);
    // let dob = 
    // let age = dob.fromNow('years');
    // let dod = !isAlive ? moment(item.dod, "YYYY-MM-DD") : null;

    // CONTAINER START
    let html = `<div class="person-group">`;

    // SELF
    if (item.self) {
        html += `
            <div class="person --${isMarried ? 'married' : 'unmarried'}" id="${item.self.id}">
                <img class="image" src="${item.self.image}" />
                <p class="name">${item.self.name}</p>
                <p class="age">${item.self.dob}</p>
            </div>
        `;
    }

    // SPOUSE
    if (item.spouse) {
        html += `
            <div class="person" id="${item.self.id}">
                <img class="image w-12 h-12 rounded-full mx-auto" src="${item.spouse.image}" />
                <p class="name">${item.spouse.name}</p>
                <p class="age">${item.spouse.dob}</p>
            </div>
        `;
    }

    // CONTAINER END
    html += `</div>`;
    return html;
}

export default {
    innerHTML: $({
        self: {
            id: 'kalidas-poudyal',
            name: "कालीदास पौड्याल",
            dob: "1990-4-23",
            dod: null,
            image: "chronicle/nepali-male.png",
            gender: 'male',
            bio: "He was a very good man.",
        },

        spouse: {
            id: 'kalidas-poudyal-wife',
            name: "Unknown",
            dob: "1990-4-23",
            dod: null,
            image: "chronicle/nepali-female.png",
            gender: 'female',
            bio: "He was a very good man.",
        },
    }),

    children: [
        {
            innerHTML: $({
                self: {
                    id: 'govinda-prasad-poudyal',
                    name: "गोविन्द प्रसाद पौड्याल",
                    dob: "1990-4-23",
                    dod: null,
                    image: "chronicle/nepali-male.png",
                    gender: 'male',
                    bio: "He was a very good man.",
                },
                spouse: {
                    id: 'hajuraama-poudyal',
                    name: "Hajuraama पौड्याल",
                    dob: "1990-4-23",
                    dod: null,
                    image: "chronicle/nepali-female.png",
                    gender: 'female',
                    bio: "He was a very good man.",
                },
            }),

            children: [

                {
                    innerHTML: $({
                        self: {
                            id: "lakshman-poudyal",
                            name: "लक्ष्मण पौड्याल",
                            dob: "1990-4-23",
                            dod: null,
                            image: "chronicle/nepali-male.png",
                            gender: 'male',
                            bio: "He was a very good man.",
                        },
                        spouse: {
                            id: "lakshman-poudyal-wife",
                            name: "Unknown",
                            dob: "1990-4-23",
                            dod: null,
                            image: "chronicle/nepali-female.png",
                            gender: 'female',
                            bio: "He was a very good man.",
                        },
                    }),
                    children: [
                        {
                            innerHTML: $({
                                self: {
                                    id: "puskar-poudyal",
                                    name: "पुष्कर पौड्याल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-male.png",
                                    gender: 'male',
                                    bio: "He was a very good man.",
                                },
                                spouse: {
                                    id: "kamala-poudyal",
                                    name: "कमला पौड्याल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-female.png",
                                    gender: 'female',
                                    bio: "He was a very good man.",
                                },
                            }),
                            children: [
                                {
                                    innerHTML: $({
                                        self: {
                                            id: "purusottam-poudyal",
                                            name: "पुरुसोत्तम पौड्याल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'male',
                                            bio: "He was a very good man.",
                                        },
                                        spouse: {
                                            id: "lila-poudyal",
                                            name: "लिला पौड्याल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-female.png",
                                            gender: 'female',
                                            bio: "He was a very good man.",
                                        },
                                    }),
                                    children: [
                                        {
                                            innerHTML: $({
                                                self: {
                                                    id: "priyal-poudyal",
                                                    name: "प्रियल पौड्याल",
                                                    dob: "1990-4-23",
                                                    dod: null,
                                                    image: "chronicle/nepali-male.png",
                                                    gender: 'female',
                                                    bio: "He was a very good man.",
                                                },
                                                spouse: null,
                                            }),
                                        }
                                    ]
                                },

                                {
                                    innerHTML: $({
                                        self: {
                                            id: "jaya-poudyal",
                                            name: "जया पौड्याल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'male',
                                            bio: "He was a very good man.",
                                        },
                                        spouse: {
                                            id: "vinaju-1-khanal",
                                            name: "vinaju-1 खनाल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-female.png",
                                            gender: 'male',
                                            bio: "He was a very good man.",
                                        },
                                    }),
                                    children: [
                                        {
                                            innerHTML: $({
                                                self: {
                                                    id: "diwa-khanal",
                                                    name: "दिवा खनाल",
                                                    dob: "1990-4-23",
                                                    dod: null,
                                                    image: "chronicle/nepali-female.png",
                                                    gender: 'female',
                                                    bio: "He was a very good man.",
                                                },
                                                spouse: null,
                                            }),
                                        },

                                        {
                                            innerHTML: $({
                                                self: {
                                                    id: "parth-khanal",
                                                    name: "पार्थ खनाल",
                                                    dob: "1990-4-23",
                                                    dod: null,
                                                    image: "chronicle/nepali-male.png",
                                                    gender: 'male',
                                                    bio: "He was a very good man.",
                                                },
                                                spouse: null,
                                            }),
                                        }
                                    ]
                                },

                                {
                                    innerHTML: $({
                                        self: {
                                            id: "bijaya-poudyal",
                                            name: "बिजया पौड्याल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'female',
                                            bio: "He was a very good man.",
                                        },
                                        spouse: {
                                            id: "vinaju-2",
                                            name: "vinaju-2",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-female.png",
                                            gender: 'male',
                                            bio: "He was a very good man.",
                                        },
                                    }),
                                    children: []
                                }
                            ]
                        },

                        {
                            innerHTML: $({
                                self: {
                                    id: "shankar-poudyal",
                                    name: "शंकर पौड्याल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-male.png",
                                    gender: 'male',
                                    bio: "He was a very good man.",
                                },
                                spouse: {
                                    id: "sabitri-poudyal",
                                    name: "सावित्री पौड्याल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-female.png",
                                    gender: 'female',
                                    bio: "He was a very good man.",
                                },
                            }),
                            children: [
                            ]
                        },

                        {
                            innerHTML: $({
                                self: {
                                    id: "pravakar-poudyal",
                                    name: "प्रभाकर पौड्याल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-male.png",
                                    gender: 'male',
                                    bio: "He was a very good man.",
                                },
                                spouse: {
                                    id: "dhana-poudyal",
                                    name: "धन पौड्याल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-female.png",
                                    gender: 'female',
                                    bio: "He was a very good man.",
                                },
                            }),
                            children: [
                            ]
                        }
                    ]
                },

                {
                    innerHTML: $({
                        self: {
                            id: "damodar-poudyal",
                            name: "दामोदर प्रसाद पौड्याल",
                            dob: "1990-4-23",
                            dod: null,
                            image: "chronicle/nepali-male.png",
                            gender: 'male',
                            bio: "He was a very good man.",
                        },
                        spouse: {
                            id: "bhawani-poudyal",
                            name: "भवानी पौड्याल",
                            dob: "1990-4-23",
                            dod: null,
                            image: "chronicle/nepali-female.png",
                            gender: 'female',
                            bio: "He was a very good man.",
                        },
                    }),
                    children: [
                        {

                            innerHTML: $({
                                self: {
                                    id: "basu-dev-poudyal",
                                    name: "बासु देव पौड्याल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-male.png",
                                    gender: 'male',
                                    bio: "He was a very good man.",
                                },
                                spouse: {
                                    id: "binu-gautam-poudyal",
                                    name: " बिनु पौड्याल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-female.png",
                                    gender: 'female',
                                    bio: "He was a very good man.",
                                },
                            }),

                            children: [


                                {

                                    innerHTML: $({
                                        self: {
                                            id: "bibhuti-poudyal",
                                            name: "विभूति पौड्याल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'male',
                                            bio: "He was a very good man.",
                                        },
                                        spouse: null,
                                        children: null,
                                    })
                                },

                                {
                                    innerHTML: $({
                                        self: {
                                            id: "biranchi-poudyal",
                                            name: " बिरन्ची पौड्याल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'male',
                                            bio: "He was a very good man.",
                                        },
                                        spouse: {
                                            id: "pratima-luitel",
                                            name: "प्रतिमा लुइँटेल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-female.png",
                                            gender: 'female',
                                            bio: "He was a very good man.",
                                        },
                                    }),
                                    children: null,
                                },
                            ],
                        },

                        {
                            innerHTML: $({
                                self: {
                                    id: "diwakar-poudyal",
                                    name: "दिवाकर पौड्याल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-male.png",
                                    gender: 'male',
                                    bio: "He was a very good man.",
                                },
                                spouse: {
                                    id: "bhawani-dawadi-poudyal",
                                    name: "भवानी(दीपा) पौड्याल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-female.png",
                                    gender: 'female',
                                    bio: "He was a very good man.",
                                },
                            }),

                            children: [
                                {
                                    innerHTML: $({
                                        self: {
                                            id: "dikshya-poudyal",
                                            name: "दिक्ष्या पौड्याल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-female.png",
                                            gender: 'female',
                                            bio: "He was a very good man.",
                                        },
                                        spouse: {
                                            id: "prawin-khanal",
                                            name: "प्रविन खनाल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'male',
                                            bio: "He was a very good man.",
                                        },
                                    }),
                                    children: null,
                                },

                                {
                                    innerHTML: $({
                                        self: {
                                            id: "dristi-poudyal",
                                            name: "द्रिश्टी पौड्याल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-female.png",
                                            gender: 'female',
                                            bio: "He was a very good man.",
                                        },
                                        spouse: null,
                                    }),
                                    children: null,
                                },

                                {
                                    innerHTML: $({
                                        self: {
                                            id: "dikshyant-poudyal",
                                            name: "दिक्ष्यंत पौड्याल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'male',
                                            bio: "He was a very good man.",
                                        },
                                        spouse: null,
                                    }),
                                    children: null,
                                },
                            ],
                        },
                    ],
                }
            ],
        },
    ],
};
