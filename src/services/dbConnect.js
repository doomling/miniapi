const self = {}
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/coursers',  { useNewUrlParser: true })
mongoose.set('useFindAndModify', false);


const userModel = mongoose.model('user', {
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
    notes: { 
        type : Array , 
        default : [] 
    }
})

self.getUsers = () => {
    const data = userModel.find({}).then(data => {
        return data
    }).catch(function(err){
        console.log(err)
        return err
    })
    return data
}

self.getUser = (id) => {
    const user = userModel.findById(id).then(data => {
        return data
    }).catch(err => {
        return err
    })
    return user
}

self.saveUser = (data) => {
    const user = new userModel(data)
    const result = user.save().then(data => {
      console.log('saved')
      return result
    }).catch(err => {
        return err
    })
}

self.modifyUser = (id, data) => {
    userModel.findOneAndUpdate({ _id: id }, data, { new: true }, (data) => {
        return data
    }).catch(err => {
        return err
    })
}

module.exports = self