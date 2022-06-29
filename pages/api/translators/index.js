import nc from 'next-connect';
import Translator from '../../../models/Translator';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const translators = await Translator.find({});
  await db.disconnect();
  res.send(translators);
});

export default handler;
