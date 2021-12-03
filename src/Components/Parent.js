
import React from 'react';

import Buttonks from './buttonsStore';
import Options2 from './moreOptions';
import BTNOutput from './TypeScript Start/Output';
export function Par()  {


    return (
        <div>

            <h2>This is a set of buttons that make an example of how to acquire and modify player variables
                BTNOutput has the way of acquiring data
                Buttonks has the way of modifying data
                
            </h2>
            <BTNOutput/>
            <Buttonks/>
            <h2>The following allows access and printing of crucial stats for the weapons. Allows for weapon switching
                and displays the skills each item allows, as well as the multiplier each one has.

            </h2>
            <Options2/>
        </div>
    )
}

