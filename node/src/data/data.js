export const providers = [
    {
        id: 1,
        fullName: 'Joe Court Reporter',
        latitude: 34.059943,
        longitude: -118.445317
    },
    {
        id: 2,
        fullName: 'Jane Smith',
        latitude: 34.067538,
        longitude: -118.425903
    }
    // Continue for all records
]

export const jobs = [
    {
        id: 1,
        dateTime: '2021-06-03 08:19:33',
        status: 'COMPLETE',
        providerId: 1,
        avgCostPerPage: 550, // This is in pennies
        materialsTurnInAt: '2021-06-13 10:43:33',
        providerRaging: true ,  // I belive this is a positive or negative review, as it is just a binary number in the file, which is a typical representation for SQL databases
        locationType: 'REMOTE',
        latitude: null,
        longitude: null
    },
    {
        id: 2,
        dateTime: '2021-06-04 03:31:33',
        status: 'COMPLETE',
        providerId: 1,
        avgCostPerPage: 625,
        materialsTurnInAt: '2021-06-13 15:31:33',
        providerRaging: true,
        locationType: 'LOCATION_BASED',
        latitude: '34.0165128',
        longitude: '-118.4939147'
    }
    // Continue for all records
]

// Note, these could also be dictionaries or key/value pairs (which are really just objects) instead of arrays