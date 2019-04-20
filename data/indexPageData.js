
import surgery1 from '../src/images/surgeries/rhinoplastic.png';
import surgery2 from '../src/images/surgeries/apnea.png';
import surgery3 from '../src/images/surgeries/phoniatric.png';
import surgery4 from '../src/images/surgeries/swallowing.png';

import article1 from '../src/images/articles/se2.png'
import article2 from '../src/images/articles/f3.png'
import article3 from '../src/images/articles/s2.png'
import article4 from '../src/images/articles/r2.png'
import article5 from '../src/images/articles/1.png'
import article6 from '../src/images/articles/2.png'

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

// articles section
const articles = [
    {
        articlename: 'Χειρουργείο Ρινικό Διάφραγμα & Κόγχες',
        description: 'Ενδοσκοπική Διαφραγματοπλαστική (Endoscopic Septoplasty) - Ενδοσκοπική Κογχοπλαστική (Endoscopic Turbinoplasty)',
        imagesrc: article1,
        imagealt: 'se2.png',
        articleurl:'articles/septoplasty-turbinoplasty'
    },
    {
        articlename: 'Ενδοσκοπική Χειρουργική Ρινός & Παραρρινίων',
        description: 'Functional Endoscopic Sinus Surgery - FESS - Χρόνια Ρινοκολπιτιδα, Χρόνια Ιγμορίτιδα, Ρινικοί Πολύποδες',
        imagesrc: article2,
        imagealt: 'se2.png',
        articleurl:'articles/fess'
    },
    {
        articlename: 'Ροχαλητό & Αποφρακτική Υπνική Άπνοια στους Ενήλικες',
        description: 'Έχει υπολογιστεί από έρευνες πως έως και το 50% των ενηλίκων ροχαλίζουν τουλάχιστον περιστασιακά, ενώ το 25% σε μόνιμη βάση. Το πρόβλημα είναι συχνότερο στους άνδρες και τα υπέρβαρα άτομα και συνήθως επιδεινώνεται με την ηλικία.',
        imagesrc: article3,
        imagealt: 's2.png',
        articleurl:'articles/snoring-osa'
    },
    {
        articlename: 'Λειτουργική Ρινοπλαστική (Functional Septorhinoplasty)',
        description: 'Η Λειτουργική Ρινοπλαστική είναι μια απ’ τις συχνότερες επεμβάσεις στη Ρινολογία και εξυπηρετεί ταυτόχρονα δυο στόχους. Αφ’ ενός διορθώνει τις ατέλειες του σχήματος και της εμφάνισης της μύτης και αφετέρου εξασφαλίζει την ομαλή και ανεμπόδιστη ρινική αναπνοή.',
        imagesrc: article4,
        imagealt: 's2.png',
        articleurl:'articles/functional-septorhinoplasty'
    },
    {
        articlename: 'Το Σύνδρομο Αποφρακτικής Υπνικής Άπνοιας στα Παιδιά',
        description: 'Η αποφρακτική υπνική άπνοια (OSA) είναι η συχνότερη αιτία της διαταραχής της αναπνοής στον ύπνο (SDB) στα παιδιά. Συνδέεται με σημαντική νοσηρότητα, με καρδιαγγειακές και μεταβολικές διαταραχές και μπορεί να επηρεάσει την νοητική (neurocognitive) και συμπεριφορική (behavioural) ανάπτυξη.',
        imagesrc: article5,
        imagealt: '1.png',
        articleurl:'articles/osa-children'
    },
    {
        articlename: 'Εκκριτική Ωτίτιδα στα Παιδιά (υγρό στα αυτιά)',
        description: 'Το υγρό στο αυτί είναι μια πολύ συχνή πάθηση στα παιδιά. Μπορεί να εμφανιστεί σε οποιαδήποτε ηλικία και μπορεί να επηρεάσει το ένα ή και τα δύο αυτιά.',
        imagesrc: article6,
        imagealt: '1.png',
        articleurl:'articles/glue-ears'
    },
    
]
// end of arcticle section
const indexPageData = {
    about,
    clinic,
    surgeries,
    articles
}

export default indexPageData;