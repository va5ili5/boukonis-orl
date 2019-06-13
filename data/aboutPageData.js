import aboutme1 from '../src/images/about/10.jpg';

// about me section
const description = [
    'Επιστημονικός Συνεργάτης – Χειρουργός ΩΡΛ Νοσοκομείου ΥΓΕΙΑ',
    'Επιστημονικός Συνεργάτης – Χειρουργός ΩΡΛ Νοσοκομείου Metropolitan',
    'Επιμελητής Πανεπιστημιακής ΩΡΛ Κλινικής Queen’s Hospital - London United Kingdom',
    'Επιμελητής Πανεπιστημιακής ΩΡΛ Κλινικής Eastbourne DGH - United Kingdom',
    'Απόφοιτος Ιατρικής Σχολής, Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης'
];

const tagline = [
    'Ωτορινολαρυγγολόγος',
    'Χειρουργός Κεφαλής & Τραχήλου',
    'Εξειδικευθείς εις Λονδίνο, Μεγάλη Βρετανία'
]

const about = {
    title: 'Κωνσταντίνος Χ. Μπουκόνης',
    tagline: tagline,
    text: description,
    imageSrc: aboutme1,
    imageAlt: 'Konstantinos Boukonis image',
    contactDetails: {
        phone: '2130 575052',
        mobile: '6947 556211',
        email: 'kostasboukonis@gmail.com',
        address: 'Λεωφόρος Κωνσταντινουπόλεως 63, Περιστέρι'
    }
}

const aboutPageData = {
    about
}

export default aboutPageData;