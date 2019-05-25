import {mergeResolvers} from "merge-graphql-schemas";
import University from "./university/";
import Student from "./student/"

const resolvers = [University, Student];

export default mergeResolvers(resolvers);
