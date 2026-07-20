/**
 * 🌳 Baza danych drewien różdżkowych - System Wandlore
 * Akademia Magii Aeternum
 * 
 * Każde drewno posiada:
 * - statystyki (10 parametrów liczbowych)
 * - tagi z wagami (system kompatybilności)
 * - opis, specjalizację, idealnego właściciela
 * 
 * Wartości oparte na kanonicznych opisach J.K. Rowling / Pottermore / Wizarding World.
 */

export const bazaDrewien = {
    akacja: {
        nazwa: "Akacja",
        angielska: "Acacia",
        opis: "Akacja jest jednym z najbardziej niedocenianych gatunków. Nie jest łatwa - nie wybiera przeciętnych czarodziejów. Jeżeli właściciel nie odpowiada jej charakterowi, zaklęcia słabną, różdżka odmawia współpracy, a magia staje się niestabilna.",
        statystyki: {
            moc: 5,
            lojalnosc: 6,
            stabilnosc: 7,
            adaptacja: 3,
            inteligencja: 8,
            kreatywnosc: 5,
            odwaga: 3,
            dyscyplina: 9,
            ambicja: 5,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "precyzja", waga: 5 },
            { nazwa: "kontrola", waga: 5 },
            { nazwa: "inteligencja", waga: 4 },
            { nazwa: "dyscyplina", waga: 4 },
            { nazwa: "spokoj", waga: 3 },
            { nazwa: "analiza", waga: 3 }
        ],
        idealnyWlasciciel: "inteligentny, analityczny, ostrożny, precyzyjny, spokojny",
        specjalizacja: ["precyzyjne zaklęcia", "kontrola magii", "dokładność"],
        znanyPrzyklad: null
    },

    olcha: {
        nazwa: "Olcha",
        angielska: "Alder",
        opis: "Olcha jest bardzo nietypowa - nie wybiera osób dominujących. Najczęściej wybiera ludzi pomocnych, odważnych i skromnych. Szybko dostosowuje się do właściciela i dobrze współpracuje z magią niewerbalną.",
        statystyki: {
            moc: 6,
            lojalnosc: 7,
            stabilnosc: 6,
            adaptacja: 8,
            inteligencja: 6,
            kreatywnosc: 5,
            odwaga: 7,
            dyscyplina: 5,
            ambicja: 4,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "pomocnosc", waga: 5 },
            { nazwa: "adaptacja", waga: 4 },
            { nazwa: "odwaga", waga: 4 },
            { nazwa: "skromnosc", waga: 4 },
            { nazwa: "magia_niewerbalna", waga: 3 },
            { nazwa: "rozwoj", waga: 3 }
        ],
        idealnyWlasciciel: "pomocny, odważny, skromny",
        specjalizacja: ["magia niewerbalna", "adaptacyjna magia", "szybkie uczenie się"],
        znanyPrzyklad: "Lucjusz Malfoy"
    },

    jablon: {
        nazwa: "Jabłoń",
        angielska: "Apple",
        opis: "Jedno z najrzadszych drewien. Mistrz Tahi twierdzi, że przez całe życie wykonał bardzo niewiele różdżek z jabłoni. Wybiera ludzi o wielkim uroku osobistym, posiadających wysokie ideały, charyzmatycznych i zdolnych inspirować innych.",
        statystyki: {
            moc: 7,
            lojalnosc: 7,
            stabilnosc: 7,
            adaptacja: 5,
            inteligencja: 6,
            kreatywnosc: 6,
            odwaga: 5,
            dyscyplina: 6,
            ambicja: 6,
            moralnosc: 4
        },
        tagi: [
            { nazwa: "charyzma", waga: 5 },
            { nazwa: "idealizm", waga: 5 },
            { nazwa: "swiatlo", waga: 4 },
            { nazwa: "uzdrawianie", waga: 4 },
            { nazwa: "ochrona", waga: 3 },
            { nazwa: "inspiracja", waga: 3 }
        ],
        idealnyWlasciciel: "charyzmatyczny, pełen ideałów, inspirujący innych",
        specjalizacja: ["zaklęcia ochronne", "uzdrawianie", "magia światła"],
        znanyPrzyklad: null
    },

    jesion: {
        nazwa: "Jesion",
        angielska: "Ash",
        opis: "Jesion jest wyjątkowo wierny. Jeżeli zaakceptuje właściciela, praktycznie nigdy go nie zdradzi. Nie lubi zmiany właściciela - po odebraniu działa znacznie słabiej i może niemal całkowicie odmówić współpracy.",
        statystyki: {
            moc: 7,
            lojalnosc: 10,
            stabilnosc: 8,
            adaptacja: 2,
            inteligencja: 5,
            kreatywnosc: 3,
            odwaga: 6,
            dyscyplina: 8,
            ambicja: 5,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "lojalnosc", waga: 5 },
            { nazwa: "wiernosc", waga: 5 },
            { nazwa: "dyscyplina", waga: 4 },
            { nazwa: "stabilnosc", waga: 4 },
            { nazwa: "tradycja", waga: 3 },
            { nazwa: "spokoj", waga: 3 }
        ],
        idealnyWlasciciel: "pewny siebie, stanowczy, posiadający własne zasady",
        specjalizacja: ["wierna magia", "stabilne zaklęcia", "długotrwałe czary"],
        znanyPrzyklad: null
    },

    osika: {
        nazwa: "Osika",
        angielska: "Aspen",
        opis: "Jedno z najlepszych drewien do pojedynków. Lubi wojowników, aurorów i ludzi odważnych. W XVIII wieku wiele różdżek aurorów wykonywano właśnie z osiki.",
        statystyki: {
            moc: 8,
            lojalnosc: 5,
            stabilnosc: 6,
            adaptacja: 6,
            inteligencja: 5,
            kreatywnosc: 5,
            odwaga: 9,
            dyscyplina: 7,
            ambicja: 7,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "walka", waga: 5 },
            { nazwa: "odwaga", waga: 5 },
            { nazwa: "pojedynki", waga: 5 },
            { nazwa: "szybkosc", waga: 4 },
            { nazwa: "determinacja", waga: 3 },
            { nazwa: "honor", waga: 3 }
        ],
        idealnyWlasciciel: "wojownik, auror, odważny",
        specjalizacja: ["zaklęcia ofensywne", "szybka walka", "pojedynki"],
        znanyPrzyklad: null
    },

    buk: {
        nazwa: "Buk",
        angielska: "Beech",
        opis: "Buk jest niezwykle inteligentny. Nie toleruje właścicieli ograniczonych, zarozumiałych lub nietolerancyjnych. Jeżeli właściciel staje się zamknięty na wiedzę, różdżka może wręcz osłabnąć.",
        statystyki: {
            moc: 6,
            lojalnosc: 6,
            stabilnosc: 7,
            adaptacja: 6,
            inteligencja: 9,
            kreatywnosc: 6,
            odwaga: 5,
            dyscyplina: 7,
            ambicja: 6,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "inteligencja", waga: 5 },
            { nazwa: "wiedza", waga: 5 },
            { nazwa: "tolerancja", waga: 4 },
            { nazwa: "otwartość", waga: 4 },
            { nazwa: "rozwoj", waga: 3 },
            { nazwa: "madrosc", waga: 3 }
        ],
        idealnyWlasciciel: "inteligentny, otwarty na wiedzę, tolerancyjny",
        specjalizacja: ["zaklęcia wymagające wiedzy", "magia teoretyczna", "badania magiczne"],
        znanyPrzyklad: null
    },

    tarnina: {
        nazwa: "Tarnina",
        angielska: "Blackthorn",
        opis: "Jedno z najbardziej wojowniczych drewien. Wybiera ludzi, którzy wiele przeszli, potrafią walczyć i przetrwali trudne doświadczenia. Mistrz Tahi twierdzi, że tarnina najlepiej współpracuje z osobami, które 'przeszły przez ogień'.",
        statystyki: {
            moc: 8,
            lojalnosc: 7,
            stabilnosc: 6,
            adaptacja: 4,
            inteligencja: 5,
            kreatywnosc: 4,
            odwaga: 9,
            dyscyplina: 7,
            ambicja: 6,
            moralnosc: 0
        },
        tagi: [
            { nazwa: "przetrwanie", waga: 5 },
            { nazwa: "walka", waga: 5 },
            { nazwa: "wytrwalosc", waga: 5 },
            { nazwa: "sila", waga: 4 },
            { nazwa: "odpornosc", waga: 4 },
            { nazwa: "determinacja", waga: 3 }
        ],
        idealnyWlasciciel: "zahartowany, odporny, wojownik po przejściach",
        specjalizacja: ["magia bojowa", "zaklęcia obronne", "przetrwanie"],
        znanyPrzyklad: null
    },

    czarny_orzech: {
        nazwa: "Czarny orzech",
        angielska: "Black Walnut",
        opis: "To drewno niezwykle ceni szczerość wobec samego siebie. Jeżeli właściciel okłamuje siebie, tłumi emocje lub żyje w konflikcie wewnętrznym, różdżka zaczyna tracić moc. Natomiast gdy właściciel zaakceptuje samego siebie, staje się niezwykle potężna.",
        statystyki: {
            moc: 7,
            lojalnosc: 7,
            stabilnosc: 5,
            adaptacja: 6,
            inteligencja: 7,
            kreatywnosc: 5,
            odwaga: 6,
            dyscyplina: 5,
            ambicja: 6,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "szczerosc", waga: 5 },
            { nazwa: "samoswiadomosc", waga: 5 },
            { nazwa: "autentycznosc", waga: 4 },
            { nazwa: "wewnetrzna_sila", waga: 4 },
            { nazwa: "emocje", waga: 3 },
            { nazwa: "rozwoj", waga: 3 }
        ],
        idealnyWlasciciel: "szczery wobec siebie, samoświadomy, autentyczny",
        specjalizacja: ["magia wzmacniana autentycznością", "zaklęcia wymagające szczerości"],
        znanyPrzyklad: null
    },

    cedr: {
        nazwa: "Cedr",
        angielska: "Cedar",
        opis: "Cedr rozpoznaje siłę charakteru. Nie wybiera ludzi słabych psychicznie. Jest doskonały dla przywódców, strategów i osób pewnych swoich decyzji.",
        statystyki: {
            moc: 7,
            lojalnosc: 7,
            stabilnosc: 8,
            adaptacja: 5,
            inteligencja: 7,
            kreatywnosc: 4,
            odwaga: 7,
            dyscyplina: 8,
            ambicja: 7,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "przywodztwo", waga: 5 },
            { nazwa: "sila_charakteru", waga: 5 },
            { nazwa: "strategia", waga: 4 },
            { nazwa: "pewnosc_siebie", waga: 4 },
            { nazwa: "dyscyplina", waga: 3 },
            { nazwa: "autorytet", waga: 3 }
        ],
        idealnyWlasciciel: "przywódca, strateg, pewny swoich decyzji",
        specjalizacja: ["magia przywódcza", "zaklęcia strategiczne", "ochrona grupowa"],
        znanyPrzyklad: null
    },

    wisnia: {
        nazwa: "Wiśnia",
        angielska: "Cherry",
        opis: "Bardzo rzadkie drewno, w Japonii otaczane ogromnym szacunkiem. Potrafi tworzyć niezwykle potężne różdżki i bardzo eleganckie zaklęcia. Nie oznacza jednak łagodności - może być śmiertelnie skuteczna.",
        statystyki: {
            moc: 8,
            lojalnosc: 6,
            stabilnosc: 5,
            adaptacja: 5,
            inteligencja: 6,
            kreatywnosc: 7,
            odwaga: 6,
            dyscyplina: 6,
            ambicja: 7,
            moralnosc: 0
        },
        tagi: [
            { nazwa: "potega", waga: 5 },
            { nazwa: "elegancja", waga: 5 },
            { nazwa: "rzadkosc", waga: 4 },
            { nazwa: "precyzja", waga: 4 },
            { nazwa: "smiertelnosc", waga: 3 },
            { nazwa: "szacunek", waga: 3 }
        ],
        idealnyWlasciciel: "potężny, elegancki, zdecydowany",
        specjalizacja: ["potężne zaklęcia", "elegancka magia", "precyzyjna destrukcja"],
        znanyPrzyklad: null
    },

    kasztan: {
        nazwa: "Kasztan",
        angielska: "Chestnut",
        opis: "Jedno z najbardziej 'zależnych' drewien. Jego charakter silnie zmienia rdzeń. Kasztan + włos jednorożca = uczciwość, natomiast Kasztan + smocze serce = ambicja.",
        statystyki: {
            moc: 6,
            lojalnosc: 5,
            stabilnosc: 6,
            adaptacja: 8,
            inteligencja: 5,
            kreatywnosc: 6,
            odwaga: 5,
            dyscyplina: 5,
            ambicja: 5,
            moralnosc: 0
        },
        tagi: [
            { nazwa: "adaptacja", waga: 5 },
            { nazwa: "zmiennosc", waga: 5 },
            { nazwa: "wszechstronnosc", waga: 4 },
            { nazwa: "zaleznosc_od_rdzenia", waga: 4 },
            { nazwa: "elastycznosc", waga: 3 },
            { nazwa: "harmonia", waga: 3 }
        ],
        idealnyWlasciciel: "zależny od rdzenia - różnorodny",
        specjalizacja: ["zależna od rdzenia"],
        znanyPrzyklad: null
    },

    cyprys: {
        nazwa: "Cyprys",
        angielska: "Cypress",
        opis: "Cyprys wybiera osoby honorowe, odważne i gotowe umrzeć za innych. Mistrz Tahi twierdzi, że właściciel cyprysowej różdżki raczej nie umrze tchórzliwie.",
        statystyki: {
            moc: 7,
            lojalnosc: 8,
            stabilnosc: 7,
            adaptacja: 4,
            inteligencja: 5,
            kreatywnosc: 3,
            odwaga: 10,
            dyscyplina: 7,
            ambicja: 5,
            moralnosc: 4
        },
        tagi: [
            { nazwa: "honor", waga: 5 },
            { nazwa: "odwaga", waga: 5 },
            { nazwa: "poswiecenie", waga: 5 },
            { nazwa: "szlachetnosc", waga: 4 },
            { nazwa: "niezlomnosc", waga: 4 },
            { nazwa: "lojalnosc", waga: 3 }
        ],
        idealnyWlasciciel: "honorowy, odważny, gotowy do poświęceń",
        specjalizacja: ["magia ochronna", "zaklęcia defensywne", "magia honorowa"],
        znanyPrzyklad: null
    },

    deren: {
        nazwa: "Dereń",
        angielska: "Dogwood",
        opis: "To drewno lubi zabawę. Najczęściej wybiera ludzi dowcipnych, kreatywnych i spontanicznych. Nie przepada za nudą.",
        statystyki: {
            moc: 5,
            lojalnosc: 5,
            stabilnosc: 4,
            adaptacja: 8,
            inteligencja: 5,
            kreatywnosc: 9,
            odwaga: 5,
            dyscyplina: 3,
            ambicja: 4,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "kreatywnosc", waga: 5 },
            { nazwa: "humor", waga: 5 },
            { nazwa: "zabawa", waga: 4 },
            { nazwa: "spontanicznosc", waga: 4 },
            { nazwa: "energia", waga: 3 },
            { nazwa: "radosc", waga: 3 }
        ],
        idealnyWlasciciel: "dowcipny, kreatywny, spontaniczny",
        specjalizacja: ["uroki", "zaklęcia kreatywne", "magia nieszablonowa"],
        znanyPrzyklad: null
    },

    heban: {
        nazwa: "Heban",
        angielska: "Ebony",
        opis: "Jedno z najbardziej imponujących drewien. Najczęściej wybiera indywidualistów, nonkonformistów i ludzi idących własną drogą. Świetnie współpracuje z transmutacją i magią bojową.",
        statystyki: {
            moc: 8,
            lojalnosc: 7,
            stabilnosc: 7,
            adaptacja: 5,
            inteligencja: 7,
            kreatywnosc: 6,
            odwaga: 8,
            dyscyplina: 7,
            ambicja: 7,
            moralnosc: 0
        },
        tagi: [
            { nazwa: "indywidualizm", waga: 5 },
            { nazwa: "nonkonformizm", waga: 5 },
            { nazwa: "niezaleznosc", waga: 4 },
            { nazwa: "walka", waga: 4 },
            { nazwa: "transmutacja", waga: 3 },
            { nazwa: "potega", waga: 3 }
        ],
        idealnyWlasciciel: "indywidualista, nonkonformista, niezależny",
        specjalizacja: ["transmutacja", "magia bojowa", "magia indywidualna"],
        znanyPrzyklad: null
    },

    bez_czarny: {
        nazwa: "Bez czarny",
        angielska: "Elder",
        opis: "Najpotężniejsze drewno, jednocześnie najbardziej kapryśne. Nie szuka silnego właściciela - szuka właściciela wyjątkowego. Różdżki z bzu są niezwykle rzadkie, bardzo wybredne, trudno zmieniają właściciela i nie tolerują przeciętności.",
        statystyki: {
            moc: 10,
            lojalnosc: 3,
            stabilnosc: 3,
            adaptacja: 4,
            inteligencja: 10,
            kreatywnosc: 8,
            odwaga: 7,
            dyscyplina: 4,
            ambicja: 9,
            moralnosc: 0
        },
        tagi: [
            { nazwa: "potega", waga: 5 },
            { nazwa: "wyjatkowosc", waga: 5 },
            { nazwa: "przeznaczenie", waga: 5 },
            { nazwa: "rzadkosc", waga: 4 },
            { nazwa: "kapryśnosc", waga: 4 },
            { nazwa: "transformacja", waga: 3 }
        ],
        idealnyWlasciciel: "wyjątkowy, niezwykły, przeznaczony do wielkich rzeczy",
        specjalizacja: ["każda magia na najwyższym poziomie", "magia legendarna"],
        znanyPrzyklad: "Albus Dumbledore (Berło Śmierci)"
    },

    wiaz: {
        nazwa: "Wiąz",
        angielska: "Elm",
        opis: "Wiąz jest drewnem o bardzo starej reputacji. Mistrz Tahi zaznacza, że wiąz wybiera przede wszystkim osoby o naturalnym autorytecie i godności, niezależnie od pochodzenia. Bardzo dobrze radzi sobie z zaklęciami wymagającymi precyzji.",
        statystyki: {
            moc: 7,
            lojalnosc: 7,
            stabilnosc: 8,
            adaptacja: 4,
            inteligencja: 7,
            kreatywnosc: 4,
            odwaga: 5,
            dyscyplina: 8,
            ambicja: 6,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "autorytet", waga: 5 },
            { nazwa: "godnosc", waga: 5 },
            { nazwa: "precyzja", waga: 4 },
            { nazwa: "elegancja", waga: 4 },
            { nazwa: "przywodztwo", waga: 3 },
            { nazwa: "stabilnosc", waga: 3 }
        ],
        idealnyWlasciciel: "opanowany, inteligentny, elegancki, posiadający autorytet",
        specjalizacja: ["precyzyjne zaklęcia", "magia formalna", "stabilna magia"],
        znanyPrzyklad: null
    },

    dab_angielski: {
        nazwa: "Dąb angielski",
        angielska: "English Oak",
        opis: "Jedno z najbardziej szanowanych magicznych drzew. Symbolizuje siłę, wytrwałość i związek z naturą. Nie lubi tchórzostwa i nie znosi zdrady. Doskonale współpracuje z magią ochronną.",
        statystyki: {
            moc: 8,
            lojalnosc: 9,
            stabilnosc: 9,
            adaptacja: 4,
            inteligencja: 6,
            kreatywnosc: 4,
            odwaga: 8,
            dyscyplina: 7,
            ambicja: 5,
            moralnosc: 4
        },
        tagi: [
            { nazwa: "sila", waga: 5 },
            { nazwa: "wytrwalosc", waga: 5 },
            { nazwa: "lojalnosc", waga: 5 },
            { nazwa: "ochrona", waga: 4 },
            { nazwa: "natura", waga: 4 },
            { nazwa: "honor", waga: 3 }
        ],
        idealnyWlasciciel: "odważny, wierny zasadom, lojalny wobec przyjaciół",
        specjalizacja: ["magia ochronna", "zaklęcia defensywne", "magia natury"],
        znanyPrzyklad: null
    },

    jodla: {
        nazwa: "Jodła",
        angielska: "Fir",
        opis: "Jodła wybiera osoby, które potrafią zachować zimną krew. Najczęściej są to strategowie, dowódcy, aurorzy i ludzi odporni psychicznie.",
        statystyki: {
            moc: 7,
            lojalnosc: 6,
            stabilnosc: 8,
            adaptacja: 5,
            inteligencja: 7,
            kreatywnosc: 4,
            odwaga: 8,
            dyscyplina: 9,
            ambicja: 7,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "strategia", waga: 5 },
            { nazwa: "odpornosc_psychiczna", waga: 5 },
            { nazwa: "zimna_krew", waga: 5 },
            { nazwa: "walka", waga: 4 },
            { nazwa: "dyscyplina", waga: 4 },
            { nazwa: "przywodztwo", waga: 3 }
        ],
        idealnyWlasciciel: "strateg, dowódca, auror, odporny psychicznie",
        specjalizacja: ["pojedynki", "szybkie decyzje", "magia bojowa"],
        znanyPrzyklad: null
    },

    glog: {
        nazwa: "Głóg",
        angielska: "Hawthorn",
        opis: "Jedno z najbardziej skomplikowanych drewien. Nigdy nie jest całkowicie 'dobre' ani 'złe'. Wybiera ludzi pełnych sprzeczności - uzdrowiciela potrafiącego zabijać, wojownika o dobrym sercu. Jest niezwykle potężny, ale wymaga właściciela dobrze rozumiejącego samego siebie.",
        statystyki: {
            moc: 7,
            lojalnosc: 6,
            stabilnosc: 5,
            adaptacja: 7,
            inteligencja: 6,
            kreatywnosc: 6,
            odwaga: 7,
            dyscyplina: 5,
            ambicja: 6,
            moralnosc: 0
        },
        tagi: [
            { nazwa: "sprzecznosc", waga: 5 },
            { nazwa: "dualnosc", waga: 5 },
            { nazwa: "samoswiadomosc", waga: 4 },
            { nazwa: "potega", waga: 4 },
            { nazwa: "uzdrawianie", waga: 3 },
            { nazwa: "walka", waga: 3 }
        ],
        idealnyWlasciciel: "pełen sprzeczności, rozumiejący samego siebie, złożony",
        specjalizacja: ["magia dualna", "uzdrawianie i walka", "zaklęcia kontrastowe"],
        znanyPrzyklad: "Draco Malfoy"
    },

    leszczyna: {
        nazwa: "Leszczyna",
        angielska: "Hazel",
        opis: "Leszczyna jest wyjątkowo wrażliwa na emocje właściciela. Jeżeli właściciel nie kontroluje emocji, różdżka może emitować iskry, działać niestabilnie i ujawniać stan emocjonalny.",
        statystyki: {
            moc: 6,
            lojalnosc: 7,
            stabilnosc: 5,
            adaptacja: 7,
            inteligencja: 6,
            kreatywnosc: 6,
            odwaga: 5,
            dyscyplina: 5,
            ambicja: 5,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "emocje", waga: 5 },
            { nazwa: "empatia", waga: 5 },
            { nazwa: "wrazliwosc", waga: 4 },
            { nazwa: "samoswiadomosc", waga: 4 },
            { nazwa: "harmonia", waga: 3 },
            { nazwa: "intuicja", waga: 3 }
        ],
        idealnyWlasciciel: "świadomy siebie, empatyczny, kontrolujący emocje",
        specjalizacja: ["magia emocjonalna", "zaklęcia intuicyjne", "magia empatyczna"],
        znanyPrzyklad: null
    },

    ostrokrzew: {
        nazwa: "Ostrokrzew",
        angielska: "Holly",
        opis: "Jedno z najsłynniejszych drewien. Od wieków uważano go za drewno ochrony, szczęścia i walki ze złem. Według Mistrza Tahiego ostrokrzew i cis często znajdują się po przeciwnych stronach wielkich konfliktów.",
        statystyki: {
            moc: 7,
            lojalnosc: 8,
            stabilnosc: 7,
            adaptacja: 5,
            inteligencja: 6,
            kreatywnosc: 4,
            odwaga: 9,
            dyscyplina: 6,
            ambicja: 7,
            moralnosc: 4
        },
        tagi: [
            { nazwa: "ochrona", waga: 5 },
            { nazwa: "odwaga", waga: 5 },
            { nazwa: "poswiecenie", waga: 4 },
            { nazwa: "honor", waga: 4 },
            { nazwa: "swiatlo", waga: 4 },
            { nazwa: "determinacja", waga: 3 },
            { nazwa: "niezlomnosc", waga: 3 }
        ],
        idealnyWlasciciel: "walczący z przeciwnościami, gotowy do poświęceń, silny charakter",
        specjalizacja: ["zaklęcia obronne", "Patronus", "magia ochronna"],
        znanyPrzyklad: "Harry Potter"
    },

    grab: {
        nazwa: "Grab",
        angielska: "Hornbeam",
        opis: "Grab należy do najbardziej wybrednych gatunków. Wybiera wyłącznie ludzi niezwykle utalentowanych, posiadających jasno określone cele i konsekwentnych. Po zaakceptowaniu właściciela praktycznie nigdy go nie opuszcza.",
        statystyki: {
            moc: 7,
            lojalnosc: 9,
            stabilnosc: 7,
            adaptacja: 3,
            inteligencja: 8,
            kreatywnosc: 5,
            odwaga: 5,
            dyscyplina: 9,
            ambicja: 8,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "talent", waga: 5 },
            { nazwa: "konsekwencja", waga: 5 },
            { nazwa: "lojalnosc", waga: 4 },
            { nazwa: "cel", waga: 4 },
            { nazwa: "dyscyplina", waga: 4 },
            { nazwa: "determinacja", waga: 3 }
        ],
        idealnyWlasciciel: "utalentowany, konsekwentny, posiadający jasne cele",
        specjalizacja: ["magia celowa", "zaklęcia wymagające determinacji"],
        znanyPrzyklad: null
    },

    modrzew: {
        nazwa: "Modrzew",
        angielska: "Larch",
        opis: "Modrzew dodaje właścicielowi odwagi. Często wybiera osoby, które jeszcze nie wierzą we własne możliwości, ale posiadają ogromny potencjał. Jest drewnem rozwoju.",
        statystyki: {
            moc: 6,
            lojalnosc: 6,
            stabilnosc: 6,
            adaptacja: 7,
            inteligencja: 5,
            kreatywnosc: 6,
            odwaga: 7,
            dyscyplina: 5,
            ambicja: 6,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "rozwoj", waga: 5 },
            { nazwa: "potencjal", waga: 5 },
            { nazwa: "odwaga", waga: 4 },
            { nazwa: "pewnosc_siebie", waga: 4 },
            { nazwa: "transformacja", waga: 3 },
            { nazwa: "nadzieja", waga: 3 }
        ],
        idealnyWlasciciel: "pełen potencjału, potrzebujący odwagi, rozwijający się",
        specjalizacja: ["magia rozwojowa", "wzmacnianie odwagi", "zaklęcia motywacyjne"],
        znanyPrzyklad: null
    },

    laur: {
        nazwa: "Laur",
        angielska: "Laurel",
        opis: "Nie znosi nieuczciwości. Wybiera ludzi ambitnych, uczciwych i honorowych. Jeżeli właściciel dopuści się zdrady własnych zasad, różdżka może przestać współpracować.",
        statystyki: {
            moc: 7,
            lojalnosc: 7,
            stabilnosc: 7,
            adaptacja: 4,
            inteligencja: 7,
            kreatywnosc: 5,
            odwaga: 6,
            dyscyplina: 7,
            ambicja: 8,
            moralnosc: 4
        },
        tagi: [
            { nazwa: "honor", waga: 5 },
            { nazwa: "uczciwosc", waga: 5 },
            { nazwa: "ambicja", waga: 4 },
            { nazwa: "szlachetnosc", waga: 4 },
            { nazwa: "lojalnosc", waga: 3 },
            { nazwa: "sprawiedliwosc", waga: 3 }
        ],
        idealnyWlasciciel: "ambitny, uczciwy, honorowy",
        specjalizacja: ["magia honorowa", "zaklęcia sprawiedliwości"],
        znanyPrzyklad: null
    },

    klon: {
        nazwa: "Klon",
        angielska: "Maple",
        opis: "Klon uwielbia rozwój. Nie wybiera ludzi zadowolonych z przeciętności. Najczęściej wybiera odkrywców, podróżników, badaczy i wynalazców. Nie lubi stagnacji.",
        statystyki: {
            moc: 6,
            lojalnosc: 5,
            stabilnosc: 5,
            adaptacja: 9,
            inteligencja: 7,
            kreatywnosc: 8,
            odwaga: 6,
            dyscyplina: 4,
            ambicja: 7,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "rozwoj", waga: 5 },
            { nazwa: "odkrywanie", waga: 5 },
            { nazwa: "kreatywnosc", waga: 4 },
            { nazwa: "podroz", waga: 4 },
            { nazwa: "ciekawosc", waga: 4 },
            { nazwa: "innowacja", waga: 3 }
        ],
        idealnyWlasciciel: "odkrywca, podróżnik, badacz, wynalazca",
        specjalizacja: ["magia eksploracyjna", "zaklęcia podróżnicze", "innowacyjna magia"],
        znanyPrzyklad: null
    },

    grusza: {
        nazwa: "Grusza",
        angielska: "Pear",
        opis: "Jedno z najbardziej szlachetnych drewien. Nigdy nie wybiera czarodziejów o mrocznych skłonnościach. Ceni serdeczność, hojność, mądrość i cierpliwość.",
        statystyki: {
            moc: 6,
            lojalnosc: 8,
            stabilnosc: 8,
            adaptacja: 5,
            inteligencja: 7,
            kreatywnosc: 5,
            odwaga: 4,
            dyscyplina: 7,
            ambicja: 4,
            moralnosc: 5
        },
        tagi: [
            { nazwa: "szlachetnosc", waga: 5 },
            { nazwa: "serdecznosc", waga: 5 },
            { nazwa: "madrosc", waga: 4 },
            { nazwa: "cierpliwosc", waga: 4 },
            { nazwa: "swiatlo", waga: 4 },
            { nazwa: "hojnosc", waga: 3 }
        ],
        idealnyWlasciciel: "serdeczny, hojny, mądry, cierpliwy",
        specjalizacja: ["magia lecznicza", "zaklęcia dobroci", "magia światła"],
        znanyPrzyklad: null
    },

    sosna: {
        nazwa: "Sosna",
        angielska: "Pine",
        opis: "Sosna wybiera osoby bardzo niezależne - często samotników, myślicieli i indywidualistów.",
        statystyki: {
            moc: 6,
            lojalnosc: 6,
            stabilnosc: 7,
            adaptacja: 5,
            inteligencja: 7,
            kreatywnosc: 7,
            odwaga: 5,
            dyscyplina: 6,
            ambicja: 5,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "niezaleznosc", waga: 5 },
            { nazwa: "samotnosc", waga: 4 },
            { nazwa: "myslenie", waga: 4 },
            { nazwa: "indywidualizm", waga: 4 },
            { nazwa: "spokoj", waga: 3 },
            { nazwa: "kontemplacja", waga: 3 }
        ],
        idealnyWlasciciel: "niezależny, samotnik, myśliciel",
        specjalizacja: ["magia samotna", "medytacyjne zaklęcia", "magia refleksyjna"],
        znanyPrzyklad: null
    },

    topola: {
        nazwa: "Topola",
        angielska: "Poplar",
        opis: "Najlepiej współpracuje z właścicielem mającym jasno określoną wizję życia. Nie przepada za ludźmi niezdecydowanymi.",
        statystyki: {
            moc: 6,
            lojalnosc: 6,
            stabilnosc: 7,
            adaptacja: 4,
            inteligencja: 6,
            kreatywnosc: 5,
            odwaga: 5,
            dyscyplina: 7,
            ambicja: 7,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "wizja", waga: 5 },
            { nazwa: "konsekwencja", waga: 5 },
            { nazwa: "cel", waga: 4 },
            { nazwa: "determinacja", waga: 4 },
            { nazwa: "stanowczosc", waga: 3 },
            { nazwa: "planowanie", waga: 3 }
        ],
        idealnyWlasciciel: "zdecydowany, posiadający jasną wizję, konsekwentny",
        specjalizacja: ["zaklęcia wymagające determinacji", "magia celowa"],
        znanyPrzyklad: null
    },

    sekwoja: {
        nazwa: "Sekwoja",
        angielska: "Redwood",
        opis: "Mistrz Tahi zauważył ciekawą prawidłowość - właściciele sekwojowych różdżek bardzo często mają niezwykłe szczęście. Nie wiadomo jednak, czy różdżka przynosi szczęście, czy po prostu wybiera szczęściarzy.",
        statystyki: {
            moc: 6,
            lojalnosc: 6,
            stabilnosc: 7,
            adaptacja: 6,
            inteligencja: 5,
            kreatywnosc: 5,
            odwaga: 6,
            dyscyplina: 5,
            ambicja: 5,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "szczescie", waga: 5 },
            { nazwa: "fortuna", waga: 5 },
            { nazwa: "optymizm", waga: 4 },
            { nazwa: "ochrona", waga: 3 },
            { nazwa: "harmonia", waga: 3 },
            { nazwa: "spokoj", waga: 3 }
        ],
        idealnyWlasciciel: "szczęściarz, optymista, pogodny",
        specjalizacja: ["magia fortuny", "zaklęcia szczęścia", "ochrona"],
        znanyPrzyklad: null
    },

    jarzebina: {
        nazwa: "Jarzębina",
        angielska: "Rowan",
        opis: "Jedno z najlepszych drewien ochronnych. Posiada naturalną odporność na Czarną Magię, silną magię defensywną i wyjątkową czystość. Bardzo rzadko trafia do mrocznych czarodziejów.",
        statystyki: {
            moc: 7,
            lojalnosc: 7,
            stabilnosc: 8,
            adaptacja: 4,
            inteligencja: 6,
            kreatywnosc: 4,
            odwaga: 7,
            dyscyplina: 7,
            ambicja: 5,
            moralnosc: 5
        },
        tagi: [
            { nazwa: "ochrona", waga: 5 },
            { nazwa: "czystosc", waga: 5 },
            { nazwa: "swiatlo", waga: 5 },
            { nazwa: "obronnosc", waga: 4 },
            { nazwa: "odpornosc", waga: 4 },
            { nazwa: "szlachetnosc", waga: 3 }
        ],
        idealnyWlasciciel: "czysty, ochronny, moralny",
        specjalizacja: ["ochrona przed Czarną Magią", "magia defensywna", "oczyszczanie"],
        znanyPrzyklad: null
    },

    lipa_srebrzysta: {
        nazwa: "Lipa srebrzysta",
        angielska: "Silver Lime",
        opis: "Przez długi czas uważano ją za drewno przeznaczone wyłącznie dla jasnowidzów. Bardzo często wybiera osoby posiadające wysoką intuicję, naturalną empatię i dużą wrażliwość magiczną.",
        statystyki: {
            moc: 6,
            lojalnosc: 6,
            stabilnosc: 6,
            adaptacja: 7,
            inteligencja: 8,
            kreatywnosc: 7,
            odwaga: 4,
            dyscyplina: 5,
            ambicja: 5,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "intuicja", waga: 5 },
            { nazwa: "empatia", waga: 5 },
            { nazwa: "jasnowidzenie", waga: 5 },
            { nazwa: "wrazliwosc", waga: 4 },
            { nazwa: "magia_umyslu", waga: 4 },
            { nazwa: "subtelnos", waga: 3 }
        ],
        idealnyWlasciciel: "intuicyjny, empatyczny, wrażliwy magicznie",
        specjalizacja: ["jasnowidzenie", "magia umysłu", "zaklęcia intuicyjne"],
        znanyPrzyklad: null
    },

    swierk: {
        nazwa: "Świerk",
        angielska: "Spruce",
        opis: "Świerk ma opinię trudnego drewna. Nie lubi tchórzy, ludzi niezdecydowanych ani osób niepewnych siebie. Uwielbia odwagę, zdecydowanie i działanie. W rękach odpowiedniego właściciela potrafi być niezwykle skuteczny.",
        statystyki: {
            moc: 7,
            lojalnosc: 5,
            stabilnosc: 6,
            adaptacja: 5,
            inteligencja: 5,
            kreatywnosc: 5,
            odwaga: 8,
            dyscyplina: 7,
            ambicja: 7,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "odwaga", waga: 5 },
            { nazwa: "zdecydowanie", waga: 5 },
            { nazwa: "dzialanie", waga: 5 },
            { nazwa: "pewnosc_siebie", waga: 4 },
            { nazwa: "determinacja", waga: 3 },
            { nazwa: "walka", waga: 3 }
        ],
        idealnyWlasciciel: "odważny, zdecydowany, pewny siebie, aktywny",
        specjalizacja: ["szybka magia", "zaklęcia akcji", "magia decyzyjna"],
        znanyPrzyklad: null
    },

    jawor: {
        nazwa: "Jawor",
        angielska: "Sycamore",
        opis: "Jawor nie toleruje rutyny. Jeżeli właściciel nie rozwija się, nie poznaje nowych zaklęć i stoi w miejscu, różdżka staje się coraz mniej skuteczna.",
        statystyki: {
            moc: 6,
            lojalnosc: 5,
            stabilnosc: 5,
            adaptacja: 9,
            inteligencja: 7,
            kreatywnosc: 8,
            odwaga: 6,
            dyscyplina: 4,
            ambicja: 7,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "rozwoj", waga: 5 },
            { nazwa: "ciekawosc", waga: 5 },
            { nazwa: "kreatywnosc", waga: 4 },
            { nazwa: "odkrywanie", waga: 4 },
            { nazwa: "zmiana", waga: 4 },
            { nazwa: "innowacja", waga: 3 }
        ],
        idealnyWlasciciel: "ciekawy świata, rozwijający się, nie tolerujący rutyny",
        specjalizacja: ["eksperymentalna magia", "nowe zaklęcia", "innowacja magiczna"],
        znanyPrzyklad: null
    },

    winorosl: {
        nazwa: "Winorośl",
        angielska: "Vine",
        opis: "Jedno z najbardziej tajemniczych drewien. Wybiera ludzi niezwykle inteligentnych, posiadających intuicję i często zaskakujących innych. Mistrz Tahi twierdzi, że właściciele winorośli często już od najmłodszych lat wykazują niezwykłe zdolności.",
        statystyki: {
            moc: 7,
            lojalnosc: 6,
            stabilnosc: 6,
            adaptacja: 7,
            inteligencja: 9,
            kreatywnosc: 7,
            odwaga: 5,
            dyscyplina: 6,
            ambicja: 7,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "inteligencja", waga: 5 },
            { nazwa: "intuicja", waga: 5 },
            { nazwa: "talent", waga: 5 },
            { nazwa: "wyjatkowosc", waga: 4 },
            { nazwa: "zagadka", waga: 3 },
            { nazwa: "zaskoczenie", waga: 3 }
        ],
        idealnyWlasciciel: "niezwykle inteligentny, intuicyjny, zaskakujący innych",
        specjalizacja: ["magia intuicyjna", "zaklęcia inteligentne", "magia wyższego rzędu"],
        znanyPrzyklad: "Hermione Granger"
    },

    orzech_wloski: {
        nazwa: "Orzech włoski",
        angielska: "Walnut",
        opis: "Niezwykle inteligentne drewno. Wybiera ludzi pomysłowych, kreatywnych i wszechstronnych. Bardzo dobrze reaguje na innowacyjne zastosowania magii.",
        statystyki: {
            moc: 7,
            lojalnosc: 5,
            stabilnosc: 6,
            adaptacja: 7,
            inteligencja: 8,
            kreatywnosc: 8,
            odwaga: 5,
            dyscyplina: 5,
            ambicja: 7,
            moralnosc: 0
        },
        tagi: [
            { nazwa: "innowacja", waga: 5 },
            { nazwa: "kreatywnosc", waga: 5 },
            { nazwa: "wszechstronnosc", waga: 4 },
            { nazwa: "pomyslowosc", waga: 4 },
            { nazwa: "inteligencja", waga: 4 },
            { nazwa: "adaptacja", waga: 3 }
        ],
        idealnyWlasciciel: "pomysłowy, kreatywny, wszechstronny",
        specjalizacja: ["innowacyjna magia", "kreatywne zaklęcia", "wszechstronna magia"],
        znanyPrzyklad: null
    },

    wierzba: {
        nazwa: "Wierzba",
        angielska: "Willow",
        opis: "Jedno z najlepszych drewien leczniczych. Symbolizuje uzdrawianie, odrodzenie i adaptację. Wybiera osoby posiadające ogromny potencjał, który często nie jest jeszcze widoczny.",
        statystyki: {
            moc: 6,
            lojalnosc: 6,
            stabilnosc: 6,
            adaptacja: 8,
            inteligencja: 6,
            kreatywnosc: 6,
            odwaga: 5,
            dyscyplina: 4,
            ambicja: 5,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "uzdrawianie", waga: 5 },
            { nazwa: "potencjal", waga: 5 },
            { nazwa: "odrodzenie", waga: 4 },
            { nazwa: "adaptacja", waga: 4 },
            { nazwa: "rozwoj", waga: 4 },
            { nazwa: "cierpliwosc", waga: 3 }
        ],
        idealnyWlasciciel: "pełen potencjału, rozwijający się, cierpliwy",
        specjalizacja: ["magia lecznicza", "uzdrawianie", "zaklęcia regeneracyjne"],
        znanyPrzyklad: "Ron Weasley"
    },

    cis: {
        nazwa: "Cis",
        angielska: "Yew",
        opis: "Jedno z najbardziej legendarnych drewien. Obok bzu należy do najpotężniejszych. Od wieków kojarzony z życiem, śmiercią, odrodzeniem i nieśmiertelnością. Może wybrać zarówno wielkiego bohatera, jak i potężnego czarnoksiężnika.",
        statystyki: {
            moc: 10,
            lojalnosc: 6,
            stabilnosc: 6,
            adaptacja: 5,
            inteligencja: 8,
            kreatywnosc: 6,
            odwaga: 8,
            dyscyplina: 7,
            ambicja: 10,
            moralnosc: -2
        },
        tagi: [
            { nazwa: "potega", waga: 5 },
            { nazwa: "smierc", waga: 5 },
            { nazwa: "odrodzenie", waga: 4 },
            { nazwa: "ambicja", waga: 4 },
            { nazwa: "przeznaczenie", waga: 4 },
            { nazwa: "niesmiertelnos", waga: 3 },
            { nazwa: "determinacja", waga: 3 }
        ],
        idealnyWlasciciel: "niezwykle utalentowany, ambitny, posiadający siłę woli, gotowy zmieniać świat",
        specjalizacja: ["pojedynki", "zaklęcia wielkiej mocy", "magia determinacji"],
        znanyPrzyklad: "Lord Voldemort"
    },

    // Drewna dodatkowe z obecnego konfiguratora
    czerwony_dab: {
        nazwa: "Czerwony dąb",
        angielska: "Red Oak",
        opis: "Czerwony dąb posiada charakter podobny do angielskiego dębu, lecz z większym naciskiem na szybkość i temperament. Często kojarzony z szybką reakcją i impulsywną magią, pozostaje przy tym lojalny.",
        statystyki: {
            moc: 7,
            lojalnosc: 7,
            stabilnosc: 6,
            adaptacja: 6,
            inteligencja: 6,
            kreatywnosc: 5,
            odwaga: 8,
            dyscyplina: 6,
            ambicja: 6,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "szybkosc", waga: 5 },
            { nazwa: "temperament", waga: 4 },
            { nazwa: "odwaga", waga: 4 },
            { nazwa: "lojalnosc", waga: 4 },
            { nazwa: "walka", waga: 3 },
            { nazwa: "honor", waga: 3 }
        ],
        idealnyWlasciciel: "szybki, impulsywny ale lojalny, reagujący instynktownie",
        specjalizacja: ["szybkie zaklęcia", "magia reakcyjna", "pojedynki"],
        znanyPrzyklad: null
    },

    trzcina: {
        nazwa: "Trzcina",
        angielska: "Reed",
        opis: "Trzcina jest materiałem subtelnym, ale zaskakująco odpornym. Symbolizuje elastyczność i zdolność przetrwania nawet w najtrudniejszych warunkach. Najczęściej wybiera ludzi, którzy potrafią się dostosować bez utraty własnej tożsamości.",
        statystyki: {
            moc: 5,
            lojalnosc: 6,
            stabilnosc: 6,
            adaptacja: 9,
            inteligencja: 6,
            kreatywnosc: 6,
            odwaga: 5,
            dyscyplina: 5,
            ambicja: 5,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "adaptacja", waga: 5 },
            { nazwa: "przetrwanie", waga: 5 },
            { nazwa: "elastycznosc", waga: 4 },
            { nazwa: "odpornosc", waga: 4 },
            { nazwa: "cierpliwosc", waga: 3 },
            { nazwa: "subtelnos", waga: 3 }
        ],
        idealnyWlasciciel: "adaptacyjny, subtelny, odporny",
        specjalizacja: ["magia adaptacyjna", "zaklęcia subtelne", "zaklęcia przetrwania"],
        znanyPrzyklad: null
    },

    sykomora: {
        nazwa: "Sykomora",
        angielska: "Sycamore",
        opis: "Sykomora to odmiana jawora, równie niecierpliwa wobec rutyny. Preferuje osoby o niegasnącej ciekawości i pędzie do nowych doświadczeń. Stagnacja powoduje, że różdżka traci na skuteczności.",
        statystyki: {
            moc: 6,
            lojalnosc: 5,
            stabilnosc: 5,
            adaptacja: 9,
            inteligencja: 7,
            kreatywnosc: 8,
            odwaga: 6,
            dyscyplina: 4,
            ambicja: 7,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "ciekawosc", waga: 5 },
            { nazwa: "rozwoj", waga: 5 },
            { nazwa: "odkrywanie", waga: 4 },
            { nazwa: "kreatywnosc", waga: 4 },
            { nazwa: "zmiana", waga: 4 },
            { nazwa: "innowacja", waga: 3 }
        ],
        idealnyWlasciciel: "ciekawy świata, rozwojowy, pełen energii",
        specjalizacja: ["eksperymentalna magia", "zaklęcia eksploracyjne"],
        znanyPrzyklad: null
    },

    // --- BRAKUJĄCE DREWNA KANONICZNE ---
    berberys: {
        nazwa: "Berberys",
        angielska: "Barberry",
        opis: "Berberys kryje swoje sekrety równie dobrze, co jego gęste zarośla. Właściciele tych różdżek rzadko rzucają się w oczy, ale biada temu, kto ich zlekceważy. Moc berberysu ujawnia się dopiero, gdy zostaje zapędzony w róg.",
        statystyki: {
            moc: 6,
            lojalnosc: 8,
            stabilnosc: 7,
            adaptacja: 5,
            inteligencja: 6,
            kreatywnosc: 5,
            odwaga: 5,
            dyscyplina: 8,
            ambicja: 4,
            moralnosc: 4
        },
        tagi: [
            { nazwa: "cierpliwosc", waga: 5 },
            { nazwa: "ukryty_potencjal", waga: 5 },
            { nazwa: "stabilnosc", waga: 4 },
            { nazwa: "skromnosc", waga: 4 },
            { nazwa: "ochrona", waga: 3 },
            { nazwa: "lojalnosc", waga: 3 }
        ],
        idealnyWlasciciel: "skryty, cierpliwy, o dużym niewykorzystanym potencjale",
        specjalizacja: ["magia powolna", "zaklęcia ochronne"],
        znanyPrzyklad: null
    },

    brzoza: {
        nazwa: "Brzoza",
        angielska: "Birch",
        opis: "Choć często ignorowana i sprowadzana tylko do właściwości łagodzących, brzoza to materiał o czystej intencji. Jeśli szukasz nowego początku lub starasz się zatrzeć dawne błędy, brzoza z radością pospieszy z pomocą.",
        statystyki: {
            moc: 5,
            lojalnosc: 7,
            stabilnosc: 6,
            adaptacja: 8,
            inteligencja: 5,
            kreatywnosc: 6,
            odwaga: 6,
            dyscyplina: 4,
            ambicja: 4,
            moralnosc: 5
        },
        tagi: [
            { nazwa: "odrodzenie", waga: 5 },
            { nazwa: "oczyszczenie", waga: 5 },
            { nazwa: "swiatlo", waga: 4 },
            { nazwa: "nowy_poczatek", waga: 4 },
            { nazwa: "nadzieja", waga: 3 },
            { nazwa: "uzdrawianie", waga: 3 }
        ],
        idealnyWlasciciel: "czarodziej pragnący zmiany, osoba czysta sercem, pozytywna",
        specjalizacja: ["magia oczyszczająca", "uzdrawianie", "zaklęcia światła"],
        znanyPrzyklad: "Dolores Umbridge (niepotwierdzone)"
    },

    hikora: {
        nazwa: "Hikora",
        angielska: "Hickory",
        opis: "Różdżki z hikory bywają wręcz irytująco uparte. Trafiają wyłącznie do właścicieli o tak samo twardych karkach. Jeśli spróbujesz skłonić hikorę do zgniłego kompromisu, szybciej złamiesz ją wpół niż dopniesz swego.",
        statystyki: {
            moc: 7,
            lojalnosc: 8,
            stabilnosc: 9,
            adaptacja: 2,
            inteligencja: 5,
            kreatywnosc: 4,
            odwaga: 8,
            dyscyplina: 8,
            ambicja: 6,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "niezlomnosc", waga: 5 },
            { nazwa: "wytrwalosc", waga: 5 },
            { nazwa: "twardosc", waga: 4 },
            { nazwa: "upor", waga: 4 },
            { nazwa: "walka", waga: 3 },
            { nazwa: "sila", waga: 3 }
        ],
        idealnyWlasciciel: "uparty, wytrwały, nie idący na kompromisy",
        specjalizacja: ["magia twarda", "zaklęcia defensywne", "pojedynki siłowe"],
        znanyPrzyklad: null
    },

    mahon: {
        nazwa: "Mahoń",
        angielska: "Mahogany",
        opis: "Piękne, gładkie i szlachetne drewno, do którego trzeba mieć wprawną rękę. W transmutacji nie ma sobie równych. Działa najlepiej, gdy połączy siły z kimś z nutką wrodzonej pewności siebie - jak sam James Potter.",
        statystyki: {
            moc: 8,
            lojalnosc: 6,
            stabilnosc: 8,
            adaptacja: 7,
            inteligencja: 7,
            kreatywnosc: 8,
            odwaga: 5,
            dyscyplina: 6,
            ambicja: 6,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "transmutacja", waga: 5 },
            { nazwa: "niezawodnosc", waga: 5 },
            { nazwa: "kreatywnosc", waga: 4 },
            { nazwa: "moc", waga: 4 },
            { nazwa: "wszechstronnosc", waga: 3 },
            { nazwa: "adaptacja", waga: 3 }
        ],
        idealnyWlasciciel: "osoba z talentem do transmutacji, wszechstronna",
        specjalizacja: ["transmutacja", "zaawansowane zaklęcia"],
        znanyPrzyklad: "James Potter"
    },

    // --- DREWNA NIEKANONICZNE ---
    balsa: {
        nazwa: "Balsa",
        angielska: "Balsa",
        opis: "Lekka jak piórko i równie eteryczna. Nie oczekuj od niej, że zablokuje morderczą klątwę czy rozsadzi głaz, ale jeśli w grę wchodzą zwinne uroki, balsa reaguje niemal przed wypowiedzeniem inkantacji.",
        statystyki: {
            moc: 3,
            lojalnosc: 5,
            stabilnosc: 4,
            adaptacja: 8,
            inteligencja: 5,
            kreatywnosc: 6,
            odwaga: 3,
            dyscyplina: 5,
            ambicja: 3,
            moralnosc: 4
        },
        tagi: [
            { nazwa: "lekkosc", waga: 5 },
            { nazwa: "szybkosc", waga: 5 },
            { nazwa: "powietrze", waga: 4 },
            { nazwa: "zwinnosc", waga: 4 },
            { nazwa: "uroki", waga: 3 },
            { nazwa: "prostota", waga: 3 }
        ],
        idealnyWlasciciel: "zwinny, szybki, sprytny ale o łagodnym usposobieniu",
        specjalizacja: ["magia wiatru", "szybkie uroki", "lewitacja"],
        znanyPrzyklad: null
    },

    bambus: {
        nazwa: "Bambus",
        angielska: "Bamboo",
        opis: "Bardziej trawa niż drzewo, co przekłada się na jej niesamowitą sprężystość. Nie lubi starych, zastałych metod. Wybiera umysły bystre, otwarte na wiedzę, gotowe nagiąć zasady... ale ich nie łamać.",
        statystyki: {
            moc: 5,
            lojalnosc: 5,
            stabilnosc: 5,
            adaptacja: 9,
            inteligencja: 6,
            kreatywnosc: 7,
            odwaga: 5,
            dyscyplina: 6,
            ambicja: 6,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "elastycznosc", waga: 5 },
            { nazwa: "rozwoj", waga: 5 },
            { nazwa: "szybkosc", waga: 4 },
            { nazwa: "nauka", waga: 4 },
            { nazwa: "zmiennosc", waga: 3 },
            { nazwa: "harmonia", waga: 3 }
        ],
        idealnyWlasciciel: "uczeń, osoba poszukująca, giętka w poglądach",
        specjalizacja: ["szybkie przyswajanie wiedzy", "zaklęcia ruchowe"],
        znanyPrzyklad: null
    },

    bluszcz: {
        nazwa: "Bluszcz",
        angielska: "Ivy",
        opis: "Bluszcz oplotłby magicznie właściciela, gdyby tylko potrafił. Jest ekstremalnie lojalny, wyciągnie cię z najgorszych kłopotów, byleby tylko przetrwać razem. Zdrada z różdżką z bluszczu jest wręcz fizycznie niemożliwa.",
        statystyki: {
            moc: 6,
            lojalnosc: 9,
            stabilnosc: 7,
            adaptacja: 7,
            inteligencja: 5,
            kreatywnosc: 4,
            odwaga: 6,
            dyscyplina: 5,
            ambicja: 6,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "przywiazanie", waga: 5 },
            { nazwa: "przetrwanie", waga: 5 },
            { nazwa: "upor", waga: 4 },
            { nazwa: "lojalnosc", waga: 4 },
            { nazwa: "zakorzenienie", waga: 3 },
            { nazwa: "ochrona", waga: 3 }
        ],
        idealnyWlasciciel: "lojalny przyjaciel, osoba posiadająca silne korzenie",
        specjalizacja: ["zaklęcia ochronne", "magia wierności", "zaklęcia wiążące"],
        znanyPrzyklad: null
    },

    brezylka: {
        nazwa: "Brezylka",
        angielska: "Brazilwood",
        opis: "To drewno ma w sobie mnóstwo temperamentu. Uwielbia popisy, głośne huki i krzykliwe iluzje. To fantastyczny, choć bywa że męczący wybór dla artystów i gorących głów, którym często brakuje zahamowań.",
        statystyki: {
            moc: 7,
            lojalnosc: 6,
            stabilnosc: 5,
            adaptacja: 6,
            inteligencja: 5,
            kreatywnosc: 8,
            odwaga: 7,
            dyscyplina: 4,
            ambicja: 7,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "pasja", waga: 5 },
            { nazwa: "temperament", waga: 5 },
            { nazwa: "kreatywnosc", waga: 4 },
            { nazwa: "ogien", waga: 4 },
            { nazwa: "ekspresja", waga: 3 },
            { nazwa: "sztuka", waga: 3 }
        ],
        idealnyWlasciciel: "artystyczny, namiętny, wybuchowy",
        specjalizacja: ["magia iluzji", "uroki", "magia ognia"],
        znanyPrzyklad: null
    },

    drzewo_rozane: {
        nazwa: "Drzewo różane",
        angielska: "Rosewood",
        opis: "Kwiatowy zapach tego drewna obłędnie współgra z magią miłosną. Różdżki te nienawidzą wulgarności; rzucają zaklęcia z niespotykaną gracją u osób obdarzonych powabem i wrodzonymi dobrymi manierami.",
        statystyki: {
            moc: 5,
            lojalnosc: 7,
            stabilnosc: 6,
            adaptacja: 5,
            inteligencja: 6,
            kreatywnosc: 8,
            odwaga: 4,
            dyscyplina: 5,
            ambicja: 5,
            moralnosc: 5
        },
        tagi: [
            { nazwa: "piekno", waga: 5 },
            { nazwa: "elegancja", waga: 5 },
            { nazwa: "milosc", waga: 4 },
            { nazwa: "urok", waga: 4 },
            { nazwa: "sztuka", waga: 3 },
            { nazwa: "delikatnosc", waga: 3 }
        ],
        idealnyWlasciciel: "esteta, romantyk, artysta",
        specjalizacja: ["magia miłosna", "uroki upiększające", "subtelna magia"],
        znanyPrzyklad: "Fleur Delacour (często przypisywane mylnie zamiast róży)"
    },

    drzewo_wezowe: {
        nazwa: "Drzewo wężowe",
        angielska: "Snakewood",
        opis: "Trzeba być niezwykle śmiałym, by z tym pracować. Bywa brutalne, a czasem odmawia posłuszeństwa w pół słowa. Jeśli jednak podbijesz jego serce - co wężoustym przychodzi naturalnie - zyskasz oręż o zgubnej mocy.",
        statystyki: {
            moc: 9,
            lojalnosc: 3,
            stabilnosc: 4,
            adaptacja: 5,
            inteligencja: 8,
            kreatywnosc: 6,
            odwaga: 6,
            dyscyplina: 4,
            ambicja: 9,
            moralnosc: -4
        },
        tagi: [
            { nazwa: "mrok", waga: 5 },
            { nazwa: "weze", waga: 5 },
            { nazwa: "niebezpieczenstwo", waga: 4 },
            { nazwa: "potega", waga: 4 },
            { nazwa: "zdrada", waga: 3 },
            { nazwa: "ambicja", waga: 3 }
        ],
        idealnyWlasciciel: "ambitny, bezwzględny, być może wężousty",
        specjalizacja: ["Czarna Magia", "magia trucizn", "klątwy"],
        znanyPrzyklad: "Salazar Slytherin"
    },

    guayacan: {
        nazwa: "Guayacán",
        angielska: "Guayacan",
        opis: "To drewno mogłoby posłużyć za maczugę i nadal dobrze by rzucało uroki. Znakomite do tworzenia nieprzebytych barier. Wybiera czarodziejów o kamiennej twarzy i psychice ze stali, których nie złamiesz uderzeniem.",
        statystyki: {
            moc: 8,
            lojalnosc: 7,
            stabilnosc: 10,
            adaptacja: 2,
            inteligencja: 4,
            kreatywnosc: 3,
            odwaga: 9,
            dyscyplina: 8,
            ambicja: 5,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "wytrzymalosc", waga: 5 },
            { nazwa: "ciezar", waga: 5 },
            { nazwa: "niezniszczalnosc", waga: 4 },
            { nazwa: "walka", waga: 4 },
            { nazwa: "obronnosc", waga: 3 },
            { nazwa: "nieustepliwosc", waga: 3 }
        ],
        idealnyWlasciciel: "twardy jak głaz obrońca, weteran, wojownik",
        specjalizacja: ["potężne tarcze", "magia defensywna", "wytrzymałość"],
        znanyPrzyklad: null
    },

    gumbo_limbo: {
        nazwa: "Gumbo-limbo",
        angielska: "Gumbo-limbo",
        opis: "Nikt nie traktuje Gumbo-limbo do końca poważnie. Lubi figle, wykrzywione zaklęcia i odrobinę chaosu. Doskonała sprawa dla każdego, kto uważa, że regulaminy magii to tak naprawdę tylko luźne sugestie.",
        statystyki: {
            moc: 4,
            lojalnosc: 5,
            stabilnosc: 3,
            adaptacja: 8,
            inteligencja: 5,
            kreatywnosc: 9,
            odwaga: 5,
            dyscyplina: 2,
            ambicja: 4,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "psoty", waga: 5 },
            { nazwa: "zabawa", waga: 5 },
            { nazwa: "humor", waga: 4 },
            { nazwa: "nieprzewidywalnosc", waga: 4 },
            { nazwa: "elastycznosc", waga: 3 },
            { nazwa: "kreatywnosc", waga: 3 }
        ],
        idealnyWlasciciel: "dowcipniś, śmieszek, wolny duch",
        specjalizacja: ["uroki", "zaklęcia rozweselające", "iluzje"],
        znanyPrzyklad: null
    },

    iroko: {
        nazwa: "Iroko",
        angielska: "Iroko",
        opis: "Według lokalnych wierzeń z Afryki, w Iroko mieszkają starożytne siły. Medium czy wróżbita posiadający ten kawałek drewna może dojrzeć w snach przerażająco wiele rzeczy, których inni woleliby nie widzieć.",
        statystyki: {
            moc: 7,
            lojalnosc: 6,
            stabilnosc: 6,
            adaptacja: 5,
            inteligencja: 8,
            kreatywnosc: 6,
            odwaga: 5,
            dyscyplina: 5,
            ambicja: 5,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "mistycyzm", waga: 5 },
            { nazwa: "duchy", waga: 5 },
            { nazwa: "jasnowidzenie", waga: 4 },
            { nazwa: "starozytnosc", waga: 4 },
            { nazwa: "wiedza", waga: 3 },
            { nazwa: "szacunek", waga: 3 }
        ],
        idealnyWlasciciel: "medium, wróżbita, szaman",
        specjalizacja: ["rozmowy z duchami", "wróżbiarstwo", "magia starożytna"],
        znanyPrzyklad: null
    },

    jakaranda: {
        nazwa: "Jakaranda",
        angielska: "Jacaranda",
        opis: "Wymaga właściciela, który częściej sięga po rozsądek niż po klątwy. Często wydziela słabą woń kwiatów podczas pracy. Rzadko dobrze sprawuje się w brutalnej, brudnej walce - za to negocjuje jak nikt.",
        statystyki: {
            moc: 5,
            lojalnosc: 7,
            stabilnosc: 6,
            adaptacja: 6,
            inteligencja: 9,
            kreatywnosc: 7,
            odwaga: 4,
            dyscyplina: 7,
            ambicja: 6,
            moralnosc: 4
        },
        tagi: [
            { nazwa: "dyplomacja", waga: 5 },
            { nazwa: "intelekt", waga: 5 },
            { nazwa: "elegancja", waga: 4 },
            { nazwa: "rozwaga", waga: 4 },
            { nazwa: "barwnosc", waga: 3 },
            { nazwa: "pokoj", waga: 3 }
        ],
        idealnyWlasciciel: "dyplomata, intelektualista, osoba łagodząca spory",
        specjalizacja: ["zaklęcia negocjacyjne", "piękna magia", "rozwiązywanie konfliktów"],
        znanyPrzyklad: null
    },

    kauri: {
        nazwa: "Kauri",
        angielska: "Kauri",
        opis: "Te prastare drzewa doskonale rozumieją, czym jest cierpliwość. Magia z nich płynąca buduje potężne bariery, które trwają pokoleniami. Szuka strategów i architektów życia patrzących o wiele kroków do przodu.",
        statystyki: {
            moc: 8,
            lojalnosc: 8,
            stabilnosc: 10,
            adaptacja: 3,
            inteligencja: 6,
            kreatywnosc: 4,
            odwaga: 7,
            dyscyplina: 8,
            ambicja: 6,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "dlugowiecznosc", waga: 5 },
            { nazwa: "starozytnosc", waga: 5 },
            { nazwa: "stabilnosc", waga: 4 },
            { nazwa: "potega", waga: 4 },
            { nazwa: "trwalosc", waga: 3 },
            { nazwa: "tradycja", waga: 3 }
        ],
        idealnyWlasciciel: "osoba z wizją na przyszłe pokolenia, architekt magii",
        specjalizacja: ["magia długoterminowa", "wielkie zaklęcia", "ochrona miejsc"],
        znanyPrzyklad: null
    },

    koa: {
        nazwa: "Koa",
        angielska: "Koa",
        opis: "Jeśli masz wewnętrzny przymus bycia w samym centrum awantury, Koa to drewno dla ciebie. Ma niezwykłe zacięcie do rzucania zaklęć żywiołów i potrafi ciskać płomieniami z nieskrywaną wręcz radością.",
        statystyki: {
            moc: 7,
            lojalnosc: 6,
            stabilnosc: 5,
            adaptacja: 7,
            inteligencja: 5,
            kreatywnosc: 6,
            odwaga: 9,
            dyscyplina: 4,
            ambicja: 7,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "walka", waga: 5 },
            { nazwa: "odwaga", waga: 5 },
            { nazwa: "zywioly", waga: 4 },
            { nazwa: "przebojowosc", waga: 4 },
            { nazwa: "charyzma", waga: 3 },
            { nazwa: "egzotyka", waga: 3 }
        ],
        idealnyWlasciciel: "odważny, charyzmatyczny wojownik z duszą podróżnika",
        specjalizacja: ["magia żywiołów", "walka", "szybkie ataki"],
        znanyPrzyklad: null
    },

    milorzab: {
        nazwa: "Miłorząb",
        angielska: "Ginkgo",
        opis: "Ta prehistoryczna wręcz roślina zdaje się kryć w sobie pamięć o czasach, które inni zapomnieli. Niesamowicie wzmacnia zdolność do wnikania w cudze umysły i pozwala zbudować w głowie nieprzebyte mury.",
        statystyki: {
            moc: 6,
            lojalnosc: 7,
            stabilnosc: 8,
            adaptacja: 4,
            inteligencja: 9,
            kreatywnosc: 5,
            odwaga: 5,
            dyscyplina: 8,
            ambicja: 5,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "pamiec", waga: 5 },
            { nazwa: "umysl", waga: 5 },
            { nazwa: "starozytnosc", waga: 4 },
            { nazwa: "koncentracja", waga: 4 },
            { nazwa: "wiedza", waga: 3 },
            { nazwa: "przetrwanie", waga: 3 }
        ],
        idealnyWlasciciel: "myśliciel, analityk, mistrz pamięci",
        specjalizacja: ["Legilimencja", "Oklumencja", "zaklęcia przywracające pamięć"],
        znanyPrzyklad: null
    },

    mopane: {
        nazwa: "Mopane",
        angielska: "Mopane",
        opis: "Rzadko owija w bawełnę. Mopane jest ostre, czasami celowo oporne i wymaga po prostu żelaznego uścisku. Gdy jednak zaakceptuje kogoś surowego i zdeterminowanego, staje się bronią wielkiego formatu.",
        statystyki: {
            moc: 7,
            lojalnosc: 6,
            stabilnosc: 7,
            adaptacja: 4,
            inteligencja: 5,
            kreatywnosc: 4,
            odwaga: 8,
            dyscyplina: 6,
            ambicja: 6,
            moralnosc: 1
        },
        tagi: [
            { nazwa: "stanowczosc", waga: 5 },
            { nazwa: "twardosc", waga: 5 },
            { nazwa: "upor", waga: 4 },
            { nazwa: "walka", waga: 4 },
            { nazwa: "dominacja", waga: 3 },
            { nazwa: "przetrwanie", waga: 3 }
        ],
        idealnyWlasciciel: "nieustępliwy, stanowczy dowódca",
        specjalizacja: ["zaklęcia wolicjonalne", "magia defensywna pod presją"],
        znanyPrzyklad: null
    },

    namorzyny: {
        nazwa: "Namorzyny",
        angielska: "Mangrove",
        opis: "Przyzwyczajone do soli i bagien namorzyny świetnie oczyszczają magiczną aurę z najgorszych osadów klątw. Doskonały wybór dla tych niespokojnych duchów, którzy stoją okrakiem na granicy dwóch światów.",
        statystyki: {
            moc: 6,
            lojalnosc: 7,
            stabilnosc: 6,
            adaptacja: 9,
            inteligencja: 6,
            kreatywnosc: 6,
            odwaga: 5,
            dyscyplina: 5,
            ambicja: 4,
            moralnosc: 4
        },
        tagi: [
            { nazwa: "woda", waga: 5 },
            { nazwa: "granica", waga: 5 },
            { nazwa: "adaptacja", waga: 4 },
            { nazwa: "oczyszczenie", waga: 4 },
            { nazwa: "przetrwanie", waga: 3 },
            { nazwa: "elastycznosc", waga: 3 }
        ],
        idealnyWlasciciel: "osoba z pogranicza dwóch światów, wędrowiec, uzdrowiciel",
        specjalizacja: ["oczyszczanie klątw", "magia wody morskiej", "harmonia"],
        znanyPrzyklad: null
    },

    oliwka: {
        nazwa: "Oliwka",
        angielska: "Olive",
        opis: "Cisza, zgoda i absolutny spokój - oto dewiza tego drewna. Nie zmusisz oliwki do morderstwa, ale od niechcenia ugasisz nią najgorętszy spór. Cudowne narzędzie w rękach wytrawnych uzdrowicieli.",
        statystyki: {
            moc: 6,
            lojalnosc: 8,
            stabilnosc: 8,
            adaptacja: 5,
            inteligencja: 7,
            kreatywnosc: 5,
            odwaga: 4,
            dyscyplina: 6,
            ambicja: 3,
            moralnosc: 6
        },
        tagi: [
            { nazwa: "pokoj", waga: 5 },
            { nazwa: "zgoda", waga: 5 },
            { nazwa: "madrosc", waga: 4 },
            { nazwa: "uzdrawianie", waga: 4 },
            { nazwa: "tradycja", waga: 3 },
            { nazwa: "swiatlo", waga: 3 }
        ],
        idealnyWlasciciel: "pacyfista, mediator, rozjemca",
        specjalizacja: ["magia pokojowa", "uzdrawianie", "zaklęcia łagodzące"],
        znanyPrzyklad: null
    },

    palisander: {
        nazwa: "Palisander",
        angielska: "Rosewood (Palisander)",
        opis: "Błyszczące, ciemne drewno, w którym często zakochuje się arystokracja. Palisander uwielbia władzę, pozycję i klątwy rzucane w dystyngowany sposób. W dłoniach zgorzkniałych ludzi lubi niestety popadać w mściwość.",
        statystyki: {
            moc: 7,
            lojalnosc: 6,
            stabilnosc: 7,
            adaptacja: 4,
            inteligencja: 7,
            kreatywnosc: 6,
            odwaga: 5,
            dyscyplina: 6,
            ambicja: 8,
            moralnosc: -1
        },
        tagi: [
            { nazwa: "luksus", waga: 5 },
            { nazwa: "ambicja", waga: 5 },
            { nazwa: "elegancja", waga: 4 },
            { nazwa: "wladza", waga: 4 },
            { nazwa: "status", waga: 3 },
            { nazwa: "kontrola", waga: 3 }
        ],
        idealnyWlasciciel: "czarodziej ceniący pozycję i elegancję",
        specjalizacja: ["wykwintna magia", "manipulacja", "potężne zaklęcia statusowe"],
        znanyPrzyklad: null
    },

    palma_kokosowa: {
        nazwa: "Palma kokosowa",
        angielska: "Coconut Palm",
        opis: "Często wyśmiewana jako 'plażowy gadżet', podczas gdy palma potrafi przetrwać najgorsze huragany. To drewno pozwala ukryć magiczne sygnatury w sposób, z którym Ministerstwo do dziś rwie sobie włosy z głowy.",
        statystyki: {
            moc: 5,
            lojalnosc: 6,
            stabilnosc: 5,
            adaptacja: 9,
            inteligencja: 5,
            kreatywnosc: 7,
            odwaga: 4,
            dyscyplina: 4,
            ambicja: 4,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "elastycznosc", waga: 5 },
            { nazwa: "kamuflaz", waga: 5 },
            { nazwa: "adaptacja", waga: 4 },
            { nazwa: "przetrwanie", waga: 4 },
            { nazwa: "woda", waga: 3 },
            { nazwa: "ucieczka", waga: 3 }
        ],
        idealnyWlasciciel: "podróżnik, osoba sprytna potrafiąca wtapiać się w tłum",
        specjalizacja: ["zaklęcia ukrywające", "kamuflaż", "uniknięcie wykrycia"],
        znanyPrzyklad: null
    },

    palo_santo: {
        nazwa: "Palo santo",
        angielska: "Palo Santo",
        opis: "Samo wyjęcie jej z szaty rozprasza gęsty mrok. Te różdżki pachną kadzidłem i wręcz parzą w dłoń, jeśli próbujesz z ich pomocą zrobić komuś świństwo. Istny koszmar dla duchów i demonów.",
        statystyki: {
            moc: 6,
            lojalnosc: 8,
            stabilnosc: 7,
            adaptacja: 5,
            inteligencja: 6,
            kreatywnosc: 5,
            odwaga: 6,
            dyscyplina: 6,
            ambicja: 2,
            moralnosc: 6
        },
        tagi: [
            { nazwa: "swietosc", waga: 5 },
            { nazwa: "oczyszczenie", waga: 5 },
            { nazwa: "swiatlo", waga: 4 },
            { nazwa: "duchowosc", waga: 4 },
            { nazwa: "ochrona", waga: 3 },
            { nazwa: "spokoj", waga: 3 }
        ],
        idealnyWlasciciel: "duchowy przewodnik, egzorcysta, osoba czysta sercem",
        specjalizacja: ["egzorcyzmy", "magia oczyszczająca", "bariery duchowe"],
        znanyPrzyklad: null
    },

    rzewnia: {
        nazwa: "Rzewnia",
        angielska: "Casuarina",
        opis: "Gdy nią machniesz, czasami da się usłyszeć powolne zawodzenie wiatru. Najlepiej dogaduje się z czarodziejami mocno poturbowanymi przez życie, przerabiając ich smutek w niesamowicie przenikliwe uroki.",
        statystyki: {
            moc: 6,
            lojalnosc: 7,
            stabilnosc: 4,
            adaptacja: 5,
            inteligencja: 6,
            kreatywnosc: 7,
            odwaga: 4,
            dyscyplina: 5,
            ambicja: 3,
            moralnosc: 2
        },
        tagi: [
            { nazwa: "melancholia", waga: 5 },
            { nazwa: "emocje", waga: 5 },
            { nazwa: "pamiec", waga: 4 },
            { nazwa: "wiatr", waga: 4 },
            { nazwa: "muzyka", waga: 3 },
            { nazwa: "wrazliwosc", waga: 3 }
        ],
        idealnyWlasciciel: "nostalgiczny, wrażliwy artysta, muzyk",
        specjalizacja: ["magia dźwięku", "przywoływanie wspomnień", "uroki nastroju"],
        znanyPrzyklad: null
    },

    takamaka: {
        nazwa: "Takamaka",
        angielska: "Takamaka",
        opis: "Na suchym lądzie zachowuje się jak zwykły patyk, za to na morzu nie ma sobie równych. Potrafi nawigować według gwiazd, czyta pogodę i uparcie odgania od marynarzy wodne stwory. Kapryśna towarzyszka.",
        statystyki: {
            moc: 5,
            lojalnosc: 6,
            stabilnosc: 6,
            adaptacja: 7,
            inteligencja: 6,
            kreatywnosc: 5,
            odwaga: 5,
            dyscyplina: 6,
            ambicja: 4,
            moralnosc: 3
        },
        tagi: [
            { nazwa: "morze", waga: 5 },
            { nazwa: "nawigacja", waga: 5 },
            { nazwa: "odpornosc", waga: 4 },
            { nazwa: "spokoj", waga: 4 },
            { nazwa: "podroz", waga: 3 },
            { nazwa: "orientacja", waga: 3 }
        ],
        idealnyWlasciciel: "podróżnik morski, żeglarz, przewodnik",
        specjalizacja: ["zaklęcia nawigacyjne", "magia pogody", "orientacja przestrzenna"],
        znanyPrzyklad: null
    },

    tamaryndowiec: {
        nazwa: "Tamaryndowiec",
        angielska: "Tamarind",
        opis: "Nigdy do końca nie wiesz, jak tamaryndowiec strzeli. Ma słodkie, urokliwe oblicze dla czarów codziennych i wściekły, mściwy charakter do klątw. Uwielbia ekscentrycznych czarodziejów z mocnym wahaniem nastrojów.",
        statystyki: {
            moc: 7,
            lojalnosc: 5,
            stabilnosc: 4,
            adaptacja: 8,
            inteligencja: 6,
            kreatywnosc: 8,
            odwaga: 5,
            dyscyplina: 4,
            ambicja: 6,
            moralnosc: 0
        },
        tagi: [
            { nazwa: "dualnosc", waga: 5 },
            { nazwa: "nieprzewidywalnosc", waga: 5 },
            { nazwa: "kreatywnosc", waga: 4 },
            { nazwa: "zmiennosc", waga: 4 },
            { nazwa: "kaprys", waga: 3 },
            { nazwa: "potega", waga: 3 }
        ],
        idealnyWlasciciel: "nieobliczalny, posiadający dwa oblicza, kreatywny",
        specjalizacja: ["magia niespodzianek", "klątwy i uroki jednocześnie", "zaklęcia transformacji"],
        znanyPrzyklad: null
    },

    tamboti: {
        nazwa: "Tamboti",
        angielska: "Tamboti",
        opis: "Plotka głosi, że tamboti zatruwa właściciela, ale to bzdura. Ma potężną, nieco toksyczną magiczną aurę, więc świetnie odnajdują się z nią zjadliwi czarodzieje o chłodnym spojrzeniu - najczęściej wybitni w eliksirach.",
        statystyki: {
            moc: 8,
            lojalnosc: 6,
            stabilnosc: 5,
            adaptacja: 4,
            inteligencja: 8,
            kreatywnosc: 5,
            odwaga: 6,
            dyscyplina: 7,
            ambicja: 8,
            moralnosc: -3
        },
        tagi: [
            { nazwa: "toksycznosc", waga: 5 },
            { nazwa: "eliksiry", waga: 5 },
            { nazwa: "mrok", waga: 4 },
            { nazwa: "potega", waga: 4 },
            { nazwa: "ambicja", waga: 3 },
            { nazwa: "niebezpieczenstwo", waga: 3 }
        ],
        idealnyWlasciciel: "mistrz eliksirów, znawca trucizn, chłodny i kalkulujący",
        specjalizacja: ["eliksiry (szczególnie trucizny)", "Czarna Magia", "magia wyniszczająca"],
        znanyPrzyklad: null
    }
};

// Mapa nazw polskich -> klucze (do wyszukiwania z konfiguratora)
export const mapaDrewien = {};
for (const [klucz, drewno] of Object.entries(bazaDrewien)) {
    mapaDrewien[drewno.nazwa.toLowerCase()] = klucz;
    mapaDrewien[drewno.angielska.toLowerCase()] = klucz;
}

export function znajdzDrewno(nazwa) {
    if (!nazwa) return null;
    const klucz = mapaDrewien[nazwa.toLowerCase()];
    if (klucz) return bazaDrewien[klucz];
    // Fuzzy match - szukaj czy nazwa zawiera się
    for (const [k, drewno] of Object.entries(bazaDrewien)) {
        if (drewno.nazwa.toLowerCase().includes(nazwa.toLowerCase()) ||
            nazwa.toLowerCase().includes(drewno.nazwa.toLowerCase())) {
            return drewno;
        }
    }
    return null;
}


