import mongoose from 'mongoose';

//Define schemes
const bookSchema = new  mongoose.Schema({
    title: { type : String, required: true },
    author: { type : String, required: true },
    published_date: { type: Date, default: Date.now  },
},
{
  timpestampes: true,
});

// Create new book
bookSchema.statics.create = function (payload) {   //statics 확인
  const book = new this(payload);
  return book.save();
}

//Find All
bookSchema.statics.findAll = function () {
  return this.find({});
};

// Find One
bookSchema.statics.findOneByBookid = function (bookid) {
  return this.findOne({ bookid });
}

// Update
bookSchema.statics.updateByBookid = function (bookid, payload) {
  // {new: true }: return the modified document rather than the original. defaults to false
  return this.findOneAndUpdate({ bookid }, payload, {new: true});
};

// Delete
bookSchema.statics.deleteByBookid = function (bookid) {
  return this.remove({ bookid });
}

module.exports = mongoose.model('book', bookSchema);