/**
 * ✨ Baza danych rdzeni różdżkowych - System Wandlore
 * Akademia Magii Aeternum
 * 
 * 22 rdzenie: 3 kanoniczne + rozszerzone materiały.
 * Identyczna struktura jak baza drewien.
 */

export const bazaRdzeni = {
    jednorozec: {
        nazwa: "Włos jednorożca",
        angielska: "Unicorn Hair",
        opis: "Najbardziej wierny ze wszystkich rdzeni. Pozyskiwany z ogona jednorożca - dobrzy różdżkarze nie zabijają jednorożców. Jeżeli wybierze właściciela, pozostaje mu oddany, niechętnie zmienia lojalność i jest bardzo trudny do zdobycia przez rozbrojenie. Nie jest rekordzistą pod względem surowej mocy, ale jest niezwykle stabilny i przewidywalny.",
        statystyki: {
            moc: 5,
            lojalnosc: 10,
            stabilnosc: 10,
            adaptacja: 4,
            inteligencja: 5,
            kreatywnosc: 4,
            odwaga: 5,
            dyscyplina: 8,
            ambicja: 4,
            moralnosc: 4
        },
        tagi: [
            { nazwa: "czystosc", waga: 5 },
            { nazwa: "stabilnosc", waga: 5 },
            { nazwa: "lojalnosc", waga: 5 },
            { nazwa: "harmonia", waga: 4 },
            { nazwa: "uzdrawianie", waga: 4 },
            { nazwa: "ochrona", waga: 4 },
            { nazwa: "wiernosc", waga: 3 }
        ],
        specjalizacja: ["zaklęcia ochronne", "uroki", "zaklęcia codzienne", "transmutacja", "magia lecznicza"],
        antySpecjalizacja: ["Czarna Magia", "brutalne zaklęcia", "okrucieństwo"],
        znanyPrzyklad: "Ron Weasley, Draco Malfoy, Neville Longbottom"
    },

    smok: {
        nazwa: "Smocze serce",
        angielska: "Dragon Heartstring",
        opis: "Najpotężniejszy pod względem czystej siły. Pozyskiwany z mięśni serca smoka. To najbardziej gwałtowny rdzeń - uwielbia potężne zaklęcia, efektowną magię i szybkie pojedynki. Najłatwiej uczy się nowych zaklęć, ale jest też najbardziej kapryśny i najczęściej zmienia właściciela. Najłatwiej spośród wszystkich rdzeni uczy się Czarnej Magii.",
        statystyki: {
            moc: 10,
            lojalnosc: 4,
            stabilnosc: 5,
            adaptacja: 8,
            inteligencja: 6,
            kreatywnosc: 6,
            odwaga: 8,
            dyscyplina: 4,
            ambicja: 9,
            moralnosc: -2
        },
        tagi: [
            { nazwa: "potega", waga: 5 },
            { nazwa: "ambicja", waga: 5 },
            { nazwa: "walka", waga: 5 },
            { nazwa: "ogien", waga: 4 },
            { nazwa: "dominacja", waga: 4 },
            { nazwa: "szybkosc", waga: 3 },
            { nazwa: "zmiennosc", waga: 3 }
        ],
        specjalizacja: ["pojedynki", "transmutacja", "zaklęcia ofensywne", "magia żywiołów"],
        antySpecjalizacja: [],
        znanyPrzyklad: "Hermione Granger, Bellatrix Lestrange, Lucius Malfoy"
    },

    feniks: {
        nazwa: "Pióro feniksa",
        angielska: "Phoenix Feather",
        opis: "Najrzadszy rdzeń świata. Feniksy niezwykle rzadko oddają pióra. To najbardziej inteligentny rdzeń - czasami różdżka sama wykonuje magię. Posiada największy zakres możliwych zaklęć. Nie specjalizuje się - potrafi praktycznie wszystko. Jest jednak najbardziej wybredny ze wszystkich rdzeni.",
        statystyki: {
            moc: 9,
            lojalnosc: 5,
            stabilnosc: 4,
            adaptacja: 9,
            inteligencja: 10,
            kreatywnosc: 8,
            odwaga: 7,
            dyscyplina: 3,
            ambicja: 8,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "odrodzenie", waga: 5 },
            { nazwa: "transformacja", waga: 5 },
            { nazwa: "swiatlo", waga: 4 },
            { nazwa: "niezaleznosc", waga: 4 },
            { nazwa: "rozwoj", waga: 4 },
            { nazwa: "potega", waga: 3 },
            { nazwa: "wszechstronnosc", waga: 3 }
        ],
        specjalizacja: ["wszystko - najszerszy zakres"],
        antySpecjalizacja: [],
        znanyPrzyklad: "Harry Potter, Lord Voldemort"
    },

    testral: {
        nazwa: "Włos testrala",
        angielska: "Thestral Tail Hair",
        opis: "Bardzo potężny i niezwykle wymagający rdzeń. Łączy się z tematyką śmierci, przeznaczenia i akceptacji przemijania. Nie jest 'mroczny', ale wymaga właściciela o silnej psychice. Nie wybiera przeciętnych czarodziejów.",
        statystyki: {
            moc: 9,
            lojalnosc: 8,
            stabilnosc: 5,
            adaptacja: 5,
            inteligencja: 8,
            kreatywnosc: 6,
            odwaga: 8,
            dyscyplina: 6,
            ambicja: 7,
            moralnosc: -1
        },
        tagi: [
            { nazwa: "smierc", waga: 5 },
            { nazwa: "przeznaczenie", waga: 5 },
            { nazwa: "potega", waga: 4 },
            { nazwa: "akceptacja", waga: 4 },
            { nazwa: "odpornosc_psychiczna", waga: 4 },
            { nazwa: "wyjatkowosc", waga: 3 }
        ],
        specjalizacja: ["magia wielkiej mocy", "szeroki zakres"],
        antySpecjalizacja: [],
        znanyPrzyklad: "Berło Śmierci (Elder Wand)"
    },

    wila: {
        nazwa: "Włos wili",
        angielska: "Veela Hair",
        opis: "Jeden z najbardziej emocjonalnych rdzeni. Silnie reaguje na nastrój właściciela - gniew, radość, stres. Może być niezwykle skuteczny w rękach osoby pewnej siebie, ale staje się niestabilny, jeśli właściciel traci panowanie nad emocjami.",
        statystyki: {
            moc: 7,
            lojalnosc: 7,
            stabilnosc: 4,
            adaptacja: 7,
            inteligencja: 5,
            kreatywnosc: 7,
            odwaga: 6,
            dyscyplina: 3,
            ambicja: 6,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "emocje", waga: 5 },
            { nazwa: "pasja", waga: 5 },
            { nazwa: "szybkosc", waga: 4 },
            { nazwa: "piekno", waga: 4 },
            { nazwa: "walka", waga: 3 },
            { nazwa: "zmiennosc", waga: 3 }
        ],
        specjalizacja: ["magia ofensywna", "szybkie zaklęcia", "zaklęcia wymagające pasji"],
        antySpecjalizacja: ["zaklęcia wymagające spokoju"],
        znanyPrzyklad: "Fleur Delacour"
    },

    troll: {
        nazwa: "Włos trolla",
        angielska: "Troll Whisker",
        opis: "Rdzeń niskiej jakości, rzadko używany przez renomowanych różdżkarzy. Mistrz Tahi unika tego materiału. Jest prosty, brutalny i mało precyzyjny, ale niezwykle wytrzymały i tani. Może służyć do nauki podstaw.",
        statystyki: {
            moc: 4,
            lojalnosc: 3,
            stabilnosc: 6,
            adaptacja: 2,
            inteligencja: 2,
            kreatywnosc: 2,
            odwaga: 4,
            dyscyplina: 3,
            ambicja: 2,
            moralnosc: -1
        },
        tagi: [
            { nazwa: "brutalnosc", waga: 5 },
            { nazwa: "wytrzymalosc", waga: 4 },
            { nazwa: "prostota", waga: 4 },
            { nazwa: "sila", waga: 3 },
            { nazwa: "odpornosc", waga: 3 }
        ],
        specjalizacja: ["magia prosta", "zaklęcia siłowe"],
        antySpecjalizacja: ["precyzyjne zaklęcia", "magia wyższego rzędu"],
        znanyPrzyklad: null
    },

    kelpie: {
        nazwa: "Włos kelpie",
        angielska: "Kelpie Hair",
        opis: "Bardzo zmienny rdzeń, pochodzący od wodnego demona. Podobnie jak sama kelpia, potrafi być zwodniczy. Najlepiej współpracuje z magią wody, transmutacją i iluzjami. Wymaga kreatywnego właściciela.",
        statystyki: {
            moc: 6,
            lojalnosc: 4,
            stabilnosc: 3,
            adaptacja: 8,
            inteligencja: 6,
            kreatywnosc: 8,
            odwaga: 5,
            dyscyplina: 3,
            ambicja: 5,
            moralnosc: -1
        },
        tagi: [
            { nazwa: "woda", waga: 5 },
            { nazwa: "iluzja", waga: 5 },
            { nazwa: "zmiennosc", waga: 4 },
            { nazwa: "kreatywnosc", waga: 4 },
            { nazwa: "transmutacja", waga: 3 },
            { nazwa: "zwodniczosc", waga: 3 }
        ],
        specjalizacja: ["magia wody", "transmutacja", "iluzje"],
        antySpecjalizacja: ["stabilna magia", "zaklęcia ochronne"],
        znanyPrzyklad: null
    },

    thunderbird: {
        nazwa: "Pióro thunderbirda",
        angielska: "Thunderbird Tail Feather",
        opis: "Spotykany głównie w Ameryce Północnej. Bardzo inteligentny rdzeń, potrafi reagować na niebezpieczeństwo i przyszłe zagrożenia. Posiada bardzo silną magię ochronną, wyjątkową szybkość i świetną intuicję.",
        statystyki: {
            moc: 8,
            lojalnosc: 6,
            stabilnosc: 6,
            adaptacja: 7,
            inteligencja: 8,
            kreatywnosc: 6,
            odwaga: 8,
            dyscyplina: 5,
            ambicja: 6,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "ochrona", waga: 5 },
            { nazwa: "intuicja", waga: 5 },
            { nazwa: "szybkosc", waga: 5 },
            { nazwa: "odwaga", waga: 4 },
            { nazwa: "niebezpieczenstwo", waga: 3 },
            { nazwa: "piorun", waga: 3 }
        ],
        specjalizacja: ["magia ochronna", "szybkie zaklęcia", "intuicyjne reakcje"],
        antySpecjalizacja: [],
        znanyPrzyklad: null
    },

    dyptam: {
        nazwa: "Łodyga dyptamu",
        angielska: "Dittany Stalk",
        opis: "Rdzeń o silnych właściwościach leczniczych, pozyskiwany z magicznej rośliny. Dyptam jest znany ze zdolności gojenia ran. Różdżki z tym rdzeniem doskonale sprawdzają się w magii leczniczej, ale mają ograniczoną moc ofensywną.",
        statystyki: {
            moc: 4,
            lojalnosc: 7,
            stabilnosc: 8,
            adaptacja: 5,
            inteligencja: 6,
            kreatywnosc: 5,
            odwaga: 3,
            dyscyplina: 7,
            ambicja: 3,
            moralnosc: 5
        },
        tagi: [
            { nazwa: "uzdrawianie", waga: 5 },
            { nazwa: "czystosc", waga: 5 },
            { nazwa: "ochrona", waga: 4 },
            { nazwa: "harmonia", waga: 4 },
            { nazwa: "cierpliwosc", waga: 3 },
            { nazwa: "natura", waga: 3 }
        ],
        specjalizacja: ["magia lecznicza", "zaklęcia regeneracyjne", "eliksiry"],
        antySpecjalizacja: ["magia ofensywna", "Czarna Magia"],
        znanyPrzyklad: null
    },

    wampus: {
        nazwa: "Włos wampusa",
        angielska: "Wampus Cat Hair",
        opis: "Pochodzi od magicznego drapieżnika z Ameryki. Silnie związany z magią bojową. Specjalizuje się w pojedynkach, magii obronnej i odporności psychicznej.",
        statystyki: {
            moc: 8,
            lojalnosc: 6,
            stabilnosc: 7,
            adaptacja: 5,
            inteligencja: 6,
            kreatywnosc: 4,
            odwaga: 9,
            dyscyplina: 7,
            ambicja: 7,
            moralnosc: 0
        },
        tagi: [
            { nazwa: "walka", waga: 5 },
            { nazwa: "odwaga", waga: 5 },
            { nazwa: "odpornosc_psychiczna", waga: 4 },
            { nazwa: "sila", waga: 4 },
            { nazwa: "obronnosc", waga: 3 },
            { nazwa: "drapieznosc", waga: 3 }
        ],
        specjalizacja: ["pojedynki", "magia obronna", "odporność psychiczna"],
        antySpecjalizacja: [],
        znanyPrzyklad: null
    },

    white_river: {
        nazwa: "Kolec White River Monster",
        angielska: "White River Monster Spine",
        opis: "Rdzeń wykonywany z kolca White River Monstera. Bardzo stabilny. Najlepiej sprawdza się w zaklęciach użytkowych, magii codziennej i transmutacji.",
        statystyki: {
            moc: 5,
            lojalnosc: 6,
            stabilnosc: 9,
            adaptacja: 5,
            inteligencja: 5,
            kreatywnosc: 5,
            odwaga: 4,
            dyscyplina: 7,
            ambicja: 4,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "stabilnosc", waga: 5 },
            { nazwa: "codziennosc", waga: 4 },
            { nazwa: "transmutacja", waga: 4 },
            { nazwa: "niezawodnosc", waga: 4 },
            { nazwa: "spokoj", waga: 3 },
            { nazwa: "uzytkowosc", waga: 3 }
        ],
        specjalizacja: ["zaklęcia użytkowe", "magia codzienna", "transmutacja"],
        antySpecjalizacja: [],
        znanyPrzyklad: null
    },

    rougarou: {
        nazwa: "Włos rougarou",
        angielska: "Rougarou Hair",
        opis: "Pochodzi od amerykańskiego Rougarou. Bardzo agresywny rdzeń o ogromnej mocy, lecz nieprzewidywalny i podatny na Czarną Magię.",
        statystyki: {
            moc: 9,
            lojalnosc: 4,
            stabilnosc: 3,
            adaptacja: 6,
            inteligencja: 5,
            kreatywnosc: 5,
            odwaga: 7,
            dyscyplina: 3,
            ambicja: 7,
            moralnosc: -3
        },
        tagi: [
            { nazwa: "agresja", waga: 5 },
            { nazwa: "potega", waga: 5 },
            { nazwa: "mrok", waga: 4 },
            { nazwa: "walka", waga: 4 },
            { nazwa: "zmiennosc", waga: 3 },
            { nazwa: "niebezpieczenstwo", waga: 3 }
        ],
        specjalizacja: ["magia agresywna", "zaklęcia niszczące"],
        antySpecjalizacja: ["magia lecznicza"],
        znanyPrzyklad: null
    },

    kuguchar: {
        nazwa: "Wąs kuguchara",
        angielska: "Kneazle Whisker",
        opis: "Rdzeń inteligentny i ostrożny, pozyskiwany z magicznego kota kneazla. Doskonale 'wyczuwa' intencje właściciela. Specjalizuje się w zaklęciach wykrywających, iluzjach, zaklęciach ochronnych i magii użytkowej. Posiada wysoką precyzję i dobrą kontrolę, ale nie osiąga dużej mocy ofensywnej.",
        statystyki: {
            moc: 5,
            lojalnosc: 7,
            stabilnosc: 8,
            adaptacja: 6,
            inteligencja: 8,
            kreatywnosc: 6,
            odwaga: 4,
            dyscyplina: 7,
            ambicja: 4,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "inteligencja", waga: 5 },
            { nazwa: "precyzja", waga: 5 },
            { nazwa: "ochrona", waga: 4 },
            { nazwa: "wykrywanie", waga: 4 },
            { nazwa: "kontrola", waga: 4 },
            { nazwa: "iluzja", waga: 3 }
        ],
        specjalizacja: ["zaklęcia wykrywające", "iluzje", "zaklęcia ochronne", "magia użytkowa"],
        antySpecjalizacja: ["magia ofensywna wielkiej mocy"],
        znanyPrzyklad: null
    },

    rogaty_waz: {
        nazwa: "Róg rogatego węża",
        angielska: "Horned Serpent Horn",
        opis: "Jeden z najbardziej cenionych amerykańskich rdzeni. Bardzo inteligentny - według tradycji reaguje nawet na mowę wężów. Posiada ogromną precyzję, świetną magię umysłu i zaklęcia wymagające koncentracji.",
        statystyki: {
            moc: 7,
            lojalnosc: 6,
            stabilnosc: 7,
            adaptacja: 6,
            inteligencja: 10,
            kreatywnosc: 7,
            odwaga: 5,
            dyscyplina: 8,
            ambicja: 7,
            moralnosc: 0
        },
        tagi: [
            { nazwa: "inteligencja", waga: 5 },
            { nazwa: "magia_umyslu", waga: 5 },
            { nazwa: "precyzja", waga: 5 },
            { nazwa: "koncentracja", waga: 4 },
            { nazwa: "weze", waga: 3 },
            { nazwa: "wiedza", waga: 3 }
        ],
        specjalizacja: ["magia umysłu", "zaklęcia precyzyjne", "zaklęcia wymagające koncentracji"],
        antySpecjalizacja: [],
        znanyPrzyklad: null
    },

    snallygaster: {
        nazwa: "Serce snallygastera",
        angielska: "Snallygaster Heartstring",
        opis: "Rdzeń spotykany w Ameryce. Dobrze współpracuje z trudną magią. Posiada szeroki zakres zaklęć i wysoką odporność.",
        statystyki: {
            moc: 7,
            lojalnosc: 5,
            stabilnosc: 7,
            adaptacja: 6,
            inteligencja: 6,
            kreatywnosc: 5,
            odwaga: 6,
            dyscyplina: 6,
            ambicja: 6,
            moralnosc: 0
        },
        tagi: [
            { nazwa: "wszechstronnosc", waga: 5 },
            { nazwa: "odpornosc", waga: 4 },
            { nazwa: "adaptacja", waga: 4 },
            { nazwa: "sila", waga: 3 },
            { nazwa: "wytrwalosc", waga: 3 }
        ],
        specjalizacja: ["trudna magia", "szeroki zakres zaklęć"],
        antySpecjalizacja: [],
        znanyPrzyklad: null
    },

    jackalope: {
        nazwa: "Poroże jackalope",
        angielska: "Jackalope Antler",
        opis: "Rdzeń z poroża jackalope'a. Lekki i szybki. Najlepiej działa przy urokach, prostych zaklęciach i magii użytkowej.",
        statystyki: {
            moc: 4,
            lojalnosc: 5,
            stabilnosc: 6,
            adaptacja: 7,
            inteligencja: 5,
            kreatywnosc: 6,
            odwaga: 4,
            dyscyplina: 5,
            ambicja: 4,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "szybkosc", waga: 5 },
            { nazwa: "lekkosc", waga: 5 },
            { nazwa: "uzytkowosc", waga: 4 },
            { nazwa: "humor", waga: 3 },
            { nazwa: "zabawa", waga: 3 },
            { nazwa: "prostota", waga: 3 }
        ],
        specjalizacja: ["uroki", "proste zaklęcia", "magia użytkowa"],
        antySpecjalizacja: ["magia wielkiej mocy"],
        znanyPrzyklad: null
    },

    bazyliszek: {
        nazwa: "Róg bazyliszka",
        angielska: "Basilisk Horn",
        opis: "Jeden z najbardziej kontrowersyjnych materiałów. Ekstremalnie ofensywny, specjalizujący się w magii destrukcyjnej, klątwach i Czarnej Magii. Posiada olbrzymią siłę, lecz ogromną niestabilność. Większość renomowanych różdżkarzy nie chciała pracować z tym materiałem.",
        statystyki: {
            moc: 10,
            lojalnosc: 3,
            stabilnosc: 2,
            adaptacja: 3,
            inteligencja: 5,
            kreatywnosc: 4,
            odwaga: 6,
            dyscyplina: 2,
            ambicja: 8,
            moralnosc: -5
        },
        tagi: [
            { nazwa: "mrok", waga: 5 },
            { nazwa: "destrukcja", waga: 5 },
            { nazwa: "potega", waga: 5 },
            { nazwa: "smierc", waga: 4 },
            { nazwa: "niebezpieczenstwo", waga: 4 },
            { nazwa: "agresja", waga: 3 }
        ],
        specjalizacja: ["magia destrukcyjna", "klątwy", "Czarna Magia"],
        antySpecjalizacja: ["magia lecznicza", "zaklęcia ochronne", "magia światła"],
        znanyPrzyklad: null
    },

    koral: {
        nazwa: "Koral",
        angielska: "Coral",
        opis: "Spotykany u niektórych różdżkarzy nadmorskich. Specjalizuje się w magii leczniczej, zaklęciach ochronnych i magii związanej z wodą.",
        statystyki: {
            moc: 5,
            lojalnosc: 6,
            stabilnosc: 7,
            adaptacja: 6,
            inteligencja: 5,
            kreatywnosc: 6,
            odwaga: 4,
            dyscyplina: 6,
            ambicja: 3,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "uzdrawianie", waga: 5 },
            { nazwa: "woda", waga: 5 },
            { nazwa: "ochrona", waga: 4 },
            { nazwa: "natura", waga: 4 },
            { nazwa: "harmonia", waga: 3 },
            { nazwa: "spokoj", waga: 3 }
        ],
        specjalizacja: ["magia lecznicza", "zaklęcia ochronne", "magia wody"],
        antySpecjalizacja: ["magia destrukcyjna"],
        znanyPrzyklad: null
    },

    rog_smoka: {
        nazwa: "Róg smoka",
        angielska: "Dragon Horn",
        opis: "Nie należy mylić z włóknem ze smoczego serca. Stabilniejszy od smoczego serca, ale mniej potężny. Specjalizuje się w pojedynkach, transmutacji i zaklęciach ofensywnych.",
        statystyki: {
            moc: 8,
            lojalnosc: 5,
            stabilnosc: 7,
            adaptacja: 5,
            inteligencja: 5,
            kreatywnosc: 5,
            odwaga: 7,
            dyscyplina: 6,
            ambicja: 7,
            moralnosc: -1
        },
        tagi: [
            { nazwa: "walka", waga: 5 },
            { nazwa: "stabilnosc", waga: 4 },
            { nazwa: "ogien", waga: 4 },
            { nazwa: "transmutacja", waga: 4 },
            { nazwa: "sila", waga: 3 },
            { nazwa: "odpornosc", waga: 3 }
        ],
        specjalizacja: ["pojedynki", "transmutacja", "zaklęcia ofensywne"],
        antySpecjalizacja: [],
        znanyPrzyklad: null
    },

    akromantula: {
        nazwa: "Jedwab akromantuli",
        angielska: "Acromantula Web",
        opis: "Eksperymentalny rdzeń pojawiający się w materiałach rozszerzonych. Bardzo czuły. Specjalizuje się w zaklęciach wiążących, pułapkach i magii kontroli.",
        statystyki: {
            moc: 6,
            lojalnosc: 4,
            stabilnosc: 5,
            adaptacja: 6,
            inteligencja: 7,
            kreatywnosc: 7,
            odwaga: 4,
            dyscyplina: 6,
            ambicja: 5,
            moralnosc: -2
        },
        tagi: [
            { nazwa: "kontrola", waga: 5 },
            { nazwa: "pulapka", waga: 5 },
            { nazwa: "precyzja", waga: 4 },
            { nazwa: "subtelnos", waga: 4 },
            { nazwa: "mrok", waga: 3 },
            { nazwa: "manipulacja", waga: 3 }
        ],
        specjalizacja: ["zaklęcia wiążące", "pułapki", "magia kontroli"],
        antySpecjalizacja: ["magia lecznicza"],
        znanyPrzyklad: null
    },

    curupira: {
        nazwa: "Włos curupiry",
        angielska: "Curupira Hair",
        opis: "Rdzeń pochodzący od brazylijskiego ducha lasu. Curupira jest strażnikiem natury - ten rdzeń silnie rezonuje z magią natury, ochroną środowiska i zaklęciami zwierzęcymi. Jest zaskakująco lojalny wobec właściciela, który szanuje naturę.",
        statystyki: {
            moc: 6,
            lojalnosc: 7,
            stabilnosc: 6,
            adaptacja: 6,
            inteligencja: 6,
            kreatywnosc: 7,
            odwaga: 6,
            dyscyplina: 5,
            ambicja: 4,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "natura", waga: 5 },
            { nazwa: "ochrona", waga: 5 },
            { nazwa: "zwierzeta", waga: 4 },
            { nazwa: "las", waga: 4 },
            { nazwa: "harmonia", waga: 3 },
            { nazwa: "ekologia", waga: 3 }
        ],
        specjalizacja: ["magia natury", "zaklęcia zwierzęce", "ochrona środowiska"],
        antySpecjalizacja: ["magia destrukcyjna"],
        znanyPrzyklad: null
    },

    syrena: {
        nazwa: "Włos afrykańskiej syreny",
        angielska: "African Mermaid Hair",
        opis: "Rdzeń pozyskiwany z włosów afrykańskich syren. Łączy w sobie piękno i siłę morza. Specjalizuje się w magii wody, zaklęciach dźwiękowych i hipnotycznych. Reaguje na emocje, ale w bardziej kontrolowany sposób niż włos wili.",
        statystyki: {
            moc: 6,
            lojalnosc: 6,
            stabilnosc: 5,
            adaptacja: 7,
            inteligencja: 6,
            kreatywnosc: 8,
            odwaga: 4,
            dyscyplina: 4,
            ambicja: 5,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "woda", waga: 5 },
            { nazwa: "piekno", waga: 5 },
            { nazwa: "muzyka", waga: 4 },
            { nazwa: "emocje", waga: 4 },
            { nazwa: "hipnoza", waga: 3 },
            { nazwa: "kreatywnosc", waga: 3 }
        ],
        specjalizacja: ["magia wody", "zaklęcia dźwiękowe", "magia hipnotyczna"],
        antySpecjalizacja: [],
        znanyPrzyklad: null
    },

    wrozka: {
        nazwa: "Skrzydło wróżki",
        angielska: "Fairy Wing",
        opis: "Niezwykle delikatny i subtelny rdzeń. Różdżki ze skrzydłem wróżki są lekkie jak piórko i doskonale nadają się do drobnych, precyzyjnych zaklęć. Brakuje im jednak mocy do poważniejszej magii.",
        statystyki: {
            moc: 3,
            lojalnosc: 5,
            stabilnosc: 6,
            adaptacja: 7,
            inteligencja: 5,
            kreatywnosc: 8,
            odwaga: 3,
            dyscyplina: 4,
            ambicja: 3,
            moralnosc: 4
        },
        tagi: [
            { nazwa: "subtelnos", waga: 5 },
            { nazwa: "lekkosc", waga: 5 },
            { nazwa: "precyzja", waga: 4 },
            { nazwa: "kreatywnosc", waga: 4 },
            { nazwa: "radosc", waga: 3 },
            { nazwa: "swiatlo", waga: 3 }
        ],
        specjalizacja: ["drobne zaklęcia", "uroki", "magia precyzyjna"],
        antySpecjalizacja: ["magia wielkiej mocy", "zaklęcia destrukcyjne"],
        znanyPrzyklad: null
    },

    muszla: {
        nazwa: "Muszla",
        angielska: "Shell",
        opis: "Rzadko spotykany rdzeń morski. Muszla jako rdzeń rezonuje z magią wody i magią leczniczą. Jest niezwykle stabilna i spokojna, ale nie osiąga wielkiej mocy. Doskonale nadaje się do codziennego użytku.",
        statystyki: {
            moc: 4,
            lojalnosc: 6,
            stabilnosc: 8,
            adaptacja: 5,
            inteligencja: 4,
            kreatywnosc: 5,
            odwaga: 3,
            dyscyplina: 6,
            ambicja: 3,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "woda", waga: 5 },
            { nazwa: "spokoj", waga: 5 },
            { nazwa: "stabilnosc", waga: 4 },
            { nazwa: "uzdrawianie", waga: 3 },
            { nazwa: "codziennosc", waga: 3 },
            { nazwa: "natura", waga: 3 }
        ],
        specjalizacja: ["magia wody", "magia codzienna", "zaklęcia lecznicze"],
        antySpecjalizacja: ["magia ofensywna"],
        znanyPrzyklad: null
    },

    rogogon: {
        nazwa: "Róg rogogona",
        angielska: "Erumpent Horn",
        opis: "Materiał niezwykle rzadki. Silny i wybuchowy. Specjalizuje się w magii ofensywnej, zaklęciach przebijających bariery i eksplozjach magicznych.",
        statystyki: {
            moc: 9,
            lojalnosc: 4,
            stabilnosc: 2,
            adaptacja: 3,
            inteligencja: 4,
            kreatywnosc: 5,
            odwaga: 7,
            dyscyplina: 3,
            ambicja: 6,
            moralnosc: -2
        },
        tagi: [
            { nazwa: "eksplozja", waga: 5 },
            { nazwa: "potega", waga: 5 },
            { nazwa: "destrukcja", waga: 4 },
            { nazwa: "niebezpieczenstwo", waga: 4 },
            { nazwa: "sila", waga: 3 },
            { nazwa: "walka", waga: 3 }
        ],
        specjalizacja: ["magia ofensywna", "przebijanie barier", "eksplozje magiczne"],
        antySpecjalizacja: ["magia subtelna", "zaklęcia precyzyjne"],
        znanyPrzyklad: null
    },

    demimoz: {
        nazwa: "Włos demimoza",
        angielska: "Demiguise Hair",
        opis: "Pochodzi od demimoza - istoty zdolnej do stawania się niewidzialną. Bardzo subtelny rdzeń. Specjalizuje się w zaklęciach ukrywających, niewidzialności, iluzjach i magii ochronnej.",
        statystyki: {
            moc: 4,
            lojalnosc: 6,
            stabilnosc: 7,
            adaptacja: 7,
            inteligencja: 7,
            kreatywnosc: 7,
            odwaga: 3,
            dyscyplina: 6,
            ambicja: 3,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "niewidzialnosc", waga: 5 },
            { nazwa: "iluzja", waga: 5 },
            { nazwa: "subtelnos", waga: 5 },
            { nazwa: "ochrona", waga: 4 },
            { nazwa: "ukrywanie", waga: 4 },
            { nazwa: "spokoj", waga: 3 }
        ],
        specjalizacja: ["niewidzialność", "zaklęcia ukrywające", "iluzje", "magia ochronna"],
        antySpecjalizacja: ["magia ofensywna"],
        znanyPrzyklad: null
    },

    // --- BRAKUJĄCE RDZENIE KANONICZNE ---
    bystroduch: {
        nazwa: "Włókno z serca bystroducha",
        angielska: "Snidget Heartstring",
        opis: "Rzadkość nad rzadkościami z uwagi na dawną historię łapania Złotych Bystroduchów w Quidditchu. Rdzeń tak nieuchwytny i nerwowy, że reaguje na rzucane zaklęcie tuż przed tym, zanim pomyślisz o inkantacji.",
        statystyki: {
            moc: 5,
            lojalnosc: 7,
            stabilnosc: 6,
            adaptacja: 8,
            inteligencja: 6,
            kreatywnosc: 7,
            odwaga: 5,
            dyscyplina: 5,
            ambicja: 4,
            moralnosc: 4
        },
        tagi: [
            { nazwa: "szybkosc", waga: 5 },
            { nazwa: "zwinnosc", waga: 5 },
            { nazwa: "lekkość", waga: 4 },
            { nazwa: "reakcja", waga: 4 },
            { nazwa: "lot", waga: 3 },
            { nazwa: "rzadkosc", waga: 3 }
        ],
        specjalizacja: ["szybkie zaklęcia", "magia wiatru", "zaklęcia lotu", "uniki"],
        antySpecjalizacja: ["magia uderzeniowa dużej mocy", "zaklęcia powolne"],
        znanyPrzyklad: null
    },

    // --- BRAKUJĄCE RDZENIE NIEKANONICZNE ---
    smoczognik: {
        nazwa: "Czułka smoczognika",
        angielska: "Fire Crab Antennae",
        opis: "Niektórzy śmieją się z żółwi ze świecącymi skorupami, ale czułki smoczognika to bardzo kapryśny, ognisty surowiec. Potrafi w mgnieniu oka wypuścić z siebie chmurę ognia, więc wymaga ogromnej ostrożności w obchodzeniu się z nim.",
        statystyki: {
            moc: 6,
            lojalnosc: 5,
            stabilnosc: 3,
            adaptacja: 4,
            inteligencja: 4,
            kreatywnosc: 6,
            odwaga: 5,
            dyscyplina: 4,
            ambicja: 6,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "ogien", waga: 5 },
            { nazwa: "ochrona", waga: 4 },
            { nazwa: "nieprzewidywalnosc", waga: 4 },
            { nazwa: "klejnoty", waga: 3 },
            { nazwa: "iluminacja", waga: 3 }
        ],
        specjalizacja: ["magia ognia", "zaklęcia świetlne", "ochrona przed ogniem"],
        antySpecjalizacja: ["magia wody", "zaklęcia mrożące"],
        znanyPrzyklad: null
    },

    wozak: {
        nazwa: "Kieł Wozaka",
        angielska: "Wozak Fang",
        opis: "Drapieżny z samej swojej natury. Kieł wozaka po prostu uwielbia rzucać się do gardła, nieraz przedwcześnie odpalając zaklęcia uderzeniowe. Idealna zabawka dla raptuchów, którzy najpierw rzucają klątwy, a potem pytają o nazwisko.",
        statystyki: {
            moc: 6,
            lojalnosc: 4,
            stabilnosc: 3,
            adaptacja: 5,
            inteligencja: 4,
            kreatywnosc: 4,
            odwaga: 7,
            dyscyplina: 2,
            ambicja: 5,
            moralnosc: -2
        },
        tagi: [
            { nazwa: "agresja", waga: 5 },
            { nazwa: "szybkosc", waga: 5 },
            { nazwa: "walka", waga: 4 },
            { nazwa: "nieprzewidywalnosc", waga: 4 },
            { nazwa: "niesubordynacja", waga: 3 }
        ],
        specjalizacja: ["magia agresywna", "szybkie klątwy", "nieprzewidywalne ataki"],
        antySpecjalizacja: ["magia precyzyjna", "uzdrawianie"],
        znanyPrzyklad: null
    },

    nundu: {
        nazwa: "Kolec z grzywy Nundu",
        angielska: "Nundu Mane Spike",
        opis: "Oddech żywego Nundu pustoszy całe wioski, a jego kolec robi z magią coś podobnego. Szalenie toksyczny i trudny w ułożeniu materiał, który zazwyczaj ląduje w dłoniach osób o bardzo elastycznym podejściu do słowa 'etyka'.",
        statystyki: {
            moc: 10,
            lojalnosc: 2,
            stabilnosc: 1,
            adaptacja: 3,
            inteligencja: 6,
            kreatywnosc: 5,
            odwaga: 9,
            dyscyplina: 2,
            ambicja: 8,
            moralnosc: -5
        },
        tagi: [
            { nazwa: "toksycznosc", waga: 5 },
            { nazwa: "mrok", waga: 5 },
            { nazwa: "smierc", waga: 5 },
            { nazwa: "potega", waga: 4 },
            { nazwa: "niebezpieczenstwo", waga: 4 }
        ],
        specjalizacja: ["Czarna Magia", "magia toksyczna", "potężne klątwy"],
        antySpecjalizacja: ["uzdrawianie", "magia ochronna"],
        znanyPrzyklad: null
    },

    marmite: {
        nazwa: "Macka Marmite'a",
        angielska: "Marmite Tentacle",
        opis: "Ktokolwiek wpadł na pomysł wypreparowania macki tej kałamarnicowatej bestii, musiał lubić plątać ludziom szyki. Rdzeń ten z niebywałą gracją zawiązuje język przeciwnikowi i lubuje się we wszelkiej magii unieruchamiającej.",
        statystyki: {
            moc: 5,
            lojalnosc: 5,
            stabilnosc: 5,
            adaptacja: 7,
            inteligencja: 6,
            kreatywnosc: 6,
            odwaga: 4,
            dyscyplina: 5,
            ambicja: 5,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "elastycznosc", waga: 5 },
            { nazwa: "wiazanie", waga: 5 },
            { nazwa: "iluzja", waga: 4 },
            { nazwa: "chwyt", waga: 4 },
            { nazwa: "subtelnosc", waga: 3 }
        ],
        specjalizacja: ["zaklęcia chwytające", "magia manipulacji", "zaklęcia iluzji"],
        antySpecjalizacja: ["potężne zaklęcia destrukcyjne"],
        znanyPrzyklad: null
    },

    gryf: {
        nazwa: "Pazur gryfa",
        angielska: "Griffin Claw",
        opis: "Gryfy to wzniosłe, dumne i niebywale szlachetne stworzenia - ich pazury też takie są. Zmuszanie różdżki z pazurem gryfa do podłego, nikczemnego zaklęcia to proszenie się o to, by obróciła je przeciwko rzucającemu.",
        statystyki: {
            moc: 8,
            lojalnosc: 8,
            stabilnosc: 7,
            adaptacja: 4,
            inteligencja: 6,
            kreatywnosc: 4,
            odwaga: 10,
            dyscyplina: 7,
            ambicja: 6,
            moralnosc: 5
        },
        tagi: [
            { nazwa: "odwaga", waga: 5 },
            { nazwa: "honor", waga: 5 },
            { nazwa: "szlachetnosc", waga: 4 },
            { nazwa: "walka", waga: 4 },
            { nazwa: "ochrona", waga: 4 },
            { nazwa: "niezlomnosc", waga: 3 }
        ],
        specjalizacja: ["magia bojowa", "magia obronna", "zaklęcia heroiczne"],
        antySpecjalizacja: ["Czarna Magia", "magia zwodnicza"],
        znanyPrzyklad: null
    },

    sfinks: {
        nazwa: "Pazur sfinksa",
        angielska: "Sphinx Claw",
        opis: "Sfinksy kochają zagadki i ich pazury reagują podobnie. Z nienawiścią odnoszą się do prostackich, głośnych huczków. Brylują za to we wszelkiego rodzaju skomplikowanych urokach ochronnych i wybitnej oklumencji.",
        statystyki: {
            moc: 7,
            lojalnosc: 6,
            stabilnosc: 8,
            adaptacja: 5,
            inteligencja: 10,
            kreatywnosc: 6,
            odwaga: 6,
            dyscyplina: 8,
            ambicja: 7,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "inteligencja", waga: 5 },
            { nazwa: "tajemnica", waga: 5 },
            { nazwa: "zagadka", waga: 4 },
            { nazwa: "magia_umyslu", waga: 4 },
            { nazwa: "starozytnosc", waga: 3 }
        ],
        specjalizacja: ["zaklęcia skomplikowane", "magia umysłu", "rozwiązywanie pułapek"],
        antySpecjalizacja: ["magia prymitywna", "zaklęcia oparte o siłę fizyczną"],
        znanyPrzyklad: null
    },

    garborog: {
        nazwa: "Róg garboroga",
        angielska: "Graphorn Horn",
        opis: "Możesz osłaniać się przed nim najgrubszą tarczą Protego, ale zaklęcie z rogiem garboroga w środku potraktuje ją jak pergamin. Uderza z niebywałym, wręcz taranującym impetem, miażdżąc opór w pył.",
        statystyki: {
            moc: 9,
            lojalnosc: 6,
            stabilnosc: 7,
            adaptacja: 3,
            inteligencja: 4,
            kreatywnosc: 3,
            odwaga: 9,
            dyscyplina: 5,
            ambicja: 5,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "sila", waga: 5 },
            { nazwa: "przebicie", waga: 5 },
            { nazwa: "twardosc", waga: 4 },
            { nazwa: "wytrzymalosc", waga: 4 },
            { nazwa: "walka", waga: 3 }
        ],
        specjalizacja: ["przełamywanie barier", "potężne zaklęcia ofensywne"],
        antySpecjalizacja: ["magia subtelna", "uroki upiększające"],
        znanyPrzyklad: null
    },

    kitsune: {
        nazwa: "Włos z ogona kitsune",
        angielska: "Kitsune Tail Hair",
        opis: "Wschodni czarodzieje doskonale znają lisie sztuczki. Włos kitsune pozwala na zaginanie rzeczywistości i snucie iluzji tak gęstych, że wpadają w nie nawet starzy, doświadczeni aurorzy. Zjawiskowo radzi sobie ze sprytem i zwodnictwem.",
        statystyki: {
            moc: 7,
            lojalnosc: 5,
            stabilnosc: 4,
            adaptacja: 9,
            inteligencja: 8,
            kreatywnosc: 9,
            odwaga: 5,
            dyscyplina: 4,
            ambicja: 6,
            moralnosc: 0
        },
        tagi: [
            { nazwa: "iluzja", waga: 5 },
            { nazwa: "kreatywnosc", waga: 5 },
            { nazwa: "zmiennosc", waga: 4 },
            { nazwa: "ogien", waga: 4 },
            { nazwa: "zwodniczosc", waga: 3 },
            { nazwa: "inteligencja", waga: 3 }
        ],
        specjalizacja: ["magia iluzji", "transmutacja", "magia ognista lisiego ognia"],
        antySpecjalizacja: ["magia szczerości", "twarda obrona"],
        znanyPrzyklad: null
    },

    qilin: {
        nazwa: "Łuska z grzbietu Qilina",
        angielska: "Qilin Scale",
        opis: "Niektórzy mówią, że w tym rdzeniu drzemie sam osąd ostateczny. Qilin instynktownie wyczuwa mrok w duszy; nikt z brudnym sumieniem nie zmusi takiej różdżki do oddania z siebie pełni możliwości. Magia absolutnie nieskazitelna.",
        statystyki: {
            moc: 8,
            lojalnosc: 9,
            stabilnosc: 8,
            adaptacja: 4,
            inteligencja: 7,
            kreatywnosc: 5,
            odwaga: 7,
            dyscyplina: 7,
            ambicja: 4,
            moralnosc: 10
        },
        tagi: [
            { nazwa: "czystosc", waga: 5 },
            { nazwa: "prawda", waga: 5 },
            { nazwa: "przywodztwo", waga: 4 },
            { nazwa: "sprawiedliwosc", waga: 4 },
            { nazwa: "szlachetnosc", waga: 4 }
        ],
        specjalizacja: ["magia prawdy", "zaklęcia ochronne dużego kalibru", "magia sprawiedliwości"],
        antySpecjalizacja: ["Czarna Magia", "iluzje", "zaklęcia kłamstwa"],
        znanyPrzyklad: null
    },

    zmijoptak: {
        nazwa: "Łuska żmijoptaka",
        angielska: "Occamy Scale",
        opis: "Ostrożnie z nim! Żmijoptaki potrafią w ułamku sekundy urosnąć do rozmiarów stodoły i ten rdzeń pozwala na genialne wręcz manipulowanie przestrzenią. Jeśli kiedykolwiek próbowałeś spakować dom do walizki, żmijoptak jest tym, czego ci trzeba.",
        statystyki: {
            moc: 7,
            lojalnosc: 6,
            stabilnosc: 4,
            adaptacja: 10,
            inteligencja: 6,
            kreatywnosc: 8,
            odwaga: 6,
            dyscyplina: 5,
            ambicja: 5,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "adaptacja", waga: 5 },
            { nazwa: "zmiennosc", waga: 5 },
            { nazwa: "ochrona_terytorium", waga: 4 },
            { nazwa: "przestrzen", waga: 4 },
            { nazwa: "nieprzewidywalnosc", waga: 3 }
        ],
        specjalizacja: ["magia przestrzenna", "zaklęcia rozszerzające", "elastyczne bariery"],
        antySpecjalizacja: ["magia rutynowa"],
        znanyPrzyklad: null
    },

    mantykora: {
        nazwa: "Żądło mantykory",
        angielska: "Manticore Stinger",
        opis: "Zabawa z tym włóknem to jak igranie z naładowaną różdżką obróconą w swoją stronę. Żądło mantykory lubuje się w agonii, dlatego bez większego wysiłku powiela najbardziej sadystyczne klątwy wymyślone przez świat magii.",
        statystyki: {
            moc: 9,
            lojalnosc: 4,
            stabilnosc: 3,
            adaptacja: 4,
            inteligencja: 5,
            kreatywnosc: 4,
            odwaga: 8,
            dyscyplina: 2,
            ambicja: 8,
            moralnosc: -4
        },
        tagi: [
            { nazwa: "cierpienie", waga: 5 },
            { nazwa: "walka", waga: 5 },
            { nazwa: "krwiozerczosc", waga: 4 },
            { nazwa: "mrok", waga: 4 },
            { nazwa: "potega", waga: 3 }
        ],
        specjalizacja: ["magia destrukcyjna", "okrutne klątwy", "Czarna Magia"],
        antySpecjalizacja: ["magia lecznicza", "zaklęcia ochronne"],
        znanyPrzyklad: null
    }
};

// Mapa nazw polskich -> klucze
export const mapaRdzeni = {};
for (const [klucz, rdzen] of Object.entries(bazaRdzeni)) {
    mapaRdzeni[rdzen.nazwa.toLowerCase()] = klucz;
    mapaRdzeni[rdzen.angielska.toLowerCase()] = klucz;
}

export function znajdzRdzen(nazwa) {
    if (!nazwa) return null;
    const klucz = mapaRdzeni[nazwa.toLowerCase()];
    if (klucz) return bazaRdzeni[klucz];
    // Fuzzy match
    for (const [k, rdzen] of Object.entries(bazaRdzeni)) {
        if (rdzen.nazwa.toLowerCase().includes(nazwa.toLowerCase()) ||
            nazwa.toLowerCase().includes(rdzen.nazwa.toLowerCase())) {
            return rdzen;
        }
    }
    return null;
}


