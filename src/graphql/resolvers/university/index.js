import University from '../../../models/University';

export default {
    Query: {
        university: (root, args) => {
            return new Promise((resolve, reject) => {
                University.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                }) 
            })
        },
        universities: () => {
            return new Promise((resolve, reject) => {
                University.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        }
    },
    Mutation: {
        addUniversity: (root, {name, city, students}) => {
            const u = new University({name, city, students});

            return new Promise((resolve, reject) => {
                u.save((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        editUniversity: (root, {_id, name, city, students}) => {
            return new Promise((resolve, reject) => {
                University.findOneAndUpdate({_id}, {$set: {name, city, students}}, { new: true})
                .exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        deleteUniversity: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                University.findOneAndRemove({_id}).exec((err, res)=>{
                    err ? reject(err) : resolve(res);
                })
            });
        }
    }
}