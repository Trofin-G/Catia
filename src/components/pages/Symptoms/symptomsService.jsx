const movies = [
    {
        id: '1',
        typicalSymptom: 'Fever',
        communCold: 'Rare',
        flu: 'Commun',
        coronaVirus: 'Commun'
    },
    {
        id: '2',
        typicalSymptom: 'Cough',
        communCold: 'Commun',
        flu: 'Commun',
        coronaVirus: 'Commun'
    },
    {
        id: '3',
        typicalSymptom: 'Headache',
        communCold: 'Sometimes',
        flu: 'Commun',
        coronaVirus: 'Sometimes'
    },
    {
        id: '4',
        typicalSymptom: 'Sore throat',
        communCold: 'Commun',
        flu: 'Sometimes',
        coronaVirus: 'Sometimes'
    },
    {
        id: '5',
        typicalSymptom: 'Runny or stuffy nose',
        communCold: 'Commun',
        flu: 'Sometimes',
        coronaVirus: 'Rare'
    },
    {
        id: '6',
        typicalSymptom: 'Sneezing',
        communCold: 'Commun',
        flu: 'Sometimes',
        coronaVirus: 'Rare'
    },
    {
        id: '7',
        typicalSymptom: 'Aches & poins',
        communCold: 'Sometimes',
        flu: 'Commun',
        coronaVirus: 'Sometimes'
    },
    {
        id: '8',
        typicalSymptom: 'Fatigue',
        communCold: 'Sometimes',
        flu: 'Commun',
        coronaVirus: 'Sometimes'
    },
    {
        id: '9',
        typicalSymptom: 'Loss of smell or taste',
        communCold: 'Sometimes',
        flu: 'Sometimes',
        coronaVirus: 'Commun'
    },
    {
        id: '10',
        typicalSymptom: 'Shortness of breath',
        communCold: 'Rare',
        flu: 'Rare',
        coronaVirus: 'Sometimes'
    },
    {
        id: '11',
        typicalSymptom: 'Diarrhea',
        communCold: 'No',
        flu: 'Sometimes',
        coronaVirus: 'Sometimes'
    }
];

export function getSymptoms(){ return movies; }