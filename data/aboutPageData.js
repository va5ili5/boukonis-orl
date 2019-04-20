import aboutme1 from '../src/images/about/10.jpg';
import aboutme2 from '../src/images/about/1.jpg';
import aboutme3 from '../src/images/about/2.jpg';
import aboutme4 from '../src/images/about/3.jpg';
import aboutme5 from '../src/images/about/4.jpg';
import aboutme6 from '../src/images/about/5.jpg';
import aboutme7 from '../src/images/about/6.jpg';
import aboutme8 from '../src/images/about/7.jpg';
import aboutme9 from '../src/images/about/8.jpg';

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

const education = {
    title: 'ΕΚΠΑΙΔΕΥΣΗ',
    imageSrc: aboutme2,
    imageAlt: 'education image',
    details: [
        {
            item: 'Μετεκπαίδευση & Χειρουργική Εξειδίκευση στη Μεγάλη Βρετανία στη Ρινοπλαστική, Ενδοσκοπική Χειρουργική Ρινός και Παραρινίων,' +
                  'Ωτοχειρουργική, Χειρουργική Ρογχοπαθειών και Υπνικής Άπνοιας, Φωνομικροχειρουργική και Χειρουργική Κεφαλής & Τραχήλου.</br>' +
                  '<b>Queen’s Hospital London, BHR University Hospitals NHS Trust, London United Kingdom' +
                  'Eastbourne District General Hospital, East Sussex, United Kingdom 2013-2017</b>'
        },
        {
            item: 'Εκπαιδευτικά Χειρουργικά Courses στα Πανεπιστήμια του Λονδίνου <b>"Kings College London"</b> και <b>"Queen Mary University of London"</b><br/>'+
                  'Εξειδικευμένα Hands on Workshops των Ιατρικών Σχολών σε Ανατομικά Παρασκευάσματα στην Ρινοπλαστική, Ενδοσκοπική Χειρουργική Ρινός, Ωτοχειρουργική και Χειρουργική Κεφαλής & Τραχήλου.<br/><br/>',
            innerItems: {
                title: 'ADVANCED SURGICAL TRAINING COURSES:',
                items: [
                    '<b>Temporal Bone Dissection Course, "hands-on" Cadaver Dissection Training Course</b> Guy\'s & St Thomas\' NHS Trust, Kings College London, June 2016',
                    '<b>Rhinoplasty Practical Workshop, "hands-on" Cadaver Dissection Training Course</b> Bart\'s and the London NHS Trust, Queen Mary University London, June 2015',
                    '<b>F.E.S.S. Practical Workshop, "hands-on" Cadaver Dissection Training Course</b> Bart\'s and the London NHS Trust, Queen Mary University London, June 2014',
                    '<b>Head & Neck Surgery Practical Workshop, "hands-on" Cadaver Dissection Training Course</b> Bart\'s and the London NHS Trust, Queen Mary University London, June 2014'
                ]
            }
        },
        {
            item: 'Ειδικότητα στην Ωτορινολαρυγγολογία και Χειρουργική Κεφαλής & Τραχήλου, Τζάνειο Νοσοκομείο Πειραιά'+
                  'Ολοκλήρωση της εκπαίδευσης μετά απο επιτυχείς Προφορικές και Γραπτές εξετάσεις υπο τον Καθηγητή Σισμάνη 2013'
        },
        {
            item: 'Απόφοιτος της Ιατρικής Σχολής, του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης. Βαθμός "Λιαν Καλώς" 7,74 2003'
        },
        {
            item: 'Δευτεροβάθμια εκπαίδευση 1ο Γενικό Λύκειο Καστοριάς. Απολυτήριο με Βαθμό 19<sup>12/13</sup><br/><br/>'
        }
    ]
    
}

const aboutPageData = {
    about,
    education
}

export default aboutPageData;