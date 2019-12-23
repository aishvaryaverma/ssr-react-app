import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', async (req, res) => {
    const store = createStore();

    // some login to init
    // and load data into the store
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });

    // Promise.all(promises).then(() => {
    //     res.send(renderer(req, store));
    // });

    await Promise.all(promises);
    res.send(renderer(req, store));

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Listening on port ' + PORT));