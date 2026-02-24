import express, {} from 'express';
const app = express();
app.use(express.json());
app.get('/', (_, res) => {
    res.send('curso typescript');
});
function createPet(id, name, species, age, adopted) {
    return {
        id,
        name,
        species,
        age,
        adopted,
    };
}
let id = 0;
function generateId() {
    return (id += 1);
}
app.post('/pets', (_, res) => {
    const pet1 = createPet(generateId(), 'katarina', 'cachorro', 7, true);
    const pet2 = createPet(generateId(), 'mia', 'gato', 8, true);
    res.send([pet1, pet2]);
});
export default app;
//# sourceMappingURL=app.js.map