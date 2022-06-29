import nc from 'next-connect';
import Translator from '../../models/Translator';
import db from '../../utils/db';
import data from '../../utils/data';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Translator.deleteMany();
  await Translator.insertMany(data.translators);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;
