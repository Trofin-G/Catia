import './Symptoms.scss';
import React from 'react';
import { getSymptoms } from './symptomsService';

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
                        {getSymptoms().map(symptom =>(
                            <tr key={symptom.id} className={symptom.id%2 == 0 ? 'even-row' : 'odd-row'}>
                                <th scope="row">{symptom.typicalSymptom}</th>
                                <td>{symptom.communCold}</td>
                                <td>{symptom.flu}</td>
                                <td>{symptom.coronaVirus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Symptoms;