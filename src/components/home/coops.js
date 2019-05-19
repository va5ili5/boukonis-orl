import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { FaCircle, FaMinus } from 'react-icons/fa'
const Coops = () => (
  <section className="mt-5">
    <Container>
      <Row>
        <Col md={12}>
            <h3>Συνεργασίες</h3>
            <ListGroup>
                <ListGroupItem className="border-0"><FaCircle size={5} style={{marginBottom:'3px',marginRight:'7px'}}/>Επιστημονικός Συνεργάτης – Χειρουργός ΩΡΛ σε Ιδιωτικά Νοσοκομεία &amp; Κλινικές για επεμβάσεις Ενηλίκων και Παίδων:
                    <ListGroup>
                        <ListGroupItem className="border-0 align-self-center font-weight-bold">METROPOLITAN - ΕΡΡΙΚΟΣ ΝΤΥΝΑΝ</ListGroupItem>
                        <ListGroupItem className="border-0 align-self-center font-weight-bold">ΟΜΙΛΟΣ ΥΓΕΙΑ –  ΜΗΤΕΡΑ - ΕΥΡΩΚΛΙΝΙΚΗ ΑΘΗΝΩΝ & ΠΑΙΔΩΝ</ListGroupItem>
                        <ListGroupItem className="border-0 align-self-center font-weight-bold">ΙΑΣΩ ΠΑΙΔΩΝ - Athens ORL clinic</ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
                <ListGroupItem className="border-0"><FaCircle size={5} style={{marginBottom:'3px',marginRight:'7px'}}/>Συνεργασία με Ιδιωτικές Ασφαλιστικές εταιρείες για Εξέταση στο ιατρείο, Νοσηλεία και Χειρουργικές Επεμβάσεις:
                    <ListGroup>
                        <ListGroupItem className="border-0"><FaMinus size={5} style={{marginBottom:'3px',marginRight:'7px'}}/>Συνεργάτης Ιατρός του Δικτύου <span className="font-weight-bold">INTERAMERICAN Medisystem</span> και της <span className="font-weight-bold">Αθηναϊκής Κλινικής</span></ListGroupItem>
                        <ListGroupItem className="border-0"><FaMinus size={5} style={{marginBottom:'3px',marginRight:'7px'}}/>Συνεργάτης Ιατρός Γραμμής Υγείας για Ατομικά και Ομαδικά ασφαλιστικά συμβόλαια των εταιρειών:</ListGroupItem>
                        <ListGroupItem className="border-0">
                            <ListGroup>
                                <ListGroupItem className="border-0 align-self-center font-weight-bold">ΕΘΝΙΚΗ - GENERALI - METLIFE ΑLICO - AXA - ALLIANZ</ListGroupItem>
                                <ListGroupItem className="border-0 align-self-center font-weight-bold">GROUPAMA ΦΟΙΝΙΞ – EUROLIFE - INTERASCO - NN Hellas - AIG - ΜΙΝΕΤΤΑ</ListGroupItem>
                                <ListGroupItem className="border-0 align-self-center font-weight-bold">EΥΡΩΠΑΙΚΗ ΠΙΣΤΗ - ERGO - ΑΤΛΑΝΤΙΚΗ ΕΝΩΣΗ - PRIME INSURANCE</ListGroupItem>
                                <ListGroupItem className="border-0 align-self-center font-weight-bold"> ΠΕΙΡΑΙΩΣ ΖΩΗΣ, EUROBANK, ALPHA BANK, ΕΘΝΙΚΗ ΤΡΑΠΕΖΑ, Τράπεζα της Ελλάδος</ListGroupItem>
                            </ListGroup>
                        </ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
                <ListGroupItem className="border-0"><FaCircle size={5} style={{marginBottom:'3px',marginRight:'7px'}}/>Πιστοποίηση από τον ΕΟΠΥΥ για <span className="font-weight-bold">Συνταγογράφηση Φαρμακευτικής Αγωγής &amp; Διαγνωστικών Εξετάσεων</span> (Αιματολογικές, Αξονική και Μαγνητική Τομογραφία, Υπέρηχοι & Triplex).</ListGroupItem>
                <ListGroupItem className="border-0"><FaCircle size={5} style={{marginBottom:'3px',marginRight:'7px'}}/>Πιστοποίηση από τον ΕΟΠΥΥ για την παροχή <span className="font-weight-bold">Ακουστικών Βαρηκοΐας</span></ListGroupItem>
                <ListGroupItem className="border-0"><FaCircle size={5} style={{marginBottom:'3px',marginRight:'7px'}}/>Σύμβαση με το Υπουργείο Μεταφορών για <span className="font-weight-bold">Ακοόγραμμα</span> σε οδηγούς για άδειας οδήγησης.</ListGroupItem>
            </ListGroup>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Coops
