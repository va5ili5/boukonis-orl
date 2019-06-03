import aboutme1 from '../src/images/about/10.jpg';

// about me section
const description = [
    'Εξειδικευθείς εις Λονδίνο, Μεγάλη Βρετανία.',
    'τ. Επιμελητής Πανεπιστημιακής ΩΡΛ Κλινικής Queen’s Hospital, London United Kingdom.',
    'BHR University Hospitals NHS Trust.',
    'τ. Επιμελητής ΩΡΛ Κλινικής Eastbourne District General Hospital, East Sussex, United Kingdom.',
    'East Sussex Healthcare NHS Trust.',
    'Απόφοιτος Ιατρικής Σχολής, Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης.'
];

const about = {
    title: 'Κωνσταντίνος Χ. Μπουκόνης',
    tagline: 'Ωτορινολαρυγγολόγος - Χειρουργός Κεφαλής & Τραχήλου',
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