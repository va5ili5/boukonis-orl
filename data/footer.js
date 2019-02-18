import navmenu from './menu';

const about = {
    title: 'ΣΧΕΤΙΚΑ',
    contactDetails: {
        phone: '2130 575052',
        mobile: '6947 556211',
        email: 'kostasboukonis@gmail.com',
        address: 'Λεωφόρος Κωνσταντινουπόλεως 63, Περιστέρι'
    }
}

const menu = {
    title: 'ΜΕΝΟΥ',
    navmenu

}

const timetable = {
    title: 'ΩΡΑΡΙΟ',
    workingDays: [
        {
            day: 'Δευτέρα',
            hours: '12:00 - 14:30, 17:30 - 21:00'
        },
        {
            day: 'Τρίτη',
            hours: '12:00 - 14:30, 17:30 - 21:00'
        },
        {
            day: 'Τετάρτη',
            hours: '12:00 - 14:30, 17:30 - 21:00'
        },
        {
            day: 'Πέμπτη',
            hours: '12:00 - 14:30, 17:30 - 21:00'
        },
        {
            day: 'Παρασκευή',
            hours: '12:00 - 14:30, 17:30 - 21:00'
        },
        {
            day: 'Σάββατο, Κυριακή',
            hours: 'Κλειστά'
        },
    ]
}
const footer ={
    about,
    menu,
    timetable
}

export default footer