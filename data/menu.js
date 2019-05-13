const servicesLinks = [
    {
        title: 'Εργαστήριο Αλλεργικής Ρινίτιδας & Ρινολογίας', 
        url:  '/services#laboratory-of-allergic-rhinitis-and-rhinology'
    },
    {
        title: 'Εργαστήριο Ωτολογίας - Ακοολογίας - Νευροώτολγίας',
        url:  '/services#laboratory-of-otology-ancology-neurothology'
    },
    {
        title: 'Ιατρείο Ροχαλητού και Αποφρακτικής Υπνικής Άπνοιας',
        url:  '/services#snoring-surgery-and-obstructive-sleep-apnoea'
    },
    {
        title: 'Ιατρείο Κεφαλής & Τραχήλου',
        url:  '/services#head-and-neck-med'
    },
    {
        title: 'Φωνιατρική & Λαρυγγολογία - Διερεύνηση Δυσφωνίας',
        url:  '/services#phoniatric-and-laryngology-investigate-dysphonia'
    },
    {
        title: 'Ιατρείο Κατάπωσης',
        url:  '/services#swallowing-clinic'
    },
    {
        title: 'Γενική Ωτορινολαρυγγολογία & Επείγοντα Περιστατικά',
        url:  '/services#general-otorhinolaryngology-and-emergencies'
    },
    {
        title: 'Μικροεπεμβάσεις στο Ιατρείο',
        url:  '/services#micro-interventions'
    }
];

const paidoorlLinks = [
    {
        title: 'Παίδο-ΩΡΛ Κλινική Εξέταση',
        url:  '/paidoorl#paidiatricorl-clinical-examination'
    },
    {
        title: 'Παιδο-ΩΡΛ Χειρουργικές Επεμβάσεις', 
        url:  '/paidoorl#paidiatricorl-surgeries'
    }
];

const surgerieslLinks = [
    {
        title: 'Ενδοσκοπική Χειρουργική Ρινός & Παραρρινίων – FESS',
        url: '/surgeries#fess'
    },
    {
        title: 'Ρινοπλαστική - Διαφραγματοπλαστική',
        url: '/surgeries#rhinoplastic'
    },
    {
        title: 'Χειρουργική Υπνικής Άπνοιας & Ροχαλητού',
        url: '/surgeries#snoring-and-sleep-apnoea-surgery'
    },
    {
        title: 'Χειρουργική Κεφαλής και Τραχήλου',
        url: '/surgeries#head-and-neck-surgery'
    },
    {
        title: 'Φωνομικροχειρουργική',
        url: '/surgeries#phonosurgery'
    },
    {
        title: 'Οισοφαγοσκόπηση, Φαρυγγοσκόπηση, Πανενδοσκόπηση',
        url: '/surgeries#oesophagoscopy-pharyngoscopy-panendoscopy'
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
        url: '/surgeries/',
        sublinks: surgerieslLinks
    },
    {
        title: 'Άρθρα',
        url: '/articles/'
    },
    {
        title: 'Επικοινωνια',
        url:  '/contact'
    }
]

export default menu;