const servicesLinks = [
    {
        title: 'Εργαστήριο Αλλεργικής Ρινίτιδας & Ρινολογίας', 
        url:  '/services/laboratory-of-allergic-rhinitis-and-rhinology'
    },
    {
        title: 'Εργαστήριο Ωτολογίας - Ακοολογίας - Νευροώτολγίας',
        url:  '/services/laboratory-of-otology-ancology-neurothology'
    },
    {
        title: 'Ιατρείο Ροχαλητού και Αποφρακτικής Υπνικής Άπνοιας',
        url:  '/services/snoring-surgery-and-obstructive-sleep-apnoea'
    },
    {
        title: 'Ιατρείο Κεφαλής & Τραχήλου',
        url:  '/services/head-and-neck-med'
    },
    {
        title: 'Φωνιατρική & Λαρυγγολογία - Διερεύνηση Δυσφωνίας',
        url:  '/services/phoniatric-and-laryngology-investigate-dysphonia'
    },
    {
        title: 'Ιατρείο Κατάπωσης',
        url:  '/services/swallowing-clinic'
    },
    {
        title: 'Γενική Ωτορινολαρυγγολογία & Επείγοντα Περιστατικά',
        url:  '/services/general-otorhinolaryngology-and-emergencies'
    }
];

const paidoorlLinks = [
    {
        title: 'Παίδο-ΩΡΛ Κλινική Εξέταση',
        url:  '/paidiatricorl/paidiatricorl-clinical-examination'
    },
    {
        title: 'Παιδο-ΩΡΛ Χειρουργικές Επεμβάσεις', 
        url:  '/paidiatricorl/paidiatricorl-surgeries'
    }
];

const surgerieslLinks = [
    {
        title: 'Ενδοσκοπική Χειρουργική Ρινός & Παραρρινίων – FESS',
        url: '/surgery/fess'
    },
    {
        title: 'Ρινοπλαστική - Διαφραγματοπλαστική',
        url: '/surgery/rhinoplastic'
    },
    {
        title: 'Χειρουργική Υπνικής Άπνοιας & Ροχαλητού',
        url: '/surgery/snoring-and-sleep-apnoea-surgery'
    },
    {
        title: 'Χειρουργική Κεφαλής και Τραχήλου',
        url: '/surgery/head-and-neck-surgery'
    },
    {
        title: 'Φωνομικροχειρουργική',
        url: '/surgery/phonosurgery'
    },
    {
        title: 'Οισοφαγοσκόπηση, Φαρυγγοσκόπηση, Πανενδοσκόπηση',
        url: '/surgery/oesophagoscopy-pharyngoscopy-panendoscopy'
    },
    {
        title: 'Ωτοχειρουργική',
        url: '/surgery/ear-surgery'
    },
    {
        title: 'Πλαστική Χειρουργική Προσώπου - Facial Plastic Surgery',
        url: '/surgery/facial-plastic-surgery'
    }
];

const menu = [
    {
        title: 'Αρχικη',
        url:  '/'
    },
    {
        title: 'Βιογραφικο',
        url:  '/about'
    },
    {
        title: 'Υπηρεσίες',
        url:  '/services/',
        sublinks: servicesLinks
    },
    {
        title: 'Παιδο - ΩΡΛ',
        url: '/paidoorl/',
        sublinks: paidoorlLinks
    },
    {
        title: 'Χειρουργικες Επεμβασεις',
        url: '/surgery/',
        sublinks: surgerieslLinks
    },
    {
        title: 'Επικοινωνια',
        url:  '/contact'
    }
]

export default menu;