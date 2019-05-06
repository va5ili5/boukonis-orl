const surgeries = {
    title: 'Χειρουργικές Επεμβάσεις',
    services: [
        {
            title: 'Ενδοσκοπική Χειρουργική Ρινός & Παραρρινίων - FESS',
            id: 'fess',
            subservices:[
                'Χειρουργική Παραρρινίων Κόλπων (Full House FESS), για χρόνια ρινοκολπίτιδα, πολύποδες ρινός, μυκητιασική ρινοκολπίτιδα',
                'Επανεπέμβαση επί υποτροπής Χρόνιας Ρινοκολπίτιδας και Ρινικών Πολυπόδων (Revision FESS)',
                'Εξειδίκευση στην Ενδοσκοπική Διαφραγματοπλαστική',
                'Ενδοσκοπική Κογχοπλαστική',
                'Συρρίκνωση Κογχών με Ραδιοσυχνότητες',
                'Ενδοσκοπική Απολίνωση ΣφηνοΥπερώιας Αρτηρίας (SPA Ligation)',
                'Ενδοσκοπική Δακρυοκυστεορινοστομία (Endoscopic DCR)',
                'Χειρουργική Διάνοιξη Μετωπιαίου Κόλπου (Frontal recess surgery)',
                'Διάνοιξη των στομίων των Παραρρινιων Κόλπων με Μπαλονάκι (Balloon Sinusoplasty)',
                'Αφαίρεση Όγκων/ Λήψη Βιοψίας',
                '3D Image Guided Endoscopic Sinus Surgery'
            ]
        },
        {
            title: 'Ρινοπλαστική - Διαφραγματοπλαστική',
            id: 'rhinoplastic',
            subservices:[
                'Λειτουργική και Αισθητική Ρινοπλαστική, με Ανοιχτή (Εξωτερική) και Κλειστή (Ενδορρινική) Προσπέλαση',
                'Εξειδίκευση στη χειρουργική διόρθωση Ανεπάρκειας της Έσω Ρινικής Βαλβίδας με μοσχεύματα (Spreader Grafts)',
                'Χειρουργική διόρθωση Κορυφής Ρινός (Nasal Tip)',
                'Διόρθωση ασυμμετρίας ή απώλειας στήριξης στυλίδας με Εξωτερική Προσπέλαση (Columella Struts - Columelloplasty)',
                'Επανεπέμβαση (Revision) επι αποτυχημένης Διαφραγματοπλαστικής και Ρινοπλαστικής'

            ]
        },
        {
            title: 'Χειρουργική Υπνικής Άπνοιας & Ροχαλητού',
            id: 'snoring-and-sleep-apnoea-surgery',
            subservices:[
                'Εξειδίκευση σε Χειρουργικές επεμβάσεις Ρινός, Φάρυγγος και Βάσης Γλώσσας',
                'Ενδοσκόπηση ανώτερου αναπνευστικού, Mueller manoeuvre',
                'Epworth Scale Score, Έλεγχος ΒΜΙ',
                'Οργάνωση δοκιμασίας ελέγχου άπνοιας στον ύπνο (Sleep Study)',
                'Οργάνωση δοκιμασίας Sleep Nasendoscopy (drug induced sleep endoscopy)',
                'Νεότερες μέθοδοι Celon & Procut palatoplasty',
                'Αμυγδαλεκτομή, Ενδοσκοπική Αδενοειδεκτομή, LASER ΦαρυγγοΣταφυλοΥπερωιοπλαστική, Επεμβάσεις Βάσης Γλώσσης και Υπερώας με Ραδιοσυχνότητες',
                'Expansion Sphincter Pharyngoplasty'

            ]
        },
        {
            title: 'Χειρουργική Κεφαλής και Τραχήλου',
            id: 'head-and-neck-surgery',
            subservices:[
                'Χειρουργική παροχέτευση Αποστημάτων Τραχήλου',
                'Τραχειοστομία',
                'Εκτομή Κύστης θυρεογλωσσικού πόρου',
                'Εκτομή Βραγχιακής κύστης',
                'Θυρεοειδεκτομή, Παραθυρεοειδεκτομή',
                'Παρωτιδεκτομή',
                'Αφαίρεση Υπογνάθιου Σιελογόνου Αδένα',
                'Αφαίρεση δερματικών βλαβών κεφαλής και τραχήλου και Αποκατάσταση',
                'Ανοιχτή Βιοψία Λεμφαδένα'

            ]
        },
        {
            title: 'Φωνομικροχειρουργική',
            id: 'phonosurgery',
            subservices:[
                'LASER ογκο-μικροχειρουργική Λαρυγγα',
                'Επεμβάσεις φωνητικών χορδών με Μικρολαρυγγοσκόπιση (Πολύποδες, Κύστεις, Κοκκιώματα, Δυσπλασίες)',
                'Ενδοσκοπική Χειρουργική Υποφάρυγγα και Λάρυγγα και Λήψη βιοψίας'

            ]
        },
        {
            title: 'Οισοφαγοσκόπηση, Φαρυγγοσκόπηση, Πανενδοσκόπηση',
            id: 'oesophagoscopy-pharyngoscopy-panendoscopy',
            subservices:[
                'Άκαμπτη Οισοφαγοσκόπιση και Βιοψία ύποπτων βλαβών',
                'ΕBotox έγχυση σε σπασμό ανώτερου οισοφάγου και δυσκαταποσία',
                'Ενδοσκοπική εκτομή εκκολπώματος Zenker',
                'Αφαίρεση ξένου σώματος',
                'Χειρουργική εξαίρεση και Βιοψία ύποπτων βλαβών βάσης γλώσσης, οισοφάγου',
                'Διαστολή ανώτερου οισοφαγικού σφιγκτήρα'

            ]
        },
        {
            title: 'Ωτοχειρουργική',
            id: 'ear-surgery',
            subservices:[
                'Μυριγγοτομή',
                'Ενδοτυμπανικές εγχύσεις φαρμάκων για Βαρηκοΐα και Ίλιγγο',
                'Τοποθέτηση σωληνίσκων αερισμού',
                'Τυμπανοπλαστική',
                'Μαστοειδεκτομή',
                'Ενδοσκοπική Ωτοχειρουργική',
                'Χειρουργική αντιμετώπιση Χρόνιας Μέσης Ωτίτιδας και Χολοστεατώματος (ΤυμπανοΜαστοειδεκτομή)'
            ]
        },
        {
            title: 'Πλαστική Χειρουργική Προσώπου - Facial Plastic Surgery',
            id: 'facial-plastic-surgery',
            subservices:[
                'Ωτοπλαστική',
                'Ρινοπλαστική',
                'Αφαίρεση Σπίλων/Ύποπτων Μορφωμάτων και Βιοψία',
                'Αποκατάσταση Δερματικών Ελλειμάτων',
                'Δερματικά Μοσχεύματα ολικού πάχους',
                'Αφαίρεση υπερτροφικών ουλών (keloids) και ενοχλητικών σημαδιών',
                'Μη επεμβατικές αισθητικές παρεμβάσεις'

            ]
        }
    ]
}

const surgeriesPageData = {
    surgeries
}
export default surgeriesPageData;