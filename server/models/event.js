import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: 'String', required: true },
  code: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  created: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Event', eventSchema);
