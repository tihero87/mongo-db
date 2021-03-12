const { MongoClient } = require('mongodb');

const client = new MongoClient(
        'URL',
        {useUnifiedTopology: true}
    );

const start = async () => {
  try{
      await client.connect();
      console.log('Подключение установлено ...');
      //await client.db().createCollection('users');
      const users = client.db().collection('users');
      let person = 'Elena';
      const user = await users.findOne({name: `${person}`});
      if(!user){
          await users.insertOne({ name: `${person}`, age: '21' });
          const ins_user = await users.findOne({ name: `${person}` });
          console.log('Добавлен пользователь ', ins_user);
      }

  } catch (e) {
      console.log(e);
  }
};
start();
