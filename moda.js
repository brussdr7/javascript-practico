const lista1 = [1,2,4,2,4,2,1,3,5,3,5,2,6,2,4,,7];

const listaCount = {};

lista1.map(
    function (elemento) {
        if(listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }
);