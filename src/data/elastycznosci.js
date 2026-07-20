/**
 * 〰️ Baza elastyczności różdżek - System Wandlore
 * Akademia Magii Aeternum
 * 
 * 18 typów elastyczności z modyfikatorami wpływającymi na kompatybilność.
 * Elastyczność opisuje temperament relacji różdżka-właściciel, nie jej moc.
 */

export const bazaElastycznosci = {
    krucha: {
        nazwa: "Krucha",
        angielska: "Brittle",
        opis: "Krucha różdżka niechętnie przystosowuje się do zmian i najlepiej działa u właściciela o jasno określonych przekonaniach. Źle znosi gwałtowne zmiany charakteru lub częstą zmianę stylu magii.",
        modyfikatory: {
            lojalnosc: 2,
            adaptacja: -3,
            stabilnosc: 1,
            dyscyplina: 2
        },
        idealnyWlasciciel: "konsekwentny, wierny zasadom"
    },

    twarda: {
        nazwa: "Twarda",
        angielska: "Hard",
        opis: "Twarda różdżka jest stabilna, odporna i niezawodna. Wymaga cierpliwości, ale odwdzięcza się przewidywalnym działaniem i dużą wytrzymałością.",
        modyfikatory: {
            stabilnosc: 2,
            dyscyplina: 1,
            adaptacja: -1,
            kreatywnosc: -1
        },
        idealnyWlasciciel: "cierpliwy, odpowiedzialny"
    },

    nieelastyczna: {
        nazwa: "Nieelastyczna",
        angielska: "Inflexible",
        opis: "Bardzo silnie przywiązuje się do właściciela i nie lubi zmian. Preferuje sprawdzone metody zamiast eksperymentów.",
        modyfikatory: {
            lojalnosc: 2,
            adaptacja: -2,
            dyscyplina: 1,
            kreatywnosc: -1
        },
        idealnyWlasciciel: "tradycjonalista"
    },

    calkowicie_nieustepliwa: {
        nazwa: "Całkowicie nieustępliwa",
        angielska: "Inflexible and Unyielding",
        opis: "Jedna z najbardziej lojalnych elastyczności. Bardzo trudno zmienia właściciela i praktycznie nigdy nie osiąga pełni możliwości w obcych rękach.",
        modyfikatory: {
            lojalnosc: 3,
            adaptacja: -3,
            dyscyplina: 2,
            stabilnosc: 1
        },
        idealnyWlasciciel: "wyjątkowo lojalny, stanowczy"
    },

    dosc_gietka: {
        nazwa: "Dość giętka",
        angielska: "Quite Bendy",
        opis: "Łatwo dostosowuje się do nowych zaklęć i sytuacji. Zachowuje równowagę między stabilnością a elastycznością.",
        modyfikatory: {
            adaptacja: 2,
            kreatywnosc: 1,
            stabilnosc: 0,
            dyscyplina: -1
        },
        idealnyWlasciciel: "wszechstronny"
    },

    umiarkowanie_elastyczna: {
        nazwa: "Umiarkowanie elastyczna",
        angielska: "Reasonably Supple",
        opis: "Dobrze współpracuje z właścicielem rozwijającym swoje umiejętności. Jest wyrozumiała wobec błędów i szybko uczy się nowych technik.",
        modyfikatory: {
            adaptacja: 2,
            inteligencja: 1,
            dyscyplina: 0,
            stabilnosc: 0
        },
        idealnyWlasciciel: "uczący się, ambitny"
    },

    lekko_sprezysta: {
        nazwa: "Lekko sprężysta",
        angielska: "Slightly Springy",
        opis: "Reaguje szybko, ale zachowuje dużą kontrolę. Łączy precyzję z umiarkowaną dynamiką.",
        modyfikatory: {
            dyscyplina: 1,
            kreatywnosc: 1,
            adaptacja: 1,
            stabilnosc: 0
        },
        idealnyWlasciciel: "opanowany"
    },

    sprezysta: {
        nazwa: "Sprężysta",
        angielska: "Springy",
        opis: "Bardzo responsywna i dynamiczna. Doskonale współpracuje z właścicielem, który stale się rozwija i nie boi się nowych wyzwań.",
        modyfikatory: {
            adaptacja: 2,
            odwaga: 1,
            kreatywnosc: 1,
            stabilnosc: -1
        },
        idealnyWlasciciel: "ambitny, dynamiczny"
    },

    zaskakujaco_gibka: {
        nazwa: "Zaskakująco gibka",
        angielska: "Surprisingly Swishy",
        opis: "Sprawia wrażenie delikatnej, lecz potrafi zaskoczyć szybkością reakcji. Dobrze radzi sobie z kreatywnym wykorzystaniem magii.",
        modyfikatory: {
            kreatywnosc: 2,
            adaptacja: 1,
            dyscyplina: -1,
            stabilnosc: -1
        },
        idealnyWlasciciel: "pomysłowy, kreatywny"
    },

    solidna: {
        nazwa: "Solidna",
        angielska: "Solid",
        opis: "Pewna, stabilna i niezawodna. Nie wyróżnia się ekstremalnymi cechami, ale bardzo rzadko zawodzi właściciela.",
        modyfikatory: {
            stabilnosc: 2,
            lojalnosc: 1,
            kreatywnosc: -1,
            adaptacja: -1
        },
        idealnyWlasciciel: "praktyczny"
    },

    sztywna: {
        nazwa: "Sztywna",
        angielska: "Stiff",
        opis: "Preferuje dokładność i dyscyplinę. Nie lubi improwizacji ani chaotycznego rzucania zaklęć.",
        modyfikatory: {
            dyscyplina: 2,
            stabilnosc: 1,
            kreatywnosc: -2,
            adaptacja: -1
        },
        idealnyWlasciciel: "perfekcjonista"
    },

    gibka: {
        nazwa: "Gibka",
        angielska: "Swishy",
        opis: "Lekka i bardzo płynna w prowadzeniu. Świetnie reaguje na szybkie zaklęcia i kreatywne pojedynki.",
        modyfikatory: {
            kreatywnosc: 2,
            adaptacja: 2,
            szybkosc: 1,
            stabilnosc: -2
        },
        idealnyWlasciciel: "utalentowany pojedynkowicz"
    },

    elastyczna: {
        nazwa: "Elastyczna",
        angielska: "Supple",
        opis: "Łatwo dostosowuje się do właściciela i dobrze współpracuje z wieloma stylami magii. Jest jedną z najbardziej uniwersalnych elastyczności.",
        modyfikatory: {
            adaptacja: 3,
            kreatywnosc: 1,
            stabilnosc: -1,
            dyscyplina: -1
        },
        idealnyWlasciciel: "wszechstronny"
    },

    podatna: {
        nazwa: "Podatna",
        angielska: "Pliant",
        opis: "Szybko nawiązuje więź z właścicielem i dobrze reaguje na rozwój jego umiejętności. Jest otwarta na zmiany i nowe doświadczenia.",
        modyfikatory: {
            adaptacja: 2,
            lojalnosc: 1,
            inteligencja: 1,
            stabilnosc: -1
        },
        idealnyWlasciciel: "ciekawy świata, otwarty"
    },

    bardzo_sztywna: {
        nazwa: "Bardzo sztywna",
        angielska: "Rigid",
        opis: "Zachowuje się zdecydowanie i niechętnie zmienia swoje przyzwyczajenia. Oczekuje od właściciela pewności siebie oraz konsekwencji.",
        modyfikatory: {
            dyscyplina: 2,
            lojalnosc: 1,
            stabilnosc: 1,
            adaptacja: -2,
            kreatywnosc: -1
        },
        idealnyWlasciciel: "silna osobowość, pewny siebie"
    },

    niegieta: {
        nazwa: "Nieugięta",
        angielska: "Unbending",
        opis: "Symbolizuje niezłomność charakteru i odporność na wpływy zewnętrzne. Bardzo trudno zdobywa zaufanie nowego właściciela.",
        modyfikatory: {
            lojalnosc: 2,
            odwaga: 1,
            dyscyplina: 1,
            adaptacja: -3
        },
        idealnyWlasciciel: "niezależny, wytrwały"
    },

    nieustepliwa: {
        nazwa: "Nieustępliwa",
        angielska: "Unyielding",
        opis: "Jedna z najbardziej wymagających elastyczności. Oferuje ogromną lojalność, ale oczekuje od właściciela silnej woli, zdecydowania i konsekwencji.",
        modyfikatory: {
            lojalnosc: 3,
            ambicja: 1,
            dyscyplina: 1,
            adaptacja: -3,
            kreatywnosc: -1
        },
        idealnyWlasciciel: "lider, silny charakter"
    },

    kapryśnie_gietka: {
        nazwa: "Kapryśnie giętka",
        angielska: "Whippy",
        opis: "Nieprzewidywalna i żywiołowa. Potrafi zaskoczyć nawet doświadczonego właściciela nagłą zmianą zachowania. Doskonale sprawdza się przy improwizowanej magii.",
        modyfikatory: {
            kreatywnosc: 3,
            adaptacja: 2,
            stabilnosc: -2,
            dyscyplina: -2
        },
        idealnyWlasciciel: "spontaniczny, improwizujący"
    }
};

// Mapa nazw -> klucze
export const mapaElastycznosci = {};
for (const [klucz, elast] of Object.entries(bazaElastycznosci)) {
    mapaElastycznosci[elast.nazwa.toLowerCase()] = klucz;
    mapaElastycznosci[elast.angielska.toLowerCase()] = klucz;
}

export function znajdzElastycznosc(nazwa) {
    if (!nazwa) return null;
    const klucz = mapaElastycznosci[nazwa.toLowerCase()];
    if (klucz) return bazaElastycznosci[klucz];
    for (const [k, elast] of Object.entries(bazaElastycznosci)) {
        if (elast.nazwa.toLowerCase().includes(nazwa.toLowerCase()) ||
            nazwa.toLowerCase().includes(elast.nazwa.toLowerCase())) {
            return bazaElastycznosci[k];
        }
    }
    return null;
}


