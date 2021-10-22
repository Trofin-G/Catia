import './Symptoms.scss';
import React from 'react';

const Symptoms = () => {
    return(
        <div className="container">
            <div className="table-wrapper">
                <div className="title-text">
                    <p>COMMUN SYMPTOMS OF FLU AND COLDS VS. CORONAVIRUS (COVID-19)</p>
                    <p>WHAT'S THE DIFFERENCE?</p>
                    <p>Boots shares its simple symptom checker to help you determine if what you are experiencing is a cold, flu or COVID-19</p>
                    <p></p>
                </div>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col"><p>TYPICAL SYMPTOMS</p></th>
                            <th scope="col">
                                <p className="column-title">COMMON COLD</p>
                                <p className="column-title-description">(gradual onset of symptom)</p>
                            </th>
                            <th scope="col">
                                <p className="column-title">FLU</p>
                                <p className="column-title-description">(rapid onset of symptoms)</p>
                            </th>
                            <th scope="col">
                                <p className="column-title">CORONAVIRUS</p>
                                <p className="column-title-description">(symptoms range from mild to severe)</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd-row">
                            <th scope="row">Fever</th>
                            <td>Rare</td>
                            <td>Common</td>
                            <td>Common</td>
                        </tr>
                        <tr className="even-row">
                            <th scope="row">Cough</th>
                            <td>Common</td>
                            <td>Common</td>
                            <td>Common</td>
                        </tr>
                        <tr className="odd-row">
                            <th scope="row">Headache</th>
                            <td>Sometimes</td>
                            <td>Common</td>
                            <td>Sometimes</td>
                        </tr>
                        <tr className="even-row">
                            <th scope="row">Sore throat</th>
                            <td>Common</td>
                            <td>Sometimes</td>
                            <td>Sometimes</td>
                        </tr>
                        <tr className="odd-row">
                            <th scope="row">Runny or stuffy nose</th>
                            <td>Common</td>
                            <td>Sometimes</td>
                            <td>Rare</td>
                        </tr>
                        <tr className="even-row">
                            <th scope="row">Sneezing</th>
                            <td>Common</td>
                            <td>Sometimes</td>
                            <td>Rare</td>
                        </tr>
                        <tr className="odd-row">
                            <th scope="row">Aches & poins</th>
                            <td>Sometimes</td>
                            <td>Common</td>
                            <td>Sometimes</td>
                        </tr>
                        <tr className="even-row">
                            <th scope="row">Fatigue</th>
                            <td>Sometimes</td>
                            <td>Common</td>
                            <td>Sometimes</td>
                        </tr>
                        <tr className="odd-row">
                            <th scope="row">Loss of smell or taste</th>
                            <td>Sometimes</td>
                            <td>Sometimes</td>
                            <td>Common</td>
                        </tr>
                        <tr className="even-row">
                            <th scope="row">Shortness of breath</th>
                            <td>Rare</td>
                            <td>Rare</td>
                            <td>Sometimes</td>
                        </tr>
                        <tr className="odd-row">
                            <th scope="row">Diarrhea</th>
                            <td>No</td>
                            <td>Sometimes</td>
                            <td>Sometimes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Symptoms;