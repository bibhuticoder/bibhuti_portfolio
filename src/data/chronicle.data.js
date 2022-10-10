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
                <img class="image" src="/chronicle/nepali-${item.self.gender}.png" />
                <p class="name">${item.self.name}</p>
                <p class="age">${item.self.dob}</p>
            </div>
        `;
    }

    // SPOUSE
    if (item.spouse) {
        html += `
            <div class="person" id="${item.self.id}">
            <img class="image" src="/chronicle/nepali-${item.spouse.gender}.png" />
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
            name: "कालीदास पौडेल",
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
                    id: 'mokshyanath-poudyal',
                    name: "मोक्ष्यानाथ पौडेल",
                    dob: "1990-4-23",
                    dod: null,
                    image: "chronicle/nepali-male.png",
                    gender: 'male',
                    bio: "He was a very good man.",
                },
                spouse: {
                    id: 'mokshyanath-poudyal-wife',
                    name: "thuloaama पौडेल",
                    dob: "1990-4-23",
                    dod: null,
                    image: "chronicle/nepali-female.png",
                    gender: 'female',
                    bio: "He was a very good man.",
                },
            }),

            children: [
            ],
        },

        {
            innerHTML: $({
                self: {
                    id: 'govinda-prasad-poudyal',
                    name: "गोविन्द प्रसाद पौडेल",
                    dob: "1990-4-23",
                    dod: null,
                    image: "chronicle/nepali-male.png",
                    gender: 'male',
                    bio: "He was a very good man.",
                },
                spouse: {
                    id: 'shiva-maya-poudyal',
                    name: "शिवमाया पौडेल",
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
                            id: "ram-chandra-poudyal",
                            name: "रामचन्द्र पौडेल",
                            dob: "1990-4-23",
                            dod: null,
                            image: "chronicle/nepali-male.png",
                            gender: 'male',
                            bio: "He was a very good man.",
                        },
                        spouse: {
                            id: "ganga-devi-poudyal",
                            name: "गंगादेवी पौडेल",
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
                                    id: "lava-poudyal",
                                    name: "लभ पौडेल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-male.png",
                                    gender: 'male',
                                    bio: "He was a very good man.",
                                },
                                spouse: {
                                    id: "tara-poudyal",
                                    name: "तारा पौडेल",
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
                                            id: "santosh-poudyal",
                                            name: "सन्तोष पौडेल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'male',
                                            bio: "He was a very good man.",
                                        },
                                        spouse: {
                                            id: "nirmala-phuyal",
                                            name: "निर्मला फुयाल",
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
                                                    id: "aarush-poudyal",
                                                    name: "आरुष पौडेल",
                                                    dob: "1990-4-23",
                                                    dod: null,
                                                    image: "chronicle/nepali-male.png",
                                                    gender: 'male',
                                                    bio: "He was a very good man.",
                                                }
                                            })
                                        },

                                        {
                                            innerHTML: $({
                                                self: {
                                                    id: "aayam-poudyal",
                                                    name: "आयाम पौडेल",
                                                    dob: "1990-4-23",
                                                    dod: null,
                                                    image: "chronicle/nepali-male.png",
                                                    gender: 'male',
                                                    bio: "He was a very good man.",
                                                }
                                            })
                                        }
                                    ]
                                },

                                {
                                    innerHTML: $({
                                        self: {
                                            id: "sanjaya-poudyal",
                                            name: "संजय पौडेल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'male',
                                            bio: "He was a very good man.",
                                        },
                                        spouse: {
                                            id: "shraddha-phuyal",
                                            name: "श्रद्धा फुयाल",
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
                                                    id: "siwanshi-poudyal",
                                                    name: "शिवान्शी पौडेल",
                                                    dob: "1990-4-23",
                                                    dod: null,
                                                    image: "chronicle/nepali-male.png",
                                                    gender: 'female',
                                                    bio: "He was a very good man.",
                                                },
                                            })
                                        }
                                    ]
                                }
                            ]
                        }

                    ]
                },

                {
                    innerHTML: $({
                        self: {
                            id: "lakshman-poudyal",
                            name: "लक्ष्मण पौडेल",
                            dob: "1990-4-23",
                            dod: null,
                            image: "chronicle/nepali-male.png",
                            gender: 'male',
                            bio: "He was a very good man.",
                        },
                        spouse: {
                            id: "kanchhi-poudyal",
                            name: "कान्छी पौडेल",
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
                                    name: "पुष्कर पौडेल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-male.png",
                                    gender: 'male',
                                    bio: "He was a very good man.",
                                },
                                spouse: {
                                    id: "kamala-poudyal",
                                    name: "कमला पौडेल",
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
                                            name: "पुरुसोत्तम पौडेल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'male',
                                            bio: "He was a very good man.",
                                        },
                                        spouse: {
                                            id: "lila-poudyal",
                                            name: "लिला पौडेल",
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
                                                    name: "प्रियल पौडेल",
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
                                            name: "जया पौडेल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'female',
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
                                            name: "बिजया पौडेल",
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
                                    name: "शंकर पौडेल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-male.png",
                                    gender: 'male',
                                    bio: "He was a very good man.",
                                },
                                spouse: {
                                    id: "sabitri-poudyal",
                                    name: "सावित्री पौडेल",
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
                                            id: "sabal-poudyal",
                                            name: "सबल पौडेल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'male',
                                            bio: "He was a very good man.",
                                        },
                                        spouse: null,
                                    })
                                },
                                {
                                    innerHTML: $({
                                        self: {
                                            id: "salina-poudyal",
                                            name: "सलिना पौडेल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'female',
                                            bio: "He was a very good man.",
                                        },
                                        spouse: null,
                                    })
                                }
                            ]
                        },

                        {
                            innerHTML: $({
                                self: {
                                    id: "pravakar-poudyal",
                                    name: "प्रभाकर पौडेल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-male.png",
                                    gender: 'male',
                                    bio: "He was a very good man.",
                                },
                                spouse: {
                                    id: "dhana-poudyal",
                                    name: "धन पौडेल",
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
                                            id: "shraddha-poudyal",
                                            name: "श्रद्धा पौडेल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'female',
                                            bio: "He was a very good man.",
                                        }
                                    })
                                },

                                {
                                    innerHTML: $({
                                        self: {
                                            id: "shreeya-poudyal",
                                            name: "श्रीया पौडेल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'female',
                                            bio: "He was a very good man.",
                                        }
                                    })
                                },

                                {
                                    innerHTML: $({
                                        self: {
                                            id: "aditya-poudyal",
                                            name: "आदित्य पौडेल",
                                            dob: "1990-4-23",
                                            dod: null,
                                            image: "chronicle/nepali-male.png",
                                            gender: 'male',
                                            bio: "He was a very good man.",
                                        }
                                    })
                                },
                            ]
                        }
                    ]
                },

                {
                    innerHTML: $({
                        self: {
                            id: "damodar-poudyal",
                            name: "दामोदर प्रसाद पौडेल",
                            dob: "1990-4-23",
                            dod: null,
                            image: "chronicle/nepali-male.png",
                            gender: 'male',
                            bio: "He was a very good man.",
                        },
                        spouse: {
                            id: "bhawani-poudyal",
                            name: "भवानी पौडेल",
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
                                    name: "बासु देव पौडेल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-male.png",
                                    gender: 'male',
                                    bio: "He was a very good man.",
                                },
                                spouse: {
                                    id: "binu-gautam-poudyal",
                                    name: " बिनु पौडेल",
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
                                            name: "विभूति पौडेल",
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
                                            name: " बिरन्ची पौडेल",
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
                                    name: "दिवाकर पौडेल",
                                    dob: "1990-4-23",
                                    dod: null,
                                    image: "chronicle/nepali-male.png",
                                    gender: 'male',
                                    bio: "He was a very good man.",
                                },
                                spouse: {
                                    id: "bhawani-dawadi-poudyal",
                                    name: "भवानी(दीपा) पौडेल",
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
                                            name: "दिक्ष्या पौडेल",
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
                                            name: "द्रिश्टी पौडेल",
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
                                            name: "दिक्ष्यंत पौडेल",
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
                },

                {
                    innerHTML: $({
                        self: {
                            id: "narayan-poudyal",
                            name: "नारायण प्रसाद पौडेल",
                            dob: "1990-4-23",
                            dod: null,
                            image: "chronicle/nepali-male.png",
                            gender: 'male',
                            bio: "He was a very good man.",
                        },
                        spouse: null,
                    }),
                    children: null
                }
            ],
        },
    ],
};
