const mongoose = require('mongoose');

const campSchema = mongoose.Schema({
    admin:{type:String,required:true},
    address:{type:String,required:true},
    date:{type:String,required:true},
    time:{type:String,required:true},
    ask:{type:[String],required:true},
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
module.exports = mongoose.model('camp',campSchema);