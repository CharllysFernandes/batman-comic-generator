const ballonRobin = document.getElementById('ballonRobin');
const inputRobin = document.getElementById('inputRobin')

inputRobin.addEventListener('change', function () {
    ballonRobin.innerHTML = inputRobin.value
})