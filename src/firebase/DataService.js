


import { firebaseApp } from "../main";

class ListaFilmesDataService {
    getAll() {
        return firebaseApp.collection("/ListaFilmesMaster");
    }

    create(ListaFilmes) {
        return firebaseApp.collection("/ListaFilmesMaster").add(ListaFilmes);
    }

    update(id, value) {
        return firebaseApp.collection("/ListaFilmesMaster").doc(id).update(value);
    }

    delete(id) {
        return firebaseApp.collection("/ListaFilmesMaster").doc(id).delete();
    }
}

export default new ListaFilmesDataService();
