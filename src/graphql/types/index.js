import {mergeTypes} from 'merge-graphql-schemas';
import University from './university/';
import Student from './student/';

const types = [University, Student];

export default mergeTypes(types, {all: true});