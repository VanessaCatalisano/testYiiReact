import React from 'react';
import "../css/content.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import {Link} from "react-router-dom";
import axios from "axios";
import qs from "qs";

const Home = () => {

    const requestAPI = async (nomeFile) => {
        let credenzial = localStorage.length > 0 ? localStorage : sessionStorage;
        try {
            const result = await axios.post(`http://192.168.2.12/newSpazioAderenti/Vanessa/spazioaderenti-react/index.php/site/test`,  qs.stringify({
                LoginFormAde : {
                    action:"emailModuli",
                    nomeFile : nomeFile,
                    password : credenzial.psw,
                    username : credenzial.CF
                }
            }));
            if(result) {
                return result.data;
            }
        } catch (err) {
            console.log(err);
        }
    };
    async function downloadModel(nomeFile) {
        const request = await requestAPI(nomeFile);
        if(request.message !== ""){
            console.log(request.message);
        }
    }


    return (
        <div>
            <Header/>
            <div className="row h-100 align-items-start bg-secondary" id="content">
                <Nav/>
                <div className="bg-secondary col-sm-9 p-0 p-sm-3 h-100">
                    <div className="card align-top">
                        <div className="card-body">
                            <div className="card bg-warning text-light">
                                <div className="card-body">
                                    <h5 className="card-title">Importante</h5>
                                    <p className="card-text">
                                        <a onClick={() => downloadModel("2022ComunicazioneEsami.pdf")} className="text-light">
                                            <b>Comunicazione per gli esami di primo e secondo livello 2023 </b>
                                            <div>clicca qui per fartela inviare per email</div>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <a name="menu"></a>
                            <h2>In messaggi e documenti:</h2>
                            <ol>
                                <li>
                                    <a href="#discorsi">Discorsi e messaggi</a>
                                </li>
                                <li>
                                    <a href="#istituto">Dall'Istituto</a>
                                </li>
                                <li>
                                    <a href="#moduli">Moduli per l'attività istituzionale</a>
                                </li>
                                <li>
                                    <a href="#adesionestaff">Dichiarazione di adesione agli staff per svolgere attività di volontariato</a>
                                </li>
                                <li>
                                    <a href="#procedure">Procedure per gli staff</a>
                                </li>
                            </ol>
                            <h3>
                                <a name="discorsi"></a>Discorsi e messaggi:
                            </h3>
                            <div className="card bg-info text-light" style={{marginBottom: "3%"}}>
                                <div className="card-body">
                                    <h5 className="card-title"> 2023 Messaggio del presidente Ikeda</h5>
                                    <p className="card-text"><a
                                        href="/aderenti/index.php/site/email?f=2023-01-01_Ikeda_Messaggio.pdf"
                                        className="text-light"><b>il messaggio
                                        per il nuovo anno del presidente della SGI Daisaku Ikeda per il 1° Gennaio
                                        2023</b>
                                        clicca qui per fartelo inviare per email</a>
                                    </p>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <a href="/aderenti/index.php/site/email?f=2022-01-01_Ikeda_Messaggio.pdf">1 gennaio 2022 - Messaggio
                                    per il nuovo anno</a> del presidente della SGI Daisaku Ikeda
                                </li>
                                <li>
                                    <a href="/aderenti/index.php/site/email?f=2018-09-16-MessaggioPIRiunioneGeneraleItaliana.pdf">Messaggio
                                    per la riunione generale italiana</a> del presidente della SGI Daisaku Ikeda, 16 settembre 2018
                                </li>
                            </ul>
                            <p>
                                <a href="#menu">Torna su</a>
                            </p>
                            <h3>
                                <a name="istituto"></a>Dall'Istituto:
                            </h3>
                            <div className="row m-1">
                                <div className="col-sm-12 font-weight-bold bg-secondary text-muted p-2 m-2">
                                    <div className="text-center font-weight-bold">AVVISO</div>
                                    <div>
                                        <small>
                                            I video sono disponibili per uso interno
                                            Si chiede di non registrare, fotografare né diffondere tramite altri mezzi
                                            (ad esempio
                                            condivisioni su Whatsapp o altri social - Facebook, YouTube eccetera) anche
                                            solo in parte o con singoli screenshot.
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className="row pb-2 m-1">
                                <div className="col-sm-6 mb-1 d-flex px-1 justify-content-center">
                                    <div className="row m-0">
                                        <a href="/aderenti/index.php/site/playerG/27">
                                            <b>K30 - 30° anniversario dell'inaugurazione del Centro italiano - Riunione
                                                commemorativa</b>
                                            <img className="img-fluid rounded" src="/aderenti/images/K30.jpg" alt="K30"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-1 d-flex px-1 justify-content-center">
                                    <div className="row m-0">
                                        <a href="/aderenti/index.php/site/player60/25">
                                            <b>Canzone per il 60° anniversario della visita del Presidente Ikeda in
                                                Italia</b>
                                            <img className="img-fluid rounded" src="/aderenti/images/60.png"
                                                 alt="sessantesimo"/> </a>
                                    </div>
                                </div>
                                <h6 className="alert alert-success">
                                    <a href="/aderenti/index.php/site/email?f=AutorizzazioneImmagineSiti.pdf">
                                        <b>Modulo di autorizzazione alla pubblicazione della propria immagine
                                            sul sito web sgi-italia.org e social network collegati</b>
                                        Clicca qui per fartelo inviare per email</a>.
                                </h6>
                                <p>
                                    <a href="#menu">Torna su</a>
                                </p>
                                <h3>
                                    <a name="moduli"></a>Moduli per l'attività istituzionale:
                                </h3>
                                <h4>Moduli di richiesta</h4>
                                <ul>
                                    <li>
                                        <a href="/aderenti/index.php/site/emailModuli?f=MODULO_STANDARD_editabile A4 fronte-retro.pdf">
                                        Modulo di adesione all'Istituto - formato editabile</a>
                                    </li>
                                    <li>
                                        <a href="/aderenti/index.php/site/emailModuli?f=MODULO_MINORI_editabile A4 fronte-retro.pdf">
                                        Modulo di adesione all'Istituto per i minorenni - formato editabile</a>
                                    </li>
                                    <li>
                                        <a href="/aderenti/index.php/site/emailModuli?f=GDPRModulo adesione per membri esteri e ISG editabile.pdf">
                                        Modulo di adesione all'Istituto per i membri esteri o membri ISG - formato editabile</a>
                                    </li>
                                    <li>
                                        <a href="/aderenti/index.php/site/emailModuli?f=ModuloConsegnaOkatagi_R2_Editabile-v202109.pdf">
                                        Modulo di consegna Okatagi per chi è già membro - formato editabile</a>
                                    </li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=Modulo di restituzione_R2_Editabile-v202109.pdf">
                                        Modulo di restituzione Gohonzon - formato editabile</a></li>
                                    <li>
                                        <a href="/aderenti/index.php/site/emailModuli?f=ModuloPartecipazioneAttivitaMinorenni_R2-v202109.pdf">
                                        Consenso alla partecipazione di minorenni ad attività dell'Istituto</a>
                                    </li>
                                    <li>
                                        <a href="/aderenti/index.php/site/emailModuli?f=ModelloRaccoltaDatiDivisioneStudenti.pdf">
                                        Modello per la raccolta dati del Gruppo Studenti </a>
                                    </li>
                                </ul>
                                <h4>Moduli per le nomine</h4>
                                <ul>
                                    <li>
                                        <a href="/aderenti/index.php/site/emailModuli?f=GDPR scheda responsabili ITA_editabile.pdf">
                                        Scheda responsabile - formato editabile</a>
                                    </li>
                                    <li>
                                        <a href="/aderenti/index.php/site/emailModuli?f=GDPRMotivazionePerNomineCapitoloinsu - EDITABILE.pdf">
                                        Modulo motivazione nuove nomine da capitolo in su - formato editabile</a>
                                    </li>
                                    <li>
                                        <a href="/aderenti/index.php/site/emailModuli?f=Organigramma.xlsx">
                                        Modulo per organigramma</a>
                                    </li>
                                </ul>
                                <p>
                                    <a href="#menu">Torna su</a>
                                </p>
                                <h3>
                                    <a name="adesionestaff"></a>Dichiarazione di adesione agli staff per svolgere attività di volontariato:
                                </h3>
                                <div className="alert alert-success noprint">
                                    <b><a href="/aderenti/index.php/site/email?f=AdesioneAgliStaff_2018.pdf">Dichiarazione
                                        di adesione agli staff per le attività di volontariato</a>, da leggere e firmare
                                        prima di iniziare le attività.</b>
                                </div>
                                <p>
                                    <a href="#menu">Torna su</a>
                                </p>
                                <h3>
                                    <a name="procedure"></a>Manuali e procedure per le attività di staff:
                                </h3>
                                <ul id="home">
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=ProcedureDiffusioneSottoscrizioneAdesioneAgliStaff.pdf">
                                        Procedure per la diffusione e sottoscrizione della dichiarazione di adesione agli staff per svolgere attività di volontariato</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=100_Segreteria.pdf">
                                        Informativa in materia di salute e sicurezza sul lavoro per lo staff Segreteria</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=115_Legali.pdf">
                                        Informativa in materia di salute e sicurezza sul lavoro per lo staff Legali</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=120_Offerte.pdf">
                                        Informativa in materia di salute e sicurezza sul lavoro per lo staff Offerte</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=130_Statistica.pdf">
                                        Informativa in materia di salute e sicurezza sul lavoro per lo staff Statistica</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=140_CED.pdf">
                                        Informativa in materia di salute e sicurezza sul lavoro per lo staff C.E.D.</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=170_UfficioTecnico.pdf">
                                        Informativa in materia di salute e sicurezza sul lavoro per lo staff Ufficio Tecnico</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=171_Allestimenti.pdf">
                                        Informativa in materia di salute e sicurezza sul lavoro per lo staff Allestimenti</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=200-SokahanByakuren.pdf">
                                        Informativa in materia di salute e sicurezza sul lavoro per gli staff Byakuren e Sokahan</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=201_Centralino.pdf">
                                        Informativa in materia di salute e sicurezza sul lavoro per lo staff Centralino</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=202_Diamante.pdf">
                                        Informativa in materia di salute e sicurezza sul lavoro per lo staff Diamante</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=203_Corallo.pdf">
                                        Informativa in materia di salute e sicurezza sul lavoro per lo staff Corallo</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=204_Prometeo.pdf">
                                        PInformativa in materia di salute e sicurezza sul lavoro per lo staff Prometeo</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=205_Giardinaggio.pdf">
                                        Informativa in materia di salute e sicurezza sul lavoro per lo staff Giardinaggio</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=300_Amministrazione.pdf">
                                        Informativa in materia di salute e sicurezza sul lavoro per lo staff Amministrazione</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=301_Edizioni.pdf">
                                        Informativa in materia di salute e sicurezza sul lavoro per lo staff Edizioni</a></li>
                                    <li><a href="/aderenti/index.php/site/emailModuli?f=500_Sicurezza.pdf">
                                        Informativa in materia di salute e sicurezza sul lavoro per lo staff Sicurezza</a></li>
                                    <li>
                                        <a onClick={() => downloadModel("XXX_Cucina.pdf")}>
                                            Informativa in materia di salute e sicurezza sul lavoro per lo staff Cucina
                                        </a>
                                    </li>
                                </ul>
                                <p><a href="#menu" >Torna su</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;