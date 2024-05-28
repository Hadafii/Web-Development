// script.js

const dataset = [
    {"Wahana": "Convoy Boat",  "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 21, "tinggi_minimum": 100},
    {"Wahana": "Sepeda Gantung",  "harga_weekday": 25000, "harga_weekend": 30000, "waktu_bermain": 36, "tinggi_minimum": 100},
    {"Wahana": "Midi Skater", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 30, "tinggi_minimum": 100},
    {"Wahana": "Tour Bus", "harga_weekday": 15000, "harga_weekend": 20000, "waktu_bermain": 40, "tinggi_minimum": 80},
    {"Wahana": "Ular Coaster", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 5, "tinggi_minimum": 120},
    {"Wahana": "Mini Swinger", "harga_weekday": 15000, "harga_weekend": 20000, "waktu_bermain": 15, "tinggi_minimum": 100},
    {"Wahana": "Happy Boat", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 25, "tinggi_minimum": 80},
    {"Wahana": "Convoy Car", "harga_weekday": 15000, "harga_weekend": 20000, "waktu_bermain": 28, "tinggi_minimum": 80},
    {"Wahana": "Komidi Putar", "harga_weekday": 15000, "harga_weekend": 20000, "waktu_bermain": 24, "tinggi_minimum": 80},
    {"Wahana": "Froggy", "harga_weekday": 10000, "harga_weekend": 15000, "waktu_bermain": 23, "tinggi_minimum": 80},
    {"Wahana": "Happy Sky", "harga_weekday": 30000, "harga_weekend": 35000, "waktu_bermain": 26, "tinggi_minimum": 100},
    {"Wahana": "Trampolin", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 31, "tinggi_minimum": 100},
    {"Wahana": "Water Ball", "harga_weekday": 25000, "harga_weekend": 30000, "waktu_bermain": 12, "tinggi_minimum": 80},
    {"Wahana": "Kangaroo Jump", "harga_weekday": 10000, "harga_weekend": 15000, "waktu_bermain": 10, "tinggi_minimum": 120},
    {"Wahana": "Sky Ride", "harga_weekday": 30000, "harga_weekend": 35000, "waktu_bermain": 33, "tinggi_minimum": 120},
    {"Wahana": "360 Pendulum", "harga_weekday": 25000, "harga_weekend": 30000, "waktu_bermain": 11, "tinggi_minimum": 135},
    {"Wahana": "Star Chase", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 16, "tinggi_minimum": 100},
    {"Wahana": "Gokart", "harga_weekday": 35000, "harga_weekend": 40000, "waktu_bermain": 35, "tinggi_minimum": 100},
    {"Wahana": "Samba Baloon", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 17, "tinggi_minimum": 100},
    {"Wahana": "Rumah Hantu", "harga_weekday": 25000, "harga_weekend": 30000, "waktu_bermain": 34, "tinggi_minimum": 100},
    {"Wahana": "Sky Coopter", "harga_weekday": 25000, "harga_weekend": 30000, "waktu_bermain": 29, "tinggi_minimum": 120},
    {"Wahana": "Kids Plane", "harga_weekday": 15000, "harga_weekend": 20000, "waktu_bermain": 14, "tinggi_minimum": 80},
    {"Wahana": "Flying Tiger", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 22, "tinggi_minimum": 120},
    {"Wahana": "Bumper Car", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 37, "tinggi_minimum": 100},
    {"Wahana": "Flying Tornado", "harga_weekday": 25000, "harga_weekend": 30000, "waktu_bermain": 18, "tinggi_minimum": 135},
    {"Wahana": "Gold Mining Coaster", "harga_weekday": 30000, "harga_weekend": 35000, "waktu_bermain": 7, "tinggi_minimum": 120},
    {"Wahana": "Demolition Derby", "harga_weekday": 35000, "harga_weekend": 40000, "waktu_bermain": 20, "tinggi_minimum": 100},
    {"Wahana": "Dragon Coaster", "harga_weekday": 30000, "harga_weekend": 35000, "waktu_bermain": 6, "tinggi_minimum": 120},
    {"Wahana": "Flying Fox", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 27, "tinggi_minimum": 80},
    {"Wahana": "Sky Swinger", "harga_weekday": 30000, "harga_weekend": 35000, "waktu_bermain": 13, "tinggi_minimum": 100},
    {"Wahana": "Gatot Kaca Coaster", "harga_weekday": 30000, "harga_weekend": 35000, "waktu_bermain": 8, "tinggi_minimum": 120},
    {"Wahana": "Himalaya Coaster", "harga_weekday": 30000, "harga_weekend": 35000, "waktu_bermain": 9, "tinggi_minimum": 135},
    {"Wahana": "Ande-Ande Lumut", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 32, "tinggi_minimum": 80},
];

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

function getInputData() {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const tinggi = parseInt(document.getElementById('tinggi').value);
    const hari = document.getElementById('hari').value;
    const jam = parseInt(document.getElementById('jam').value);
    const menit = parseInt(document.getElementById('menit').value);
    const budget = parseInt(document.getElementById('budget').value);

    return { nama, email, tinggi, hari, jam, menit, budget };
}

function checkFormValidity(nama, email, tinggi, hari, jam, menit, budget) {

    let isValid = true;

    if (!nama) {
        document.getElementById('nama-error').style.display = 'block';
        document.getElementById('nama').classList.add('is-invalid');
        isValid = false;
    }else{
        document.getElementById('nama-error').style.display = 'none';
        document.getElementById('nama').classList.remove('is-invalid');
    }

    if (!email) {
        document.getElementById('email-error').style.display = 'block';
        document.getElementById('email').classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
        document.getElementById('email').classList.remove('is-invalid');
    }

    if (isNaN(tinggi) || tinggi < 80) {
        document.getElementById('tinggi-error').style.display = 'block';
        document.getElementById('tinggi').classList.add('is-invalid');
        isValid = false;
    }else {
        document.getElementById('tinggi-error').style.display = 'none';
        document.getElementById('tinggi').classList.remove('is-invalid');
    }
    
    if (hari === 'Pilih Hari') {
        document.getElementById('hari-error').style.display = 'block';
        document.getElementById('hari').classList.add('is-invalid');
        isValid = false;
    }else{
        document.getElementById('hari-error').style.display = 'none';
        document.getElementById('hari').classList.remove('is-invalid');
    }

    if (isNaN(jam)) {
        document.getElementById('jam-error-invalid').style.display = 'block';
        document.getElementById('jam').classList.add('is-invalid');
        isValid = false;
    }else if (jam > 24){
        document.getElementById('jam-error-kelebihan').style.display = 'block';
        document.getElementById('jam').classList.add('is-invalid');
        isValid = false;
    }else{
        document.getElementById('jam-error-invalid').style.display = 'none';
        document.getElementById('jam-error-kelebihan').style.display = 'none';
        document.getElementById('jam').classList.remove('is-invalid');
    }

    if (isNaN(menit)) {
        document.getElementById('menit-error-invalid').style.display = 'block';
        document.getElementById('menit').classList.add('is-invalid');
        isValid = false;
    }else if (menit > 59){
        document.getElementById('menit-error-kelebihan').style.display = 'block';
        document.getElementById('menit').classList.add('is-invalid');
        isValid = false;
    }else{
        document.getElementById('menit-error-invalid').style.display = 'none';
        document.getElementById('menit-error-kelebihan').style.display = 'none';
        document.getElementById('menit').classList.remove('is-invalid');
    }

    if (isNaN(budget) || budget < 0) {
        document.getElementById('budget-error').style.display = 'block';
        document.getElementById('budget').classList.add('is-invalid');
        isValid = false;
    }else{
        document.getElementById('budget-error').style.display = 'none';
        document.getElementById('budget').classList.remove('is-invalid');
    }

    return isValid;
}

function displayAllResults(results, executionTime, isWeekend) {
    const resultsContainer = document.getElementById('all-result');
    resultsContainer.innerHTML = '';

    results.forEach(result => {
        const methodTitle = document.createElement('h3');
        methodTitle.textContent = "GREEDY - Berdasarkan " + result.method;
        resultsContainer.appendChild(methodTitle);

        const table = document.createElement('table');
        table.classList.add('table');

        const thead = document.createElement('thead');
        thead.classList.add('table-light');

        const tbody = document.createElement('tbody');

        const tfoot = document.createElement('tfoot');

        // Header table
        const headerRow = document.createElement('tr');
        const headers = ['NO', 'Nama Wahana', 'Harga', 'Waktu Bermain', 'Tinggi Minimum'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.setAttribute('scope', 'col');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Body table
        let totalWaktu = 0;
        let totalHarga = 0;
        result.combination.forEach((item, index) => {
            const tr = document.createElement('tr');

            const tdNo = document.createElement('th');
            tdNo.setAttribute('scope', 'row');
            tdNo.textContent = index + 1;
            tr.appendChild(tdNo);

            const tdNama = document.createElement('td');
            tdNama.textContent = item.Wahana;
            tr.appendChild(tdNama);

            const tdHarga = document.createElement('td');
            const harga = isWeekend ? item.harga_weekend : item.harga_weekday;
            tdHarga.textContent = harga;
            totalHarga += harga;
            tr.appendChild(tdHarga);

            const tdWaktu = document.createElement('td');
            tdWaktu.textContent = item.waktu_bermain;
            totalWaktu += item.waktu_bermain;
            tr.appendChild(tdWaktu);

            const tdTinggi = document.createElement('td');
            tdTinggi.textContent = item.tinggi_minimum;
            tr.appendChild(tdTinggi);

            tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        // Footer table
        const footerRow = document.createElement('tr');
        const tdTotalLabel = document.createElement('th');
        tdTotalLabel.setAttribute('scope', 'row');
        tdTotalLabel.textContent = 'TOTAL';
        footerRow.appendChild(tdTotalLabel);

        footerRow.appendChild(document.createElement('td'))

        const tdTotalHarga = document.createElement('td');
        tdTotalHarga.textContent = totalHarga;
        footerRow.appendChild(tdTotalHarga);

        const tdTotalWaktu = document.createElement('td');
        tdTotalWaktu.textContent = totalWaktu;
        footerRow.appendChild(tdTotalWaktu);

        footerRow.appendChild(document.createElement('td'));

        tfoot.appendChild(footerRow);
        table.appendChild(tfoot);

        resultsContainer.appendChild(table);

        // Add execution stats
        const stats = document.createElement('div');
        stats.innerHTML = `
            <p>Total waktu eksekusi: ${executionTime.toFixed(2)} ms</p>
            <p>Total kombinasi yang memenuhi diperiksa: ${result.combination.length}</p>
        `;
        resultsContainer.appendChild(stats);
    });
}
 
function displayResults(bestCombination, executionTime, totalCombinations, isWeekend, method) {
    const bestResultContainer = document.getElementById('best-result');
    bestResultContainer.innerHTML = '';

    if (bestCombination.length > 0) {
        const h2Title = document.createElement('h2');
        const bBold = document.createElement('b');
        bBold.setAttribute('id', 'method');
        bBold.textContent = 'KOMBINASI TERBAIK BERDASARKAN ' + method;
        h2Title.appendChild(bBold);
        bestResultContainer.appendChild(h2Title);
        
        document.getElementById('RESULT').style.display = 'block';
        document.getElementById('best-result').classList.add('text-center');

        const table = document.createElement('table');
        table.classList.add('table');

        const thead = document.createElement('thead');
        thead.classList.add('table-light');

        const tbody = document.createElement('tbody');

        const tfoot = document.createElement('tfoot');

        // Header table
        const headerRow = document.createElement('tr');
        const headers = ['NO', 'Nama Wahana', 'Harga', 'Waktu Bermain', 'Tinggi Minimum'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.setAttribute('scope', 'col');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Body table
        let totalWaktu = 0;
        let totalHarga = 0;
        bestCombination.forEach((item, index) => {
            const tr = document.createElement('tr');

            const tdNo = document.createElement('th');
            tdNo.setAttribute('scope', 'row');
            tdNo.textContent = index + 1;
            tr.appendChild(tdNo);

            const tdNama = document.createElement('td');
            tdNama.textContent = item.Wahana;
            tr.appendChild(tdNama);

            const tdHarga = document.createElement('td');
            const harga = isWeekend ? item.harga_weekend : item.harga_weekday;
            tdHarga.textContent = harga;
            totalHarga += harga;
            tr.appendChild(tdHarga);

            const tdWaktu = document.createElement('td');
            tdWaktu.textContent = item.waktu_bermain;
            totalWaktu += item.waktu_bermain;
            tr.appendChild(tdWaktu);

            const tdTinggi = document.createElement('td');
            tdTinggi.textContent = item.tinggi_minimum;
            tr.appendChild(tdTinggi);

            tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        // Footer table
        const footerRow = document.createElement('tr');
        const tdTotalLabel = document.createElement('th');
        tdTotalLabel.setAttribute('scope', 'row');
        tdTotalLabel.textContent = 'TOTAL';
        footerRow.appendChild(tdTotalLabel);

        footerRow.appendChild(document.createElement('td'))

        const tdTotalHarga = document.createElement('td');
        tdTotalHarga.textContent = totalHarga;
        footerRow.appendChild(tdTotalHarga);

        const tdTotalWaktu = document.createElement('td');
        tdTotalWaktu.textContent = totalWaktu;
        footerRow.appendChild(tdTotalWaktu);

        footerRow.appendChild(document.createElement('td'));

        tfoot.appendChild(footerRow);
        table.appendChild(tfoot);

        bestResultContainer.appendChild(table);

        // Add execution stats
        const stats = document.createElement('div');
        stats.innerHTML = `
            <p>Total waktu eksekusi: ${executionTime.toFixed(2)} ms</p>
            <p>Total kombinasi yang memenuhi diperiksa: ${totalCombinations}</p>
        `;
        bestResultContainer.appendChild(stats);
    } else {
        bestResultContainer.innerHTML = '<p>Tidak ada kombinasi yang memenuhi kriteria.</p>';
    }
}    


//fungsi button//fungsi button//fungsi button//fungsi button//fungsi button//fungsi button//fungsi button//fungsi button//fungsi button//fungsi button

function BestBacktracking() {
    const { nama, email, tinggi, hari, jam, menit, budget } = getInputData();

    if (!checkFormValidity(nama, email, tinggi, hari, jam, menit, budget)) {
        return;
    }

    const isWeekend = (hari === 'Sabtu' || hari === 'Minggu');
    const totalMinutes = parseInt(jam) * 60 + parseInt(menit);
    let bestCombination = null;
    let totalCombinations = 0;

    const startTime = performance.now();

    function findCombinations(currentIndex, currentBudget, currentTime, currentCombination) {
        totalCombinations++;

        if (currentBudget <= 0 || currentTime <= 0 || currentIndex >= dataset.length) {
            if (bestCombination === null || currentCombination.length > bestCombination.length) {
                bestCombination = currentCombination.slice();
            }
            return;
        }

        for (let i = currentIndex; i < dataset.length; i++) {
            const wahana = dataset[i];
            const harga = isWeekend ? wahana.harga_weekend : wahana.harga_weekday;

            if (wahana.tinggi_minimum <= tinggi && harga <= currentBudget && wahana.waktu_bermain <= currentTime) {
                currentCombination.push(wahana);
                findCombinations(i + 1, currentBudget - harga, currentTime - wahana.waktu_bermain, currentCombination);
                currentCombination.pop();
            }
        }

        if (bestCombination === null || currentCombination.length > bestCombination.length) {
            bestCombination = currentCombination.slice();
        }
    }

    findCombinations(0, budget, totalMinutes, []);

    const endTime = performance.now();
    const executionTime = endTime - startTime;

    displayResults(bestCombination, executionTime, totalCombinations, isWeekend,'BACKTRACKING');

    document.getElementById('kemungkinanBacktrack').style.display='block';
    document.getElementById('hasilGreedy').style.display='none';
    document.getElementById('tombolBook').style.display='block';
    document.getElementById('all-result').innerHTML = '';
}

function AllBacktracking() {
    const { nama, email, tinggi, hari, jam, menit, budget } = getInputData();

    if (!checkFormValidity(nama, email, tinggi, hari, jam, menit, budget)) {
        return;
    }

    const totalWaktuBermain = parseInt(jam) * 60 + parseInt(menit);
    const isWeekend = (hari === 'Sabtu' || hari === 'Minggu');
    const MAX_COMBINATIONS_TO_DISPLAY = 10; // Max number of combinations to display

    let allCombinations = [];

    function findAllCombinations(index, currentBudget, currentWaktuBermain, currentCombination) {
        if (currentBudget < 0 || currentWaktuBermain > totalWaktuBermain) {
            return;
        }
        if (index >= dataset.length) {
            if (currentCombination.length > 0) {
                allCombinations.push({
                    combination: currentCombination.slice(),
                    totalHarga: budget - currentBudget,
                    totalWaktu: currentWaktuBermain
                });
            }
            return;
        }
        const item = dataset[index];
        const harga = isWeekend ? item.harga_weekend : item.harga_weekday;
        if (tinggi >= item.tinggi_minimum) {
            currentCombination.push(item);
            findAllCombinations(
                index + 1,
                currentBudget - harga,
                currentWaktuBermain + item.waktu_bermain,
                currentCombination
            );
            currentCombination.pop();
        }
        findAllCombinations(index + 1, currentBudget, currentWaktuBermain, currentCombination);
    }

    findAllCombinations(0, budget, 0, []);

    const allResultContainer = document.getElementById('all-result');
    allResultContainer.innerHTML = '';

    if (allCombinations.length > 0) {
        document.getElementById('bagianresult').style.display = 'block';

        const h2Title = document.createElement('h2');
        const bBold = document.createElement('b');
        bBold.textContent = 'BEBERAPA HASIL BACKTRACKING';
        h2Title.appendChild(bBold);
        allResultContainer.appendChild(h2Title);
    
        const numCombinationsToDisplay = Math.min(MAX_COMBINATIONS_TO_DISPLAY, allCombinations.length);

        for (let i = 0; i < numCombinationsToDisplay; i++) {
            const combination = allCombinations[i];
            const div = document.createElement('div');
            div.classList.add('mb-4');

            const header = document.createElement('h4');
            header.textContent = `Kombinasi ${i + 1}:`;
            div.appendChild(header);

            const table = document.createElement('table');
            table.classList.add('table');

            const thead = document.createElement('thead');
            thead.classList.add('table-light');

            const tbody = document.createElement('tbody');

            const tfoot = document.createElement('tfoot');

            // Header table
            const headerRow = document.createElement('tr');
            const headers = ['NO', 'Nama Wahana', 'Harga', 'Waktu Bermain', 'Tinggi Minimum'];
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.setAttribute('scope', 'col');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            // Body table
            combination.combination.forEach((item, index) => {
                const tr = document.createElement('tr');

                const tdNo = document.createElement('th');
                tdNo.setAttribute('scope', 'row');
                tdNo.textContent = index + 1;
                tr.appendChild(tdNo);

                const tdNama = document.createElement('td');
                tdNama.textContent = item.Wahana;
                tr.appendChild(tdNama);

                const tdHarga = document.createElement('td');
                const harga = isWeekend ? item.harga_weekend : item.harga_weekday;
                tdHarga.textContent = harga;
                tr.appendChild(tdHarga);

                const tdWaktu = document.createElement('td');
                tdWaktu.textContent = item.waktu_bermain;
                tr.appendChild(tdWaktu);

                const tdTinggi = document.createElement('td');
                tdTinggi.textContent = item.tinggi_minimum;
                tr.appendChild(tdTinggi);

                tbody.appendChild(tr);
            });
            table.appendChild(tbody);

            // Footer table
            const footerRow = document.createElement('tr');
            const tdTotalLabel = document.createElement('th');
            tdTotalLabel.setAttribute('scope', 'row');
            tdTotalLabel.textContent = 'TOTAL';
            footerRow.appendChild(tdTotalLabel);

            footerRow.appendChild(document.createElement('td'));

            const tdTotalHarga = document.createElement('td');
            tdTotalHarga.textContent = combination.totalHarga;
            footerRow.appendChild(tdTotalHarga);

            const tdTotalWaktu = document.createElement('td');
            tdTotalWaktu.textContent = combination.totalWaktu;
            footerRow.appendChild(tdTotalWaktu);

            footerRow.appendChild(document.createElement('td'));

            tfoot.appendChild(footerRow);
            table.appendChild(tfoot);

            div.appendChild(table);
            allResultContainer.appendChild(div);
        }
    } else {
        allResultContainer.innerHTML = '<p>Tidak ada kombinasi yang memenuhi kriteria.</p>';
    }
}

// Compare functions
function compareByWaktuBermain(a, b) {
    return a.waktu_bermain - b.waktu_bermain;
}

function compareByHarga(a, b) {
    return a.harga_weekday - b.harga_weekday;
}

function compareByDensity(a, b) {
    const densityA = a.waktu_bermain / a.harga_weekday;
    const densityB = b.waktu_bermain / b.harga_weekday;
    return densityA - densityB;
}

// Greedy algorithm function
function BestGreedy(compareFunction) {
    const { nama, email, tinggi, hari, jam, menit, budget } = getInputData();

    if (!checkFormValidity(nama, email, tinggi, hari, jam, menit, budget)) {
        return null;
    }

    const isWeekend = (hari === 'Sabtu' || hari === 'Minggu');
    const totalMinutes = jam * 60 + menit;
    let availableBudget = budget;
    let availableTime = totalMinutes;

    const sortedDataset = [...dataset].sort(compareFunction);
    const selectedWahana = [];

    for (const wahana of sortedDataset) {
        const harga = isWeekend ? wahana.harga_weekend : wahana.harga_weekday;
        if (wahana.tinggi_minimum <= tinggi && harga <= availableBudget && wahana.waktu_bermain <= availableTime) {
            selectedWahana.push(wahana);
            availableBudget -= harga;
            availableTime -= wahana.waktu_bermain;
        }
    }

    return selectedWahana;
    //displayResults
}

// Function to compare and select the best greedy combination
function bestCombinationGreedy() {
    const startTime = performance.now();

    const byWaktu = BestGreedy(compareByWaktuBermain);
    const byHarga = BestGreedy(compareByHarga);
    const byDensity = BestGreedy(compareByDensity);

    const allResults = [byWaktu, byHarga, byDensity];
    const bestCombination = allResults.reduce((best, current) => (current.length > best.length ? current : best), []);

    const endTime = performance.now();
    const executionTime = endTime - startTime;
    const totalCombinations = allResults.length;

    displayResults(bestCombination, executionTime, totalCombinations, document.getElementById('hari').value === 'Sabtu' || document.getElementById('hari').value === 'Minggu', "GREEDY");

    document.getElementById('kemungkinanBacktrack').style.display='none';
    document.getElementById('hasilGreedy').style.display='block';
    document.getElementById('tombolBook').style.display='block';
    document.getElementById('all-result').innerHTML = '';


}

// Function to display all greedy results
function tampilkanSemuaGreedy() {
    const startTime = performance.now();

    const byWaktu = BestGreedy(compareByWaktuBermain);
    const byHarga = BestGreedy(compareByHarga);
    const byDensity = BestGreedy(compareByDensity);

    const endTime = performance.now();
    const executionTime = endTime - startTime;

    const isWeekend = document.getElementById('hari').value === 'Sabtu' || document.getElementById('hari').value === 'Minggu';

    displayAllResults([
        { combination: byWaktu, method: "Waktu Bermain" },
        { combination: byHarga, method: "Harga" },
        { combination: byDensity, method: "Density" }
    ], executionTime, isWeekend);
}






