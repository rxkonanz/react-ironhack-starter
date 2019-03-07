import {render, getAllByTestId} from 'react-testing-library';
import App from '../App';
import { existsSync } from 'fs';
import {Clock, getName} from '../App';
import React from 'react';

describe('tests all app functionality', () => {
    
    test('test get name without preferred name', () => {
        const payload = {
            firstName: 'alejandro',
            preferredName: ''
        };
        expect(getName(payload)).toMatch('alejandro');
    });

});
