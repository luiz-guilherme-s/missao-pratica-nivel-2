let valores = [];

// Função para adicionar um valor à lista
function add() {
    const inputValor = document.getElementById("valor").value;
    if (inputValor !== "") {
        valores.push(parseInt(inputValor));  // Adiciona o valor à lista
        document.getElementById("valor").value = "";  // Limpa o campo de entrada
        atualizarLista();  // Atualiza a exibição da lista
    } else {
        alert("Digite um valor válido!");  // Verifica se o campo está vazio
    }
}

// Função para ordenar os valores
function ordenar() {
    const tipoOrdenacao = document.getElementById("tipoOrdenacao").value;

    if (tipoOrdenacao === "bubble") {
        bubbleSort();
    } else if (tipoOrdenacao === "selection") {
        selectionSort();
    } else if (tipoOrdenacao === "quick") {
        quickSort(valores, 0, valores.length - 1);
    }

    atualizarLista();
}

// Função para misturar os valores
function misturar() {
    for (let i = valores.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [valores[i], valores[j]] = [valores[j], valores[i]];  // Mistura os valores
    }
    atualizarLista();  // Atualiza a exibição da lista
}

// Função para atualizar a lista de valores na tela
function atualizarLista() {
    const ul = document.getElementById("valores");
    ul.innerHTML = "";  // Limpa a lista antes de atualizar
    valores.forEach(valor => {
        const li = document.createElement("li");
        li.textContent = valor;
        ul.appendChild(li);  // Adiciona cada valor à lista no HTML
    });
}

// Algoritmo Bubble Sort
function bubbleSort() {
    let n = valores.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (valores[j] > valores[j + 1]) {
                [valores[j], valores[j + 1]] = [valores[j + 1], valores[j]];  // Troca de valores
            }
        }
    }
}

// Algoritmo Selection Sort
function selectionSort() {
    let n = valores.length;
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (valores[j] < valores[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [valores[i], valores[min]] = [valores[min], valores[i]];  // Troca de valores
        }
    }
}

// Algoritmo Quick Sort
function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);  // Ordena antes do pivô
        quickSort(arr, pi + 1, high);  // Ordena depois do pivô
    }
}

function partition(arr, low, high) {
    let pivot = arr[high];  // Pivô
    let i = (low - 1);  // Índice do menor elemento

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];  // Troca de valores
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return (i + 1);
}
