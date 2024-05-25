// script.js

const dataset = [
    {"Wahana 1": "Convoy Boat",  "harga weekday": 20000, "harga weekend": 25000, "waktu bermain": 21, "tinggi minimum": 100},
    {"Wahana 2": "Sepeda Gantung",  "harga weekday": 25000, "harga weekend": 30000, "waktu bermain": 36, "tinggi minimum": 100},
    {"Wahana 3": "Midi Skater", "harga weekday": 20000, "harga weekend": 25000, "waktu bermain": 30, "tinggi minimum": 100},
    {"Wahana 4": "Tour Bus", "harga weekday": 15000, "harga weekend": 20000, "waktu bermain": 40, "tinggi minimum": 80},
    {"Wahana 5": "Ular Coaster", "harga weekday": 20000, "harga weekend": 25000, "waktu bermain": 5, "tinggi minimum": 120},
    {"Wahana 6": "Mini Swinger", "harga weekday": 15000, "harga weekend": 20000, "waktu bermain": 15, "tinggi minimum": 100},
    {"Wahana 7": "Happy Boat", "harga weekday": 20000, "harga weekend": 25000, "waktu bermain": 25, "tinggi minimum": 80},
    {"Wahana 8": "Convoy Car", "harga weekday": 15000, "harga weekend": 20000, "waktu bermain": 28, "tinggi minimum": 80},
    {"Wahana 9": "Komidi Putar", "harga weekday": 15000, "harga weekend": 20000, "waktu bermain": 24, "tinggi minimum": 80},
    {"Wahana 10": "Froggy", "harga weekday": 10000, "harga weekend": 15000, "waktu bermain": 23, "tinggi minimum": 80},
    {"Wahana 11": "Happy Sky", "harga weekday": 30000, "harga weekend": 35000, "waktu bermain": 26, "tinggi minimum": 100},
    {"Wahana 12": "Trampolin", "harga weekday": 20000, "harga weekend": 25000, "waktu bermain": 31, "tinggi minimum": 100},
    {"Wahana 13": "Water Ball", "harga weekday": 25000, "harga weekend": 30000, "waktu bermain": 12, "tinggi minimum": 80},
    {"Wahana 14": "Kangaroo Jump", "harga weekday": 10000, "harga weekend": 15000, "waktu bermain": 10, "tinggi minimum": 120},
    {"Wahana 15": "Sky Ride", "harga weekday": 30000, "harga weekend": 35000, "waktu bermain": 33, "tinggi minimum": 120},
    {"Wahana 16": "360 Pendulum", "harga weekday": 25000, "harga weekend": 30000, "waktu bermain": 11, "tinggi minimum": 135},
    {"Wahana 17": "Star Chase", "harga weekday": 20000, "harga weekend": 25000, "waktu bermain": 16, "tinggi minimum": 100},
    {"Wahana 18": "Gokart", "harga weekday": 35000, "harga weekend": 40000, "waktu bermain": 35, "tinggi minimum": 100},
    {"Wahana 19": "Samba Baloon", "harga weekday": 20000, "harga weekend": 25000, "waktu bermain": 17, "tinggi minimum": 100},
    {"Wahana 20": "Rumah Hantu", "harga weekday": 25000, "harga weekend": 30000, "waktu bermain": 34, "tinggi minimum": 100},
    {"Wahana 21": "Sky Coopter", "harga weekday": 25000, "harga weekend": 30000, "waktu bermain": 29, "tinggi minimum": 120},
    {"Wahana 22": "Kids Plane", "harga weekday": 15000, "harga weekend": 20000, "waktu bermain": 14, "tinggi minimum": 80},
    {"Wahana 23": "Flying Tiger", "harga weekday": 20000, "harga weekend": 25000, "waktu bermain": 22, "tinggi minimum": 120},
    {"Wahana 24": "Bumper Car", "harga weekday": 20000, "harga weekend": 25000, "waktu bermain": 29, "tinggi minimum": 100},
    {"Wahana 25": "Flying Tornado", "harga weekday": 25000, "harga weekend": 30000, "waktu bermain": 18, "tinggi minimum": 135},
    {"Wahana 26": "Gold Mining Coaster", "harga weekday": 30000, "harga weekend": 35000, "waktu bermain": 7, "tinggi minimum": 120},
    {"Wahana 27": "Demolition Derby", "harga weekday": 35000, "harga weekend": 40000, "waktu bermain": 20, "tinggi minimum": 100},
    {"Wahana 28": "Dragon Coaster", "harga weekday": 30000, "harga weekend": 35000, "waktu bermain": 6, "tinggi minimum": 120},
    {"Wahana 29": "Flying Fox", "harga weekday": 20000, "harga weekend": 25000, "waktu bermain": 27, "tinggi minimum": 80},
    {"Wahana 30": "Sky Swinger", "harga weekday": 30000, "harga weekend": 35000, "waktu bermain": 13, "tinggi minimum": 100},
    {"Wahana 31": "Gatot Kaca Coaster", "harga weekday": 30000, "harga weekend": 35000, "waktu bermain": 8, "tinggi minimum": 120},
    {"Wahana 32": "Himalaya Coaster", "harga weekday": 30000, "harga weekend": 35000, "waktu bermain": 9, "tinggi minimum": 135},
    {"Wahana 33": "Ande-Ande Lumut", "harga weekday": 20000, "harga weekend": 25000, "waktu bermain": 32, "tinggi minimum": 80},
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
    }else if(tinggi < 80){
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
