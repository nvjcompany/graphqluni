import Student from '../../../models/Student';

export default {
    Query: {
        student: (root, args) => {
            return new Promise((resolve, reject) => {
                Student.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                }) 
            })
        },
        students: () => {
            return new Promise((resolve, reject) => {
                Student.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        }
    },
    Mutation: {
        addStudent: (root, {name, specialty, city, university}) => {
            const student = new Student({name, specialty, city, university});

            return new Promise((resolve, reject) => {
                student.save((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        editStudent: (root, {_id, name, specialty, city, university}) => {
            return new Promise((resolve, reject) => {
                Student.findOneAndUpdate({_id}, {$set: {name, specialty, city, university}})
                .exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        deleteStudent: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                Student.findOneAndRemove({_id}).exec((err, res)=>{
                    err ? reject(err) : resolve(res);
                })
            });
        }
    }
}