
import surgery1 from '../src/images/surgeries/rhinoplastic.jpg';
import surgery2 from '../src/images/surgeries/apnea.jpg';
import surgery3 from '../src/images/surgeries/phoniatric.jpg';
import surgery4 from '../src/images/surgeries/swallowing.jpg';

// about me section
const description = [
    'Εξειδικευθείς εις Λονδίνο, Μεγάλη Βρετανία.',
    'τ. Επιμελητής Πανεπιστημιακής ΩΡΛ Κλινικής Queen’s Hospital, London United Kingdom.',
    'BHR University Hospitals NHS Trust.',
    'τ. Επιμελητής ΩΡΛ Κλινικής Eastbourne District General Hospital, East Sussex, United Kingdom.',
    'East Sussex Healthcare NHS Trust.',
    'Απόφοιτος Ιατρικής Σχολής, Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης.'
]

const about = {
    title: 'Κωνσταντίνος Χ. Μπουκόνης',
    tagline: 'Ωτορινολαρυγγολόγος - Χειρουργός Κεφαλής & Τραχήλου',
    text: description,
    buttonText: 'Βιογραφικό'
}
// end of about me section

// clinic section
const clinictext = [
    'Το Ιατρείο βρίσκεται στη Λεωφόρο Κωνσταντινουπόλεως 63, στο 2ο όροφο, σε μια από τις πλέον ζωντανές περιοχές του Περιστερίου.',
    'Υπάρχει εύκολη πρόσβαση με τα μέσα μεταφοράς, καθώς και από την εθνική οδό.',
    'Στεγάζεται σε μια σύγχρονη, νεόδμητη οικοδομή, με άνετο ασανσέρ και ειδική ράμπα που εξυπηρετεί την ανεμπόδιστη πρόσβαση ασθενών με κινητικά προβλήματα και ΑΜΕΑ, όπως προβλέπεται για όλα τα κτίρια ιατρείων.',
    'Το ιατρείο είναι εξοπλισμένο με τα πλέον σύγχρονα μηχανήματα και τα απαραίτητα εργαλεία για την πλήρη διερεύνηση των ΩΡΛ ασθενών, Ενηλίκων και Παίδων.',
    'Το ιατρείο διαθέτει την κατάλληλη υλικοτεχνική υποδομή & τεχνολογικό εξοπλισμό και ακολουθεί όλες τις προδιαγραφές ασφαλείας και αντισηψίας για την πραγματοποίηση Μικροεπεμβάσεων και Βιοψιών υπό τοπική αναισθησία.',
    'Ο χώρος του ιατρείου είναι σε minimal γραμμές και σύγχρονης αισθητικής, δημιουργώντας ένα ήρεμο και χαλαρό περιβάλλον.',
    'Κατόπιν συνεννόησης πραγματοποιούνται επισκέψεις κατ’ οίκων'
]

const clinic = {
    title: 'Ιατρείο ΩΡΛ Περιστέρι',
    text: clinictext
}
// end of clinic section

// services section
const surgeries = [
    {   surgeryname: 'Λειτουργική και Αισθητική Ρινοπλαστικη', 
        description: 'Αισθητική και Λειτουργική Ρινοπλαστική. Ανοιχτή και Κλειστή προσπελαση. Διόρθωση ανεπάρκειας Έσω Ρινικής Βαλβίδας (Spreader Grafts).'+ 
                    'Επεμβάσεις κορυφής ρινός(Nasal Tip). Επανεπέμβαση μετά από αποτυχημένη ρινοπλαστική (Revision).', 
        imagesrc: surgery1,
        imagealt: 'rhinoplastic-img',
        surgeryurl: 'surgery/rhinoplastic'
    },
    {   surgeryname: 'Χειρουργικές επεμβάσεις Φάρυγγος και Ροχαλητού/Άπνοιας', 
        description: 'Αμυγδαλεκτομή-Ενδοσκοπική Αδενοειδεκτομή. LASER ΦαρυγγοΥπερωιοπλαστική. Επεμβάσεις Βάσης Γλώσσης και Υπερώας με Ραδιοσυχνότητες. Expansion Sphincter Pharyngoplasty.', 
        imagesrc: surgery2,
        imagealt: 'apnea-img',
        surgeryurl: 'surgery/snoring-and-sleep-apnoea-surgery'
    },
    {   surgeryname: 'Φωνομικροχειρουργική', 
        description: 'Επεμβάσεις φωνητικών χορδών (Πολύποδες, Κύστεις, Κοκκιώματα, Δυσπλασίες)-Λήψη βιοψίας-LASER ογκο-μικροχειρουργική.', 
        imagesrc: surgery3,
        imagealt: 'apnea-img',
        surgeryurl: 'surgery/snoring-and-sleep-apnoea-surgery'
    },
    {   surgeryname: 'Οισοφαγοσκόπηση και Φαρυγγοσκόπηση', 
        description: 'Ενδοσκοπική εκτομή εκκολπώματος Zenker. Εκτομή ύποπτων βλαβών βάσης γλώσσης, οισοφάγου και βιοψία. Διαστολή ανώτερου οισοφαγικού σφιγκτήρα.', 
        imagesrc: surgery4,
        imagealt: 'apnea-img',
        surgeryurl: 'surgery/snoring-and-sleep-apnoea-surgery'
    },
]
// end of services section
const indexPageData = {
    about,
    clinic,
    surgeries
}

export default indexPageData;