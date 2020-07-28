const servicesLinks = [
  {
    title: 'Εργαστήριο Αλλεργικής Ρινίτιδας & Ρινολογίας',
    url: '/services',
    anchor: '#laboratory-of-allergic-rhinitis-and-rhinology',
  },
  {
    title: 'Εργαστήριο Ωτολογίας - Ακοολογίας - Νευροώτολγίας',
    url: '/services',
    anchor: '#laboratory-of-otology-ancology-neurothology',
  },
  {
    title: 'Ιατρείο Ροχαλητού και Αποφρακτικής Υπνικής Άπνοιας',
    url: '/services',
    anchor: 'snoring-surgery-and-obstructive-sleep-apnoea',
  },
  {
    title: 'Ιατρείο Κεφαλής & Τραχήλου',
    url: '/services',
    anchor: '#head-and-neck-med',
  },
  {
    title: 'Φωνιατρική & Λαρυγγολογία - Διερεύνηση Δυσφωνίας',
    url: '/services',
    anchor: '#phoniatric-and-laryngology-investigate-dysphonia',
  },
  {
    title: 'Ιατρείο Κατάπωσης',
    url: '/services',
    anchor: '#swallowing-clinic',
  },
  {
    title: 'Γενική Ωτορινολαρυγγολογία & Επείγοντα Περιστατικά',
    url: '/services',
    anchor: '#general-otorhinolaryngology-and-emergencies',
  },
  {
    title: 'Μικροεπεμβάσεις στο Ιατρείο',
    url: '/services',
    anchor: '#micro-interventions',
  },
]

const paidoorlLinks = [
  {
    title: 'Παίδο-ΩΡΛ Κλινική Εξέταση',
    url: '/paidoorl',
    anchor: '#paidiatricorl-clinical-examination',
  },
  {
    title: 'Παιδο-ΩΡΛ Χειρουργικές Επεμβάσεις',
    url: '/paidoorl',
    anchor: '#paidiatricorl-surgeries',
  },
]

const surgerieslLinks = [
  {
    title: 'Ενδοσκοπική Χειρουργική Ρινός & Παραρρινίων – FESS',
    url: '/surgeries',
    anchor: '#fess',
  },
  {
    title: 'Ρινοπλαστική - Διαφραγματοπλαστική',
    url: '/surgeries',
    anchor: '#rhinoplastic',
  },
  {
    title: 'Χειρουργική Υπνικής Άπνοιας & Ροχαλητού',
    url: '/surgeries',
    anchor: '#snoring-and-sleep-apnoea-surgery',
  },
  {
    title: 'Χειρουργική Κεφαλής και Τραχήλου',
    url: '/surgeries',
    anchor: '#head-and-neck-surgery',
  },
  {
    title: 'Φωνομικροχειρουργική',
    url: '/surgeries',
    anchor: '#phonosurgery',
  },
  {
    title: 'Οισοφαγοσκόπηση, Φαρυγγοσκόπηση, Πανενδοσκόπηση',
    url: '/surgeries',
    anchor: '#oesophagoscopy-pharyngoscopy-panendoscopy',
  },
  {
    title: 'Ωτοχειρουργική',
    url: '/surgery',
    anchor: '#ear-surgery',
  },
  {
    title: 'Πλαστική Χειρουργική Προσώπου - Facial Plastic Surgery',
    url: '/surgery',
    anchor: '#facial-plastic-surgery',
  },
  {
    title: 'Μικροεπεμβάσεις στο Ιατρείο',
    url: '/surgery',
    anchor: '#micro-interventions',
  },
]

const menu = [
  {
    title: 'Αρχικη',
    url: '/',
  },
  {
    title: 'Βιογραφικο',
    url: '/about',
  },
  {
    title: 'Υπηρεσιες',
    url: '/services/',
    sublinks: servicesLinks,
  },
  {
    title: 'Παιδο - ΩΡΛ',
    url: '/paidoorl/',
    sublinks: paidoorlLinks,
  },
  {
    title: 'Χειρουργικες Επεμβασεις',
    url: '/surgeries/',
    sublinks: surgerieslLinks,
  },
  {
    title: 'Άρθρα',
    url: '/articles/',
  },
  {
    title: 'Επικοινωνια',
    url: '/contact',
  },
]

export default menu
