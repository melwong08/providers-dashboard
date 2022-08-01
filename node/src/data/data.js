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
    },
    {
        id: 3,
        fullName: 'John Doe',
        latitude: null,
        longitude: null
    },
    {
        id: 4,
        fullName: 'Carey Court Reporter',
        latitude: 34.06347,
        longitude: -118.299954
    },
    {
        id: 5,
        fullName: 'Michael Jordan',
        latitude: 34.047637,
        longitude: -118.249681
    },
    {
        id: 6,
        fullName: 'Bill Smith',
        latitude: 34.007684,
        longitude: -118.499621
    }
]

export const jobs = [
    {
        id: 1,
        dateTime: '2021-06-03 08:19:33',
        status: 'COMPLETE',
        providerId: 1,
        avgCostPerPage: 550, // This is in pennies
        materialsTurnInAt: '2021-06-13 10:43:33',
        providerRating: true ,  // I belive this is a positive or negative review, as it is just a binary number in the file, which is a typical representation for SQL databases
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
        providerRating: true,
        locationType: 'LOCATION_BASED',
        latitude: '34.0165128',
        longitude: '-118.4939147'
    },
    {
        id: 3,
        dateTime: '2021-06-05 02:48:21',
        status: 'COMPLETE',
        providerId: 1,
        avgCostPerPage: 600,
        materialsTurnInAt: '2021-06-16 05:12:21',
        providerRating: true,
        locationType:'LOCATION_BASED',
        latitude: '34.0165128',
        longitude: '-118.4939147'
    },
    {
        id: 4,
        dateTime: '2021-06-06 01:07:33',
        status: 'COMPLETE',
        providerId: 1,
        avgCostPerPage: 550,
        materialsTurnInAt: '2021-06-14 01:07:33',
        providerRating: true,
        locationType: 'REMOTE',
        latitude: null,
        longitude: null
    },
    {
        id: 5,
        dateTime: '2021-06-08 10:29:09',
        status: 'COMPLETE',
        providerId: 1,
        avgCostPerPage: 625,
        materialsTurnInAt: '2021-06-15 10:29:09',
        providerRating: true,
        locationType: 'LOCATION_BASED',
        latitude: '34.0165128',
        longitude: '-118.4939147'
    },
    {
        id: 6,
        dateTime: '2021-06-10 10:14:45',
        status: 'COMPLETE',
        providerId: 1,
        avgCostPerPage: 600,
        materialsTurnInAt: '2021-06-20 10:14:45',
        providerRating: true,
        locationType: 'LOCATION_BASED',
        latitude: '34.0165128',
        longitude: '-118.4939147'
    },
    {
        id: 7,
        dateTime: '2021-06-01 10:43:33',
        status: 'COMPLETE',
        providerId: 2,
        avgCostPerPage: 425,
        materialsTurnInAt: '2021-06-12 13:07:33',
        providerRating: false,
        locationType: 'REMOTE',
        latitude: null,
        longitude: null
    },
    {
        id: 8,
        dateTime: '2021-06-04 20:19:33',
        status: 'COMPLETE',
        providerId: 2,
        avgCostPerPage: 500,
        materialsTurnInAt: '2021-06-17 01:07:33',
        providerRating: true,
        locationType: 'LOCATION_BASED',
        latitude: '34.0165128',
        longitude: '-118.4939147'
    },
    {
        id: 9,
        dateTime: '2021-06-08 08:48:21',
        status: 'COMPLETE',
        providerId: 2,
        avgCostPerPage: 475,
        materialsTurnInAt: '2021-06-21 09:02:45',
        providerRating: false,
        locationType: 'LOCATION_BASED',
        latitude: '34.0165128',
        longitude: '-118.4939147'
    },
    {
        id: 10,
        dateTime: '2021-06-10 10:29:09',
        status: 'COMPLETE',
        providerId: 2,
        avgCostPerPage: 525,
        materialsTurnInAt: '2021-06-20 20:05:09',
        providerRating: false,
        locationType: 'REMOTE',
        latitude: null,
        longitude: null
    },
    {
        id: 11,
        dateTime: '2021-06-11 09:45:57',
        status: 'COMPLETE',
        providerId: 2,
        avgCostPerPage: 625,
        materialsTurnInAt: '2021-06-25 12:09:57',
        providerRating: true,
        locationType: 'LOCATION_BASED',
        latitude: '34.0165128',
        longitude: '-118.4939147'
    },
    {
        id: 12,
        dateTime: '2021-06-13 10:29:09',
        status: 'COMPLETE',
        providerId: 2,
        avgCostPerPage: 600,
        materialsTurnInAt: '2021-06-23 08:05:09',
        providerRating: true, 
        locationType: 'LOCATION_BASED',
        latitude: '34.0165128',
        longitude: '-118.4939147'
    },
    {
        id: 13,
        dateTime: '2021-06-23 22:43:33',
        status: 'COMPLETE',
        providerId: 3,
        avgCostPerPage: 450,
        materialsTurnInAt: '2021-07-02 22:43:33',
        providerRating: true,
        locationType: 'REMOTE',
        latitude: null,
        longitude: null
    },
    {
        id: 14,
        dateTime: '2021-06-27 08:19:33',
        status: 'COMPLETE',
        providerId: 4,
        avgCostPerPage: 325,
        materialsTurnInAt: '2021-07-05 08:19:33',
        providerRating: true,
        locationType: 'REMOTE',
        latitude: null,
        longitude: null
    },
    {
        id: 15,
        dateTime: '2021-06-28 09:45:57',
        status: 'COMPLETE',
        providerId: 4,
        avgCostPerPage: 400,
        materialsTurnInAt: '2021-07-05 09:45:57',
        providerRating: true,
        locationType: 'REMOTE',
        latitude: null,
        longitude: null
    },
    {
        id: 16,
        dateTime: '2021-06-29 07:50:45',
        status: 'COMPLETE',
        providerId: 4,
        avgCostPerPage: 425,
        materialsTurnInAt: '2021-07-05 07:50:45',
        providerRating: true,
        locationType: 'REMOTE',
        latitude: null,
        longitude: null
    },
    {
        id: 17,
        dateTime: '2021-06-30 07:21:57',
        status: 'COMPLETE',
        providerId: 4,
        avgCostPerPage: 300,
        materialsTurnInAt: '2021-07-05 07:21:57',
        providerRating: true,
        locationType: 'REMOTE',
        latitude: null,
        longitude: null
    },
    {
        id: 18,
        dateTime: '2021-07-06 05:55:33',
        status: 'AWAITING MATERIALS',
        providerId: 1,
        avgCostPerPage: null,
        materialsTurnInAt: null,
        providerRating: false,
        locationType: 'LOCATION_BASED',
        latitude: '34.0165128',
        longitude: '-118.4939147'
    },
    {
        id: 19,
        dateTime: '2021-07-05 03:31:33',
        status: 'AWAITING MATERIALS',
        providerId: 1,
        avgCostPerPage: null,
        materialsTurnInAt: null,
        providerRating: false,
        locationType: 'LOCATION_BASED',
        latitude: '34.0165128',
        longitude: '-118.4939147'
    },
    {
        id: 20,
        dateTime: '2021-07-07 01:07:33',
        status: 'AWAITING MATERIALS',
        providerId: 2,
        avgCostPerPage: null,
        materialsTurnInAt: null,
        providerRating: false,
        locationType: 'REMOTE',
        latitude: null,
        longitude: null
    },
    {
        id: 21,
        dateTime: '2021-07-02 22:43:33',
        status: 'AWAITING MATERIALS',
        providerId: 2,
        avgCostPerPage: null,
        materialsTurnInAt: null,
        providerRating: false,
        locationType: 'LOCATION_BASED',
        latitude: '34.0165128',
        longitude: '-118.4939147'
    },
    {
        id: 22,
        dateTime: '2021-07-01 20:19:33',
        status: 'AWAITING MATERIALS',
        providerId: 3,
        avgCostPerPage: null,
        materialsTurnInAt: null,
        providerRating: false,
        locationType: 'LOCATION_BASED',
        latitude: '34.0165128',
        longitude: '-118.4939147'
    },
    {
        id: 23,
        dateTime: '2021-06-28 13:07:33',
        status: 'AWAITING MATERIALS',
        providerId: 4,
        avgCostPerPage: null,
        materialsTurnInAt: null,
        providerRating: false,
        locationType: 'REMOTE',
        latitude: null,
        longitude: null
    },
    {
        id: 24,
        dateTime: '2021-07-07 10:00:21',
        status: 'AWAITING MATERIALS',
        providerId: 4,
        avgCostPerPage: null,
        materialsTurnInAt: null,
        providerRating: false,
        locationType: 'LOCATION_BASED',
        latitude: '34.0165128',
        longitude: '-118.4939147'
    },
    {
        id: 25,
        dateTime: '2021-07-04 09:31:33',
        status: 'AWAITING MATERIALS',
        providerId: 4,
        avgCostPerPage: null,
        materialsTurnInAt: null,
        providerRating: false,
        locationType: 'LOCATION_BASED',
        latitude: '34.0165128',
        longitude: '-118.4939147'
    },
    {
        id: 26,
        dateTime: '2021-07-21 13:07:33',
        status: 'SCHEDULED',
        providerId: null,
        avgCostPerPage: null,
        materialsTurnInAt: null,
        providerRating: false,
        locationType: 'LOCATION_BASED',
        latitude: '34.008454',
        longitude: '-118.498543'
    },
    {
        id: 27,
        dateTime: '2021-07-22 12:09:57',
        status: 'SCHEDULED',
        providerId: null,
        avgCostPerPage: null,
        materialsTurnInAt: null,
        providerRating: false,
        locationType: 'LOCATION_BASED',
        latitude: '34.057388',
        longitude: '-118.248034'
    },
    {
        id: 28,
        dateTime: '2021-07-20 12:09:57',
        status: 'SCHEDULED',
        providerId: null,
        avgCostPerPage: null,
        materialsTurnInAt: null,
        providerRating: false,
        locationType: 'LOCATION_BASED',
        latitude: '34.054018',
        longitude: '-118.412388'
    },
    {
        id: 29,
        dateTime: '2021-07-19 11:41:09',
        status: 'SCHEDULED',
        providerId: null,
        avgCostPerPage: null,
        materialsTurnInAt: null,
        providerRating: false,
        locationType: 'REMOTE',
        latitude: '34.054018',
        longitude: '-118.412388'
    },
    {
        id: 30,
        dateTime: '2021-07-23 13:36:21',
        status: 'SCHEDULED',
        providerId: null,
        avgCostPerPage: null,
        materialsTurnInAt: null,
        providerRating: false,
        locationType: 'REMOTE',
        latitude: '34.054018',
        longitude: '-118.412388'
    },
    {
        id: 31,
        dateTime: '2021-07-23 13:36:21',
        status: 'SCHEDULED',
        providerId: null,
        avgCostPerPage: null,
        materialsTurnInAt: null,
        providerRating: false,
        locationType: 'REMOTE',
        latitude: '34.054018',
        longitude: '-118.412388'
    },
    {
        id: 32,
        dateTime: '2021-07-24 11:48:21',
        status: 'SCHEDULED',
        providerId: null,
        avgCostPerPage: null,
        materialsTurnInAt: null,
        providerRating: false,
        locationType: 'REMOTE',
        latitude: '34.054018',
        longitude: '-118.412388'
    }
]


// Note, these could also be dictionaries or key/value pairs (which are really just objects) instead of arrays