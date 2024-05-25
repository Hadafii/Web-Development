// script.js

const dataset = [
    { "Wahana": "Convoy Boat", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 21, "tinggi_minimum": 100 },
    { "Wahana": "Sepeda Gantung", "harga_weekday": 25000, "harga_weekend": 30000, "waktu_bermain": 36, "tinggi_minimum": 100 },
    { "Wahana": "Midi Skater", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 30, "tinggi_minimum": 100 },
    { "Wahana": "Tour Bus", "harga_weekday": 15000, "harga_weekend": 20000, "waktu_bermain": 40, "tinggi_minimum": 80 },
    { "Wahana": "Ular Coaster", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 5, "tinggi_minimum": 120 },
    { "Wahana": "Mini Swinger", "harga_weekday": 15000, "harga_weekend": 20000, "waktu_bermain": 15, "tinggi_minimum": 100 },
    { "Wahana": "Happy Boat", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 25, "tinggi_minimum": 80 },
    { "Wahana": "Convoy Car", "harga_weekday": 15000, "harga_weekend": 20000, "waktu_bermain": 28, "tinggi_minimum": 80 },
    { "Wahana": "Komidi Putar", "harga_weekday": 15000, "harga_weekend": 20000, "waktu_bermain": 24, "tinggi_minimum": 80 },
    { "Wahana": "Froggy", "harga_weekday": 10000, "harga_weekend": 15000, "waktu_bermain": 23, "tinggi_minimum": 80 },
    { "Wahana": "Happy Sky", "harga_weekday": 30000, "harga_weekend": 35000, "waktu_bermain": 26, "tinggi_minimum": 100 },
    { "Wahana": "Trampolin", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 31, "tinggi_minimum": 100 },
    { "Wahana": "Water Ball", "harga_weekday": 25000, "harga_weekend": 30000, "waktu_bermain": 12, "tinggi_minimum": 80 },
    { "Wahana": "Kangaroo Jump", "harga_weekday": 10000, "harga_weekend": 15000, "waktu_bermain": 10, "tinggi_minimum": 120 },
    { "Wahana": "Sky Ride", "harga_weekday": 30000, "harga_weekend": 35000, "waktu_bermain": 33, "tinggi_minimum": 120 },
    { "Wahana": "360 Pendulum", "harga_weekday": 25000, "harga_weekend": 30000, "waktu_bermain": 11, "tinggi_minimum": 135 },
    { "Wahana": "Star Chase", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 16, "tinggi_minimum": 100 },
    { "Wahana": "Gokart", "harga_weekday": 35000, "harga_weekend": 40000, "waktu_bermain": 35, "tinggi_minimum": 100 },
    { "Wahana": "Samba Baloon", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 17, "tinggi_minimum": 100 },
    { "Wahana": "Rumah Hantu", "harga_weekday": 25000, "harga_weekend": 30000, "waktu_bermain": 34, "tinggi_minimum": 100 },
    { "Wahana": "Sky Coopter", "harga_weekday": 25000, "harga_weekend": 30000, "waktu_bermain": 29, "tinggi_minimum": 120 },
    { "Wahana": "Kids Plane", "harga_weekday": 15000, "harga_weekend": 20000, "waktu_bermain": 14, "tinggi_minimum": 80 },
    { "Wahana": "Flying Tiger", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 22, "tinggi_minimum": 120 },
    { "Wahana": "Bumper Car", "harga_weekday": 20000, "harga_weekend": 25000, "waktu_bermain": 29, "tinggi_minimum": 120 }
];

function processForm() {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const tinggi = parseInt(document.getElementById('tinggi').value);
    const hari = document.getElementById('hari').value;
    const jam = parseInt(document.getElementById('jam').value);
    const menit = parseInt(document.getElementById('menit').value);
    const budget = parseInt(document.getElementById('budget').value);

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

    if (isNaN(tinggi)) {
        document.getElementById('tinggi-error').style.display = 'block';
        document.getElementById('tinggi').classList.add('is-invalid');
        isValid = false;
    }else if(tinggi < 150){
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
    }else if (menit > 24){
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

    if (!isValid) {
        return;
    }

    const total_minutes = jam * 60 + menit;
    const is_weekend = (hari === "Sabtu" || hari === "Minggu");
    
    let filteredDataset = dataset.filter(item => tinggi >= item.tinggi_minimum);
    
    let best_combination = [];
    let max_ride_time = 0;
    let total_ride_cost = 0;
    let all_combinations = [];
    
    function findCombinations(current_combination, current_index, current_cost, current_time) {
        if (current_cost > budget || current_time > total_minutes) {
            return;
        }
        if (current_time > max_ride_time) {
            max_ride_time = current_time;
            best_combination = [...current_combination];
            total_minutes = current_cost;
        }
        
        all_combinations.push([...current_combination]);

        for (let i = current_index; i < filteredDataset.length; i++) {
            let ride = filteredDataset[i];
            let ride_cost = is_weekend ? ride.harga_weekend : ride.harga_weekday;
            findCombinations([...current_combination, ride], i + 1, current_cost + ride_cost, current_time + ride.waktu_bermain);
        }
    }

    findCombinations([], 0, 0, 0);
    
    let resultHTML = `<h3>Algoritma BruteForce<br> Best Ride Combination for ${nama}</h3>`;
    resultHTML += "<ul>";
    best_combination.forEach(ride => {
        resultHTML += `<li>${ride.Wahana} - ${is_weekend ? ride.harga_weekend : ride.harga_weekday} Rp - ${ride.waktu_bermain} minutes</li>`;
    });
    resultHTML += "</ul>";
    resultHTML += `<p>Total Ride Time: ${max_ride_time} minutes</p>`;
    resultHTML += `<p>Total Ride Cost: Rp ${total_ride_cost} </p>`;

    resultHTML = `<h3>Algoritma BruteForce<br>All Combination for ${nama}</h3>`;
    resultHTML += "<ul>";
    all_combinations.forEach(combination => {
        let combination_cost = 0;
        let combination_time = 0;
        resultHTML += "<li><ul>";
        combination.forEach(ride => {
            let ride_cost = is_weekend ? ride.harga_weekend : ride.harga_weekday;
            resultHTML += `<li>${ride.Wahana} - ${ride_cost} Rp - ${ride.waktu_bermain} minutes</li>`;
            combination_cost += ride_cost;
            combination_time += ride.waktu_bermain;
        });
        resultHTML += `</ul><p>Total Ride Time: ${combination_time} minutes</p>`;
        resultHTML += `<p>Total Ride Cost: Rp ${combination_cost} </p></li>`;
    });
    resultHTML += "</ul>";
    
    
    document.getElementById('results').innerHTML = resultHTML;
}
