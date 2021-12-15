export default class TileMaps {

    // __________________________________________ //
    //               ** LEGEND: **                //
    // ------------------------------------------ //
    //   Top  |   Event    | Bottom |   Event     //
    // ------------------------------------------ //
    // [0][0] | Start      | [1][0] | Start       //
    // [0][1] | Treasure   | [1][0] | Event       //
    // [0][2] | Fight      | [1][0] | Fight       //
    // [0][2] | Shop       | [1][0] | Event       //
    // [0][2] | Fight      | [1][0] | Fight       //
    // [0][2] | Event      | [1][0] | Treasure    //
    // [0][2] | Fight      | [1][0] | Fight       //
    // [0][2] | Boss       | [1][0] | Boss        //
    // __________________________________________ //

    tileMaps = [
        [
            // Start
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 3, 2, 4, 2, 4, 2, 1, 1, 
                1, 8, 2, 6, 2, 6, 2, 6, 7, 1,
                1, 1, 5, 2, 5, 2, 3, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            // Treasure
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 8, 2, 4, 2, 4, 2, 1, 1, 
                1, 2, 2, 6, 2, 6, 2, 6, 7, 1,
                1, 1, 2, 2, 5, 2, 3, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            // Fight
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 2, 2, 4, 2, 4, 2, 1, 1, 
                1, 2, 2, 8, 2, 6, 2, 6, 7, 1,
                1, 1, 2, 2, 5, 2, 3, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            // Shop
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 2, 2, 8, 2, 4, 2, 1, 1, 
                1, 2, 2, 2, 2, 6, 2, 6, 7, 1,
                1, 1, 2, 2, 2, 2, 3, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            // Fight
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 2, 2, 2, 2, 4, 2, 1, 1, 
                1, 2, 2, 2, 2, 8, 2, 6, 7, 1,
                1, 1, 2, 2, 2, 2, 3, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            // Event
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 2, 2, 2, 2, 8, 2, 1, 1, 
                1, 2, 2, 2, 2, 2, 2, 6, 7, 1,
                1, 1, 2, 2, 2, 2, 2, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            // Fight
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 
                1, 2, 2, 2, 2, 2, 2, 8, 7, 1,
                1, 1, 2, 2, 2, 2, 2, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            // Boss
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 
                1, 2, 2, 2, 2, 2, 2, 2, 8, 1,
                1, 1, 2, 2, 2, 2, 2, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
        ],
        [
            // Start
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 3, 2, 4, 2, 4, 2, 1, 1, 
                1, 8, 2, 6, 2, 6, 2, 6, 7, 1,
                1, 1, 5, 2, 5, 2, 3, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            // Event
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 2, 2, 4, 2, 4, 2, 1, 1, 
                1, 2, 2, 6, 2, 6, 2, 6, 7, 1,
                1, 1, 8, 2, 5, 2, 3, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            // Fight
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 2, 2, 4, 2, 4, 2, 1, 1, 
                1, 2, 2, 8, 2, 6, 2, 6, 7, 1,
                1, 1, 2, 2, 5, 2, 3, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            // Event
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 2, 2, 2, 2, 4, 2, 1, 1, 
                1, 2, 2, 2, 2, 6, 2, 6, 7, 1,
                1, 1, 2, 2, 8, 2, 3, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            // Fight
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 2, 2, 2, 2, 4, 2, 1, 1, 
                1, 2, 2, 2, 2, 8, 2, 6, 7, 1,
                1, 1, 2, 2, 2, 2, 3, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            // Treasure
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 
                1, 2, 2, 2, 2, 2, 2, 6, 7, 1,
                1, 1, 2, 2, 2, 2, 8, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            // Fight
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 
                1, 2, 2, 2, 2, 2, 2, 8, 7, 1,
                1, 1, 2, 2, 2, 2, 2, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            // Boss
            [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 
                1, 2, 2, 2, 2, 2, 2, 2, 8, 1,
                1, 1, 2, 2, 2, 2, 2, 2, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
        ]
    ]
}